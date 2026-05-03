"use client"
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.back()}
      className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/30 transition-all duration-300"
      id="back-button"
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-[#888] group-hover:text-[#c9a84c] transition-colors"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      <span className="text-[10px] tracking-[0.2em] font-bold text-[#888] group-hover:text-[#c9a84c] transition-colors uppercase">
        Back
      </span>
    </motion.button>
  );
}
