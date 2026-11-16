# TASK SPECIFICATION: Tech Stack Modernization with Strict Visual Parity - "DQ-Rebranding"

> **Living document.** This file is the governing specification for the migration. It lives at `docs/hermes_agent_task_specification.md` inside the project and is updated as the plan evolves. Any change to scope, stack, or sequencing must be written here first, not agreed only in chat.

| Version | Date | Change |
|---|---|---|
| v1 | 2026-11-06 | Initial draft, fixed stack, `wwwtest.daarelqolam.ac.id` as reference |
| v2 | 2026-11-06 | Baseline changed to the live Netlify site, stack opened to any justified choice, visual parity contract added, defect handling defined |
| v3 | 2026-11-06 | Defects deferred to Phase 4 after the stack change, defect backlog added, file moved into `docs/` |

---

## 0. Scope Boundaries (read this first)

### In scope

- Replace the implementation tech stack of the existing website.
- Organize the project directory and consolidate documentation.
- Add build tooling, linting, and a verification pipeline.

### Out of scope

- Redesign, restyle, or "improve" the visual output in any way.
- Rewriting, shortening, translating, or reordering copy.
- Adding, removing, or merging pages or sections.
- Cloning, scraping, or using `wwwtest.daarelqolam.ac.id` as a design reference. That domain is not the baseline.
- Deleting legacy files before visual parity is verified.
- Fixing the defects listed in section 6b. Those belong to Phase 4, after the stack change.

### Baseline of truth

The website already exists and is live. The baseline is:

1. Live site: `https://dq-rebranding.netlify.app`
2. Local repository: `D:\Zaky Data\Document\01_Project\001_DQ Rebranding` (branch `main`)
3. Static source files in the repo root: `index.html`, `program.html`, `dq3.html`, `tentang.html`, `jelajahi.html`, `berita.html`, `berita-opsi.html`, `berita-paskibraka.html`, `berita-perpustakaan.html`, `kontak.html`, `css/style.css`, `js/main.js`

When local files and the live site disagree, the live site wins and the difference must be reported, not silently resolved.

### Definition of success

After migration the rendered output must be visually and behaviorally indistinguishable from the current live site at 375px, 768px, and 1440px, with identical copy and identical interactions. Only the implementation changes.

---

## 1. Executive Summary

The DQ-Rebranding website is currently a static multi-page site (HTML, CSS via Tailwind CDN, vanilla JavaScript) deployed on Netlify. The goal is to move it onto a modern, maintainable stack without changing a single visible detail, then fix the visual defects in a separate phase.

This is a re-implementation task, not a redesign and not a website clone. The current live site is the design specification. Screenshots and DOM text captured before the migration are the acceptance test.

Sequence is fixed: migrate and prove parity, then fix defects.

---

## 2. Visual Parity Contract

This contract overrides any conflicting instruction later in this document.

### 2.1 Baseline capture happens before any code change

Capture and store under `docs/parity/baseline/`:

- Full page screenshots per route at 375, 768, and 1440 width, full height, not viewport-cropped.
- Per-section screenshots for the home page at the same widths.
- DOM text dump per route for copy comparison.
- Screenshot of desktop mega menu open, mobile menu open, FAQ expanded, and news filter state.

### 2.2 Parity gates

Every migrated route must pass all of these:

| Gate | Test |
|---|---|
| Layout | Section order, grid columns, and stacking identical at each breakpoint |
| Spacing | Padding, margin, and section rhythm visually identical, no arbitrary "cleanup" |
| Color | Token values identical to the current CSS, no new shades |
| Typography | Same families, weights, sizes, line heights, letter spacing |
| Imagery | Same assets, same crop, same aspect ratio, same object position |
| Motion | Same entrance, hover, and scroll behavior with the same easing and duration feel |
| Copy | Text identical, whitespace normalization allowed, no rewording |
| Links | All internal and external targets preserved exactly |
| Interaction | FAQ accordion, mobile menu, mega menu, scroll reveal, WhatsApp form, news filter behave as they do now |
| Responsive | No new overflow, no new wrapping, no reflow at 375, 768, 1440 |

