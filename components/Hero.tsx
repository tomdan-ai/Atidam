"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

            tl.from(".hero-bg", {
                scale: 1.1,
                duration: 2,
                opacity: 0,
            })
                .from(".animate-item", {
                    y: 60,
                    opacity: 0,
                    stagger: 0.15,
                }, "-=1.4");
        }, contentRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={heroRef}
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden hero-bg"
            style={{ backgroundImage: 'url(/hero.jpeg)' }}
        >
            {/* Overlay for better readability if needed, though the prompt didn't specify, 
                let's keep it clean but ensure contrast */}
            <div className="absolute inset-0 bg-white/5 lg:bg-transparent" />

            <div ref={contentRef} className="max-w-[1600px] mx-auto px-16 pt-32 pb-16 min-h-screen relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Left Column */}
                    <div className="flex flex-col items-start gap-12">

                        {/* Heading */}
                        <div className="overflow-hidden">
                            <h1 className="text-7xl md:text-8xl lg:text-[6rem] font-black tracking-tighter text-gray-950 leading-[1] animate-item">
                                We are here <br />
                                to help you <br />
                                <span className="text-green-600">stay</span> healthy.
                            </h1>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-green-400 hover:bg-green-500 text-green-950 px-10 py-5 rounded-full font-bold transition-all text-xl shadow-lg hover:shadow-green-200/50 animate-item"
                        >
                            Make an appointment
                        </motion.button>

                        {/* Stats Footer */}
                        <div className="flex items-center gap-20 mt-12 animate-item">
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-5xl font-black text-gray-950">4.9</span>
                                </div>
                                <div className="flex gap-1 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 transition-transform group-hover:scale-110">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <div className="border-l-4 border-gray-200 pl-20">
                                <div className="text-5xl font-black text-gray-950 mb-2">20+</div>
                                <p className="text-sm uppercase tracking-[0.2em] font-black text-gray-400">Years experience</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Explore Button positioned bottom right */}
                    <div className="hidden lg:block relative h-full">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}
                            whileHover={{ y: 5 }}
                            className="absolute bottom-12 right-0 text-white font-bold flex flex-col items-center gap-4 cursor-pointer group"
                        >
                            <span className="text-sm uppercase tracking-[0.3em] [writing-mode:vertical-lr] mb-2">Explore</span>
                            <div className="w-px h-16 bg-white/40 relative overflow-hidden">
                                <motion.div
                                    animate={{ y: [0, 64] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 left-0 w-full h-1/2 bg-white"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
