"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ViewTransitionLink({ href, children, className }: Props) {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (!("startViewTransition" in document)) {
        router.push(href);
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => {
        router.push(href);
      });
    },
    [href, router]
  );

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
