import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const programs = [
  {
    title: "Program Reguler",
    description: "Pendidikan pesantren modern dengan fondasi ilmu agama dan akhlak.",
    href: "/program#reguler",
  },
  {
    title: "Excellent Class",
    description: "Keseimbangan ilmu agama, sains modern, dan pengembangan prestasi.",
    href: "/program#excellent",
  },
  {
    title: "Kelas Internasional",
    description: "Penguatan bahasa dan wawasan global untuk melanjutkan studi.",
    href: "/dq3",
  },
  {
    title: "Dirasah Islamiyyah",
    description: "Pendalaman keislaman dalam lingkungan pendidikan yang terarah.",
    href: "/program#dirasah",
  },
];

const news = [
  {
    category: "Akademik",
    date: "April 2026",
    title: "Tingkatkan Kualitas Perpustakaan, Dza'Izza Perkuat Kolaborasi Literasi",
    excerpt: "Program literasi baru untuk meningkatkan budaya membaca dan riset di kalangan santri DQ3.",
  },
  {
    category: "Prestasi",
    date: "Maret 2026",
    title: "Santri DQ3 Mengikuti Seleksi Paskibraka Kabupaten Tangerang",
    excerpt: "Santri Daar el-Qolam 3 berhasil lolos seleksi tingkat kecamatan dan mewakili di tingkat kabupaten.",
  },
  {
    category: "Prestasi",
    date: "Februari 2026",
    title: "Dua Santriwati Tembus Seleksi Nasional OPSI 2026",
    excerpt: "Pencapaian membanggakan dari santriwati DQ3 dalam Olimpiade Penelitian Siswa Indonesia.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="border-b border-dq-green/10 bg-dq-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="font-serif text-2xl font-bold text-dq-green">
            Daar el-Qolam
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Navigasi utama">
            <Link href="#tentang" className="hover:text-dq-green">Tentang DQ</Link>
            <Link href="#program" className="hover:text-dq-green">Program</Link>
            <Link href="#jelajahi" className="hover:text-dq-green">Jelajahi</Link>
            <Link href="/blog" className="hover:text-dq-green">Berita</Link>
            <Link href="#kontak" className="hover:text-dq-green">Kontak</Link>
          </nav>
          <a href="https://daftar.daarelqolam.ac.id/" className="rounded-lg bg-dq-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-dq-green-dark">
            Daftar Sekarang
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-dq-ivory px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 inline-flex rounded-full border border-dq-green/20 bg-dq-green-light px-4 py-2 text-xs font-semibold uppercase tracking-wider text-dq-green">
            Est. 1968 · Tangerang, Banten
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-dq-charcoal sm:text-6xl lg:text-8xl">
            Tempat Terbaik<br />
            <span className="italic text-dq-green">Membangun Generasi</span><br />
            Berilmu &amp; Berakhlak
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-dq-warm-gray lg:text-lg">
            Sejak 1968, Pondok Pesantren Daar el-Qolam mendidik ribuan santri menjadi generasi yang unggul dalam ilmu agama, sains, dan teknologi serta dengan akhlak mulia sebagai fondasi utama.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://daftar.daarelqolam.ac.id/" className="rounded-lg bg-dq-green px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-dq-green-dark">
              Daftar Sekarang
            </a>
            <Link href="#program" className="rounded-lg border-2 border-dq-green px-6 py-3.5 text-sm font-semibold text-dq-green transition hover:bg-dq-green hover:text-white">
              Pelajari Program
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs font-semibold">
            {['Terakreditasi A', 'Beasiswa Tersedia', 'Asrama Modern', 'Kurikulum Terpadu'].map((item) => (
              <span key={item} className="rounded-full border border-dq-green/20 bg-white px-4 py-2 text-dq-green shadow-card">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="tentang" className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Tentang DQ" title="Mengenal Daar el-Qolam" emphasis="Lebih Dekat" description="Pesantren modern yang memadukan tradisi keilmuan Islam dengan pendidikan sains dan teknologi." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-dq-green p-6 text-white"><p className="font-serif text-4xl font-semibold">1968</p><p className="mt-2 text-sm text-white/75">Tahun berdiri</p></div>
            <div className="rounded-2xl bg-dq-gold p-6 text-white"><p className="font-serif text-4xl font-semibold">A</p><p className="mt-2 text-sm text-white/75">Akreditasi</p></div>
            <div className="col-span-2 rounded-2xl bg-dq-ivory p-6"><p className="font-serif text-2xl font-semibold text-dq-green">Ilmu, iman, dan akhlak</p><p className="mt-2 text-sm leading-relaxed text-dq-warm-gray">Tiga nilai yang menjadi dasar perjalanan pendidikan santri Daar el-Qolam.</p></div>
          </div>
        </div>
      </section>

      <section id="program" className="bg-dq-ivory px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Program Pendidikan" title="Pilih Jalur Pendidikan" emphasis="yang Tepat untuk Putra-Putri Anda" description="Setiap program dirancang untuk membantu santri tumbuh menjadi pribadi unggul dan berakhlak." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <Link key={program.title} href={program.href} className="group rounded-2xl border border-dq-green/10 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
                <p className="mb-10 text-sm font-semibold text-dq-gold">0{programs.indexOf(program) + 1}</p>
                <h3 className="font-serif text-2xl font-semibold text-dq-charcoal group-hover:text-dq-green">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dq-warm-gray">{program.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="jelajahi" className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Jelajahi DQ" title="Kehidupan di" emphasis="Daar el-Qolam" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {['Fasilitas', 'Kehidupan Islami', 'Kehidupan Asrama'].map((item, index) => (
              <div key={item} className={`rounded-2xl p-8 ${index === 1 ? 'bg-dq-green text-white' : 'bg-dq-ivory'}`}>
                <p className="text-sm font-semibold opacity-70">0{index + 1}</p>
                <h3 className="mt-12 font-serif text-3xl font-semibold">{item}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-75">Lingkungan yang nyaman, aman, dan membentuk kemandirian santri.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Testimoni" title="Apa Kata" emphasis="Wali Santri & Alumni" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { quote: "Anak saya berkembang pesat dalam hafalan Qur'an dan bahasa Arab. Lingkungan pesantren sangat mendukung pembentukan karakter Islami yang kuat. Kami sangat bersyukur memilih Daar el-Qolam.", name: "Bapak Ahmad Fauzi", role: "Wali Santri DQ Pusat" },
              { quote: "Excellent Class memberikan keseimbangan antara ilmu agama dan sains modern. Putri saya mendapat juara olimpiade sains tingkat kabupaten sekaligus hafal 5 juz Al-Qur'an.", name: "Ibu Siti Nurhaliza", role: "Wali Santriwati DQ 2" },
              { quote: "Kerjasama internasional DQ3 dengan Az-Zaitunah Tunisia membuka jalan saya melanjutkan studi ke luar negeri. Fondasi bahasa Arab dan Inggris dari pesantren sangat membantu.", name: "Reza Pratama", role: "Alumni DQ 3" },
            ].map((testimonial) => (
              <figure key={testimonial.name} className="rounded-2xl border border-dq-green/10 bg-dq-ivory p-6 shadow-card lg:p-8">
                <div className="mb-4 text-dq-gold" aria-label="5 dari 5 bintang">★★★★★</div>
                <blockquote className="text-sm leading-relaxed text-dq-warm-gray">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6"><p className="text-sm font-semibold text-dq-charcoal">{testimonial.name}</p><p className="mt-1 text-xs text-dq-warm-gray">{testimonial.role}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dq-ivory px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-dq-green p-8 text-white lg:flex-row lg:items-center lg:p-12">
          <div><p className="text-xs font-semibold uppercase tracking-widest text-dq-gold">Tahun Pelajaran 2026/2027</p><h2 className="mt-2 font-serif text-3xl font-semibold">Segera Daftarkan Putra-Putri Anda</h2><p className="mt-2 text-sm text-white/70">Kuota terbatas · Jayanti, Kab. Tangerang, Banten · Telp. +62 21 5957 6882</p></div>
          <a href="https://daftar.daarelqolam.ac.id/" className="rounded-lg bg-dq-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600">Hubungi via WhatsApp</a>
        </div>
      </section>

      <section className="bg-dq-ivory px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Berita & Kegiatan" title="Kabar Terbaru dari" emphasis="Daar el-Qolam" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {news.map((item) => (
              <article key={item.title} className="rounded-2xl border border-dq-green/10 bg-white p-6 shadow-card">
                <div className="flex items-center gap-2 text-xs"><span className="rounded-full bg-dq-green-light px-3 py-1 font-semibold text-dq-green">{item.category}</span><span className="text-dq-warm-gray">{item.date}</span></div>
                <h3 className="mt-5 font-serif text-xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dq-warm-gray">{item.excerpt}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center"><Link href="/blog" className="font-semibold text-dq-green hover:text-dq-green-dark">Lihat semua berita →</Link></div>
        </div>
      </section>

      <section className="bg-dq-ivory px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Pertanyaan yang" emphasis="Sering Diajukan" description="Temukan jawaban untuk pertanyaan umum seputar pendaftaran, biaya, kurikulum, dan kehidupan di pesantren." />
          <div className="mt-10 divide-y divide-dq-green/10 rounded-2xl border border-dq-green/10 bg-white shadow-card">
            {[
              ["Bagaimana proses pendaftaran santri?", "Informasi pendaftaran tersedia melalui laman resmi PSB Daar el-Qolam."],
              ["Program pendidikan apa saja yang tersedia?", "Daar el-Qolam menyediakan Program Reguler, Excellent Class, Kelas Internasional, dan Dirasah Islamiyyah."],
              ["Di mana lokasi pesantren?", "Pondok Pesantren Daar el-Qolam berada di Jayanti, Kabupaten Tangerang, Banten."],
            ].map(([question, answer]) => (
              <details key={question} className="group p-6"><summary className="cursor-pointer list-none font-semibold text-dq-charcoal marker:hidden">{question}<span className="float-right text-dq-green">+</span></summary><p className="mt-3 max-w-2xl text-sm leading-relaxed text-dq-warm-gray">{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="bg-dq-green px-6 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-widest text-dq-gold">Pendaftaran</p><h2 className="mt-2 font-serif text-3xl font-semibold">Ayo Mondok!</h2><p className="mt-2 text-sm text-white/70">Jayanti, Kabupaten Tangerang, Banten</p></div>
          <a href="https://daftar.daarelqolam.ac.id/" className="rounded-lg bg-dq-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600">Daftar Sekarang</a>
        </div>
      </section>

      <footer className="bg-dq-green-dark px-6 py-8 text-white/70 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm md:flex-row"><p>© 2026 Pondok Pesantren Daar el-Qolam. Hak cipta dilindungi.</p><p>Jayanti, Kabupaten Tangerang, Banten</p></div>
      </footer>
    </main>
  );
}
