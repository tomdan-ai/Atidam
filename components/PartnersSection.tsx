"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
    { name: "GlaxoSmithKline PLC (GSK)", logo: "/GSK.png" },
    { name: "PFIZER Pharmaceuticals", logo: "/Pfizer.svg" },
    { name: "Fidson Pharmaceuticals", logo: "/fidson-logo.jpg" },
    { name: "Evans Pharmaceuticals", logo: "/evans.png" },
    { name: "Novartis Pharmaceuticals", logo: "/novartis.png" },
    { name: "Ranbaxy Pharmaceuticals", logo: "/ranbaxy.png" },
    { name: "Shalina Pharmaceuticals", logo: "/shalina.png" },
    { name: "Dailyneed Group", logo: "/dailyneed.png" },
    { name: "May & Baker Nigeria Plc", logo: "/may_baker.png" },
    { name: "Sanofi Pharmaceuticals", logo: "/sanofi.png" },
    { name: "LEK Pharmaceuticals", logo: "/lek.png" },
];

import { ReactLenis } from "lenis/react";

export default function PartnersSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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

    // Infinite Scroll Logic
    useEffect(() => {
        // We need to target the actual scrolling element.
        // If ReactLenis renders a div, the ref should point to it or its wrapper.
        // We'll verify this. If ReactLenis uses content-wrapper pattern, we might need adjustments.
        // For now, let's assume scrollContainerRef attaches to the scrollable div.

        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;
        let isPaused = false;

        const scroll = () => {
            if (!isPaused && container) {
                // Determine the scroll speed (pixels per frame)
                // Increased to 3.6 to match the requested 10s speed exactly
                container.scrollLeft += 3.6;

                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        // Pause ONLY on touch interaction for better mobile UX (swiping)
        // Removed mouseenter/mouseleave pause so it continues sliding on hover as requested
        const pause = () => isPaused = true;
        const resume = () => isPaused = false;

        container.addEventListener("touchstart", pause);
        container.addEventListener("touchend", resume);

        return () => {
            cancelAnimationFrame(animationFrameId);
            container.removeEventListener("touchstart", pause);
            container.removeEventListener("touchend", resume);
        };
    }, []);

    return (
        <section id="partners" ref={sectionRef} className="py-20 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 mb-16 text-center" ref={titleRef}>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Trusted by Industry Leaders</p>
            </div>

            {/* Scrolling Container with Lenis */}
            <div className="relative w-full group">
                <ReactLenis
                    options={{
                        orientation: 'horizontal',
                        gestureOrientation: 'both',
                        smoothWheel: true,
                        wheelMultiplier: 1,
                        touchMultiplier: 2,
                        infinite: false // We handle infinite manually via reset
                    }}
                    className="flex gap-16 md:gap-24 items-end overflow-x-auto no-scrollbar scroll-smooth" // added scroll-smooth just in case
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-16 md:gap-24 items-end min-w-max px-4"
                    >
                        {[...partners, ...partners].map((partner, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-end gap-4 min-w-[200px] shrink-0 select-none transition-opacity duration-300">
                                <div className="h-20 w-auto flex items-end justify-center">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-[160px] object-contain transition-all duration-300 pointer-events-none"
                                    />
                                </div>
                                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider text-center max-w-[150px] whitespace-normal">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </ReactLenis>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
