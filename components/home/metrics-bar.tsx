"use client";

// Metrics Bar — editorial full-width stats (taste-skill: no bg boxes, large numbers, dividers)

import { motion } from "framer-motion";
import Image from "next/image";

const metrics = [
  { value: "70%", label: "Reduction in no-shows for service businesses" },
  { value: "2×", label: "Increase in closed deals through automated follow-up" },
  { value: "24 hrs", label: "Saved weekly per client on average" },
  { value: "<6 wks", label: "Typical time to first live deployment" },
];

const clientLogos = [
  { name: "First Point Cleaners", src: "/clients-logo/first-point-cleaners.jpg" },
  { name: "BuildPath", src: "/clients-logo/buildpath.svg" },
  { name: "Anitrous", src: "/clients-logo/anitrous.svg" },
  { name: "Aerrand", src: "/clients-logo/errand.svg" },
  { name: "Harbor One Capital", src: "/clients-logo/hoc.svg" },
  { name: "Junk Cycle", src: "/clients-logo/junk-cycle 1.jpg" },
  { name: "Growtt", src: "/clients-logo/growtt.png" },
  { name: "AQUAPROX Africa", src: "/clients-logo/aquaprox-africa.jpg" },
];

export function MetricsBar() {
  return (
    <section className="px-4 lg:px-16 py-20 md:py-28 border-y border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col gap-2 px-0 md:px-8 py-8 md:py-0 first:pl-0 last:pr-0"
            >
              <span className="text-5xl md:text-6xl font-bold gradient-text leading-none tracking-tighter">
                {metric.value}
              </span>
              <span className="text-sm text-muted-foreground leading-snug max-w-[160px]">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 border-t border-border pt-6"
        >
          <p className="text-xs text-muted-foreground/60 mb-6">
            Based on outcomes across active client engagements
          </p>
          <div
            className="overflow-hidden w-full"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <motion.div
              className="flex items-center gap-12 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={`${logo.name}-${i}`} className="shrink-0 h-6 opacity-40 grayscale">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={80}
                    height={24}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