### 2.3 Defects are deferred to Phase 4, not fixed during migration

The current site has known defects, catalogued in section 6b. Do not fix, hide, or "improve" them while migrating. Reproduce them exactly as they behave today.

Reason: a fix applied during the rewrite cannot be separated from a regression introduced by the rewrite. Parity must be proven against current behavior first, then defects are fixed in small approved batches on the new stack.

### 2.4 Copy and content are frozen

Copy, headings, statistics, FAQ items, testimonials, and news entries must be carried over verbatim. Placeholder content stays placeholder until the owner supplies replacements.

---

## 3. Tech Stack: Open Decision

No stack is mandated. The Next.js, Tailwind, and Payload combination from the earlier draft is one valid option, not a requirement.

### 3.1 Non-negotiable requirements

| ID | Requirement |
|---|---|
| R1 | Must reproduce the existing design accurately at 375, 768, 1440 |
| R2 | Must deploy to Netlify, or the owner must approve a different host in writing |
| R3 | Must support multi-page structure and clean URLs for the 10 existing routes |
| R4 | Must support per-page SEO metadata, Open Graph, sitemap, and robots |
| R5 | Must preserve or improve image delivery without changing visual output |
| R6 | Must stay buildable by one person, local-first, with no paid service required for phase 1 |
| R7 | Must be ready to attach a blog and dynamic content later without a redesign |
| R8 | Must run `build` with zero errors and zero type errors if TypeScript is used |
| R9 | Must keep the public pages static-host friendly, with no server requirement |
| R10 | Must be documented in `docs/TRD.md` with a written rationale and rejected alternatives |

### 3.2 Candidate directions to evaluate

Evaluate at least three, then choose and justify:

1. Next.js App Router with TypeScript and Tailwind v4, static export, CMS via Payload later.
2. Astro with content collections for news, any headless CMS later.
3. SvelteKit with static adapter, or Nuxt with SSG.
4. Eleventy or Vite plus a templating layer, minimal JavaScript.
5. Keep the static approach but restructure into components with a build step.

Selection criteria: parity risk, build simplicity, deploy fit with Netlify, blog readiness, long-term maintainability for one person, and agent operability.

### 3.3 Stack decision record

Write the decision and the rejected options into `docs/TRD.md` under "Stack decision". A stack choice without a written rationale is incomplete work.

### 3.4 CMS

CMS is phase 2 readiness, not a phase 1 deliverable. If the chosen stack is not Next.js, Payload is not applicable, so the schema draft in `docs/BSD.md` must be CMS-agnostic with Payload noted as one option.

Open constraint to resolve in the TRD: a static site on Netlify cannot host a Payload admin panel or a database. Payload needs its own runtime and database, either a separate instance or a hybrid deploy. A Git-based CMS keeps the site fully static.

---

## 4. Phase 1: Directory Restructuring

Do this before writing application code, but do not delete anything.

### Target structure

```
DQ-Rebranding/
├── docs/
│   ├── hermes_agent_task_specification.md   (this file, living)
│   ├── PRD.md
│   ├── TRD.md
│   ├── AFD.md
│   ├── DBD.md
│   ├── BSD.md
│   ├── IPD.md
│   └── parity/
│       ├── baseline/
│       └── results/
├── archive/legacy-static/
│   ├── *.html
│   ├── css/
│   └── js/
├── notes/
│   ├── IDEA.md
│   ├── DQ_Project_Knowledge.md
│   ├── Visual QA Audit.md
│   └── task.md
├── Daar el-Qolam Design System/
├── public/
│   └── images/
├── src/ or app/
├── README.md
└── build config files
```

### Rules

