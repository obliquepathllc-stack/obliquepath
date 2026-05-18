"use client";

// Navbar — floating glass pill (taste-skill: Fluid Island Nav pattern)
// Desktop: centered pill, max-w-5xl, rounded-full, glass morphism
// Mobile:  hamburger → X morph → full-screen overlay with staggered link reveals

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, ArrowUpRight } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Stagger variants for mobile menu links
const overlayVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

const linkVariants = {
  closed: { opacity: 0, y: 24 },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 24 },
  },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── FLOATING PILL ────────────────────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 28 }}
          className={cn(
            "pointer-events-auto w-full max-w-5xl rounded-full flex items-center justify-between px-5 py-3 transition-all duration-500",
            scrolled
              ? "bg-background/75 backdrop-blur-2xl border border-border/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              : "bg-background/40 backdrop-blur-xl border border-border/20"
          )}
        >
          {/* Logo */}
          <Link href="/" className="font-heading font-bold text-xl shrink-0">
            <span className="gradient-text">Oblique</span>
            <span>path</span>
          </Link>

          {/* Desktop nav links — centered */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-1.5 text-sm rounded-full transition-colors duration-200",
                  pathname === item.href
                    ? "text-foreground font-medium"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-foreground/[0.07]"
                    transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right: CTA + theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            {/* Book demo CTA (desktop only) */}
            <Link href="/book-demo" className="hidden md:block">
              <button className="rounded-full bg-foreground text-background text-sm font-medium px-5 py-2 flex items-center gap-1.5 hover:opacity-80 active:scale-[0.97] transition-all duration-200 group">
                Get Started
                <ArrowUpRight size={13} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </Link>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full h-9 w-9"
            >
              <Sun size={16} weight="light" className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon size={16} weight="light" className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Hamburger (mobile only) — morphs to X */}
            <button
              className="md:hidden relative w-9 h-9 rounded-full border border-border/40 flex flex-col items-center justify-center gap-1.5 hover:bg-foreground/5 transition-colors duration-200"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                className="block w-4 h-[1.5px] bg-foreground rounded-full origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                className="block w-4 h-[1.5px] bg-foreground rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                className="block w-4 h-[1.5px] bg-foreground rounded-full origin-center"
              />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* ── MOBILE FULL-SCREEN OVERLAY ───────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-3xl md:hidden flex flex-col"
          >
            {/* Subtle gradient orb */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-500/[0.06] rounded-full blur-[80px] pointer-events-none" />

            {/* Nav links — centered, large, staggered */}
            <motion.nav
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center justify-center flex-1 gap-2 relative z-10"
            >
              {navItems.map((item) => (
                <motion.div key={item.name} variants={linkVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block text-4xl font-bold py-2 px-6 transition-colors duration-200",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-foreground/30 hover:text-foreground/70"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div variants={linkVariants} className="mt-8">
                <Link href="/book-demo" onClick={() => setMenuOpen(false)}>
                  <button className="rounded-full bg-foreground text-background font-semibold px-8 py-3.5 text-base hover:opacity-85 active:scale-[0.97] transition-all duration-200">
                    Book a Demo
                  </button>
                </Link>
              </motion.div>
            </motion.nav>

            {/* Bottom: location / copyright */}
            <div className="flex items-center justify-center pb-10 text-xs text-foreground/25 tracking-wide">
              Oblique Path · AI Automation
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
