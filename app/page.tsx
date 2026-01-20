import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-green-200">
      <Navbar />
      <Hero />
      <AboutSection />
    </div>
  );
}
