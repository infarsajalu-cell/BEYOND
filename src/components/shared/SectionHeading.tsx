"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 lg:mb-16 ${centered ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {eyebrow && (
        <div className="text-[0.65rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-4">
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl md:text-5xl lg:text-6xl tracking-wider leading-tight text-white font-display`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-sm md:text-base text-[#888] max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
