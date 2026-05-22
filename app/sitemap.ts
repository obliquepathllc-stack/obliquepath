import { MetadataRoute } from "next";

const BASE_URL = "https://obliquepath.dev";

const caseStudySlugs = [
  "healthcare-staffing",
  "harbor-one-capital",
  "junk-cycle",
  "first-point-cleaners",
  "aerrand",
  "growtt",
  "aquaprox-ai",
  "anitrous",
  "maher-aouli-realty",
  "ai-voice-agent",
];

const blogSlugs = [
  "ai-automation-windsor-toronto",
  "manual-followup-cost-michigan-chicago",
  "scheduling-automation-waste-removal",
  "ai-automation-small-business-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/case-studies`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/pricing`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/book-demo`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/healthcare`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ai-automation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/custom-web-solutions`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/process-optimization`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/tech-support`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/careers`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const caseStudyPages = caseStudySlugs.map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticPages,
    ...caseStudyPages,
    ...blogPages,
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
  }));
}
