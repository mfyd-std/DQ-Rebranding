# Visual QA Audit Report: Daar el-Qolam Website

**Tanggal Audit:** [Isi Tanggal]
**Browser/Device:** [Chrome Desktop / Safari iOS / dsb.]

## 1. Global Components (Navbar & Footer)

* **Navbar Desktop (Screen > 1024px):**
  * Posisi logo dan teks: [OK / Masalah Visual]
  * Mega-menu dropdown (Hover): [OK / Masalah Visual]
  * Tombol CTA Pendaftaran: [OK / Masalah Visual]
* **Navbar Mobile (Screen < 768px):**
  * Posisi Hamburger Menu: [OK / Masalah Visual]
  * Animasi buka/tutup menu: [OK / Masalah Visual]
* **Footer:**
  * Kerapian kolom & margin: [OK / Masalah Visual]

## 2. Homepage Sections (index.html)

* **Hero Section:**
  * Ukuran & Alignment Teks (Desktop): [OK / Masalah Visual]
  * Ukuran & Alignment Teks (Mobile): [OK / Masalah Visual]
  * Bento Collage Layout: [OK / Masalah Visual]
* **Video Profile Section:**
  * Rasio iframe video (16:9): [OK / Masalah Visual]
  * Autoplay & Muted status: [OK / Masalah Visual]
* **Brand Moto (Ayat Al-Quran):**
  * Contrast Ratio (Teks Emas vs Background Hijau): [OK / Masalah Visual]
  * Keterbacaan Font Arab: [OK / Masalah Visual]
* **Trust & Stats Section:**
  * Ukuran angka (5K+, dll) di Mobile: [OK / Masalah Visual]
* **Program Pendidikan (Cards):**
  * Tampilan Grid (4 kolom desktop, 1 kolom mobile): [OK / Masalah Visual]
  * Hover effects (bayangan, warna ikon): [OK / Masalah Visual]
* **DQ3 Kampus Dza'Izza Section:**
  * Gradient Background: [OK / Masalah Visual]
  * Alignment Tombol CTA: [OK / Masalah Visual]
* **Testimonial Section:**
  * Ikon kutipan & margin: [OK / Masalah Visual]
* **Berita & Kegiatan:**
  * Proporsi gambar thumbnail: [OK / Masalah Visual]
  * Kerapian *line-clamp* (teks terpotong otomatis): [OK / Masalah Visual]
* **FAQ Accordion:**
  * Transisi buka/tutup: [OK / Masalah Visual]
  * Spasi antar pertanyaan: [OK / Masalah Visual]

## 3. General Usability

* **Broken Links:** [Tidak ada / Ditemukan di...]
* **Scrolling Smoothness:** [Lancar / Patah-patah]
* **Mobile Overflow:** [Tidak ada elemen yang meluber ke samping / Ada masalah di...]

---

### 🚨 Catatan Perbaikan (Untuk dieksekusi oleh Claude)

*(Isi bagian ini jika ada status "Masalah Visual" di atas)*

1. **Bagian/Section:** [Contoh: Hero Section Mobile]
   * **Masalah:** [Contoh: Teks judul terlalu besar sampai keluar layar]
   * **Instruksi untuk Claude:** [Contoh: Kurangi text size Tailwind dari `text-5xl` ke `text-4xl` di mode `sm:`]

2. **Bagian/Section:** [...]
   * **Masalah:** [...]
   * **Instruksi untuk Claude:** [...]
