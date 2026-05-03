"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Video", "Animation", "Web", "Design", "Events"];

const portfolioItems = [
  { title: "CINEMATIC BRANDING", category: "Video", image: "/assets/home/featured1.png", size: "large" },
  { title: "COMMERCIAL CAMPAIGN", category: "Video", image: "/assets/home/commercial.png", size: "medium" },
  { title: "FUTURE WEB", category: "Web", image: "/assets/home/webdesign.png", size: "large" },
  { title: "BROADCAST VISUALS", category: "Animation", image: "/assets/home/broadcastdesign.png", size: "medium" },
  { title: "MOTION GRAPHICS", category: "Animation", image: "/assets/home/3d&2d.png", size: "small" },
  { title: "BRAND IDENTITY", category: "Design", image: "/assets/home/featured3.png", size: "medium" },
  { title: "IMMERSIVE EVENTS", category: "Events", image: "/assets/home/eventdesign.png", size: "large" },
  { title: "EXPLAINER SERIES", category: "Video", image: "/assets/home/explainers.png", size: "medium" },
  { title: "DIGITAL ARCHIVE", category: "Video", image: "/assets/home/analogtodigital.png", size: "small" },
  { title: "PRODUCTION HUB", category: "Video", image: "/assets/home/multimediahero.jpg", size: "large" },
  { title: "CREATIVE STUDIO", category: "Design", image: "/assets/home/whybeyondbg.png", size: "medium" },
  { title: "BROADCAST HUB", category: "Video", image: "/assets/home/broadcast.png", size: "small" },
];

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<{ title: string; image: string; category: string } | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[70vh] flex items-center bg-[#0a0a0a]" id="portfolio-hero">
        <Image
          src="/assets/about/multimedia.png"
          alt="Multimedia Portfolio Banner"
          fill
          className="object-cover opacity-50 brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/70 to-[#0a0a0a] noise-overlay" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="text-[0.65rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-6">
              Our Showcase
            </div>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl tracking-wider leading-[0.95] font-display"
            >
              CRAFTING <br />
              <span className="text-gradient-gold">PORTFOLIOS</span>
            </h1>
            <p className="mt-8 text-sm text-[#888] leading-relaxed max-w-lg">
              A curated selection of our finest work across video, animation, design, and web. We push boundaries to deliver exceptional multimedia solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]" id="portfolio-grid">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            {["All", ...categories.filter(c => c !== "All")].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 text-[0.65rem] tracking-[0.2em] uppercase border rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-[#c9a84c] text-[#0a0a0a] bg-[#c9a84c]"
                    : "border-white/10 text-[#888] hover:border-[#c9a84c]/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bento Grid */}
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                      item.size === "large"
                        ? "aspect-video"
                        : item.size === "medium"
                        ? "aspect-[4/3]"
                        : "aspect-square"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-[1s]"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-[0.6rem] tracking-[0.3em] text-[#c9a84c] uppercase mb-2">
                        {item.category}
                      </span>
                      <h3
                        className="text-2xl tracking-wider font-display"
                      >
                        {item.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-2 text-[0.6rem] tracking-widest text-white/40">
                        <span>VIEW PROJECT</span>
                        <span className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-[#c9a84c] transition-all duration-500" />
                      </div>
                    </div>

                    {/* Frame Accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-[#c9a84c]/0 group-hover:border-[#c9a84c]/40 transition-all duration-500" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-[#c9a84c]/0 group-hover:border-[#c9a84c]/40 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]/98 backdrop-blur-2xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close pin */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-[#888] hover:text-white transition-colors text-xs tracking-[0.3em]"
              >
                CLOSE [×]
              </button>

              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(201,168,76,0.15)]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between">
                  <div>
                    <span className="text-[0.7rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-3 block">
                      Featured Project
                    </span>
                    <h3 className="text-4xl md:text-6xl tracking-wider font-display">
                      {selectedItem.title}
                    </h3>
                    <p className="text-[#888] text-sm mt-4 uppercase tracking-[0.2em]">
                      Category: {selectedItem.category}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-10 py-4 bg-[#c9a84c] text-[#0a0a0a] text-[0.65rem] tracking-[0.3em] font-bold uppercase rounded-full hover:scale-105 transition-transform"
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
