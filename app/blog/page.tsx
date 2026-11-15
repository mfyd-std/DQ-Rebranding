import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { posts } from "@/app/blog/blog-data";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-dq-ivory">
      <section className="arabesque-bg bg-dq-green px-6 pb-16 pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
            <span className="text-xs font-semibold uppercase tracking-wide text-dq-gold">Berita &amp; Kegiatan</span>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">Kabar Terbaru dari<br /><span className="italic text-dq-gold">Daar el-Qolam</span></h1>
          <p className="mx-auto max-w-2xl text-base text-white/80 lg:text-lg">Prestasi santri, kegiatan akademik, dan berbagai liputan terkini dari lingkungan pesantren Daar el-Qolam.</p>
        </div>
      </section>
      <section className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
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
