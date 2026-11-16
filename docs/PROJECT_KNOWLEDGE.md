# DQ Rebranding — Project Knowledge Base
**Untuk:** Claude Project (mobile/desktop)
**Proyek:** Website Rebranding Pondok Pesantren Daar el-Qolam
**Status:** Phase 1–5 selesai · Phase 6 (Visual QA) sedang berjalan

---

## 1. Tentang Proyek

Website resmi PP Daar el-Qolam yang dibangun dari awal sebagai bagian dari rebranding. Dibuat sebagai **static multi-page HTML website** — tidak pakai framework, tidak pakai server. Semua halaman bisa dibuka langsung di browser.

**Owner:** Zaky (designer, non-developer) — menggunakan Claude untuk membangun dan merencanakan seluruh website.

**Live URL:** https://dq-rebranding.netlify.app
**Repo GitHub:** https://github.com/mfyd-std/DQ-Rebranding (Private)
**Deploy:** Netlify (auto-deploy dari GitHub)

---

## 2. Tech Stack

| Komponen | Teknologi |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS via CDN + custom config |
| Logic | Vanilla JavaScript (tidak ada framework) |
| Font | Cormorant Garamond (serif), Plus Jakarta Sans (sans), Amiri (Arabic) |
| Deploy | Netlify (connected ke GitHub) |
| Version Control | GitHub private repo |

**Cara update setelah revisi:**
```
git add .
git commit -m "deskripsi perubahan"
git push
```
Netlify otomatis rebuild dalam ~1 menit.

---

## 3. Design System

### Warna (Tailwind custom config)
| Token | Hex | Penggunaan |
|---|---|---|
| `dq-green` | `#006C55` | Primary brand color |
| `dq-green-dk` | `#00523F` | Navbar, footer background |
| `dq-green-lt` | `#E6F2EF` | Light section backgrounds |
| `dq-gold` | `#C9A227` | Accent, highlight, CTA |
| `dq-gold-lt` | `#FBF4E0` | Light gold background |
| `dq-ivory` | `#FAFAF8` | Page background |
| `dq-charcoal` | (dark text) | Body text |
| `dq-warm-gray` | (medium text) | Secondary text |

### Font
- **Heading:** Cormorant Garamond (serif, elegant)
- **Body/UI:** Plus Jakarta Sans (clean, modern)
- **Arabic text:** Amiri

### Komponen CSS (`css/style.css`)
- Arabesque pattern (ornamen islami)
- Animasi: `fadeUp`, `float`, `scrollBounce`, `pulseDot`
- Scroll-reveal
- FAQ accordion
- Mega-menu desktop + mobile menu
- Gold-line divider
- Dot pattern background

---

## 4. Struktur File

```
001_DQ Rebranding/
├── index.html          ← Home / Landing Page (12 sections)
├── program.html        ← Program Pendidikan
├── dq3.html            ← DQ3 Kampus Dza'Izza
├── tentang.html        ← Tentang DQ
├── jelajahi.html       ← Jelajahi (Fasilitas & Kehidupan)
├── berita.html         ← Berita & Kegiatan
├── kontak.html         ← Kontak
├── css/
│   └── style.css       ← Design system & semua styling
├── js/
│   └── main.js         ← Shared logic (FAQ, navbar, animations)
└── images/             ← Foto-foto DQ
```

**Penting:** Navbar dan footer di-**duplicate inline** di setiap halaman HTML (bukan di-include via JS). Ini keputusan desain yang disengaja agar kompatibel dengan static file.

---

## 5. Sitemap & Halaman

| File | Halaman | Sections |
|---|---|---|
| `index.html` | **Home** | Hero, Video YouTube, Brand Moto (QS Adz-Dzariyat:56), Trust & Stats, Program (4 cards), DQ3 CTA, Jelajahi preview, Testimonial (3), Admission CTA, Berita (3), FAQ accordion, Footer |
| `program.html` | **Program Pendidikan** | Hero, Sticky nav, Program Reguler (DQ Pusat), Excellent Class (DQ 2), DQ3 CTA banner, Dirasah Islamiyyah (DQ 4), Admission CTA, Footer |
| `dq3.html` | **DQ3 Kampus Dza'Izza** | Hero dengan overlay, 6 keunggulan cards, 2 program cards (Extension 3yr + International), gallery grid, CTA, Footer |
| `tentang.html` | **Tentang DQ** | Profil (4 stat boxes), Visi & Misi (2 cards green bg + ayat), Pimpinan (3 cards), Sejarah timeline (1968→kini), Footer |
| `jelajahi.html` | **Jelajahi** | Fasilitas (6 cards), Kehidupan Islami (4 items), Ekskul (8 cards), Kehidupan Asrama (6 items), Footer |
| `berita.html` | **Berita & Kegiatan** | Filter tags, Featured article (full-width), 6 article grid, Load More → DQ3, Footer |
| `kontak.html` | **Kontak** | 4 info cards (alamat/telp/WA/email), Jam kunjungan, Form → WhatsApp, Google Maps embed, Admission CTA, Footer |

