import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  BoltIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon as HeroCheckIcon,
  FlagIcon,
  HeartIcon,
  LanguageIcon,
  MoonIcon,
  MusicalNoteIcon,
  PencilSquareIcon,
  SparklesIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Jelajahi Daar el-Qolam | Fasilitas dan Kehidupan Santri",
  description:
    "Jelajahi fasilitas modern, kehidupan Islami, asrama, dan ekstrakurikuler di Pondok Pesantren Daar el-Qolam.",
};

const facilities = [
  {
    title: "Masjid Jami'",
    description:
      "Masjid utama kapasitas ribuan santri untuk shalat berjamaah dan kegiatan keagamaan.",
    image: "/images/DJI_0849.webp",
    alt: "Masjid Daar el-Qolam",
  },
  {
    title: "Laboratorium Sains",
    description:
      "Lab fisika, kimia, dan biologi yang lengkap dengan peralatan modern untuk praktikum.",
    image: "/images/BP3A8852.webp",
    alt: "Laboratorium sains",
  },
  {
    title: "Perpustakaan",
    description:
      "Koleksi ribuan buku referensi, kitab kuning, dan literatur nasional maupun internasional.",
    image: "/images/DJI_0866 (2)-2.webp",
    alt: "Perpustakaan Daar el-Qolam",
  },
  {
    title: "Lapangan Olahraga",
    description:
      "Lapangan sepak bola, bola voli, basket, dan badminton untuk aktivitas fisik santri.",
    image: "/images/upacaradq2.webp",
    alt: "Lapangan olahraga santri",
  },
  {
    title: "Ruang Kelas Modern",
    description:
      "Ruang kelas ber-AC dengan fasilitas multimedia dan smart board untuk pembelajaran interaktif.",
    image: "/images/BP3A8921.webp",
    alt: "Ruang kelas modern",
  },
  {
    title: "Lab Komputer & IT",
    description:
      "Laboratorium komputer dengan akses internet terbatas dan terkontrol untuk keperluan akademik.",
    image: "/images/BP3A8871.webp",
    alt: "Laboratorium komputer",
  },
];

const islamicLife = [
  {
    title: "Shalat Berjamaah 5 Waktu",
    description:
      "Seluruh santri shalat berjamaah di masjid setiap waktu shalat, membentuk disiplin dan kebersamaan.",
    Icon: MoonIcon,
  },
  {
    title: "Halaqoh Qur'an Harian",
    description:
      "Sesi tilawah dan tahfidz Al-Qur'an setiap pagi bersama musyrif dan musyrifah yang berpengalaman.",
    Icon: BookOpenIcon,
  },
  {
    title: "Pengajian Rutin & Kajian Islam",
    description:
      "Kajian kitab, ceramah, dan diskusi keislaman yang memperdalam pemahaman agama santri.",
    Icon: AcademicCapIcon,
  },
  {
    title: "Lingkungan Berbahasa Arab & Inggris",
    description:
      "Percakapan sehari-hari dalam bahasa Arab dan Inggris diwajibkan untuk mengakselerasi penguasaan bahasa.",
    Icon: LanguageIcon,
  },
];

const extracurriculars = [
  ["Pramuka", "Kepanduan & kepemimpinan", FlagIcon],
  ["Nasyid & Marawis", "Musik Islami", MusicalNoteIcon],
  ["Robotika", "Teknologi & coding", BoltIcon],
  ["Jurnalistik", "Tulis & media", PencilSquareIcon],
  ["PMR / Kesehatan", "Palang Merah Remaja", HeartIcon],
  ["Sepak Bola", "Olahraga & tim", TrophyIcon],
  ["Debat Bahasa", "Arab & Inggris", ChatBubbleLeftRightIcon],
  ["Teater & Drama", "Seni pertunjukan", SparklesIcon],
] as const;

const dormitoryBenefits = [
  ["Kamar Bersih & Nyaman", "Kapasitas terbatas per kamar"],
  ["Makan 3x Sehari", "Gizi seimbang & halal"],
  ["Layanan Kesehatan", "Klinik & tenaga medis tersedia"],
  ["Laundry Terjadwal", "Tercakup dalam iuran bulanan"],
  ["Bimbingan Belajar Malam", "Musyrif mendampingi belajar"],
  ["Kunjungan Jum'at-Ahad", "Wali santri bisa menjenguk"],
] as const;

const pageSections = [
  ["fasilitas", "Fasilitas"],
  ["kehidupan", "Kehidupan Islami"],
  ["ekskul", "Ekstrakurikuler"],
  ["asrama", "Kehidupan Asrama"],
] as const;

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-dq-green-light text-sm font-bold text-dq-green"
    >
      <HeroCheckIcon
        className="h-4 w-4 shrink-0"
        aria-hidden="true"
        focusable="false"
      />
    </span>
  );
}

