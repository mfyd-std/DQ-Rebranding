# Legacy static site

This folder holds the original hand-written static site that the Next.js app in
`app/` replaced. It is kept as a parity reference: when a layout or interaction
looks wrong, the legacy markup and CSS are the source of truth for how it was
meant to behave.

Nothing here is built, served, or imported by the running application.

## What is where

| Path | Contents |
|---|---|
| `html/` | The eleven original pages, including the hero prototype |
| `js/main.js` | Legacy UI script: scroll state, counters, mobile menu, lightbox |

## Path mapping after the reorganisation

| Before | Now |
|---|---|
| `index.html`, `tentang.html`, `program.html`, `jelajahi.html`, `kontak.html`, `dq3.html` | `legacy/html/<same name>` |
| `berita.html`, `berita-opsi.html`, `berita-paskibraka.html`, `berita-perpustakaan.html` | `legacy/html/<same name>` |
| `DQ_Landing_Hero_Prototype.html` | `legacy/html/DQ_Landing_Hero_Prototype.html` |
| `js/main.js` | `legacy/js/main.js` |
| `css/style.css` | `app/styles/legacy.css` (still imported by `app/globals.css`) |
| `assets/legacy/images/**`, `assets/legacy/docs/**` | removed from the repository |

`css/style.css` is the one file that did not become inert: the Next app imports
it as the base stylesheet, so it moved into `app/styles/` instead of here.

## Camera originals were removed on purpose

The 21 unreferenced camera files (JPG/PNG, about 92 MB) were deleted on the
owner's instruction; the served site only ever used the optimised webp versions
in `public/images/`. The brochure PDF that used to sit in `assets/legacy/docs/`
is still published, from `public/assets/legacy/docs/brosur_sanbar_2025.pdf`.

Historical QA reports in `docs/QA/` still mention the deleted paths. Those are
records of past runs and were deliberately left as written.

## Public URLs

Old inbound URLs such as `/index.html` or `/berita.html` are redirected to the
Next routes by `netlify.toml`. Those redirects are path rules and do not depend
on the files above, so moving or deleting them does not break anything.
