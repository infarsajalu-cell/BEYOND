import Link from "next/link";
import Image from "next/image";

const leftServices = [
  "VIDEO PRODUCTION SERVICES",
  "DIGITAL MARKETING SOLUTIONS",
  "GRAPHIC DESIGN AND BRANDING",
  "ANIMATION AND MOTION GRAPHICS",
  "PHOTOGRAPHY SERVICES",
  "WEB DEVELOPMENT AND DESIGN",
];

const rightServices = [
  "AUDIO AND SOUND SOLUTIONS",
  "AR, VR, AND INTERACTIVE MEDIA",
  "LIVE STREAMING AND BROADCASTING",
  "MEDIA CONVERSION AND RESTORATION",
  "TRAINING AND CONSULTANCY",
  "EVENT PRODUCTION AND MANAGEMENT",
];

export default function Footer() {
  return (
    <footer className="bg-near-black border-t border-white/5 relative noise-overlay" id="footer">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        {/* Service Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <div>
            {leftServices.map((s) => (
              <div
                key={s}
                className="text-xs tracking-[0.2em] text-muted-gray py-2 border-b border-white/5 hover:text-accent-gold hover:pl-2 transition-all duration-300 cursor-default"
              >
                {s}
              </div>
            ))}
          </div>
          <div>
            {rightServices.map((s) => (
              <div
                key={s}
                className="text-xs tracking-[0.2em] text-muted-gray py-2 border-b border-white/5 hover:text-accent-gold hover:pl-2 transition-all duration-300 cursor-default"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Center Logo + Address */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-48 h-16 md:w-64 md:h-20 mb-4">
            <Image 
              src="/assets/home/logobig.png" 
              alt="Beyond The Borders Big Logo" 
              fill 
              className="object-contain" 
            />
          </div>
          <div className="text-[0.6rem] tracking-[0.4em] text-muted-gray uppercase mb-6">
            Unlimited Multimedia Solutions
          </div>
          <address className="not-italic text-xs text-muted-gray tracking-wider leading-relaxed">
            115, CROCUS WAY, CHELMSFORD,
            <br />
            UNITED KINGDOM, CM1 5XH
          </address>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {["Instagram", "LinkedIn", "YouTube", "X"].map((s) => (
            <Link
              key={s}
              href="#"
              className="text-xs tracking-wider text-muted-gray hover:text-accent-gold transition-colors duration-300"
            >
              {s}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.65rem] tracking-wider text-muted-gray/60">
          <p>Copyright 2026 - Beyond the Borders · Registered Company No: 16095559</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-accent-gold transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
