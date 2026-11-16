import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { notFound } from "next/navigation";
import { posts } from "@/app/blog/blog-data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-dq-ivory">
      <section className="bg-dq-ivory pb-12 pt-28 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-dq-warm-gray transition-colors hover:text-dq-green">
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" focusable="false" />
            Kembali ke berita
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${post.category === "Akademik" ? "bg-dq-green-light text-dq-green" : "bg-dq-gold-light text-dq-gold"}`}>{post.category.toLowerCase()}</span>
            <time className="text-sm text-dq-warm-gray">{post.detailDate ?? post.date}</time>
          </div>
          <h1 className="mb-4 font-serif text-3xl font-semibold leading-tight text-dq-charcoal sm:text-4xl lg:text-5xl lg:leading-[48px]">{post.title}</h1>
                    <p className="text-base leading-relaxed text-dq-warm-gray lg:text-lg lg:leading-7">{post.excerpt}</p>
        </div>
      </section>
      {<><section className="bg-dq-ivory pb-12"><div className="dq-container max-w-5xl"><div className="photo-interactive relative aspect-video overflow-hidden rounded-2xl shadow-card-lg"><Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" /></div></div></section><section className="bg-white py-12 lg:py-16"><div className="dq-container max-w-3xl"><div className="prose-content space-y-5">{(post.body ?? [post.excerpt]).map((paragraph) => <p key={paragraph} className="text-base leading-relaxed text-dq-charcoal lg:text-lg">{paragraph}</p>)}</div><div className="mt-12 border-t border-dq-green/10 pt-8"><p className="mb-4 text-xs font-semibold uppercase tracking-widest text-dq-gold">Bagikan artikel</p><div className="flex items-center gap-3"><a href={post.shareHref ?? `https://wa.me/?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-dq-green px-4 py-2 text-sm font-semibold text-white hover:bg-dq-green-dark">WhatsApp</a><Link href="/blog" className="inline-flex items-center gap-2 rounded-lg border-2 border-dq-green/20 px-4 py-2 text-sm font-semibold text-dq-green hover:bg-dq-green-light">Lihat berita lainnya</Link></div></div></div></section></>}
    </main>
  );
}