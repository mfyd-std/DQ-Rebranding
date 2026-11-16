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
| `assets/legacy/images/` | Original camera files (JPG/PNG) that the webp assets were derived from |
| `assets/legacy/docs/` | Brochure PDF, served from `public/assets/legacy/docs/` |

## Path mapping after the reorganisation

| Before | Now |
|---|---|
| `index.html`, `tentang.html`, `program.html`, `jelajahi.html`, `kontak.html`, `dq3.html` | `legacy/html/<same name>` |
| `berita.html`, `berita-opsi.html`, `berita-paskibraka.html`, `berita-perpustakaan.html` | `legacy/html/<same name>` |
| `DQ_Landing_Hero_Prototype.html` | `legacy/html/DQ_Landing_Hero_Prototype.html` |
| `js/main.js` | `legacy/js/main.js` |
| `assets/legacy/**` | `legacy/assets/legacy/**` |
| `css/style.css` | `app/styles/legacy.css` (still imported by `app/globals.css`) |

`css/style.css` is the one file that did not become inert: the Next app imports
it as the base stylesheet, so it moved into `app/styles/` instead of here.

## Public URLs

Old inbound URLs such as `/index.html` or `/berita.html` are redirected to the
Next routes by `netlify.toml`. Those redirects are path rules and do not depend
on the files above, so moving them does not break anything.
