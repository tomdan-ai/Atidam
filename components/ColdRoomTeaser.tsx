"use client";

import { motion } from "framer-motion";
import { Thermometer, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ColdRoomTeaser() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-green-950/20 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 dark:bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-xl dark:shadow-2xl"
                >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/25">
                            <Thermometer className="size-10 md:size-12 text-white" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                            State-of-the-Art Cold Room Facility
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
                            Our pharmaceutical cold room maintains optimal storage conditions with precise temperature control,
                            continuous monitoring, and backup power support — ensuring full regulatory compliance.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <Link href="/wholesale#cold-room" className="flex-shrink-0">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold text-base md:text-lg shadow-lg shadow-green-600/25 transition-all duration-300"
                        >
                            Learn More
                            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
