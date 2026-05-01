"use client";

interface ImagePlaceholderProps {
  label?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  className?: string;
}

export default function ImagePlaceholder({
  label = "IMAGE PLACEHOLDER",
  aspect = "video",
  className = "",
}: ImagePlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${aspectClasses[aspect]} ${className} noise-overlay`}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-teal/60 via-near-black to-steel-blue/40" />

      {/* Shimmer */}
      <div className="absolute inset-0 shimmer" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-[0.6rem] tracking-[0.3em] text-white/20 uppercase font-medium">
          {label}
        </span>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-accent-gold/20" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-accent-gold/20" />
    </div>
  );
}
