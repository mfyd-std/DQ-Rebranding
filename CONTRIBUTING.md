# Contributing

Read `README.md` for the stack and `docs/PROJECT_BRIEF.md` for what the site is
and why it exists. This file covers how to work in the repo without breaking it
or leaking anything.

## Setup

```bash
git clone https://github.com/mfyd-std/DQ-Rebranding.git
cd DQ-Rebranding
npm install
npm run dev          # http://localhost:3000
```

Node 22 or newer. No environment file is needed: see `.env.example`.

## The only two gates

```bash
npm run lint         # eslint, zero warnings allowed
npm run build        # must prerender 17/17 routes
```

There is no test suite. If you touch UI, check 375px, 768px and 1440px by hand.

## Branch, pull request, deploy

1. Branch from an up to date `main`. Never commit to `main` directly.
2. One logical change per commit, conventional prefixes (`feat:`, `fix:`,
   `docs:`, `style:`, `chore:`).
3. Push the branch and open a pull request. Netlify builds a Deploy Preview for
   it and reports it as a commit status.
4. Look at the preview before merging. Merging is what deploys production, so the
   preview is the last chance to catch a mistake for free.
5. After the merge, confirm the release instead of assuming it: the Netlify
   deploy `commit_ref` must equal `git rev-parse origin/main`.

Note: GitHub branch protection is unavailable on this repository plan, so
nothing enforces the flow but discipline. Treat the rule as real anyway.

## Secrets and environment files

The repository history was audited on 16 November 2026: no credential, token,
private key, or environment value exists in any of its commits. Keep it that way.

Rules:

- Never commit `.env`, `.env.local`, or any `.env.*` file. They are gitignored.
  `.env.example` is the only environment file in git, and it holds placeholders
  only.
- Never paste a real key into a commit message, PR body, issue, screenshot,
  QA document, or chat. If a value has to be described, describe where it lives,
  not what it is.
- Keys belong in Netlify environment variables for this project, or in the
  operator's local `.env.local` for development.
- If a credential does leak: rotate it first, then clean the repository. Deleting
  the commit is not enough, the blob stays reachable until the history is
  rewritten. `docs/HISTORY/sha-remap-2026-11-16.md` records how that was done
  here.
- Adding an environment variable means updating `.env.example` in the same pull
  request, so the next person knows it exists.

## What not to add

- Colours or typefaces outside the system in `docs/PROJECT_BRIEF.md`.
- Screenshots or photo originals. QA evidence is archived outside the repository;
  see `docs/QA/README.md`. Large binaries are what forced this repo's history
  rewrite in the first place.
- Anything generated: `.next/`, `node_modules/`, build output, logs, editor state.
- Personal machine paths or internal infrastructure detail. This repository is
  shared with outside developers.

## Legacy folder

`legacy/` is the old static site, kept as reference for how a component used to
behave. Do not fix bugs there. Port the fix into `app/`.

## Writing conventions

- No em dash characters in repository documents. Use a hyphen or a space.
- Documents are written in English, client-facing copy in Indonesian.
