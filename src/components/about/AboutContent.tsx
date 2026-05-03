"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import TeamScroll from "../home/TeamScroll";

const stats = [
  { label: "YEARS OF EXCELLENCE", value: "10+" },
  { label: "PROJECTS COMPLETED", value: "500+" },
  { label: "CREATIVE EXPERTS", value: "25+" },
  { label: "REEL AWARDS", value: "12" },
];

const milestones = [
  { year: "2016", title: "FOUNDATION", description: "Beyond The Borders was established in London as a small creative boutique." },
  { year: "2018", title: "EXPANSION", description: "Opened our first dedicated studio space and expanded our cinematography team." },
  { year: "2021", title: "DIGITAL SHIFT", description: "Launched our full-scale web and app development division." },
  { year: "2024", title: "GLOABL REACH", description: "Serving clients across 5 continents with a 24/7 production cycle." },
];

export default function AboutContent() {
  return (
    <>
      {/* About Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0a0a0a] overflow-hidden" id="about-hero">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
          alt="Modern London Architecture"
          fill
          className="object-cover opacity-50 brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/70 to-[#0a0a0a] noise-overlay" />

        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none overflow-hidden">
          <h3 className="text-[20vw] font-display tracking-[-0.02em] text-white whitespace-nowrap">BEYOND</h3>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="text-[0.65rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-6">
              Our Legacy
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-wider leading-[0.95] font-display">
              WE ARE
              <br />
              <span className="text-gradient-gold">STORYTELLERS</span>
            </h1>
            <p className="mt-8 text-sm text-white/50 leading-relaxed max-w-xl">
              A decade of cinematic vision, crafted into every frame we create.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 lg:py-36 bg-[#0a0a0a]" id="brand-story">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                eyebrow="The Story"
                title="BEYOND THE LIMITS"
                centered={false}
              />
              <p className="text-sm text-[#888] leading-relaxed mb-6">
                Founded in the heart of London, Beyond The Borders was born from a simple vision: to bridge the gap between imagination and reality. We believe that every story, no matter how complex, deserves to be told with cinematic precision and creative flair.
              </p>
              <p className="text-sm text-[#888] leading-relaxed mb-6">
                Over the past decade, we have evolved from a niche video production boutique into a full-service multimedia powerhouse. Our multidisciplinary team combines technical mastery with artistic intuition to deliver content that doesn&apos;t just look good—it performs.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl md:text-4xl text-white mb-2 font-display">{stat.value}</div>
                    <div className="text-[0.55rem] tracking-[0.2em] text-[#c9a84c] uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl [clip-path:polygon(0_0,100%_50%,0_100%)]">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
                  alt="Creative Team in London Studio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/20" />
                <div className="absolute inset-0 shimmer" />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#c9a84c]/20 rounded-xl" style={{ zIndex: -1 }} />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c9a84c]/5 border border-[#c9a84c]/10 rounded-xl" style={{ zIndex: -1 }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CINEMATIC OVERLAPPING SECTIONS ─── */}
      <section className="relative overflow-visible z-20" id="about-cinematic">

        {/* 1. PHOTOGRAPHY — Full Width */}
        <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/about/multimedia.png"
              alt="Photography"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Ghost Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none pointer-events-none overflow-hidden whitespace-nowrap z-10">
            <motion.h3
              className="text-[14vw] font-display tracking-[-0.02em] text-white"
              initial={{ x: "-5%" }}
              whileInView={{ x: "5%" }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            >
              CREATIVE POWERS
            </motion.h3>
          </div>

          <div className="relative z-20 h-full w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <div className="text-[0.6rem] tracking-[0.6em] text-[#c9a84c] uppercase mb-4 flex items-center gap-3">
                <span className="w-10 h-px bg-[#c9a84c]/40" /> Limitless Creativity
              </div>
              <h2 className="text-4xl md:text-7xl tracking-wider font-display text-white uppercase leading-[0.9] mb-6">
                OUR CREATIVE <br />
                <span className="text-gradient-gold">POWERS</span>
              </h2>
              <p className="text-sm text-white/50 tracking-wide leading-relaxed max-w-md mb-8">
                Driven by imagination and refined by expertise — we harness every creative discipline to craft stories that captivate, inspire, and leave a lasting impact.
              </p>
              <Link href="/services/video-production" className="inline-flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c] transition-all duration-500">
                  <svg className="w-4 h-4 text-white group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <span className="text-[0.65rem] tracking-[0.4em] text-white/60 uppercase group-hover:text-white transition-colors">Our Services</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 2. BROADCAST — Right-Aligned, Overlapping */}
        <div className="relative h-[70vh] md:h-[85vh] w-full -mt-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/about/about_banner.png"
              alt="Broadcast"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
            <div className="absolute inset-0 bg-black/35" />
          </div>

          {/* Ghost Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none pointer-events-none overflow-hidden whitespace-nowrap z-10">
            <motion.h3
              className="text-[14vw] font-display tracking-[-0.02em] text-white"
              initial={{ x: "5%" }}
              whileInView={{ x: "-5%" }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            >
              MULTIMEDIA
            </motion.h3>
          </div>

          <div className="relative z-20 h-full w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-center items-end text-right">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <div className="text-[0.6rem] tracking-[0.6em] text-[#c9a84c] uppercase mb-4 flex items-center justify-end gap-3">
                Full-Spectrum Creative <span className="w-10 h-px bg-[#c9a84c]/40" />
              </div>
              <h2 className="text-4xl md:text-7xl tracking-wider font-display text-white uppercase leading-[0.9] mb-6">
                MULTIMEDIA <br />
                <span className="text-gradient-gold">PRODUCTION</span>
              </h2>
              <p className="text-sm text-white/50 tracking-wide leading-relaxed max-w-md ml-auto mb-8">
                From concept to final delivery — we produce video, animation, photography, and digital content at the highest level of craft and quality.
              </p>
              <div className="flex justify-end">
                <Link href="/services/video-production" className="inline-flex items-center gap-4 group flex-row-reverse">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c] transition-all duration-500">
                    <svg className="w-4 h-4 text-white group-hover:text-black rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <span className="text-[0.65rem] tracking-[0.4em] text-white/60 uppercase group-hover:text-white transition-colors">Our Services</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3. EVENT DESIGN — Centered, Overlapping */}
        <div className="relative h-[70vh] md:h-[85vh] w-full -mt-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/home/eventdesign.png"
              alt="Event Design"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>

          <div className="relative z-20 h-full w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-24 text-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="text-[0.6rem] tracking-[0.8em] text-[#c9a84c] uppercase mb-6">
                Experiential Spaces
              </div>
              <h2 className="text-4xl md:text-8xl tracking-wider font-display text-white uppercase mb-8">
                EVENT <span className="text-gradient-gold">DESIGN</span>
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="text-[0.65rem] tracking-[0.4em] text-white/50 uppercase">CONCEPTUALIZATION</div>
                <div className="w-px h-4 bg-white/20 hidden md:block" />
                <div className="text-[0.65rem] tracking-[0.4em] text-white/50 uppercase">EXECUTION</div>
                <div className="w-px h-4 bg-white/20 hidden md:block" />
                <div className="text-[0.65rem] tracking-[0.4em] text-white/50 uppercase">STYLING</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-36 bg-[#111] noise-overlay" id="timeline">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Evolution" title="OUR JOURNEY" />

          <div className="relative mt-20">
            {/* Horizontal Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/10 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {milestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="relative pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Dot */}
                  <div className="absolute top-[-4px] left-0 w-2 h-2 rounded-full bg-[#c9a84c] hidden lg:block" />
                  
                  <div className="text-3xl text-[#c9a84c] mb-4 font-display">{item.year}</div>
                  <h3 className="text-xl tracking-wider mb-4 font-display">{item.title}</h3>
                  <p className="text-xs text-[#888] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TeamScroll/>

      {/* Team CTA */}
      <section className="py-24 lg:py-36 bg-[#0a0a0a]" id="about-cta">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-wider mb-8 font-display">
            READY TO START YOUR
            <br />
            <span className="text-gradient-gold">NEXT CHAPTER?</span>
          </h2>
          <p className="text-sm text-[#888] leading-relaxed mb-12 max-w-xl mx-auto">
            Whether you&apos;re looking to redefine your brand, create a stunning film, or launch a world-class digital product, we&apos;re here to make it happen.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a84c] text-[#0a0a0a] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#c9a84c]/90 transition-all rounded"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
