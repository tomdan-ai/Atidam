"use client";

import {
    Store,
    Wallet,
    ShieldCheck,
    Clock,
    Pill,
    Truck,
    ArrowRight
} from "lucide-react";

const benefits = [
    {
        icon: Store,
        title: "One Stop Pharmacy Sourcing",
        description: "Our centralized hub eliminates the hassle of managing multiple suppliers or making frequent trips to the market, allowing your pharmacy to source all your essentials efficiently in one place.",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
    },
    {
        icon: Wallet,
        title: "Save More. Stock Smarter.",
        description: "We leverage bulk purchasing and direct partnerships with the world's leading pharmaceutical manufacturers to secure premium products at the lowest possible cost—savings we pass directly to you.",
        color: "text-teal-400",
        bg: "bg-teal-400/10",
    },
    {
        icon: ShieldCheck,
        title: "Reliable Pharmaceuticals You Can Trust",
        description: "We offer a wide range of products sourced from reputable brands and rigorously vetted manufacturers. Every product is authentic, properly stored, and quality-assured.",
        color: "text-green-400",
        bg: "bg-green-400/10",
    },
    {
        icon: Clock,
        title: "Stock Today, Pay Later!",
        description: "Your essential medicines delivered in 24 hours. Order what you need now and settle the payment later. Terms and conditions apply.",
        color: "text-lime-400",
        bg: "bg-lime-400/10",
    },
    {
        icon: Pill,
        title: "Reliable Supply of Rare Pharmaceuticals",
        description: "Benefit from our trusted connections with top global manufacturers to secure even the most hard-to-find medications, available whenever your pharmacy needs them.",
        color: "text-emerald-300",
        bg: "bg-emerald-300/10",
    },
    {
        icon: Truck,
        title: "Your One Stop Stock Solution",
        description: "Access all your pharmaceutical products in one place. We provide prompt service and guarantee delivery within 24 hours across Nigeria.",
        color: "text-teal-300",
        bg: "bg-teal-300/10",
    },
];

export default function BenefitsSection() {
    return (
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-900 via-emerald-950 to-gray-950 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                {/* Dot Pattern */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-emerald-500/30" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="inline-block text-emerald-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">
                        Why Choose Atidam
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                        Revolutionary Solutions For<br />
                        <span className="text-emerald-400">Healthcare Providers.</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Simplify your procurement process and scale operations for your healthcare business with our comprehensive wholesale solutions.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} benefit={benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BenefitCard({ benefit }: { benefit: typeof benefits[0] }) {
    const IconComponent = benefit.icon;
    return (
        <div className="group relative bg-[#f0fdf4]/95 dark:bg-zinc-900 rounded-none p-8 shadow-xl border border-white/10 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bg.replace('/10', '/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Watermark Icon */}
            <IconComponent className={`absolute -bottom-6 -right-6 size-32 ${benefit.color} dark:${benefit.color} text-emerald-900/10 dark:text-opacity-100 opacity-10 dark:opacity-5 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700`} />

            <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 bg-emerald-50/90 ${benefit.color} dark:${benefit.color} text-emerald-800 dark:text-current rounded-none flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <IconComponent className="size-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-emerald-950 dark:text-white mb-3 leading-tight">
                    {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-emerald-900/70 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {benefit.description}
                </p>

                {/* Learn More Link */}
                <a
                    href="/wholesale"
                    className={`inline-flex items-center gap-2 text-sm font-bold text-emerald-800 dark:${benefit.color} hover:gap-3 transition-all`}
                >
                    Learn more
                    <ArrowRight className="size-4" />
                </a>
            </div>
        </div>
    );
}
