"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BrandIntro() {
  return (
    <section className="relative py-24 lg:py-36 bg-[#0a0a0a] overflow-hidden" id="brand-intro">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#0d2b35]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Image (5 columns) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="animate-float">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/brand-studio.png"
                  alt="Beyond The Borders Production Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#c9a84c]/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#c9a84c]/30" />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#c9a84c]/10 rounded-lg" style={{ zIndex: -1 }} />
          </motion.div>

          {/* Right: Text (7 columns) */}
          <div className="lg:col-span-7 lg:pl-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[0.6rem] md:text-[0.7rem] tracking-[0.4em] md:tracking-[0.5em] text-[#c9a84c] uppercase mb-6 md:mb-8"
            >
              Beyond The Borders
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-7xl tracking-[0.06em] leading-[1.1] mb-8 md:mb-10 font-display"
            >
              MULTIMEDIA
              <br />
              <span className="text-gradient-gold">PRODUCTION HOUSE</span>
            </motion.h2>

            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <motion.p
                className="text-base text-[#ccc] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We're a London-based full-service multimedia production company, crafting tailored, 
                show-stopping content that turns heads and drives results.
              </motion.p>
              
              <motion.p
                className="text-sm text-[#888] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                From cinematic brand films to dynamic social content, we bring your vision to life (and beyond) with precision and creative flair. 
                Our team of seasoned professionals combines cutting-edge technology with artistic storytelling 
                to deliver content that resonates and converts.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-4 text-[0.65rem] tracking-[0.4em] text-[#c9a84c] uppercase hover:gap-6 transition-all duration-300 group"
              >
                DISCOVER OUR STORY
                <span className="w-10 h-px bg-[#c9a84c]/40 group-hover:w-16 transition-all duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
