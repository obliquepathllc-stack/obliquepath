import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Notes from the Workshop | Oblique Path",
  description:
    "Automation insights, product updates, and field notes from building Oblique Path. For growing businesses in Windsor, Toronto, Michigan, Chicago, and San Francisco.",
};

const categoryColors: Record<string, string> = {
  "AI Automation": "bg-primary/10 text-primary border border-primary/20",
  "Automation Strategy": "bg-accent/10 text-accent-300 border border-accent/20",
  "Case Study": "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
  Guide: "bg-purple-500/10 text-purple-600 border border-purple-500/20",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const [featured, ...rest] = sorted;

  return (
    <main className="pt-32 pb-24 px-4 lg:px-16">
      <div className="container max-w-4xl mx-auto">

        {/* Header */}
        <p className="text-xs tracking-[0.2em] uppercase text-foreground/50 font-semibold mb-4">
          Writing
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight mb-4">
          Notes from the Workshop.
        </h1>
        <p className="text-lg text-foreground/65 mb-16 max-w-2xl leading-relaxed">
          Automation insights, product updates, and field notes from building
          Oblique Path.
        </p>

        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-16">
          <article className="border border-border/50 rounded-2xl p-8 bg-card/50 hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-muted text-foreground/60"}`}
              >
                {featured.category}
              </span>
              <span className="text-xs text-foreground/40">{formatDate(featured.date)}</span>
              <span className="text-xs text-foreground/40">{featured.readTime}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
              {featured.title}
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-5 max-w-2xl">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold group-hover:gap-3 transition-all duration-200">
              Read more <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </article>
        </Link>

        {/* Remaining posts */}
        <div className="space-y-0 divide-y divide-border/40">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block py-8">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-muted text-foreground/60"}`}
                >
                  {post.category}
                </span>
                <span className="text-xs text-foreground/40">{formatDate(post.date)}</span>
                <span className="text-xs text-foreground/40">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-foreground/65 leading-relaxed text-sm mb-3">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold group-hover:gap-2.5 transition-all duration-200">
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
