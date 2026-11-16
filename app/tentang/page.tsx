import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  ClipboardDocumentCheckIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "Tentang Daar el-Qolam | Profil, Sejarah, Visi & Misi",
  description:
    "Mengenal Pondok Pesantren Daar el-Qolam sejak 1968, termasuk profil, sejarah, visi misi, dan para pimpinan pesantren.",
};

const pageNav = [
  ["Profil", "#profil"],
  ["Visi & Misi", "#visi"],
  ["Pimpinan", "#pimpinan"],
  ["Sejarah", "#sejarah"],
] as const;

const missions = [
  "Menyelenggarakan pendidikan Islam yang berkualitas dan berstandar tinggi",
  "Membangun karakter santri yang berakhlak mulia dan mandiri",
  "Mengintegrasikan ilmu agama dan ilmu pengetahuan umum secara harmonis",
  "Mempersiapkan santri menghadapi tantangan global dengan bekal keimanan yang kuat",
];

const leaders = [
  {
    initials: "KH",
    name: "KH. Ahmad Rifai Arif",
    role: "Pendiri",
    description:
      "Pendiri Pondok Pesantren Daar el-Qolam pada tahun 1968, visioner yang meletakkan fondasi pendidikan pesantren modern di Indonesia.",
  },
  {
    initials: "KH",
    name: "KH. Adrian Mafatihullah Karim",
    role: "Pimpinan Pesantren",
    description:
      "Memimpin Pondok Pesantren Daar el-Qolam dengan visi memadukan tradisi pesantren dengan kebutuhan pendidikan modern.",
  },
  {
    initials: "DQ",
    name: "Dewan Asatidz",
    role: "Para Pengajar",
    description:
      "Ratusan guru berpengalaman dari dalam dan luar negeri, alumni universitas terkemuka di Indonesia dan Timur Tengah.",
  },
];

const milestones = [
  {
    year: "1968",
    title: "Berdiri dan Berkembang",
    description:
      "KH. Ahmad Rifai Arif mendirikan Pondok Pesantren Daar el-Qolam di Jayanti, Tangerang. Dengan visi pesantren modern yang memadukan ilmu agama dan umum, pesantren mulai menerima santri pertamanya.",
  },
  {
    year: "1980-an",
    title: "Pengembangan Kurikulum MMI",
    description:
      "Kurikulum Madrasatul Muallimin al-Islamiyah (MMI) disempurnakan dan menjadi ciri khas Daar el-Qolam — perpaduan unik antara kurikulum pesantren dan kurikulum nasional.",
  },
  {
    year: "1990-an",
    title: "Ekspansi Multi-Kampus",
    description:
      "Pesantren berkembang pesat dengan dibukanya Daar el-Qolam 2 (Excellent Class) yang berfokus pada pengembangan ilmu pengetahuan dan teknologi, memperluas pilihan program pendidikan.",
  },
  {
    year: "2000-an",
    title: "DQ3 — Kampus Dza'Izza Internasional",
    description:
      "Lahirnya Daar el-Qolam 3 Kampus Dza'Izza dengan program bilingual internasional. Menjalin kerjasama dengan Universitas Az-Zaitunah Tunisia, membuka era baru pendidikan internasional di lingkungan pesantren.",
  },
  {
    year: "Kini",
    title: "58 Tahun Mendidik Generasi Bangsa",
    description:
      "Dengan 4 kampus terintegrasi, lebih dari 5.000 santri aktif, dan 30.000+ alumni yang tersebar di seluruh penjuru Indonesia dan dunia, Daar el-Qolam terus bertumbuh sebagai institusi pendidikan Islam terdepan di Indonesia.",
  },
];

