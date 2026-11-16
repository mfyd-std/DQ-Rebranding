# DQ legacy revision QA

## Latest owner-review corrections

Latest changes supersede visual measurements below: restored legacy dark surface colors for migrated green-light/gold-light tokens, removed desktop hiding from four hero badges and three home DQ3 feature blocks. Blog featured and all six listing cards now link to internal article routes; external DQ3 news CTA removed. Three added listing routes use existing legacy excerpts only because full article bodies are not available in the mapped sources. Three paired legacy articles retain their full bodies. No factual paragraphs invented.

Technical verification: npm run lint, npm run build and git diff --check exit 0. Fresh production preview http://127.0.0.1:3288/ retained for owner review, process handle proc_69bdf7d5fd02. Home, blog, six distinct listing article routes and current CSS returned HTTP 200. Every linked article renders prose-content; listing contains no external DQ3 news URL. Build generated 17 pages; existing non-failing Next ESLint plugin warning persists.

Per owner instruction, no screenshots or automated hover/focus/press checks in this correction batch. Visual approval belongs to owner. Previous pixel/geometry evidence below is historical, not validation of these edits. No claim of complete site-wide visual parity. No commit, push or deploy.

Branch `feature/legacy-interaction-layout`; HEAD `dd40b6c2f24faeeebaadbc958f7547051db97b69` plus uncommitted sources. Current app/components source identity detailed below includes `components/ScrollReveal.tsx`. Not exact committed-SHA QA. `IDEA.md` untouched. No commit/push/deploy.

## Browser evidence

`legacy-revision-evidence/measurements.json`: 120 records, 10 matched routes × 3 requested widths × 2 themes × 2 sources. `innerWidth` 375/768/1440; both sites effective `clientWidth` 360/753/1425. Seven top-level routes: `.dq-container` equal width and document overflow zero in every context. Paired viewport images `<route>-<width>-<theme>-<legacy|next>.png`; CDP full-page light images at 375/1440 on seven routes (`*-full.png`). Static captures force reveals visible and disable animation. They cannot establish motion. Vision inspection: tablet homepage top fold and blog feature/six-card grid render, no blank capture. Final blog viewport shots/measurements refreshed after featured sizing fix; older blog full-page image is stale and excluded from final geometry verdict.

### Scroll reveal inventory

Source `css/style.css:58-65`: opacity 0→1, Y24→0, 0.6s ease. `js/main.js:204-220`: threshold 0.12, unobserve once visible. Counts, ordered node semantics and stagger delays checked in browser against final Next build, all six viewport/theme contexts:

| route | legacy / Next reveals | stagger | legacy / Next sections |
|---|---:|---|---:|
| `/` | 29 / 29 | PASS | 13 / 13 |
| `/program` | 7 / 7 | PASS | 6 / 6 |
| `/tentang` | 16 / 16 | PASS | 5 / 5 |
| `/jelajahi` | 20 / 20 | PASS | 5 / 5 |
| `/dq3` | 21 / 21 | PASS | 5 / 5 |
| `/kontak` | 4 / 4 | PASS | 4 / 4 |
| `/blog` | 7 / 7 | PASS | 3 / 3 |

Total 104 paired targets. Mapping: home five full sections quote/video/motto/stats/marquee; program heading/four cards; DQ3 text/image; explore heading/four cards; testimonial heading/three cards; CTA; news heading/filter/three cards; FAQ heading/container. Program page three two-column sections + CTA. Tentang profile columns, visi heading/two cards/verse, leader heading/three cards, history heading/five milestones. Jelajahi facilities heading/six cards, life text/gallery, activity heading/eight cards, dorm image/text. DQ3 three headings, six advantages, two programs, six gallery tiles, four CTA nodes. Kontak contact/form columns, map, CTA. Blog feature/six cards. Three paired article detail sources have no reveal targets. No extra nested reveals.

## Scope verdict

