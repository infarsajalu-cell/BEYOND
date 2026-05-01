"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function WebDevContent() {
  return (
    <ServiceDetail
      eyebrow="Web Development"
      title="IMMERSIVE"
      titleAccent="WEB EXPERIENCES"
      description="Next-generation web development that combines stunning aesthetics with seamless performance. We build digital homes that represent your brand in its best light."
      accentColor="#1e3a4a"
      heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
      features={[
        { title: "FRONTEND EXCELLENCE", description: "Pixel-perfect interfaces built with React and Next.js, ensuring high-speed performance and smooth interactions." },
        { title: "BACKEND ARCHITECTURE", description: "Robust and scalable server-side solutions that power complex applications with security and reliability." },
        { title: "E-COMMERCE", description: "High-converting online stores that provide a premium shopping experience for your global customers." },
        { title: "HEADLESS CMS", description: "Modern content management solutions that give you complete control over your digital content without technical hurdles." },
        { title: "ANIMATION & MOTION", description: "Integrating GSAP and Framer Motion to create engaging, storytelling web experiences that stand out." },
        { title: "PERFORMANCE AUDIT", description: "Optimization services to ensure your site scores 100 on Core Web Vitals and delivers a fast experience." },
      ]}
      showcaseItems={[
        { 
          title: "DIGITAL FORGE", 
          description: "A high-end portfolio site for a creative agency, featuring complex scroll animations and immersive 2D elements.",
          image: "/images/featured-3.png"
        },
      ]}
      process={[
        { number: "01", title: "STRATEGY", description: "Defining the site architecture, user journeys, and technical requirements based on your business goals." },
        { number: "02", title: "DESIGN", description: "Crafting a unique visual identity for your web presence, focusing on user experience and brand alignment." },
        { number: "03", title: "DEVELOPMENT", description: "Transforming designs into a working product using modern, high-performance technologies and clean code." },
        { number: "04", title: "TESTING", description: "Rigorous quality assurance across all devices and browsers to ensure a flawless user experience." },
        { number: "05", title: "DEPLOYMENT", description: "Launching your new site on a robust, scalable infrastructure with automated CI/CD pipelines." },
      ]}
    />
  );
}
