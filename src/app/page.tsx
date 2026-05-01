import Hero from "@/components/home/Hero";
import ServiceTicker from "@/components/home/ServiceTicker";
import BrandIntro from "@/components/home/BrandIntro";
import WhyUs from "@/components/home/WhyUs";
import OverlappingSection from "@/components/home/OverlappingSection";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import TeamScroll from "@/components/home/TeamScroll";
import ServicesStack from "@/components/home/ServicesStack";
import BrandLogos from "@/components/home/BrandLogos";
import OverlappingSection2 from "@/components/home/OverlappingSection2";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceTicker />
      <BrandIntro />
      <WhyUs />
      <OverlappingSection />
      <FeaturedWorks />
      <TeamScroll />
      <ServicesStack />
      <Testimonials />

            <OverlappingSection2 />

      <BrandLogos />
    </>
  );
}
