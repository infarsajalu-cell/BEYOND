import type { Metadata } from "next";
import VideoProductionContent from "@/components/services/VideoProductionContent";

export const metadata: Metadata = {
  title: "Video Production — Beyond The Borders",
  description: "Professional video production services including brand films, commercials, documentaries, music videos, and AI video production.",
};

export default function VideoProductionPage() {
  return <VideoProductionContent />;
}
