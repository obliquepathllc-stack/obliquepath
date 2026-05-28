"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react";

const HIDDEN_ON = ["/contact", "/book-demo"];

export function StickyCtaBar() {
  const pathname = usePathname();
  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-20 px-4 pb-4 pt-2 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none">
      <Link href="/book-demo" className="pointer-events-auto block">
        <button className="w-full rounded-full bg-foreground text-background font-semibold text-[15px] py-4 flex items-center justify-center gap-2 active:scale-[0.97] transition-transform duration-150">
          Book a Call
          <ArrowUpRight size={16} weight="bold" />
        </button>
      </Link>
    </div>
  );
}