export default function TentangPage() {
  return (
    <main className="overflow-hidden">
      <section className="arabesque-bg bg-dq-green pb-16 pt-32 text-center">
        <div className="mx-auto dq-container max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
            <span className="text-xs font-semibold uppercase tracking-wide text-dq-gold">
              Tentang Kami
            </span>
          </div>
          <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Mengenal <span className="italic text-dq-gold">Daar el-Qolam</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            Pesantren modern yang telah mendidik lebih dari 30.000 alumni selama
            58 tahun — mengintegrasikan ilmu agama dan ilmu pengetahuan umum.
          </p>
        </div>
      </section>

      <div className="sticky top-0 z-30 border-b border-dq-green/10 bg-white shadow-sm">
        <div className="mx-auto dq-container">
          <nav
            className="flex gap-1 overflow-x-auto py-3"
            aria-label="Navigasi halaman tentang"
          >
            {pageNav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-dq-charcoal hover:bg-dq-green-light hover:text-dq-green"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <section id="profil" className="scroll-mt-16 bg-dq-ivory py-20 lg:py-28">
        <div className="mx-auto dq-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal">
              <span className="gold-line text-xs font-semibold uppercase tracking-widest text-dq-gold">
                Profil Pesantren
              </span>
              <h2 className="mb-6 mt-4 font-serif text-4xl font-semibold text-dq-charcoal lg:text-5xl">
                Pondok Pesantren
                <br />
                <span className="italic text-dq-green">Daar el-Qolam</span>
              </h2>
              <div>
                <p className="mb-5 leading-relaxed text-dq-warm-gray">
                  Pondok Pesantren Daar el-Qolam adalah salah satu pesantren
                  modern terkemuka di Indonesia, berdiri sejak 1968 di Jayanti,
                  Kabupaten Tangerang, Banten. Didirikan oleh KH. Ahmad Rifai
                  Arif, pesantren ini telah berkembang menjadi empat kampus yang
                  terintegrasi.
                </p>
                <p className="mb-8 leading-relaxed text-dq-warm-gray">
                  Mengusung kurikulum Madrasatul Muallimin al-Islamiyah (MMI),
                  Daar el-Qolam memadukan pendidikan agama Islam yang mendalam
                  dengan kurikulum nasional dan internasional, menghasilkan
                  lulusan yang kompeten dalam ilmu agama maupun ilmu pengetahuan
                  umum.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1968", label: "Tahun Berdiri" },
                  { value: 4, label: "Kampus Terintegrasi" },
                  { value: 5000, suffix: "+", label: "Santri Aktif" },
                  { value: 30000, suffix: "+", label: "Alumni" },
                ].map((stat) => (
                  <div key={stat.label} className="stat-box text-center">
                    <p className="font-serif text-3xl font-bold text-dq-green sm:text-4xl">
                      {typeof stat.value === "number" ? (
                        <StatCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          className="tabular-nums whitespace-nowrap"
                        />
                      ) : (
                        stat.value
                      )}
                    </p>
                    <p className="mt-1 text-xs text-dq-warm-gray">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card-lg">
                <Image
                  src="/images/DJI_0866 (2)-2.webp"
                  alt="Panorama Pesantren Daar el-Qolam"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-card">
                  <Image
                    src="/images/BP3A8852.webp"
                    alt="Kegiatan Santri"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-card">
                  <Image
                    src="/images/DJI_0849.webp"
                    alt="Fasilitas Daar el-Qolam"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="visi"
        className="scroll-mt-16 arabesque-bg bg-dq-green py-20 lg:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Landasan" title="Visi & Misi" light />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="reveal rounded-2xl border border-white/20 bg-white/10 p-8">
              <h3 className="flex items-center gap-3 font-serif text-3xl font-semibold text-white">
                <EyeIcon
                  className="h-5 w-5 shrink-0 text-dq-gold"
                  aria-hidden="true"
                  focusable="false"
                />
                Visi
              </h3>
              <p className="mt-6 text-base leading-relaxed text-white/90">
                &quot;Terwujudnya lembaga pendidikan Islam yang unggul dalam
                menghasilkan generasi yang beriman, berilmu, berakhlak mulia,
                dan mampu berkontribusi bagi kemajuan umat dan bangsa.&quot;
              </p>
            </div>
            <div
              className="reveal rounded-2xl border border-white/20 bg-white/10 p-8"
              style={{ transitionDelay: "0.15s" }}
            >
              <h3 className="flex items-center gap-3 font-serif text-3xl font-semibold text-white">
                <ClipboardDocumentCheckIcon
                  className="h-5 w-5 shrink-0 text-dq-gold"
                  aria-hidden="true"
                  focusable="false"
                />
                Misi
              </h3>
              <ul className="mt-6 space-y-3">
                {missions.map((mission) => (
                  <li
                    key={mission}
                    className="flex items-start gap-2 text-sm text-white/90"
                  >
                    <span
                      className="mt-1 inline-flex shrink-0 items-center text-dq-gold"
                      aria-hidden="true"
                    >
                      <CheckIcon
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                        focusable="false"
                      />
                    </span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="reveal mt-8 rounded-2xl border border-white/20 bg-white/10 p-8 text-center">
            <p
              className="font-arabic text-3xl leading-relaxed text-white lg:text-4xl"
              dir="rtl"
            >
              وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ
            </p>
            <p className="mt-3 text-sm italic text-white/80">
              &quot;Dan Aku tidak menciptakan jin dan manusia melainkan supaya
              mereka beribadah kepada-Ku.&quot; — QS. Adz-Dzariyat: 56
            </p>
            <p className="mt-4 font-serif text-lg text-dq-gold">
              Mendidik dengan Hati · Membentuk dengan Ilmu · Mengukir dengan
              Akhlak
            </p>
          </div>
        </div>
      </section>

      <section
        id="pimpinan"
        className="scroll-mt-16 bg-dq-ivory py-20 lg:py-28"
      >
        <div className="mx-auto dq-container">
          <div className="reveal mb-12 text-center">
            <span className="gold-line text-xs font-semibold uppercase tracking-widest text-dq-gold">
              Kepemimpinan
            </span>
            <h2 className="mb-4 mt-3 font-serif text-4xl font-semibold text-dq-charcoal lg:text-5xl">
              Pimpinan <span className="italic text-dq-green">Pesantren</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-dq-warm-gray lg:text-lg">
              Dipimpin oleh ulama dan pendidik berpengalaman yang berkomitmen
              pada kemajuan pendidikan Islam.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, index) => (
              <article
                key={leader.name}
                className="reveal rounded-2xl border border-dq-green/10 bg-white p-6 text-center shadow-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-dq-green">
                  <span className="font-serif text-xl font-bold text-white">
                    {leader.initials}
                  </span>
                </div>
                <h3 className="mb-1 font-serif text-lg font-semibold text-dq-charcoal">
                  {leader.name}
                </h3>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-dq-gold">
                  {leader.role}
                </p>
                <p className="text-sm text-dq-warm-gray">
                  {leader.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sejarah" className="scroll-mt-16 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Perjalanan"
            title="Sejarah"
            emphasis="Singkat"
          />
          <div className="relative mt-12">
            <div className="absolute bottom-0 left-[7px] top-0 hidden w-0.5 bg-dq-green/20 sm:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <article
                  key={milestone.year}
                  className="reveal flex gap-6"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`mt-1 hidden h-4 w-4 shrink-0 rounded-full ring-4 sm:block ${index === milestones.length - 1 ? "bg-dq-gold ring-dq-gold-light" : "bg-dq-green ring-dq-green-light"}`}
                  />
                  <div
                    className={`flex-1 ${index < milestones.length - 1 ? "border-b border-dq-green/10 pb-8" : ""}`}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-dq-gold">
                      {milestone.year}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-dq-charcoal">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-dq-warm-gray">
                      {milestone.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
