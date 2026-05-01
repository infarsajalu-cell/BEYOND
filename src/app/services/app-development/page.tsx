import type { Metadata } from "next";
import AppDevContent from "@/components/services/AppDevContent";

export const metadata: Metadata = {
  title: "App Development — Beyond The Borders",
  description: "iOS, Android, and cross-platform mobile app development. Native performance with beautiful user experiences.",
};

export default function AppDevelopmentPage() {
  return <AppDevContent />;
}
