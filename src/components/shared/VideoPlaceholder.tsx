"use client";

interface VideoPlaceholderProps {
  label?: string;
  className?: string;
}

export default function VideoPlaceholder({
  label = "VIDEO PLACEHOLDER",
  className = "",
}: VideoPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg aspect-video ${className} noise-overlay`}
    >
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-blue/30 via-deep-black to-dark-teal/30" />

      {/* Shimmer */}
      <div className="absolute inset-0 shimmer" />

      {/* Scanlines effect */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5 hover:bg-accent-gold/20 hover:border-accent-gold/50 transition-all duration-500 cursor-pointer group">
          <svg
            className="w-5 h-5 text-white/60 ml-1 group-hover:text-accent-gold transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-4 left-4 z-10">
        <span className="text-[0.55rem] tracking-[0.3em] text-white/15 uppercase">
          {label}
        </span>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-accent-gold/15" />
      <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-accent-gold/15" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-accent-gold/15" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-accent-gold/15" />
    </div>
  );
}
