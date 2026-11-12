# Decision: TASK-101 Blog Route

Status: decided
Date: 2026-11-12
Owner: mfyd

## Decision

Use per-article routes `/blog/{slug}` as replacement contract for legacy `berita-*.html` routes.

`/blog` with hash anchors is not accepted as final replacement contract.

## Rationale

- Legacy news links target separate article pages: `berita-perpustakaan.html`, `berita-paskibraka.html`, and `berita-opsi.html`.
- Per-article slugs preserve distinct article destinations and support clean URL semantics.
- QA verified three article links in the form `/blog/{slug}` on frontend SHA `8e713b0bbbcb693f8600dfcca8668fdc14c739ce`.
- Hash anchors on one `/blog` page collapse distinct article destinations and do not preserve route-level parity.

## Scope consequence

- Keep `/blog/{slug}` as route contract.
- Implement `app/blog/[slug]/page.tsx` in a later task when backend or approved data source is available.
- Current placeholder links may return 404 until that route is implemented. This remains follow-up risk, not TASK-101 D-005 blocker.
- No release approval granted by this decision.