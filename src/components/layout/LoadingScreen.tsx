"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState("BEYOND THE BORDERS");

  const getPageTitle = (path: string) => {
    if (path === "/") return "BEYOND THE BORDERS";
    const parts = path.split("/").filter(Boolean);
    if (parts.length === 0) return "BEYOND THE BORDERS";
    
    // Special cases for better naming
    if (path.includes("/services") && parts.length === 1) return "OUR SERVICES";
    
    const lastPart = parts[parts.length - 1];
    return lastPart.replace(/-/g, " ").toUpperCase();
  };

  useEffect(() => {
    setLoading(true);
    setPageTitle(getPageTitle(pathname));
    
    // Slightly longer for initial load, shorter for transitions
    const isInitial = !sessionStorage.getItem("hasInitialLoaded");
    const duration = isInitial ? 2200 : 800;

    const timer = setTimeout(() => {
      setLoading(false);
      if (isInitial) sessionStorage.setItem("hasInitialLoaded", "true");
      
      // Refresh ScrollTrigger after loading screen is gone
      setTimeout(() => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          ScrollTrigger.refresh();
        });
      }, 100);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loading-screen"
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative text-center"
            >
              <motion.div
                key={pageTitle}
                className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] font-display"
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-gradient-gold">{pageTitle}</span>
              </motion.div>

              {pathname !== "/" && (
                <motion.div
                  className="text-center text-[0.5rem] tracking-[0.4em] text-[#888] uppercase mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Beyond The Borders
                </motion.div>
              )}
              
              {pathname === "/" && (
                <motion.div
                  className="text-center text-[0.55rem] tracking-[0.5em] text-[#888] uppercase mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Unlimited Multimedia Solutions
                </motion.div>
              )}
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="mt-12 w-32 h-px bg-white/10 overflow-hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-[#c9a84c] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
