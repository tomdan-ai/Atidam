"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Thermometer, Zap, ShieldCheck, Activity, Snowflake } from "lucide-react";

const features = [
    {
        icon: Thermometer,
        title: "Precise Temperature Control",
        description: "Strict adherence to temperature requirements stipulated by regulatory authorities for optimal drug preservation.",
        color: "blue"
    },
    {
        icon: Activity,
        title: "Continuous Monitoring",
        description: "24/7 real-time monitoring systems track temperature and humidity levels to ensure consistent conditions.",
        color: "purple"
    },
    {
        icon: Zap,
        title: "Backup Power Support",
        description: "Uninterrupted power systems guarantee constant storage conditions even during outages.",
        color: "yellow"
    },
    {
        icon: ShieldCheck,
        title: "Full Regulatory Compliance",
        description: "Meeting and exceeding industry standards for product stability, safety, and quality assurance.",
        color: "green"
    }
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: {
        bg: "bg-blue-500/10 dark:bg-blue-500/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-500/30"
    },
    purple: {
        bg: "bg-purple-500/10 dark:bg-purple-500/20",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-500/30"
    },
    yellow: {
        bg: "bg-amber-500/10 dark:bg-amber-500/20",
        text: "text-amber-600 dark:text-amber-400",
        border: "border-amber-200 dark:border-amber-500/30"
    },
    green: {
        bg: "bg-green-500/10 dark:bg-green-500/20",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-500/30"
    }
};

export default function ColdRoomSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

    return (
        <section
            id="cold-room"
            className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black relative overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 dark:bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Floating Snowflakes */}
            <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[15%] text-blue-300/30 dark:text-blue-400/20"
            >
                <Snowflake className="size-16" />
            </motion.div>
            <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 left-[10%] text-blue-300/20 dark:text-blue-400/10"
            >
                <Snowflake className="size-12" />
            </motion.div>

            <div ref={containerRef} className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-semibold mb-6 border border-green-200 dark:border-green-500/20">
                        Cold Room Facility
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
                        State-of-the-Art{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400">
                            Storage Infrastructure
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Ensuring the safety, quality, and efficacy of pharmaceutical products with our
                        advanced temperature-controlled storage facility designed to meet the highest industry standards.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        style={{ y }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
                            <div className="aspect-[4/3] relative group">
                                <div className="absolute inset-0 bg-[url('/coldroom.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Overlay Badge */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/50 dark:border-white/10">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                                            <Thermometer className="size-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Temperature Controlled</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">2°C - 8°C Optimal Range</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 dark:from-green-500/10 dark:to-blue-500/10 rounded-3xl blur-2xl pointer-events-none" />
                    </motion.div>

                    {/* Features Grid */}
                    <div className="order-1 lg:order-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                const colors = colorMap[feature.color];
                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`p-6 rounded-2xl bg-white dark:bg-white/5 border ${colors.border} shadow-lg dark:shadow-none hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 group`}
                                    >
                                        <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className={`size-7 ${colors.text}`} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
