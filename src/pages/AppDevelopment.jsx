import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Layers, Zap, CheckCircle, ArrowRight, Layout, Server, Globe, Cpu, Shield, Rocket, Tablet } from 'lucide-react';
import { FaReact, FaSwift, FaNodeJs, FaAws, FaAndroid } from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiFirebase, SiGraphql } from 'react-icons/si';

const AppDevelopment = () => {
    const services = [
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: 'iOS Development',
            description: 'Native iOS applications built with Swift and SwiftUI for iPhone, iPad, and Apple Watch.',
            features: ['Native Performance', 'Apple Ecosystem', 'App Store Optimization', 'Latest iOS Features']
        },
        {
            icon: <Tablet className="w-8 h-8" />,
            title: 'Android Development',
            description: 'Scalable and robust Android apps using Kotlin and Jetpack Compose for all devices.',
            features: ['Material Design', 'Wide Compatibility', 'Google Play Launch', 'High Performance']
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: 'Cross-Platform',
            description: 'Build once, run everywhere with React Native and Flutter for cost-effective solutions.',
            features: ['Single Codebase', 'Fast Development', 'Native-like Feel', 'Cost Efficient']
        },
        {
            icon: <Layout className="w-8 h-8" />,
            title: 'UI/UX Design',
            description: 'User-centric design that delivers intuitive and engaging mobile experiences.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
        },
        {
            icon: <Server className="w-8 h-8" />,
            title: 'Backend Development',
            description: 'Robust server-side infrastructure to power your mobile application.',
            features: ['API Development', 'Database Design', 'Cloud Integration', 'Scalable Architecture']
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'App Maintenance',
            description: 'Ongoing support, updates, and optimization to keep your app running smoothly.',
            features: ['Bug Fixes', 'Performance Tuning', 'OS Updates', 'Feature Additions']
        }
    ];

    const technologies = [
        { name: 'React Native', category: 'Cross Platform', icon: <FaReact className="w-6 h-6" /> },
        { name: 'Flutter', category: 'Cross Platform', icon: <SiFlutter className="w-6 h-6" /> },
        { name: 'Swift', category: 'iOS', icon: <FaSwift className="w-6 h-6" /> },
        { name: 'Kotlin', category: 'Android', icon: <SiKotlin className="w-6 h-6" /> },
        { name: 'Node.js', category: 'Backend', icon: <FaNodeJs className="w-6 h-6" /> },
        { name: 'Firebase', category: 'Backend', icon: <SiFirebase className="w-6 h-6" /> },
        { name: 'GraphQL', category: 'API', icon: <SiGraphql className="w-6 h-6" /> },
        { name: 'AWS', category: 'Cloud', icon: <FaAws className="w-6 h-6" /> }
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery',
            description: 'We analyze your requirements and define the project roadmap.'
        },
        {
            step: '02',
            title: 'Design',
            description: 'Creating intuitive UI/UX designs and interactive prototypes.'
        },
        {
            step: '03',
            title: 'Development',
            description: 'Agile development with regular updates and feedback loops.'
        },
        {
            step: '04',
            title: 'Testing',
            description: 'Rigorous testing to ensure a bug-free and smooth experience.'
        },
        {
            step: '05',
            title: 'Launch',
            description: 'Deploying to app stores and providing post-launch support.'
        }
    ];

    const stats = [
        { value: '50+', label: 'Apps Launched' },
        { value: '4.8', label: 'Avg Rating' },
        { value: '1M+', label: 'Downloads' },
        { value: '100%', label: 'Client Satisfaction' }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[700px] overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 45, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute top-0 right-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, -45, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity }}
                        className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[700px] py-20">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neonBlue/10 border border-neonBlue/30 mb-6">
                                <Smartphone className="w-4 h-4 text-neonBlue" />
                                <span className="text-neonBlue text-sm font-semibold">Mobile App Experts</span>
                            </div>

                            <h1 className="text-5xl font-black mb-6 leading-[1.1]">
                                Turn Your Idea Into
                                <br />
                                <span className="bg-gradient-to-r from-neonBlue via-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                    A Powerful App
                                </span>
                            </h1>

                            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                                We build high-performance, scalable, and beautiful mobile applications for iOS and Android that users love.
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

                            {/* Platform Icons */}
                            <div className="flex items-center gap-6 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Smartphone className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-medium">iOS</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Tablet className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-medium">Android</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-medium">Cross-Platform</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Visual - App Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Phone Mockup Container */}
                                <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                                    {/* Screen Content */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black p-6">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-8 h-8 rounded-full bg-white/10" />
                                            <div className="w-20 h-4 rounded-full bg-white/10" />
                                        </div>

                                        {/* App Cards */}
                                        <div className="space-y-4">
                                            <motion.div
                                                animate={{ x: [0, 10, 0] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                                className="h-32 rounded-2xl bg-gradient-to-r from-neonBlue/20 to-cyan-500/20 border border-neonBlue/30"
                                            />
                                            <motion.div
                                                animate={{ x: [0, -10, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                                className="h-24 rounded-2xl bg-white/5 border border-white/10"
                                            />
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                                                <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                                            </div>
                                        </div>

                                        {/* Bottom Nav */}
                                        <div className="absolute bottom-6 left-6 right-6 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-around px-4">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-white/10" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute top-20 -right-10 px-6 py-4 bg-gradient-to-r from-neonBlue to-cyan-400 text-black rounded-2xl shadow-2xl"
                                >
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-5 h-5 fill-current" />
                                        <div>
                                            <div className="text-xs font-medium">Performance</div>
                                            <div className="text-xl font-black">Fast</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute bottom-40 -left-10 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-2xl"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        <div>
                                            <div className="text-xs font-medium">User Experience</div>
                                            <div className="text-xl font-black">Smooth</div>
                                        </div>
                                    </div>
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
                                <div className="text-4xl font-black text-neonBlue mb-2">{stat.value}</div>
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
                        <h2 className="text-4xl font-black mb-4">
                            App Development <span className="text-neonBlue">Services</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            End-to-end mobile app development solutions tailored to your business needs
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
                                <div className="w-16 h-16 rounded-2xl bg-neonBlue/10 flex items-center justify-center text-neonBlue mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                                            <CheckCircle className="w-4 h-4 text-neonBlue" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">
                            Technologies We <span className="text-neonBlue">Master</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We use the latest tools and frameworks to build cutting-edge apps
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
                                className="px-8 py-4 rounded-2xl bg-black border border-white/10 hover:border-neonBlue/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                            >
                                <div className="text-neonBlue">{tech.icon}</div>
                                <div>
                                    <div className="text-white font-semibold mb-1">{tech.name}</div>
                                    <div className="text-gray-500 text-xs">{tech.category}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">
                            Development <span className="text-neonBlue">Process</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A streamlined workflow to bring your app from concept to launch
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="text-6xl font-black text-neonBlue/10 mb-4 group-hover:text-neonBlue/20 transition-colors duration-300">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>

                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-white/10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-neonBlue/10 via-cyan-500/10 to-transparent">
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Rocket className="w-20 h-20 text-neonBlue mx-auto mb-8" />
                        <h2 className="text-4xl font-black mb-6">
                            Ready to Build Your App?
                        </h2>
                        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                            Let's transform your vision into a successful mobile application
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-neonBlue text-black font-bold text-lg rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                Get Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-10 py-5 bg-white/5 text-white font-bold text-lg rounded-full border-2 border-white/10 hover:bg-white/10 hover:border-neonBlue/50 transition-all duration-300">
                                View Pricing
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AppDevelopment;
