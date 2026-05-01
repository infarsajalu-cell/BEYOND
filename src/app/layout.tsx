import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beyond The Borders — Unlimited Multimedia Solutions",
  description:
    "London-based premium multimedia production company. Video production, web development, app development, UI/UX design, and digital marketing.",
  keywords: [
    "multimedia production",
    "video production",
    "web development",
    "London",
    "digital marketing",
    "app development",
    "UI/UX design",
  ],
  openGraph: {
    title: "Beyond The Borders — Unlimited Multimedia Solutions",
    description:
      "London-based premium multimedia production company crafting show-stopping content.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-[#0a0a0a] text-white font-body selection:bg-[#c9a84c] selection:text-[#0a0a0a]">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
