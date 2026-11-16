# QA records

Written evidence from the revision rounds: what was checked, at which viewport,
and what the result was. These are records of past runs, so they are left as
written even when paths or code have since moved.

## Screenshots are archived outside this repository

The 359 screenshot files that used to live in `docs/QA/screenshots/` were
removed from the repository and from its history. They were 143.6 MB, which is
too much for a git history that mostly contains text.

- Archive: `D:\Zaky Data\Document\01_Project\_arsip\DQ-Rebranding\qa-screenshots.zip`
- Contents: 359 files, uncompressed 143.6 MB, paths preserved under `screenshots/`
- SHA-256: `5693cbe1ab454ecd539b731f7136351dbd6ac528e91387fa2916441e671b210b`

The screenshots were also purged from the git history on 16 November 2026;
`docs/HISTORY/sha-remap-2026-11-16.md` records that rewrite and maps old
commit SHAs to new ones.

Documents in this folder still refer to those paths. The references are
historical: they point at the archive above, not at this tree.

`docs/QA/legacy-revision-evidence/` is local-only and gitignored for the same
reason.

The PNG files directly in this folder (`G3-12-*.png`, four files, a few hundred
kilobytes) are small enough to keep and are still tracked.
