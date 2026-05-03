"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      scale: 0.8,
      opacity: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(figureRef.current, {
      y: -80,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-visible"
      id="hero"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1070351796?muted=1&autoplay=1&dnt=1&loop=1&background=1&app_id=122963&quality=1080p"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Hero Background Video"
        />
        {/* Fallback/Overlay Image for mobile or slow connections */}
        <Image
          src="/assets/home/multimediahero.jpg"
          alt="Beyond The Borders Production"
          fill
          className="object-cover opacity-20 brightness-50 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 to-transparent" />
        <div className="absolute inset-0 bg-[#0a0a0a]/20" />
      </div>

      {/* Giant Display Text Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div ref={textRef} className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-[14vw] md:text-[11vw] lg:text-[9vw] tracking-[0.1em] leading-none select-none whitespace-nowrap font-display"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            DIGITAL CONTENT
          </h1>
        </div>
      </div>

      {/* Foreground Figure */}
      <div
        ref={figureRef}
        className="absolute bottom-0 left-1/2 w-[220px] sm:w-[300px] md:w-[340px] lg:w-[300px]"
        style={{ transform: "translateX(-50%) translateY(120px)", zIndex: 10 }}
      >
        <div className="relative aspect-[3/4] rounded-t-2xl overflow-hidden">
          <Image
            src="/assets/home/logobig.png"
            alt="Creative Director"
            fill
            className="object-contain object-top"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-16 md:pt-32" style={{ zIndex: 20 }}>
        <div className="flex flex-col lg:flex-row items-start justify-between min-h-[70vh] md:min-h-[auto]">
          {/* Left */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-[0.55rem] md:text-[0.6rem] tracking-[0.4em] md:tracking-[0.5em] text-[#c9a84c] uppercase mb-4 md:mb-6">
              Beyond The Borders
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[0.08em] font-display leading-[0.95]">
              WE CRAFT
              <br />
              <span className="text-gradient-gold">CINEMATIC</span>
              <br />
              EXPERIENCES
            </h2>
            <p className="mt-6 text-xs md:text-sm text-[#888] leading-relaxed max-w-sm">
              London-based full-service multimedia production company crafting tailored,
              show-stopping content that turns heads and drives results.
            </p>
          </motion.div>
 
          {/* Right */}
          <motion.div
            className="mt-auto lg:mt-0 lg:text-right lg:self-end lg:pb-20 pb-12 lg:pb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="text-[0.5rem] md:text-[0.55rem] tracking-[0.4em] text-[#888] uppercase mb-2">
              Professional
            </div>
            <div className="text-lg md:text-2xl tracking-[0.08em] font-display mb-4">
              LOCATION FILMING SERVICE
            </div>
            <p className="text-[0.65rem] md:text-xs text-[#888] mb-6 max-w-[240px] lg:max-w-xs lg:ml-auto">
              Bringing stories to life on location, with cinematic precision and creative vision.
            </p>

            <Link
              href="/services/video-production"
              className="inline-flex items-center gap-3 px-5 md:px-6 py-2.5 md:py-3 border border-[#c9a84c]/40 text-[#c9a84c] text-[0.65rem] md:text-xs tracking-[0.3em] uppercase hover:bg-[#c9a84c]/10 transition-all duration-500 rounded group"
              id="hero-cta"
            >
              LOCATION FILMING
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ zIndex: 20 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        <motion.div
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-0.5 h-2 bg-[#c9a84c]/60 rounded-full" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
