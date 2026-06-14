import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts, type ContentBlock } from "@/lib/blog-posts";
import { EmailCapture } from "@/components/blog/email-capture";

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
    alternates: { canonical: `https://obliquepath.dev/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="text-2xl font-bold mt-12 mb-4 leading-snug tracking-tight">
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
        <p key={i} className="text-foreground/80 leading-relaxed mb-5 text-[17px]">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-3 mb-6 ml-1">
          {block.items.map((item, j) => (
            <li key={j} className="text-foreground/80 leading-relaxed text-[17px] flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div key={i} className="my-10 border-l-4 border-primary bg-primary/5 rounded-r-xl px-6 py-5">
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
    case "casestudy":
      return (
        <Link key={i} href={`/case-studies/${block.slug}`} className="group block my-8">
          <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-200">
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-3">Case Study</p>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-bold text-foreground mb-1">{block.client}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.teaser}</p>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-3xl font-black gradient-text leading-none tracking-tighter">{block.stat}</div>
                <div className="text-xs text-muted-foreground mt-0.5 max-w-[100px] text-right">{block.statLabel}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-4 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-200">
              Read the full case study
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </Link>
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Oblique Path", url: "https://obliquepath.dev" },
    publisher: { "@type": "Organization", name: "Oblique Path", logo: { "@type": "ImageObject", url: "https://obliquepath.dev/icon.png" } },
    url: `https://obliquepath.dev/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://obliquepath.dev/blog/${slug}` },
  };

  return (
    <main className="pt-32 pb-24 px-4 lg:px-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {post.category}
            </span>
            <span className="text-xs text-foreground/40">{formatted}</span>
            <span className="text-xs text-foreground/40">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5 tracking-tight">
            {post.title}
          </h1>
          <p className="text-lg text-foreground/65 leading-relaxed">{post.excerpt}</p>
        </div>

        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 border border-border/40">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-2 right-3 text-[10px] text-white/50">
            Photo: {post.imageCredit}
          </div>
        </div>

        <hr className="border-border/40 mb-10" />

        {/* Body */}
        <div>{post.content.map((block, i) => renderBlock(block, i))}</div>

        <EmailCapture />

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
