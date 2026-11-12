# Technical Requirements Document (draft)

## Scope

TASK-101 memindahkan satu halaman statis pengganti `index.html` legacy ke Next.js App Router. Copy utama dipertahankan. Blog hadir sebagai kontrak route dengan mock data, tanpa backend atau integrasi CMS.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript strict mode
- Tailwind CSS v4 melalui `@tailwindcss/postcss`
- ESLint 9 dengan `eslint-config-next`
- Node.js dan npm

## Struktur folder

```text
app/
├── blog/page.tsx       # route blog dan mock contract
├── globals.css         # Tailwind import, @theme, base styles
├── layout.tsx          # root layout dan metadata
└── page.tsx            # halaman beranda pengganti index.html
components/
└── SectionHeading.tsx  # heading section reusable
public/                 # reserved untuk aset publik tahap berikutnya
docs/
└── TRD.md
```

## Route contract: `/blog`

Route bersifat server-rendered dan statis untuk tahap ini.

```ts
type BlogPost = {
  slug: string;
  category: "Akademik" | "Prestasi" | "Kegiatan";
  date: string;
  title: string;
  excerpt: string;
};
```

Input route saat ini: array `posts: BlogPost[]` lokal di `app/blog/page.tsx`.

Kontrak tampilan:

- Render satu card untuk setiap item `posts`.
- `slug` menjadi bagian URL detail `/blog/{slug}`.
- `category`, `date`, `title`, dan `excerpt` wajib tampil.
- Link detail boleh tampil sebagai placeholder sampai route detail dan backend ditugaskan.
- Tidak ada `fetch`, database, CMS schema, API route, atau environment variable pada TASK-101.

Kontrak migrasi berikutnya:

1. Pindahkan type dan reader ke modul data terpisah.
2. Ganti mock array dengan reader CMS/backend tanpa mengubah shape route.
3. Tambahkan route detail `/blog/[slug]` setelah kontrak backend tersedia.
4. Tambahkan `next/image` setelah aset publik dan mapping visual disetujui.

## Out of scope

- Merge, push, deploy, publish.
- Backend, database, CMS schema, API.
- Perubahan copy utama legacy.
- Perubahan `docs/hermes_agent_task_specification.md`.
- Migrasi seluruh halaman legacy selain home slice yang diminta.
