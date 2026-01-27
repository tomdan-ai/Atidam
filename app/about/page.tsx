import AboutSection from "@/components/AboutSection";
import MilestonesSection from "@/components/MilestonesSection";

export default function AboutPage() {
    return (
        <div className="pt-24 bg-white dark:bg-black min-h-screen">
            <AboutSection />
            <MilestonesSection />
        </div>
    );
}
