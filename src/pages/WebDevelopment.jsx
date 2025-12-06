import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Zap, Globe, ShoppingCart, Search, BarChart, Check, ArrowRight, Layers, Rocket, Users, Award, Database, Server } from 'lucide-react';

const WebDevelopment = () => {
    const services = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: 'Custom Website Development',
            description: 'Tailored websites built from scratch to match your unique business needs and brand identity.',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable']
        },
        {
            icon: <ShoppingCart className="w-8 h-8" />,
            title: 'E-Commerce Solutions',
            description: 'Powerful online stores with seamless payment integration and inventory management.',
            features: ['Payment Gateway', 'Product Management', 'Order Tracking', 'Analytics Dashboard']
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: 'Progressive Web Apps',
            description: 'Modern web applications that work offline and provide app-like experiences.',
            features: ['Offline Support', 'Push Notifications', 'Fast Performance', 'Cross-Platform']
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces designed to engage users and drive conversions.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing']
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: 'Web Applications',
            description: 'Complex web-based software solutions for business automation and productivity.',
            features: ['Custom Features', 'API Integration', 'Database Design', 'Cloud Hosting']
        },
        {
            icon: <Search className="w-8 h-8" />,
            title: 'SEO & Performance',
            description: 'Optimize your website for search engines and lightning-fast performance.',
            features: ['Technical SEO', 'Speed Optimization', 'Core Web Vitals', 'Analytics Setup']
        }
    ];

    const technologies = [
        { name: 'React', category: 'Frontend', icon: <Code className="w-5 h-5" /> },
        { name: 'Next.js', category: 'Framework', icon: <Zap className="w-5 h-5" /> },
        { name: 'Node.js', category: 'Backend', icon: <Server className="w-5 h-5" /> },
        { name: 'TypeScript', category: 'Language', icon: <Code className="w-5 h-5" /> },
        { name: 'Tailwind CSS', category: 'Styling', icon: <Palette className="w-5 h-5" /> },
        { name: 'MongoDB', category: 'Database', icon: <Database className="w-5 h-5" /> },
        { name: 'PostgreSQL', category: 'Database', icon: <Database className="w-5 h-5" /> },
        { name: 'AWS', category: 'Cloud', icon: <Globe className="w-5 h-5" /> }
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery & Planning',
            description: 'We analyze your requirements, target audience, and business goals to create a strategic roadmap.'
        },
        {
            step: '02',
            title: 'Design & Prototype',
            description: 'Our designers create stunning mockups and interactive prototypes for your approval.'
        },
        {
            step: '03',
            title: 'Development',
            description: 'Expert developers bring designs to life with clean, efficient, and scalable code.'
        },
        {
            step: '04',
            title: 'Testing & Launch',
            description: 'Rigorous testing ensures everything works perfectly before we launch your website.'
        }
    ];

    const stats = [
        { icon: <Rocket />, value: '500+', label: 'Projects Delivered' },
        { icon: <Users />, value: '300+', label: 'Happy Clients' },
        { icon: <Award />, value: '15+', label: 'Years Experience' },
        { icon: <BarChart />, value: '98%', label: 'Client Satisfaction' }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[700px] overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(0, 247, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 247, 255, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }} />
                </div>

                {/* Floating Orbs */}
                <motion.div
                    animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-20 right-1/4 w-96 h-96 bg-neonBlue/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
                />

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[700px] py-20">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neonBlue/10 border border-neonBlue/30 mb-6">
                                <Code className="w-4 h-4 text-neonBlue" />
                                <span className="text-neonBlue text-sm font-semibold">Professional Web Development</span>
                            </div>

                            <h1 className="text-5xl font-black mb-6 leading-[1.1]">
                                We Build
                                <br />
                                <span className="bg-gradient-to-r from-neonBlue via-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                    Digital Experiences
                                </span>
                            </h1>

                            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                                Transform your ideas into powerful, scalable web solutions. From concept to launch, we deliver excellence.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <button className="px-8 py-4 bg-neonBlue text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    View Portfolio
                                </button>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-3">
                                {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech, index) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm"
                                    >
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Visual - Code Window */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Code Editor Mockup */}
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    {/* Header */}
                                    <div className="bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="text-gray-400 text-sm ml-4">App.jsx</div>
                                    </div>
                                    {/* Code Content */}
                                    <div className="bg-black p-6 font-mono text-sm">
                                        <div className="text-purple-400">import <span className="text-white">React</span> from <span className="text-green-400">'react'</span>;</div>
                                        <div className="text-purple-400 mt-2">const <span className="text-yellow-400">App</span> = () =&gt; {'{'}</div>
                                        <div className="text-purple-400 ml-4 mt-2">return (</div>
                                        <div className="ml-8 mt-1">
                                            <span className="text-gray-500">&lt;</span>
                                            <span className="text-blue-400">div</span>
                                            <span className="text-gray-500">&gt;</span>
                                        </div>
                                        <div className="ml-12 mt-1">
                                            <span className="text-gray-500">&lt;</span>
                                            <span className="text-blue-400">h1</span>
                                            <span className="text-gray-500">&gt;</span>
                                            <span className="text-white">Hello World</span>
                                            <span className="text-gray-500">&lt;/</span>
                                            <span className="text-blue-400">h1</span>
                                            <span className="text-gray-500">&gt;</span>
                                        </div>
                                        <div className="ml-8 mt-1">
                                            <span className="text-gray-500">&lt;/</span>
                                            <span className="text-blue-400">div</span>
                                            <span className="text-gray-500">&gt;</span>
                                        </div>
                                        <div className="text-purple-400 ml-4 mt-2">);</div>
                                        <div className="text-purple-400 mt-2">{'}'};</div>
                                        <div className="text-purple-400 mt-4">export default <span className="text-yellow-400">App</span>;</div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -bottom-6 -right-6 px-6 py-4 bg-gradient-to-r from-neonBlue to-cyan-400 text-black rounded-2xl shadow-2xl"
                                >
                                    <div className="text-sm font-medium">Clean Code</div>
                                    <div className="text-2xl font-black">100%</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-neonBlue/10 flex items-center justify-center text-neonBlue mx-auto mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4">
                            Our <span className="text-neonBlue">Services</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Comprehensive web development solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-3xl bg-black border border-white/10 hover:border-neonBlue/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-neonBlue/10 flex items-center justify-center text-neonBlue mb-6 group-hover:bg-neonBlue group-hover:text-black transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Check className="w-4 h-4 text-neonBlue" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4">
                            Our <span className="text-neonBlue">Process</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A proven methodology that delivers exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="text-8xl font-black text-neonBlue/10 absolute -top-8 -left-4">
                                    {item.step}
                                </div>
                                <div className="relative p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4">
                            Technologies We <span className="text-neonBlue">Master</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Cutting-edge tools and frameworks for modern web development
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-black border border-white/10 hover:border-neonBlue/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-neonBlue">
                                    {tech.icon}
                                </div>
                                <div>
                                    <div className="text-white font-semibold">{tech.name}</div>
                                    <div className="text-gray-500 text-xs">{tech.category}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-neonBlue/10 via-purple-500/10 to-transparent">
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Layers className="w-20 h-20 text-neonBlue mx-auto mb-8" />
                        <h2 className="text-5xl font-black mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                            Let's bring your vision to life with cutting-edge web development
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-neonBlue text-black font-bold text-lg rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                Get Started Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-10 py-5 bg-white/5 text-white font-bold text-lg rounded-full border-2 border-white/10 hover:bg-white/10 hover:border-neonBlue/50 transition-all duration-300">
                                Schedule a Call
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopment;
