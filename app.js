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
  top10: false
};

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  populateCountryDropdown();
  loadStateFromHash();
  bindEvents();
  applyAndRender();
});

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
  return academies.filter(a => a.bestCoachRanking !== null && a.bestCoachRanking <= 10);
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
        const ra = a.bestCoachRanking ?? Infinity;
        const rb = b.bestCoachRanking ?? Infinity;
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

/* ===== Apply Filters & Render ===== */
function applyAndRender() {
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
  result = sortAcademies(result, state.sort);
  updateResultCount(result.length, ACADEMIES.length);
  renderCards(result);
  saveStateToHash();
}

/* ===== Update Result Count ===== */
function updateResultCount(shown, total) {
  document.getElementById('resultsBar').textContent = `Showing ${shown} of ${total} academies`;
}

/* ===== Render Cards ===== */
function renderCards(academies) {
  const grid = document.getElementById('cardGrid');
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

  return `
    <div class="academy-card" data-id="${a.id}">
      <div class="card-header">
        <div class="card-title">
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

/* ===== Card Details ===== */
function buildDetails(a) {
  let html = '';

  // Description
  if (a.description) {
    html += `<div class="detail-section"><p>${escapeHTML(a.description)}</p></div>`;
  }

  // Coaches
  if (a.coaches.length) {
    html += '<div class="detail-section"><h4>Coaches</h4><ul>';
    a.coaches.forEach(c => {
      const parts = [c.credential, c.background].filter(Boolean).join(' — ');
      html += `<li><strong>${escapeHTML(c.name)}</strong>: ${escapeHTML(parts)}</li>`;
    });
    html += '</ul></div>';
  }

  // Programs
  if (a.programs.length) {
    html += '<div class="detail-section"><h4>Programs</h4><ul>';
    a.programs.forEach(p => {
      html += `<li><strong>${escapeHTML(p.name)}</strong> (${escapeHTML(p.price)}) — ${escapeHTML(p.desc)}</li>`;
    });
    html += '</ul></div>';
  }

  // Facilities
  if (a.facilities) {
    html += `<div class="detail-section"><h4>Facilities</h4><p>${escapeHTML(a.facilities)}</p></div>`;
  }

  // Notable Alumni
  if (a.notableAlumni && a.notableAlumni.length) {
    html += `<div class="detail-section"><h4>Notable Alumni</h4><p>${a.notableAlumni.map(escapeHTML).join(', ')}</p></div>`;
  }

  // Climate
  const climateKey = a.climate;
  if (climateKey && CLIMATE_DATA[climateKey]) {
    html += `<div class="detail-section"><h4>Climate — ${escapeHTML(CLIMATE_DATA[climateKey].city)}</h4>`;
    html += buildClimateChart(CLIMATE_DATA[climateKey].months);
    html += '</div>';
  }

  // Beach / Sea
  if (a.beach && a.beach.description) {
    html += `<div class="detail-section"><h4>Beach / Sea</h4><p>${escapeHTML(a.beach.description)}</p></div>`;
  }

  // Website
  if (a.website) {
    html += `<div class="detail-section"><h4>Website</h4><a href="${escapeHTML(a.website)}" target="_blank" rel="noopener">${escapeHTML(a.website)}</a></div>`;
  }

  return html;
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
  // Sync UI controls
  document.getElementById('filterCountry').value = state.country;
  document.getElementById('filterLevel').value = state.level;
  document.getElementById('filterSort').value = state.sort;
  document.getElementById('filterSearch').value = state.search;
  const idMap = { price: 'togglePrice', individual: 'toggleIndividual', boarding: 'toggleBoarding', beach: 'toggleBeach', atp: 'toggleATP', top10: 'toggleTop10' };
  Object.entries(idMap).forEach(([k, id]) => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.toggle('active', state[k]);
  });
}

/* ===== Event Binding ===== */
function bindEvents() {
  // Dropdowns
  document.getElementById('filterCountry').addEventListener('change', e => { state.country = e.target.value; applyAndRender(); });
  document.getElementById('filterLevel').addEventListener('change', e => { state.level = e.target.value; applyAndRender(); });
  document.getElementById('filterSort').addEventListener('change', e => { state.sort = e.target.value; applyAndRender(); });

  // Search with debounce
  let searchTimer;
  document.getElementById('filterSearch').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.search = e.target.value.trim(); applyAndRender(); }, 250);
  });

  // Toggle buttons
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.filter;
      state[key] = !state[key];
      btn.classList.toggle('active', state[key]);
      applyAndRender();
    });
  });

  // Reset
  document.getElementById('btnReset').addEventListener('click', () => {
    Object.keys(state).forEach(k => {
      state[k] = typeof state[k] === 'boolean' ? false : (k === 'sort' ? 'name' : '');
    });
    document.getElementById('filterCountry').value = '';
    document.getElementById('filterLevel').value = '';
    document.getElementById('filterSort').value = 'name';
    document.getElementById('filterSearch').value = '';
    document.querySelectorAll('.toggle-btn.active').forEach(b => b.classList.remove('active'));
    applyAndRender();
  });

  // Mobile filter toggle
  document.getElementById('filterToggle').addEventListener('click', () => {
    document.getElementById('filterRows').classList.toggle('open');
  });
}