---

## 6. JavaScript (`js/main.js`)

- `renderFAQ()` — render 25 FAQ items dari array ke DOM
- `initFAQ()` — accordion toggle behavior
- `initNavScroll()` — navbar berubah saat scroll
- `initMobileMenu()` — hamburger menu mobile
- `initScrollReveal()` — elemen fade-in saat scroll
- `initSmoothScroll()` — smooth scroll ke anchor

**FAQ:** 25 item dari PDF `faq_sanbar_2025.pdf`, disimpan sebagai array di `main.js`.

**Form kontak:** Submit form → redirect ke WhatsApp:
```js
window.open('https://wa.me/6281319789000?text=...')
```

---

## 7. Navigasi (Mega-Menu)

```
[Logo DQ]  Tentang DQ ▾  Program ▾  Jelajahi ▾  Berita  Kontak
                                        [🔴 Pendaftaran Dibuka]
                                        [Daftar Sekarang]
```

| Menu | Dropdown |
|---|---|
| Tentang DQ | Profil, Visi Misi, Pimpinan, Sejarah |
| Program | Reguler, Excellent, International (DQ3), Dirasah |
| Jelajahi | Fasilitas, Kehidupan Islami, Ekskul, Asrama |
| Berita | Langsung ke berita.html |
| Kontak | Langsung ke kontak.html |

---

## 8. Keputusan Desain Penting

1. **Navbar + footer inline** di setiap halaman (bukan JS include) — agar static file compatible
2. **Tailwind via CDN** dengan custom config (bukan build process)
3. **FAQ dari JS array** — dirender dynamically ke DOM
4. **Kontak form** submit ke WhatsApp wa.me link (bukan server)
5. **Video YouTube** di home: autoplay, muted, loop, no controls
6. **Bento collage** di hero menggunakan foto lokal
7. **Tidak ada Virtual Tour** (dihapus dari navigasi)
8. **Tidak ada utility bar** di atas navbar

---

## 9. Konten & Branding

**Nama resmi:** Pondok Pesantren Daar el-Qolam
**Kampus:**
- DQ Pusat (Program Reguler)
- DQ 2 (Excellent Class)
- DQ 3 — Kampus Dza'Izza (International) · tagline: *"Go Global, Be a Global Player"* / *"Pesantren Beyond Pesantren"*
- DQ 4 (Dirasah Islamiyyah)

**Social Media:**
- YouTube: `@ElQolam`
- Instagram: `@daarelqolam`, `@dzaizza_official`, `@darqomusic`
- TikTok: `@ponpesdaarelqolam`

**External links:**
- Website DQ3: `https://www.daarelqolam3.sch.id/`
- PSB DQ3: `https://psb.daarelqolam3.sch.id/`
- WhatsApp: `https://wa.me/6281319789000`

**Stats:**
- 5.000+ Santri aktif
- 56 tahun berdiri (sejak 1968)
- 30.000+ Alumni

---

## 10. Status & Roadmap

### Selesai (Phase 1–5)
- [x] Design system (css/style.css)
- [x] Shared logic (js/main.js)
- [x] index.html — 12 sections
- [x] program.html
- [x] dq3.html
- [x] tentang.html
- [x] jelajahi.html
- [x] berita.html
- [x] kontak.html
- [x] Push ke GitHub private repo
- [x] Deploy ke Netlify

### Sedang Berjalan (Phase 6)
- [ ] Visual QA — responsiveness mobile/tablet
- [ ] Cek semua link antar halaman
- [ ] Browser preview check

### Rencana Selanjutnya (Post-QA)
- Tambahkan animasi & UI enhancement (scroll-triggered, counter number, parallax hero, hover effects cards)
- Referensi animasi dari 21st.dev → diimplementasikan manual ke vanilla JS/CSS (bukan React component)
- Konten asli menggantikan placeholder (foto, berita, testimonial nyata)

---

## 11. Workflow Revisi

Setiap ada perubahan pada file di komputer:
```bash
git add .
git commit -m "deskripsi perubahan"
git push
```
Netlify otomatis deploy ulang dalam ~1 menit → cek di `dq-rebranding.netlify.app`

---

## 12. Catatan untuk Claude

- User adalah **designer, non-developer** — jelaskan konsep teknis dengan bahasa sederhana
- Komunikasi dalam **Bahasa Indonesia**
- Project menggunakan **plain HTML/CSS/JS** — jangan rekomendasikan framework (React, Vue, dll)
- Jangan pakai `npm install` atau build process — semua via CDN
- Jika ada animasi baru, implementasikan sebagai **vanilla JS + CSS** bukan library berat
- Semua path asset menggunakan **relative path**
