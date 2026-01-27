"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Thermometer, Zap, ShieldCheck } from "lucide-react";

export default function ColdRoomSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="cold-room" className="py-24 lg:py-32 bg-gray-950 text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-green-900/10 blur-[120px] rounded-full" />

            <div ref={containerRef} className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">

                {/* Visual Side */}
                <div className="relative">
                    <motion.div
                        style={{ y }}
                        className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <div className="aspect-[4/5] md:aspect-square bg-gray-900 flex items-center justify-center relative group">
                            <div className="absolute inset-0 bg-[url('/coldroom.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent z-10">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-bold border border-green-500/20 backdrop-blur-md">
                                    Temperature Controlled
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6">
                            State-of-the-Art <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                Cold Room Facility
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                            Ensuring the safety, quality, and efficacy of pharmaceutical products with our advanced storage infrastructure.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <Thermometer className="size-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Precise Control</h3>
                            <p className="text-gray-400">Strict adherence to temperature requirements stipulated by regulatory authorities.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                                <Zap className="size-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Backup Power</h3>
                            <p className="text-gray-400">Uninterrupted power support to guarantee constant storage conditions 24/7.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                                <ShieldCheck className="size-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Full Compliance</h3>
                            <p className="text-gray-400">Meeting and exceeding industry standards for product stability and safety.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
