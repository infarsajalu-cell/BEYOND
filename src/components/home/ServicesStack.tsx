"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    number: "01", 
    title: "PHOTOGRAPHY", 
    description: "Capture life's moments with stunning clarity. From corporate events to editorial shoots, we deliver high-end visuals that tell compelling stories.", 
    image: "/assets/home/PHOTOGRAPHY_BG_.png",
    accent: "VISUAL ART",
    alignRight: false
  },
  { 
    number: "02", 
    title: "DIGITAL DESIGN", 
    description: "Creative web design, graphic design, and print solutions that seamlessly blend aesthetics and functionality. Every pixel is crafted with purpose.", 
    image: "/assets/home/webdesign.png",
    accent: "CREATIVE HUB",
    alignRight: true
  },
  { 
    number: "03", 
    title: "COMMERCIALS", 
    description: "Powerful commercial advertising that captivates your audience and drives real business results through cinematic narratives.", 
    image: "/assets/home/commercial.png",
    accent: "ADVERTISING",
    alignRight: false
  },
  { 
    number: "04", 
    title: "EXPLAINERS", 
    description: "Simplifying complex concepts through dynamic and captivating explainer videos that engage your audience from the very first frame.", 
    image: "/assets/home/explainers.png",
    accent: "STORYTELLING",
    alignRight: true
  },
  { 
    number: "05", 
    title: "ANIMATION", 
    description: "Bring your ideas to life with stunning 3D and 2D animation. Character design and motion graphics that push creative boundaries.", 
    image: "/assets/home/3d&2d.png",
    accent: "MOTION ART",
    alignRight: false
  },
  { 
    number: "06", 
    title: "BROADCAST", 
    description: "Elevate your brand with broadcast-quality video production. Television-grade content created with cinematic precision.", 
    image: "/assets/home/broadcastdesign.png",
    accent: "ON-AIR",
    alignRight: false
  },
  { 
    number: "07", 
    title: "ANALOG TO DIGITAL", 
    description: "Preserve your memories by converting analog media to pristine digital formats. Breathing new life into treasured archives.", 
    image: "/assets/home/analogtodigital.png",
    accent: "ARCHIVING",
    alignRight: true
  },
  { 
    number: "08", 
    title: "EVENT DESIGN", 
    description: "Transform events with immersive lighting and stage design. Creating unforgettable moments from concept to execution.", 
    image: "/assets/home/eventdesign.png",
    accent: "EXPERIENCE",
    alignRight: false
  },
];

export default function ServicesStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !stickyRef.current) return;
    
    const panels = gsap.utils.toArray<HTMLElement>(".service-layer");
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      // Create a single master timeline for the stacking effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: stickyRef.current,
          invalidateOnRefresh: true,
        },
      });

      // Animate each panel (except the first one) onto the stage
      panels.forEach((panel, i) => {
        if (i > 0) {
          tl.fromTo(panel, 
            { y: "100%" },
            { y: "0%", ease: "none", duration: 1 },
            i - 0.5 // staggered timing
          );
        }
      });
      
      // Floating content animations
      panels.forEach((panel, i) => {
        const content = panel.querySelector(".floating-content");
        if (content) {
          tl.fromTo(content,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 },
            i // Appear just as the panel settles
          );
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[800vh] bg-[#0a0a0a]" id="services-stack">
      <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden">
        {/* All service layers stacked on top of each other */}
        {services.map((service, i) => (
          <div
            key={service.number}
            className="service-layer absolute inset-0 w-full h-full"
            style={{ zIndex: i + 1 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority={i < 2}
              />
              {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-60" /> */}
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Large Translucent Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] select-none pointer-events-none whitespace-nowrap z-10">
              <h3 className="text-[25vw] font-display tracking-[-0.02em] text-white">
                {service.accent}
              </h3>
            </div>

            {/* Content Container */}
            <div className="floating-content relative z-20 h-full w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-center">
              <div className={`grid grid-cols-1 lg:grid-cols-1 items-end ${service.alignRight ? "text-right" : "text-left"}`}>
                <div className={`max-w-2xl ${service.alignRight ? "lg:order-2 ml-auto" : "lg:order-1"}`}>
                  <div className={`text-[0.65rem] tracking-[0.5em] text-[#c9a84c] uppercase mb-6 flex items-center gap-4 ${service.alignRight ? "justify-end" : ""}`}>
                    {!service.alignRight && <span className="w-8 h-px bg-[#c9a84c]/40" />}
                    Service {service.number}
                    {service.alignRight && <span className="w-8 h-px bg-[#c9a84c]/40" />}
                  </div>
                  <h3 className="text-4xl md:text-7xl lg:text-8xl tracking-widest font-display text-white uppercase leading-[0.9] mb-8">
                    {service.title.split(",")[0]} <br />
                    <span className="text-gradient-gold">
                      {service.title.split(",").slice(1).join(",") || ""}
                    </span>
                  </h3>
                  <p className={`text-sm md:text-base text-white/50 tracking-wide leading-relaxed max-w-lg mb-10 ${service.alignRight ? "ml-auto" : ""}`}>
                    {service.description}
                  </p>
                  
                  <a
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').split(',')[0]}`}
                    className={`inline-flex items-center gap-6 group ${service.alignRight ? "flex-row-reverse" : ""}`}
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c] transition-all duration-500">
                      <svg className={`w-4 h-4 text-white group-hover:text-black transition-colors ${service.alignRight ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <span className="text-[0.65rem] tracking-[0.4em] text-white/70 uppercase group-hover:text-white transition-colors">
                      Explore Projects
                    </span>
                  </a>
                </div>

                <div className={`hidden lg:flex ${service.alignRight ? "lg:order-1 justify-start border-r" : "justify-end border-l"} pr-10 border-white/10`}>
                  <div className="text-[0.6rem] tracking-[1em] text-white/20 uppercase [writing-mode:vertical-rl] rotate-180 py-12">
                    INFINITE POSSIBILITIES
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
          </div>
        ))}
      </div>
    </section>
  );
}
