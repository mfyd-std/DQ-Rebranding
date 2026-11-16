# Visual QA Audit Report: Website Daar el-Qolam

**Tanggal Audit:** 23 April 2026
**Browser / Device:** Mobile (Chrome)

> **Catatan Umum:** Jika statusnya [OK], berikan notifikasi di awal bahwa *section* tersebut aman dan tidak ada masalah visual.

---

## 1. Global Components (Navbar & Footer)

**Navbar Mobile (Screen < 1080px)**
* **Posisi Logo dan Teks:** [OK]
    * *Catatan:* *Wordmark* logo hilang. Pertimbangkan untuk menggunakan desain ulang logo yang telah saya buat (ada di folder `LOGO FILE`).
        * `> 00_Lambang`
        * `> 01_Logo Utama` (Gunakan yang ini untuk navbar, tersedia versi vertikal dan horizontal)
        * `> 02_Logo Monokrom`
        * `> 03_Logo Kasual`
    * Buat variasi navbar menggunakan logo horizontal (akses file di `01_Logo Utama`). Terapkan efek *morphism* (*glassmorphism*) pada navbar.
    * Untuk versi mobile ini, buat tombol CTA sedikit lebih kecil dan ubah teksnya menjadi: **"Ayo Mondok!"**

* **Mega Menu Dropdown (Hover):** [NO]
    * Sempat terjadi *error* saat pertama kali mengakses tautan website; menu *dropdown* mengalami *freeze* (membeku). Saya coba klik halaman lain lalu kembali ke halaman utama, dan menu *dropdown*-nya tidak bermasalah lagi. Ketika dicoba di perangkat lain (iOS/Android), menu sudah berfungsi dengan baik.
    * Saya ingin mengubahnya menjadi *full menu dropdown* (memenuhi seluruh area layar). Contoh referensinya sudah ada.
    * Logo harus tetap terlihat (posisinya di pojok kiri atas dan tidak berubah), dan daftar menu berada di bawah logo.
    * Samakan semua jenis *font*-nya (karena *font* menu saat ini berbeda sendiri) dan besarkan sedikit ukurannya.

* **Posisi Hamburger Menu Dropdown:** [NO]
    * Posisinya tidak rata, menu *hamburger* berada di bawah logo.
    * Hapus teks "menu" pada tombol *hamburger* tersebut.
    * Semua *list* menu dibuat rata kiri (*align left*), diratakan sejajar dengan logo.
    * Saat menu dibuka, logo harus tetap terlihat.

* **Animasi Buka / Tutup Menu:** [OK]
    * *Catatan:* Ganti animasinya menjadi *Fade in / Fade out*.
    * Menu *dropdown* harus bergerak mengikuti *container*-nya.
    * Jangan gunakan animasi *slide* kiri/kanan lagi.
    * Semua tombol menu sudah berfungsi dengan baik (✓).

**Footer Mobile**
* **Kerapian Kolom & Margin:** [OK]
    * Kolom *footer* sudah rapi dan bagus.
    * Ganti *font* sub-judul pada setiap kolom *footer*. Samakan jenis *font*-nya dengan bagian *list*, namun gunakan versi *bold* agar kontras.
    * Gunakan pengaturan *Sentence case* untuk semua teks *footer*, khususnya pada bagian sub-judul.
    * Posisikan *section* media sosial tepat di bawah logo DQ.
    * Ubah logo media sosialnya menggunakan logo *secondary*. Akses di folder: `DQ-Rebranding / LOGO FILE / 01_Logo Utama /` (pilih ukuran yang paling kecil format PNG/SVG: `04_Utama_LS_H.png`).
        * *Keterangan file:* LS = Logo Secondary, H = Horizontal Version, LT = Logo Tersier, V = Vertical Version, LU = Logo Utama.

---

## 2. Homepage Sections (index.html)

