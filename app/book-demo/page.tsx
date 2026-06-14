import { buildMetadata } from "@/lib/metadata";
import { BookDemoContent } from "./book-demo-content";

export const metadata = buildMetadata({
  title: "Book a Discovery Call | Oblique Path",
  description: "Book a free 30-minute discovery call with Oblique Path. Tell us what you want automated — we scope it, price it, and tell you if it's worth building. No pitch, just clarity.",
  path: "/book-demo",
});

export default function BookDemoPage() {
  return <BookDemoContent />;
}
