import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About — Beyond The Borders",
  description: "Learn about our London-based multimedia production company, our team, and our creative journey.",
};

export default function AboutPage() {
  return <AboutContent />;
}
