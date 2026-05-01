"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function DigitalMarketingContent() {
  return (
    <ServiceDetail
      eyebrow="Digital Marketing"
      title="DATA-DRIVEN"
      titleAccent="DIGITAL MARKETING"
      description="Strategic digital marketing solutions that amplify your reach, engage your audience, and convert browsers into loyal customers. Data-driven campaigns with measurable ROI."
      accentColor="#1e3a4a"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
      features={[
        { title: "SEO & CONTENT", description: "Organic search optimization and content strategy that drives traffic and builds authority in your market." },
        { title: "SOCIAL MEDIA", description: "Strategic social media management across all platforms. Content creation, community management, and growth." },
        { title: "PAID ADVERTISING", description: "High-performance PPC campaigns across Google, Meta, LinkedIn, and programmatic channels." },
        { title: "EMAIL MARKETING", description: "Automated email campaigns that nurture leads and drive conversions. Segmentation and personalization at scale." },
        { title: "ANALYTICS & INSIGHTS", description: "Deep analytics, attribution modeling, and actionable insights that inform strategic decisions." },
        { title: "CONVERSION OPTIMIZATION", description: "CRO strategies that maximize the value of every visitor. A/B testing, funnel optimization, and UX improvements." },
      ]}
      process={[
        { number: "01", title: "AUDIT & ANALYSIS", description: "Comprehensive audit of your current digital presence, competitors, and market landscape." },
        { number: "02", title: "STRATEGY DEVELOPMENT", description: "Custom digital marketing strategy aligned with your business goals, budget, and timeline." },
        { number: "03", title: "CAMPAIGN EXECUTION", description: "Multi-channel campaign launch with creative development, targeting, and optimization." },
        { number: "04", title: "MONITORING & OPTIMIZATION", description: "Real-time performance monitoring, A/B testing, and continuous campaign optimization." },
        { number: "05", title: "REPORTING & SCALING", description: "Transparent reporting with actionable insights. Scaling what works, pivoting what doesn't." },
      ]}
    />
  );
}
