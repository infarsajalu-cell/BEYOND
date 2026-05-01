"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  {
    number: "01",
    title: "CINEMATIC MASTERCLASS",
    description: "Every frame we produce is treated like a piece of art. We bring Hollywood-grade color science and composition to digital brands.",
    stat: "4K RAW",
    statLabel: "Production Quality",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "STRATEGIC STORYTELLING",
    description: "We don't just shoot video; we architect narratives. Our content is engineered to resonate emotionally while driving business conversions.",
    stat: "100%",
    statLabel: "Engagement Driven",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    number: "03",
    title: "RAPID PRECISION",
    description: "In a world of fast-moving trends, we deliver high-end content at the speed of social media without sacrificing our premium standards.",
    stat: "24h",
    statLabel: "Turnaround Available",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "GLOBAL PRODUCTION",
    description: "Based in London, operating globally. Our network of talent and equipment allows us to film anywhere on the planet with local expertise.",
    stat: "GLOBAL",
    statLabel: "Network Scope",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2.5 2.5 0 002.5-2.5V4a2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = e.currentTarget;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative group h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      <div className="relative h-full p-8 lg:p-10 rounded-2xl bg-[#111] border border-white/5 overflow-hidden transition-colors hover:border-[#c9a84c]/30">
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(201, 168, 76, 0.08), transparent 40%)`,
          }}
        />

        {/* Feature Number */}
        <div className="absolute top-8 right-8 text-[0.65rem] tracking-[0.4em] text-[#c9a84c] font-display opacity-40">
          {feature.number}
        </div>

        {/* Icon */}
        <div className="text-[#c9a84c] mb-6 group-hover:scale-110 transition-transform duration-500">
          {feature.icon}
        </div>

        {/* Stat */}
        <div className="text-4xl lg:text-5xl tracking-[0.05em] text-white font-display mb-1">
          {feature.stat}
        </div>
        <div className="text-[0.55rem] tracking-[0.2em] text-[#888] uppercase mb-8">
          {feature.statLabel}
        </div>

        {/* Title */}
        <h3 className="text-xl tracking-wider text-white font-display mb-4 group-hover:text-[#c9a84c] transition-colors duration-300">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#888] leading-relaxed">
          {feature.description}
        </p>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      </div>
    </motion.div>
  );
};

export default function WhyUs() {
  return (
    <section className="relative py-24 lg:py-36 bg-[#0a0a0a] overflow-hidden" id="why-us">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">

        <SectionHeading
          eyebrow="The Advantage"
          title="WHY BEYOND THE BORDERS?"
          subtitle="Redefining the standards of multimedia production with cinematic precision and strategic innovation."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
