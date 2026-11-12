from: mfyd
to: mfyd-frontend
task_id: TASK-101
timestamp: 2026-11-12T15:08:11+07:00

scope:
- Scaffold Next.js App Router + TypeScript + Tailwind CSS v4 di worktree task.
- Migrasikan satu halaman statis pengganti index.html.
- Buat satu komponen reusable.
- Buat docs/TRD.md versi draft.
- Buat kontrak slice blog pada level route saja, tanpa backend penuh.

aturan kerja:
- Gunakan worktree sendiri: mfyd-frontend/TASK-101.
- Gunakan branch task/TASK-101.
- Jangan menulis di checkout utama.
- Jangan push.
- Jangan mengubah scope tanpa persetujuan mfyd.

Definisi selesai:
- Scaffold jalan.
- npm run build tersedia sebagai script dan lulus.
- npm run lint tersedia sebagai script dan lulus.
- Halaman render tanpa error TypeScript.
- docs/TRD.md draft ada.
- Handoff menyebut branch, worktree, dan commit SHA.
- Hasil diserahkan ke mfyd-qa.

Permintaan:
- ACK penerimaan TASK-101.
- Laporkan branch dan worktree yang dipakai.
- Laporkan commit SHA asli.
- Laporkan exit code asli untuk npm run build dan npm run lint.
- Serahkan hasil ke mfyd-qa.

ACK mfyd-qa:
- SHA diperiksa: da2e2032bf45d93452b99a6111a331b6b1e21ef6
- Worktree QA: F:/000_WORK/tmp/wt-qa-TASK-101 (detached)
- Command: npm install — exit code 0; npm run lint — exit code 0; npm run build — exit code 0
- Kriteria: D-005, parity struktural, bukan parity piksel
- Laporan: docs/QA/TASK-101-qa.md
- Verdict: GAGAL — lint/build lulus, tetapi gap struktur interaksi terhadap index.html legacy masih ada: target navigasi #tentang tidak tersedia, theme toggle hilang, hero lightbox hilang, filter berita hilang, dan CTA WhatsApp tidak hadir pada section CTA.

CLOSING:
- Verdict akhir: GAGAL berdasarkan QA mfyd-qa pada SHA da2e2032bf45d93452b99a6111a331b6b1e21ef6.
- D-005 belum terpenuhi. Lint dan build lulus, tetapi parity struktural dan affordance interaksi masih memiliki gap.
- TASK-101 ditutup sebagai gagal QA dan belum mendapat release approval.
- Tindak lanjut: mfyd-frontend perbaiki temuan P1 dan P2, lalu serahkan ulang ke mfyd-qa.

ACK mfyd-qa — pemeriksaan ulang:
- SHA diperiksa: da2e2032bf45d93452b99a6111a331b6b1e21ef6
- Worktree QA: F:/000_WORK/tmp/wt-qa-TASK-101 (detached)
- Command: npm install — exit code 0; npm run lint — exit code 0; npm run build — exit code 0
- Kriteria: D-005, parity struktural, bukan parity piksel
- Laporan: docs/QA/TASK-101-qa.md
- Perubahan temuan: CTA WhatsApp pada section CTA sudah tersedia; temuan target `#tentang`, theme toggle, hero lightbox, dan filter berita masih terbuka.
- Verdict: GAGAL — D-005 belum terpenuhi. Belum release approval.

ACK mfyd-qa — final pemeriksaan ulang
- SHA diperiksa: 8e713b0bbbcb693f8600dfcca8668fdc14c739ce
- Worktree QA: F:/000_WORK/tmp/wt-qa-TASK-101 (detached; reset sebelum pemeriksaan)
- SHA da2e203 tidak dinilai.
- Command: `npm install` — exit code 0; `npm run lint` — exit code 0; `npm run build` — exit code 0
- Kriteria: D-005 terhadap `index.html` legacy; target `#tentang`, theme toggle, empat hero lightbox dengan handler dan keyboard affordance, filter berita `Semua`/`Akademik`/`Prestasi`/`Kegiatan`, CTA `Hubungi via WhatsApp`, mobile menu, dan kontrak route artikel.
- Verifikasi browser: seluruh affordance D-005 lulus. Filter Akademik bekerja; theme toggle berubah; lightbox terbuka dan tertutup dengan `Escape`; mobile menu buka/tutup; link artikel berbentuk `/blog/{slug}`.
- Catatan: direct route detail artikel masih 404 karena `docs/TRD.md` menetapkan `/blog/[slug]` sebagai tahap setelah backend tersedia. Link placeholder diizinkan oleh kontrak saat ini.
- Laporan: docs/QA/TASK-101-qa.md
- Verdict final QA: LULUS QA — D-005 terpenuhi pada SHA 8e713b0bbbcb693f8600dfcca8668fdc14c739ce.
- Belum release approval. Sisa risiko: 8 vulnerabilities (7 moderate, 1 high), warning plugin Next.js ESLint, dan route detail artikel placeholder.

CLOSING:
- Verdict akhir: LULUS QA berdasarkan pemeriksaan mfyd-qa pada SHA 8e713b0bbbcb693f8600dfcca8668fdc14c739ce.
- D-005 terpenuhi untuk parity struktural dan affordance.
- TASK-101 ditutup sebagai `qa_passed`; belum mendapat release approval.
- Sisa risiko: 8 vulnerabilities (7 moderate, 1 high), warning plugin Next.js ESLint, dan route detail artikel masih placeholder 404.
- Keputusan kontrak route blog: route per artikel `/blog/{slug}` menjadi kontrak pengganti route legacy `berita-*.html`; `/blog` dengan anchor tidak diterima sebagai kontrak akhir.
- Implementasi route detail `/blog/[slug]` tetap menjadi pekerjaan tahap berikutnya setelah backend atau sumber data tersedia.
