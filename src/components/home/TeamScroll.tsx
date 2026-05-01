"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";

const team = [
  { name: "JUSTINE", role: "Founder & CEO", color: "from-[#c9a84c]/20", image: "/assets/home/team1.png" },
  { name: "LORAINE", role: "Project Coordinator & Creative Director", color: "from-[#1e3a4a]/40", image: "/assets/home/team2.png" },
  { name: "JAIBIN", role: "Cinematographer", color: "from-[#0d2b35]/40", image: "/assets/home/team3.png" },
  { name: "PRASANTH", role: "Creative Designer", color: "from-[#1e3a4a]/30", image: "/assets/home/team4.png" },
  { name: "LAJEESH", role: "Creative Designer", color: "from-[#0d2b35]/30", image: "/assets/home/team5.png" },
];

export default function TeamScroll() {
  return (
    <section className="relative py-24 lg:py-36 bg-[#111] overflow-hidden" id="team">
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 mb-12" style={{ zIndex: 10 }}>
        <SectionHeading
          eyebrow="The People"
          title="PRODUCTION TEAM"
          subtitle="Exceptional talent is the cornerstone of everything we create. Our team brings decades of combined experience in multimedia production."
        />
      </div>

      {/* Team Cards Grid - Perfectly Aligned */}
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-24 gap-x-6 lg:gap-x-8 mt-12 md:mt-24">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* The "Box" background that the person breaks out of */}
              <div className="absolute inset-x-0 bottom-0 top-[15%] bg-white/[0.02] border border-white/5 rounded-2xl group-hover:border-[#c9a84c]/30 transition-all duration-500 group-hover:bg-white/[0.04]" />
              
              {/* Portrait Container */}
              <div className="relative h-[280px] sm:h-[320px] md:h-[320px] w-full overflow-visible pointer-events-none">
                <div className="absolute inset-0 -top-16 group-hover:-top-20 transition-all duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 drop-shadow-2xl"
                  />
                </div>
                
                {/* Background Shadow/Glow for depth */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-2/3 bg-gradient-to-t from-[#c9a84c]/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              </div>

              {/* Info - positioned within the "Box" */}
              <div className="relative p-6 pt-2 text-center">
                <h4 className="text-xl md:text-2xl tracking-[0.1em] text-white group-hover:text-[#c9a84c] transition-colors duration-300 font-display">
                  {member.name}
                </h4>
                <p className="text-[0.6rem] md:text-[0.65rem] tracking-[0.2em] text-[#888] uppercase mt-2 font-medium">
                  {member.role}
                </p>
                
                {/* Minimal line accent */}
                <div className="w-8 h-0.5 bg-[#c9a84c]/30 mx-auto mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
