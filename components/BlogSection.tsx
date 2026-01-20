"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
    {
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
        readTime: "6 Min read",
        title: "How to safely manage your prescription medications",
        excerpt: "Understanding your prescriptions is key to managing your health. Learn tips on dosage, timing, and potential drug interactions...",
        date: "Dec 2, 2024",
    },
    {
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
        readTime: "4 Min read",
        title: "The truth about generic vs. brand-name medications",
        excerpt: "Are generic medications as effective as their brand-name counterparts? We break down the facts to help you make informed decisions.",
        date: "Dec 2, 2024",
    },
    {
        image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=800&auto=format&fit=crop",
        readTime: "3 Min read",
        title: "Why immunizations are essential for all ages",
        excerpt: "Vaccines aren't just for kids. Discover why staying up-to-date on immunizations is important for adults and seniors alike...",
        date: "Dec 2, 2024",
    },
    {
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
        readTime: "8 Min read",
        title: "Your guide to choosing the right vitamins for your lifestyle",
        excerpt: "With so many options on the shelf, picking the right vitamins can be overwhelming. Our pharmacists share their top recommendations...",
        date: "Dec 2, 2024",
    },
];

export default function BlogSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                },
            });

            if (gridRef.current) {
                gsap.from(gridRef.current.children, {
                    y: 80,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen py-16 sm:py-20 md:py-28 lg:py-32 bg-white flex flex-col justify-center">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
                {/* Header Section */}
                <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-14 md:mb-16 lg:mb-20">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-gray-950 mb-4 sm:mb-6 md:mb-8 leading-[0.95]">
                            Explore expert pharmacy tips, medication guides, and the latest in health trends
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl leading-relaxed">
                            Your go-to resource for medication safety, supplement advice, and wellness insights. Curated by our team of licensed pharmacists.
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 sm:gap-3 border border-gray-200 rounded-full pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 lg:pl-8 group hover:border-gray-900 transition-colors self-start lg:self-auto"
                    >
                        <span className="text-xs sm:text-sm font-semibold text-gray-900">Discover More</span>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <ArrowRight className="size-3 sm:size-4" />
                        </div>
                    </motion.button>
                </div>

                {/* Blog Posts Grid */}
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-gray-50/50 rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden flex flex-col h-full group hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Card Image Wrapper */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-sm">
                                    <span className="text-[10px] sm:text-xs font-bold text-gray-900">{post.readTime}</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col flex-grow">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-950 leading-snug mb-2 sm:mb-3 md:mb-4 group-hover:text-green-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 md:mb-10 overflow-hidden line-clamp-2 sm:line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <a href="#" className="text-xs sm:text-sm font-bold text-gray-900 hover:text-green-600 transition-colors">
                                        Read more
                                    </a>
                                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-300">{post.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
