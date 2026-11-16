import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "DQ3 Kampus Dza'Izza, Pesantren Beyond Pesantren",
  description:
    "Daar el-Qolam 3 Kampus Dza'Izza, Go Global, Be a Global Player. Program bilingual internasional dengan kerjasama Az-Zaitunah Tunisia.",
};

const advantages = [
  {
    title: "Kerjasama Internasional",
    description:
      "MOU dengan Universitas Az-Zaitunah (Tunisia) dan Universitas Internasional Afrikijyah (Sudan). Membuka jalur studi luar negeri bagi lulusan berprestasi.",
    icon: "globe",
  },
  {
    title: "Program Bilingual",
    description:
      "Bahasa Arab dan Inggris sebagai bahasa pengantar pembelajaran. Lingkungan berbahasa yang mendukung penguasaan aktif kedua bahasa tersebut.",
    icon: "language",
  },
  {
    title: "University Center",
    description:
      "Jalur khusus menuju universitas terbaik dalam dan luar negeri. Bimbingan persiapan masuk universitas terintegrasi dalam kurikulum.",
    icon: "university",
  },
  {
    title: "Kurikulum Terpadu",
    description:
      "Integrasi kurikulum nasional (SMA terakreditasi A) dengan kurikulum pesantren MMI. Dua ijazah: ijazah nasional dan ijazah pesantren.",
    icon: "book",
  },
  {
    title: "Pondasi Islami Kuat",
    description:
      "Pembinaan akidah dan akhlak Islami yang intensif. Shalat berjamaah, halaqoh, dan pengajian rutin menjadi bagian dari kehidupan sehari-hari.",
    icon: "shield",
  },
  {
    title: "Tenaga Pengajar Internasional",
    description:
      "Guru-guru berpengalaman dari dalam dan luar negeri. Beberapa pengajar merupakan alumni universitas terkemuka Timur Tengah.",
    icon: "people",
  },
] as const;

const programs = [
  {
    title: "Kelas Extension (3 Tahun)",
    description:
      "Untuk lulusan SMP/MTs yang ingin melanjutkan ke jenjang SMA dengan program bilingual. Masa belajar 3 tahun setara SMA.",
    items: [
      "Masuk: Lulusan SMP/MTs",
      "Ijazah SMA & Ijazah Pesantren",
      "Bilingual: Arab + Inggris",
    ],
    featured: false,
    icon: "book",
  },
  {
    title: "Kelas Internasional",
    description:
      "Program khusus dengan standar kurikulum internasional. Persiapan intensif untuk melanjutkan studi ke universitas luar negeri.",
    items: [
      "Standar Internasional",
      "Jalur Universitas Timur Tengah",
      "Az-Zaitunah Tunisia & Afrikijyah Sudan",
    ],
    featured: true,
    icon: "globe",
  },
] as const;

const gallery = [
  { file: "BP3A8871.webp", alt: "Kampus DQ3" },
  { file: "BP3A8921.webp", alt: "Santri DQ3" },
  { file: "DJI_0866 (2)-2.webp", alt: "Panorama DQ3" },
  { file: "upacaradq2.webp", alt: "Kegiatan DQ3" },
  { file: "BP3A8852.webp", alt: "Kegiatan Santri" },
  { file: "DJI_0849.webp", alt: "Fasilitas DQ3" },
] as const;

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-dq-green" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function AdvantageIcon({ name }: { name: (typeof advantages)[number]["icon"] }) {
  const paths = {
    globe: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    language: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
    university: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9c0-1.042-.133-2.052-.382-3.016z",
    people: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  };

  return (
    <svg className="h-6 w-6 text-dq-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={paths[name]} />
    </svg>
  );
}

