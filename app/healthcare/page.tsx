import { buildMetadata } from "@/lib/metadata";
import { HealthcarePage } from "./healthcare-page";

export const metadata = buildMetadata({
  title: "Healthcare Staffing Automation | Oblique Path",
  description:
    "Oblique Path builds automation systems and custom platforms for healthcare staffing agencies, reducing admin overhead, eliminating manual timesheets, and accelerating invoicing.",
  path: "/healthcare",
});

export default function Page() {
  return <HealthcarePage />;
}
