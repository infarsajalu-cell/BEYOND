"use client";

interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  outline?: boolean;
}

export default function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
  outline = false,
}: MarqueeRowProps) {
  const content = items.join(" · ");
  const duplicated = `${content} · ${content} · ${content} · `;

  return (
    <div className="overflow-hidden whitespace-nowrap py-4">
      <div
        className={direction === "left" ? "marquee-left" : "marquee-right"}
        style={{ animationDuration: `${speed}s` }}
      >
        <span
          className={`text-3xl md:text-5xl lg:text-6xl tracking-wider font-bold inline-block ${
            outline ? "text-outline" : "text-white/90"
          }`}
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {duplicated}
        </span>
      </div>
    </div>
  );
}
