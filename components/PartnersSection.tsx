"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
    "GlaxoSmithKline PLC (GSK)",
    "PFIZER Pharmaceuticals",
    "Fidson Pharmaceuticals",
    "Evans Pharmaceuticals",
    "Novartis Pharmaceuticals",
    "Ranbaxy Pharmaceuticals",
    "Shalina Pharmaceuticals",
    "Dailyneed Group",
    "May & Baker Nigeria Plc",
    "Sanofi Pharmaceuticals",
    "LEK Pharmaceuticals",
];

export default function PartnersSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="partners" ref={sectionRef} className="py-20 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 mb-12 text-center" ref={titleRef}>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Trusted by Industry Leaders</p>
            </div>

            {/* Scrolling Marquee - CSS animation is smoother for infinite loop than JS in this case */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-16 md:gap-24 items-center whitespace-nowrap animate-marquee">
                    {[...partners, ...partners].map((partner, idx) => (
                        <div key={idx} className="text-2xl md:text-3xl font-bold text-gray-300 hover:text-green-600 transition-colors cursor-default select-none">
                            {partner}
                        </div>
                    ))}
                </div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