- PASS shared chrome and widths: header badge, registration CTA, theme, hamburger order; 375/768/1440 light/dark client widths and outer containers equal; zero overflow. Reading widths remain intentional.
- PASS hero/bento: four words `Berilmu`, `Berakhlak`, `Berbadan Sehat`, `Perubahan`; at ~2.1 s outgoing Y=-144, incoming Y=-0.298; after ~3.0 s Y=0. Registration card offsetParent `.bento-wrap`.
- PASS scroll trigger/lifecycle: before scroll card opacity 0/Y24, during Y1.589, after opacity 1/Y0. Reduced motion: zero hidden of 20 jelajahi targets. Direct `/program#reguler`: target visible. Default no-JS CSS readable.
- PASS card hover spring CSS; computed `transform 0.35s cubic-bezier(0.34,1.56,0.64,1)` after reveal, active CSS present. Focus/press not sampled across every viewport.
- PASS actual clicked links: homepage four program cards reached `/program#reguler`, `/program#excellent`, `/dq3`, `/program#dirasah`; four explore cards reached `/jelajahi#fasilitas`, `#kehidupan`, `#ekskul`, `#asrama`. All fragment targets exist. Program DOM order reguler/excellent/dq3/dirasah.
- PASS blog hierarchy: headline, April OPSI featured `/images/BP3A8871.webp`, six photo cards, February OPSI detail `/images/BP3A1252.webp`; listing links remain external `https://www.daarelqolam3.sch.id/news/`, homepage news internal. Featured section final heights 814/624/775 px at 375/768/1440 vs legacy 813/623/776 px.
- PASS three paired detail pages: image, four paragraphs, WhatsApp share each. Source-exception fourth `/blog/kegiatan-apel-santri` has no paired legacy article; preserved excerpt-only, no invented body.
- PARTIAL strict site-wide visual parity after scoped repairs. Fresh production `legacy-revision-evidence/measurements-final-next.json` contains 60 Next contexts paired with 60 preserved legacy contexts in `measurements.json` (10 routes × 3 widths × 2 themes); effective client widths remain 360/753/1425. Home tablet hero +535 px now +14 px; jelajahi phone life +125 px now +32 px; kontak phone map -80 px now 0 px; tentang desktop vision +53 px now +19 px. Root causes: tablet gallery aspect inflated to ~1015px instead of legacy 480px, mobile life body used 14px instead of source 12px, mobile map 320px instead of source 400px, vision mission list spacing/leading exceeded source. No pixel-perfect claim. Remaining >20px section deltas persist, listed below; owner visual approval and independent QA pending.

### Fresh implementation evidence (uncommitted)

Current HEAD `dd40b6c2f24faeeebaadbc958f7547051db97b69`; SHA-256 `e756a52c9fe4eb870dc961114aff65a8ac3475ca65cd90ca1575f94217d8512a` covers 19 path+byte app/components sources from `git ls-files --cached --others --exclude-standard app components`, including untracked `components/ScrollReveal.tsx`. New image files `legacy-revision-evidence/{home-768,jelajahi-375,kontak-375,tentang-1440}-light-final-next.png` are full-page fresh production captures with eagerly loaded images (`naturalWidth>0` checked). Earlier same-suffix viewport captures for other contexts were taken before lazy images loaded and must not be treated as visual evidence; geometry JSON remains valid. The 60 records have matched section counts and client widths; legacy records are preserved, not newly recaptured. At light theme, remaining >20px mismatches (section index, Next minus legacy px): home 375 `0:-31,6:-40,8:-53,9:-36`; 768 `1:+30,9:-27,10:+60,11:+30`; 1440 `7:+45,9:-29`; program 375 `0:-64,1:+35,5:-28`; 768 `0:-40,1:-36,2:-36,4:-36`; 1440 `2:-24,4:-24`; tentang 375 `1:+38,3:+60`; 768 `3:+51`; 1440 `3:+22`; jelajahi 375 `0:+48,1:+31,2:+32,3:-26`; 768 `0:+58,2:-40,3:+27,4:-30`; 1440 `0:+49,1:-29`; dq3 375/768/1440 hero `-30/-40/-24`; kontak 375 `0:-58,1:+70`; 768 `0:-60`; 1440 `0:-29,1:-48`. Dark theme returned same section deltas. Blog and three paired detail routes: no >20px section deltas. These are unresolved failures, not approved exceptions. The fourth article `/blog/kegiatan-apel-santri` lacks a legacy pair and retains excerpt-only body.

Actual clicks at effective 360 and 1425: homepage program card reached `/program#reguler` with target present; lightbox opened from gallery. Source DOM preserves hover/active/focus styles but visual state transitions were not fully sampled. `npm run lint`, `npm run build`, `git diff --check` each exited 0 after final source edit. No commit/push/deploy.

Final `npm run lint` exit 0; `npm run build` exit 0; `git diff --check` exit 0. Build warns Next ESLint plugin absent, non-failing. Browser runtime tested from fresh production build. Self-audit independent of preceding worker claims; not external reviewer signoff.
