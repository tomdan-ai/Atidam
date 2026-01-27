"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    {
        name: "Dr. Adebayo Atidam",
        role: "Chief Executive Officer",
        portfolio: "MBA in Healthcare Management | 25+ years in pharmaceutical distribution | Former Director at Nigerian Pharmaceutical Council",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    },
    {
        name: "Pharm. Chioma Okonkwo",
        role: "Chief Pharmacist",
        portfolio: "Doctor of Pharmacy (PharmD) | Certified Healthcare Quality Professional | 18 years clinical experience",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
    },
    {
        name: "Mr. Emeka Nwosu",
        role: "Director of Operations",
        portfolio: "BSc. Supply Chain Management | Cold Chain Logistics Specialist | 15+ years in pharmaceutical logistics",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
        name: "Mrs. Folake Adeyemi",
        role: "Head of Quality Assurance",
        portfolio: "MSc. Pharmaceutical Chemistry | WHO-GMP Certified Auditor | 12 years in quality control",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
];

const stats = [
    {
        number: "10K+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        ),
        description: "Thousands of happy customers who trust us for their prescriptions.",
        bgColor: "bg-green-100 dark:bg-green-900/30",
        iconColor: "text-green-600 dark:text-green-400",
    },
    {
        number: "70+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        ),
        description: "Licensed pharmacists ready to serve you.",
        bgColor: "bg-gray-100 dark:bg-gray-800",
        iconColor: "text-gray-600 dark:text-gray-400",
    },
    {
        number: "30+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
        ),
        description: "Years of trusted pharmacy service in your community.",
        bgColor: "bg-orange-100 dark:bg-orange-900/30",
        iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
        number: "5K+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        description: "Medicines and health products available in stock.",
        bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
        iconColor: "text-cyan-600 dark:text-cyan-400",
    },
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
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

            if (teamRef.current) {
                const members = teamRef.current.querySelectorAll(".team-member");
                gsap.from(members, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: teamRef.current,
                        start: "top 80%",
                    },
                });
            }

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
        <section id="about" ref={sectionRef} className="min-h-screen py-16 sm:py-20 md:py-28 lg:py-32 bg-white dark:bg-black flex flex-col justify-center">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2
                        ref={headingRef}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-300 dark:text-gray-600 tracking-wide italic flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 md:mb-12"
                    >
                        <span>MEET OUR</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium not-italic">LEADERSHIP</span>
                        <span>TEAM</span>
                    </h2>

                    <p
                        ref={paragraphRef}
                        className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                    >
                        Our experienced team of healthcare professionals and business leaders
                        are dedicated to ensuring the highest standards of pharmaceutical
                        distribution and customer care.
                    </p>
                </div>

                {/* Team Members Grid */}
                <div ref={teamRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20 md:mb-24">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeInOut" } }}
                            className="team-member flex flex-col items-center text-center group"
                        >
                            {/* Circular Image */}
                            <div className="relative mb-4 sm:mb-6">
                                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20 shadow-xl ring-4 ring-white dark:ring-gray-800 group-hover:ring-emerald-100 dark:group-hover:ring-emerald-800/50 transition-all duration-500">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                {/* Decorative ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-200 dark:border-emerald-700 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-125 transition-all duration-500" />
                            </div>

                            {/* Name and Role */}
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
                                {member.role}
                            </p>

                            {/* Portfolio in fine print */}
                            <p className="text-gray-400 dark:text-gray-500 text-[10px] sm:text-xs leading-relaxed max-w-[200px] sm:max-w-[220px] md:max-w-[240px]">
                                {member.portfolio}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Cards */}
                <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeInOut" } }}
                            className={`stat-card ${stat.bgColor} rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[180px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] shadow-sm hover:shadow-xl transition-shadow duration-500`}
                        >
                            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white">
                                {stat.number}
                            </div>
                            <div>
                                <div className={`${stat.iconColor} mb-2 sm:mb-3 md:mb-4`}>
                                    {stat.icon}
                                </div>
                                <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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
