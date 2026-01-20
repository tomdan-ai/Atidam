"use client";

import { motion } from "framer-motion";
import { Linkedin, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-white py-24 border-t border-gray-50">
            <div className="max-w-[1600px] mx-auto px-16 w-full">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-6xl font-black tracking-tighter text-gray-950">Rx+</h2>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-32">
                        {/* Navigation */}
                        <div className="flex flex-col gap-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Navigation</h4>
                            <ul className="flex flex-col gap-4">
                                {["About Us", "Products", "Health Resources", "Contact Us", "Locations"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-950 font-bold hover:text-green-600 transition-colors uppercase text-[13px] tracking-wide">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col gap-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Resources</h4>
                            <ul className="flex flex-col gap-4">
                                {["Blog", "FAQ"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-950 font-bold hover:text-green-600 transition-colors uppercase text-[13px] tracking-wide">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contacts */}
                        <div className="flex flex-col gap-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Contacts</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="tel:8085550111" className="text-gray-950 font-bold hover:text-green-600 transition-colors text-[13px] tracking-wide">(808) 555-0111</a></li>
                                <li><a href="mailto:RxPlusPharmacy@gmail.com" className="text-gray-950 font-bold hover:text-green-600 transition-colors text-[13px] tracking-wide">RxPlusPharmacy@gmail.com</a></li>
                                <li className="text-gray-400 font-bold text-[13px] tracking-wide">775 Rolling Green Rd</li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                            className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-950 transition-colors"
                        >
                            <Linkedin className="size-6" />
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                            className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-950 transition-colors"
                        >
                            <Facebook className="size-6" />
                        </motion.a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 gap-8">
                    <div className="flex items-center gap-8 text-sm font-semibold text-gray-400">
                        <p>© 2024 by Rx+ Pharmacy. All rights reserved</p>
                        <span className="hidden md:inline">/</span>
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                    </div>

                    {/* Scroll to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 rounded-3xl border border-gray-100 flex items-center justify-center text-gray-950 shadow-sm hover:shadow-lg transition-all"
                    >
                        <ArrowUp className="size-6" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
