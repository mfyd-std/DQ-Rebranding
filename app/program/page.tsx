import Image from "next/image";
import Link from "next/link";

import {
  dq3RegistrationUrl,
  registrationUrl,
} from "@/components/site-navigation";

type ProgramFact = {
  label: string;
  value: string;
};

type Program = {
  id: string;
  campus: string;
  title: string;
  emphasis: string;
  description: string;
  facts: ProgramFact[];
  subjects: string[];
  advantages: string[];
  image: string;
  imageAlt: string;
  cta: string;
  imageFirst?: boolean;
};

const programs: Program[] = [
  {
    id: "reguler",
    campus: "Daar el-Qolam Pusat",
    title: "Program Reguler",
    emphasis: "Madrasatul Muallimin al-Islamiyah",
    description:
      "Program pendidikan terpadu selama 6 tahun (MTs dan MA) yang mengintegrasikan kurikulum pesantren dengan kurikulum nasional. Santri mendapatkan bekal ilmu agama yang kuat sekaligus ilmu pengetahuan umum yang komprehensif.",
    facts: [
      { label: "Jenjang", value: "MTs + MA (Setara SMP & SMA)" },
      { label: "Masa Studi", value: "6 Tahun (3+3)" },
      { label: "Bahasa Pengantar", value: "Indonesia, Arab, Inggris" },
      { label: "Iuran Bulanan", value: "Rp 1.360.000 / bulan" },
    ],
    subjects: [
      "Al-Qur'an & Tahfidz",
      "Bahasa Arab",
      "Fiqih & Ushul Fiqih",
      "Tafsir & Hadits",
      "Matematika & Sains",
      "Bahasa Inggris",
    ],
    advantages: [
      "Ijazah Nasional (MTs/MA) dan Ijazah Pesantren",
      "Lingkungan asrama 24 jam yang terbimbing",
      "Kurikulum MMI yang telah teruji selama 58 tahun",
      "Beasiswa tersedia bagi santri berprestasi",
    ],
    image: "/images/BP3A8852.webp",
    imageAlt: "Santri Program Reguler",
    cta: "Daftar Program Reguler",
  },
  {
    id: "excellent",
    campus: "Daar el-Qolam 2",
    title: "Excellent Class",
    emphasis: "Sains, Teknologi & Agama",
    description:
      "Program SMP dan SMA unggulan yang memadukan ilmu pengetahuan umum (sains, teknologi) dengan pendidikan agama Islam. Dirancang untuk melahirkan santri yang kompetitif di bidang akademik sekaligus teguh dalam akidah.",
    facts: [
      { label: "Jenjang", value: "SMP + SMA (Terakreditasi A)" },
      { label: "Masa Studi", value: "6 Tahun (3+3)" },
      { label: "Fokus", value: "Sains, Teknologi, Bahasa" },
      { label: "Iuran Bulanan", value: "Rp 1.575.000 / bulan" },
    ],
    subjects: [
      "Matematika Lanjut",
      "Fisika & Kimia",
      "Biologi",
      "Informatika / Coding",
      "Al-Qur'an & Tahfidz",
      "Bahasa Inggris",
    ],
    advantages: [
      "Ijazah Nasional (SMP/SMA) dan Ijazah Pesantren",
      "Penekanan khusus pada olimpiade sains & teknologi",
      "Laboratorium sains dan komputer modern",
      "Persiapan masuk perguruan tinggi negeri & swasta terbaik",
    ],
    image: "/images/DJI_0849.webp",
    imageAlt: "Excellent Class DQ 2",
    cta: "Daftar Excellent Class",
    imageFirst: true,
  },
  {
    id: "dirasah",
    campus: "Daar el-Qolam 4",
    title: "Dirasah Islamiyyah",
    emphasis: "Pendalaman Ilmu-Ilmu Islam",
    description:
      "Program khusus yang berfokus pada pendalaman ilmu-ilmu keislaman secara intensif. Santri mempelajari kitab kuning, tahfidz Al-Qur'an, dan fiqih secara mendalam — menyiapkan ulama dan da'i masa depan.",
    facts: [
      { label: "Jenjang", value: "MTs + MA (Terakreditasi)" },
      { label: "Masa Studi", value: "6 Tahun (3+3)" },
      { label: "Fokus", value: "Kitab Kuning, Tahfidz, Fiqih" },
      { label: "Iuran Bulanan", value: "Rp 1.475.000 / bulan" },
    ],
    subjects: [
      "Kitab Kuning",
      "Tahfidz Al-Qur'an",
      "Fiqih & Ushul Fiqih",
      "Hadits & Musthalah",
      "Nahwu & Sharaf",
      "Tafsir Al-Qur'an",
    ],
    advantages: [
      "Ijazah Nasional (MTs/MA) dan Ijazah Pesantren",
      "Guru-guru spesialis ilmu-ilmu Islam yang berpengalaman",
      "Koneksi ke universitas Islam dalam dan luar negeri",
      "Program tahfidz terstruktur hingga 30 juz",
    ],
    image: "/images/upacaradq2.webp",
    imageAlt: "Santri Dirasah Islamiyyah",
    cta: "Daftar Dirasah Islamiyyah",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-dq-green"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function ProgramDetails({ program }: { program: Program }) {
  return (
    <div>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dq-green/20 bg-dq-green-light px-4 py-1.5">
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-green" />
        <span className="text-xs font-semibold uppercase tracking-wide text-dq-green">
          {program.campus}
        </span>
      </div>
      <h2 className="mb-4 font-serif text-4xl font-semibold leading-tight text-dq-charcoal lg:text-5xl">
        {program.title}
        <br />
        <span className="italic text-dq-green">{program.emphasis}</span>
      </h2>
      <p className="mb-6 leading-relaxed text-dq-warm-gray">
        {program.description}
      </p>
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {program.facts.map((fact) => (
          <div
            key={fact.label}
            className={`rounded-xl border border-dq-green/10 p-4 ${program.id === "excellent" ? "bg-dq-ivory" : "bg-white"}`}
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-dq-gold">
              {fact.label}
            </p>
            <p className="text-sm font-semibold text-dq-charcoal">
              {fact.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold text-dq-charcoal">
          Mata Pelajaran Unggulan:
        </p>
        <div className="flex flex-wrap gap-2">
          {program.subjects.map((subject) => (
            <span
              key={subject}
              className="rounded-full bg-dq-green-light px-3 py-1.5 text-xs font-medium text-dq-green"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
      <a
        href={registrationUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-dq-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-dq-green-dark hover:shadow-card-lg"
      >
        {program.cta}
        <ArrowIcon />
      </a>
    </div>
  );
}

function ProgramAdvantages({ program }: { program: Program }) {
  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card-lg">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div
        className={`mt-6 rounded-2xl border border-dq-green/10 p-6 shadow-card ${program.id === "excellent" ? "bg-dq-ivory" : "bg-white"}`}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-dq-gold">
          Keunggulan Program
        </p>
        <ul className="space-y-2.5">
          {program.advantages.map((advantage) => (
            <li
              key={advantage}
              className="flex items-start gap-2 text-sm text-dq-warm-gray"
            >
              <CheckIcon />
              {advantage}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProgramPage() {
  return (
    <main className="overflow-x-clip">
      <section className="arabesque-bg bg-dq-green pb-16 pt-32">
        <div className="mx-auto dq-container max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
            <span className="text-xs font-semibold uppercase tracking-wide text-dq-gold">
              Program Pendidikan
            </span>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Pilih Jalur Terbaik
            <br />
            <span className="italic text-dq-gold">untuk Putra-Putri Anda</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            Empat program unggulan yang dirancang untuk membekali santri dengan
            ilmu agama, akademik, dan keterampilan abad ke-21.
          </p>
        </div>
      </section>

      <div className="sub-nav-sticky sticky z-30 border-b border-dq-green/10 bg-white shadow-sm">
        <div className="mx-auto dq-container">
          <nav
            className="flex gap-1 overflow-x-auto py-3"
            aria-label="Navigasi program pendidikan"
          >
            <Link
              href="#reguler"
              className="min-h-11 shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-dq-charcoal transition hover:bg-dq-green-light hover:text-dq-green"
            >
              DQ Pusat — Reguler
            </Link>
            <Link
              href="#excellent"
              className="min-h-11 shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-dq-charcoal transition hover:bg-dq-green-light hover:text-dq-green"
            >
              DQ 2 — Excellent
            </Link>
            <Link
              href="#dq3"
              className="min-h-11 shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-dq-charcoal transition hover:bg-dq-green-light hover:text-dq-green"
            >
              DQ 3 — Internasional
            </Link>
            <Link
              href="#dirasah"
              className="min-h-11 shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-dq-charcoal transition hover:bg-dq-green-light hover:text-dq-green"
            >
              DQ 4 — Dirasah
            </Link>
          </nav>
        </div>
      </div>

      {programs.slice(0, 2).map((program) => (
        <section
          key={program.id}
          id={program.id}
          className={`scroll-mt-[7.5rem] lg:scroll-mt-[9rem] py-20 lg:py-28 ${program.id === "excellent" ? "bg-white" : "bg-dq-ivory"}`}
        >
          <div className="mx-auto dq-container">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div
                className={
                  program.imageFirst
                    ? "reveal order-2 lg:order-1"
                    : "reveal order-1"
                }
              >
                {program.imageFirst ? (
                  <ProgramAdvantages program={program} />
                ) : (
                  <ProgramDetails program={program} />
                )}
              </div>
              <div
                className={
                  program.imageFirst
                    ? "reveal order-1 lg:order-2"
                    : "reveal order-2"
                }
              >
                {program.imageFirst ? (
                  <ProgramDetails program={program} />
                ) : (
                  <ProgramAdvantages program={program} />
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="dq3" className="dq3-gradient relative scroll-mt-[7.5rem] overflow-hidden py-16 lg:scroll-mt-[9rem]">
        <div className="arabesque-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto dq-container">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
                <span className="text-xs font-semibold uppercase tracking-wide text-dq-gold">
                  Daar el-Qolam 3 · Kampus Dza&apos;Izza
                </span>
              </div>
              <h2 className="mb-2 font-serif text-2xl font-semibold text-white lg:text-3xl">
                Kelas Internasional — Go Global, Be a Global Player
              </h2>
              <p className="max-w-lg text-sm text-white/70">
                Program bilingual 3 tahun untuk lulusan SMP/MTs. Kerjasama
                dengan Az-Zaitunah Tunisia dan University Center.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/dq3"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-dq-green transition hover:bg-dq-gold-light"
              >
                Pelajari DQ3 <ArrowIcon />
              </Link>
              <a
                href={dq3RegistrationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Daftar PSB DQ3
              </a>
            </div>
          </div>
        </div>
      </section>

      {programs.slice(2).map((program) => (
        <section
          key={program.id}
          id={program.id}
          className={`scroll-mt-[7.5rem] lg:scroll-mt-[9rem] py-20 lg:py-28 ${program.id === "excellent" ? "bg-white" : "bg-dq-ivory"}`}
        >
          <div className="mx-auto dq-container">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div
                className={
                  program.imageFirst
                    ? "reveal order-2 lg:order-1"
                    : "reveal order-1"
                }
              >
                {program.imageFirst ? (
                  <ProgramAdvantages program={program} />
                ) : (
                  <ProgramDetails program={program} />
                )}
              </div>
              <div
                className={
                  program.imageFirst
                    ? "reveal order-1 lg:order-2"
                    : "reveal order-2"
                }
              >
                {program.imageFirst ? (
                  <ProgramDetails program={program} />
                ) : (
                  <ProgramAdvantages program={program} />
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-dq-ivory py-16">
        <div className="mx-auto dq-container">
          <div className="arabesque-bg reveal flex flex-col items-center justify-between gap-6 rounded-none bg-dq-green p-8 text-white lg:flex-row lg:rounded-2xl lg:p-12">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-dq-gold">
                Tahun Pelajaran 2026/2027
              </p>
              <h2 className="mb-2 font-serif text-2xl font-semibold lg:text-3xl">
                Pendaftaran Santri Baru Dibuka
              </h2>
              <p className="text-sm text-white/70">
                Kuota terbatas · Biaya pendaftaran Rp 400.000 · Tes seleksi
                online &amp; offline
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-dq-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600"
              >
                Daftar Sekarang
              </a>
              <Link
                href="/kontak"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/80"
              >
                Tanya Info Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
