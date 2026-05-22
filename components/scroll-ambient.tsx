"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export function ScrollAmbient() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.7, 0.5, 0.3]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 0.8, 1, 0.7]);

  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary orb — top right, drifts up on scroll */}
      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="absolute -top-32 right-[5%] w-[700px] h-[700px] rounded-full bg-primary/[0.055] blur-[160px]"
      />
      {/* Secondary orb — lower left, drifts down on scroll */}
      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        className="absolute top-[50%] -left-32 w-[550px] h-[550px] rounded-full bg-primary/[0.04] blur-[140px]"
      />
      {/* Tertiary orb — center, subtle drift */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[25%] left-[45%] w-[350px] h-[350px] rounded-full bg-primary/[0.025] blur-[120px]"
      />
    </div>
  );
}
