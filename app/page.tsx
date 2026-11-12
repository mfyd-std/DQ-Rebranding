"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

const registrationUrl = "https://daftar.daarelqolam.ac.id/";
const whatsappUrl = "https://wa.me/6281319789000";

const programs = [
  { campus: "Daar el-Qolam Pusat", title: "Program Reguler", description: "Program terpadu MTs dan MA. Ilmu agama, sains, serta bahasa Arab dan Inggris dalam satu jalur.", tags: ["6 Tahun", "MTs + MA", "Asrama"], href: "#program-reguler" },
  { campus: "Daar el-Qolam 2", title: "Excellent Class", description: "Program SMP dan SMA unggulan dengan penekanan pada ilmu pengetahuan umum dan teknologi.", tags: ["SMP / SMA", "Unggulan", "Asrama"], href: "#program-excellent" },
  { campus: "DQ 3 · Kampus Dza'Izza", title: "Kelas Internasional", description: "Kelas Extension 3 tahun dan Kelas Internasional dengan bahasa Arab dan Inggris sebagai bahasa pengantar.", tags: ["3 Tahun", "Bilingual", "Internasional"], href: "#dq3", featured: true },
  { campus: "Daar el-Qolam 4", title: "Dirasah Islamiyyah", description: "Pendalaman ilmu-ilmu Islam melalui kitab kuning, tahfidz, dan fiqih dalam lingkungan pendidikan terarah.", tags: ["MTs / MA", "Kitab Kuning", "Tahfidz"], href: "#program-dirasah" },
];

const exploreItems = [
  { title: "Fasilitas", description: "Masjid, laboratorium, perpustakaan, lapangan olahraga, dan lainnya.", image: "/images/DJI_0849.webp", href: "#jelajahi-fasilitas" },
  { title: "Kehidupan Islami", description: "Shalat berjamaah, halaqoh Quran, kajian, dan disiplin ibadah harian.", image: "/images/BP3A8921.webp", href: "#jelajahi-kehidupan" },
  { title: "Ekstrakurikuler", description: "Pramuka, olahraga, seni, jurnalistik, robotika, dan banyak lagi.", image: "/images/upacaradq2.webp", href: "#jelajahi-ekskul" },
  { title: "Kehidupan Asrama", description: "Lingkungan asrama yang nyaman, aman, dan membentuk kemandirian.", image: "/images/BP3A8852.webp", href: "#jelajahi-asrama" },
];

