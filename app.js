/* ===== App State ===== */
const state = {
  country: '',
  level: '',
  sort: 'name',
  search: '',
  price: false,
  individual: false,
  boarding: false,
  beach: false,
  atp: false,
  top10: false,
  showFavorites: false,
  viewMode: 'list'
};

/* ===== Compare State ===== */
const compareSet = new Set();

/* ===== Favorites ===== */
function getFavorites() {
  try { return JSON.parse(localStorage.getItem('tennis-favorites')) || []; }
  catch { return []; }
}
function saveFavorites(favs) {
  localStorage.setItem('tennis-favorites', JSON.stringify(favs));
}
function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) favs = favs.filter(f => f !== id);
  else favs.push(id);
  saveFavorites(favs);
  updateFavButton();
  if (state.showFavorites) applyAndRender();
  else updateHeartIcons();
}
function updateHeartIcons() {
  const favs = getFavorites();
  document.querySelectorAll('.fav-heart').forEach(el => {
    const id = el.dataset.id;
    const isFav = favs.includes(id);
    el.textContent = isFav ? '♥' : '♡';
    el.classList.toggle('active', isFav);
  });
}
function updateFavButton() {
  const favs = getFavorites();
  const btn = document.getElementById('toggleFavorites');
  const count = favs.length;
  btn.innerHTML = count > 0 ? `❤️ My Shortlist <span class="fav-badge">${count}</span>` : '❤️ My Shortlist';
}

/* ===== Map State ===== */
let leafletMap = null;
let mapMarkers = [];

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  populateCountryDropdown();
  loadStateFromHash();
  bindEvents();
  updateFavButton();
  applyAndRender();
  animateStats();
});

/* ===== Stats Dashboard ===== */
function animateStats() {
  const stats = {
    countries: new Set(ACADEMIES.map(a => a.country)).size,
    academies: ACADEMIES.length,
    atpWta: ACADEMIES.filter(a => a.coaches.some(c => c.atpWta)).length,
    boarding: ACADEMIES.filter(a => a.boarding).length,
    beach: ACADEMIES.filter(a => typeof a.beach.distance === 'number').length
  };

  const els = document.querySelectorAll('.stat-number[data-stat]');
  els.forEach(el => {
    const key = el.getAttribute('data-stat');
    const target = stats[key] || 0;
    el.setAttribute('data-target', target);
  });

  const statsBar = document.getElementById('statsBar');
  if (!statsBar) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCountAnimation();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(statsBar);
}

function runCountAnimation() {
  const duration = 1500;
  const els = document.querySelectorAll('.stat-number[data-target]');
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    els.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      el.textContent = Math.round(target * ease);
    });

    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ===== Populate Country Dropdown ===== */
function populateCountryDropdown() {
  const sel = document.getElementById('filterCountry');
  COUNTRIES.sort().forEach(c => {
    const flag = ACADEMIES.find(a => a.country === c)?.countryFlag || '';
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = `${flag} ${c}`;
    sel.appendChild(opt);
  });
}

/* ===== Filter Functions ===== */
function filterByCountry(academies, country) {
  if (!country) return academies;
  return academies.filter(a => a.country === country);
}

function filterByLevel(academies, level) {
  if (!level) return academies;
  return academies.filter(a => {
    const l = a.level.toLowerCase();
    if (level === 'Junior') return l.includes('junior') || l.includes('dev');
    return l.includes(level.toLowerCase());
  });
}

function filterByIndividualLessons(academies) {
  return academies.filter(a => a.individualLessons === true);
}

function filterByBoarding(academies) {
  return academies.filter(a => a.boarding === true);
}

function filterByBeach(academies) {
  return academies.filter(a => typeof a.beach.distance === 'number');
}

function filterByCoachATP(academies) {
  return academies.filter(a => a.coaches.some(c => c.atpWta === true));
}

function filterByCoachTop10(academies) {
  return academies.filter(a => {
    const playedTop10 = a.coaches.some(c => c.atpWta && c.bestRanking !== null && c.bestRanking <= 10);
    const coachedTop10 = a.coachedTopPlayer !== undefined && a.coachedTopPlayer !== null && a.coachedTopPlayer <= 10;
    return playedTop10 || coachedTop10;
  });
}

function filterByPrice(academies) {
  return academies.filter(a => a.priceRange.from !== null);
}

