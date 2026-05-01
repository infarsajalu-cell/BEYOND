import type { Metadata } from "next";
import DigitalMarketingContent from "@/components/services/DigitalMarketingContent";

export const metadata: Metadata = {
  title: "Digital Marketing — Beyond The Borders",
  description: "Data-driven digital marketing services. SEO, social media, PPC, email marketing, and conversion optimization.",
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingContent />;
}
