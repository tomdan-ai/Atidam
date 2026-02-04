"use client";

import { useState } from "react";
import { Award, Trophy, Star, Medal, ArrowRight, Info } from "lucide-react";
import OurStoryModal from "./OurStoryModal";

const milestones = [
    {
        title: "National Best in Shalina Pharmaceutical",
        period: "Last 6 years",
        image: "/mega-perf.jpg",
        icon: Trophy,
        color: "text-amber-500",
        bg: "bg-amber-100 dark:bg-amber-900/30",
        description: "Awarded for consistent excellence and high-volume performance."
    },
    {
        title: "National Best in Dailyneed",
        period: "Last 5 years",
        image: "/BE-award.jpg",
        icon: Star,
        color: "text-blue-500 dark:text-blue-400",
        bg: "bg-blue-100 dark:bg-blue-900/30",
        description: "Honored for reliable partnership and supply chain efficiency."
    },
    {
        title: "National Best in May & Baker",
        period: "2024/25 National Forum",
        image: "/cert-of-regcognition.jpg",
        icon: Award,
        color: "text-emerald-500 dark:text-emerald-400",
        bg: "bg-emerald-100 dark:bg-emerald-900/30",
        description: "Recognized as a top national performer at the annual forum."
    },
    {
        title: "Silver Distributor Award By DrugField",
        period: "2018",
        image: "/silver-award.jpg",
        icon: Medal,
        color: "text-slate-500 dark:text-slate-400",
        bg: "bg-slate-100 dark:bg-slate-800",
        description: "Celebrating our significant growth and industry contribution."
    },
    {
        title: "ISN Southwest Strategic Wholesaler of the Year",
        period: "2020",
        image: "/appreciation-award.jpg",
        icon: Trophy,
        color: "text-purple-500 dark:text-purple-400",
        bg: "bg-purple-100 dark:bg-purple-900/30",
        description: "Strategic partner award for excellence in the Southwest region."
    },
    {
        title: "Outstanding Performance by DrugField",
        period: "2017",
        image: "/outstanding-perf.jpg",
        icon: Star,
        color: "text-rose-500 dark:text-rose-400",
        bg: "bg-rose-100 dark:bg-rose-900/30",
        description: " honored for exceptional sales and business integrity."
    },
];

export default function MilestonesSection() {
    const [isStoryOpen, setIsStoryOpen] = useState(false);

    return (
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 lg:mb-14">
                    <div className="max-w-4xl">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">Excellence Recognized</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 dark:text-white leading-[1.1] tracking-tighter">
                            Our Awards & <br />
                            <span className="text-emerald-700 dark:text-emerald-400">Achievements</span>
                        </h2>
                    </div>

                    <button
                        onClick={() => setIsStoryOpen(true)}
                        className="flex items-center gap-2 sm:gap-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-full pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 lg:pl-8 group hover:border-gray-900 dark:hover:border-gray-500 hover:scale-[1.02] active:scale-[0.98] transition-all self-start lg:self-auto shadow-sm"
                    >
                        <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Our Story</span>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <ArrowRight className="size-3 sm:size-4" />
                        </div>
                    </button>
                </div>

                {/* Flip Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {milestones.map((item, idx) => (
                        <FlipCard key={idx} item={item} />
                    ))}
                </div>
                <OurStoryModal isOpen={isStoryOpen} onClose={() => setIsStoryOpen(false)} />
            </div>
        </section>
    );
}

function FlipCard({ item }: { item: typeof milestones[0] }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const IconComponent = item.icon;

    return (
        <div
            className="group relative h-[300px] sm:h-[350px] w-full perspective-1000 cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`w-full h-full relative preserve-3d transition-all duration-500 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800" style={{ backfaceVisibility: 'hidden' }}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                {item.period}
                            </span>
                        </div>
                        <h3 className="text-white text-xl font-bold leading-tight line-clamp-2">
                            {item.title}
                        </h3>
                        <div className="mt-3 flex items-center justify-end">
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                <Info className="size-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 flex flex-col items-center justify-center text-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <IconComponent className="size-8" />
                    </div>

                    <h3 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold leading-tight mb-2">
                        {item.title}
                    </h3>

                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4 block">
                        {item.period}
                    </span>

                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
