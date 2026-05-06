import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background z-10 relative w-full border-t border-border/50 p-4 lg:px-16">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-heading font-bold text-2xl">
                <span className="gradient-text">Oblique</span>
                <span>path</span>
              </div>
            </Link>
            <p className="mt-4 text-foreground/70 text-sm leading-relaxed">
              AI automation systems and custom platforms for businesses that are
              done running on manual.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-sm">Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/ai-automation" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/custom-web-solutions" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Custom Web Solutions
                </Link>
              </li>
              <li>
                <Link href="/process-optimization" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link href="/tech-support" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Tech Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-sm">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-bold mb-4 text-sm">Locations</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Windsor, ON <span className="text-foreground/40">(HQ)</span></span>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Toronto, ON</span>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">San Francisco, CA</span>
              </li>
              <li className="mt-3 text-xs text-foreground/45 leading-relaxed">
                Also serving Michigan &amp; Chicago
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Oblique Path. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
