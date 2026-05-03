"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "@/components/shared/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    title: "CINEMATIC BRANDING",
    category: "Video Production",
    video: "https://player.vimeo.com/external/370331493.sd.mp4?s=33d548f0de9627885b565a04a37f5979c3d49466&profile_id=139&oauth2_token_id=57447761",
    image: "/assets/home/featured1.png",
    description: "Defining luxury visual narratives through state-of-the-art cinematography.",
  },
  {
    title: "DIGITAL FRONTIERS",
    category: "Web Development",
    video: "https://player.vimeo.com/external/517090025.sd.mp4?s=f02271846f497745778a48b307d0f19c00b050d2&profile_id=165&oauth2_token_id=57447761",
    image: "/assets/home/featured2.png",
    description: "High-performance digital experiences crafted with architectural precision.",
  },
  {
    title: "LUXURY MOTION",
    category: "App Design",
    video: "https://player.vimeo.com/external/403567848.sd.mp4?s=7b9264177d4681640a232f30501a3511b8b8095b&profile_id=165&oauth2_token_id=57447761",
    image: "/assets/home/featured3.png",
    description: "Fluid mobile interactions designed for the modern digital landscape.",
  },
];

export default function FeaturedWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container || !pinWrapperRef.current) return;

    const scrollWidth = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: pinWrapperRef.current, // Pin the inner wrapper, not the section
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#0a0a0a] overflow-hidden" id="featured-works">
      {/* Dediciated Pin Wrapper */}
      <div ref={pinWrapperRef} className="w-full h-screen overflow-hidden flex flex-col justify-center">
        <div className="px-6 lg:px-10 mb-12">
          <SectionHeading
            eyebrow="Selected Projects"
            title="FEATURED WORKS"
            subtitle="From Our Production Company"
            centered={false}
          />
        </div>

        <div ref={containerRef} className="flex gap-8 px-6 lg:px-10 will-change-transform">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Video Hover Effect */}
                <video
                  src={work.video}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />

                <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-[#0a0a0a]/10 transition-all duration-700 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 pointer-events-none">
                  <span className="text-xs tracking-[0.2em] text-[#c9a84c] uppercase">
                    View Project →
                  </span>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[#c9a84c]/0 group-hover:border-[#c9a84c]/30 transition-all duration-500 z-10 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#c9a84c]/0 group-hover:border-[#c9a84c]/30 transition-all duration-500 z-10 pointer-events-none" />
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] text-[#c9a84c] uppercase mb-2">
                    {work.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl tracking-[0.08em] group-hover:text-[#c9a84c] transition-colors duration-300 font-display">
                    {work.title}
                  </h3>
                </div>
                <div className="text-[#888] text-xs max-w-[200px] hidden md:block">
                  {work.description}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="flex-shrink-0 w-[20vw]" />
        </div>
      </div>
    </section>
  );
}
