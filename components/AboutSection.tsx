"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(".animate-up", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 sm:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Content */}
                    <div ref={contentRef} className="flex flex-col gap-8">
                        <div>
                            <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block animate-up">
                                Our Story
                            </span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-950 leading-tight animate-up">
                                Your Strategic Partner in <span className="text-green-500">Healthcare</span> Delivery.
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6 text-lg text-gray-600 leading-relaxed animate-up">
                            <p>
                                Atidam Pharmaceuticals Limited is a licensed wholesale distributor of NAFDAC-approved pharmaceutical and medical products. We supply retail pharmacy chains, independent pharmacies, wholesalers, hospitals, health systems, and institutional healthcare providers across Nigeria.
                            </p>
                            <p>
                                Our promise is simple: deliver authentic, high-quality products at competitive prices, backed by fast and accurate delivery. With deep industry knowledge and a robust distribution network, we help healthcare providers serve their communities better.
                            </p>
                            <p className="font-medium text-gray-900">
                                We are more than a wholesaler — we are your strategic partner in healthcare delivery. Our flexible service model improves efficiency, increases savings opportunities, and supports long-term growth for our customers.
                            </p>
                        </div>

                        {/* Mission Box */}
                        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 animate-up">
                            <h3 className="text-2xl font-bold text-gray-950 mb-4 flex items-center gap-3">
                                <div className="w-2 h-8 bg-green-500 rounded-full" />
                                Our Mission
                            </h3>
                            <p className="text-xl text-gray-700 leading-relaxed italic">
                                "To deliver value to our customers and build trust through sustainable long-term partnerships."
                            </p>
                        </div>
                    </div>

                    {/* Right: Image & Statement */}
                    <div className="relative">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl animate-up">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=1200&auto=format&fit=crop"
                                alt="Modern Pharmaceutical Distribution"
                                className="w-full h-full object-cover aspect-[4/5]"
                            />
                        </div>

                        {/* Floating Statement */}
                        <div className="absolute -bottom-12 -left-12 hidden xl:block w-3/4 bg-green-600 text-white p-10 rounded-[2rem] shadow-xl animate-up">
                            <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">Foundation of Excellence</h4>
                            <p className="text-lg text-white/90 leading-relaxed">
                                Quality products, efficient delivery, prompt responsiveness to customer needs, and dedicated employees are the foundation of Atidam Pharmaceuticals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
