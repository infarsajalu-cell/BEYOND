"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function AppDevContent() {
  return (
    <ServiceDetail
      eyebrow="App Development"
      title="POWERFUL"
      titleAccent="MOBILE APPS"
      description="Custom mobile applications for iOS and Android that provide exceptional user experiences and solve real-world problems through innovative technology."
      accentColor="#0d2b35"
      heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070"
      features={[
        { title: "NATIVE DEVELOPMENT", description: "High-performance native apps for iOS and Android built with Swift, Kotlin, or React Native for optimal results." },
        { title: "USER INTERFACE", description: "Intuitive and beautiful app interfaces that follow platform-specific design guidelines and delight users." },
        { title: "CLOUD INTEGRATION", description: "Seamlessly connecting your mobile apps with powerful cloud services and real-time databases." },
        { title: "OFFLINE CAPABILITY", description: "Building apps that work smoothly even without a network connection, ensuring reliability at all times." },
        { title: "APP STORE OPTIMIZATION", description: "Helping you launch and optimize your app for maximum visibility in the App Store and Play Store." },
        { title: "MAINTENANCE & SUPPORT", description: "Ongoing support and updates to keep your app running smoothly on the latest OS versions." },
      ]}
      process={[
        { number: "01", title: "RESEARCH", description: "Understanding the problem, the users, and the competitive landscape to define the app's core value." },
        { number: "02", title: "WIREFRAMING", description: "Mapping out the app's structure and user flow before diving into high-fidelity design." },
        { number: "03", title: "UI DESIGN", description: "Creating a visual language that is both functional and aesthetically pleasing for the mobile screen." },
        { number: "04", title: "DEVELOPMENT", description: "Building the app's functionality with clean, scalable code and a focus on performance." },
        { number: "05", title: "QA & LAUNCH", description: "Thorough testing and bug fixing followed by a strategic launch on the major app stores." },
      ]}
    />
  );
}
