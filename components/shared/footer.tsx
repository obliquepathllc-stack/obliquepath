// Footer — luxury editorial redesign

import Link from "next/link";

const services = [
  { name: "AI Automation", href: "/ai-automation" },
  { name: "Custom Web Solutions", href: "/custom-web-solutions" },
  { name: "Mobile App Development", href: "/services" },
  { name: "AI B2B Lead Generation", href: "/services" },
  { name: "Process Optimization", href: "/process-optimization" },
  { name: "Tech Support", href: "/tech-support" },
  { name: "Healthcare Staffing", href: "/healthcare" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const locations = [
  "Windsor, ON (HQ)",
  "Toronto, ON",
  "San Francisco, CA",
  "Detroit, MI",
  "Chicago, IL",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-4 lg:px-16">

        {/* Top — wordmark + tagline */}
        <div className="container max-w-6xl mx-auto py-12 md:py-16 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Link href="/" className="font-heading font-bold text-3xl tracking-tight">
                <span className="gradient-text">Oblique</span>
                <span className="text-foreground">path</span>
              </Link>
              <p className="mt-3 text-muted-foreground text-sm max-w-sm leading-relaxed">
                AI automation systems and custom platforms for businesses done running manually.
              </p>
            </div>
            <Link href="/book-demo">
              <button className="rounded-full bg-primary text-primary-foreground font-semibold px-6 py-3 text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-200 whitespace-nowrap">
                Book a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* Middle — nav columns */}
        <div className="container max-w-6xl mx-auto py-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Services */}
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground font-medium mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground font-medium mb-5">Company</p>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground font-medium mb-5">Locations</p>
            <ul className="space-y-3">
              {locations.map((loc) => (
                <li key={loc} className="text-sm text-foreground/70">{loc}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground font-medium mb-5">Get in Touch</p>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link href="mailto:info@obliquepath.dev" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200 break-all">
                  info@obliquepath.dev
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="container max-w-6xl mx-auto py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Oblique Path LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
