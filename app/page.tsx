import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MilestonesSection from "@/components/MilestonesSection";
import ColdRoomSection from "@/components/ColdRoomSection";
import CommunitySection from "@/components/CommunitySection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-green-200">
      <Hero />
      <PartnersSection />
      <AboutSection />
      <MilestonesSection />
      <ColdRoomSection />
      <CommunitySection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
