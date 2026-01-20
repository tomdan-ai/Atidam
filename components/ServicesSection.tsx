"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "General medicine",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
        tags: ["Therapy", "Family medicine", "Diagnostics", "Geriatrics"],
    },
    {
        title: "Pediatrics",
        image: "https://images.unsplash.com/photo-1581594632702-52c1138c242b?q=80&w=800&auto=format&fit=crop",
        tags: ["Therapy", "Consultation", "Diagnostics"],
    },
    {
        title: "Diagnostics",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
        tags: ["Abdominal ultrasound diagnostics", "Family medicine", "Preventive check-up"],
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
            // Header Animation
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

            // Cards Animation
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

            // Controls Animation
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
        <section ref={sectionRef} className="min-h-screen py-32 bg-white flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-16 w-full">
                {/* Header Section */}
                <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 animate-item">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-gray-900 max-w-4xl leading-tight">
                        We are dedicated to providing comprehensive, compassionate, and high-quality healthcare services tailored to meet your unique needs.
                    </h2>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 border border-gray-200 rounded-full pl-8 pr-2 py-2 group hover:border-gray-900 transition-colors"
                    >
                        <span className="text-sm font-semibold text-gray-900">All Services</span>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <ArrowRight className="size-4" />
                        </div>
                    </motion.button>
                </div>

                {/* Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
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
                            <div className="absolute top-8 right-8 flex flex-wrap justify-end gap-2 max-w-[70%]">
                                {service.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full text-[13px] font-medium tracking-wide shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title (Bottom Left) */}
                            <div className="absolute bottom-10 left-10 text-white">
                                <h3 className="text-3xl font-bold tracking-tight mb-2">{service.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div ref={controlsRef} className="flex justify-center gap-4 mt-8">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="size-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                        <ArrowRight className="size-5" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
