import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ReviewsSection from "@/components/ReviewsSection";
import UrgencyBlock from "@/components/UrgencyBlock";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyPhone from "@/components/StickyPhone";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <WhyUsSection />
        <ReviewsSection />
        <UrgencyBlock />
        <ContactSection />
      </main>
      <Footer />
      <StickyPhone />
    </>
  );
}
