import { buildMetadata } from "@/lib/metadata";
import { CareersContent } from "./careers-content";

export const metadata = buildMetadata({
  title: "Careers | Join Oblique Path",
  description: "We're looking for people passionate about automation and building things that actually work. No current openings — send your resume and we'll keep you in mind.",
  path: "/careers",
});

export default function CareersPage() {
  return <CareersContent />;
}
