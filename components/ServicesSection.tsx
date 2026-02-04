"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const services = [
    {
        title: "Prescription Drugs",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
        tags: ["Generic", "Brand Name", "Specialty"],
    },
    {
        title: "Vitamins & Supplements",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
        tags: ["Multivitamins", "Minerals", "Herbal"],
    },
    {
        title: "Personal Care",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
        tags: ["Skincare", "First Aid", "Wellness"],
    },
    {
        title: "Antibiotics",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop",
        tags: ["Penicillins", "Cephalosporins", "Macrolides"],
    },
    {
        title: "Pain Relief",
        image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=800&auto=format&fit=crop",
        tags: ["Analgesics", "NSAIDs", "Opioids"],
    },
    {
        title: "Cardiovascular",
        image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=800&auto=format&fit=crop",
        tags: ["Blood Pressure", "Cholesterol", "Heart"],
    },
    {
        title: "Diabetes Care",
        image: "https://images.unsplash.com/photo-1593491034932-844ab981ed7c?q=80&w=800&auto=format&fit=crop",
        tags: ["Insulin", "Oral Meds", "Monitors"],
    },
    {
        title: "Respiratory",
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop",
        tags: ["Inhalers", "Antihistamines", "Cough"],
    },
    {
        title: "Oncology",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
        tags: ["Chemotherapy", "Targeted", "Supportive"],
    },
    {
        title: "Antimalarials",
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop",
        tags: ["ACTs", "Prophylaxis", "Treatment"],
    },
    {
        title: "Antivirals",
        image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=800&auto=format&fit=crop",
        tags: ["HIV/AIDS", "Hepatitis", "Flu"],
    },
    {
        title: "Gastrointestinal",
        image: "https://images.unsplash.com/photo-1559757175-7cb036e0e56b?q=80&w=800&auto=format&fit=crop",
        tags: ["Antacids", "Laxatives", "Enzymes"],
    },
    {
        title: "Dermatology",
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
        tags: ["Topicals", "Antifungals", "Steroids"],
    },
    {
        title: "Ophthalmology",
        image: "https://images.unsplash.com/photo-1559076294-ad5f5d92a64d?q=80&w=800&auto=format&fit=crop",
        tags: ["Eye Drops", "Glaucoma", "Vitamins"],
    },
    {
        title: "Hormones & Contraceptives",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop",
        tags: ["Thyroid", "Fertility", "Birth Control"],
    },
    {
        title: "Neurological",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
        tags: ["Epilepsy", "Parkinson's", "Migraine"],
    },
    {
        title: "Psychiatric",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop",
        tags: ["Antidepressants", "Anxiolytics", "Mood"],
    },
    {
        title: "Pediatrics",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
        tags: ["Children's", "Infant Care", "Vaccines"],
    },
    {
        title: "Vaccines & Biologics",
        image: "https://images.unsplash.com/photo-1632053002928-1919605bc387?q=80&w=800&auto=format&fit=crop",
        tags: ["Immunizations", "Sera", "Biologics"],
    },
    {
        title: "Medical Supplies",
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=800&auto=format&fit=crop",
        tags: ["Syringes", "Gloves", "Bandages"],
    },
];

export default function ServicesSection() {
    const [showAll, setShowAll] = useState(false);

    // Show 6 products initially, all 20 when expanded
    const visibleProducts = showAll ? services : services.slice(0, 6);

    return (
        <section className="min-h-screen py-16 sm:py-20 md:py-28 lg:py-32 bg-white dark:bg-black flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-14 md:mb-16 lg:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 dark:text-white max-w-4xl leading-tight">
                        Your reliable link to global pharmaceutical brands. We offer high-volume inventory, transparent pricing, and expert regulatory guidance to keep your facility fully stocked.
                    </h2>

                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 sm:gap-3 border border-gray-200 dark:border-gray-700 rounded-full pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 lg:pl-8 group hover:border-gray-900 dark:hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] transition-all self-start lg:self-auto"
                    >
                        <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                            {showAll ? "Show Less" : "All Products"}
                        </span>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            {showAll ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                        </div>
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {visibleProducts.map((service, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-[4/5] rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Background Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/60" />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />

                            {/* Floating Tags (Top Right) */}
                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 flex flex-wrap justify-end gap-1.5 sm:gap-2 max-w-[70%]">
                                {service.tags.slice(0, 3).map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full text-[10px] sm:text-[11px] md:text-[13px] font-medium tracking-wide shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title (Bottom Left) */}
                            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 text-white">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-1 sm:mb-2">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More/Less Button (centered, below grid) */}
                {!showAll && (
                    <div className="flex justify-center mt-10 sm:mt-12 md:mt-16">
                        <button
                            onClick={() => setShowAll(true)}
                            className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/20"
                        >
                            View All {services.length} Products
                            <ChevronDown className="size-5" />
                        </button>
                    </div>
                )}

                {showAll && (
                    <div className="flex justify-center mt-10 sm:mt-12 md:mt-16">
                        <button
                            onClick={() => setShowAll(false)}
                            className="flex items-center gap-3 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
                        >
                            Show Less
                            <ChevronUp className="size-5" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
