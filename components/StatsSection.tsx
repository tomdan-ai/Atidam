"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "NAFDAC Approved Products", value: "7,000+" },
    { label: "Hospitals Served", value: "3,500+" },
    { label: "State Coverage", value: "36" },
    { label: "Delivery Speed", value: "24h" },
];

export default function StatsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(".stat-item", {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-green-600">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item flex flex-col items-center text-center">
                            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2">
                                {stat.value}
                            </span>
                            <span className="text-sm sm:text-base font-bold text-green-100 uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