export default function ExplorePage() {
  return (
    <main className="overflow-hidden bg-dq-ivory">
      <section className="arabesque-bg bg-dq-green pb-16 pt-32">
        <div className="mx-auto dq-container max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
            <span className="text-xs font-semibold uppercase tracking-wide text-dq-gold">
              Jelajahi
            </span>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Kehidupan di
            <br />
            <span className="italic text-dq-gold">Daar el-Qolam</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/80 lg:text-lg">
            Fasilitas modern, kehidupan Islami yang kaya, asrama yang nyaman,
            dan ratusan kegiatan ekstrakurikuler untuk tumbuh kembang santri
            secara holistik.
          </p>
        </div>
      </section>

      <nav
        className="sticky top-16 z-30 border-b border-dq-green/10 bg-white shadow-sm lg:top-20"
        aria-label="Bagian halaman Jelajahi"
      >
        <div className="mx-auto dq-container overflow-x-auto">
          <div className="flex min-w-max gap-1 py-3">
            {pageSections.map(([id, label]) => (
              <Link
                key={id}
                href={`#${id}`}
                className="rounded-lg px-4 py-2 text-sm font-medium text-dq-charcoal hover:bg-dq-green-light hover:text-dq-green"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="fasilitas"
        className="scroll-mt-28 bg-dq-ivory py-20 lg:py-28"
      >
        <div className="mx-auto dq-container">
          <div className="reveal mb-12 text-center">
            <span className="gold-line text-xs font-semibold uppercase tracking-widest text-dq-gold">
              Fasilitas
            </span>
            <h2 className="mb-4 mt-3 font-serif text-4xl font-semibold text-dq-charcoal lg:text-5xl">
              Fasilitas{" "}
              <span className="italic text-dq-green">Modern &amp; Lengkap</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-dq-warm-gray lg:text-lg">
              Dilengkapi dengan sarana prasarana modern untuk mendukung proses
              belajar dan kehidupan santri.
            </p>
          </div>
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <article
                key={facility.title}
                style={{
                  transitionDelay: `${facilities.indexOf(facility) * 0.1}s`,
                }}
                className="reveal card-interactive group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="mb-2 font-serif text-lg font-semibold text-dq-charcoal">
                    {facility.title}
                  </h2>
                  <p className="text-sm text-dq-warm-gray">
                    {facility.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kehidupan" className="scroll-mt-28 bg-white py-20 lg:py-28">
        <div className="mx-auto dq-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal">
              <span className="gold-line text-xs font-semibold uppercase tracking-widest text-dq-gold">
                Kehidupan Islami
              </span>
              <h2 className="mb-6 mt-4 font-serif text-4xl font-semibold text-dq-charcoal lg:text-5xl">
                Rutinitas Harian yang
                <br />
                <span className="italic text-dq-green">Penuh Makna</span>
              </h2>
              <p className="mb-8 leading-relaxed text-dq-warm-gray">
                Setiap hari di Daar el-Qolam dirancang untuk membangun kebiasaan
                Islami yang kuat. Santri hidup dalam lingkungan yang mendukung
                pembentukan karakter dan keimanan.
              </p>
              <div className="space-y-4">
                {islamicLife.map((item) => (
                  <article
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl bg-dq-ivory p-4"
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dq-green-light text-dq-green"
                      aria-hidden="true"
                    >
                      <item.Icon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                        focusable="false"
                      />
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold text-dq-charcoal">
                        {item.title}
                      </h2>
                      <p className="mt-0.5 text-xs text-dq-warm-gray">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div
              className="reveal grid grid-cols-2 gap-4"
              aria-label="Galeri kehidupan santri"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="/images/BP3A8921.webp"
                  alt="Kehidupan Islami santri"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-card">
                  <Image
                    src="/images/upacaradq2.webp"
                    alt="Upacara santri"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-card">
                  <Image
                    src="/images/DJI_0849.webp"
                    alt="Masjid Daar el-Qolam"
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

      <section id="ekskul" className="scroll-mt-28 bg-dq-ivory py-20 lg:py-28">
        <div className="mx-auto dq-container">
          <div className="reveal mb-12 text-center">
            <span className="gold-line text-xs font-semibold uppercase tracking-widest text-dq-gold">
              Ekstra Kurikuler
            </span>
            <h2 className="mb-4 mt-3 font-serif text-4xl font-semibold text-dq-charcoal lg:text-5xl">
              Kembangkan Bakat &amp;{" "}
              <span className="italic text-dq-green">Minat Santri</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-dq-warm-gray lg:text-lg">
              Lebih dari 30 kegiatan ekstrakurikuler tersedia untuk
              mengembangkan potensi santri secara menyeluruh.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {extracurriculars.map(([title, description, Icon], index) => (
              <article
                key={title}
                className="reveal card-interactive rounded-xl border border-dq-green/10 bg-white p-5 text-center shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-lg"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <span
                  className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-dq-green-light text-dq-green"
                  aria-hidden="true"
                >
                  <Icon
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                    focusable="false"
                  />
                </span>
                <h2 className="text-sm font-semibold text-dq-charcoal">
                  {title}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-dq-warm-gray">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="asrama" className="scroll-mt-28 bg-white py-20 lg:py-28">
        <div className="mx-auto dq-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card-lg">
              <Image
                src="/images/BP3A8852.webp"
                alt="Asrama santri"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="reveal">
              <span className="gold-line text-xs font-semibold uppercase tracking-widest text-dq-gold">
                Kehidupan Asrama
              </span>
              <h2 className="mb-6 mt-4 font-serif text-4xl font-semibold text-dq-charcoal lg:text-5xl">
                Rumah Kedua yang
                <br />
                <span className="italic text-dq-green">Nyaman &amp; Aman</span>
              </h2>
              <p className="mb-8 leading-relaxed text-dq-warm-gray">
                Asrama Daar el-Qolam dirancang sebagai lingkungan yang mendukung
                pembentukan karakter mandiri, bertanggung jawab, dan berjiwa
                sosial tinggi. Dibimbing oleh musyrif dan musyrifah yang
                berpengalaman 24 jam.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {dormitoryBenefits.map(([title, description]) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckIcon />
                    <div>
                      <h2 className="text-sm font-semibold text-dq-charcoal">
                        {title}
                      </h2>
                      <p className="mt-0.5 text-xs leading-relaxed text-dq-warm-gray">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
