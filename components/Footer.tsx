"use client";

import { motion } from "framer-motion";
import { Linkedin, Facebook, ArrowUp, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-100">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
                <div className="flex flex-col lg:grid lg:grid-cols-4 justify-between items-start gap-12 lg:gap-20 mb-12 sm:mb-16 md:mb-24 lg:mb-32">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-6 col-span-1">
                        <h2 className="text-3xl font-black tracking-tighter text-gray-950">Atidam</h2>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            A licensed pharmaceutical wholesale distributor delivering quality, speed, and reliability across Nigeria.
                        </p>
                        <div className="flex gap-4">
                            <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-green-600"><Linkedin className="size-5" /></motion.a>
                            <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-green-600"><Facebook className="size-5" /></motion.a>
                            <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-green-600"><Instagram className="size-5" /></motion.a>
                            <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-green-600"><Twitter className="size-5" /></motion.a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Company</h4>
                        <ul className="flex flex-col gap-4">
                            {["About Atidam", "Products", "Specialty Services", "Partnerships", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-900 font-medium hover:text-green-600 transition-colors text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Legal</h4>
                        <ul className="flex flex-col gap-4">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Licensing"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-900 font-medium hover:text-green-600 transition-colors text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div className="flex flex-col gap-6 col-span-1">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Contact Us</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Phone</p>
                                <a href="tel:+2347061920889" className="text-gray-950 font-medium hover:text-green-600 transition-colors text-sm block">+234 706 192 0889</a>
                                <a href="tel:+2348033378445" className="text-gray-950 font-medium hover:text-green-600 transition-colors text-sm block">+234 803 337 8445</a>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Email</p>
                                <a href="mailto:info@atidampharmaceuticals.com" className="text-gray-950 font-medium hover:text-green-600 transition-colors text-sm">info@atidampharmaceuticals.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-10 border-t border-gray-100 gap-6">
                    <p className="text-sm font-medium text-gray-400 text-center sm:text-left">
                        © 2026 Atidam Pharmaceuticals Limited. All rights reserved.
                    </p>

                    {/* Scroll to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, backgroundColor: "#059669", color: "#fff" }}
                        className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-950 shadow-sm transition-all"
                    >
                        <ArrowUp className="size-5" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
