import PartnersSection from "@/components/PartnersSection";

export default function PartnersPage() {
    return (
        <div className="pt-24 bg-white min-h-screen">
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-950 mb-6">Our Partners</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                    We collaborate with industry-leading pharmaceutical manufacturers to ensure
                    high-quality distribution and service.
                </p>
            </div>
            <PartnersSection />
        </div>
    );
}
