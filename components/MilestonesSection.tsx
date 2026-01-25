"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    {
        title: "National Best in Shalina Pharmaceutical",
        period: "Last 6 years",
        image: "/mega-perf.jpg",
        icon: Trophy,
        color: "text-amber-500",
        bg: "bg-amber-100",
    },
    {
        title: "National Best in Dailyneed",
        period: "Last 5 years",
        image: "/BE-award.jpg",
        icon: Star,
        color: "text-blue-500",
        bg: "bg-blue-100",
    },
    {
        title: "National Best in May & Baker",
        period: "2024/25 National Forum",
        image: "/cert-of-regcognition.jpg",
        icon: Award,
        color: "text-green-500",
        bg: "bg-green-100",
    },
    {
        title: "Silver Distributor Award By DrugField",
        period: "2018",
        image: "/silver-award.jpg",
        icon: Medal,
        color: "text-slate-400",
        bg: "bg-slate-100",
    },
    {
        title: "ISN Southwest Strategic Wholesaler of the Year",
        period: "2020",
        image: "/appreciation-award.jpg",
        icon: Trophy,
        color: "text-purple-500",
        bg: "bg-purple-100",
    },
    {
        title: "Outstanding Performance by DrugField",
        period: "2017",
        image: "/outstanding-perf.jpg",
        icon: Star,
        color: "text-red-500",
        bg: "bg-red-100",
    },
];

export default function MilestonesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                },
            });

            if (gridRef.current) {
                gsap.from(gridRef.current.children, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%",
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
                <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Excellence Recognized</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 mb-6 tracking-tight">
                        Our Milestones & Achievements
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Consistently recognized for our commitment to quality, reliability, and outstanding performance in the pharmaceutical industry.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {milestones.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            {item.image ? (
                                <div className="h-48 w-full mb-6 rounded-2xl overflow-hidden relative group-hover:shadow-md transition-shadow">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            ) : (
                                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="size-7" />
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 font-medium">
                                {item.period}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
