"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OverlappingSection2() {
  return (
    <section className="relative overflow-visible -mt-29 z-20" id="special-showcase">
      {/* 1. TOP SECTION: BROADCASTING VIDEO */}
      <div className="relative h-[60vh] md:h-[84vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/home/broadcast.png"
            alt="Broadcasting Visual"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-center items-end text-right">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <div className="text-[0.6rem] tracking-[0.5em] text-[#c9a84c] uppercase mb-4">
              On-Air Excellence
            </div>
            <h2 className="text-4xl md:text-7xl tracking-wider font-display text-white mb-6 leading-tight">
              BROADCAST <br />
              <span className="text-gradient-gold">DESIGN</span>
            </h2>
            <p className="text-[0.7rem] tracking-[0.3em] text-white/70 uppercase mb-8 max-w-md ml-auto">
              Cutting-edge visual solutions for modern broadcasting and digital media.
            </p>
            <a
              href="/services"
              className="inline-flex items-center justify-center min-w-[280px] px-8 py-3 border border-white/60 text-white text-[0.6rem] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-700"
            >
              EXPLORE BROADCAST
            </a>
          </motion.div>
        </div>
      </div>

      {/* 2. MIDDLE SECTION: PHOTOGRAPHY */}
      <div className="relative h-[65vh] md:h-[85vh] w-full -mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/home/PHOTOGRAPHY_BG_.png"
            alt="Photography Showcase"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 opacity-10 bg-black/40" />
          <div className="absolute inset-0 opacity-55 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        </div>

        <div className="absolute top-[15%] left-0 w-full select-none pointer-events-none opacity-[0.12] overflow-hidden whitespace-nowrap z-10">
          <motion.h3 
            className="text-[22vw] font-display tracking-[-0.02em] text-center text-white leading-none"
            initial={{ x: "-10%" }}
            whileInView={{ x: "10%" }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
          >
            PHOTOGRAPHY
          </motion.h3>
        </div>

        <div className="relative z-20 h-full w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-center pb-12">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[0.6rem] tracking-[0.5em] text-[#c9a84c] uppercase mb-6">
                Visual Artistry
              </div>
              <h3 className="text-3xl md:text-6xl tracking-widest font-display text-white uppercase leading-[0.95]">
                CAPTURING <br />
                <span className="text-gradient-gold">THE MOMENT</span>
              </h3>
            </motion.div>

            <motion.div 
              className="text-left lg:text-right max-w-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[0.65rem] text-white/60 tracking-widest uppercase mb-6 leading-relaxed">
                From high-fashion editorials to cinematic commercial sets, we define visual narratives.
              </p>
              <div className="h-px w-full bg-white/10 mb-6 lg:ml-auto" />
              <div className="text-[0.6rem] tracking-[0.4em] text-white/40 uppercase">Professional Stills</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION: EVENT DESIGN */}
      <div className="relative h-[65vh] md:h-[85vh] w-full -mt-20 overflow-hidden">
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

        <div className="relative z-20 h-full w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="text-[0.6rem] tracking-[0.8em] text-[#c9a84c] uppercase mb-6">
              Experiential Spaces
            </div>
            <h3 className="text-4xl md:text-8xl tracking-wider font-display text-white uppercase mb-8">
              EVENT <span className="text-gradient-gold">DESIGN</span>
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="text-[0.65rem] tracking-[0.4em] text-white/50 uppercase">CONCEPTUALIZATION</div>
              <div className="text-[0.65rem] tracking-[0.4em] text-white/50 uppercase">EXECUTION</div>
              <div className="text-[0.65rem] tracking-[0.4em] text-white/50 uppercase">STYLING</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Final Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
    </section>
  );
}
