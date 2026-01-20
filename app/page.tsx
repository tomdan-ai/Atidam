import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-green-200">
      <Navbar />
      <Hero />
      <section className="h-screen flex items-center justify-center bg-gray-50 border-t border-gray-100">
        <h2 className="text-4xl font-bold text-gray-300 uppercase tracking-widest">
          Additional Services
        </h2>
      </section>
    </div>
  );
}