**Hero Section**
* **Ukuran & Alignment Teks (Mobile):** [OK]
    * Teks *hero* sudah OK, namun bagian teks Arab dan terjemahannya perlu penyesuaian lagi.
    * Bagian *Tags* variannya mungkin bisa diganti agar lebih menonjol (*stand out*).

**Bento Layout / Collage**
* **Bento Collage Layout:** [OK]
    * Perlu penyesuaian pada bagian ornamen. Saat ini ornamen hanya ada di bagian kanan bawah sehingga kurang simetris dan tidak seimbang (*balance*).
    * *(Fatal)* Efek *scroll hover* terpotong pada bagian bento, perlu perbaikan segera.

**Video Profile Section**
* **Rasio Iframe Video (16:9):** [OK]
* **Status Auto-play & Muted:** [OK]

**Brand Motto (Ayat Al-Qur'an)**
* **Contrast Ratio (Teks Emas vs Background Hijau):** [OK]
* **Keterbacaan Font Arab:** [OK]

**Trust & Stats Section**
* **Ukuran Angka (5k+, dll):** [OK]
    * *Opsi tambahan:* Tambahkan animasi *rolling* pada pergerakan angka.
    * Tambahkan lapisan *container* (berbentuk *box*).

**Program Pendidikan (Cards)**
* **Tampilan Grid (1 Kolom Mobile):** [NO]
    * Tambahkan animasi saat tombol ditekan (*pressed*).
    * Perbesar ukuran *headline*-nya.
    * Perbesar ukuran *tags*-nya.

**DQ3 Kampus Dza Izza Section**
* **Gradient Background:** [NO]
    * Kampus DQ3 memiliki warna *brand*-nya sendiri (Ungu dan Hijau).
* **Alignment Tombol:** [OK]

**Testimonial Section**
* **Ikon Kutipan & Margin:** [OK]

**Berita & Kegiatan**
* **Proporsi Gambar Thumbnail:** [OK]
* **Kerapihan Line Clamp (Teks terpotong otomatis):** [NO]
* Teks "Berita & Kegiatan" tidak rata tengah. *Heading*-nya juga harus dibuat *align center*.
* Teks "Lihat semua berita ->" biarkan tetap rata kiri (*align left*).
* *Filter*-nya saat ini tidak berfungsi. Nanti tolong dibuatkan 3 halaman berita sebagai contoh (*dummy*).
* *Catatan:* Saya suka gambar *thumbnail* di bagian berita; saat di-*hover* atau ditekan sambil *scrolling*, ada sedikit animasi *zoom in*.

**FAQ Accordion**
* **Transisi Buka / Tutup:** [OK]
* **Spasi Antar Pertanyaan:** [OK]
    * Bagian ikon *chevron* (ikon *plus*) tidak rata tengah dengan *container* lingkarannya (*circle*).

---

## 3. General Usability

* **Broken Links:** [Tidak Ada]
* **Scrolling Smoothness:** [Lancar]
* **Mobile Overflow (Ada elemen yang melebar melampaui layar):** [Ada]
    * Terjadi *overflow* pada teks "Scroll" di halaman Utama (*Home page*).
    * Masalah *overflow* juga terjadi pada posisi penempatan label (*tags*) yang terpotong setelah membuka halaman-halaman berikut (baik dibuka melalui *Home page* maupun menu *sidebar*):
        * Program Reguler
        * Program Excellent
        * Program Dirosah Islamiyah
        * Fasilitas
        * Ekstrakurikuler
        * Kehidupan Asrama
        * Kehidupan Islami

**Catatan Khusus untuk Navigasi Sidebar:**
* Menu *sidebar* tidak perlu menggunakan *toggle*. Langsung tampilkan saja semua halaman dan *section*-nya.
* Terdapat *bug*: Saat membuka halaman **Berita & Kontak**, *section* dari halaman **Tentang DQ** dan **Jelajahi** menghilang dari menu *sidebar*.
* Begitu juga saat berada di halaman **Jelajahi**, *section* **Pimpinan** dan **Sejarah** (dari halaman **Tentang DQ**) ikut menghilang dari menu *sidebar*.