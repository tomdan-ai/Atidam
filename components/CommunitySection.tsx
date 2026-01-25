"use client";

import { motion } from "framer-motion";
import { Heart, Users, Calendar } from "lucide-react";

export default function CommunitySection() {
    return (
        <section id="community" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <div className="lg:w-1/2">
                        <span className="inline-block text-green-600 font-bold tracking-widest uppercase text-sm mb-4">Community Impact</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-8 leading-tight">
                            Empowering Youth, <br />
                            Supporting Society.
                        </h2>

                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p>
                                Beyond its role as a leading wholesale pharmaceutical outlet, Atidam Pharmacy has remained deeply committed to supporting society and empowering the youth.
                            </p>
                            <p>
                                For the past <span className="text-gray-900 font-bold">eight years</span>, we have consistently demonstrated this commitment through our sponsorship of the Inter-House Competition at <span className="text-gray-900 font-bold">New Oko-Oba Primary School</span>.
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8 border border-green-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4 text-green-700">
                                    <TrophyIcon className="size-6" />
                                    <span className="font-bold uppercase tracking-widest text-xs">Latest Achievement</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">2025 Inter-House Competition</h3>
                                <p className="text-gray-600 mb-4">
                                    Proud sponsors of <span className="font-bold text-blue-600">Atidam House (Blue House)</span>, emerging in <span className="font-bold text-gray-900">First Position</span>.
                                </p>
                                <div className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 bg-white px-4 py-2 rounded-full shadow-sm">
                                    <Calendar className="size-4" />
                                    <span>2025 Edition</span>
                                </div>
                            </div>

                            {/* Decorative Pattern */}
                            <div className="absolute right-0 bottom-0 opacity-10">
                                <svg className="w-40 h-40 text-green-500" viewBox="0 0 200 200" fill="currentColor">
                                    <path d="M45,-76C58.3,-69.3,69.4,-59.6,78.2,-48.2C87,-36.8,93.5,-23.7,93.1,-10.8C92.7,2.1,85.4,14.9,76.5,26.4C67.6,37.9,57.1,48.1,45.4,56.6C33.7,65.1,20.8,71.9,7.4,72.9C-6,73.9,-19.9,69.1,-32.3,61.8C-44.7,54.5,-55.6,44.7,-64.3,33.1C-73,21.5,-79.5,8.1,-80.1,-5.6C-80.7,-19.3,-75.4,-33.3,-66.1,-44.6C-56.8,-55.9,-43.5,-64.5,-30.5,-71.4C-17.5,-78.3,-4.8,-83.5,4.7,-89.9L14.2,-96.4" transform="translate(100 100)" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-blue-50 p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col items-center text-center justify-center gap-4 h-full min-h-[200px]"
                            >
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                    <Users className="size-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Youth Empowerment</h4>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-red-50 p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col items-center text-center justify-center gap-4 h-full min-h-[200px] mt-8"
                            >
                                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                                    <Heart className="size-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Community Support</h4>
                                </div>
                            </motion.div>
                        </div>
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
