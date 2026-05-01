"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function UIUXContent() {
  return (
    <ServiceDetail
      eyebrow="UI/UX Design"
      title="INTUITIVE"
      titleAccent="UI/UX DESIGN"
      description="User-centered design that blends beauty with functionality. We create digital experiences that people love to use and that drive measurable business results."
      accentColor="#c9a84c"
      heroImage="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=2070"
      features={[
        { title: "USER RESEARCH", description: "Deep understanding of your users through interviews, surveys, analytics, and behavioral analysis." },
        { title: "UX STRATEGY", description: "Strategic design frameworks that align user needs with business objectives for maximum impact." },
        { title: "UI DESIGN", description: "Stunning visual design systems that express your brand identity and delight users at every touchpoint." },
        { title: "PROTOTYPING", description: "Interactive prototypes that bring designs to life. Test and iterate before a single line of code is written." },
        { title: "DESIGN SYSTEMS", description: "Scalable design systems and component libraries that ensure consistency across all products." },
        { title: "USABILITY TESTING", description: "Data-driven design validation through rigorous usability testing and A/B experimentation." },
      ]}
      process={[
        { number: "01", title: "DISCOVER", description: "Stakeholder interviews, user research, competitive analysis, and defining success metrics." },
        { number: "02", title: "DEFINE", description: "User personas, journey mapping, information architecture, and design strategy." },
        { number: "03", title: "DESIGN", description: "Wireframes, visual design, interactive prototypes, and design system documentation." },
        { number: "04", title: "VALIDATE", description: "Usability testing, stakeholder reviews, and iterative refinement based on feedback." },
        { number: "05", title: "DELIVER", description: "Developer handoff, design specifications, and ongoing design support during implementation." },
      ]}
    />
  );
}
