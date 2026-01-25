"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(contentRef.current?.children || [], {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="min-h-screen py-16 sm:py-20 md:py-28 lg:py-32 bg-white flex flex-col justify-center border-t border-gray-50">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full h-full flex flex-col lg:flex-row gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-start">

                {/* Left Column: Heading and Support Badge */}
                <div className="flex-1 flex flex-col gap-10 sm:gap-14 md:gap-16 lg:gap-20">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-bold tracking-tighter text-gray-950 leading-[0.85]">
                        We're here <br /> for you.
                    </h2>

                    {/* 24/7 Support Badge */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl lg:rounded-[2rem] flex items-center gap-4 sm:gap-5 md:gap-6 max-w-sm shadow-sm"
                    >
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop"
                                alt="Support Specialist"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-base sm:text-lg md:text-xl font-bold text-gray-950 leading-tight">24/7 Pharmacy <br /> Helpline</p>
                            <div className="flex items-center gap-2 mt-1 sm:mt-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs sm:text-sm font-semibold text-green-600">Online •</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Contact Form */}
                <div ref={contentRef} className="flex-1 w-full flex flex-col gap-8 sm:gap-10 md:gap-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                        {/* First Name */}
                        <div className="group">
                            <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gray-950 transition-colors">First Name</label>
                            <input
                                type="text"
                                placeholder="John"
                                className="w-full mt-2 sm:mt-3 md:mt-4 pb-3 sm:pb-4 bg-transparent border-b border-gray-200 focus:border-gray-950 outline-none placeholder:text-gray-300 text-base sm:text-lg font-medium transition-colors"
                            />
                        </div>
                        {/* Last Name */}
                        <div className="group">
                            <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gray-950 transition-colors">Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                                className="w-full mt-2 sm:mt-3 md:mt-4 pb-3 sm:pb-4 bg-transparent border-b border-gray-200 focus:border-gray-950 outline-none placeholder:text-gray-300 text-base sm:text-lg font-medium transition-colors"
                            />
                        </div>
                        {/* Phone */}
                        <div className="group">
                            <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gray-950 transition-colors">Phone</label>
                            <input
                                type="text"
                                placeholder="(555) 000-0000"
                                className="w-full mt-2 sm:mt-3 md:mt-4 pb-3 sm:pb-4 bg-transparent border-b border-gray-200 focus:border-gray-950 outline-none placeholder:text-gray-300 text-base sm:text-lg font-medium transition-colors"
                            />
                        </div>
                        {/* Email */}
                        <div className="group">
                            <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gray-950 transition-colors">Email</label>
                            <input
                                type="text"
                                placeholder="you@example.com"
                                className="w-full mt-2 sm:mt-3 md:mt-4 pb-3 sm:pb-4 bg-transparent border-b border-gray-200 focus:border-gray-950 outline-none placeholder:text-gray-300 text-base sm:text-lg font-medium transition-colors"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="group">
                        <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gray-950 transition-colors">Message</label>
                        <textarea
                            rows={1}
                            placeholder="Tell us how we can help?"
                            className="w-full mt-2 sm:mt-3 md:mt-4 pb-3 sm:pb-4 bg-transparent border-b border-gray-200 focus:border-gray-950 outline-none placeholder:text-gray-300 text-base sm:text-lg font-medium transition-colors resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-start sm:justify-end mt-2 sm:mt-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-green-200 hover:bg-green-600 hover:text-white text-green-900 px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-bold transition-all text-base sm:text-lg md:text-xl shadow-sm hover:shadow-lg"
                        >
                            Submit
                        </motion.button>
                    </div>
                </div>

            </div>
        </section>
    );
}
