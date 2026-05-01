"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function VideoProductionContent() {
  return (
    <ServiceDetail
      eyebrow="Video Production"
      title="CINEMATIC"
      titleAccent="VIDEO PRODUCTION"
      description="From concept to final cut, our video production services deliver Hollywood-grade content that captivates audiences and elevates brands. We bring stories to life with cinematic precision."
      accentColor="#c9a84c"
      heroImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070"
      features={[
        { title: "BRAND FILMS", description: "Compelling brand narratives that connect with your audience on an emotional level and communicate your core values." },
        { title: "COMMERCIALS", description: "High-impact commercial content optimized for TV, digital, and social platforms. Every frame engineered for maximum ROI." },
        { title: "DOCUMENTARIES", description: "Authentic documentary storytelling that explores real stories with cinematic depth and emotional resonance." },
        { title: "MUSIC VIDEOS", description: "Visual storytelling for artists and musicians. Creative direction, production, and post-production that matches your sound." },
        { title: "CORPORATE VIDEOS", description: "Professional corporate content for training, onboarding, investor relations, and internal communications." },
        { title: "AI VIDEO PRODUCTION", description: "Leveraging cutting-edge AI tools to create innovative, cost-effective video content at scale." },
      ]}
      showcaseItems={[
        { 
          title: "THE AWAKENING", 
          description: "A cinematic brand film exploring the essence of modern luxury craftsmanship with dramatic lighting and storytelling.",
          image: "/assets/videoproduction/banner2.png"
        },
        { 
          title: "NEON HORIZONS", 
          description: "Dynamic commercial campaign for a leading tech brand's product launch, featuring futuristic aesthetics and motion.",
          image: "/images/featured-1.png"
        },
        { 
          title: "SILENT ECHOES", 
          description: "Award-winning documentary series exploring urban architecture and culture through a cinematic lens.",
          image: "/assets/videoproduction/banner1.png"
        },
      ]}
      process={[
        { number: "01", title: "DISCOVERY & BRIEF", description: "Deep-dive into your brand, objectives, and target audience. We develop a comprehensive creative brief." },
        { number: "02", title: "CONCEPT & SCRIPTING", description: "Creative ideation, storyboarding, and scriptwriting. Every detail planned before cameras roll." },
        { number: "03", title: "PRE-PRODUCTION", description: "Casting, location scouting, equipment planning, and scheduling. Meticulous preparation for flawless execution." },
        { number: "04", title: "PRODUCTION", description: "Professional on-set production with our experienced crew, state-of-the-art equipment, and creative direction." },
        { number: "05", title: "POST-PRODUCTION", description: "Expert editing, color grading, sound design, VFX, and motion graphics. We polish until perfection." },
        { number: "06", title: "DELIVERY & DISTRIBUTION", description: "Final delivery in all required formats, optimized for every platform. Distribution strategy consultation included." },
      ]}
    />
  );
}
