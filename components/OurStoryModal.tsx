"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Quote } from "lucide-react";
import { useEffect } from "react";
import { useLenis } from "lenis/react";

interface OurStoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function OurStoryModal({ isOpen, onClose }: OurStoryModalProps) {
    const lenis = useLenis();

    // Stop Lenis and prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            // Stop Lenis smooth scroll
            lenis?.stop();

            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            // Restart Lenis smooth scroll
            lenis?.start();

            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }

        return () => {
            lenis?.start();
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [isOpen, lenis]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div
                            className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto border border-gray-100 dark:border-gray-800"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md sticky top-0 z-10">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Story</h2>
                                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium uppercase tracking-wider">A Legacy of Trust</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                                >
                                    <X className="size-6" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto min-h-0 p-6 sm:p-10 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-transparent">
                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                    <p className="lead text-xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-emerald-500 pl-4 mb-8">
                                        "In a healthcare system where professionals constantly battle drug shortages, counterfeit medicines, rising costs, and the overwhelm of dealing with countless sales representatives, one thing became clear: something had to change."
                                    </p>

                                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        That realization led to the birth of <strong>Atidam Pharmacy in 2009</strong>. We set out to bridge that gap, so doctors, pharmacists, and healthcare teams could spend less time worrying about medicines and more time doing what truly matters: saving lives.
                                    </p>

                                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        Our journey began 16 years ago with a simple but powerful mission, to make genuine, affordable medicines easily accessible to pharmacies and healthcare providers. At the time, trusted products were hard to find, fair pricing was rare, and delays were routine. We believed the system could work better and we committed ourselves to being part of that solution.
                                    </p>

                                    <div className="my-10 flex flex-col items-center">
                                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-6">
                                            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 animate-pulse-slow"></div>
                                            <div className="absolute inset-2 rounded-full border border-emerald-500/40"></div>
                                            <img
                                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                                                alt="Dr. Adebayo Atidam"
                                                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
                                            />
                                            <div className="absolute bottom-2 right-2 bg-emerald-600 text-white p-2 rounded-full shadow-lg">
                                                <Quote className="size-5" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Adebayo Atidam</h3>
                                            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">Chief Executive Officer</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        We started small, as a modest distribution outfit, focused on the fundamentals: supplying authentic medicines, honoring our word, and treating every customer relationship with respect. That consistency built trust. And that trust fueled our growth.
                                    </p>

                                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        Today, Atidam Pharmacy is a fully established wholesale pharmacy serving pharmacies and healthcare institutions nationwide. Through long-standing partnerships with reputable local and international manufacturers, we supply a broad range of pharmaceutical products, from everyday essentials to specialty and hard-to-find medicines.
                                    </p>

                                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl mb-8 border border-emerald-100 dark:border-emerald-800/30">
                                        <h4 className="font-bold text-lg text-emerald-800 dark:text-emerald-300 mb-4 flex items-center gap-2">
                                            <span className="w-8 h-1 bg-emerald-500 rounded-full inline-block"></span>
                                            Recognition of Excellence
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                                            Our commitment to quality and reliability has not gone unnoticed. Over the years, our work has been recognized across the industry, earning us:
                                        </p>
                                        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                                            {[
                                                "National Best in Shalina (2019/20 and 2020/24)",
                                                "Drug Field 2020 Silver Distributor Award",
                                                "ISN Southwest Strategic Wholesaler of the year 2018/2019",
                                                "May and Baker 2024 Customer forum Outstanding Performance Award",
                                                "National Best in Daily Needs (2024/25)",
                                                "May and Baker Southwest Strategic Wholesaler of the year 2024/25"
                                            ].map((award, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                                                    <span className="text-gray-700 dark:text-gray-300">{award}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        These achievements reflect more than awards, they represent trust earned through consistency, compliance, and service excellence.
                                    </p>

                                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        Every product we handle is carefully sourced, properly stored, and distributed in full alignment with regulatory standards. We continue to invest in smarter systems, faster deliveries, and more responsive support, because healthcare never pauses, and neither do we.
                                    </p>

                                    <p className="text-xl font-medium text-gray-900 dark:text-white mt-8 border-t border-gray-100 dark:border-gray-800 pt-8 text-center sm:text-left">
                                        Sixteen years on, our story is still unfolding. What remains unchanged is our promise: to support healthcare providers with dependable supply, fair pricing, and service they can truly rely on.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
