import { buildMetadata } from "@/lib/metadata";
import { AIAutomationContent } from "./ai-automation-content";

export const metadata = buildMetadata({
  title: "AI Automation for Small Business | Windsor, Ontario | Oblique Path",
  description: "AI automation systems for small and mid-sized businesses — intake, scheduling, invoicing, voice agents, and CRM automation. Serving Windsor, Toronto, London, Ontario, and Michigan.",
  path: "/ai-automation",
});

export default function AIAutomationPage() {
  return <AIAutomationContent />;
}
