import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Beyond The Borders",
  description: "Get in touch with our team. 115 Crocus Way, Chelmsford, CM1 5XH, United Kingdom.",
};

export default function ContactPage() {
  return <ContactContent />;
}
