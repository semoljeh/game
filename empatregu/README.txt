MADASA QUIZ FIX8 - LENGKAP

FILE:
- host.html = layar juri / proyektor
- buzzer.html = halaman HP regu
- soal/manifest.json = daftar kategori
- soal/islami/*.json = bank soal Islami
- soal/umum/*.json = bank soal Umum

ALUR:
1. Upload seluruh folder dengan struktur tetap ke GitHub/hosting.
2. Juri buka host.html.
3. Pilih 2/3/4 regu, kategori, materi, dan waktu.
4. Buat Room.
5. Regu scan QR atau buka buzzer.html dan masukkan kode.
6. Tes tombol realtime.
7. Setelah semua regu terhubung, tekan MULAI QUIZ.
8. Timer berjalan. Saat buzzer tercepat ditekan, timer berhenti.
9. BENAR = +10 dan soal selesai.
10. SALAH/LEMPAR = regu tersebut terkunci, buzzer dibuka untuk regu lain, timer MELANJUTKAN sisa waktu.
11. Waktu 0 = buzzer ditutup.

MENAMBAH SOAL:
Buka file JSON materi yang diinginkan lalu tambahkan objek:
{
  "id": 999,
  "soal": "Pertanyaan...",
  "jawaban": "Jawaban..."
}

CATATAN:
Campuran Islami hanya menggabungkan file di folder islami.
Campuran Umum hanya menggabungkan file di folder umum.
Jangan membuka host.html dengan file:// karena fetch bank soal JSON dibatasi browser. Gunakan GitHub Pages/hosting/server lokal.


AUDIO:
- asset/musik.mp3 = musik latar, loop
- asset/lucu.mp3 = musik sementara ketika LIHAT JAWABAN ditekan

SETTING:
- Pengaturan dipindah ke popup tombol ⚙️ SETTING.
- Popup dapat ditutup dengan ×, Escape, atau tombol Back HP tanpa keluar dari halaman host.

FIX10:
- Semua tombol memiliki efek tekan/ripple dan suara klik.
- Modal Setting dirapikan untuk laptop, HP portrait, dan landscape.
- klik.mp3 opsional; tanpa file tersebut tetap ada efek klik sintetis.
