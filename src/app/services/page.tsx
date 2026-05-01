import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Services — Beyond The Borders",
  description: "Explore our comprehensive multimedia services: video production, web development, app development, UI/UX design, and digital marketing.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
