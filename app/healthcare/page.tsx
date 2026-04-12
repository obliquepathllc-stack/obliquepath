import type { Metadata } from "next";
import { HealthcarePage } from "./healthcare-page";

export const metadata: Metadata = {
  title: "Healthcare Staffing Automation | Oblique Path",
  description:
    "Oblique Path builds automation systems and custom platforms for healthcare staffing agencies, reducing admin overhead, eliminating manual timesheets, and accelerating invoicing.",
};

export default function Page() {
  return <HealthcarePage />;
}
