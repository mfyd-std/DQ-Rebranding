QA REPORT TASK-101

Verdict: LULUS QA — D-005 terpenuhi pada scope parity struktural dan affordance. Ini bukan release approval.
Tanggal pemeriksaan: 2026-11-12

Yang diperiksa
- SHA: 8e713b0bbbcb693f8600dfcca8668fdc14c739ce
- Worktree QA: F:/000_WORK/tmp/wt-qa-TASK-101
- Checkout: detached HEAD; worktree di-reset ke SHA target sebelum pemeriksaan.
- SHA da2e203 tidak dinilai.
- Baseline parity: index.html legacy pada checkout SHA yang sama.
- File utama: app/page.tsx, app/blog/page.tsx, app/globals.css, app/layout.tsx, components/SectionHeading.tsx, public/images/*.
- Kontrak: docs/TRD.md.
- Kriteria: D-005, parity section, konten, navigasi, affordance, dan kontrak route; bukan pixel matching.

Command dan exit code asli
- `git -C F:/000_WORK/tmp/wt-qa-TASK-101 reset --hard 8e713b0bbbcb693f8600dfcca8668fdc14c739ce` — exit code 0.
- `git -C F:/000_WORK/tmp/wt-qa-TASK-101 rev-parse HEAD` — exit code 0; hasil `8e713b0bbbcb693f8600dfcca8668fdc14c739ce`.
- `npm install` — exit code 0.
- `npm run lint` — exit code 0.
- `npm run build` — exit code 0.

Catatan command
- `npm install`: audit melaporkan 8 vulnerabilities, terdiri dari 7 moderate dan 1 high. Tidak menggagalkan install.
- `npm run lint`: lulus dengan `--max-warnings=0`.
- `npm run build`: compile TypeScript/Next.js lulus. Warning: Next.js plugin tidak terdeteksi pada konfigurasi ESLint. Exit code tetap 0.
- Build menghasilkan route `/`, `/blog`, dan `/_not-found`.
- Setelah install, perubahan hanya berada di `node_modules`; perubahan tersebut dipulihkan. Source tracked tetap bersih.

Hasil pemeriksaan D-005
- Target `#tentang`: LULUS. `app/page.tsx` memiliki section `id="tentang"`; menu desktop, dropdown, footer, dan mobile menu memakai target tersebut.
- Theme toggle: LULUS. Tombol `.theme-toggle` memiliki handler state, `aria-pressed`, label aksesibel, persistence `localStorage`, dan toggle class `dark` pada `<html>`. Browser check: class berubah `false` menjadi `true`, `aria-pressed=true`.
- Hero lightbox: LULUS. Empat hero image dirender sebagai button dengan handler `onClick`, label `Buka foto`, focus outline, dialog lightbox, tombol tutup, dan handler keyboard `Escape`. Browser check: dialog terbuka dari hero pertama dan tertutup oleh `Escape`.
- Filter berita: LULUS. Tombol `Semua`, `Akademik`, `Prestasi`, `Kegiatan` tersedia dengan `aria-pressed` dan filter state. Browser check filter `Akademik` menampilkan card kategori `Akademik`.
- CTA WhatsApp: LULUS. CTA `Hubungi via WhatsApp` tersedia pada section CTA dan memakai URL `https://wa.me/6281319789000`.
- Mobile menu: LULUS. Trigger `Buka menu`, modal menu, navigasi, trigger `Tutup menu`, `aria-expanded`, dan cleanup `body.menu-open` tersedia. Browser check: menu terbuka dan tertutup normal.
- Kontrak route artikel: LULUS pada level kontrak route. `app/blog/page.tsx` merender link `/blog/{slug}` untuk setiap post, sesuai `docs/TRD.md` dan shape `slug`. Browser check menemukan tiga link: `/blog/kolaborasi-literasi-dzaizza`, `/blog/seleksi-paskibraka-tangerang`, `/blog/seleksi-nasional-opsi-2026`.
- Catatan route artikel: route detail belum dirender dan direct request ke `/blog/kolaborasi-literasi-dzaizza` menghasilkan 404. `docs/TRD.md` menyatakan route detail `/blog/[slug]` ditambahkan setelah kontrak backend tersedia; link placeholder saat ini diperbolehkan. Ini bukan blocker D-005, tetapi risiko integrasi tahap berikutnya.

Yang lulus
- Checkout QA memakai SHA frontend terbaru yang diwajibkan.
- `npm install`, lint, build lulus dengan exit code asli 0.
- Struktur homepage utama tetap tersedia: hero, quote Arab, video profil, statistik, photo marquee, program, DQ3, jelajahi, testimoni, CTA, berita, FAQ, kontak, footer.
- Seluruh affordance D-005 yang diminta telah ditemukan di source dan diuji pada browser runtime.
- Tidak ada source code, config, commit, push, merge, deploy, atau publish yang dilakukan QA.

Sisa risiko
- 8 vulnerabilities dari dependency audit: 7 moderate, 1 high.
- Warning plugin Next.js pada konfigurasi ESLint.
- Route detail artikel masih placeholder dan menghasilkan 404 sampai route `[slug]` ditugaskan.
- QA runtime memakai browser lokal pada viewport 764x429; cross-browser dan visual pixel parity belum diuji.
- QA pass bukan release approval. Keputusan lanjut tetap pada mfyd.

Pemilik tindak lanjut
- mfyd-frontend: tinjau vulnerabilities, warning ESLint, dan implementasi route detail saat backend/route detail masuk scope.
- mfyd: putuskan integrasi dan release setelah mempertimbangkan sisa risiko.

Status QA
LULUS QA untuk D-005 pada SHA 8e713b0bbbcb693f8600dfcca8668fdc14c739ce. Belum release approval.