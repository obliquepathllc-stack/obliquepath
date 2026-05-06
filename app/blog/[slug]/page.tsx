import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts, type ContentBlock } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Oblique Path`,
    description: post.excerpt,
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="text-2xl font-bold mt-10 mb-4 leading-snug">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl font-bold mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-foreground/80 leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="list-disc list-outside ml-5 space-y-2 mb-5">
          {block.items.map((item, j) => (
            <li key={j} className="text-foreground/80 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div
          key={i}
          className="my-8 border-l-4 border-primary bg-primary/5 rounded-r-xl px-6 py-5"
        >
          <p className="text-foreground/90 font-medium leading-relaxed mb-4">
            {block.text}
          </p>
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Book a Strategy Call
          </Link>
        </div>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formatted = new Date(post.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="pt-32 pb-24 px-4 lg:px-16">
      <div className="container max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Notes from the Workshop
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {post.category}
            </span>
            <span className="text-xs text-foreground/40">{formatted}</span>
            <span className="text-xs text-foreground/40">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-foreground/65 leading-relaxed">{post.excerpt}</p>
        </div>

        <hr className="border-border/40 mb-10" />

        {/* Body */}
        <div>{post.content.map((block, i) => renderBlock(block, i))}</div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-border/40">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to all posts
          </Link>
        </div>
      </div>
    </main>
  );
}
