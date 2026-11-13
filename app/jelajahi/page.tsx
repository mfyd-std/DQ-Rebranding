import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Jelajahi Daar el-Qolam | Fasilitas dan Kehidupan Santri",
  description:
    "Jelajahi fasilitas modern, kehidupan Islami, asrama, dan ekstrakurikuler di Pondok Pesantren Daar el-Qolam.",
};

const registrationUrl = "https://daftar.daarelqolam.ac.id/";
const dq3RegistrationUrl = "https://psb.daarelqolam3.sch.id/";

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
    mark: "01",
  },
  {
    title: "Halaqoh Qur'an Harian",
    description:
      "Sesi tilawah dan tahfidz Al-Qur'an setiap pagi bersama musyrif dan musyrifah yang berpengalaman.",
    mark: "02",
  },
  {
    title: "Pengajian Rutin & Kajian Islam",
    description:
      "Kajian kitab, ceramah, dan diskusi keislaman yang memperdalam pemahaman agama santri.",
    mark: "03",
  },
  {
    title: "Lingkungan Berbahasa Arab & Inggris",
    description:
      "Percakapan sehari-hari dalam bahasa Arab dan Inggris diwajibkan untuk mengakselerasi penguasaan bahasa.",
    mark: "04",
  },
];

const extracurriculars = [
  ["Pramuka", "Kepanduan & kepemimpinan"],
  ["Nasyid & Marawis", "Musik Islami"],
  ["Robotika", "Teknologi & coding"],
  ["Jurnalistik", "Tulis & media"],
  ["PMR / Kesehatan", "Palang Merah Remaja"],
  ["Sepak Bola", "Olahraga & tim"],
  ["Debat Bahasa", "Arab & Inggris"],
  ["Teater & Drama", "Seni pertunjukan"],
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
      ✓
    </span>
  );
}

