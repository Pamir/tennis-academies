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
  viewMode: 'list',
  currency: 'EUR',
  surface: '',
  nearMe: false
};

/* ===== Sport Config ===== */
const SPORT_CONFIG = {
  tennis: {
    icon: '🎾',
    name: 'Tennis',
    coachLabel: 'ATP/WTA Coaches',
    coachFilterLabel: '🎾 Coach Played ATP/WTA',
    surfaceLabel: 'Court Surfaces',
    storagePrefix: 'tennis',
  },
  golf: {
    icon: '⛳',
    name: 'Golf',
    coachLabel: 'Pro Coaches',
    coachFilterLabel: '⛳ PGA Professional',
    surfaceLabel: 'Course Types',
    storagePrefix: 'golf',
  },
  football: {
    icon: '⚽',
    name: 'Football',
    coachLabel: 'Licensed Coaches',
    coachFilterLabel: '⚽ Pro Experience',
    surfaceLabel: 'Pitch Types',
    storagePrefix: 'football',
  },
  basketball: {
    icon: '🏀',
    name: 'Basketball',
    coachLabel: 'Pro Coaches',
    coachFilterLabel: '🏀 Pro Experience',
    surfaceLabel: 'Court Types',
    storagePrefix: 'basketball',
  },
  swimming: {
    icon: '🏊',
    name: 'Swimming',
    coachLabel: 'Olympic Coaches',
    coachFilterLabel: '🏊 Olympic Coach',
    surfaceLabel: 'Pool Types',
    storagePrefix: 'swimming',
  },
  volleyball: {
    icon: '🏐',
    name: 'Volleyball',
    coachLabel: 'National Team Coaches',
    coachFilterLabel: '🏐 National Team Coach',
    surfaceLabel: 'Court Types',
    storagePrefix: 'volleyball',
  }
};

const SPORT_PAGES = {
  tennis: 'tennis.html',
  golf: 'golf.html',
  football: 'football.html',
  basketball: 'basketball.html',
  swimming: 'swimming.html',
  volleyball: 'volleyball.html'
};

const SPORT_DATA_FILES = {
  tennis: './data.js',
  golf: './golf-data.js',
  football: './football-data.js',
  basketball: './basketball-data.js',
  swimming: './swimming-data.js',
  volleyball: './volleyball-data.js'
};

let _crossSportCache = null;

function loadCrossSportData() {
  if (_crossSportCache) return _crossSportCache;
  const currentSport = getSportType();
  const otherSports = Object.keys(SPORT_DATA_FILES).filter(s => s !== currentSport);
  _crossSportCache = Promise.all(otherSports.map(sport => {
    return fetch(SPORT_DATA_FILES[sport])
      .then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(text => {
        const extracted = {};
        const fn = new Function('extracted', text + '\nextracted.academies = typeof ACADEMIES !== "undefined" ? ACADEMIES : [];');
        fn(extracted);
        return {
          sport,
          icon: SPORT_CONFIG[sport].icon,
          name: SPORT_CONFIG[sport].name,
          page: SPORT_PAGES[sport],
          academies: extracted.academies
        };
      })
      .catch(() => null);
  })).then(results => results.filter(Boolean));
  return _crossSportCache;
}

function getSportType() {
  return (typeof SPORT_TYPE !== 'undefined') ? SPORT_TYPE : 'tennis';
}

function getSportConfig() {
  return SPORT_CONFIG[getSportType()] || SPORT_CONFIG.tennis;
}

/* ===== Currency Converter ===== */
const CURRENCY_RATES = {
  EUR: { symbol: '€', rate: 1 },
  USD: { symbol: '$', rate: 1.08 },
  GBP: { symbol: '£', rate: 0.86 },
  TRY: { symbol: '₺', rate: 34.5 },
  RSD: { symbol: 'RSD ', rate: 117 },
  CZK: { symbol: 'CZK ', rate: 25.2 },
  PLN: { symbol: 'PLN ', rate: 4.32 },
  RON: { symbol: 'RON ', rate: 4.97 },
  HUF: { symbol: 'HUF ', rate: 395 },
};

function convertPrice(eurAmount) {
  const curr = state.currency || 'EUR';
  const c = CURRENCY_RATES[curr];
  const converted = Math.round(eurAmount * c.rate);
  return c.symbol + converted.toLocaleString();
}

/* ===== Geolocation ===== */
let userLocation = null;

function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) return reject('No geolocation');
    navigator.geolocation.getCurrentPosition(
      pos => { userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude }; resolve(userLocation); },
      err => reject(err)
    );
  });
}

function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

/* ===== Compare State ===== */
const compareSet = new Set();

/* ===== Favorites ===== */
function getFavorites() {
  try { return JSON.parse(localStorage.getItem(getSportConfig().storagePrefix + '-favorites')) || []; }
  catch { return []; }
}
function saveFavorites(favs) {
  localStorage.setItem(getSportConfig().storagePrefix + '-favorites', JSON.stringify(favs));
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

/* ===== i18n ===== */
function updateStaticText() {
  const config = getSportConfig();
  const h1 = document.querySelector('.site-header h1');
  if (h1) h1.textContent = config.icon + ' ' + t('title').replace('{sport}', config.name);
  const sub = document.querySelector('.site-header .subtitle');
  if (sub) sub.textContent = t('subtitle').replace('{sport}', config.name.toLowerCase());
}

function initLanguageSelector() {
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    const savedLang = localStorage.getItem('sports-lang') || 'en';
    document.documentElement.lang = savedLang;
    langSelect.value = savedLang;
    langSelect.addEventListener('change', e => {
      document.documentElement.lang = e.target.value;
      localStorage.setItem('sports-lang', e.target.value);
      applyAndRender();
      updateStaticText();
    });
    updateStaticText();
  }
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  const initSteps = [
    populateCountryDropdown,
    populateSurfaceDropdown,
    loadStateFromHash,
    bindEvents,
    updateFavButton,
    applyAndRender,
    animateStats,
    renderNews,
    initLanguageSelector,
    updateSportLabels
  ];
  initSteps.forEach(fn => { try { fn(); } catch(e) { console.error('Init error in ' + fn.name + ':', e); } });
});

