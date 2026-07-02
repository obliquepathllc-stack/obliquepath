import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { caseStudies } from "@/lib/case-studies";

const BASE = "https://obliquepath.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly", lastModified: new Date() },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/case-studies`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/blog`, priority: 0.85, changeFrequency: "weekly" },
    { url: `${BASE}/pricing`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/contact`, priority: 0.75, changeFrequency: "monthly" },
    { url: `${BASE}/book-demo`, priority: 0.75, changeFrequency: "monthly" },
    { url: `${BASE}/healthcare`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/ai-automation`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/custom-web-solutions`, priority: 0.75, changeFrequency: "monthly" },
    { url: `${BASE}/process-optimization`, priority: 0.75, changeFrequency: "monthly" },
    { url: `${BASE}/tech-support`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/careers`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE}/privacy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: "yearly" },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${BASE}/case-studies/${study.id}`,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.75,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
