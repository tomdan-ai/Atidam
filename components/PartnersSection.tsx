"use client";

const partners = [
    { name: "GlaxoSmithKline PLC (GSK)", logo: "/GSK.png" },
    { name: "PFIZER Pharmaceuticals", logo: "/Pfizer.svg" },
    { name: "Fidson Pharmaceuticals", logo: "/fidson-logo.jpg" },
    { name: "Evans Pharmaceuticals", logo: "/evans.png" },
    { name: "Novartis Pharmaceuticals", logo: "/novartis.png" },
    { name: "Ranbaxy Pharmaceuticals", logo: "/ranbaxy.png" },
    { name: "Shalina Pharmaceuticals", logo: "/shalina.png" },
    { name: "Dailyneed Group", logo: "/dailyneed.png" },
    { name: "May & Baker Nigeria Plc", logo: "/may_baker.png" },
    { name: "Sanofi Pharmaceuticals", logo: "/sanofi.png" },
    { name: "LEK Pharmaceuticals", logo: "/lek.png" },
];

export default function PartnersSection() {
    return (
        <section id="partners" className="py-20 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-900 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 mb-16 text-center">
                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-sm">Trusted by Industry Leaders</p>
            </div>

            {/* Infinite Auto-Scroll Container */}
            <div className="relative w-full">
                <div className="flex overflow-hidden">
                    {/* First set of logos */}
                    <div className="flex gap-16 md:gap-24 items-end animate-scroll">
                        {partners.map((partner, idx) => (
                            <div key={`set1-${idx}`} className="flex flex-col items-center justify-end gap-4 min-w-[200px] shrink-0 select-none">
                                <div className="h-20 w-auto flex items-end justify-center">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-[160px] object-contain transition-all duration-300 pointer-events-none dark:brightness-0 dark:invert dark:opacity-70"
                                    />
                                </div>
                                <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center max-w-[150px] whitespace-normal">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex gap-16 md:gap-24 items-end animate-scroll ml-16 md:ml-24" aria-hidden="true">
                        {partners.map((partner, idx) => (
                            <div key={`set2-${idx}`} className="flex flex-col items-center justify-end gap-4 min-w-[200px] shrink-0 select-none">
                                <div className="h-20 w-auto flex items-end justify-center">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-[160px] object-contain transition-all duration-300 pointer-events-none dark:brightness-0 dark:invert dark:opacity-70"
                                    />
                                </div>
                                <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center max-w-[150px] whitespace-normal">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none z-10" />
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
