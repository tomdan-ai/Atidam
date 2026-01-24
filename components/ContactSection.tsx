"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(".animate-contact", {
                y: 40,
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
        <section ref={sectionRef} id="contact" className="py-24 sm:py-32 bg-white">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left: Info */}
                    <div className="flex flex-col gap-12 animate-contact">
                        <div>
                            <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                                Get In Touch
                            </span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-950 leading-tight">
                                Let's Build a <span className="text-green-500">Healthier</span> Nigeria Together.
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                                    <MapPin className="size-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-950 text-xl mb-1">Office Address</h4>
                                    <p className="text-gray-600 text-lg">No. 1 Olayiwola Street, Oko-Oba, Lagos, Nigeria.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                                    <Phone className="size-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-950 text-xl mb-1">Phone</h4>
                                    <p className="text-gray-600 text-lg">+234 706 192 0889</p>
                                    <p className="text-gray-600 text-lg">+234 803 337 8445</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                                    <Mail className="size-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-950 text-xl mb-1">Email</h4>
                                    <p className="text-gray-600 text-lg">info@atidampharmaceuticals.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div ref={contentRef} className="bg-gray-50 p-8 sm:p-12 rounded-[2.5rem] border border-gray-100 animate-contact">
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                                    <input type="text" placeholder="John" className="w-full p-4 rounded-xl bg-white border border-gray-100 focus:border-green-500 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full p-4 rounded-xl bg-white border border-gray-100 focus:border-green-500 outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl bg-white border border-gray-100 focus:border-green-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                                <select className="w-full p-4 rounded-xl bg-white border border-gray-100 focus:border-green-500 outline-none transition-all appearance-none">
                                    <option>Become a Partner</option>
                                    <option>Wholesale Inquiry</option>
                                    <option>General Feedback</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                                <textarea rows={4} placeholder="How can we help?" className="w-full p-4 rounded-xl bg-white border border-gray-100 focus:border-green-500 outline-none transition-all resize-none" />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-green-600 text-white py-5 rounded-xl font-bold text-lg shadow-lg shadow-green-900/10 hover:bg-green-700 transition-all"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
