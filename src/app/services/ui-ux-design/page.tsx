import type { Metadata } from "next";
import UIUXContent from "@/components/services/UIUXContent";

export const metadata: Metadata = {
  title: "UI/UX Design — Beyond The Borders",
  description: "User-centered UI/UX design services. Research, strategy, visual design, prototyping, and usability testing.",
};

export default function UIUXPage() {
  return <UIUXContent />;
}
