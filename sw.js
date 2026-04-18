const CACHE_NAME = 'sports-academies-v29';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './i18n.js',
  './manifest.json',
  './tennis.html',
  './data.js',
  './golf.html',
  './golf-data.js',
  './football.html',
  './football-data.js',
  './basketball.html',
  './basketball-data.js',
  './swimming.html',
  './swimming-data.js',
  './volleyball.html',
  './volleyball-data.js',
  './rugby.html',
  './rugby-data.js',
  './ski.html',
  './ski-data.js',
  './cycling.html',
  './cycling-data.js',
  './athletics.html',
  './athletics-data.js',
  './sailing.html',
  './sailing-data.js',
  './rowing.html',
  './rowing-data.js',
  './hockey.html',
  './hockey-data.js',
  './ice-hockey.html',
  './ice-hockey-data.js',
  './handball.html',
  './handball-data.js',
  './fencing.html',
  './fencing-data.js',
  './gymnastics.html',
  './gymnastics-data.js',
  './waterpolo.html',
  './waterpolo-data.js',
  './boxing.html',
  './boxing-data.js',
  './padel.html',
  './padel-data.js',
  './triathlon.html',
  './triathlon-data.js',
  './equestrian.html',
  './equestrian-data.js',
  './surfing.html',
  './surfing-data.js',
  './art.html',
  './art-data.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      if (response && response.status === 200 && response.type === 'basic') {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => caches.match(event.request))
  );
});
