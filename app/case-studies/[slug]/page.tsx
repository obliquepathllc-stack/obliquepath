import { caseStudies } from "@/lib/case-studies";
import { CaseStudyClient } from "./case-study-client";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);
  if (!study) return {};

  return {
    title: `${study.client} | Case Study · Oblique Path`,
    description: `${study.client} achieved ${study.results[0].stat} ${study.results[0].description} using Oblique Path's automation systems. ${study.beforeNarrative.slice(0, 100)}...`,
    alternates: { canonical: `https://obliquepath.dev/case-studies/${slug}` },
    openGraph: {
      title: `${study.client} Case Study | Oblique Path`,
      description: study.testimonial.slice(0, 160),
      type: "article",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);
  if (!study) notFound();
  // Studies with a dedicated page (e.g. healthcare) redirect there
  if (study.pageUrl) redirect(study.pageUrl);

  const currentIndex = caseStudies.findIndex((s) => s.id === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <CaseStudyClient
      studyId={study.id}
      prevStudyId={prevStudy?.id ?? null}
      nextStudyId={nextStudy?.id ?? null}
    />
  );
}
