"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        number: "10K+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        ),
        description: "Thousands of happy customers who trust us for their prescriptions.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
    },
    {
        number: "70+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        ),
        description: "Licensed pharmacists ready to serve you.",
        bgColor: "bg-gray-100",
        iconColor: "text-gray-600",
    },
    {
        number: "30+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
        ),
        description: "Years of trusted pharmacy service in your community.",
        bgColor: "bg-orange-100",
        iconColor: "text-orange-600",
    },
    {
        number: "5K+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        description: "Medicines and health products available in stock.",
        bgColor: "bg-cyan-100",
        iconColor: "text-cyan-600",
    },
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                y: 80,
                opacity: 0,
                duration: 1.4,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(paragraphRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: paragraphRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(buttonRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: "top 90%",
                    end: "top 60%",
                    toggleActions: "play none none reverse",
                },
            });

            if (cardsRef.current) {
                const cards = cardsRef.current.querySelectorAll(".stat-card");
                gsap.from(cards, {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                        end: "top 40%",
                        toggleActions: "play none none reverse",
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen py-16 sm:py-20 md:py-28 lg:py-32 bg-white flex flex-col justify-center">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
                {/* Header with embedded image */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2
                        ref={headingRef}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-300 tracking-wide italic flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 md:mb-12"
                    >
                        <span>WE PUT</span>
                        <div className="w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 rounded-full overflow-hidden bg-gray-200 inline-flex shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
                                alt="Pharmacist"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span>YOUR WELLNESS FIRST</span>
                    </h2>

                    <p
                        ref={paragraphRef}
                        className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 px-4 sm:px-0"
                    >
                        Our pharmacy offers a complete range of prescription medications,
                        over-the-counter products, and health consultations.
                        With expert pharmacists on staff, we aim to provide personalized
                        care in a friendly and accessible environment.
                    </p>

                    <motion.button
                        ref={buttonRef}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-green-400 hover:bg-green-500 text-green-950 px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-full font-semibold transition-all text-sm sm:text-base shadow-lg"
                    >
                        Learn More
                    </motion.button>
                </div>

                {/* Stats Cards */}
                <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-14 md:mt-16 lg:mt-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeInOut" } }}
                            className={`stat-card ${stat.bgColor} rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[180px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] shadow-sm hover:shadow-xl transition-shadow duration-500`}
                        >
                            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">
                                {stat.number}
                            </div>
                            <div>
                                <div className={`${stat.iconColor} mb-2 sm:mb-3 md:mb-4`}>
                                    {stat.icon}
                                </div>
                                <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
