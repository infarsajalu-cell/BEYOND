"use client";

import MarqueeRow from "@/components/shared/MarqueeRow";

const items = [
  "DESIGNING",
  "VIDEO PRODUCTION",
  "ANIMATED VIDEOS",
  "PROMOTIONAL VIDEOS",
  "EXPLAINER VIDEOS",
  "AI VIDEO PRODUCTION",
  "ANALOG TO DIGITAL",
  "VIDEO BROADCAST",
];

export default function ServiceTicker() {
  return (
    <section className="relative py-12 bg-[#111] border-y border-white/5 overflow-hidden" style={{ zIndex: 20 }} id="service-ticker">
      <div className="absolute inset-0 noise-overlay" />
      <MarqueeRow items={items} direction="left" speed={35} />
      <MarqueeRow items={items} direction="right" speed={40} outline />
    </section>
  );
}
