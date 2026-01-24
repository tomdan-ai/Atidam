"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Microscope, Pill, Thermometer, Droplets, FlaskConical, Eye, Leaf, HeartPulse } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const productCategories = [
    { title: "Tablets & Capsules", icon: <Pill className="size-8" />, count: "2,500+ Items" },
    { title: "Injectables", icon: <Thermometer className="size-8" />, count: "800+ Items" },
    { title: "Liquid Syrups", icon: <Droplets className="size-8" />, count: "1,200+ Items" },
    { title: "Ointments & Creams", icon: <FlaskConical className="size-8" />, count: "500+ Items" },
    { title: "Ophthalmic & Optics", icon: <Eye className="size-8" />, count: "300+ Items" },
    { title: "Herbal Remedies", icon: <Leaf className="size-8" />, count: "400+ Items" },
];

const specialtyServices = [
    {
        title: "Vaccines",
        description: "Wide range of essential immunization services at competitive prices.",
        image: "https://images.unsplash.com/photo-1615461066841-dbf56ca73383?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "Oncology",
        description: "Personalized service and competitive pricing for cancer care treatments.",
        image: "https://images.unsplash.com/photo-1579152276503-8373b379c381?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "Women's Health",
        description: "Family planning, fertility treatments, and preventive vaccines.",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"
    }
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(".animate-fade", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
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
        <section ref={sectionRef} className="py-24 sm:py-32 bg-white flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
                {/* Product Categories Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 animate-fade">
                    <div className="max-w-4xl">
                        <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                            Our Portfolio
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-950 leading-tight">
                            Over <span className="text-green-500">7,000</span> NAFDAC-Approved Product Categories.
                        </h2>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-950 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 self-start lg:self-auto"
                    >
                        View Full Catalog <ArrowRight className="size-5" />
                    </motion.button>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-32">
                    {productCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                            className="bg-gray-50 p-8 rounded-[2rem] flex flex-col items-center text-center group transition-all animate-fade border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-6 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-gray-950 mb-2 leading-tight">{cat.title}</h3>
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-tighter">{cat.count}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Specialty Services Header */}
                <div className="mb-16 animate-fade">
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Specialty Services
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-950 leading-tight">
                        Expert Support Beyond <span className="text-green-500">Distribution</span>.
                    </h2>
                </div>

                {/* Specialty Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {specialtyServices.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 rounded-[2.5rem] overflow-hidden group shadow-sm border border-gray-100 animate-fade"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-bold text-gray-950 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
