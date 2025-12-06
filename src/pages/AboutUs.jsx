import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Lightbulb } from 'lucide-react';
import TechStack from '../sections/TechStack';

const AboutUs = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 overflow-hidden">
                {/* Clean Background with Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />

                {/* Subtle Accent Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neonBlue/5 rounded-full blur-[150px]" />

                {/* Decorative Circles - Top Right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-20 right-10 md:right-20"
                >
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full border-2 border-neonBlue/20" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-neonBlue/30" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neonBlue" />
                    </div>
                </motion.div>

                {/* Decorative Circles - Bottom Left */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute bottom-32 left-10 md:left-20"
                >
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full border-2 border-purple-500/20" />
                        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border-2 border-purple-500/30" />
                    </div>
                </motion.div>

                {/* Floating Dots */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute top-40 left-1/4 w-2 h-2 rounded-full bg-neonBlue/50"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-500/50"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-neonBlue/40"
                />

                {/* Geometric Shapes */}
                <motion.div
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 45 }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    className="absolute top-1/4 right-1/3 w-16 h-16 border-2 border-neonBlue/10 hidden md:block"
                />
                <motion.div
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 45 }}
                    transition={{ duration: 1.5, delay: 1.1 }}
                    className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-purple-500/10 hidden md:block"
                />

                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        {/* Overline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-neonBlue text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6"
                        >
                            About Nexto
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                        >
                            Building the Future of
                            <br />
                            <span className="text-neonBlue">Digital Excellence</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        >
                            A passionate team of innovators, designers, and developers committed to delivering cutting-edge digital solutions that transform businesses and exceed expectations.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "5+", label: "Years Experience" },
                            { number: "100+", label: "Projects Delivered" },
                            { number: "50+", label: "Happy Clients" },
                            { number: "24/7", label: "Support" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                {/* Background decorative blobs */}
                <div className="absolute top-10 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-neonBlue/10 rounded-full blur-3xl" />

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                                Driven by <span className="text-neonBlue">Innovation</span>,<br />
                                Guided by <span className="text-neonBlue">Excellence</span>.
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-neonBlue/10 flex items-center justify-center text-neonBlue shrink-0">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and competitive advantage in an ever-evolving technological landscape.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-neonBlue/10 flex items-center justify-center text-neonBlue shrink-0">
                                        <Lightbulb className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            To be the global partner of choice for enterprises seeking to redefine their digital presence through creativity, technology, and strategic insight.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Decorative blob shapes around image */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-neonBlue/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-20 h-20 border-2 border-neonBlue/30 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-2 border-purple-500/30 rounded-full translate-y-1/2 -translate-x-1/2" />

                            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 relative z-10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                                    alt="Our Team"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-br from-neonBlue/20 to-purple-500/20 blur-2xl -z-10 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 md:py-32 relative overflow-hidden bg-white/5">
                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-neonBlue/5 rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Meet Our Team</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Talented individuals working together to bring your vision to life.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Alex Johnson",
                                role: "CEO & Founder",
                                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                            },
                            {
                                name: "Sarah Chen",
                                role: "Lead Designer",
                                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                            },
                            {
                                name: "Michael Brown",
                                role: "Tech Lead",
                                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                            },
                            {
                                name: "Emily Davis",
                                role: "Marketing Director",
                                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
                            }
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-black border border-white/10 hover:border-neonBlue/50 transition-all duration-300">
                                    {/* Decorative circle */}
                                    <div className="absolute -top-6 -right-6 w-20 h-20 border border-neonBlue/20 rounded-full group-hover:scale-150 transition-transform duration-500" />

                                    {/* Image */}
                                    <div className="aspect-square overflow-hidden relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Info */}
                                    <div className="p-6 relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neonBlue transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4">{member.role}</p>

                                        {/* Social Links */}
                                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-neonBlue/20 flex items-center justify-center transition-colors">
                                                <svg className="w-4 h-4 text-gray-400 hover:text-neonBlue transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-neonBlue/20 flex items-center justify-center transition-colors">
                                                <svg className="w-4 h-4 text-gray-400 hover:text-neonBlue transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 relative overflow-hidden">
                {/* Background blob shapes */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-neonBlue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">The principles that define who we are and how we work.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Client-Centric", desc: "Your success is our priority. We listen, understand, and deliver solutions that exceed expectations." },
                            { title: "Integrity", desc: "We believe in transparent communication and honest partnerships that build lasting trust." },
                            { title: "Innovation", desc: "We constantly explore new technologies and methodologies to keep you ahead of the curve." }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-black border border-white/10 hover:border-neonBlue/50 transition-colors group relative overflow-hidden"
                            >
                                {/* Card decorative circle */}
                                <div className="absolute -top-8 -right-8 w-24 h-24 border border-neonBlue/20 rounded-full group-hover:scale-150 transition-transform duration-500" />

                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-neonBlue/20 transition-colors relative z-10">
                                    <CheckCircle2 className="w-6 h-6 text-neonBlue" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed relative z-10">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <TechStack />
        </div>
    );
};

export default AboutUs;
