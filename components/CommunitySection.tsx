"use client";

import { motion } from "framer-motion";
import { Users, Calendar } from "lucide-react";

export default function CommunitySection() {
    return (
        <section id="community" className="py-24 bg-white dark:bg-black relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 dark:bg-green-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 opacity-50" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block text-green-600 dark:text-green-400 font-bold tracking-widest uppercase text-sm mb-4">Community Impact</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 dark:text-white mb-8 leading-tight">
                                Empowering Youth, <br />
                                Supporting Society.
                            </h2>

                            <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl">
                                <p className="leading-relaxed">
                                    Beyond its role as a leading wholesale pharmaceutical outlet, Atidam Pharmacy has remained deeply committed to supporting society and empowering the youth.
                                </p>
                                <p className="leading-relaxed">
                                    For the past <span className="text-gray-900 dark:text-white font-bold underline decoration-green-500 decoration-2 underline-offset-4">eight years</span>, we have consistently demonstrated this commitment through our sponsorship of the Inter-House Competition at <span className="text-gray-900 dark:text-white font-bold">New Oko-Oba Primary School</span>.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-100/50 dark:shadow-black/20 relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6 text-green-600 dark:text-green-400">
                                        <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                                            <TrophyIcon className="size-6" />
                                        </div>
                                        <span className="font-bold uppercase tracking-widest text-[10px]">Latest Achievement</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">2025 Inter-House Competition</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        Proud sponsors of <span className="font-bold text-blue-600 dark:text-blue-400">Atidam House (Blue House)</span>, emerging in <span className="font-bold text-gray-900 dark:text-white">First Position</span>.
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-xs font-bold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-5 py-2.5 rounded-full ring-1 ring-green-100 dark:ring-green-800">
                                        <Calendar className="size-4" />
                                        <span>2025 EDITION</span>
                                    </div>
                                </div>

                                {/* Background Pattern */}
                                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500">
                                    <TrophyIcon className="size-48 rotate-12" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative group"
                        >
                            {/* Video Container with Premium Styling */}
                            <div className="relative aspect-[9/16] md:aspect-video lg:aspect-[4/5] xl:aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 dark:shadow-black/30 ring-1 ring-gray-900/5 dark:ring-white/5">
                                <video
                                    src="/IMG_0978.MP4"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Floating Stats or Tags */}
                            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-50 dark:border-gray-800 flex items-center gap-4 animate-bounce-slow">
                                <div className="size-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                                    <Users className="size-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-gray-900 dark:text-white leading-none">Yielding Impact</div>
                                    <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">Community Support</div>
                                </div>
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute -top-6 -right-6 size-32 bg-green-400/10 rounded-full blur-2xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
    )
}
