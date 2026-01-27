import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ColdRoomTeaser from "@/components/ColdRoomTeaser";
import MilestonesSection from "@/components/MilestonesSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-green-200">
      <Hero />
      <PartnersSection />
      <AboutSection />
      <ColdRoomTeaser />
      <MilestonesSection />

      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
