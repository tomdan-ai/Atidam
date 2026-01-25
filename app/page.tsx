import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-green-200">
      <Hero />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