- Legacy HTML, CSS, and JS move to `archive/legacy-static/` and stay runnable until parity is verified.
- Loose assets move to `public/images/` with filenames preserved exactly. Renaming an asset that content references breaks parity.
- Do not move `Daar el-Qolam Design System/`.
- Do not delete `.codegraph/` or `.hermes/` without asking.
- `IDEA.md` currently mentions Al Mumtaz, not DQ. Flag it to the owner before moving it into `notes/`.

---

## 5. Phase 2: Documentation Suite

Extract from `IDEA.md`, `DQ_Project_Knowledge.md`, `implementation_plan.md`, `README.md`, `task.md`, `Visual QA Audit.md`, and `Daar el-Qolam Design System/`.

| Document | Filepath | Required contents |
|---|---|---|
| PRD | `docs/PRD.md` | Product vision for the institution, audience, goals, page inventory, functional requirements. Must state explicitly that this is a stack migration with frozen design, not a redesign |
| TRD | `docs/TRD.md` | Stack options evaluated, chosen stack with rationale, build and deploy pipeline, browser support, performance budget, parity tooling, CMS hosting constraint |
| AFD | `docs/AFD.md` | Sitemap of the 10 routes, user journeys, navigation and mega menu behavior, mobile drawer behavior, sidebar behavior, FAQ interaction, contact form to WhatsApp, future author workflow |
| DBD | `docs/DBD.md` | Design tokens and rules extracted from the current CSS and the design system folder. Describes what exists, it does not propose changes |
| BSD | `docs/BSD.md` | Architectural decision on backend: no custom backend for phase 1. CMS-agnostic schema draft for posts, categories, authors, and media, with Payload noted as one implementation option |
| IPD | `docs/IPD.md` | Phased plan, task list, parity gates, definition of done, and the Phase 4 defect backlog carried from section 6b |

Documentation language follows the owner's preference. No em dash characters in any document.

---

## 6. Phase 3: Migration

### Step 1 - Baseline and inventory

- Capture the parity baseline described in section 2.1.
- Inventory every route, section, component, and interactive behavior from the live site.
- Record the current design tokens from `css/style.css` and the Tailwind config as they exist today.

### Step 2 - Scaffold

- Initialize the chosen stack.
- Configure styling so token values match current values exactly.
- Configure lint, type check if applicable, and build.

### Step 3 - Component extraction

Extract components that map one to one to the current markup:

- Navbar with mega menu and mobile drawer
- Footer
- Hero with bento collage
- Video section with the existing YouTube embed parameters
- Brand moto section
- Trust and stats
- Program cards
- DQ3 section
- Jelajahi preview
- Testimonials
- Admission CTA
- News list with the current filter markup and behavior
- FAQ accordion with all items
- Contact section with the WhatsApp handoff
- Sidebar navigation on inner pages

Component boundaries must follow the current visual sections. Do not invent abstractions that change output.

### Step 4 - Route migration

Migrate one route at a time and run the parity gate for that route before starting the next. Recommended order: home, program, dq3, tentang, jelajahi, berita, kontak, then the three demo news pages.

### Step 5 - Assets and behavior

- Move images to `public/images/` without renaming.
- Replace only the delivery mechanism for images. Keep the same intrinsic size and crop.
- Preserve anchor links, external URLs, the WhatsApp number, and social links exactly.

### Step 6 - Optional CMS readiness

Only after full parity: prepare the blog route structure and schema. Do not change the output of any existing page.

### Step 7 - Verification

- Lint passes.
- Build passes with zero errors.
- Parity screenshots at 375, 768, and 1440 differ only in implementation, not appearance.
- Copy diff is empty after whitespace normalization.
- All links resolve.
- Interactive behaviors match the baseline recordings.

---

## 6b. Phase 4: Deferred Defect Fixes (after the stack change)

Phase 4 starts only when every route passes the parity gate on the new stack. Source: `Visual QA Audit.md`, audit dated 23 April 2026, mobile Chrome.

### Rules

- Parity first, fixes second.
- Each fix ships with a before screenshot, an after screenshot, and one line naming the cause.
- Fixes go in small batches with lint and build green.
- Any fix that changes layout beyond the reported defect needs owner approval first.
- Some items below are design changes rather than defects. Those need explicit design approval and are not silently bundled.

