export default function Hero() {
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: 'url(/hero.jpeg)' }}
        >
            <div className="max-w-7xl mx-auto px-8 pt-8 pb-16 min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Left Column */}
                    <div className="flex flex-col items-start gap-8">

                        {/* Badge */}
                        <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-2 pr-4 rounded-full border border-gray-100 shadow-sm">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img
                                            src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${i}`}
                                            alt="avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-bold text-sm">10000+</span>
                                <span className="text-xs text-gray-500">Healthy patients</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1]">
                            We are here to help you stay healthy.
                        </h1>

                        {/* CTA Button */}
                        <button className="bg-[#bbf7d0] hover:bg-[#86efac] text-green-950 px-8 py-4 rounded-full font-medium transition-colors text-lg">
                            Make an appointment
                        </button>

                        {/* Stats Footer */}
                        <div className="flex items-center gap-12 mt-4">
                            <div>
                                <div className="flex items-end gap-1 mb-1">
                                    <span className="text-3xl font-semibold">4.9</span>
                                </div>
                                <div className="flex gap-0.5 text-yellow-400 text-sm">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="text-3xl font-semibold mb-1">20+</div>
                                <p className="text-sm text-gray-500">Years successful experience</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Empty for layout balance */}
                    <div className="hidden lg:block">
                        {/* Floating Explore Link - positioned in bottom right of section */}
                        <div className="absolute bottom-8 right-8 text-white/90 font-medium flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                            Explore
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
