// UBAH VERSI KE v3 AGAR CACHE LAMA (v2) TERHAPUS
const CACHE_NAME = 'madasa-game-cache-v3'; 

// Daftar semua file yang akan disimpan agar bisa dimainkan offline
const urlsToCache = [
  './',
  './index.html',
  './balon.html',
  './bayangan.html',
  './bintang.html',
  './memori.html',
  './kuis.html',
  './hitung.html',
  './angka.html',
  './buzzer.html',   // File Buzzer
  './display.html',  // <-- FILE DISPLAY DITAMBAHKAN KE SINI
  './host.html',     // <-- FILE HOST DITAMBAHKAN AGAR LENGKAP
  './manifest.json',
  './asset/logo.png'
];

// Proses Install & Menyimpan Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  // Memaksa service worker baru untuk langsung aktif
  self.skipWaiting();
});

// Proses Fetch (Mengambil data dari cache saat offline)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Jika file ada di cache, gunakan file tersebut (offline mode)
        if (response) {
          return response;
        }
        // Jika tidak ada, ambil dari internet
        return fetch(event.request);
      })
  );
});

// Update Cache secara otomatis jika ada versi baru
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
    }).then(() => {
      // Memastikan semua tab langsung menggunakan service worker terbaru
      return self.clients.claim();
    })
  );
});