### Backlog

| ID | Item | Area | Type |
|---|---|---|---|
| B1 | News filter does not filter at all | home news, berita | defect |
| B2 | "Berita & Kegiatan" text not centered, heading not centered, "Lihat semua berita" stays left | home news | defect |
| B3 | Line clamp on news cards not tidy | home news | defect |
| B4 | Mobile overflow on the word "Scroll" | home hero | defect |
| B5 | Label and tag rows overflow on inner pages: Program Reguler, Program Excellent, Program Dirosah Islamiyah, Fasilitas, Ekstrakurikuler, Kehidupan Asrama, Kehidupan Islami | program, jelajahi | defect |
| B6 | Sidebar bug: opening Berita or Kontak drops Tentang DQ and Jelajahi sections, opening Jelajahi drops Pimpinan and Sejarah | sidebar | defect |
| B7 | Mega menu freezes on first page load | navbar | defect |
| B8 | Hamburger not aligned with logo, "menu" label to remove, list should be left aligned and flush with logo | mobile nav | defect |
| B9 | FAQ chevron not centered inside its circle | home FAQ | defect |
| B10 | Bento scroll hover effect clipped | home hero | defect |
| B11 | Logo wordmark missing in navbar | navbar | enhancement, needs asset from `LOGO FILE/01_Logo Utama` |
| B12 | Social icons should use secondary logo assets, e.g. `04_Utama_LS_H.png` | footer | enhancement, needs asset |
| B13 | Footer sub-heading font should match list font in bold, sentence case everywhere | footer | design change |
| B14 | Mobile menu animation should be fade, not slide left or right | mobile nav | design change |
| B15 | Mega menu should become a full width dropdown, fonts unified and slightly larger | navbar | design change |
| B16 | Sidebar should show all pages and sections without toggle | sidebar | design change |
| B17 | DQ3 section uses its own brand colors (purple and green) | dq3 | design change |
| B18 | Stats get rolling number animation and a container box | home stats | design change |
| B19 | Program card headline and tags should be larger, add pressed state | program | design change |
| B20 | Hero Arabic text and translation need refinement, tag variants should stand out | home hero | design change |
| B21 | Bento ornaments should be symmetrical, currently only bottom right | home hero | design change |

Backlog is a register, not a priority order. Batches and order are decided with the owner.

Note: the three dummy news pages requested in the audit already exist in the repo as `berita-opsi.html`, `berita-paskibraka.html`, and `berita-perpustakaan.html`. Their behavior must be migrated with parity, and their content stays as demo content until replaced.

---

## 7. Acceptance Criteria for the Migration Task

The migration task is done only when all of the following are demonstrated with artifacts, not asserted:

1. Baseline and post-migration screenshots exist for all routes at all three widths.
2. A written parity report marks each route pass or fail, with evidence.
3. Copy comparison shows no text change.
4. Build exits zero.
5. Legacy static files remain available under `archive/legacy-static/`.
6. `docs/` contains all six documents plus the parity baseline and this specification.
7. Defects B1 to B21 are still reproducible on the new stack, confirming they were migrated rather than accidentally fixed.
8. The deploy target is Netlify or a host approved in writing.
9. No file was deleted without approval.
10. Phase 4 fixes are explicitly out of scope for this task and need separate approval.

---

## 8. Instructions for the Agent

- If any instruction conflicts with visual parity, parity wins.
- If a stack change would force a visual compromise, stop and ask instead of improvising.
- Do not fix defects from section 6b during migration, even obvious ones.
- Do not touch the live site content in Netlify, and do not re-point DNS.
- Do not commit, push, or publish without explicit approval.
- Keep this file updated whenever the plan changes, including a changelog row.
- Report blockers and ambiguity instead of guessing.
- Ask before: deleting files, renaming assets, fixing defects, changing copy, changing the deploy target, or choosing a stack.
