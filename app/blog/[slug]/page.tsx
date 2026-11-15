import Link from "next/link";
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
      <section className="bg-dq-ivory px-6 pb-12 pt-28 lg:px-8 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-dq-warm-gray transition-colors hover:text-dq-green">
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" focusable="false" />
            Kembali ke berita
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${post.category === "Akademik" ? "bg-dq-green-light text-dq-green" : "bg-dq-gold-light text-dq-gold"}`}>{post.category.toLowerCase()}</span>
            <time className="text-sm text-dq-warm-gray">{post.slug === "kolaborasi-literasi-dzaizza" ? "15 April 2026" : post.slug === "seleksi-paskibraka-tangerang" ? "22 Maret 2026" : post.slug === "seleksi-nasional-opsi-2026" ? "10 Februari 2026" : post.date}</time>
          </div>
          <h1 className="mb-4 font-serif text-3xl font-semibold leading-tight text-dq-charcoal sm:text-4xl lg:text-5xl">{post.title}</h1>
          <p className="text-base leading-relaxed text-dq-warm-gray lg:text-lg">{post.excerpt}</p>
        </div>
      </section>
    </main>
  );
}