"use client";

import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";

const row1Indices = [1, 2, 3, 4, 5, 6, 7, 8];
const row2Indices = [9, 10, 11, 12, 13, 14, 15, 16];

export default function BrandLogos() {
  return (
    <section className="relative py-24 lg:py-36 bg-[#111] overflow-hidden" id="brand-logos">
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative" style={{ zIndex: 10 }}>
        <SectionHeading
          eyebrow="Partnerships"
          title="THESE BRANDS HAVE TRUSTED US"
        />

        {/* Logo Rows */}
        <div className="mt-8 md:mt-12 space-y-4 md:space-y-6">
          {/* Row 1 */}
          <div className="overflow-hidden">
            <div className="marquee-left flex gap-4 md:gap-6" style={{ animationDuration: "var(--marquee-duration-r1)" }}>
              {[...row1Indices, ...row1Indices, ...row1Indices, ...row1Indices].map((n, i) => (
                <div
                  key={`r1-${i}`}
                  className="flex-shrink-0 w-28 md:w-40 h-20 md:h-24 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center hover:border-[#c9a84c]/20 transition-all duration-500 group overflow-hidden p-4 md:p-6"
                >
                  <div className="relative w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                    <Image 
                      src={`/assets/home/brands/logo${n}.png`} 
                      alt={`Client Logo ${n}`} 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden">
            <div className="marquee-right flex gap-4 md:gap-6" style={{ animationDuration: "var(--marquee-duration-r2)" }}>
              {[...row2Indices, ...row2Indices, ...row2Indices, ...row2Indices].map((n, i) => (
                <div
                  key={`r2-${i}`}
                  className="flex-shrink-0 w-28 md:w-40 h-20 md:h-24 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center hover:border-[#c9a84c]/20 transition-all duration-500 group overflow-hidden p-4 md:p-6"
                >
                  <div className="relative w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                    <Image 
                      src={`/assets/home/brands/logo${n}.png`} 
                      alt={`Client Logo ${n}`} 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
