import { buildMetadata } from "@/lib/metadata";
import { AIAutomationContent } from "./ai-automation-content";

export const metadata = buildMetadata({
  title: "AI Automation Services | Oblique Path",
  description: "AI automation systems that handle intake, scheduling, invoicing, CRM, and customer service — no human in the loop. Built for growing businesses in Windsor, Toronto, and beyond.",
  path: "/ai-automation",
});

export default function AIAutomationPage() {
  return <AIAutomationContent />;
}
