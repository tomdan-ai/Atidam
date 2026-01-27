"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Send } from "lucide-react";

const partners = [
    { name: "GlaxoSmithKline PLC (GSK)", logo: "/GSK.png", website: "https://www.gsk.com" },
    { name: "PFIZER Pharmaceuticals", logo: "/Pfizer.svg", website: "https://www.pfizer.com" },
    { name: "Fidson Pharmaceuticals", logo: "/fidson-logo.jpg", website: "https://www.fidson.com" },
    { name: "Evans Pharmaceuticals", logo: "/evans.png", website: "#" },
    { name: "Novartis Pharmaceuticals", logo: "/novartis.png", website: "https://www.novartis.com" },
    { name: "Ranbaxy Pharmaceuticals", logo: "/ranbaxy.png", website: "#" },
    { name: "Shalina Pharmaceuticals", logo: "/shalina.png", website: "https://www.shalina.com" },
    { name: "Dailyneed Group", logo: "/dailyneed.png", website: "https://dailyneedgroup.com" },
    { name: "May & Baker Nigeria Plc", logo: "/may_baker.png", website: "https://www.may-baker.com" },
    { name: "Sanofi Pharmaceuticals", logo: "/sanofi.png", website: "https://www.sanofi.com" },
    { name: "LEK Pharmaceuticals", logo: "/lek.png", website: "#" },
];

export default function PartnersGrid() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <section className="py-12 md:py-20 px-6 max-w-[1600px] mx-auto">
            {/* Partners Grid */}
            <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
            >
                {partners.map((partner, index) => (
                    <motion.a
                        key={partner.name}
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-between min-h-[180px] md:min-h-[200px]"
                    >
                        <div className="flex-1 flex items-center justify-center p-2 w-full">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-w-full max-h-20 md:max-h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 will-change-transform dark:brightness-0 dark:invert dark:opacity-70 dark:group-hover:opacity-100"
                            />
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-50 dark:border-gray-800 w-full text-center">
                            <h3 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors break-words leading-tight">
                                {partner.name}
                            </h3>
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-24 text-center"
            >
                <button
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200 dark:hover:shadow-green-900/30"
                >
                    <span>Become a Partner</span>
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Expandable Form */}
                <AnimatePresence>
                    {isFormOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 40 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="overflow-hidden max-w-2xl mx-auto text-left"
                        >
                            <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-green-100 dark:border-gray-800 relative">
                                <button
                                    onClick={() => setIsFormOpen(false)}
                                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <X className="size-6" />
                                </button>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Join Our Network</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Fill out the details below and we'll get back to you.</p>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Company Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="Enter company name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Contact Person</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="Full name" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Email Address</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="email@company.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Phone Number</label>
                                            <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="+234..." />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Partnership Proposal</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-all resize-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="Briefly describe how you'd like to partner with us..." />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold uppercase tracking-widest hover:bg-green-600 dark:hover:bg-green-500 dark:hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <span>Submit Application</span>
                                        <Send className="size-4" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
