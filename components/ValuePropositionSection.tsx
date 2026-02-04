"use client";

import { ArrowRight } from "lucide-react";

const audiences = [
    {
        title: "For Pharmacies",
        description: "Automate daily operations. Make all purchases in one place. Stock up and pay later with flexible terms.",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop",
        link: "/wholesale",
    },
    {
        title: "For Hospitals & Clinics",
        description: "Close the loop between wards, departments and pharmacies. Reliable bulk supply for institutional needs.",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop",
        link: "/wholesale",
    },
    {
        title: "For Healthcare Chains",
        description: "Scale your procurement across multiple locations with centralized ordering and consistent pricing.",
        image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=800&auto=format&fit=crop",
        link: "/wholesale",
    },
];

export default function ValuePropositionSection() {
    return (
        <section className="relative overflow-hidden">
            {/* Top Section with Hero Image */}
            <div className="bg-white dark:bg-gray-950 py-16 lg:py-24">
                <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left - Image with Card Overlay */}
                        <div className="relative">
                            <div className="relative">
                                {/* Decorative Frame */}
                                <div className="absolute -left-4 -top-4 w-32 h-full bg-emerald-600 rounded-3xl" />

                                {/* Main Image */}
                                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=800&auto=format&fit=crop"
                                        alt="Pharmacist checking inventory"
                                        className="w-full h-[400px] lg:h-[500px] object-cover"
                                    />
                                </div>

                                {/* Floating Product Card */}
                                <div className="absolute -bottom-6 -right-6 lg:right-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 w-64 z-20 border border-gray-100 dark:border-gray-800">
                                    <div className="flex gap-3 mb-3">
                                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                                            <img
                                                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=100&auto=format&fit=crop"
                                                alt="Medicine"
                                                className="w-12 h-12 object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">Premium Medications</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Authentic & Verified</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                                            ✓ Wholesale Discount
                                        </span>
                                        <span className="text-xs text-gray-400">24hr Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Text Content */}
                        <div>
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 block">
                                A central hub for all your procurement needs
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
                                Power your healthcare business with
                                <span className="text-emerald-600 dark:text-emerald-400"> smart inventory </span>
                                and financing.
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed mb-8">
                                Run and drive growth for your pharmacy, hospital or healthcare facility more efficiently with our comprehensive wholesale solutions. From rare medications to everyday essentials, we've got you covered.
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div>
                                    <p className="text-3xl lg:text-4xl font-black text-emerald-600 dark:text-emerald-400">24h</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Delivery Time</p>
                                </div>
                                <div>
                                    <p className="text-3xl lg:text-4xl font-black text-emerald-600 dark:text-emerald-400">5K+</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Products</p>
                                </div>
                                <div>
                                    <p className="text-3xl lg:text-4xl font-black text-emerald-600 dark:text-emerald-400">16yr</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                                </div>
                            </div>

                            <a
                                href="/wholesale"
                                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full transition-all hover:gap-4"
                            >
                                Explore Wholesale
                                <ArrowRight className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Curved Dark Background with Audience Cards */}
            <div className="relative">
                {/* Curved Top Edge */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-white dark:bg-gray-950" />
                <svg
                    className="absolute top-0 left-0 right-0 w-full h-24 text-emerald-900"
                    viewBox="0 0 1440 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 96L1440 96L1440 0C1440 0 1080 96 720 96C360 96 0 0 0 0L0 96Z"
                        fill="currentColor"
                    />
                </svg>

                {/* Content */}
                <div className="bg-emerald-900 pt-32 pb-20 lg:pb-28">
                    <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                        {/* Header */}
                        <div className="text-center mb-12 lg:mb-16">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                                Built For Health-Care Providers<br />
                                <span className="text-emerald-400">To Focus On What Matters.</span>
                            </h3>
                            <p className="text-emerald-200/70 text-base lg:text-lg max-w-xl mx-auto">
                                Improve quality of care without breaking your back or sacrificing profit margin.
                            </p>
                        </div>

                        {/* Audience Cards */}
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {audiences.map((audience, index) => (
                                <a
                                    key={index}
                                    href={audience.link}
                                    className="audience-card group block bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="h-48 lg:h-56 overflow-hidden">
                                        <img
                                            src={audience.image}
                                            alt={audience.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 lg:p-8">
                                        <h4 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                            {audience.title}
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                            {audience.description}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold group-hover:gap-3 transition-all">
                                            Learn more
                                            <ArrowRight className="size-4" />
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
