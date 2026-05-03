"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OverlappingSection() {
  return (
    <section className="relative overflow-visible -mt-29 z-20" id="special-showcase">
      {/* Top Section (Cinematic Visual) - Full Width */}
      <div className="relative h-[60vh] md:h-[84vh] w-full overflow-hidden">
        <div className="absolute inset-0">
        <Image
          src="/assets/home/whybeyondbg.png"
          alt="Cinematic Background"
          fill
          className="object-cover"
          priority
        /></div>
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <p className="text-[0.7rem] tracking-[0.4em] text-white/70 uppercase mb-4">
              Utilise stunning 3D animation to tell your story visually and impressively.
            </p>
            <Link
              href="/services/animation"
              className="inline-flex items-center justify-center min-w-[320px] px-8 py-2.5 border border-white/60 text-white text-[0.65rem] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-700"
            >
              3D ANIMATION SERVICE
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section (Full Screen Image Visual) */}
      <div className="relative h-[70vh] md:h-[90vh] w-full -mt-25 overflow-hidden">
        {/* Full Screen Explainers Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/home/explainers2.png"
            alt="Explainer Content"
            fill
            className="object-cover"
          />
          <div className="absolute opacity-15 inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/20 to-[#0a0a0a]" />
          {/* <div className="absolute inset-0 bg-black/40 " /> */}
        </div>

        {/* Large Background Typography - High Visibility */}
        <div className="absolute top-[20%] left-0 w-full select-none pointer-events-none opacity-[0.15] overflow-hidden whitespace-nowrap z-10">
          <motion.h3 
            className="text-[25vw] font-display tracking-[-0.02em] text-center text-white leading-none"
            initial={{ x: "10%" }}
            whileInView={{ x: "-10%" }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
          >
            DIGITAL CONTENT
          </motion.h3>
        </div>

        <div className="relative z-20 h-full w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-16 md:pb-24">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            {/* Left side Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[0.6rem] tracking-[0.5em] text-[#c9a84c] uppercase mb-6">
                EXPLAINERS
              </div>
              <h3 className="text-3xl md:text-6xl tracking-widest font-display text-white uppercase leading-[0.95]">
                ENGAGING <br />
                <span className="text-gradient-gold">VISUALS</span>
              </h3>
            </motion.div>

            {/* Right side Content */}
            <motion.div 
              className="text-left lg:text-right max-w-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl tracking-[0.2em] font-display text-white uppercase mb-4">
                PROFESSIONAL LOCATION FILMING SERVICE
              </h3>
              <p className="text-[0.65rem] text-white/60 tracking-widest uppercase mb-6">
                Crafting cinematic narratives through precision filming and visual mastery.
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-4 text-[0.65rem] tracking-[0.4em] text-[#c9a84c] uppercase group"
              >
                VIEW CASE STUDIES
                <span className="w-10 h-px bg-[#c9a84c]/40 group-hover:w-16 transition-all duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
    </section>
  );
}
