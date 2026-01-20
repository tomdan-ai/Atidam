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
        role: "Patient",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ralph",
        text: "The team at BeU Clinic exceeded all my expectations. From the moment I walked in, I was treated with kindness and professionalism. Every step of my treatment plan was explained clearly, and I felt truly cared for.",
        rating: 4.6,
    },
    {
        name: "Brooklyn Simmons",
        role: "Patient",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brooklyn",
        text: "I couldn't be more grateful for the care I received at BeU Clinic. The staff was attentive, professional, and genuinely caring throughout my treatment. From the first consultation to the follow-ups, I felt confident I was in good hands. Thanks to their expertise, my health has significantly improved. Highly recommend to anyone seeking quality medical care!",
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
            // Left image animation
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

            // Right content animation
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

            // Cards animation
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
        <section ref={sectionRef} className="min-h-screen py-32 bg-white relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-16 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left Column: Big Image */}
                    <div ref={leftRef} className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                            alt="Professional doctor"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div ref={rightRef} className="flex flex-col gap-10 pt-10">
                        <div>
                            <h2 className="text-7xl font-bold tracking-tighter text-gray-950 mb-8 leading-none">
                                We value the trust our patients place in us.
                            </h2>
                            <p className="text-gray-400 text-xl leading-relaxed max-w-xl font-medium">
                                Hear their stories and experiences about the care and support they received at our clinic. Your feedback inspires us to provide even better medical services every day!
                            </p>
                        </div>

                        {/* Navigation controls */}
                        <div className="flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-950 hover:text-gray-950 transition-colors"
                            >
                                <ArrowLeft className="size-6" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-950 hover:text-gray-950 transition-colors"
                            >
                                <ArrowRight className="size-6" />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Testimonial Cards: Floating/Overlapping Grid */}
                <div ref={cardsContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[-10rem] lg:pl-[20rem] relative z-10 w-full">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white/90 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-gray-50 flex flex-col gap-6"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-2xl bg-gray-100 overflow-hidden shadow-sm">
                                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-950">{t.name}</h4>
                                    <p className="text-gray-400 font-semibold">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                {t.text}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                                <div className="flex gap-1 text-green-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`size-5 ${i < Math.floor(t.rating) ? 'fill-current' : ''}`} />
                                    ))}
                                </div>
                                <span className="text-2xl font-black text-gray-950">{t.rating}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
