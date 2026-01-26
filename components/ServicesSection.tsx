"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Prescription Drugs",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
        tags: ["Generic", "Brand Name", "Specialty", "Compounding"],
    },
    {
        title: "Vitamins & Supplements",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
        tags: ["Multivitamins", "Minerals", "Herbal"],
    },
    {
        title: "Personal Care",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
        tags: ["Skincare", "First Aid", "Wellness Products"],
    },
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const controlsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                },
            });

            if (cardsRef.current) {
                gsap.from(cardsRef.current.children, {
                    y: 80,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                    },
                });
            }

            gsap.from(controlsRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: controlsRef.current,
                    start: "top 95%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen py-16 sm:py-20 md:py-28 lg:py-32 bg-white flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
                {/* Header Section */}
                <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-14 md:mb-16 lg:mb-20 animate-item">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 max-w-4xl leading-tight">
                        Your reliable link to global pharmaceutical brands. We offer high-volume inventory, transparent pricing, and expert regulatory guidance to keep your facility fully stocked.
                    </h2>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 sm:gap-3 border border-gray-200 rounded-full pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 lg:pl-8 group hover:border-gray-900 transition-colors self-start lg:self-auto"
                    >
                        <span className="text-xs sm:text-sm font-semibold text-gray-900">All Products</span>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <ArrowRight className="size-3 sm:size-4" />
                        </div>
                    </motion.button>
                </div>

                {/* Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="relative aspect-[4/5] rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
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
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div ref={controlsRef} className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="size-4 sm:size-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                        <ArrowRight className="size-4 sm:size-5" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
