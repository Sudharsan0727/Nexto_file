import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/ui/MagneticButton';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neonBlue/20 via-black to-black opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neonBlue/20 rounded-full blur-[120px] animate-pulse" />

            {/* Floating Particles - Optimized */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-neonBlue rounded-full opacity-20 will-change-transform"
                        style={{
                            width: Math.random() * 8 + 3,
                            height: Math.random() * 8 + 3,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -80, 0],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 12,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block mb-6 px-4 py-2 rounded-full border border-neonBlue/30 bg-neonBlue/10 text-neonBlue text-xs md:text-sm font-medium tracking-wider uppercase backdrop-blur-md"
                >
                    Digital Excellence Redefined
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
                >
                    Transform Your Digital
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-neonBlue neon-text">
                        Presence
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    We craft premium web experiences, mobile apps, and digital strategies
                    that drive real business results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <MagneticButton onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                        Explore Services
                    </MagneticButton>
                    <button
                        onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-2 text-white hover:text-neonBlue transition-colors group"
                    >
                        <span className="text-sm md:text-base">View Our Work</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
                >
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">5+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
                    </div>
                    <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">100+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Projects Delivered</div>
                    </div>
                    <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">Global</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Client Base</div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50"
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
                <motion.div
                    className="w-[1px] h-12 bg-gradient-to-b from-neonBlue to-transparent"
                    animate={{
                        scaleY: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </section>
    );
}
