import { buildMetadata } from "@/lib/metadata";
import { HealthcarePage } from "./healthcare-page";

export const metadata = buildMetadata({
  title: "Healthcare Staffing Automation | Windsor, Ontario | Oblique Path",
  description:
    "Custom automation systems for healthcare staffing agencies in Windsor, Toronto, London, and Ontario. Eliminate manual timesheets, automate invoicing, and streamline scheduling.",
  path: "/healthcare",
});

export default function Page() {
  return <HealthcarePage />;
}
