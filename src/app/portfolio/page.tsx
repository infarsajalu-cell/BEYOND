import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio — Beyond The Borders",
  description: "Explore our portfolio of video, photography, design, animation, and web projects.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
