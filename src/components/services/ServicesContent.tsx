"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import TiltCard from "@/components/shared/TiltCard";

const services = [
  {
    title: "VIDEO PRODUCTION",
    description: "Cinematic brand films, commercials, documentaries, and more. Hollywood-grade production values.",
    href: "/services/video-production",
    accent: "#c9a84c",
    icon: "🎬",
  },
  {
    title: "WEB DEVELOPMENT",
    description: "Modern, responsive, high-performance websites built with cutting-edge technology.",
    href: "/services/web-development",
    accent: "#3b82f6",
    icon: "💻",
  },
  {
    title: "APP DEVELOPMENT",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
    href: "/services/app-development",
    accent: "#10b981",
    icon: "📱",
  },
  {
    title: "UI/UX DESIGN",
    description: "User-centered design that blends beauty with functionality. Interfaces people love to use.",
    href: "/services/ui-ux-design",
    accent: "#a855f7",
    icon: "🎨",
  },
  {
    title: "DIGITAL MARKETING",
    description: "Data-driven strategies that amplify your reach and convert audiences into loyal customers.",
    href: "/services/digital-marketing",
    accent: "#f59e0b",
    icon: "📈",
  },
];

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-deep-black" id="services-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-teal/20 via-deep-black to-deep-black noise-overlay" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="text-[0.65rem] tracking-[0.4em] text-accent-gold uppercase mb-6">
              What We Offer
            </div>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl tracking-wider leading-[0.95]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              OUR
              <br />
              <span className="text-gradient-gold">SERVICES</span>
            </h1>
            <p className="mt-8 text-sm text-muted-gray leading-relaxed max-w-lg">
              From concept to completion, we offer a comprehensive suite of multimedia services
              designed to elevate your brand and captivate your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-36 bg-near-black" id="services-grid">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={service.href}>
                  <TiltCard>
                    <div className="relative p-8 lg:p-10 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-white/10 transition-all duration-500 h-full group overflow-hidden min-h-[280px] flex flex-col justify-between">
                      {/* Accent glow */}
                      <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                        style={{ backgroundColor: service.accent }}
                      />

                      <div>
                        <div className="text-3xl mb-4">{service.icon}</div>
                        <h3
                          className="text-2xl tracking-wider mb-4 group-hover:text-accent-gold transition-colors duration-300"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-gray leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-6 text-xs tracking-[0.2em] text-accent-gold uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        Explore →
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-accent-gold/30 transition-all duration-700" />
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-36 bg-deep-black text-center" id="services-cta">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-6xl tracking-wider mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              NOT SURE WHAT YOU NEED?
            </h2>
            <p className="text-sm text-muted-gray max-w-md mx-auto mb-10">
              Let&apos;s have a conversation about your goals. We&apos;ll recommend the perfect
              combination of services for your project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-deep-black text-xs tracking-[0.3em] uppercase font-bold hover:bg-accent-gold/90 transition-all duration-500 rounded"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