export default function ExplorePage() {
  return (
    <main className="overflow-hidden bg-dq-ivory">
      <header className="navbar-glass fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Daar el-Qolam beranda">
            <Image
              src="/images/logo-daar-el-qolam.svg"
              alt="Logo Daar el-Qolam"
              width={205}
              height={48}
              priority
              className="h-9 w-auto lg:h-11"
            />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            <Link href="/" className="px-3 py-2 text-sm font-medium hover:text-dq-green">
              Beranda
            </Link>
            <Link href="/#tentang" className="px-3 py-2 text-sm font-medium hover:text-dq-green">
              Tentang DQ
            </Link>
            <Link href="/#program" className="px-3 py-2 text-sm font-medium hover:text-dq-green">
              Program
            </Link>
            <span className="px-3 py-2 text-sm font-semibold text-dq-green" aria-current="page">
              Jelajahi
            </span>
            <Link href="/#berita" className="px-3 py-2 text-sm font-medium hover:text-dq-green">
              Berita
            </Link>
            <Link href="/#kontak" className="px-3 py-2 text-sm font-medium hover:text-dq-green">
              Kontak
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-full border border-dq-gold/30 bg-dq-gold-light px-3 py-1 text-xs font-semibold text-dq-gold md:inline-flex">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
              Pendaftaran Dibuka
            </span>
            <a
              href={registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-dq-green px-3 py-2 text-xs font-semibold text-white hover:bg-dq-green-dark lg:px-4 lg:text-sm"
            >
              <span className="lg:hidden">Ayo Mondok!</span>
              <span className="hidden lg:inline">Daftar Sekarang</span>
            </a>
          </div>
        </div>
      </header>

      <section className="arabesque-bg bg-dq-green px-6 pb-16 pt-32 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
            <span className="text-xs font-semibold uppercase tracking-wide text-dq-gold">Jelajahi</span>
          </div>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Kehidupan di
            <br />
            <span className="italic text-dq-gold">Daar el-Qolam</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            Fasilitas modern, kehidupan Islami yang kaya, asrama yang nyaman, dan ratusan kegiatan ekstrakurikuler untuk tumbuh kembang santri secara holistik.
          </p>
        </div>
      </section>

      <nav className="sticky top-16 z-30 border-b border-dq-green/10 bg-white shadow-sm lg:top-20" aria-label="Bagian halaman Jelajahi">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 lg:px-8">
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

      <section id="fasilitas" className="scroll-mt-28 bg-dq-ivory px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Fasilitas"
            title="Fasilitas"
            emphasis="Modern & Lengkap"
            description="Dilengkapi dengan sarana prasarana modern untuk mendukung proses belajar dan kehidupan santri."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <article key={facility.title} className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-lg">
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
                  <h2 className="font-serif text-2xl font-semibold text-dq-charcoal">{facility.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-dq-warm-gray">{facility.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kehidupan" className="scroll-mt-28 bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Kehidupan Islami"
              title="Rutinitas Harian yang"
              emphasis="Penuh Makna"
              description="Setiap hari di Daar el-Qolam dirancang untuk membangun kebiasaan Islami yang kuat. Santri hidup dalam lingkungan yang mendukung pembentukan karakter dan keimanan."
            />
            <div className="mt-8 space-y-4">
              {islamicLife.map((item) => (
                <article key={item.title} className="flex items-start gap-4 rounded-xl bg-dq-ivory p-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dq-green-light font-serif text-xl font-semibold text-dq-green" aria-hidden="true">
                    {item.mark}
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-dq-charcoal">{item.title}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-dq-warm-gray">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4" aria-label="Galeri kehidupan santri">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
              <Image src="/images/BP3A8921.webp" alt="Kehidupan Islami santri" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-card">
                <Image src="/images/upacaradq2.webp" alt="Upacara santri" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-card">
                <Image src="/images/DJI_0849.webp" alt="Masjid Daar el-Qolam" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ekskul" className="scroll-mt-28 bg-dq-ivory px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Ekstra Kurikuler"
            title="Kembangkan Bakat &"
            emphasis="Minat Santri"
            description="Lebih dari 30 kegiatan ekstrakurikuler tersedia untuk mengembangkan potensi santri secara menyeluruh."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {extracurriculars.map(([title, description]) => (
              <article key={title} className="rounded-xl border border-dq-green/10 bg-white p-4 text-center shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-lg sm:p-5">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-dq-green-light font-serif text-xl font-semibold text-dq-green" aria-hidden="true">
                  +
                </span>
                <h2 className="text-sm font-semibold text-dq-charcoal">{title}</h2>
                <p className="mt-1 text-xs leading-relaxed text-dq-warm-gray">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="asrama" className="scroll-mt-28 bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card-lg">
            <Image src="/images/BP3A8852.webp" alt="Asrama santri" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Kehidupan Asrama"
              title="Rumah Kedua yang"
              emphasis="Nyaman & Aman"
              description="Asrama Daar el-Qolam dirancang sebagai lingkungan yang mendukung pembentukan karakter mandiri, bertanggung jawab, dan berjiwa sosial tinggi. Dibimbing oleh musyrif dan musyrifah yang berpengalaman 24 jam."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {dormitoryBenefits.map(([title, description]) => (
                <div key={title} className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <h2 className="text-sm font-semibold text-dq-charcoal">{title}</h2>
                    <p className="mt-0.5 text-xs leading-relaxed text-dq-warm-gray">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dq-green-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-7 lg:gap-10">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="inline-flex">
                <Image src="/images/logo-daar-el-qolam-white.svg" alt="Logo Daar el-Qolam" width={220} height={54} className="h-12 w-auto" />
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">Mendidik generasi berilmu dan berakhlak sejak 1968 di Jayanti, Kabupaten Tangerang, Banten.</p>
              <p className="mt-6 text-sm font-bold">Media sosial</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
                <a href="https://www.youtube.com/@ElQolam/videos" target="_blank" rel="noreferrer">YouTube @ElQolam</a>
                <a href="https://www.instagram.com/daarelqolam/" target="_blank" rel="noreferrer">Instagram @daarelqolam</a>
                <a href="https://www.instagram.com/dzaizza_official/" target="_blank" rel="noreferrer">Instagram @dzaizza_official</a>
                <a href="https://www.instagram.com/darqomusic/" target="_blank" rel="noreferrer">Instagram @darqomusic</a>
                <a href="https://www.tiktok.com/@ponpesdaarelqolam" target="_blank" rel="noreferrer">TikTok @ponpesdaarelqolam</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">Program</p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/70">
                <li><Link href="/#program-reguler" className="hover:text-white">Program Reguler</Link></li>
                <li><Link href="/#program-excellent" className="hover:text-white">Excellent Class</Link></li>
                <li><Link href="/#dq3" className="hover:text-white">Kelas Internasional</Link></li>
                <li><Link href="/#program-dirasah" className="hover:text-white">Dirasah Islamiyyah</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">Jelajahi</p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/70">
                {pageSections.map(([id, label]) => <li key={id}><Link href={`#${id}`} className="hover:text-white">{label}</Link></li>)}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">Navigasi</p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/70">
                <li><Link href="/#tentang" className="hover:text-white">Tentang DQ</Link></li>
                <li><Link href="/#program" className="hover:text-white">Program</Link></li>
                <li><Link href="/blog" className="hover:text-white">Berita</Link></li>
                <li><Link href="/#kontak" className="hover:text-white">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">Kontak</p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/70">
                <li>Jayanti, Kab. Tangerang</li>
                <li><a href="tel:+622159576882" className="hover:text-white">+62 21 5957 6882</a></li>
                <li><a href="https://wa.me/6281319789000" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></li>
                <li><a href="mailto:info@daarelqolam.ac.id" className="hover:text-white">info@daarelqolam.ac.id</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">Pendaftaran</p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/70">
                <li><a href={registrationUrl} target="_blank" rel="noreferrer" className="hover:text-white">PSB Daar el-Qolam</a></li>
                <li><a href={dq3RegistrationUrl} target="_blank" rel="noreferrer" className="hover:text-white">PSB DQ3</a></li>
                <li><a href={registrationUrl} target="_blank" rel="noreferrer" className="hover:text-white">Info e-brosur (laman PSB)</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-sm text-white/40">© 2026 Pondok Pesantren Daar el-Qolam. Hak cipta dilindungi.</p>
            <div className="flex gap-4 text-xs text-white/40">
              <Link href="/" className="hover:text-white/70">Beranda</Link>
              <Link href="/blog" className="hover:text-white/70">Berita</Link>
              <Link href="#fasilitas" className="hover:text-white/70">Kembali ke atas</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
