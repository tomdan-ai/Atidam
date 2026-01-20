"use client";

import { motion } from "framer-motion";

const stats = [
    {
        number: "10K+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        ),
        description: "Thousands of satisfied patients who trust us for their health needs.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
    },
    {
        number: "70+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        ),
        description: "Specialists dedicated to your well-being.",
        bgColor: "bg-gray-100",
        iconColor: "text-gray-600",
    },
    {
        number: "20+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
        ),
        description: "Years of experience in providing exceptional healthcare.",
        bgColor: "bg-orange-100",
        iconColor: "text-orange-600",
    },
    {
        number: "14+",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        description: "Medical departments across various specialties.",
        bgColor: "bg-cyan-100",
        iconColor: "text-cyan-600",
    },
];

export default function AboutSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1600px] mx-auto px-16">
                {/* Header with embedded image */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-light text-gray-300 tracking-wide italic flex items-center justify-center gap-4 mb-10">
                        WE PUT
                        <div className="w-24 h-12 rounded-full overflow-hidden bg-gray-200 inline-flex">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
                                alt="Doctors"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        YOUR HEALTH FIRST
                    </h2>

                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                        Our clinic offers a full range of general medical services,
                        tailored to meet the unique needs of every patient.
                        With a team of skilled professionals, we aim to provide high-
                        quality care in a welcoming and supportive environment.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-green-400 hover:bg-green-500 text-green-950 px-8 py-3 rounded-full font-semibold transition-all text-sm"
                    >
                        About Us
                    </motion.button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`${stat.bgColor} rounded-3xl p-8 flex flex-col justify-between min-h-[280px]`}
                        >
                            <div className="text-6xl font-bold text-gray-900">
                                {stat.number}
                            </div>
                            <div>
                                <div className={`${stat.iconColor} mb-3`}>
                                    {stat.icon}
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
