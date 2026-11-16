project: DQ-Rebranding
task_id: TASK-101
source_channel: direct
source_sender: blackops
received_at: 2026-11-12T15:08:11+07:00
owner: mfyd-frontend
requested_by: mfyd
file_scope: scaffold Next.js App Router + TypeScript + Tailwind CSS v4 di worktree task; satu halaman statis pengganti index.html; satu komponen reusable; satu dokumen kontrak docs/TRD.md versi draft; satu kontrak slice blog di level route saja tanpa backend penuh
branch: task/TASK-101
worktree: mfyd-frontend/TASK-101
dependencies: baseline main pada commit e3b2517; working tree checkout DQ tidak bersih sejak baseline; parity source legacy index.html
risk: visual parity dapat menyimpang; konfigurasi build dan lint baru belum tersedia; working tree utama tidak bersih
required_approval: persetujuan mfyd sebelum integrasi atau perubahan di luar scope
definition_of_done: scaffold jalan; npm run build dan npm run lint tersedia sebagai script dan lulus; halaman render tanpa error TypeScript; docs/TRD.md draft ada; handoff menyebut branch, worktree, dan commit SHA; hasil diserahkan ke mfyd-qa
qa_required: true
handoff_target: mfyd-qa
status: qa_passed
