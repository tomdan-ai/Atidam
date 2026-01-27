import PartnersGrid from "@/components/PartnersGrid";

export default function PartnersPage() {
    return (
        <div className="pt-24 bg-white dark:bg-black min-h-screen">
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-950 dark:text-white mb-6">Our Partners</h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
                    We collaborate with industry-leading pharmaceutical manufacturers to ensure
                    high-quality distribution and service.
                </p>
            </div>
            <PartnersGrid />
        </div>
    );
}
