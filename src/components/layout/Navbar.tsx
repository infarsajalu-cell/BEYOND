"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import BackButton from "./BackButton";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  {
    href: "#",
    label: "OUR SERVICES",
    dropdown: [
      { href: "/services/video-production", label: "Video Production" },
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/app-development", label: "App Development" },
      { href: "/services/ui-ux-design", label: "UI/UX Design" },
      { href: "/services/digital-marketing", label: "Digital Marketing" },
    ],
  },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href === "#") {
      e.preventDefault();
      return;
    }
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (mobileOpen) setMobileOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(0,0,0,0.92)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Left Side: Back Button & Logo */}
          <div className="flex items-center gap-3 lg:gap-6">
            {pathname !== "/" && (
              <BackButton />
            )}
            
            {/* Logo */}
            <Link 
              href="/" 
              className="relative z-50 group flex items-center gap-3" 
              id="navbar-logo"
              onClick={(e) => handleLinkClick(e, "/")}
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden">
                <Image 
                  src="/assets/home/logo.png" 
                  alt="Beyond The Borders Logo" 
                  fill 
                  className="object-contain transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="flex flex-col">
                <div className="text-xl tracking-wider leading-none font-bold font-display">
                  <span className="text-white group-hover:text-[#c9a84c] transition-colors duration-300">
                    BEYOND THE BORDERS
                  </span>
                </div>
                <div className="text-[0.45rem] tracking-[0.3em] text-[#888] uppercase mt-0.5 hidden sm:block">
                  Unlimited Multimedia Solutions
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 py-2 relative group ${
                    link.href === "#" ? "cursor-default text-[#888]" : "text-[#888] hover:text-[#c9a84c]"
                  }`}
                  id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                  {link.href !== "#" && (
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
                  )}
                  {link.dropdown && (
                    <svg
                      className="inline-block ml-1 w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-56 bg-[#111]/95 backdrop-blur-xl border border-white/5 rounded-lg overflow-hidden shadow-2xl"
                      >
                        {link.dropdown.map((item, i) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="block px-5 py-3 text-sm text-[#888] hover:text-white hover:bg-[#1e3a4a]/20 transition-all duration-200 hover:pl-7"
                              id={`nav-dropdown-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span
              className={`hamburger-line transition-all ${
                mobileOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`hamburger-line transition-all ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`hamburger-line transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  {link.href === "#" ? (
                    <span className="text-3xl font-bold tracking-wider text-[#c9a84c] font-display">
                      {link.label}
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-3xl font-bold tracking-wider text-white hover:text-[#c9a84c] transition-colors font-display"
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.dropdown && (
                    <div className="mt-4 mb-4 flex flex-col items-center gap-2">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm text-[#888] hover:text-[#c9a84c] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
