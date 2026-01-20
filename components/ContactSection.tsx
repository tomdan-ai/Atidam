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
        <section ref={sectionRef} className="min-h-screen py-32 bg-white flex flex-col justify-center border-t border-gray-50">
            <div className="max-w-[1600px] mx-auto px-16 w-full h-full flex flex-col lg:flex-row gap-20 items-start">

                {/* Left Column: Heading and Support Badge */}
                <div className="flex-1 flex flex-col gap-20">
                    <h2 className="text-[8rem] font-bold tracking-tighter text-gray-950 leading-[0.8]">
                        We're here <br /> for you.
                    </h2>

                    {/* 24/7 Support Badge */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-6 rounded-[2rem] flex items-center gap-6 max-w-sm shadow-sm"
                    >
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&auto=format&fit=crop"
                                alt="Support Specialist"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-xl font-bold text-gray-950 leading-tight">24/7 Pharmacy <br /> Helpline</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-semibold text-green-600">Online •</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Contact Form */}
                <div ref={contentRef} className="flex-1 w-full flex flex-col gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* First Name */}
                        <div className="group">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gray-950 transition-colors">First Name</label>
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full mt-4 pb-4 bg-transparent border-b border-gray-200 focus:border-gray-950 outline-none placeholder:text-gray-300 text-lg font-medium transition-colors"
                            />
                        </div>
                        {/* Last Name */}
                        <div className="group">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gray-950 transition-colors">Last Name</label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full mt-4 pb-4 bg-transparent border-b border-gray-200 focus:border-gray-950 outline-none placeholder:text-gray-300 text-lg font-medium transition-colors"
                            />
                        </div>
                        {/* Phone */}
                        <div className="group">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gray-950 transition-colors">Phone</label>
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full mt-4 pb-4 bg-transparent border-b border-gray-200 focus:border-gray-950 outline-none placeholder:text-gray-300 text-lg font-medium transition-colors"
                            />
                        </div>
                        {/* Email */}
                        <div className="group">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gray-950 transition-colors">Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full mt-4 pb-4 bg-transparent border-b border-gray-200 focus:border-gray-950 outline-none placeholder:text-gray-300 text-lg font-medium transition-colors"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="group">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gray-950 transition-colors">Message</label>
                        <textarea
                            rows={1}
                            placeholder="Tell us how we can help?"
                            className="w-full mt-4 pb-4 bg-transparent border-b border-gray-200 focus:border-gray-950 outline-none placeholder:text-gray-300 text-lg font-medium transition-colors resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-200 hover:bg-green-600 hover:text-white text-green-900 px-12 py-5 rounded-full font-bold transition-all text-xl shadow-sm hover:shadow-lg"
                        >
                            Submit
                        </motion.button>
                    </div>
                </div>

            </div>
        </section>
    );
}
