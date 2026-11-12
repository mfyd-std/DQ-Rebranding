# Infrastructure and Platform Document

Sumber fakta: checkout `main`, inventaris profil lokal, dan catatan infrastruktur yang tersedia di profil `blackops`. Setiap klaim operasional harus memiliki evidence ID, path sumber, atau status observasi. Secret, token, dan nilai `.env` tidak ditulis.

## 1. Mesin lokal

- Host: Windows 11.
- Hermes CLI: `Hermes Agent v0.23.1 (2026.9.24)`, Python 3.14.9.
- Root instalasi Hermes: `C:\Users\zaqyr.ZDR\AppData\Local\hermes`.
- Root proyek saat ini: `D:\Zaky Data\Document\01_Project\001_DQ Rebranding`.
- Gateway multiplexer berjalan sebagai proses default-profile dengan listener API `http://127.0.0.1:8642/p/mfyd/v1`.
- Port gateway API teramati pada `0.0.0.0:8642`.
- Port router model teramati pada `0.0.0.0:20128`.
- Repository memakai checkout utama `main`. Worktree task dipakai untuk pekerjaan kode sesuai aturan profil.

## 2. Roster bot dan profil

Roster operasional Gate 2 berisi sepuluh endpoint bot. Sembilan endpoint pertama memetakan profil yang tersedia. Baris kesepuluh adalah endpoint gateway `default-profile`, bukan profil agent terpisah. Pemisahan ini mencegah endpoint gateway dihitung sebagai profil baru.

| No. | Endpoint bot / profil | Peran | Batas utama | Evidence |
|---|---|---|---|---|
| 1 | `mfyd` | lead dan orkestrasi | membagi scope, memutuskan tindak lanjut, tidak melewati approval | `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\mfyd\SOUL.md` |
| 2 | `mfyd-frontend` | implementasi UI frontend | menulis hanya worktree task; tidak mengubah brand atau profil Hermes | `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\mfyd-frontend\SOUL.md` |
| 3 | `mfyd-qa` | pemeriksaan independen | membaca dan memeriksa; tidak memperbaiki source, tidak menyetujui rilis | `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\mfyd-qa\SOUL.md` |
| 4 | `mfyd-brand` | brand system dan arahan visual | menetapkan aturan brand; tidak mengubah config, token, credential, atau profil | `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\mfyd-brand\SOUL.md` |
| 5 | `mfyd-creative` | arahan kreatif non-kode | menghasilkan konsep dan handoff; konsep bukan approval produksi | `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\mfyd-creative\SOUL.md` |
| 6 | `mfyd-backend` | server logic dan data | menulis di worktree task; tidak mengubah desain, config Hermes, atau rilis | `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\mfyd-backend\SOUL.md` |
| 7 | `blackops` | infrastruktur dan operasi Hermes | menangani gateway, platform, backup, dan diagnosis dengan approval eksplisit untuk tindakan berisiko | `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\blackops\SOUL.md` |
| 8 | `teacher` | instruksi dan desain pembelajaran | mengelola materi pendidikan; tidak mengambil keputusan rilis atau operasi | `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\teacher\SOUL.md` |
| 9 | `research` | riset teknologi dan verifikasi literatur | memberi analisis berbasis sumber; tidak mengubah source atau infrastruktur tanpa handoff | `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\research\SOUL.md` |
| 10 | `default-profile` gateway endpoint | multiplexing dan transport endpoint | bukan profil agent; tidak menjadi pemilik approval | `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\mfyd\config.yaml`, observasi `E-IPD-003` |

Sembilan profil agent dan satu endpoint gateway dihitung sebagai roster bot Gate 2. Keberadaan file SOUL membuktikan identitas dan batas peran, bukan keberadaan token atau koneksi Telegram. Status koneksi, token, dan hasil round-trip harus dirujuk melalui evidence operasional terpisah tanpa menulis secret.

Evidence register roster: `E-IPD-001` = inventaris direktori profil dan file SOUL pada 2026-11-12; `E-IPD-002` = `docs/HANDOFFS/TASK-101.md:36-77` dan `docs/QA/TASK-101-qa.md:1-59`; `E-IPD-003` = observasi gateway oleh `blackops`, 2026-11-12, path konfigurasi lokal di atas, nilai secret dikecualikan.

## 3. Pembagian kerja dan handoff

1. `mfyd` menerima brief dengan `task_id`, repository, scope file, acceptance criteria, batasan, dan owner review.
2. Pekerjaan kode diserahkan ke `mfyd-frontend` atau `mfyd-backend` dengan branch dan worktree task yang jelas.
3. Pekerjaan brand diserahkan ke `mfyd-brand`. Arahan brand menjadi sumber untuk `mfyd-creative` dan implementer.
4. `mfyd-creative` menyerahkan output dengan sumber brief, sumber brand, aset yang disetujui, format, dan definisi selesai.
5. Implementer menyerahkan path file, branch atau SHA, command, exit code, diff, dan sisa risiko ke `mfyd` serta `mfyd-qa`.
6. `mfyd-qa` memeriksa branch atau SHA yang disebut, menulis laporan di `docs/QA/`, dan mengembalikan temuan ke pemilik. QA tidak memperbaiki hasil yang diperiksa.
7. `mfyd` menentukan tindak lanjut. QA pass bukan release approval.

DM yang menyentuh repository harus menghasilkan handoff atau entri intake yang dapat dilacak sebelum file diubah. Tidak ada handoff tanpa pemilik dan acceptance criteria.

## 4. Gateway dan transport Telegram

