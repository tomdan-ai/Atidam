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
            className="w-full min-h-screen relative overflow-hidden"
        >
            {/* Background Image with Blur */}
            <div
                className="absolute inset-0 bg-cover bg-[center_top] sm:bg-center bg-no-repeat scale-105 sm:scale-110 hero-bg blur-[1px] transition-transform duration-1000"
                style={{ backgroundImage: 'url(/reception.jpg)' }}
            />

            {/* Premium Gradient Overlay for Readability - Light Mode */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/10 sm:from-white/90 sm:via-white/50 sm:to-transparent dark:from-gray-950/95 dark:via-gray-950/70 dark:to-gray-950/10 sm:dark:from-gray-950/90 sm:dark:via-gray-950/50 sm:dark:to-transparent" />

            <div ref={contentRef} className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 min-h-screen relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center min-h-screen justify-center lg:justify-start">
                    {/* Left Column */}
                    <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">

                        {/* Heading */}
                        <div className="overflow-hidden">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[1.05] animate-item">
                                Leading <br />
                                <span className="text-emerald-700 dark:text-emerald-400">Wholesale</span> & <br />
                                Retail Pharmacy
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-lg font-medium">
                                Your trusted partner for pharmaceutical distribution and retail healthcare solutions.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold transition-all text-base sm:text-lg md:text-xl shadow-xl hover:shadow-emerald-900/20 animate-item"
                        >
                            Partner with Us
                        </motion.button>

                        {/* Stats Footer */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 mt-4 sm:mt-8 md:mt-12 animate-item">
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 dark:text-white">4.9</span>
                                </div>
                                <div className="flex gap-0.5 sm:gap-1 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5 md:size-6 transition-transform group-hover:scale-110">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <div className="border-l-0 sm:border-l-4 border-gray-200 dark:border-gray-700 pl-0 sm:pl-10 md:pl-16 lg:pl-20 pt-4 sm:pt-0 border-t-4 sm:border-t-0">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 dark:text-white mb-1 sm:mb-2">8+</div>
                                <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black text-gray-400 dark:text-gray-500">Years of Excellence</p>
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
