# Project brief

One-page orientation for anyone (human or agent) picking this repository up.

## What this is

The rebranded public website of Pondok Pesantren Daar el-Qolam, a boarding
school in Jayanti, Kabupaten Tangerang, Banten. The pesantren is described on the
site as having educated students since 1968.

It replaces an eleven-page hand-written static site (plain HTML, CSS, and
JavaScript with Tailwind from a CDN). That original site is preserved in
`legacy/` for parity reference only; it is not built or served.

Built and maintained by MFYD Studio. Repository owner: `mfyd-std`.

## Why it exists

The old site was a set of independent HTML files: every shared element (header,
footer, navigation, stats block) was copy-pasted into each page, so any change
had to be made eleven times and drifted anyway. The rebrand needed a consistent
visual system plus a structure that survives repeated edits.

The Next.js rewrite solves three concrete problems:

1. One source of truth for chrome (header, footer, navigation map) instead of
   eleven copies.
2. Fonts and colour system declared once, not per page.
3. Real deployment pipeline: branch, preview, review, merge, verified release.

## Scope as shipped

Seven routes plus article pages, all statically prerendered (17 prerendered
paths in a production build):

| Route | Content |
|---|---|
| `/` | Hero, statistics counters, program cards, Jelajahi cards, news list with category filter, testimonial, FAQ, closing CTA |
| `/tentang` | Profile, vision and mission, leadership, history, statistics |
| `/program` | Program Reguler (DQ Pusat), Excellent Class (DQ 2), International (DQ 3), Dirasah Islamiyyah (DQ 4) |
| `/dq3` | Dza'Izza campus, international program |
| `/jelajahi` | Facilities, Islamic life, extracurriculars, dormitory |
| `/blog`, `/blog/[slug]` | News and activities, four published posts, statically generated per slug |
| `/kontak` | Contact details, location, WhatsApp entry point |

Legacy inbound URLs (`/index.html`, `/berita-paskibraka.html`, and so on) return
301 to the matching route. Thirteen redirect rules live in `netlify.toml`.

## Technical shape

| Concern | Decision |
|---|---|
| Framework | Next.js 15 App Router, React 19, TypeScript 5.9 |
| Styling | Tailwind CSS v4 via `@tailwindcss/postcss`, plus `app/styles/legacy.css` (the ported original stylesheet, imported by `app/globals.css`) |
| Type | `next/font/google`: Cormorant Garamond (headlines), Plus Jakarta Sans (body), Amiri (Arabic). Self-loaded so the browser never synthesises weights |
| Icons | `@heroicons/react` plus hand-written SVG brand icons |
| Content | No CMS and no database. Copy lives in the page components, navigation in `components/site-navigation.ts`, articles in `app/blog/blog-data.ts`. Editing content means editing TSX/TS and shipping a commit |
| Motion | Scroll reveal via `IntersectionObserver` (`components/ScrollReveal.tsx`), statistics counters in `components/StatCounter.tsx` |
| Hosting | Netlify, `publish = ".next"`, `@netlify/plugin-nextjs`, Node 22 |

## Visual system

Deep Navy `#0E1E41`, Brand Blue `#365DAA`, Studio Pink `#D94F7B`, Studio Yellow
`#F4C742`, with the site's own green family (`#006C55`) and gold (`#C9A227`)
carried over from the pesantren identity.

Dark mode is an opt-in `.dark` class on `<html>`, toggled by the header control
and persisted in `localStorage` under `dq-theme`. It is deliberately not driven
by `prefers-color-scheme`.

## Working rules

- `npm run lint` must pass with zero warnings, `npm run build` must pass, before
  any commit that touches UI. Both are the only automated gates; there is no
  test suite.
- One commit per revision item, conventional commit prefixes.
- Never commit to `main`. Branch, open a pull request, let the Deploy Preview
  build, inspect it, then merge. The merge is what deploys production.
- After a merge, prove the release instead of assuming it: compare the Netlify
  deploy `commit_ref` with `git rev-parse origin/main`.
- No em dash characters in repository documents. Use a hyphen or a space.
- Do not introduce colours or typefaces outside the system above.
- `legacy/` is reference material. Do not fix bugs there; port the fix to `app/`.

## Where to look first

| Question | File |
|---|---|
| What is the current state and next action? | `docs/PROJECT_STATUS.md` |
| What shipped, and when? | `docs/RELEASE.md` |
| Why was a decision made? | `docs/DECISIONS/` |
| How did a gate get verified? | `docs/QA/` |
| How does the old site map to the new tree? | `legacy/README.md` |
| What is the app structure? | `README.md` |

## Known gaps

- Dark-mode text contrast has been audited on the header and the mobile menu
  only. Card and body copy on the secondary pages is not audited yet.
- The repository history still contains the 92 MB of camera originals deleted in
  this cleanup. `.git` is around 528 MB because of them; shrinking it needs a
  history rewrite, which has not been done.
- Mobile parity work is iterative and driven by review on real devices, not by an
  automated visual regression suite.
