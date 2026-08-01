// UBAH VERSI KE v6 
const CACHE_NAME = 'madasa-game-cache-v7'; 

// Tambahkan nama folder "empatregu/" dan "campuran/" untuk file yang ada di dalam
const urlsToCache = [
  './',
  './index.html',
  './empatregu/buzzer.html',
  './empatregu/display.html',
  './empatregu/host.html',
  './campuran/campuran2playeronline.html',
  './campuran/display_vs.html',
  './manifest.json',
  './asset/logo.png'
];

// Proses Install & Menyimpan Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache berhasil dibuka');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Proses Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request);
    })
  );
});

// Update Cache & Hapus Versi Lama
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});