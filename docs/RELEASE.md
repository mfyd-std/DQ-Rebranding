# DQ Next.js release

## Scope

Owner approved latest UI and section spacing on 2026-11-16. Preserve approved geometry. CMS is a separate future phase and is not a release completion requirement. Current release goal is replacing legacy on existing Netlify site dq-rebranding.

## Verification

Final local lint, production build with type validation, git diff --check, and npm audit --omit=dev passed. Production audit: zero vulnerabilities. Full dependency audit retains six moderate tooling findings in the typescript-eslint/minimatch chain. No force fixes or Next major upgrade. Next ESLint plugin detection warning remains non-fatal.

Source review identified a homepage category filter restricted to first three items; category filtering now uses available source posts capped at three, preserving initial layout. Program contact CTA now uses /kontak rather than nonexistent /#kontak. Phone links use the number already displayed in approved source. No screenshots or automated interaction testing, per owner instruction.

Three article entries contain legacy listing excerpts rather than full bodies; no new factual paragraphs invented. Full editorial content and CMS are future content work, not claims of completed article authoring.

## Deployment

Existing site ID: dae763d0-d373-49b0-898a-19af10ce1d5b.
Production URL: https://dq-rebranding.netlify.app/.
Previous legacy deployment ID: 69f968b45bd75100083167ac.
Previous legacy commit: e3b251709de95065a32a1970c38201684c7f196d.

netlify.toml sets npm run build and .next output; Netlify Next.js runtime handles application routes and images. Legacy page URLs redirect to migrated routes. Do not publish repository root as static output.

Release sequence: commit scoped migration corrections, push feature branch, open and merge PR after review, deploy exact merged revision, verify public HTML/CSS/images/routes and deployment SHA before declaring production complete.

Rollback: restore previous published deployment from Netlify Deploys if live verification fails. Do not delete historic legacy source or prior deployment.

## Development

npm ci
npm run lint
npm run build
npm run start

Local article content: app/blog/blog-data.ts. Page content remains in existing route files. No CMS/database/admin service is deployed.

## Release status

Candidate prepared; publication must be verified separately. This file is not proof that production has been updated.
