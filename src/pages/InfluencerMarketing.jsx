import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Globe, Zap, Target, Users, TrendingUp, Instagram, Linkedin, Youtube, Smartphone } from 'lucide-react';

const InfluencerMarketing = () => {
    const [hoveredService, setHoveredService] = useState(0);

    const services = [
        {
            id: 0,
            title: "Campaign Strategy",
            category: "Planning",
            image: "/fintech_dashboard.png"
        },
        {
            id: 1,
            title: "Creator Sourcing",
            category: "Network",
            image: "/health_fitness_app.png"
        },
        {
            id: 2,
            title: "Content Production",
            category: "Creative",
            image: "/portfolio_hero.png"
        },
        {
            id: 3,
            title: "Paid Amplification",
            category: "Growth",
            image: "/eco_ecommerce_site.png"
        },
        {
            id: 4,
            title: "Performance Tracking",
            category: "Analytics",
            image: "/seo_analytics_dashboard.png"
        }
    ];

    return (
        <div className="pt-20 bg-black min-h-screen selection:bg-neonBlue selection:text-black">

            {/* 1. Hero Section (Portfolio Style) */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/social_media_engagement.png"
                        alt="Influencer Marketing Hero"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neonBlue/10 border border-neonBlue/30 mb-6">
                            <Zap className="w-4 h-4 text-neonBlue" />
                            <span className="text-neonBlue text-xs md:text-sm font-semibold">Viral Marketing Agency</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                            Amplify Your <span className="text-neonBlue">Digital Presence</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            We engineer viral moments. Connect with top-tier influencers and watch your brand explode across every platform.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Interactive Reveal Section */}
            <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left: The List */}
                    <div className="lg:w-1/2 z-10">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12">Our Capabilities</h2>
                        <div className="space-y-2">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="group relative border-b border-white/10 py-8 cursor-pointer transition-all duration-300 hover:pl-8"
                                    onMouseEnter={() => setHoveredService(service.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className={`text-2xl md:text-4xl font-bold transition-colors duration-300 ${hoveredService === service.id ? 'text-neonBlue' : 'text-white'}`}>
                                            {service.title}
                                        </h3>
                                        <ArrowUpRight className={`w-6 h-6 transition-all duration-300 ${hoveredService === service.id ? 'text-neonBlue opacity-100 rotate-45' : 'text-gray-600 opacity-0'}`} />
                                    </div>
                                    <span className="text-sm text-gray-500 mt-2 block font-mono">{service.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Image Reveal */}
                    <div className="lg:w-1/2 relative hidden lg:block h-[700px]">
                        <div className="sticky top-32 w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/5">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={hoveredService}
                                    src={services[hoveredService].image}
                                    alt="Service Preview"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-black/20" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                                <span className="text-neonBlue font-bold">0{hoveredService + 1}</span>
                                <span className="text-white ml-2 font-medium">/ 05</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Stats Ticker */}
            <section className="py-20 border-y border-white/10 bg-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { val: "500M+", label: "Total Reach" },
                            { val: "150+", label: "Active Campaigns" },
                            { val: "98%", label: "Client Retention" },
                            { val: "4.2x", label: "Average ROI" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">{stat.val}</div>
                                <div className="text-neonBlue font-bold text-sm uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Us Grid */}
            <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">WHY NEXTO?</h2>
                    <p className="text-base text-gray-400 max-w-2xl mx-auto">We combine the agility of a boutique firm with the scale of a global agency.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Proprietary Tech", desc: "Our AI matching algorithm ensures you never waste budget on the wrong creators.", icon: <Zap className="w-10 h-10 text-neonBlue" /> },
                        { title: "Global Network", desc: "Access to creators in 50+ countries, speaking 30+ languages.", icon: <Globe className="w-10 h-10 text-neonBlue" /> },
                        { title: "Brand Safety", desc: "Rigorous vetting and compliance checks to protect your reputation.", icon: <Target className="w-10 h-10 text-neonBlue" /> }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="mb-8 p-4 bg-black rounded-2xl inline-block border border-white/10 group-hover:border-neonBlue/50 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Platform Mastery */}
            <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/10">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">PLATFORM <span className="text-neonBlue">MASTERY</span></h2>
                    <p className="text-base text-gray-400 max-w-xl mx-auto">
                        We tailor content strategies to the unique algorithms and audiences of each channel.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { icon: Instagram, name: "Instagram", desc: "High-fidelity visual storytelling & Reels." },
                        { icon: Youtube, name: "YouTube", desc: "Deep-dive reviews & long-form authority." },
                        { icon: Smartphone, name: "TikTok / Shorts", desc: "Viral trends & algorithmic velocity." },
                        { icon: Linkedin, name: "LinkedIn", desc: "B2B influence & professional thought leadership." }
                    ].map((platform, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-neonBlue hover:border-neonBlue transition-all duration-300">
                            <platform.icon className="w-10 h-10 text-white mb-6 group-hover:text-black transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-black transition-colors">{platform.name}</h3>
                            <p className="text-gray-400 text-sm group-hover:text-black/70 transition-colors">{platform.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Process Section (Blueprint) */}
            <section className="py-32 border-t border-white/10 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neonBlue/5 via-transparent to-transparent" />

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">THE <span className="text-neonBlue">BLUEPRINT</span></h2>
                        <p className="text-base text-gray-400 max-w-xl mx-auto">
                            Our proven framework for viral success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { step: "01", title: "Deep Discovery", desc: "We analyze your brand DNA, audience demographics, and competitors to define a winning strategy." },
                            { step: "02", title: "Smart Matching", desc: "Using AI-driven insights, we identify creators who authentically align with your brand values." },
                            { step: "03", title: "Creative Activation", desc: "We manage the entire workflow, from briefing and contracting to content approval and scheduling." },
                            { step: "04", title: "Growth & Scale", desc: "Real-time optimization and paid amplification to maximize reach and ROI." }
                        ].map((item, i) => (
                            <div key={i} className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neonBlue/50 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="text-6xl font-bold text-white">{item.step}</span>
                                </div>

                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-full border border-neonBlue/30 bg-neonBlue/10 flex items-center justify-center text-neonBlue font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Footer CTA */}
            <section className="py-32 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neonBlue/5 via-black to-black" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">
                        READY TO <span className="text-neonBlue">SCALE?</span>
                    </h2>
                    <button className="px-8 py-4 bg-neonBlue text-black font-bold text-lg rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:scale-105">
                        Book a Consultation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default InfluencerMarketing;