function filterBySearch(academies, query) {
  if (!query) return academies;
  const q = query.toLowerCase();
  return academies.filter(a => {
    const haystack = [
      a.name, a.city, a.country, a.description || '',
      ...a.coaches.map(c => c.name),
      ...a.coaches.map(c => c.background || ''),
      ...(a.notableAlumni || []),
      ...(a.programs || []).map(p => p.name)
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

/* ===== Sort Functions ===== */
function sortAcademies(academies, sortKey) {
  const copy = [...academies];
  switch (sortKey) {
    case 'name':
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case 'country':
      return copy.sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name));
    case 'ranking':
      return copy.sort((a, b) => {
        const getPlayingRank = (acad) => {
          const ranks = acad.coaches.filter(c => c.atpWta && c.bestRanking !== null).map(c => c.bestRanking);
          return ranks.length ? Math.min(...ranks) : Infinity;
        };
        const ra = getPlayingRank(a);
        const rb = getPlayingRank(b);
        return ra - rb || a.name.localeCompare(b.name);
      });
    case 'price':
      return copy.sort((a, b) => {
        const pa = a.priceRange.from ?? Infinity;
        const pb = b.priceRange.from ?? Infinity;
        return pa - pb || a.name.localeCompare(b.name);
      });
    default:
      return copy;
  }
}

/* ===== Get Filtered Results (shared by list + map) ===== */
function getFilteredAcademies() {
  let result = [...ACADEMIES];
  result = filterByCountry(result, state.country);
  result = filterByLevel(result, state.level);
  result = filterBySearch(result, state.search);
  if (state.price) result = filterByPrice(result);
  if (state.individual) result = filterByIndividualLessons(result);
  if (state.boarding) result = filterByBoarding(result);
  if (state.beach) result = filterByBeach(result);
  if (state.atp) result = filterByCoachATP(result);
  if (state.top10) result = filterByCoachTop10(result);
  if (state.showFavorites) {
    const favs = getFavorites();
    result = result.filter(a => favs.includes(a.id));
  }
  result = sortAcademies(result, state.sort);
  return result;
}

/* ===== Apply Filters & Render ===== */
function applyAndRender() {
  const result = getFilteredAcademies();
  updateResultCount(result.length, ACADEMIES.length);
  renderCards(result);
  updateCompareUI();
  updateHeartIcons();
  if (state.viewMode === 'map') updateMap(result);
  saveStateToHash();
}

/* ===== Update Result Count ===== */
function updateResultCount(shown, total) {
  document.getElementById('resultsBar').textContent = `Showing ${shown} of ${total} academies`;
}

/* ===== Render Cards ===== */
function renderCards(academies) {
  const grid = document.getElementById('cardGrid');
  if (state.showFavorites && academies.length === 0) {
    grid.className = 'card-grid no-results';
    grid.innerHTML = '<div class="no-favorites-msg"><span>💛</span>No favorites yet! Click the ♡ on any academy to add it to your shortlist.</div>';
    return;
  }
  if (academies.length === 0) {
    grid.className = 'card-grid no-results';
    grid.innerHTML = '<div class="no-results-msg">No academies match your filters. Try adjusting your criteria.</div>';
    return;
  }
  grid.className = 'card-grid';
  grid.innerHTML = academies.map(a => cardHTML(a)).join('');
}

function cardHTML(a) {
  const star = a.starred ? ' <span class="star">⭐</span>' : '';
  const tags = buildTags(a);
  const topCoach = getTopCoach(a);
  const airportStr = a.airport ? `✈️ ${a.airport.code} — ${a.airport.distance}` : '';
  const favs = getFavorites();
  const isFav = favs.includes(a.id);
  const isCompared = compareSet.has(a.id);

  return `
    <div class="academy-card" data-id="${a.id}" id="card-${a.id}">
      <div class="card-header">
        <div class="compare-check ${isCompared ? 'active' : ''}" data-id="${a.id}" onclick="toggleCompare('${a.id}')" title="Add to compare">✓</div>
        <div class="card-title">
          <span class="fav-heart ${isFav ? 'active' : ''}" data-id="${a.id}" onclick="toggleFavorite('${a.id}')">${isFav ? '♥' : '♡'}</span>
          <button class="btn-share" onclick="shareAcademy('${a.id}')" title="Share">📤</button>
          <span class="flag">${a.countryFlag}</span>
          <span>${escapeHTML(a.name)}${star}</span>
        </div>
        <div class="card-location">${escapeHTML(a.city)}, ${escapeHTML(a.country)}</div>
      </div>
      <div class="card-body">
        <div class="card-tags">${tags}</div>
        <div class="card-price">💰 ${escapeHTML(a.priceRange.display)}</div>
        ${topCoach}
        <div class="card-airport">${airportStr}</div>
      </div>
      <div class="card-footer">
        <button class="btn-details" onclick="toggleDetails(this)">
          View Details <span class="arrow">▼</span>
        </button>
        <div class="card-details">
          ${buildDetails(a)}
        </div>
      </div>
    </div>`;
}

function buildTags(a) {
  let html = `<span class="tag tag-level">${escapeHTML(a.level)}</span>`;
  if (a.individualLessons) html += '<span class="tag tag-individual">✅ Individual</span>';
  if (a.boarding) html += '<span class="tag tag-boarding">🏠 Boarding</span>';
  if (typeof a.beach.distance === 'number') html += '<span class="tag tag-beach">🏖️ Beach</span>';
  return html;
}

function getTopCoach(a) {
  if (!a.coaches.length) return '<div class="card-coach">No coach info listed</div>';
  const best = a.coaches.reduce((prev, cur) => {
    const pr = prev.bestRanking ?? Infinity;
    const cr = cur.bestRanking ?? Infinity;
    return cr < pr ? cur : prev;
  }, a.coaches[0]);
  const rank = best.rankingNote ? ` (${best.rankingNote})` : '';
  return `<div class="card-coach">🎓 <strong>${escapeHTML(best.name)}</strong>${escapeHTML(rank)}</div>`;
}

function getTopCoachData(a) {
  if (!a.coaches.length) return { name: 'N/A', ranking: 'N/A' };
  const best = a.coaches.reduce((prev, cur) => {
    const pr = prev.bestRanking ?? Infinity;
    const cr = cur.bestRanking ?? Infinity;
    return cr < pr ? cur : prev;
  }, a.coaches[0]);
  return { name: best.name, ranking: best.rankingNote || (best.bestRanking ? '#' + best.bestRanking : 'N/A') };
}

/* ===== Card Details ===== */
function buildDetails(a) {
  let html = '';
  if (a.description) {
    html += `<div class="detail-section"><p>${escapeHTML(a.description)}</p></div>`;
  }
  if (a.coaches.length) {
    html += '<div class="detail-section"><h4>Coaches</h4><ul>';
    a.coaches.forEach(c => {
      const parts = [c.credential, c.background].filter(Boolean).join(' — ');
      html += `<li><strong>${escapeHTML(c.name)}</strong>: ${escapeHTML(parts)}</li>`;
    });
    html += '</ul></div>';
  }
  if (a.programs.length) {
    html += '<div class="detail-section"><h4>Programs</h4><ul>';
    a.programs.forEach(p => {
      html += `<li><strong>${escapeHTML(p.name)}</strong> (${escapeHTML(p.price)}) — ${escapeHTML(p.desc)}</li>`;
    });
    html += '</ul></div>';
  }
  if (a.facilities) {
    html += `<div class="detail-section"><h4>Facilities</h4><p>${escapeHTML(a.facilities)}</p></div>`;
  }
  if (a.notableAlumni && a.notableAlumni.length) {
    html += `<div class="detail-section"><h4>Notable Alumni</h4><p>${a.notableAlumni.map(escapeHTML).join(', ')}</p></div>`;
  }
  const climateKey = a.climate;
  if (climateKey && CLIMATE_DATA[climateKey]) {
    html += `<div class="detail-section"><h4>Climate — ${escapeHTML(CLIMATE_DATA[climateKey].city)}</h4>`;
    html += buildClimateChart(CLIMATE_DATA[climateKey].months);
    html += '</div>';
  }
  if (a.beach && a.beach.description) {
    html += `<div class="detail-section"><h4>Beach / Sea</h4><p>${escapeHTML(a.beach.description)}</p></div>`;
  }
  if (a.nearbyHotels && a.nearbyHotels.length) {
    html += '<div class="detail-section"><h4>🏨 Nearby Hotels</h4>';
    html += '<table class="hotel-table"><thead><tr><th>Hotel</th><th>Stars</th><th>Distance</th><th>Pool</th><th>WiFi</th><th>Price/Night</th><th>Features</th></tr></thead><tbody>';
    a.nearbyHotels.forEach(h => {
      const stars = '⭐'.repeat(h.stars);
      html += `<tr>
        <td><strong>${escapeHTML(h.name)}</strong></td>
        <td>${stars}</td>
        <td>${h.distanceKm} km</td>
        <td>${h.pool ? '🏊 Yes' : '—'}</td>
        <td>${h.wifi ? '📶 Yes' : '—'}</td>
        <td>${escapeHTML(h.pricePerNight)}</td>
        <td>${h.features.map(escapeHTML).join(', ')}</td>
      </tr>`;
    });
    html += '</tbody></table></div>';
  }
  if (a.website) {
    html += `<div class="detail-section"><h4>Website</h4><a href="${escapeHTML(a.website)}" target="_blank" rel="noopener">${escapeHTML(a.website)}</a></div>`;
  }
  // Action buttons
  html += buildDetailActions(a);
  return html;
}

/* ===== Detail Action Buttons ===== */
function buildDetailActions(a) {
  let html = '<div class="detail-actions">';
  const name = encodeURIComponent(a.name);
  let body = `Hi, I found your academy on East European Tennis Academies guide and I'm interested in learning more about your programs.%0A%0AAcademy: ${name}`;
  if (a.website) body += `%0AWebsite: ${encodeURIComponent(a.website)}`;
  if (a.contact) body += `%0AContact: ${encodeURIComponent(a.contact)}`;
  html += `<a href="mailto:?subject=Inquiry about ${name}&body=${body}" class="btn-inquiry">📩 Send Inquiry</a>`;
  if (a.website) {
    html += `<a href="${escapeHTML(a.website)}" target="_blank" rel="noopener" class="btn-visit">🌐 Visit Website</a>`;
  }
  html += '</div>';
  return html;
}

/* ===== Share Academy ===== */
function shareAcademy(id) {
  const a = ACADEMIES.find(ac => ac.id === id);
  if (!a) return;
  const url = window.location.origin + window.location.pathname + '#academy=' + id;
  const title = a.name + ' — East European Tennis Academies';
  if (navigator.share) {
    navigator.share({ title, text: `Check out ${a.name} in ${a.city}, ${a.country}`, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => showToast('Link copied!')).catch(() => showToast('Could not copy'));
  }
}

function shareComparison() {
  const ids = [...compareSet];
  if (ids.length < 2) return;
  const url = window.location.origin + window.location.pathname + '#compare=' + ids.join(',');
  if (navigator.share) {
    navigator.share({ title: 'Compare Tennis Academies', text: 'Check out this academy comparison', url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => showToast('Comparison link copied!')).catch(() => showToast('Could not copy'));
  }
}

function showToast(msg) {
  const existing = document.querySelector('.share-toast');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.className = 'share-toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2100);
}

/* ===== Print Shortlist ===== */
function printShortlist() {
  document.querySelectorAll('.card-details').forEach(d => d.classList.add('open'));
  document.querySelectorAll('.btn-details').forEach(b => b.classList.add('open'));
  setTimeout(() => window.print(), 100);
}

/* ===== Climate Chart ===== */
function buildClimateChart(months) {
  const maxTemp = Math.max(...months.map(m => m.temp));
  const minTemp = Math.min(...months.map(m => m.temp));
  let html = '<div class="climate-chart">';
  months.forEach(m => {
    const pct = maxTemp > minTemp ? ((m.temp - minTemp) / (maxTemp - minTemp)) * 100 : 50;
    const height = Math.max(8, pct * 0.55 + 8);
    const color = tempColor(m.temp);
    html += `<div class="climate-bar-wrap">
      <span class="climate-temp">${m.temp}°</span>
      <div class="climate-bar" style="height:${height}px;background:${color}"></div>
      <span class="climate-label">${m.month}</span>
    </div>`;
  });
  html += '</div>';
  return html;
}

function tempColor(temp) {
  if (temp <= 0) return '#90caf9';
  if (temp <= 5) return '#64b5f6';
  if (temp <= 10) return '#42a5f5';
  if (temp <= 15) return '#66bb6a';
  if (temp <= 20) return '#fdd835';
  if (temp <= 25) return '#ffa726';
  return '#ef5350';
}

/* ===== Toggle Details ===== */
function toggleDetails(btn) {
  const details = btn.nextElementSibling;
  const isOpen = details.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
}

/* ===== Utility ===== */
function escapeHTML(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ===== URL Hash State ===== */
function saveStateToHash() {
  const params = new URLSearchParams();
  if (state.country) params.set('country', state.country);
  if (state.level) params.set('level', state.level);
  if (state.sort !== 'name') params.set('sort', state.sort);
  if (state.search) params.set('q', state.search);
  ['price', 'individual', 'boarding', 'beach', 'atp', 'top10'].forEach(k => {
    if (state[k]) params.set(k, '1');
  });
  if (state.showFavorites) params.set('fav', '1');
  const hash = params.toString();
  history.replaceState(null, '', hash ? '#' + hash : location.pathname);
}

function loadStateFromHash() {
  if (!location.hash) return;
  const params = new URLSearchParams(location.hash.slice(1));
  state.country = params.get('country') || '';
  state.level = params.get('level') || '';
  state.sort = params.get('sort') || 'name';
  state.search = params.get('q') || '';
  ['price', 'individual', 'boarding', 'beach', 'atp', 'top10'].forEach(k => {
    state[k] = params.get(k) === '1';
  });
  state.showFavorites = params.get('fav') === '1';
  document.getElementById('filterCountry').value = state.country;
  document.getElementById('filterLevel').value = state.level;
  document.getElementById('filterSort').value = state.sort;
  document.getElementById('filterSearch').value = state.search;
  const idMap = { price: 'togglePrice', individual: 'toggleIndividual', boarding: 'toggleBoarding', beach: 'toggleBeach', atp: 'toggleATP', top10: 'toggleTop10' };
  Object.entries(idMap).forEach(([k, id]) => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.toggle('active', state[k]);
  });
  if (state.showFavorites) {
    document.getElementById('toggleFavorites').classList.add('active');
  }
}

/* ===== Event Binding ===== */
function bindEvents() {
  document.getElementById('filterCountry').addEventListener('change', e => { state.country = e.target.value; applyAndRender(); });
  document.getElementById('filterLevel').addEventListener('change', e => { state.level = e.target.value; applyAndRender(); });
  document.getElementById('filterSort').addEventListener('change', e => { state.sort = e.target.value; applyAndRender(); });

  let searchTimer;
  document.getElementById('filterSearch').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.search = e.target.value.trim(); applyAndRender(); }, 250);
  });

  document.querySelectorAll('.toggle-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.filter;
      state[key] = !state[key];
      btn.classList.toggle('active', state[key]);
      applyAndRender();
    });
  });

  // Favorites toggle
  document.getElementById('toggleFavorites').addEventListener('click', () => {
    state.showFavorites = !state.showFavorites;
    document.getElementById('toggleFavorites').classList.toggle('active', state.showFavorites);
    applyAndRender();
  });

  // View toggle (list/map)
  document.getElementById('btnListView').addEventListener('click', () => switchView('list'));
  document.getElementById('btnMapView').addEventListener('click', () => switchView('map'));

  // Reset
  document.getElementById('btnReset').addEventListener('click', () => {
    Object.keys(state).forEach(k => {
      if (k === 'sort') state[k] = 'name';
      else if (k === 'viewMode') { /* keep current view */ }
      else if (typeof state[k] === 'boolean') state[k] = false;
      else state[k] = '';
    });
    document.getElementById('filterCountry').value = '';
    document.getElementById('filterLevel').value = '';
    document.getElementById('filterSort').value = 'name';
    document.getElementById('filterSearch').value = '';
    document.querySelectorAll('.toggle-btn.active[data-filter]').forEach(b => b.classList.remove('active'));
    document.getElementById('toggleFavorites').classList.remove('active');
    applyAndRender();
  });

  // Mobile filter toggle
  document.getElementById('filterToggle').addEventListener('click', () => {
    document.getElementById('filterRows').classList.toggle('open');
  });

  // Compare FAB
  document.getElementById('compareFab').addEventListener('click', openCompareModal);
  document.getElementById('compareClose').addEventListener('click', closeCompareModal);

  // Print
  document.getElementById('btnPrint').addEventListener('click', printShortlist);
  document.getElementById('compareModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeCompareModal();
  });

  // Wizard
  document.getElementById('btnWizard').addEventListener('click', openWizard);
  document.getElementById('wizardClose').addEventListener('click', closeWizard);
  document.getElementById('wizardModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeWizard();
  });
}

