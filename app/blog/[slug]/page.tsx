import Link from "next/link";
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
      <header className="border-b border-dq-green/10 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/blog" className="font-serif text-2xl font-bold text-dq-green">Daar el-Qolam</Link>
          <Link href="/blog" className="text-sm font-semibold text-dq-green hover:text-dq-green-dark">← Kembali ke berita</Link>
        </div>
      </header>
      <article className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex items-center gap-2 text-xs"><span className="rounded-full bg-dq-green-light px-3 py-1 font-semibold text-dq-green">{post.category}</span><time className="text-dq-warm-gray">{post.date}</time></div>
        <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-dq-charcoal lg:text-6xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-dq-warm-gray">{post.excerpt}</p>
      </article>
    </main>
  );
}