const heroImages = [
  { file: "BP3A8852.webp", alt: "Kegiatan santri Daar el-Qolam", className: "col-span-3 row-span-2" },
  { file: "DJI_0849.webp", alt: "Fasilitas Daar el-Qolam", className: "col-span-2" },
  { file: "upacaradq2.webp", alt: "Upacara santri", className: "col-span-2" },
  { file: "DJI_0866 (2)-2.webp", alt: "Panorama pesantren", className: "col-span-5" },
];
const gallery = ["7S1A0164.webp", "BP3A0743.webp", "7S1A0198.webp", "BP3A0909.webp", "7S1A0206.webp", "BP3A0993.webp", "BP3A1185.webp", "BP3A1224.webp", "DJI_0866 (2).webp"];
const news = [
  { slug: "kolaborasi-literasi-dzaizza", category: "Akademik", date: "April 2026", title: "Tingkatkan Kualitas Perpustakaan, Dza'Izza Perkuat Kolaborasi Literasi", excerpt: "Program literasi baru untuk meningkatkan budaya membaca dan riset di kalangan santri DQ3.", image: "/images/BP3A1179.webp" },
  { slug: "seleksi-paskibraka-tangerang", category: "Prestasi", date: "Maret 2026", title: "Santri DQ3 Mengikuti Seleksi Paskibraka Kabupaten Tangerang", excerpt: "Santri Daar el-Qolam 3 berhasil lolos seleksi tingkat kecamatan dan mewakili di tingkat kabupaten.", image: "/images/BP3A1242.webp" },
  { slug: "seleksi-nasional-opsi-2026", category: "Prestasi", date: "Februari 2026", title: "Dua Santriwati Tembus Seleksi Nasional OPSI 2026", excerpt: "Pencapaian membanggakan dari santriwati DQ3 dalam Olimpiade Penelitian Siswa Indonesia.", image: "/images/BP3A1252.webp" },
  { slug: "kegiatan-apel-santri", category: "Kegiatan", date: "Januari 2026", title: "Kegiatan Apel Santri Menguatkan Disiplin dan Kebersamaan", excerpt: "Agenda rutin pesantren membangun karakter disiplin dan rasa tanggung jawab santri.", image: "/images/BP3A1185.webp" },
];
const menuGroups = [
  { label: "Tentang DQ", href: "#tentang", items: [["Profil Pesantren", "#tentang"], ["Visi & Misi", "#tentang"], ["Sejarah", "#tentang"]] },
  { label: "Program", href: "#program", items: [["Program Reguler (DQ Pusat)", "#program-reguler"], ["Excellent Class (DQ 2)", "#program-excellent"], ["International (DQ 3)", "#dq3"], ["Dirasah Islamiyyah (DQ 4)", "#program-dirasah"]] },
  { label: "Jelajahi", href: "#jelajahi", items: [["Fasilitas", "#jelajahi-fasilitas"], ["Kehidupan Islami", "#jelajahi-kehidupan"], ["Ekstrakurikuler", "#jelajahi-ekskul"], ["Kehidupan Asrama", "#jelajahi-asrama"]] },
];
const filters = ["Semua", "Akademik", "Prestasi", "Kegiatan"] as const;
type NewsFilter = (typeof filters)[number];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headline, setHeadline] = useState("Berilmu");
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState<NewsFilter>("Semua");
  const [lightbox, setLightbox] = useState<{ file: string; alt: string } | null>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("dq-theme");
    if (storedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("dq-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const words = ["Berilmu", "Berakhlak", "Berbadan Sehat", "Perubahan"];
    let index = 0;
    const timer = window.setInterval(() => {
      index = (index + 1) % words.length;
      setHeadline(words[index]);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  const closeMenu = () => setMenuOpen(false);
  const filteredNews = activeFilter === "Semua" ? news : news.filter((item) => item.category === activeFilter);

  return (
    <main className="overflow-hidden">
      <header className="navbar-glass fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Daar el-Qolam beranda">
            <Image src="/images/logo-daar-el-qolam.svg" alt="Logo Daar el-Qolam" width={205} height={48} priority className="h-9 w-auto lg:h-11" />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {menuGroups.map((group) => (
              <div key={group.label} className="group relative">
                <Link href={group.href} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dq-charcoal hover:text-dq-green">{group.label}<span aria-hidden="true">⌄</span></Link>
                <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-xl border border-dq-green/10 bg-white py-2 opacity-0 shadow-card-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {group.items.map(([label, href]) => <Link key={label} href={href} className="block px-4 py-2 text-sm text-dq-charcoal hover:bg-dq-green-light hover:text-dq-green">{label}</Link>)}
                </div>
              </div>
            ))}
            <Link href="#berita" className="px-3 py-2 text-sm font-medium hover:text-dq-green">Berita</Link>
            <Link href="#kontak" className="px-3 py-2 text-sm font-medium hover:text-dq-green">Kontak</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" className="theme-toggle" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"} aria-pressed={darkMode}>
              <span className="icon-moon" aria-hidden="true">☾</span><span className="icon-sun" aria-hidden="true">☀</span>
            </button>
            <span className="hidden items-center gap-1.5 rounded-full border border-dq-gold/30 bg-dq-gold-light px-3 py-1 text-xs font-semibold text-dq-gold md:inline-flex"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />Pendaftaran Dibuka</span>
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="hidden rounded-lg bg-dq-green px-4 py-2 text-sm font-semibold text-white lg:inline-flex">Daftar Sekarang</a>
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="rounded-md bg-dq-green px-3 py-1.5 text-xs font-semibold text-white lg:hidden">Ayo Mondok!</a>
            <button type="button" onClick={() => setMenuOpen(true)} className="rounded-md p-2 text-xl lg:hidden" aria-label="Buka menu" aria-expanded={menuOpen}>☰</button>
          </div>
        </div>
      </header>

      {menuOpen && <div className="mobile-menu open fixed inset-0 z-[60] bg-dq-ivory/95 backdrop-blur-xl lg:hidden"><div className="flex h-full flex-col"><div className="flex items-center justify-between border-b border-dq-green/10 px-5 py-4"><Link href="#hero" onClick={closeMenu} aria-label="Kembali ke beranda"><Image src="/images/logo-daar-el-qolam.svg" alt="Logo Daar el-Qolam" width={180} height={42} className="h-9 w-auto" /></Link><button type="button" onClick={closeMenu} className="p-2 text-2xl" aria-label="Tutup menu">×</button></div><nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Menu mobile"><Link href="#hero" onClick={closeMenu} className="mm-link active">Beranda</Link>{menuGroups.map((group) => <div key={group.label}><p className="mm-section-title">{group.label}</p><Link href={group.href} onClick={closeMenu} className="mm-link">{group.label}</Link>{group.items.map(([label, href]) => <Link key={label} href={href} onClick={closeMenu} className="mm-sub">{label}</Link>)}</div>)}<p className="mm-section-title">Lainnya</p><Link href="#berita" onClick={closeMenu} className="mm-link">Berita &amp; Kegiatan</Link><Link href="#faq" onClick={closeMenu} className="mm-link">FAQ</Link><Link href="#kontak" onClick={closeMenu} className="mm-link">Kontak</Link></nav><div className="border-t border-dq-green/10 px-5 py-4"><a href={registrationUrl} target="_blank" rel="noreferrer" className="block rounded-lg bg-dq-green px-4 py-3 text-center text-sm font-semibold text-white">Ayo Mondok!</a></div></div></div>}

      <section id="hero" className="ornament-tl ornament-br relative bg-dq-ivory px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dq-green/20 bg-dq-green-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-dq-green"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-green" />Est. 1968 · Tangerang, Banten</div><h1 className="font-serif text-5xl font-semibold leading-[1.08] text-dq-charcoal sm:text-6xl lg:text-8xl">Tempat Terbaik<br /><span className="italic text-dq-green">Membangun Generasi</span><br /><span className="inline-block min-w-[7ch] italic text-dq-green">{headline}</span></h1><p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-dq-warm-gray lg:text-lg">Sejak 1968, Pondok Pesantren Daar el-Qolam mendidik ribuan santri menjadi generasi yang unggul dalam ilmu agama, sains, dan teknologi serta dengan akhlak mulia sebagai fondasi utama.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={registrationUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-dq-green px-6 py-3.5 text-sm font-semibold text-white shadow-card hover:bg-dq-green-dark">Daftar Sekarang</a><Link href="#program" className="rounded-lg border-2 border-dq-green px-6 py-3.5 text-sm font-semibold text-dq-green hover:bg-dq-green hover:text-white">Pelajari Program ↓</Link></div></div>
          <div className="bento-wrap relative mx-auto mt-12 max-w-6xl lg:mt-16" aria-label="Galeri foto hero">
            <div className="grid h-[440px] grid-cols-5 grid-rows-3 gap-3 sm:h-[520px] lg:h-[600px]">
              {heroImages.map((image) => <button type="button" key={image.file} onClick={() => setLightbox(image)} className={`photo-interactive relative overflow-hidden rounded-2xl shadow-card-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-dq-gold ${image.className}`} aria-label={`Buka foto: ${image.alt}`}><Image src={`/images/${image.file}`} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /><span className="absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-1 text-xs font-semibold text-white">Perbesar</span></button>)}
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="bg-white px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center"><div><SectionHeading eyebrow="Tentang Daar el-Qolam" title="Pesantren Modern" emphasis="Berbasis Nilai Islam" description="Daar el-Qolam hadir sejak 1968 untuk membentuk generasi berilmu, berakhlak, dan siap memberi manfaat bagi masyarakat." /></div><div className="rounded-2xl border border-dq-green/10 bg-dq-ivory p-7 shadow-card"><p className="font-serif text-2xl font-semibold text-dq-green">Visi &amp; Misi</p><p className="mt-4 text-sm leading-relaxed text-dq-warm-gray">Mendidik santri dengan keseimbangan ilmu agama, sains, bahasa, dan keterampilan abad ke-21 dalam lingkungan yang aman serta berkarakter.</p><p className="mt-5 text-sm leading-relaxed text-dq-warm-gray">Sejarah panjang pesantren menjadi fondasi untuk terus berinovasi tanpa meninggalkan nilai-nilai keislaman.</p></div></div></section>
      <section className="arabesque-bg bg-dq-green px-6 py-16 text-center lg:px-8 lg:py-24"><div className="mx-auto max-w-5xl"><p className="font-arabic text-4xl leading-relaxed text-white sm:text-5xl lg:text-6xl" dir="rtl">اَلْعِلْمُ بِلَا عَمَلٍ كَالشَّجَرِ بِلَا ثَمَرٍ</p><p className="mt-5 text-base italic text-white/90 lg:text-xl">&quot;Ilmu tanpa amal seperti pohon tanpa buah&quot;</p><p className="mt-3 text-xs font-semibold uppercase tracking-widest text-dq-gold">— Mahfudzat (Kata Mutiara Arab)</p></div></section>
      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Video Profil" title="Mengenal Daar el-Qolam" emphasis="Lebih Dekat" /><div className="mt-10 aspect-video overflow-hidden rounded-2xl bg-dq-green shadow-card-lg"><iframe title="Video profil Daar el-Qolam" src="https://www.youtube.com/embed/5nbIMNyNhTI?autoplay=0&rel=0" className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" /></div></div></section>
      <section className="bg-dq-ivory px-6 py-16 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">{[["5.000+", "Santri Aktif"], ["58", "Tahun Berpengalaman"], ["30.000+", "Alumni Nasional"], ["4", "Kampus Terintegrasi"]].map(([value, label]) => <div key={label} className="stat-box text-center"><p className="font-serif text-4xl font-bold text-dq-green lg:text-6xl">{value}</p><p className="mt-2 text-sm font-medium text-dq-warm-gray">{label}</p></div>)}</div></section>
      <section className="bg-dq-ivory py-10 lg:py-14"><div className="photo-marquee"><div className="photo-marquee-track">{[...gallery, ...gallery].map((file, index) => <div key={`${file}-${index}`} className="photo-marquee-item relative"><Image src={`/images/${file}`} alt="Galeri Daar el-Qolam" fill sizes="352px" className="object-cover" /></div>)}</div></div></section>
      <section id="program" className="bg-white px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Program Pendidikan" title="Pilih Jalur Pendidikan" emphasis="yang Tepat untuk Putra-Putri Anda" description="Empat program unggulan yang dirancang untuk membekali santri dengan ilmu agama, akademik, dan keterampilan abad ke-21." /><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{programs.map((program, index) => <Link key={program.title} id={program.href.slice(1)} href={program.href} className={`program-card group relative block rounded-2xl border p-6 shadow-card ${program.featured ? "dq3-gradient border-dq-green text-white" : "border-dq-green/10 bg-dq-ivory"}`}><span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-dq-gold">0{index + 1} · {program.campus}</span><h3 className={`font-serif text-2xl font-semibold ${program.featured ? "text-white" : "text-dq-charcoal group-hover:text-dq-green"}`}>{program.title}</h3><p className={`mt-3 text-sm leading-relaxed ${program.featured ? "text-white/80" : "text-dq-warm-gray"}`}>{program.description}</p><div className="mt-5 flex flex-wrap gap-1.5">{program.tags.map((tag) => <span key={tag} className={`rounded-full px-2.5 py-1 text-xs font-medium ${program.featured ? "bg-white/20 text-white" : "bg-dq-green-light text-dq-green"}`}>{tag}</span>)}</div></Link>)}</div></div></section>
      <section id="dq3" className="dq3-gradient relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28"><div className="arabesque-bg absolute inset-0 opacity-30" /><div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-dq-gold">Daar el-Qolam 3</span><h2 className="font-serif text-4xl font-semibold leading-tight text-white lg:text-5xl">Kampus Dza&apos;Izza<br /><span className="italic text-dq-gold">Pesantren Beyond Pesantren</span></h2><p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 lg:text-lg">Go Global, Be a Global Player. DQ3 mempersiapkan santri menjadi pemimpin global melalui kurikulum internasional dan lingkungan bilingual.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="https://www.daarelqolam3.sch.id/" target="_blank" rel="noreferrer" className="rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-dq-green">Kunjungi Website DQ3</a><a href="https://psb.daarelqolam3.sch.id/" target="_blank" rel="noreferrer" className="rounded-lg border-2 border-white/40 px-6 py-3 text-center text-sm font-semibold text-white">Daftar PSB DQ3</a></div></div><div className="hidden lg:block"><div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center text-white"><p className="font-serif text-6xl text-dq-gold">DQ3</p><p className="mt-3 text-sm text-white/80">Kampus internasional dengan program bilingual.</p></div></div></div></section>
      <section id="jelajahi" className="bg-dq-ivory px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Jelajahi" title="Kehidupan di" emphasis="Daar el-Qolam" description="Fasilitas modern, kehidupan Islami yang kaya, dan lingkungan asrama yang mendukung tumbuh kembang santri." /><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{exploreItems.map((item, index) => <Link key={item.title} id={item.href.slice(1)} href={item.href} className="group block overflow-hidden rounded-2xl bg-white shadow-card hover:-translate-y-1 hover:shadow-card-lg"><div className="relative h-48 overflow-hidden"><Image src={item.image} alt={item.title} fill sizes="25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-5"><span className="text-xs font-semibold text-dq-gold">0{index + 1}</span><h3 className="mt-2 font-serif text-xl font-semibold text-dq-charcoal group-hover:text-dq-green">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-dq-warm-gray">{item.description}</p></div></Link>)}</div></div></section>
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Testimoni" title="Apa Kata" emphasis="Wali Santri & Alumni" /><div className="mt-12 grid gap-6 md:grid-cols-3">{[{ quote: "Anak saya berkembang pesat dalam hafalan Qur'an dan bahasa Arab. Lingkungan pesantren sangat mendukung pembentukan karakter Islami yang kuat.", name: "Bapak Ahmad Fauzi", role: "Wali Santri DQ Pusat" }, { quote: "Excellent Class memberikan keseimbangan antara ilmu agama dan sains modern.", name: "Ibu Siti Nurhaliza", role: "Wali Santriwati DQ 2" }, { quote: "Kerjasama internasional DQ3 dengan Az-Zaitunah Tunisia membuka jalan saya melanjutkan studi ke luar negeri.", name: "Reza Pratama", role: "Alumni DQ 3" }].map((item) => <figure key={item.name} className="rounded-2xl border border-dq-green/10 bg-dq-ivory p-6 shadow-card lg:p-8"><div className="mb-4 text-dq-gold">★★★★★</div><blockquote className="text-sm leading-relaxed text-dq-warm-gray">“{item.quote}”</blockquote><figcaption className="mt-6"><p className="text-sm font-semibold text-dq-charcoal">{item.name}</p><p className="mt-1 text-xs text-dq-warm-gray">{item.role}</p></figcaption></figure>)}</div></div></section>
      <section className="bg-dq-ivory px-6 py-16 lg:px-8 lg:py-20"><div className="arabesque-bg mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-2xl bg-dq-green p-8 text-white lg:flex-row lg:items-center lg:p-12"><div><p className="text-xs font-semibold uppercase tracking-widest text-dq-gold">Tahun Pelajaran 2026/2027</p><h2 className="mt-2 font-serif text-3xl font-semibold">Segera Daftarkan Putra-Putri Anda</h2><p className="mt-2 text-sm text-white/70">Kuota terbatas · Jayanti, Kab. Tangerang, Banten · Telp. +62 21 5957 6882</p></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-dq-gold px-6 py-3 text-center text-sm font-semibold text-white">Hubungi via WhatsApp</a></div></section>
      <section id="berita" className="bg-white px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Berita & Kegiatan" title="Kabar Terbaru dari" emphasis="Daar el-Qolam" /><div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter kategori berita">{filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`news-filter-btn rounded-full border px-4 py-2 text-sm font-semibold transition ${activeFilter === filter ? "active" : "border-dq-green/20 text-dq-green hover:bg-dq-green-light"}`} aria-pressed={activeFilter === filter}>{filter}</button>)}</div><div className="mt-10 grid gap-6 md:grid-cols-3">{filteredNews.map((item) => <Link key={item.slug} id={item.slug} href={`/blog#${item.slug}`} className="news-card group block overflow-hidden rounded-2xl border border-dq-green/10 bg-dq-ivory shadow-card hover:-translate-y-1 hover:shadow-card-lg"><div className="relative h-48 overflow-hidden bg-dq-green-light"><Image src={item.image} alt={item.title} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-5"><div className="flex items-center gap-2 text-xs"><span className="rounded-full bg-dq-green-light px-3 py-1 font-semibold text-dq-green">{item.category}</span><span className="text-dq-warm-gray">{item.date}</span></div><h3 className="mt-4 font-serif text-xl font-semibold leading-tight text-dq-charcoal group-hover:text-dq-green">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-dq-warm-gray">{item.excerpt}</p><span className="mt-5 block text-sm font-semibold text-dq-green">Baca selengkapnya →</span></div></Link>)}</div><div className="mt-8 text-center"><Link href="/blog" className="font-semibold text-dq-green">Lihat semua berita →</Link></div></div></section>
      <section id="faq" className="bg-dq-ivory px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-4xl"><SectionHeading eyebrow="FAQ" title="Pertanyaan yang" emphasis="Sering Diajukan" description="Temukan jawaban untuk pertanyaan umum seputar pendaftaran, biaya, kurikulum, dan kehidupan di pesantren." /><div className="mt-10 divide-y divide-dq-green/10 rounded-2xl border border-dq-green/10 bg-white shadow-card">{[["Bagaimana proses pendaftaran santri?", "Informasi pendaftaran tersedia melalui laman resmi PSB Daar el-Qolam."], ["Program pendidikan apa saja yang tersedia?", "Daar el-Qolam menyediakan Program Reguler, Excellent Class, Kelas Internasional, dan Dirasah Islamiyyah."], ["Di mana lokasi pesantren?", "Pondok Pesantren Daar el-Qolam berada di Jayanti, Kabupaten Tangerang, Banten."]].map(([question, answer]) => <details key={question} className="group p-6"><summary className="cursor-pointer list-none font-semibold text-dq-charcoal">{question}<span className="float-right text-dq-green">+</span></summary><p className="mt-3 max-w-2xl text-sm leading-relaxed text-dq-warm-gray">{answer}</p></details>)}</div></div></section>
      <section id="kontak" className="bg-dq-green px-6 py-16 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase tracking-widest text-dq-gold">Pendaftaran</p><h2 className="mt-2 font-serif text-3xl font-semibold">Ayo Mondok!</h2><p className="mt-2 text-sm text-white/70">Jayanti, Kabupaten Tangerang, Banten</p></div><a href={registrationUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-dq-gold px-6 py-3 text-sm font-semibold text-white">Daftar Sekarang</a></div></section>
      <footer className="bg-dq-green-dark text-white"><div className="mx-auto max-w-7xl px-6 py-16 lg:px-8"><div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-10"><div className="col-span-2 lg:col-span-2"><Link href="/" className="inline-flex"><Image src="/images/logo-daar-el-qolam-white.svg" alt="Logo Daar el-Qolam" width={220} height={54} className="h-12 w-auto" /></Link><p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">Mendidik generasi berilmu dan berakhlak sejak 1968 di Jayanti, Kabupaten Tangerang, Banten.</p><p className="mt-6 text-sm font-bold">Media sosial</p><div className="mt-3 flex flex-col gap-2 text-sm text-white/70"><a href="https://www.youtube.com/@ElQolam/videos" target="_blank" rel="noreferrer">YouTube @ElQolam</a><a href="https://www.instagram.com/daarelqolam/" target="_blank" rel="noreferrer">Instagram @daarelqolam</a><a href="https://www.instagram.com/dzaizza_official/" target="_blank" rel="noreferrer">Instagram @dzaizza_official</a><a href="https://www.tiktok.com/@ponpesdaarelqolam" target="_blank" rel="noreferrer">TikTok @ponpesdaarelqolam</a></div></div><div><p className="text-sm font-bold">Program</p><ul className="mt-3 space-y-2.5 text-sm text-white/70"><li><Link href="#program-reguler">Program Reguler</Link></li><li><Link href="#program-excellent">Excellent Class</Link></li><li><Link href="#dq3">Kelas Internasional</Link></li><li><Link href="#program-dirasah">Dirasah Islamiyyah</Link></li></ul></div><div><p className="text-sm font-bold">Jelajahi</p><ul className="mt-3 space-y-2.5 text-sm text-white/70"><li><Link href="#jelajahi-fasilitas">Fasilitas</Link></li><li><Link href="#jelajahi-kehidupan">Kehidupan Islami</Link></li><li><Link href="#jelajahi-ekskul">Ekstrakurikuler</Link></li><li><Link href="#jelajahi-asrama">Kehidupan Asrama</Link></li></ul></div><div><p className="text-sm font-bold">Kontak</p><ul className="mt-3 space-y-2.5 text-sm text-white/70"><li>Jayanti, Kab. Tangerang</li><li><a href="tel:+622159576882">+62 21 5957 6882</a></li><li><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></li><li><a href="mailto:info@daarelqolam.ac.id">info@daarelqolam.ac.id</a></li></ul><p className="mt-6 text-sm font-bold">Pendaftaran</p><a href={registrationUrl} target="_blank" rel="noreferrer" className="mt-3 block text-sm text-white/70">PSB Daar el-Qolam</a></div></div><div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row"><p>© 2026 Pondok Pesantren Daar el-Qolam. Hak cipta dilindungi.</p><div className="flex gap-4"><Link href="#tentang">Tentang DQ</Link><Link href="#kontak">Kontak</Link></div></div></div></footer>

      {lightbox && <div className="lightbox open" role="dialog" aria-modal="true" aria-label={lightbox.alt} onClick={() => setLightbox(null)}><button type="button" className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Tutup lightbox">×</button><div className="relative max-h-[88vh] max-w-[92vw]" onClick={(event) => event.stopPropagation()}><Image src={`/images/${lightbox.file}`} alt={lightbox.alt} width={1600} height={1000} className="lightbox-img h-auto w-auto object-contain" priority /></div></div>}
    </main>
  );
}