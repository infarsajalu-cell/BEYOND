"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

interface ServiceFeature {
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ShowcaseItem {
  title: string;
  description: string;
  image?: string;
}

interface ServiceDetailProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  accentColor: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  showcaseItems?: ShowcaseItem[];
  heroImage?: string;
}

export default function ServiceDetail({
  eyebrow,
  title,
  titleAccent,
  description,
  accentColor,
  features,
  process,
  showcaseItems,
  heroImage,
}: ServiceDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bg = heroRef.current?.querySelector(".hero-bg");
      if (bg) {
        gsap.to(bg, {
          y: 80,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0a0a0a]" id="service-detail-hero">
        <div className="hero-bg absolute inset-0">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={title + " Banner"}
              fill
              className="object-cover opacity-40 brightness-50"
              priority
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-[#0d2b35]/20 via-[#0a0a0a] to-[#0a0a0a] noise-overlay" />
              <div className="absolute inset-0 shimmer" />
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="text-[0.65rem] tracking-[0.4em] uppercase mb-6 font-display" style={{ color: accentColor }}>
              {eyebrow}
            </div>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl tracking-wider leading-[0.95] font-display"
            >
              {title}
              <br />
              <span className="text-gradient-gold">{titleAccent}</span>
            </h1>
            <p className="mt-8 text-sm text-[#888] leading-relaxed max-w-xl">
              {description}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 text-[#0a0a0a] text-xs tracking-[0.3em] uppercase font-bold rounded transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg"
              style={{ backgroundColor: accentColor, boxShadow: `0 10px 30px -10px ${accentColor}44` }}
            >
              Start A Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-36 bg-[#111]" id="service-features">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl tracking-wider font-display">WHAT WE OFFER</h2>
            <div className="mt-4 h-px w-24 bg-[#c9a84c]/40 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#c9a84c]/20 transition-all duration-500 h-full group relative overflow-hidden">
                  <div
                    className="text-4xl tracking-wider mb-2 opacity-10 font-display absolute top-4 right-6 group-hover:opacity-40 transition-opacity"
                    style={{ color: accentColor }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    className="text-xl tracking-wider mb-4 group-hover:text-[#c9a84c] transition-colors font-display"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#888] leading-relaxed relative z-10">{feature.description}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#c9a84c]/20 group-hover:w-full transition-all duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase - FULL WIDTH CINEMATIC */}
      {showcaseItems && showcaseItems.length > 0 && (
        <section className="bg-[#0a0a0a]" id="service-showcase">
          <div className="px-6 lg:px-10 py-24 max-w-[1400px] mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-5xl lg:text-7xl tracking-widest font-display"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              SELECTED SHOWCASE
            </motion.h2>
          </div>

          <div className="relative">
            {showcaseItems.map((item, i) => (
              <div key={item.title} className="relative h-[80vh] md:h-screen w-full overflow-hidden flex items-center border-t border-white/5">
                {/* Background Image - Full Width */}
                <div className="absolute inset-0">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#111]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/80" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Large Translucent Background Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] select-none pointer-events-none whitespace-nowrap z-10">
                  <h3 className="text-[20vw] font-display tracking-[-0.02em] text-white">
                    {/* SHOWCASE */}
                  </h3>
                </div>

                {/* Content Container */}
                <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-10">
                  <div className={`flex flex-col ${i % 2 !== 0 ? "items-end text-right" : "items-start"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="max-w-2xl"
                    >
                      <div className={`text-[0.6rem] tracking-[0.6em] text-[#c9a84c] uppercase mb-6 flex items-center gap-4 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                        <span className="w-12 h-px bg-[#c9a84c]/40" />
                        Featured Project
                      </div>
                      <h3 className="text-4xl md:text-7xl lg:text-8xl tracking-wider font-display text-white uppercase leading-[0.9] mb-8">
                        {item.title}
                      </h3>
                      <p className={`text-sm md:text-base text-white/50 tracking-wide leading-relaxed max-w-lg mb-10 ${i % 2 !== 0 ? "ml-auto" : ""}`}>
                        {item.description}
                      </p>
                      
                      <a
                        href="/portfolio"
                        className={`inline-flex items-center gap-6 group ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
                      >
                        <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c] transition-all duration-500 ${i % 2 !== 0 ? "rotate-180" : ""}`}>
                          <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                        <span className="text-[0.65rem] tracking-[0.4em] text-white/70 uppercase group-hover:text-white transition-colors">
                          View Project Details
                        </span>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-24 lg:py-36 bg-[#111] relative overflow-hidden" id="service-process">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-transparent h-32" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Execution" title="OUR PROCESS" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {process.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="relative group p-8 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#c9a84c]/10 transition-all duration-500">
                  <div
                    className="text-5xl tracking-wider mb-6 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 font-display"
                    style={{ color: accentColor }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-xl tracking-wider mb-4 group-hover:text-white transition-colors font-display"
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#888] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-48 bg-[#0a0a0a] relative overflow-hidden" id="service-cta">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-7xl lg:text-8xl tracking-wider mb-10 font-display"
            >
              READY TO <span className="text-gradient-gold">BEYOND?</span>
            </h2>
            <p className="text-sm text-[#888] max-w-lg mx-auto mb-12 leading-relaxed">
              Elevate your brand with cinematic visual content and cutting-edge digital solutions. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="px-10 py-5 bg-[#c9a84c] text-[#0a0a0a] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#c9a84c]/90 transition-all rounded w-full sm:w-auto"
              >
                Get A Quote
              </a>
              <a
                href="/services"
                className="px-10 py-5 border border-white/10 text-white text-xs tracking-[0.3em] uppercase font-bold hover:bg-white/5 transition-all rounded w-full sm:w-auto"
              >
                Other Services
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[120px]" style={{ zIndex: 0 }} />
      </section>
    </>
  );
}
