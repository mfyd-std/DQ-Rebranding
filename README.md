# DQ Rebranding - Website Pondok Pesantren Daar el-Qolam

Rebranding of the official Daar el-Qolam website. The shipped product is a Next.js App Router site; the original hand-written static pages live in `legacy/` as a parity reference only.

- Production: https://dq-rebranding.netlify.app
- Deploy: Netlify auto-deploy from `main`, with a Deploy Preview for every pull request

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 imported in `app/globals.css`, plus the ported legacy stylesheet `app/styles/legacy.css` |
| Fonts | `next/font/google`: Cormorant Garamond (headlines), Plus Jakarta Sans (body), Amiri (Arabic) |
| Icons | `@heroicons/react`, local brand icons in `components/BrandIcons.tsx` |
| Hosting | Netlify with `@netlify/plugin-nextjs` |

## Routes

| Route | Purpose |
|---|---|
| `/` | Home: hero, stats counters, programs, Jelajahi cards, news, testimonial, FAQ, CTA |
| `/tentang` | Profile, vision and mission, leadership, history |
| `/program` | Program reguler, excellent, dirasah, DQ3 section |
| `/dq3` | Dza'Izza campus |
| `/jelajahi` | Facilities, Islamic life, extracurriculars, dormitory |
| `/blog` and `/blog/[slug]` | News and activity posts |
| `/kontak` | Contact, location, WhatsApp form |

Legacy inbound URLs (`/index.html`, `/berita.html`, and so on) are 301-redirected to these routes in `netlify.toml`.

## Repository layout

```
app/                 routes, global styles, layout
  styles/legacy.css  base stylesheet ported from the old site (imported by globals.css)
components/          header, footer, StatCounter, navigation config, brand icons
public/              served assets (images, brochure PDF, logos)
docs/                project documentation
  DECISIONS/         decision records
  QA/                QA reports per gate
  HISTORY/           superseded plans and task lists
  brand/logo/        master logo files (design source, not served)
legacy/              the original static site, kept for parity reference
```

Start with `docs/PROJECT_STATUS.md` for current state, `docs/RELEASE.md` for deploy history, and `legacy/README.md` for how the old files map to the new tree.

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint         # eslint, zero warnings tolerated
npm run build        # must pass before any commit that touches UI
```

## Conventions

- One commit per revision item, conventional commit prefixes (`feat:`, `fix:`, `style:`, `docs:`, `chore:`).
- Never commit straight to `main`: branch, open a pull request, let the Deploy Preview build, then merge.
- After a production deploy, confirm the live commit matches `origin/main` before reporting success.
- Keep brand colours inside the approved system: Deep Navy `#0E1E41`, Brand Blue `#365DAA`, Studio Pink `#D94F7B`, Studio Yellow `#F4C742`.

## Status

All pages are live. Current work is mobile parity and visual QA, tracked in `docs/PROJECT_STATUS.md` and the pull request history.
