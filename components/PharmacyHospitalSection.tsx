"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Heart, Activity, ShieldCheck, Truck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PharmacyHospitalSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(".animate-side", {
                x: (i) => i % 2 === 0 ? -60 : 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.3,
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
        <section ref={sectionRef} className="py-24 sm:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

                {/* Hospital Customers */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
                    <div className="animate-side order-2 lg:order-1">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
                                alt="Hospital Supply"
                                className="w-full h-full object-cover aspect-video lg:aspect-[4/3]"
                            />
                            <div className="absolute inset-0 bg-green-900/10" />
                        </div>
                    </div>
                    <div className="animate-side order-1 lg:order-2 flex flex-col gap-8">
                        <div>
                            <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                                Institutional Support
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-950 leading-tight">
                                Supplying Over <span className="text-green-500">3,500</span> Hospitals Across Nigeria.
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                As a leader in pharmaceutical distribution and supply chain management, we ensure that hospitals receive the right medicines and medical supplies at the right time — often within 24 hours.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6 mt-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-green-500 shrink-0">
                                        <Activity className="size-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-950">Rapid Delivery</h4>
                                        <p className="text-sm">Medicines delivered within 24 hours.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-green-500 shrink-0">
                                        <ShieldCheck className="size-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-950">Quality Assured</h4>
                                        <p className="text-sm">Exceeding customer expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pharmacy Customers */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="animate-side flex flex-col gap-8">
                        <div>
                            <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                                Community Care
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-950 leading-tight">
                                Empowering <span className="text-green-500">Pharmacies</span> with Efficient Supply.
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                We help pharmacies improve profit margins without compromising service quality through flexible pricing and efficient delivery of core prescription products.
                            </p>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-gray-950 mb-2 flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-green-500 rounded-full" />
                                        Prescription Products
                                    </h4>
                                    <p className="text-base">Comprehensive inventory to ensure pharmacies fill prescriptions efficiently and remain competitively priced.</p>
                                </div>
                                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-gray-950 mb-2 flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-green-400 rounded-full" />
                                        Specialty Products
                                    </h4>
                                    <p className="text-base">Support for chronic and acute illnesses with market insights and reliable stock availability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="animate-side">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1200&auto=format&fit=crop"
                                alt="Pharmacy Shelves"
                                className="w-full h-full object-cover aspect-video lg:aspect-[4/3]"
                            />
                            <div className="absolute inset-0 bg-green-900/10" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