export default function Dq3Page() {
  return (
    <main className="overflow-hidden">
      <section className="dq3-gradient relative flex min-h-[70vh] items-center overflow-hidden pt-16">
        <div className="arabesque-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto w-full dq-container py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
              <span className="text-xs font-semibold uppercase tracking-wide text-dq-gold">Daar el-Qolam 3 · Kampus Dza&apos;Izza</span>
            </div>
            <h1 className="mb-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Pesantren
              <br />
              <span className="italic text-dq-gold">Beyond Pesantren</span>
            </h1>
            <p className="mb-4 text-lg font-medium text-white/80 lg:text-xl">Go Global, Be a Global Player</p>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/70">
              Daar el-Qolam 3 Kampus Dza&apos;Izza mempersiapkan santri menjadi pemimpin global — dengan kurikulum bilingual, kerjasama internasional, dan pondasi Islam yang kokoh.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://psb.daarelqolam3.sch.id/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-dq-gold px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-yellow-600 hover:shadow-card-lg">
                Daftar PSB DQ3 <ArrowIcon />
              </a>
              <a href="https://www.daarelqolam3.sch.id/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white">
                Kunjungi Website DQ3
              </a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-16 hidden w-1/2 lg:top-20 lg:block">
          <Image src="/images/BP3A8871trans.webp" alt="Kampus DQ3 Dza'Izza" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain object-bottom" priority />
        </div>
      </section>

      <section className="bg-dq-ivory py-20 lg:py-28">
        <div className="mx-auto dq-container">
          <SectionHeading eyebrow="Mengapa DQ3" title="Keunggulan" emphasis="Kampus Dza'Izza" description="Program internasional yang memadukan kedalaman ilmu agama dengan kecakapan global." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <article key={advantage.title} style={{ transitionDelay: `${advantages.indexOf(advantage) * 0.1}s` }} className="reveal card-interactive rounded-2xl border border-dq-green/10 bg-white p-6 shadow-card transition-shadow hover:shadow-card-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dq-green-light">
                  <AdvantageIcon name={advantage.icon} />
                </div>
                <h2 className="font-serif text-xl font-semibold text-dq-charcoal">{advantage.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-dq-warm-gray">{advantage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto dq-container">
          <SectionHeading eyebrow="Program" title="Dua Jalur Program" emphasis="di DQ3" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {programs.map((program) => (
              <article key={program.title} style={{ transitionDelay: `${programs.indexOf(program) * 0.1}s` }} className={`reveal card-interactive relative rounded-2xl p-8 ${program.featured ? "overflow-hidden bg-dq-green text-white" : "border border-dq-green/10 bg-dq-ivory"}`}>
                {program.featured && <div className="absolute right-3 top-3 rounded-full bg-dq-gold px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white">Unggulan</div>}
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${program.featured ? "bg-white/20" : "bg-dq-green"}`}>
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={program.icon === "globe" ? "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" : "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"} />
                  </svg>
                </div>
                <h2 className={`font-serif text-2xl font-semibold ${program.featured ? "text-white" : "text-dq-charcoal"}`}>{program.title}</h2>
                <p className={`mt-2 text-sm leading-relaxed ${program.featured ? "text-white/80" : "text-dq-warm-gray"}`}>{program.description}</p>
                <ul className="mt-5 space-y-2">
                  {program.items.map((item) => (
                    <li key={item} className={`flex items-center gap-2 text-sm ${program.featured ? "text-white/80" : "text-dq-warm-gray"}`}><CheckIcon />{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dq-ivory py-20 lg:py-28">
        <div className="mx-auto dq-container">
          <SectionHeading eyebrow="Galeri" title="Kehidupan di" emphasis="Kampus Dza'Izza" />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {gallery.map((image) => (
              <div key={image.file} style={{ transitionDelay: `${gallery.indexOf(image) * 0.1}s` }} className="reveal relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                <Image src={`/images/${image.file}`} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-dq-green py-20 lg:py-28">
        <div className="arabesque-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
            <span className="text-xs font-semibold uppercase tracking-wide text-dq-gold">PSB DQ3 Dibuka</span>
          </div>
          <h2 className="reveal font-serif text-4xl font-semibold text-white lg:text-5xl">Bergabunglah dengan<br /><span className="italic text-dq-gold">Keluarga Besar DQ3</span></h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 lg:text-lg">Jadikan Kampus Dza&apos;Izza sebagai batu loncatan putra-putri Anda menuju panggung dunia, dengan bekal iman, ilmu, dan akhlak.</p>
          <div className="reveal mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://psb.daarelqolam3.sch.id/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-dq-gold px-8 py-4 text-sm font-semibold text-white transition hover:bg-yellow-600 hover:shadow-card-lg">Daftar PSB DQ3 Sekarang <ArrowIcon /></a>
            <a href="https://www.daarelqolam3.sch.id/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:border-white">Website Resmi DQ3 <ExternalIcon /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
