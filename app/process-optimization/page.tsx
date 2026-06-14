import { buildMetadata } from "@/lib/metadata";
import { ProcessOptimizationContent } from "./process-optimization-content";

export const metadata = buildMetadata({
  title: "Business Process Optimization | Oblique Path",
  description: "We audit your workflows, identify what's wasting time and money, and build automation systems to fix it. Analysis, solution design, implementation, and ongoing improvement.",
  path: "/process-optimization",
});

export default function ProcessOptimizationPage() {
  return <ProcessOptimizationContent />;
}
