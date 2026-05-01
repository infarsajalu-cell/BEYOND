"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Beyond The Borders transformed our brand's digital presence with a cinematic touch that we didn't think was possible. Their attention to detail in video production is simply world-class.",
    author: "Sarah Jenkins",
    role: "Marketing Director, Lumina Corp",
    logo: "LUMINA"
  },
  {
    quote: "The team's ability to blend high-end design with technical excellence is rare. They didn't just build a website; they created an immersive digital experience for our clients.",
    author: "Marcus Thorne",
    role: "Founder, Thorne Architectural Studio",
    logo: "THORNE"
  },
  {
    quote: "From the first concept to the final broadcast design, the process was seamless. They are true partners who understand the language of visual storytelling.",
    author: "Elena Rodriguez",
    role: "Executive Producer, Vanguard Media",
    logo: "VANGUARD"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 md:py-48 bg-[#0a0a0a] overflow-hidden" id="testimonials">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[0.65rem] tracking-[0.6em] text-[#c9a84c] uppercase mb-6">
              Client Voices
            </div>
            <h2 className="text-4xl md:text-7xl tracking-wider font-display text-white uppercase">
              TRUSTED BY <span className="text-gradient-gold">VISIONARIES</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            {/* Quote Marks Backdrop */}
            <div className="absolute top-0 left-0 text-[15rem] leading-none text-white opacity-[0.03] font-serif pointer-events-none select-none">
              “
            </div>

            <div className="relative w-full">
              <div className="overflow-hidden">
                <motion.div 
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="min-h-[300px] flex flex-col justify-center"
                >
                  <p className="text-xl md:text-3xl lg:text-4xl tracking-wide leading-relaxed text-white font-light italic">
                    "{testimonials[active].quote}"
                  </p>
                  
                  <div className="mt-12 flex items-center gap-6">
                    <div className="w-12 h-px bg-[#c9a84c]/40" />
                    <div>
                      <h4 className="text-lg md:text-xl text-white tracking-widest font-display uppercase">
                        {testimonials[active].author}
                      </h4>
                      <p className="text-[0.6rem] tracking-[0.3em] text-[#888] uppercase mt-1 italic">
                        {testimonials[active].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Dots */}
              <div className="mt-16 flex items-center gap-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 transition-all duration-500 ${
                      active === i ? "w-12 bg-[#c9a84c]" : "w-6 bg-white/10 hover:bg-white/30"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Side Branding/Logo - Hidden on small screens */}
            <div className="hidden lg:flex flex-col gap-12 items-end">
              {testimonials.map((item, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  className={`text-4xl font-display tracking-[0.2em] transition-all duration-500 ${
                    active === i ? "text-[#c9a84c] scale-110 opacity-100" : "text-white opacity-10 hover:opacity-30 scale-90"
                  }`}
                >
                  {item.logo}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Floor Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
    </section>
  );
}
