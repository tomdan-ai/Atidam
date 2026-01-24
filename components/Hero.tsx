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
            className="w-full min-h-[90vh] bg-cover bg-center bg-no-repeat relative overflow-hidden hero-bg flex items-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=2000&auto=format&fit=crop")' }}
        >
            {/* Darker Overlay for better readability on bright images */}
            <div className="absolute inset-0 bg-black/40" />

            <div ref={contentRef} className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-32 pb-20 relative z-10 w-full">
                <div className="max-w-4xl">
                    {/* Intro Badge */}
                    <div className="overflow-hidden mb-6">
                        <span className="inline-block bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase animate-item">
                            Licensed Wholesale Distributor
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="overflow-hidden mb-6">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] animate-item">
                            Leading Pharmaceutical <br />
                            <span className="text-green-400">Distribution</span> Across Nigeria
                        </h1>
                    </div>

                    {/* Subheadline & Intro Text */}
                    <div className="overflow-hidden mb-10">
                        <p className="text-xl sm:text-2xl font-medium text-white/90 mb-4 animate-item">
                            Reliable. Efficient. Trusted Nationwide.
                        </p>
                        <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed animate-item">
                            Atidam Pharmaceuticals Limited is a licensed pharmaceutical wholesale distributor delivering quality, speed, and reliability to healthcare providers across Nigeria.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 animate-item">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all text-lg shadow-xl shadow-green-900/20"
                        >
                            Become a Partner
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all text-lg"
                        >
                            Contact Sales
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
                >
                    <div className="w-1 h-2 bg-green-400 rounded-full" />
                </motion.div>
            </div>
        </div>
    );
}
