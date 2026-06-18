import { buildMetadata } from "@/lib/metadata";
import { AIAutomationContent } from "./ai-automation-content";

export const metadata = buildMetadata({
  title: "Business Process Automation for Small Business | Oblique Path",
  description: "Business process automation, AI answering services, and AI customer service agents for small and mid-sized businesses — intake, scheduling, invoicing, and CRM automation. Serving Windsor, Toronto, London, Ontario, and Michigan.",
  path: "/ai-automation",
});

export default function AIAutomationPage() {
  return <AIAutomationContent />;
}