/* ===== View Toggle (List / Map) ===== */
function switchView(mode) {
  state.viewMode = mode;
  const listBtn = document.getElementById('btnListView');
  const mapBtn = document.getElementById('btnMapView');
  const grid = document.getElementById('cardGrid');
  const mapC = document.getElementById('mapContainer');
  const footer = document.querySelector('.site-footer');

  listBtn.classList.toggle('active', mode === 'list');
  mapBtn.classList.toggle('active', mode === 'map');

  if (mode === 'map') {
    grid.style.display = 'none';
    mapC.style.display = 'block';
    if (footer) footer.style.display = 'none';
    initMap();
    updateMap(getFilteredAcademies());
  } else {
    grid.style.display = '';
    mapC.style.display = 'none';
    if (footer) footer.style.display = '';
  }
}

/* ===== Leaflet Map ===== */
function initMap() {
  if (leafletMap) return;
  leafletMap = L.map('leafletMap').setView([50, 20], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(leafletMap);
  setTimeout(() => leafletMap.invalidateSize(), 100);
}

function updateMap(academies) {
  if (!leafletMap) return;
  mapMarkers.forEach(m => leafletMap.removeLayer(m));
  mapMarkers = [];

  academies.forEach(a => {
    if (!a.lat || !a.lng) return;
    const isElite = a.level.toLowerCase() === 'elite';
    const icon = L.divIcon({
      className: 'leaflet-marker-custom',
      html: `<div style="
        background:${isElite ? '#2e7d32' : '#1565c0'};
        width:14px;height:14px;border-radius:50%;
        border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.4);
      "></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      popupAnchor: [0, -12]
    });
    const topCoach = getTopCoachData(a);
    const popup = `
      <div style="min-width:180px;font-family:${getComputedStyle(document.body).fontFamily}">
        <strong>${a.countryFlag} ${escapeHTML(a.name)}</strong><br>
        <span style="color:#666;font-size:0.85em">${escapeHTML(a.city)}</span><br>
        <span style="font-size:0.85em">🎓 ${escapeHTML(topCoach.name)}</span><br>
        <span style="font-size:0.85em">💰 ${escapeHTML(a.priceRange.display)}</span><br>
        <a href="#" onclick="scrollToCard('${a.id}');return false;" style="font-size:0.85em;color:#1a472a;font-weight:600">View in list →</a>
      </div>`;
    const marker = L.marker([a.lat, a.lng], { icon }).bindPopup(popup);
    marker.addTo(leafletMap);
    mapMarkers.push(marker);
  });

  setTimeout(() => leafletMap.invalidateSize(), 50);
}

function scrollToCard(id) {
  switchView('list');
  setTimeout(() => {
    const card = document.getElementById('card-' + id);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.outline = '3px solid var(--accent)';
      setTimeout(() => { card.style.outline = ''; }, 2000);
    }
  }, 100);
}

/* ===== Compare Mode ===== */
function toggleCompare(id) {
  if (compareSet.has(id)) {
    compareSet.delete(id);
  } else {
    if (compareSet.size >= 4) return;
    compareSet.add(id);
  }
  updateCompareUI();
}

function updateCompareUI() {
  const fab = document.getElementById('compareFab');
  const countEl = document.getElementById('compareCount');
  document.querySelectorAll('.compare-check').forEach(el => {
    el.classList.toggle('active', compareSet.has(el.dataset.id));
  });
  if (compareSet.size >= 2) {
    fab.style.display = 'block';
    countEl.textContent = compareSet.size;
  } else {
    fab.style.display = 'none';
  }
}

function openCompareModal() {
  const ids = [...compareSet];
  const academies = ids.map(id => ACADEMIES.find(a => a.id === id)).filter(Boolean);
  if (academies.length < 2) return;

  const wrap = document.getElementById('compareTableWrap');
  const rows = [
    { label: 'Academy', fn: a => `<strong>${escapeHTML(a.name)}</strong>` },
    { label: 'Country / City', fn: a => `${a.countryFlag} ${escapeHTML(a.country)} — ${escapeHTML(a.city)}` },
    { label: 'Price', fn: a => escapeHTML(a.priceRange.display) },
    { label: 'Top Coach', fn: a => {
      const tc = getTopCoachData(a);
      return `${escapeHTML(tc.name)}<br><small>${escapeHTML(tc.ranking)}</small>`;
    }},
    { label: 'Individual Lessons', fn: a => a.individualLessons ? '✅ Yes' : '❌ No' },
    { label: 'Boarding', fn: a => a.boarding ? '✅ Yes' : '❌ No' },
    { label: 'Beach Distance', fn: a => typeof a.beach.distance === 'number' ? a.beach.distance + ' km' : 'N/A' },
    { label: 'Airport', fn: a => a.airport ? `${a.airport.code} (${a.airport.distance})` : 'N/A' },
    { label: 'Summer Temp (Jul)', fn: a => {
      if (a.climate && CLIMATE_DATA[a.climate]) {
        const jul = CLIMATE_DATA[a.climate].months.find(m => m.month === 'Jul');
        return jul ? jul.temp + '°C' : 'N/A';
      }
      return 'N/A';
    }},
    { label: 'Facilities', fn: a => escapeHTML(a.facilities || 'N/A') }
  ];

  let html = '<table class="compare-table"><thead><tr><th></th>';
  academies.forEach(a => {
    html += `<th>${a.countryFlag} ${escapeHTML(a.name)}<br><button class="compare-remove" onclick="removeFromCompare('${a.id}')">Remove</button></th>`;
  });
  html += '</tr></thead><tbody>';
  rows.forEach(r => {
    html += `<tr><td>${r.label}</td>`;
    academies.forEach(a => { html += `<td>${r.fn(a)}</td>`; });
    html += '</tr>';
  });
  html += '</tbody></table>';
  wrap.innerHTML = html;
  document.getElementById('compareModal').style.display = 'flex';
}

function removeFromCompare(id) {
  compareSet.delete(id);
  updateCompareUI();
  if (compareSet.size < 2) {
    closeCompareModal();
  } else {
    openCompareModal();
  }
}

function closeCompareModal() {
  document.getElementById('compareModal').style.display = 'none';
}

/* ===== Help Me Choose Wizard ===== */
const wizardSteps = [
  {
    title: "Who's training?",
    key: 'who',
    multi: false,
    options: [
      { value: 'junior', label: 'Junior (under 14)' },
      { value: 'teen', label: 'Teen (14–18)' },
      { value: 'adult', label: 'Adult (18+)' },
      { value: 'family', label: 'Family' }
    ]
  },
  {
    title: "What's your budget?",
    key: 'budget',
    multi: false,
    options: [
      { value: 'budget', label: 'Budget-friendly (< €1,000/mo)' },
      { value: 'mid', label: 'Mid-range (€1,000–3,000/mo)' },
      { value: 'premium', label: 'Premium (€3,000+/mo)' },
      { value: 'flexible', label: 'Flexible' }
    ]
  },
  {
    title: "What matters most?",
    key: 'priorities',
    multi: true,
    options: [
      { value: 'coaches', label: '🎾 Top coaches (ATP/WTA)' },
      { value: 'beach', label: '🏖️ Near the beach' },
      { value: 'boarding', label: '🏠 Boarding available' },
      { value: 'pricing', label: '💰 Clear pricing' },
      { value: 'alumni', label: '🏆 Elite alumni' }
    ]
  },
  {
    title: 'Climate preference?',
    key: 'climate',
    multi: false,
    options: [
      { value: 'warm', label: '☀️ Warm & sunny' },
      { value: 'mild', label: '🌤️ Mild' },
      { value: 'cold', label: "❄️ Don't mind cold" },
      { value: 'none', label: 'No preference' }
    ]
  }
];

let wizardAnswers = {};
let wizardCurrentStep = 0;

function openWizard() {
  wizardAnswers = {};
  wizardCurrentStep = 0;
  document.getElementById('wizardModal').style.display = 'flex';
  renderWizardStep();
}

function closeWizard() {
  document.getElementById('wizardModal').style.display = 'none';
}

function renderWizardStep() {
  const container = document.getElementById('wizardContainer');
  if (wizardCurrentStep >= wizardSteps.length) {
    showWizardResults();
    return;
  }
  const step = wizardSteps[wizardCurrentStep];
  const current = wizardAnswers[step.key] || (step.multi ? [] : null);

  let html = `<div class="wizard-step">
    <div class="wizard-progress">Step ${wizardCurrentStep + 1} of ${wizardSteps.length}</div>
    <h3>${step.title}</h3>`;

  if (step.multi) {
    html += '<p class="wizard-multi-hint">Select all that apply</p>';
  }

  html += '<div class="wizard-options">';
  step.options.forEach(opt => {
    const selected = step.multi
      ? (Array.isArray(current) && current.includes(opt.value))
      : current === opt.value;
    html += `<button class="wizard-opt ${selected ? 'selected' : ''}" data-value="${opt.value}">${opt.label}</button>`;
  });
  html += '</div>';

  html += '<div class="wizard-nav">';
  if (wizardCurrentStep > 0) {
    html += '<button class="wizard-btn wizard-btn-secondary" id="wizBack">← Back</button>';
  } else {
    html += '<span></span>';
  }
  const nextLabel = wizardCurrentStep === wizardSteps.length - 1 ? 'See Results →' : 'Next →';
  const canNext = step.multi ? true : current !== null;
  html += `<button class="wizard-btn wizard-btn-primary" id="wizNext" ${canNext ? '' : 'disabled'}>${nextLabel}</button>`;
  html += '</div></div>';

  container.innerHTML = html;

  // Bind option clicks
  container.querySelectorAll('.wizard-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.value;
      if (step.multi) {
        let arr = wizardAnswers[step.key] || [];
        if (arr.includes(val)) arr = arr.filter(v => v !== val);
        else arr.push(val);
        wizardAnswers[step.key] = arr;
      } else {
        wizardAnswers[step.key] = val;
      }
      renderWizardStep();
    });
  });

  const backBtn = container.querySelector('#wizBack');
  if (backBtn) backBtn.addEventListener('click', () => { wizardCurrentStep--; renderWizardStep(); });

  const nextBtn = container.querySelector('#wizNext');
  nextBtn.addEventListener('click', () => {
    if (!step.multi && !wizardAnswers[step.key]) return;
    wizardCurrentStep++;
    renderWizardStep();
  });
}

function showWizardResults() {
  const scored = ACADEMIES.map(a => ({ academy: a, score: scoreAcademy(a, wizardAnswers), reasons: [] }));
  scored.forEach(s => { s.reasons = buildReasons(s.academy, wizardAnswers); });
  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 5).filter(s => s.score > 0);

  const container = document.getElementById('wizardContainer');
  let html = '<div class="wizard-step wizard-results"><h3>🏆 Your Top Matches</h3>';
  if (top.length === 0) {
    html += '<p>No strong matches found. Try different criteria!</p>';
  } else {
    top.forEach((s, i) => {
      html += `<div class="wizard-result-card">
        <div class="wizard-result-rank">#${i + 1}</div>
        <div class="wizard-result-info">
          <h4>${s.academy.countryFlag} ${escapeHTML(s.academy.name)}</h4>
          <p>${s.reasons.join(' • ')}</p>
        </div>
      </div>`;
    });
  }
  html += '<div class="wizard-nav">';
  html += '<button class="wizard-btn wizard-btn-secondary" id="wizRestart">🔄 Start Over</button>';
  html += '<button class="wizard-btn wizard-btn-primary" id="wizViewAll">View All →</button>';
  html += '</div></div>';
  container.innerHTML = html;

  document.getElementById('wizRestart').addEventListener('click', () => {
    wizardAnswers = {};
    wizardCurrentStep = 0;
    renderWizardStep();
  });
  document.getElementById('wizViewAll').addEventListener('click', closeWizard);
}

function scoreAcademy(a, answers) {
  let score = 0;
  const priorities = answers.priorities || [];
  const priorityWeight = 3;

  // Who's training
  if (answers.who === 'junior' || answers.who === 'teen') {
    const l = a.level.toLowerCase();
    if (l.includes('junior') || l.includes('dev') || l.includes('all')) score += 2;
    if (a.boarding) score += 1;
  }
  if (answers.who === 'adult') {
    const l = a.level.toLowerCase();
    if (l.includes('all') || l.includes('pro') || l.includes('recreational')) score += 2;
  }
  if (answers.who === 'family') {
    const l = a.level.toLowerCase();
    if (l.includes('all') || l.includes('recreational')) score += 2;
    if (typeof a.beach.distance === 'number') score += 1;
  }

  // Budget
  if (answers.budget === 'budget') {
    if (a.priceRange.from !== null && a.priceRange.from < 1000) score += 3;
    else if (a.priceRange.from !== null && a.priceRange.from < 1500) score += 1;
  } else if (answers.budget === 'mid') {
    if (a.priceRange.from !== null && a.priceRange.from >= 1000 && a.priceRange.from <= 3000) score += 3;
    else if (a.priceRange.from !== null) score += 1;
  } else if (answers.budget === 'premium') {
    if (a.priceRange.from !== null && a.priceRange.from >= 3000) score += 3;
    const l = a.level.toLowerCase();
    if (l.includes('elite')) score += 2;
  } else {
    score += 1;
  }

  // Priorities (weighted higher)
  if (priorities.includes('coaches')) {
    if (a.coaches.some(c => c.atpWta)) score += priorityWeight;
    if (a.coaches.some(c => c.bestRanking !== null && c.bestRanking <= 50)) score += priorityWeight;
  }
  if (priorities.includes('beach')) {
    if (typeof a.beach.distance === 'number') score += priorityWeight;
  }
  if (priorities.includes('boarding')) {
    if (a.boarding) score += priorityWeight;
  }
  if (priorities.includes('pricing')) {
    if (a.priceRange.from !== null) score += priorityWeight;
  }
  if (priorities.includes('alumni')) {
    if (a.notableAlumni && a.notableAlumni.length > 0) score += priorityWeight;
  }

  // Climate
  if (answers.climate && answers.climate !== 'none') {
    const julTemp = getJulTemp(a);
    if (julTemp !== null) {
      if (answers.climate === 'warm' && julTemp >= 22) score += 2;
      else if (answers.climate === 'mild' && julTemp >= 18 && julTemp <= 24) score += 2;
      else if (answers.climate === 'cold') score += 1;
    }
  }

  return score;
}

function getJulTemp(a) {
  if (a.climate && CLIMATE_DATA[a.climate]) {
    const jul = CLIMATE_DATA[a.climate].months.find(m => m.month === 'Jul');
    return jul ? jul.temp : null;
  }
  return null;
}

function buildReasons(a, answers) {
  const reasons = [];
  const priorities = answers.priorities || [];
  if (priorities.includes('coaches') && a.coaches.some(c => c.atpWta)) reasons.push('ATP/WTA coaches');
  if (priorities.includes('beach') && typeof a.beach.distance === 'number') reasons.push('Near beach');
  if (priorities.includes('boarding') && a.boarding) reasons.push('Boarding available');
  if (priorities.includes('pricing') && a.priceRange.from !== null) reasons.push('Clear pricing');
  if (priorities.includes('alumni') && a.notableAlumni && a.notableAlumni.length > 0) reasons.push('Notable alumni');
  if (a.priceRange.from !== null) reasons.push(a.priceRange.display);
  else reasons.push('Contact for pricing');
  reasons.push(a.city + ', ' + a.country);
  return reasons;
}

/* ===== Dark Mode Toggle ===== */
(function initDarkMode() {
  const btn = document.getElementById('btnDarkMode');
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    html.setAttribute('data-theme', 'dark');
    btn.textContent = '☀️';
  }
  btn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      btn.textContent = '🌙';
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      btn.textContent = '☀️';
    }
  });
})();