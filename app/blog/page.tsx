import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { SectionHeading } from "@/components/SectionHeading";
import { posts } from "@/app/blog/blog-data";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-dq-ivory">
      <header className="border-b border-dq-green/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="font-serif text-2xl font-bold text-dq-green">Daar el-Qolam</Link>
          <Link href="/" className="inline-flex items-center gap-1 text-sm font-semibold text-dq-green hover:text-dq-green-dark"><ArrowLeftIcon className="h-4 w-4 shrink-0" aria-hidden="true" focusable="false" />Kembali ke beranda</Link>
        </div>
      </header>
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Berita & Kegiatan" title="Kabar Terbaru dari" emphasis="Daar el-Qolam" description="Informasi akademik, prestasi, dan kegiatan santri." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article id={post.slug} key={post.slug} className="flex flex-col rounded-2xl border border-dq-green/10 bg-white p-6 shadow-card">
                <div className="flex items-center gap-2 text-xs"><span className="rounded-full bg-dq-green-light px-3 py-1 font-semibold text-dq-green">{post.category}</span><time className="text-dq-warm-gray">{post.date}</time></div>
                <h2 className="mt-5 font-serif text-2xl font-semibold leading-tight text-dq-charcoal">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-dq-warm-gray">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-dq-green hover:text-dq-green-dark">Baca selengkapnya <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" focusable="false" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
