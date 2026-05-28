"use client";

import { useEffect } from "react";

export function ConsoleEgg() {
  useEffect(() => {
    console.log(
      "%c Hey. You found the console. ",
      "background:#09090b;color:#818cf8;font-size:15px;font-weight:700;padding:6px 12px;border-radius:6px;"
    );
    console.log(
      "%c We automate repetitive things. Opening DevTools was the most manual thing you did today. ",
      "color:#a1a1aa;font-size:12px;"
    );
    console.log(
      "%c obliquepath.dev/careers — we're building. ",
      "color:#6366f1;font-size:12px;"
    );
  }, []);
  return null;
}