/* ===== Stats Dashboard ===== */
function animateStats() {
  const stats = {
    countries: new Set(ACADEMIES.map(a => a.country)).size,
    academies: ACADEMIES.length,
    atpWta: ACADEMIES.filter(a => a.coaches && a.coaches.some(c => c.atpWta)).length,
    boarding: ACADEMIES.filter(a => a.boarding).length,
    beach: ACADEMIES.filter(a => typeof a.beach?.distance === 'number').length
  };

  const els = document.querySelectorAll('.stat-number[data-stat]');
  els.forEach(el => {
    const key = el.getAttribute('data-stat');
    const target = stats[key] || 0;
    el.setAttribute('data-target', target);
    el.textContent = target; // Show immediately as fallback
  });

  const statsBar = document.getElementById('statsBar');
  if (!statsBar) return runCountAnimation();

  if (!('IntersectionObserver' in window)) return runCountAnimation();

  const rect = statsBar.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) return runCountAnimation();

  const observer = new IntersectionObserver((entries) => {
    if (entries.some(e => e.isIntersecting)) {
      runCountAnimation();
      observer.disconnect();
    }
  }, { threshold: 0 });
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
  if (!sel) return;
  const countries = typeof COUNTRIES !== 'undefined'
    ? [...COUNTRIES]
    : [...new Set(ACADEMIES.map(a => a.country))];
  countries.sort().forEach(c => {
    const flag = ACADEMIES.find(a => a.country === c)?.countryFlag || '';
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = `${flag} ${c}`;
    sel.appendChild(opt);
  });
}

function populateSurfaceDropdown() {
  const sel = document.getElementById('filterSurface');
  if (!sel) return;
  const firstOption = sel.options[0];
  sel.innerHTML = '';
  sel.appendChild(firstOption);
  const surfaces = new Set();
  ACADEMIES.forEach(a => {
    if (a.courtSurfaces) a.courtSurfaces.forEach(s => surfaces.add(s));
  });
  [...surfaces].sort().forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    sel.appendChild(opt);
  });
}

