import type { Metadata } from "next";
import WebDevContent from "@/components/services/WebDevContent";

export const metadata: Metadata = {
  title: "Web Development — Beyond The Borders",
  description: "Custom web development services including responsive websites, e-commerce, web applications, and CMS solutions.",
};

export default function WebDevelopmentPage() {
  return <WebDevContent />;
}
