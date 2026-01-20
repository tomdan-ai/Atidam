"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Ralph Edwards",
        role: "Customer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ralph",
        text: "The team at Rx+ Pharmacy exceeded all my expectations. From the moment I walked in, I was treated with kindness and professionalism. Every prescription was handled with care, and I felt truly valued as a customer.",
        rating: 4.6,
    },
    {
        name: "Brooklyn Simmons",
        role: "Customer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brooklyn",
        text: "I couldn't be more grateful for the service I received at Rx+ Pharmacy. The pharmacists were attentive, professional, and genuinely helpful. From filling my prescriptions to answering my questions about supplements, I felt confident I was in good hands. Highly recommend to anyone looking for a reliable pharmacy!",
        rating: 4.9,
    },
];

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(leftRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });

            gsap.from(rightRef.current?.children || [], {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: "top 80%",
                },
            });

            if (cardsContainerRef.current) {
                gsap.from(cardsContainerRef.current.children, {
                    y: 80,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.4,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: cardsContainerRef.current,
                        start: "top 85%",
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen py-16 sm:py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-start">

                    {/* Left Column: Big Image */}
                    <div ref={leftRef} className="relative rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden aspect-square sm:aspect-[4/5] shadow-xl sm:shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                            alt="Professional pharmacist"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div ref={rightRef} className="flex flex-col gap-6 sm:gap-8 md:gap-10 pt-0 lg:pt-10">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-gray-950 mb-4 sm:mb-6 md:mb-8 leading-none">
                                We value the trust our customers place in us.
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl font-medium">
                                Hear their stories and experiences about the service and support they received at our pharmacy. Your feedback inspires us to provide even better care every day!
                            </p>
                        </div>

                        {/* Navigation controls */}
                        <div className="flex gap-3 sm:gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-950 hover:text-gray-950 transition-colors"
                            >
                                <ArrowLeft className="size-5 sm:size-6" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-950 hover:text-gray-950 transition-colors"
                            >
                                <ArrowRight className="size-5 sm:size-6" />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Testimonial Cards: Floating/Overlapping Grid */}
                <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-[-6rem] lg:mt-[-10rem] lg:pl-[10rem] xl:pl-[20rem] relative z-10 w-full">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-lg sm:shadow-xl md:shadow-2xl border border-gray-50 flex flex-col gap-4 sm:gap-5 md:gap-6"
                        >
                            <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gray-100 overflow-hidden shadow-sm">
                                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-950">{t.name}</h4>
                                    <p className="text-gray-400 font-semibold text-sm sm:text-base">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium line-clamp-4 md:line-clamp-none">
                                {t.text}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 sm:pt-5 md:pt-6 border-t border-gray-50">
                                <div className="flex gap-0.5 sm:gap-1 text-green-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`size-4 sm:size-5 ${i < Math.floor(t.rating) ? 'fill-current' : ''}`} />
                                    ))}
                                </div>
                                <span className="text-xl sm:text-2xl font-black text-gray-950">{t.rating}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