function updateSportLabels() {
  const config = getSportConfig();
  const atpLabel = document.querySelector('[data-stat="atpWta"]');
  if (atpLabel) {
    const labelEl = atpLabel.parentElement.querySelector('.stat-label');
    if (labelEl) labelEl.textContent = config.coachLabel;
  }
  const atpBtn = document.getElementById('toggleATP');
  if (atpBtn) atpBtn.innerHTML = config.coachFilterLabel;
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
  return academies.filter(a => typeof a.beach?.distance === 'number');
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
    case 'rating':
      return copy.sort((a, b) => {
        const ratings = getUserRatings();
        const ra = ratings[a.id] || 0;
        const rb = ratings[b.id] || 0;
        return rb - ra || a.name.localeCompare(b.name);
      });
    case 'price':
      return copy.sort((a, b) => {
        const pa = a.priceRange.from ?? Infinity;
        const pb = b.priceRange.from ?? Infinity;
        return pa - pb || a.name.localeCompare(b.name);
      });
    case 'distance':
      if (!userLocation) return copy;
      return copy.sort((a, b) => {
        const da = (a.lat && a.lng) ? haversineDistance(userLocation.lat, userLocation.lng, a.lat, a.lng) : Infinity;
        const db = (b.lat && b.lng) ? haversineDistance(userLocation.lat, userLocation.lng, b.lat, b.lng) : Infinity;
        return da - db;
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
  if (state.surface) result = result.filter(a => a.courtSurfaces && a.courtSurfaces.includes(state.surface));
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
  grid.setAttribute('aria-live', 'polite');
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

  let priceDisplay;
  if (a.priceRange.from !== null) {
    priceDisplay = '💰 ' + convertPrice(a.priceRange.from);
    if (a.priceRange.to !== null && a.priceRange.to !== a.priceRange.from) {
      priceDisplay += ' – ' + convertPrice(a.priceRange.to);
    }
    priceDisplay += '/mo';
  } else {
    priceDisplay = '💰 ' + escapeHTML(a.priceRange.display);
  }

  let distanceStr = '';
  if (userLocation && a.lat && a.lng) {
    const dist = haversineDistance(userLocation.lat, userLocation.lng, a.lat, a.lng);
    distanceStr = `<div class="card-distance">📍 ${Math.round(dist)} km from you</div>`;
  }

  return `
    <div class="academy-card" data-id="${a.id}" id="card-${a.id}" role="listitem">
      <div class="card-header">
        <div class="compare-check ${isCompared ? 'active' : ''}" data-id="${a.id}" onclick="toggleCompare('${a.id}')" tabindex="0" role="checkbox" aria-checked="${isCompared}" aria-label="Add ${escapeHTML(a.name)} to compare" title="Add to compare">✓</div>
        <div class="card-title">
          <span class="fav-heart ${isFav ? 'active' : ''}" data-id="${a.id}" onclick="toggleFavorite('${a.id}')" tabindex="0" role="checkbox" aria-checked="${isFav}" aria-label="${isFav ? 'Remove' : 'Add'} ${escapeHTML(a.name)} ${isFav ? 'from' : 'to'} shortlist">${isFav ? '♥' : '♡'}</span>
          <button class="btn-share" onclick="shareAcademy('${a.id}')" title="Share" aria-label="Share ${escapeHTML(a.name)}">📤</button>
          <span class="flag" aria-hidden="true">${a.countryFlag}</span>
          <span>${escapeHTML(a.name)}${star}</span>
        </div>
        <div class="card-location">${escapeHTML(a.city)}, ${escapeHTML(a.country)}</div>
      </div>
      <div class="card-body">
        <div class="card-tags">${tags}</div>
        <div class="card-price">${priceDisplay}</div>
        ${topCoach}
        <div class="card-airport">${airportStr}</div>
        ${distanceStr}
      </div>
      <div class="card-footer">
        <button class="btn-details" onclick="toggleDetails(this)" aria-label="View details for ${escapeHTML(a.name)}" aria-expanded="false">
          View Details <span class="arrow" aria-hidden="true">▼</span>
        </button>
        <div class="card-details" role="region" aria-label="Details for ${escapeHTML(a.name)}">
          ${buildDetails(a)}
        </div>
      </div>
    </div>`;
}

function buildTags(a) {
  let html = `<span class="tag tag-level">${escapeHTML(a.level)}</span>`;
  if (a.individualLessons) html += '<span class="tag tag-individual">✅ Individual</span>';
  if (a.boarding) html += '<span class="tag tag-boarding">🏠 Boarding</span>';
  if (typeof a.beach?.distance === 'number') html += '<span class="tag tag-beach">🏖️ Beach</span>';
  if (a.courtSurfaces) {
    a.courtSurfaces.forEach(s => {
      html += `<span class="tag tag-surface">${escapeHTML(s)}</span>`;
    });
  }
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
  if (Array.isArray(a.photos) && a.photos.length) {
    html += `<div class="detail-section"><button class="btn-gallery" onclick="gallery_open('${a.id}')">📷 View Photos (${a.photos.length})</button></div>`;
  }
  html += renderStarRating(a.id);
  if (Array.isArray(a.upcomingCamps) && a.upcomingCamps.length) {
    html += renderUpcomingCamps(a.upcomingCamps);
  }
  html += renderCostCalculator(a);
  if (a.coaches.length) {
    html += '<div class="detail-section"><h4>Coaches</h4><ul>';
    a.coaches.forEach(c => {
      const parts = [c.credential, c.background].filter(Boolean).join(' — ');
      html += `<li><strong>${escapeHTML(c.name)}</strong>: ${escapeHTML(parts)}`;
      if (c.languages && c.languages.length) {
        html += ` <em>(${c.languages.join(', ')})</em>`;
      }
      if (c.instagram) {
        html += ` <a href="https://instagram.com/${escapeHTML(c.instagram)}" target="_blank" rel="noopener" class="coach-instagram" aria-label="Instagram profile">📸 @${escapeHTML(c.instagram)}</a>`;
      }
      html += '</li>';
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
  if (a.courtSurfaces && a.courtSurfaces.length) {
    html += `<div class="detail-section"><h4>${getSportConfig().icon} ${getSportConfig().surfaceLabel}</h4><p>${a.courtSurfaces.map(escapeHTML).join(' • ')}</p></div>`;
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
  if (a.airport) {
    const flightUrl = `https://www.google.com/travel/flights?q=flights+to+${encodeURIComponent(a.airport.code)}`;
    html += `<div class="detail-section"><h4>✈️ Airport</h4><p>${escapeHTML(a.airport.name)} (${escapeHTML(a.airport.code)}) — ${escapeHTML(a.airport.distance)}, ${escapeHTML(a.airport.driveTime)} drive</p>`;
    html += `<a href="${flightUrl}" target="_blank" rel="noopener" class="btn-flight">🔍 Search Flights to ${escapeHTML(a.airport.code)}</a></div>`;
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
  if (a.nearbyRestaurants && a.nearbyRestaurants.length) {
    html += '<div class="detail-section"><h4>🍽️ Nearby Restaurants</h4>';
    html += '<table class="hotel-table"><thead><tr><th>Restaurant</th><th>Cuisine</th><th>Distance</th><th>Price</th><th>Rating</th><th>Vegetarian</th><th>Outdoor</th></tr></thead><tbody>';
    a.nearbyRestaurants.forEach(r => {
      const ratingStars = '⭐'.repeat(Math.round(r.rating));
      html += `<tr>
        <td><strong>${escapeHTML(r.name)}</strong></td>
        <td>${escapeHTML(r.cuisine)}</td>
        <td>${r.distanceKm} km</td>
        <td>${escapeHTML(r.priceRange)}</td>
        <td>${ratingStars}</td>
        <td>${r.vegetarian ? '🥬 Yes' : '—'}</td>
        <td>${r.outdoor ? '☀️ Yes' : '—'}</td>
      </tr>`;
    });
    html += '</tbody></table></div>';
  }
  if (a.nearbyMedical && a.nearbyMedical.length) {
    html += '<div class="detail-section"><h4>🏥 Nearby Medical</h4>';
    html += '<table class="hotel-table"><thead><tr><th>Facility</th><th>Type</th><th>Distance</th><th>Phone</th><th>Emergency</th></tr></thead><tbody>';
    a.nearbyMedical.forEach(m => {
      html += `<tr><td><strong>${escapeHTML(m.name)}</strong></td><td>${escapeHTML(m.type)}</td><td>${m.distanceKm} km</td><td>${m.phone ? escapeHTML(m.phone) : '—'}</td><td>${m.emergency ? '🚨 Yes' : '—'}</td></tr>`;
    });
    html += '</tbody></table></div>';
  }
  if (a.costOfLiving) {
    const col = a.costOfLiving;
    html += `<div class="detail-section"><h4>💰 Cost of Living</h4>`;
    html += `<div class="cost-grid">`;
    html += `<div class="cost-item"><span class="cost-label">🏠 1-Bed Rent</span><span class="cost-value">${escapeHTML(col.rent1Bed)}/mo</span></div>`;
    html += `<div class="cost-item"><span class="cost-label">🍽️ Avg Meal</span><span class="cost-value">${escapeHTML(col.meal)}</span></div>`;
    html += `<div class="cost-item"><span class="cost-label">🛒 Monthly Food</span><span class="cost-value">${escapeHTML(col.monthlyFood)}/mo</span></div>`;
    html += `<div class="cost-item"><span class="cost-label">🚌 Transport</span><span class="cost-value">${escapeHTML(col.transport)}/mo</span></div>`;
    html += `</div>`;
    if (col.summary) html += `<p class="cost-summary">${escapeHTML(col.summary)}</p>`;
    html += `</div>`;
  }
  if (a.scholarships) {
    const icon = a.scholarships.available ? '✅' : '❌';
    html += `<div class="detail-section"><h4>🎓 Scholarships</h4><p>${icon} ${escapeHTML(a.scholarships.details)}</p></div>`;
  }
  if (a.visaInfo) {
    const badges = [];
    if (a.visaInfo.eu) badges.push('<span class="tag tag-visa-eu">🇪🇺 EU</span>');
    if (a.visaInfo.schengen) badges.push('<span class="tag tag-visa-schengen">🛂 Schengen</span>');
    html += `<div class="detail-section"><h4>🛂 Visa Information</h4>`;
    if (badges.length) html += `<p>${badges.join(' ')}</p>`;
    html += `<p><strong>Visa-free:</strong> ${escapeHTML(a.visaInfo.visaFreeCountries)}</p>`;
    if (a.visaInfo.notes) html += `<p><em>${escapeHTML(a.visaInfo.notes)}</em></p>`;
    html += `</div>`;
  }
  if (a.airportTransfers && a.airportTransfers.length) {
    html += '<div class="detail-section"><h4>🚕 Airport Transfers</h4>';
    html += '<table class="hotel-table"><thead><tr><th>Mode</th><th>Duration</th><th>Cost</th><th>Notes</th></tr></thead><tbody>';
    a.airportTransfers.forEach(t => {
      html += `<tr><td><strong>${escapeHTML(t.mode)}</strong></td><td>${escapeHTML(t.duration)}</td><td>${escapeHTML(t.cost)}</td><td>${escapeHTML(t.notes)}</td></tr>`;
    });
    html += '</tbody></table></div>';
  }
  if (a.nearbyTournaments && a.nearbyTournaments.length) {
    html += '<div class="detail-section"><h4>🏆 Nearby Tournaments</h4><ul>';
    a.nearbyTournaments.forEach(t => {
      html += `<li><strong>${escapeHTML(t.name)}</strong> (${escapeHTML(t.level)}) — ${escapeHTML(t.surface)}, ${escapeHTML(t.month)} @ ${escapeHTML(t.venue)}</li>`;
    });
    html += '</ul></div>';
  }
  if (a.videoTour) {
    const videoId = a.videoTour.match(/(?:v=|\/embed\/|youtu\.be\/)([^&?]+)/);
    if (videoId) {
      html += `<div class="detail-section"><h4>🎥 Video Tour</h4>`;
      html += `<div class="video-container"><iframe src="https://www.youtube.com/embed/${escapeHTML(videoId[1])}" frameborder="0" allowfullscreen loading="lazy" title="Academy video tour"></iframe></div></div>`;
    } else {
      html += `<div class="detail-section"><h4>🎥 Video Tour</h4><a href="${escapeHTML(a.videoTour)}" target="_blank" rel="noopener" class="btn-visit">▶️ Watch Video</a></div>`;
    }
  }
  const weatherId = `weather-${a.id}`;
  html += `<div class="detail-section"><h4>🌤️ Current Weather — ${escapeHTML(a.city)}</h4><div id="${weatherId}"><em>Loading...</em></div></div>`;
  if (a.website) {
    html += `<div class="detail-section"><h4>Website</h4><a href="${escapeHTML(a.website)}" target="_blank" rel="noopener">${escapeHTML(a.website)}</a></div>`;
  }
  // Nearby cross-sport section
  const nearbyId = `nearby-${a.id}`;
  html += `<div class="detail-section nearby-section" id="${nearbyId}"><h4>🏟️ Nearby Academies in Other Sports</h4><p><em>Loading...</em></p></div>`;

  // Action buttons
  html += buildDetailActions(a);

  // Load cross-sport data after render
  setTimeout(() => {
    const container = document.getElementById(nearbyId);
    if (!container) return;
    loadCrossSportData().then(sportData => {
      const nearby = [];
      sportData.forEach(sd => {
        sd.academies.forEach(other => {
          if (typeof other.lat !== 'number' || typeof other.lng !== 'number') return;
          const dist = haversineDistance(a.lat, a.lng, other.lat, other.lng);
          if (dist <= 50) {
            nearby.push({ sport: sd.sport, icon: sd.icon, sportName: sd.name, page: sd.page, name: other.name, id: other.id, distance: dist });
          }
        });
      });
      nearby.sort((x, y) => x.distance - y.distance);
      const top = nearby.slice(0, 3);
      if (top.length === 0) {
        container.innerHTML = '<h4>🏟️ Nearby Academies in Other Sports</h4><p class="nearby-empty">No other sport academies within 50 km</p>';
      } else {
        let nh = '<h4>🏟️ Nearby Academies in Other Sports</h4>';
        top.forEach(n => {
          const km = n.distance < 1 ? '< 1 km' : Math.round(n.distance) + ' km';
          nh += `<a href="${n.page}?highlight=${encodeURIComponent(n.id)}" class="nearby-item nearby-link">`;
          nh += `<span class="nearby-icon">${n.icon}</span>`;
          nh += `<span class="nearby-name">${escapeHTML(n.name)}</span>`;
          nh += `<span class="nearby-distance">${km}</span>`;
          nh += `</a>`;
        });
        container.innerHTML = nh;
      }
    }).catch(() => {
      const container2 = document.getElementById(nearbyId);
      if (container2) container2.innerHTML = '<h4>🏟️ Nearby Academies in Other Sports</h4><p class="nearby-empty">Could not load nearby academies</p>';
    });
  }, 0);

  return html;
}

/* ===== Detail Action Buttons ===== */
function buildDetailActions(a) {
  let html = '<div class="detail-actions">';
  html += `<button class="btn-inquiry" onclick="openInquiry('${a.id}')">📩 Send Inquiry</button>`;
  if (a.website) {
    html += `<a href="${escapeHTML(a.website)}" target="_blank" rel="noopener" class="btn-visit">🌐 Visit Website</a>`;
  }
  html += `<button class="btn-qr" onclick="showQRCode('${a.id}')" aria-label="Share QR Code for ${escapeHTML(a.name)}">📱 Share QR Code</button>`;
  html += `<button class="btn-calculator" onclick="showTripCalculator('${a.id}')" aria-label="Estimate trip cost">🧮 Trip Cost</button>`;
  const partners = getPartnerRequests();
  const partnerActive = partners[a.id];
  html += `<button class="btn-partner ${partnerActive ? 'active' : ''}" onclick="togglePartnerRequest('${a.id}')">🤝 ${partnerActive ? 'Looking for Partners ✓' : 'Find Partners'}</button>`;
  html += '</div>';
  return html;
}

/* ===== Share Academy ===== */
function shareAcademy(id) {
  const a = ACADEMIES.find(ac => ac.id === id);
  if (!a) return;
  const url = window.location.origin + window.location.pathname + '#academy=' + id;
  const title = a.name + ' — European ' + getSportConfig().name + ' Academies';
  if (navigator.share) {
    navigator.share({ title, text: `Check out ${a.name} in ${a.city}, ${a.country}`, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => showToast('Link copied!')).catch(() => showToast('Could not copy'));
  }
}

function showQRCode(id) {
  const a = ACADEMIES.find(ac => ac.id === id);
  if (!a) return;
  const shareUrl = window.location.origin + window.location.pathname + '#academy=' + id;
  const qrApiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(shareUrl);

  // Save previously focused element for focus restoration
  const previousFocus = document.activeElement;

  // Remove existing modal if any
  const existing = document.getElementById('qrModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'qrModal';
  modal.className = 'qr-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'QR code for ' + a.name);
  modal.innerHTML = `
    <div class="qr-modal-content">
      <button class="qr-modal-close" aria-label="Close QR code">&times;</button>
      <h3>${escapeHTML(a.name)}</h3>
      <p>Scan to share this academy</p>
      <img class="qr-code-img" src="${qrApiUrl}" alt="QR Code for ${escapeHTML(a.name)}" width="200" height="200" loading="lazy">
      <button class="btn-copy-link" aria-label="Copy academy link">📋 Copy Link</button>
    </div>
  `;
  document.body.appendChild(modal);

  function closeQR() {
    modal.remove();
    if (previousFocus) previousFocus.focus();
  }

  // Focus trap within QR modal
  modal.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeQR(); return; }
    if (e.key === 'Tab') {
      const focusable = modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  modal.querySelector('.qr-modal-close').addEventListener('click', closeQR);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeQR(); });
  modal.querySelector('.btn-copy-link').addEventListener('click', () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast('Link copied!');
    }).catch(() => {
      showToast('Could not copy link');
    });
  });

  // Focus the close button
  modal.querySelector('.qr-modal-close').focus();
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

/* ===== Trip Cost Calculator ===== */
function showTripCalculator(id) {
  const a = ACADEMIES.find(ac => ac.id === id);
  if (!a) return;
  const card = document.getElementById('card-' + id);
  if (!card) return;

  const existing = card.querySelector('.trip-calculator');
  if (existing) { existing.remove(); return; }

  let programCost = a.priceRange.from || 0;
  let hotelCost = 0;
  if (a.nearbyHotels && a.nearbyHotels.length) {
    const cheapest = a.nearbyHotels.reduce((min, h) => {
      const price = parseInt(String(h.pricePerNight).replace(/[^0-9]/g, ''), 10) || 0;
      return price < min ? price : min;
    }, Infinity);
    hotelCost = cheapest === Infinity ? 0 : cheapest * 30;
  }
  const total = programCost + hotelCost;

  let html = '<div class="trip-calculator">';
  html += '<h5>🧮 Estimated Monthly Trip Cost</h5>';
  html += `<div class="calc-row"><span>Program (1 month)</span><span>${convertPrice(programCost)}</span></div>`;
  html += `<div class="calc-row"><span>Hotel (30 nights, cheapest)</span><span>${convertPrice(hotelCost)}</span></div>`;
  html += `<div class="calc-row calc-total"><span>Estimated Total</span><span>${convertPrice(total)}</span></div>`;
  html += '</div>';

  const actions = card.querySelector('.detail-actions');
  if (actions) {
    actions.insertAdjacentHTML('afterend', html);
  }
}

/* ===== Export CSV ===== */
function exportCSV() {
  const filtered = getFilteredAcademies();
  const headers = ['Name','Country','City','Level','Individual Lessons','Boarding','Price Range','Top Coach','Website'];
  const rows = filtered.map(a => {
    const coach = a.coaches.length ? a.coaches[0].name : 'N/A';
    return [a.name, a.country, a.city, a.level, a.individualLessons ? 'Yes' : 'No', a.boarding ? 'Yes' : 'No', a.priceRange.display, coach, a.website || ''].map(v => `"${v}"`).join(',');
  });
  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = getSportConfig().storagePrefix + '-academies.csv';
  link.click();
  URL.revokeObjectURL(url);
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
  btn.setAttribute('aria-expanded', String(isOpen));

  // Move focus to details panel when expanding
  if (isOpen) {
    details.setAttribute('tabindex', '-1');
    details.focus();
  }

  // Store recently viewed academy
  if (isOpen) {
    try {
      const card = btn.closest('.academy-card');
      if (card) {
        const nameEl = card.querySelector('.card-title span');
        const academyName = nameEl ? nameEl.textContent.replace(/[★☆]\s*$/, '').trim() : '';
        if (academyName) {
          const sport = getSportType();
          const items = JSON.parse(localStorage.getItem('recently-viewed') || '[]');
          // Remove duplicate
          const filtered = items.filter(function(x) { return x.name !== academyName || x.sport !== sport; });
          filtered.unshift({ name: academyName, sport: sport, timestamp: Date.now() });
          // Keep max 20
          localStorage.setItem('recently-viewed', JSON.stringify(filtered.slice(0, 20)));
        }
      }
    } catch (e) { /* ignore */ }
  }
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
  if (state.currency !== 'EUR') params.set('currency', state.currency);
  if (state.surface) params.set('surface', state.surface);
  ['price', 'individual', 'boarding', 'beach', 'atp', 'top10', 'nearMe'].forEach(k => {
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
  state.currency = params.get('currency') || 'EUR';
  state.surface = params.get('surface') || '';
  ['price', 'individual', 'boarding', 'beach', 'atp', 'top10', 'nearMe'].forEach(k => {
    state[k] = params.get(k) === '1';
  });
  state.showFavorites = params.get('fav') === '1';
  document.getElementById('filterCountry').value = state.country;
  document.getElementById('filterLevel').value = state.level;
  document.getElementById('filterSort').value = state.sort;
  document.getElementById('filterSearch').value = state.search;
  document.getElementById('filterCurrency').value = state.currency;
  document.getElementById('filterSurface').value = state.surface;
  const idMap = { price: 'togglePrice', individual: 'toggleIndividual', boarding: 'toggleBoarding', beach: 'toggleBeach', atp: 'toggleATP', top10: 'toggleTop10', nearMe: 'toggleNearMe' };
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
  document.getElementById('filterCurrency').addEventListener('change', e => { state.currency = e.target.value; applyAndRender(); });
  document.getElementById('filterSurface').addEventListener('change', e => { state.surface = e.target.value; applyAndRender(); });

  let searchTimer;
  document.getElementById('filterSearch').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.search = e.target.value.trim(); applyAndRender(); }, 250);
  });

  document.querySelectorAll('.toggle-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.filter;
      if (key === 'nearMe') {
        state.nearMe = !state.nearMe;
        btn.classList.toggle('active', state.nearMe);
        if (state.nearMe && !userLocation) {
          getUserLocation().then(() => {
            state.sort = 'distance';
            document.getElementById('filterSort').value = 'distance';
            applyAndRender();
          }).catch(() => {
            state.nearMe = false;
            btn.classList.remove('active');
            showToast('Location access denied');
          });
        } else {
          if (!state.nearMe) {
            state.sort = 'name';
            document.getElementById('filterSort').value = 'name';
          } else {
            state.sort = 'distance';
            document.getElementById('filterSort').value = 'distance';
          }
          applyAndRender();
        }
        return;
      }
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

  // Export
  document.getElementById('btnExport').addEventListener('click', exportCSV);

  // Reset
  document.getElementById('btnReset').addEventListener('click', () => {
    Object.keys(state).forEach(k => {
      if (k === 'sort') state[k] = 'name';
      else if (k === 'viewMode') { /* keep current view */ }
      else if (k === 'currency') state[k] = 'EUR';
      else if (k === 'surface') state[k] = '';
      else if (typeof state[k] === 'boolean') state[k] = false;
      else state[k] = '';
    });
    document.getElementById('filterCountry').value = '';
    document.getElementById('filterLevel').value = '';
    document.getElementById('filterSort').value = 'name';
    document.getElementById('filterSearch').value = '';
    document.getElementById('filterCurrency').value = 'EUR';
    document.getElementById('filterSurface').value = '';
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

  // Inquiry modal
  document.getElementById('inquiryClose').addEventListener('click', closeInquiry);
  document.getElementById('inquiryModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeInquiry(); });
  document.getElementById('inquiryForm').addEventListener('submit', e => {
    e.preventDefault();
    const id = document.getElementById('inquiryAcademyId').value;
    const a = ACADEMIES.find(ac => ac.id === id);
    const name = document.getElementById('inquiryName').value;
    const email = document.getElementById('inquiryEmail').value;
    const level = document.getElementById('inquiryLevel').value;
    const duration = document.getElementById('inquiryDuration').value;
    const msg = document.getElementById('inquiryMessage').value;
    const subject = encodeURIComponent(`Inquiry about ${a.name}`);
    const body = encodeURIComponent(`Hi,\n\nI found ${a.name} on European ${getSportConfig().name} Academies and I'm interested in learning more.\n\nName: ${name}\nEmail: ${email}\nLevel: ${level}\nDuration: ${duration}\n\n${msg}\n\nBest regards,\n${name}`);
    window.location.href = `mailto:${a.contact || ''}?subject=${subject}&body=${body}`;
    closeInquiry();
    showToast('Opening email client...');
  });

  // Keyboard support for star ratings (arrow keys to navigate, Enter/Space to select)
  document.addEventListener('keydown', function(e) {
    const el = e.target;
    if (el.classList.contains('rate-star')) {
      const academyId = el.getAttribute('data-academy');
      const currentRating = parseInt(el.getAttribute('data-rating'), 10);
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        const next = currentRating < 5 ? currentRating + 1 : 1;
        rateAcademy(academyId, next);
        setTimeout(function() {
          const star = document.querySelector('.rate-star[data-academy="' + academyId + '"][data-rating="' + next + '"]');
          if (star) star.focus();
        }, 50);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        const prev = currentRating > 1 ? currentRating - 1 : 5;
        rateAcademy(academyId, prev);
        setTimeout(function() {
          const star = document.querySelector('.rate-star[data-academy="' + academyId + '"][data-rating="' + prev + '"]');
          if (star) star.focus();
        }, 50);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        rateAcademy(academyId, currentRating);
      }
    }
    // Keyboard support for favorite hearts and compare checkboxes
    if ((e.key === 'Enter' || e.key === ' ') && el.classList.contains('fav-heart')) {
      e.preventDefault();
      const id = el.getAttribute('data-id');
      if (id) toggleFavorite(id);
    }
    if ((e.key === 'Enter' || e.key === ' ') && el.classList.contains('compare-check')) {
      e.preventDefault();
      const id = el.getAttribute('data-id');
      if (id) toggleCompare(id);
    }
  });

  // Escape key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    if (document.getElementById('compareModal').style.display === 'flex') closeCompareModal();
    else if (document.getElementById('wizardModal').style.display === 'flex') closeWizard();
    else if (document.getElementById('inquiryModal').style.display === 'flex') closeInquiry();
  });

  // Add ARIA attributes to static modals
  ['compareModal', 'wizardModal', 'inquiryModal'].forEach(function(id) {
    var modal = document.getElementById(id);
    if (modal) {
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
    }
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
  _compareModalPreviousFocus = document.activeElement;
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
    { label: 'Beach Distance', fn: a => typeof a.beach?.distance === 'number' ? a.beach.distance + ' km' : 'N/A' },
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
  document.getElementById('compareModal').querySelector('.modal-close').focus();
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

var _compareModalPreviousFocus = null;
function closeCompareModal() {
  document.getElementById('compareModal').style.display = 'none';
  if (_compareModalPreviousFocus) { _compareModalPreviousFocus.focus(); _compareModalPreviousFocus = null; }
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

var _wizardPreviousFocus = null;
function openWizard() {
  _wizardPreviousFocus = document.activeElement;
  wizardAnswers = {};
  wizardCurrentStep = 0;
  document.getElementById('wizardModal').style.display = 'flex';
  renderWizardStep();
  document.getElementById('wizardModal').querySelector('.modal-close').focus();
}

function closeWizard() {
  document.getElementById('wizardModal').style.display = 'none';
  if (_wizardPreviousFocus) { _wizardPreviousFocus.focus(); _wizardPreviousFocus = null; }
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
    if (typeof a.beach?.distance === 'number') score += 1;
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
    if (typeof a.beach?.distance === 'number') score += priorityWeight;
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
  if (priorities.includes('beach') && typeof a.beach?.distance === 'number') reasons.push('Near beach');
  if (priorities.includes('boarding') && a.boarding) reasons.push('Boarding available');
  if (priorities.includes('pricing') && a.priceRange.from !== null) reasons.push('Clear pricing');
  if (priorities.includes('alumni') && a.notableAlumni && a.notableAlumni.length > 0) reasons.push('Notable alumni');
  if (a.priceRange.from !== null) reasons.push(a.priceRange.display);
  else reasons.push('Contact for pricing');
  reasons.push(a.city + ', ' + a.country);
  return reasons;
}

/* ===== User Ratings ===== */
function getUserRatings() {
  try { return JSON.parse(localStorage.getItem(getSportConfig().storagePrefix + '-ratings')) || {}; } catch { return {}; }
}
function saveUserRating(id, rating) {
  const ratings = getUserRatings();
  ratings[id] = rating;
  localStorage.setItem(getSportConfig().storagePrefix + '-ratings', JSON.stringify(ratings));
}
/* ===== Trip Cost Calculator ===== */
function getTravelEstimate(country) {
  const eastern = ['Serbia','Croatia','Bulgaria','Romania','Hungary','Czech Republic','Poland','Montenegro','Bosnia','North Macedonia','Slovakia','Slovenia'];
  if (eastern.some(c => country && country.includes(c))) return 200;
  return 350;
}

function renderCostCalculator(a) {
  if (a.priceRange.from === null) {
    return '<div class="detail-section cost-calculator"><h4>💰 Trip Cost Calculator</h4><p>Contact academy for pricing</p></div>';
  }
  const calcId = 'calc-' + a.id;
  let html = '<div class="detail-section cost-calculator" id="' + calcId + '">';
  html += '<h4>💰 Trip Cost Calculator</h4>';
  html += '<div class="cost-calc-controls">';
  html += '<div class="cost-calc-row"><label>Duration: <strong class="calc-weeks-label">4 weeks</strong></label>';
  html += '<input type="range" class="cost-slider" min="1" max="12" value="4" data-calc-field="weeks"></div>';
  html += '<div class="cost-calc-row"><label>Accommodation:</label>';
  html += '<select data-calc-field="accom"><option value="academy">Academy housing</option><option value="external">External</option></select></div>';
  html += '<div class="cost-calc-row"><label><input type="checkbox" data-calc-field="travel" checked> Include travel estimate</label></div>';
  html += '</div>';
  html += '<div class="cost-breakdown"></div>';
  html += '</div>';

  const monthlyFrom = a.priceRange.from;
  const accomBase = 600;
  const accomExternal = 400;
  const travelBase = getTravelEstimate(a.country);
  const travelMax = travelBase + 150;
  const country = a.country || '';

  // Attach behavior after render via setTimeout
  setTimeout(() => {
    const container = document.getElementById(calcId);
    if (!container) return;
    const slider = container.querySelector('[data-calc-field="weeks"]');
    const accomSel = container.querySelector('[data-calc-field="accom"]');
    const travelChk = container.querySelector('[data-calc-field="travel"]');
    const weekLabel = container.querySelector('.calc-weeks-label');
    const breakdown = container.querySelector('.cost-breakdown');

    function update() {
      const weeks = parseInt(slider.value, 10);
      weekLabel.textContent = weeks + ' week' + (weeks !== 1 ? 's' : '');
      const trainingFee = Math.round(monthlyFrom * weeks / 4.33);
      const accomWeekly = accomSel.value === 'academy' ? Math.round(accomBase / 4.33) : Math.round(accomExternal / 4.33);
      const accomTotal = accomWeekly * weeks;
      const includeTravel = travelChk.checked;
      const travelMid = Math.round((travelBase + travelMax) / 2);
      let total = trainingFee + accomTotal;
      let rows = '';
      rows += '<div class="cost-row"><span>Training fees (' + weeks + ' wk' + (weeks !== 1 ? 's' : '') + ')</span><span>' + convertPrice(trainingFee) + '</span></div>';
      rows += '<div class="cost-row"><span>Accommodation (' + (accomSel.value === 'academy' ? 'Academy' : 'External') + ')</span><span>' + convertPrice(accomTotal) + '</span></div>';
      if (includeTravel) {
        total += travelMid;
        rows += '<div class="cost-row"><span>Travel estimate</span><span>' + convertPrice(travelBase) + ' – ' + convertPrice(travelMax) + '</span></div>';
      }
      rows += '<div class="cost-total"><span>Total estimated cost</span><span>' + convertPrice(total) + '</span></div>';
      breakdown.innerHTML = rows;
    }

    slider.addEventListener('input', update);
    accomSel.addEventListener('change', update);
    travelChk.addEventListener('change', update);
    update();
  }, 0);

  return html;
}

/* ===== Upcoming Camps Renderer ===== */
function renderUpcomingCamps(camps) {
  const sorted = camps.slice().sort((a, b) => a.startDate.localeCompare(b.startDate));
  const now = new Date();
  const soon = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

  function fmtDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  let html = '<div class="detail-section camps-section">';
  html += '<h4>📅 Upcoming Camps</h4>';
  html += '<table class="camps-table"><thead><tr><th>Camp</th><th>Dates</th><th>Price</th><th>Level</th></tr></thead><tbody>';
  sorted.forEach(c => {
    const start = new Date(c.startDate + 'T00:00:00');
    const isSoon = start >= now && start <= soon;
    html += '<tr class="camp-item' + (isSoon ? ' camp-soon' : '') + '">';
    html += '<td>' + escapeHTML(c.name) + (isSoon ? ' <span class="camp-badge-soon">Starting soon!</span>' : '') + '</td>';
    html += '<td>' + fmtDate(c.startDate) + ' – ' + fmtDate(c.endDate) + '</td>';
    html += '<td>' + escapeHTML(c.price) + '</td>';
    html += '<td>' + escapeHTML(c.level) + '</td>';
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  return html;
}

function renderStarRating(academyId) {
  const ratings = getUserRatings();
  const current = ratings[academyId] || 0;
  let html = '<div class="user-rating" role="radiogroup" aria-label="Rate this academy">';
  for (let i = 1; i <= 5; i++) {
    const cls = i <= current ? 'star-filled' : 'star-empty';
    const checked = i === current ? 'true' : 'false';
    html += `<span class="rate-star ${cls}" onclick="rateAcademy('${academyId}', ${i})" tabindex="0" role="radio" aria-checked="${checked}" aria-label="Rate ${i} of 5 stars" title="Rate ${i} stars" data-academy="${academyId}" data-rating="${i}">${i <= current ? '★' : '☆'}</span>`;
  }
  if (current > 0) html += `<span class="rating-text">(Your rating: ${current}/5)</span>`;
  html += '</div>';
  return html;
}
function rateAcademy(id, rating) {
  saveUserRating(id, rating);
  applyAndRender();
  showToast(`Rated ${rating} ⭐`);
}

/* ===== Weather Widget ===== */
function loadWeather(city, elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.innerHTML = '<em>Loading weather...</em>';
  fetch(`https://wttr.in/${encodeURIComponent(city)}?format=%C+%t+%w&lang=en`)
    .then(r => r.text())
    .then(text => { el.innerHTML = `🌤️ <strong>Now:</strong> ${escapeHTML(text.trim())}`; })
    .catch(() => { el.innerHTML = '<em>Weather unavailable</em>'; });
}

/* ===== Inquiry Modal ===== */
var _inquiryPreviousFocus = null;
function openInquiry(id) {
  const a = ACADEMIES.find(ac => ac.id === id);
  if (!a) return;
  _inquiryPreviousFocus = document.activeElement;
  document.getElementById('inquiryAcademyId').value = id;
  document.getElementById('inquiryModal').style.display = 'flex';
  document.getElementById('inquiryModal').querySelector('h2').textContent = `📩 Inquiry — ${a.name}`;
  document.getElementById('inquiryModal').querySelector('.modal-close').focus();
}
function closeInquiry() {
  document.getElementById('inquiryModal').style.display = 'none';
  if (_inquiryPreviousFocus) { _inquiryPreviousFocus.focus(); _inquiryPreviousFocus = null; }
}

/* ===== Training Partners ===== */
function getPartnerRequests() {
  try { return JSON.parse(localStorage.getItem(getSportConfig().storagePrefix + '-partners')) || {}; } catch { return {}; }
}
function togglePartnerRequest(id) {
  const partners = getPartnerRequests();
  if (partners[id]) delete partners[id];
  else partners[id] = { date: new Date().toISOString().split('T')[0] };
  localStorage.setItem(getSportConfig().storagePrefix + '-partners', JSON.stringify(partners));
  applyAndRender();
  showToast(partners[id] ? '🤝 Marked as looking for partners!' : 'Removed partner request');
}

/* ===== News Feed ===== */
const DEFAULT_NEWS_ITEMS = [
  { date: "2026-04-15", text: "European sports academies see record enrollment for 2026 season", academy: null },
  { date: "2026-04-10", text: "New training methodologies adopted across European academies", academy: null },
  { date: "2026-04-05", text: "Summer camp registrations now open at top academies", academy: null }
];

function renderNews() {
  const newsItems = typeof NEWS_ITEMS !== 'undefined' ? NEWS_ITEMS : DEFAULT_NEWS_ITEMS;
  if (!newsItems || !newsItems.length) {
    const ticker = document.getElementById('newsTicker');
    if (ticker) ticker.style.display = 'none';
    return;
  }
  const scroll = document.getElementById('newsScroll');
  if (!scroll) return;
  scroll.innerHTML = newsItems.map(n => {
    const link = n.academy ? ` <a href="#academy=${n.academy}" onclick="scrollToAcademy('${n.academy}')">[View]</a>` : '';
    return `<span class="news-item"><strong>${n.date}:</strong> ${escapeHTML(n.text)}${link}</span>`;
  }).join('<span class="news-sep">•</span>');
}

function scrollToAcademy(id) {
  const card = document.getElementById('card-' + id);
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

/* ===== Photo Gallery Lightbox ===== */
(function() {
  let gallery_currentPhotos = [];
  let gallery_currentIndex = 0;
  let gallery_previousFocus = null;

  function gallery_getOverlay() {
    let overlay = document.getElementById('galleryOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'galleryOverlay';
      overlay.className = 'gallery-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'Photo gallery');
      overlay.innerHTML = `
        <button class="gallery-close" aria-label="Close gallery">&times;</button>
        <button class="gallery-prev" aria-label="Previous photo">&#10094;</button>
        <img class="gallery-img" alt="Academy photo" loading="lazy">
        <button class="gallery-next" aria-label="Next photo">&#10095;</button>
        <div class="gallery-counter" aria-live="polite"></div>
      `;
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) gallery_close();
      });
      overlay.querySelector('.gallery-close').addEventListener('click', gallery_close);
      overlay.querySelector('.gallery-prev').addEventListener('click', function() { gallery_navigate(-1); });
      overlay.querySelector('.gallery-next').addEventListener('click', function() { gallery_navigate(1); });

      // Focus trap within gallery
      overlay.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
          var focusable = overlay.querySelectorAll('button:not([style*="display: none"]):not([style*="display:none"])');
          if (focusable.length === 0) return;
          var first = focusable[0];
          var last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      });

      document.body.appendChild(overlay);
    }
    return overlay;
  }

  function gallery_show() {
    const overlay = gallery_getOverlay();
    const img = overlay.querySelector('.gallery-img');
    const counter = overlay.querySelector('.gallery-counter');
    img.src = gallery_currentPhotos[gallery_currentIndex];
    img.alt = 'Academy photo ' + (gallery_currentIndex + 1) + ' of ' + gallery_currentPhotos.length;
    counter.textContent = (gallery_currentIndex + 1) + ' / ' + gallery_currentPhotos.length;
    overlay.querySelector('.gallery-prev').style.display = gallery_currentPhotos.length > 1 ? '' : 'none';
    overlay.querySelector('.gallery-next').style.display = gallery_currentPhotos.length > 1 ? '' : 'none';
  }

  function gallery_navigate(dir) {
    gallery_currentIndex = (gallery_currentIndex + dir + gallery_currentPhotos.length) % gallery_currentPhotos.length;
    gallery_show();
  }

  window.gallery_open = function(academyId) {
    const a = ACADEMIES.find(function(ac) { return ac.id === academyId; });
    if (!a || !Array.isArray(a.photos) || !a.photos.length) return;
    gallery_previousFocus = document.activeElement;
    gallery_currentPhotos = a.photos;
    gallery_currentIndex = 0;
    gallery_show();
    var overlay = gallery_getOverlay();
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    overlay.querySelector('.gallery-close').focus();
  };

  window.gallery_close = gallery_close;
  function gallery_close() {
    const overlay = document.getElementById('galleryOverlay');
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = '';
    if (gallery_previousFocus) { gallery_previousFocus.focus(); gallery_previousFocus = null; }
  }

  document.addEventListener('keydown', function(e) {
    const overlay = document.getElementById('galleryOverlay');
    if (!overlay || overlay.style.display === 'none') return;
    if (e.key === 'Escape') gallery_close();
    if (e.key === 'ArrowLeft') gallery_navigate(-1);
    if (e.key === 'ArrowRight') gallery_navigate(1);
  });
})();