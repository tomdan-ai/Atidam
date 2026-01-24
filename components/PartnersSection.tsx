"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Mock logos for popular companies as requested
const partners = [
    { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" },
    { name: "Pfizer", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Pfizer_%282021%29.svg" },
    { name: "Roche", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Roche_Logo.svg" },
    { name: "Novartis", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Novartis_Logo.svg" },
    { name: "GSK", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/GSK_logo_2022.svg" },
    { name: "Sanofi", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Sanofi_Logo_2022.svg" },
    { name: "AstraZeneca", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/AstraZeneca_logo_2013.svg" },
    { name: "Bayer", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Bayer_logo.svg" },
];

export default function PartnersSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !scrollRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(".partner-header", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // Infinitely scroll the logos
            if (scrollRef.current) {
                const scrollWidth = scrollRef.current.scrollWidth;
                gsap.to(scrollRef.current, {
                    x: -(scrollWidth / 2),
                    duration: 20,
                    ease: "none",
                    repeat: -1,
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden border-b border-gray-100">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 mb-16 partner-header">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                            Our Network
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950">
                            Trusted by Global <span className="text-green-500">Manufacturers</span> & Healthcare Providers.
                        </h2>
                    </div>
                    <div className="pb-2">
                        <p className="text-gray-500 max-w-sm">
                            We bridge the gap between world-class pharmaceutical manufacturers and local healthcare institutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Logo Carousel */}
            <div className="relative flex items-center">
                <div ref={scrollRef} className="flex gap-20 items-center whitespace-nowrap">
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} className="w-32 sm:w-40 md:w-48 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-full h-auto object-contain max-h-12"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Box for Partners */}
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 mt-24">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:border-green-200 transition-all group">
                        <h3 className="text-2xl font-bold mb-4 text-gray-950">For Manufacturers</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We seek strategic alliances to expand our product portfolio. We offer nationwide exclusive distribution opportunities and contract manufacturing.
                        </p>
                        <button className="text-green-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-sm">
                            Become a Partner <span className="text-lg">→</span>
                        </button>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:border-green-200 transition-all group">
                        <h3 className="text-2xl font-bold mb-4 text-gray-950">For Distributors</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Partner with us to carry Atidam brands in your territory. Our value-added services help you grow market share and efficiency.
                        </p>
                        <button className="text-green-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-sm">
                            Join Regional Network <span className="text-lg">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
