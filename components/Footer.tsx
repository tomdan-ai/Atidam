"use client";

import { motion } from "framer-motion";
import { Linkedin, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-50">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 sm:gap-12 md:gap-16 lg:gap-20 mb-12 sm:mb-16 md:mb-24 lg:mb-32">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-gray-950">Atidam</h2>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-32 w-full lg:w-auto">
                        {/* Navigation */}
                        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">Navigation</h4>
                            <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                                {["About Us", "Products", "Health Resources", "Contact Us", "Locations"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-950 font-bold hover:text-green-600 transition-colors uppercase text-[11px] sm:text-[12px] md:text-[13px] tracking-wide">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">Resources</h4>
                            <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                                {["Blog", "FAQ"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-950 font-bold hover:text-green-600 transition-colors uppercase text-[11px] sm:text-[12px] md:text-[13px] tracking-wide">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contacts */}
                        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 col-span-2 sm:col-span-1">
                            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">Contacts</h4>
                            <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                                <li><a href="tel:8085550111" className="text-gray-950 font-bold hover:text-green-600 transition-colors text-[11px] sm:text-[12px] md:text-[13px] tracking-wide">(808) 555-0111</a></li>
                                <li><a href="mailto:info@atidam.com" className="text-gray-950 font-bold hover:text-green-600 transition-colors text-[11px] sm:text-[12px] md:text-[13px] tracking-wide break-all">info@atidam.com</a></li>
                                <li className="text-gray-400 font-bold text-[11px] sm:text-[12px] md:text-[13px] tracking-wide">775 Rolling Green Rd</li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3 sm:gap-4">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-950 transition-colors"
                        >
                            <Linkedin className="size-4 sm:size-5 md:size-6" />
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-950 transition-colors"
                        >
                            <Facebook className="size-4 sm:size-5 md:size-6" />
                        </motion.a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-10 md:pt-12 border-t border-gray-100 gap-4 sm:gap-6 md:gap-8">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-8 text-xs sm:text-sm font-semibold text-gray-400 text-center sm:text-left">
                        <p>© 2025 by Atidam Pharmaceutical. All rights reserved</p>
                        <span className="hidden sm:inline">/</span>
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                    </div>

                    {/* Scroll to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl sm:rounded-3xl border border-gray-100 flex items-center justify-center text-gray-950 shadow-sm hover:shadow-lg transition-all"
                    >
                        <ArrowUp className="size-5 sm:size-6" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
