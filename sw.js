const CACHE_NAME = 'madasa-game-cache-v2'; // Ubah ke v2 agar sistem melakukan update otomatis

// Daftar semua file yang akan disimpan agar bisa dimainkan offline
const urlsToCache = [
  './',
  './index.html',
  './balon.html',
  './bayangan.html',
  './bintang.html',
  './memori.html',
  './anakshalih.html',
  './hitung.html',
  './angka.html',
  './tajwid.html',
  './fiqih.html',
  './ciptaan.html',
  './cari-beda.html',
  './harakat.html',
  './huruf-awal.html',
  './susun-kata.html',
  './warna.html',
  './kereta.html',
  './hijaiyah.html',
  './nabi.html',
  './penjumlahan.html',
  './pengurangan.html',
  './perkalian.html',
  './pembagian.html',
  './campuran.html',
  './campuran 2 player.html',
  './manifest.json',
  './asset/logo.png',
  './asset/musik.mp3' // Jangan lupa musiknya dicache!
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
    })
  );
});