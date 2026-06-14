import { buildMetadata } from "@/lib/metadata";
import { CustomWebSolutionsContent } from "./custom-web-solutions-content";

export const metadata = buildMetadata({
  title: "Custom Web Solutions & Platforms | Oblique Path",
  description: "Custom web applications, client portals, and automation-first platforms built for your specific operation. Not a template — engineered to grow with your business.",
  path: "/custom-web-solutions",
});

export default function CustomWebSolutionsPage() {
  return <CustomWebSolutionsContent />;
}