- Satu gateway multiplexer melayani profil-profil Hermes yang aktif.
- Catatan infrastruktur mencatat endpoint bot per profil yang terhubung ke gateway melalui relay bot. Token disimpan di environment atau secret store profil, bukan di dokumen. Jumlah endpoint yang direncanakan untuk roster Gate 2 adalah sepuluh, seperti tabel di atas.
- Transport Telegram memakai long polling. Catatan infrastruktur menyebut koneksi Telegram aktif dan long polling kecil dalam beban bandwidth.
- Endpoint API gateway memakai port 8642. Router model lokal memakai port 20128.
- `allowed_chats` pada konfigurasi yang terbaca tidak berisi nilai yang dapat ditulis sebagai fakta allowlist. Karena itu, kontrol akses Telegram bergantung pada hasil uji negatif dan tidak dianggap terbukti dari dokumen konfigurasi saja.
- Gateway bukan Windows service. Catatan infrastruktur mendokumentasikan Windows Task Scheduler `\Hermes_Gateway` sebagai mekanisme start saat logon. Evidence: `E-IPD-003`; status ini bukan hasil pemeriksaan tree SHA aplikasi.
- Profil baru tidak boleh menambah bot, mengubah routing, mengubah transport, atau mengganti token tanpa approval eksplisit dan uji round-trip serta negatif.

## 5. Backup dan rollback

Backup harus mencakup file konfigurasi, state gateway, database SQLite, dan pasangan `-wal` atau `-shm` bila ada. Gateway harus berhenti sebelum menyalin database SQLite agar snapshot konsisten. Secret tidak masuk laporan atau commit.

Rollback operasional:

1. Hentikan perubahan dan hentikan task yang sedang berjalan.
2. Nonaktifkan profil atau bot yang bermasalah.
3. Pulihkan snapshot konfigurasi dan state terakhir yang diketahui baik.
4. Pulihkan worktree atau branch ke SHA terakhir yang disetujui.
5. Jalankan pemeriksaan gateway, round-trip bot yang terdampak, dan uji negatif.
6. Catat hasil dan minta keputusan `mfyd` sebelum aktivasi ulang.

Rollback tidak berarti menghapus data tanpa backup. Penghapusan worktree, revert branch integrasi, restart gateway, perubahan bot, atau pemulihan state produksi memerlukan approval manual.

## 6. Batas approval

- `mfyd` memegang keputusan scope, integrasi, dan release.
- `mfyd-qa` hanya memberi verdict QA. `LULUS QA` tidak sama dengan release approval.
- Perubahan source di checkout utama, merge, commit, push, deploy, publish, atau perubahan di luar scope memerlukan approval `mfyd`.
- Perubahan `config.yaml`, `.env`, token Telegram, credential, gateway, transport, allowlist, atau profil Hermes memerlukan approval eksplisit pemilik operasi. Dokumen ini tidak mengubahnya.
- Tindakan destruktif, restart layanan, pemulihan backup, dan perubahan routing memerlukan approval manual sebelum eksekusi.
- Profil anak berhenti saat handoff tidak lengkap, hard stop, atau approval ditolak.

## 7. Evidence dan batas keterlacakan

| Evidence ID | Sumber | Cakupan | Batas |
|---|---|---|---|
| `E-IPD-001` | direktori `C:\Users\zaqyr.ZDR\AppData\Local\hermes\profiles\` dan file `SOUL.md`, observasi 2026-11-12 | identitas sembilan profil agent dan batas peran | tidak membuktikan token, koneksi, atau round-trip |
| `E-IPD-002` | `docs/HANDOFFS/TASK-101.md:36-77`; `docs/QA/TASK-101-qa.md:1-59` | handoff, SHA, command, exit code, dan verdict QA TASK-101 | hanya scope aplikasi TASK-101 |
| `E-IPD-003` | observasi operasional `blackops`, 2026-11-12; konfigurasi lokal dirujuk tanpa menyalin secret | endpoint gateway, transport, dan scheduler | tidak termuat dalam `git ls-tree 8e713b0`; perlu audit operasional ulang bila berubah |

Klaim yang tidak memiliki evidence ID, path sumber, revision, atau tanggal observasi tidak boleh diperlakukan sebagai fakta terverifikasi.

## 8. Risiko diketahui

| Risiko | Dampak | Pemilik tindak lanjut |
|---|---|---|
| Route `/blog/[slug]` belum diimplementasikan | Link detail blog dapat menghasilkan 404 | `mfyd-frontend` atau `mfyd-backend` saat scope disetujui |
| Audit dependency mencatat 8 vulnerability, terdiri dari 7 moderate dan 1 high | Risiko dependency belum ditutup | `mfyd-frontend`, keputusan lanjut `mfyd` |
| Warning plugin Next.js pada konfigurasi ESLint tercatat pada QA TASK-101 | Validasi lint perlu ditinjau | `mfyd-frontend` |
| Visual pixel parity lintas browser belum diuji | Perbedaan tampilan dapat tersisa | `mfyd-qa` |
| Endpoint API gateway teramati pada `0.0.0.0:8642` | Paparan jaringan lebih luas dari loopback | `blackops`, dengan approval operasi |
| Delivery bot memakai model at-most-once menurut catatan evaluasi | Pesan dapat hilang setelah klaim dan crash | `blackops` dan `mfyd` |
| Catatan lama menyebut host Hermes VM offline dan laptop sebagai gateway terukur | Host kanonik belum boleh diasumsikan | `blackops` dan `mfyd` |
| `allowed_chats` tidak terbukti terisi pada konfigurasi yang dibaca | Pesan non-allowlist berisiko diproses bila guard lain gagal | `blackops`, uji negatif wajib sebelum perubahan |

Dokumen ini tidak mengubah source code, konfigurasi, environment, token, gateway, transport, atau kebijakan approval.
