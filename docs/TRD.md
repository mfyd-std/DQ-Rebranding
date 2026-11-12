# Technical Requirements Document

Sumber fakta: task/TASK-101 commit 8e713b0 pada branch `task/TASK-101`; dokumen ditulis di checkout `main` untuk Gate 2.

## 1. Tujuan dan batas

Migrasi slice beranda dari `index.html` legacy ke Next.js App Router tanpa backend, CMS, database, API route, atau perubahan copy utama. Slice blog tersedia sebagai route index dengan data lokal. Dokumen ini mendefinisikan stack dan kontrak route, bukan release approval.

## 2. Stack

| Area | Keputusan | Bukti konfigurasi |
|---|---|---|
| Framework | Next.js 15 App Router | `package.json`, `app/` |
| UI runtime | React 19 | `package.json` |
| Bahasa | TypeScript 5.9, strict | `tsconfig.json` |
| Styling | Tailwind CSS v4 melalui `@tailwindcss/postcss` | `package.json`, `app/globals.css` |
| Lint | ESLint 9 dengan flat config; `package.json` mendeklarasikan `eslint-config-next`, sedangkan wiring aktual memakai plugin Next dan parser TypeScript | `eslint.config.mjs`, `package.json` |
| Package manager | npm | `package-lock.json`, script npm |
| Runtime | Node.js | script Next.js dan dependency engine |

Konfigurasi Next.js mengaktifkan `reactStrictMode`. Alias TypeScript `@/*` menunjuk ke root repository.

## 3. Script npm

| Script | Perintah | Fungsi |
|---|---|---|
| `dev` | `next dev` | server pengembangan |
| `build` | `next build` | compile produksi |
| `lint` | `eslint . --max-warnings=0` | lint tanpa warning |
| `start` | `next start` | menjalankan build produksi |

## 4. Struktur aplikasi

```text
app/
├── blog/page.tsx       # route `/blog` dengan data post lokal
├── globals.css         # import Tailwind dan token style
├── layout.tsx          # root layout dan metadata
└── page.tsx            # route `/`
components/
└── SectionHeading.tsx  # komponen heading reusable
public/
└── images/             # aset runtime Next.js
```

Aset visual dirujuk dari `public/images/`. Komponen halaman beranda menggunakan `next/image` dan `next/link`. State interaksi beranda berada di `app/page.tsx`, termasuk menu mobile, theme toggle, lightbox, headline rotator, dan filter berita.

## 5. Kontrak route

| Route | Status | Implementasi | Sumber data |
|---|---|---|---|
| `/` | tersedia | `app/page.tsx` | konstanta lokal dan aset `public/images/` |
| `/blog` | tersedia | `app/blog/page.tsx` | array `posts` lokal |
| `/blog/[slug]` | direncanakan | belum ada `app/blog/[slug]/page.tsx` pada commit sumber | backend atau CMS belum ditentukan |

Route `/blog` bersifat server-rendered pada tahap ini. Shape data post:

```ts
type BlogPost = {
  slug: string;
  category: "Akademik" | "Prestasi" | "Kegiatan";
  date: string;
  title: string;
  excerpt: string;
};
```

Setiap item dirender sebagai card. `slug` membentuk link `/blog/{slug}`. Link detail dapat menghasilkan 404 sampai route `/blog/[slug]` dikerjakan. Implementasi berikutnya wajib mempertahankan shape data dan menambah reader terpisah sebelum integrasi backend atau CMS.

## 6. Build dan verifikasi

Perintah verifikasi yang ditetapkan TASK-101:

```bash
npm install
npm run lint
npm run build
```

QA TASK-101 mencatat ketiga perintah berakhir dengan exit code 0 pada commit `8e713b0bbbcb693f8600dfcca8668fdc14c739ce`. Rujukan immutable: `docs/QA/TASK-101-qa.md:17-27` dan `docs/HANDOFFS/TASK-101.md:59-69`. Build menghasilkan route `/`, `/blog`, dan `/_not-found`.

## 7. Batas teknis

- Tidak ada backend, database, CMS, API route, atau environment variable pada scope TASK-101.
- Route detail artikel belum menjadi implementasi.
- Deploy, merge, push, publish, dan release approval berada di luar dokumen ini.
- Implementasi harus mempertahankan parity struktural dan affordance terhadap `index.html` legacy yang diuji pada TASK-101.
