import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, TrendingUp, Target, Users, BarChart3, Mail, Share2, Search, MousePointerClick, Eye, Heart, MessageCircle, ArrowRight, Zap, Award, CheckCircle } from 'lucide-react';

const DigitalMarketing = () => {
    const services = [
        {
            icon: <Search className="w-8 h-8" />,
            title: 'SEO Optimization',
            description: 'Boost your search rankings and drive organic traffic with proven SEO strategies.',
            features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO']
        },
        {
            icon: <MousePointerClick className="w-8 h-8" />,
            title: 'PPC Advertising',
            description: 'Get instant results with targeted pay-per-click campaigns on Google and social media.',
            features: ['Google Ads', 'Facebook Ads', 'Campaign Management', 'ROI Tracking']
        },
        {
            icon: <Share2 className="w-8 h-8" />,
            title: 'Social Media Marketing',
            description: 'Build your brand presence and engage with your audience across all platforms.',
            features: ['Content Strategy', 'Community Management', 'Influencer Marketing', 'Analytics']
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: 'Email Marketing',
            description: 'Create personalized email campaigns that convert subscribers into customers.',
            features: ['Campaign Design', 'Automation', 'A/B Testing', 'List Management']
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Content Marketing',
            description: 'Engage your audience with compelling content that drives traffic and conversions.',
            features: ['Blog Writing', 'Video Content', 'Infographics', 'Content Strategy']
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: 'Analytics & Reporting',
            description: 'Track performance and make data-driven decisions with comprehensive analytics.',
            features: ['Google Analytics', 'Custom Reports', 'KPI Tracking', 'Insights']
        }
    ];

    const stats = [
        { icon: <TrendingUp />, value: '300%', label: 'Avg. ROI Increase' },
        { icon: <Users />, value: '10M+', label: 'Audience Reached' },
        { icon: <Award />, value: '250+', label: 'Campaigns Launched' },
        { icon: <Target />, value: '95%', label: 'Client Retention' }
    ];

    const benefits = [
        {
            icon: <Eye className="w-6 h-6" />,
            title: 'Increased Visibility',
            description: 'Get your brand in front of the right audience at the right time.'
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: 'Targeted Reach',
            description: 'Reach your ideal customers with precision targeting and segmentation.'
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Measurable Results',
            description: 'Track every metric and see the real impact of your marketing efforts.'
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Fast Results',
            description: 'See immediate impact with our data-driven marketing strategies.'
        }
    ];

    const platforms = [
        { name: 'Google Ads', category: 'PPC' },
        { name: 'Facebook', category: 'Social' },
        { name: 'Instagram', category: 'Social' },
        { name: 'LinkedIn', category: 'B2B' },
        { name: 'Twitter', category: 'Social' },
        { name: 'YouTube', category: 'Video' },
        { name: 'TikTok', category: 'Social' },
        { name: 'Pinterest', category: 'Visual' }
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
                            rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute top-0 right-1/4 w-96 h-96 bg-neonBlue/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [360, 180, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity }}
                        className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
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
                                <Megaphone className="w-4 h-4 text-neonBlue" />
                                <span className="text-neonBlue text-sm font-semibold">Digital Marketing Excellence</span>
                            </div>

                            <h1 className="text-5xl font-black mb-6 leading-[1.1]">
                                Grow Your Brand
                                <br />
                                <span className="bg-gradient-to-r from-neonBlue via-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                    Reach Millions
                                </span>
                            </h1>

                            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                                Data-driven digital marketing strategies that deliver measurable results and maximize your ROI.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <button className="px-8 py-4 bg-neonBlue text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                    Start Growing Today
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    View Case Studies
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { value: '300%', label: 'ROI' },
                                    { value: '10M+', label: 'Reach' },
                                    { value: '250+', label: 'Campaigns' }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                                    >
                                        <div className="text-2xl font-black text-neonBlue mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-gray-500">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Visual - Marketing Dashboard */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Dashboard Cards */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-neonBlue/20 to-cyan-500/20 backdrop-blur-sm border border-neonBlue/30 shadow-2xl mb-4"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-neonBlue/20 flex items-center justify-center">
                                                <TrendingUp className="w-6 h-6 text-neonBlue" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-400">Total Reach</div>
                                                <div className="text-2xl font-bold text-white">2.5M</div>
                                            </div>
                                        </div>
                                        <div className="text-green-400 text-sm font-semibold">+45%</div>
                                    </div>
                                    <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '75%' }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="h-full bg-gradient-to-r from-neonBlue to-cyan-400"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-neonBlue/20 to-cyan-500/20 backdrop-blur-sm border border-neonBlue/30 shadow-2xl"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-neonBlue/20 flex items-center justify-center">
                                                <Target className="w-6 h-6 text-neonBlue" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-400">Conversions</div>
                                                <div className="text-2xl font-bold text-white">15.8K</div>
                                            </div>
                                        </div>
                                        <div className="text-green-400 text-sm font-semibold">+32%</div>
                                    </div>
                                    <div className="flex gap-2">
                                        {[60, 80, 70, 90, 75, 85].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${height}%` }}
                                                transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                                                className="flex-1 bg-gradient-to-t from-neonBlue to-cyan-400 rounded-t"
                                            />
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Floating Icons */}
                                <motion.div
                                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-neonBlue to-cyan-400 flex items-center justify-center shadow-2xl"
                                >
                                    <Heart className="w-8 h-8 text-white" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute -bottom-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-neonBlue to-cyan-400 flex items-center justify-center shadow-2xl"
                                >
                                    <MessageCircle className="w-8 h-8 text-white" />
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
                            Comprehensive digital marketing solutions to grow your business
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

            {/* Benefits Section */}
            <section className="py-20 bg-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4">
                            Why Choose <span className="text-neonBlue">Our Services?</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We deliver results that matter to your business
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-neonBlue/10 flex items-center justify-center text-neonBlue mx-auto mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4">
                            Platforms We <span className="text-neonBlue">Dominate</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Expert marketing across all major digital platforms
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-8 py-4 rounded-2xl bg-black border border-white/10 hover:border-neonBlue/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-white font-semibold mb-1">{platform.name}</div>
                                <div className="text-gray-500 text-xs">{platform.category}</div>
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
                        <Megaphone className="w-20 h-20 text-neonBlue mx-auto mb-8" />
                        <h2 className="text-5xl font-black mb-6">
                            Ready to Amplify Your Brand?
                        </h2>
                        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                            Let's create a winning digital marketing strategy for your business
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-neonBlue text-black font-bold text-lg rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                Get Started Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-10 py-5 bg-white/5 text-white font-bold text-lg rounded-full border-2 border-white/10 hover:bg-white/10 hover:border-neonBlue/50 transition-all duration-300">
                                Request a Quote
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;
