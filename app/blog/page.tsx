import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { posts } from "@/app/blog/blog-data";

const listing = posts.filter((post) => post.slug !== "kegiatan-apel-santri").map((post) => ({ ...post, alt: post.title }));

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-dq-ivory">
      <section className="arabesque-bg bg-dq-green pb-16 pt-32 ">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
            <span className="text-xs font-semibold uppercase tracking-wide text-dq-gold">Berita &amp; Kegiatan</span>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">Kabar Terbaru dari<br /><span className="italic text-dq-gold">Daar el-Qolam</span></h1>
          <p className="mx-auto max-w-2xl text-base text-white/80 lg:text-lg">Prestasi santri, kegiatan akademik, dan berbagai liputan terkini dari lingkungan pesantren Daar el-Qolam.</p>
        </div>
      </section>
      <div className="border-b border-dq-green/10 bg-white"><div className="dq-container flex gap-2 overflow-x-auto py-4" aria-label="Kategori berita">{["Semua", "Prestasi", "Akademik", "Kegiatan", "Pengumuman"].map((label, index) => <span key={label} className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold ${index === 0 ? "bg-dq-green text-white" : "bg-dq-green-light text-dq-green"}`}>{label}</span>)}</div></div>
      <section className="bg-dq-ivory py-12"><div className="dq-container"><Link href="/blog/seleksi-nasional-opsi-2026" className="reveal group block overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-card-lg"><div className="grid lg:grid-cols-2"><div className="photo-interactive relative h-64 lg:h-auto lg:aspect-[720/706]"><Image src="/images/BP3A8871.webp" alt="Berita Utama" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="flex flex-col justify-center p-8 lg:p-10"><div className="mb-4 flex items-center gap-2 text-xs text-dq-warm-gray"><span className="rounded-full bg-dq-gold-light px-3 py-1 font-semibold uppercase text-dq-gold">Prestasi</span>April 2026 <span>· Berita Utama</span></div><h2 className="mb-4 font-serif text-2xl font-semibold leading-tight text-dq-charcoal group-hover:text-dq-green lg:text-3xl">Dua Santriwati Tembus Seleksi Nasional OPSI 2026</h2><p className="mb-6 leading-relaxed text-dq-warm-gray">Dua santriwati Daar el-Qolam 3 berhasil menembus seleksi Olimpiade Penelitian Siswa Indonesia (OPSI) 2026 tingkat nasional dengan penelitian di bidang sains dan teknologi, membuktikan kualitas pendidikan internasional DQ3.</p><span className="inline-flex items-center gap-2 text-sm font-semibold text-dq-green">Baca Selengkapnya <ArrowRightIcon className="h-4 w-4" /></span></div></div></Link></div></section>
      <section className="bg-dq-ivory pb-20 lg:pb-28"><div className="dq-container"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listing.map((item, index) => <Link key={item.title} href={`/blog/${item.slug}`} style={{ transitionDelay: `${index * 0.1}s` }} className="reveal card-interactive group block overflow-hidden rounded-2xl border border-dq-green/10 bg-white hover:shadow-card-lg"><div className="photo-interactive relative h-48"><Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" /></div><div className="p-5"><div className="mb-2 flex items-center gap-2 text-[10px]"><span className="rounded-full bg-dq-green-light px-2 py-0.5 font-semibold text-dq-green">{item.category}</span><span className="text-dq-warm-gray">{item.date}</span></div><h3 className="mb-2 font-serif text-base font-semibold leading-snug text-dq-charcoal group-hover:text-dq-green">{item.title}</h3><p className="line-clamp-2 text-sm text-dq-warm-gray">{item.excerpt}</p></div></Link>)}
      </div></div></section>
    </main>
  );
}
