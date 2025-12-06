import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Check, Globe, Shield, Zap, Clock, TrendingUp, Award } from 'lucide-react';

const DomainRegistration = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTLD, setSelectedTLD] = useState('.com');

    const popularTLDs = [
        { extension: '.com', price: '$12.99', popular: true },
        { extension: '.net', price: '$14.99', popular: false },
        { extension: '.org', price: '$13.99', popular: false },
        { extension: '.io', price: '$39.99', popular: true },
        { extension: '.co', price: '$24.99', popular: false },
        { extension: '.ai', price: '$79.99', popular: true },
        { extension: '.dev', price: '$15.99', popular: false },
        { extension: '.app', price: '$18.99', popular: false },
    ];

    const features = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Free Privacy Protection',
            description: 'Keep your personal information safe with WHOIS privacy protection included free.'
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Instant Activation',
            description: 'Your domain is activated immediately after registration. Start building right away.'
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: '24/7 Support',
            description: 'Expert support team available around the clock to help with any questions.'
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: 'Easy Management',
            description: 'Intuitive control panel to manage DNS, forwarding, and all domain settings.'
        },
    ];

    const benefits = [
        'Free domain privacy protection',
        'Easy DNS management',
        'Domain forwarding & masking',
        'Email forwarding included',
        'Auto-renewal protection',
        'Free SSL certificate',
        '99.9% uptime guarantee',
        'Transfer lock protection',
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery + selectedTLD);
    };

    return (
        <div className="pt-20">
            {/* Hero Section with Search */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
                {/* Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neonBlue/5 rounded-full blur-[150px]" />

                {/* Decorative Circles */}
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-neonBlue/20" />
                <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full border-2 border-purple-500/20" />

                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-neonBlue text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6"
                        >
                            Domain Registration
                        </motion.p>

                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Find Your Perfect
                            <br />
                            <span className="text-neonBlue">Domain Name</span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                            Secure your online presence with a memorable domain name. Search from millions of available domains.
                        </p>

                        {/* Domain Search Bar */}
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            onSubmit={handleSearch}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="flex flex-col md:flex-row gap-4 p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                                <div className="flex-1 flex items-center gap-3 px-4">
                                    <Search className="w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Enter your domain name..."
                                        className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
                                    />
                                </div>
                                <select
                                    value={selectedTLD}
                                    onChange={(e) => setSelectedTLD(e.target.value)}
                                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none cursor-pointer"
                                >
                                    {popularTLDs.map((tld) => (
                                        <option key={tld.extension} value={tld.extension} className="bg-gray-900">
                                            {tld.extension} - {tld.price}/year
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-neonBlue text-black font-semibold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:shadow-neonBlue/70"
                                >
                                    Search Domain
                                </button>
                            </div>
                        </motion.form>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400"
                        >
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-neonBlue" />
                                <span>500K+ Domains Registered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-neonBlue" />
                                <span>Free Privacy Protection</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-neonBlue" />
                                <span>Instant Activation</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Popular TLDs Pricing */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-neonBlue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Popular Domain <span className="text-neonBlue">Extensions</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Choose from a wide range of domain extensions at competitive prices
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularTLDs.map((tld, index) => (
                            <motion.div
                                key={tld.extension}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="p-6 rounded-2xl bg-black border border-white/10 hover:border-neonBlue/50 transition-all duration-300">
                                    {tld.popular && (
                                        <div className="absolute -top-3 right-4 px-3 py-1 bg-neonBlue text-black text-xs font-bold rounded-full">
                                            POPULAR
                                        </div>
                                    )}

                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-white mb-2">{tld.extension}</div>
                                        <div className="text-3xl font-bold text-neonBlue mb-4">{tld.price}</div>
                                        <div className="text-gray-400 text-sm mb-6">per year</div>
                                        <button className="w-full px-6 py-3 bg-white/5 hover:bg-neonBlue/20 border border-white/10 hover:border-neonBlue/50 rounded-xl text-white font-medium transition-all duration-300">
                                            Register Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white/5 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Why Choose <span className="text-neonBlue">Nexto</span> for Domains?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We provide everything you need to establish and protect your online presence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-black border border-white/10 hover:border-neonBlue/50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-neonBlue/10 flex items-center justify-center text-neonBlue mb-4 group-hover:bg-neonBlue/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-10 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-neonBlue/10 rounded-full blur-3xl" />

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                Everything You Need,
                                <br />
                                <span className="text-neonBlue">All Included</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                When you register a domain with Nexto, you get premium features that others charge extra for - all included at no additional cost.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-neonBlue/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-neonBlue" />
                                        </div>
                                        <span className="text-gray-300">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: <TrendingUp />, value: '99.9%', label: 'Uptime' },
                                    { icon: <Award />, value: '500K+', label: 'Domains' },
                                    { icon: <Shield />, value: '100%', label: 'Secure' },
                                    { icon: <Clock />, value: '24/7', label: 'Support' },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-6 rounded-2xl bg-gradient-to-br from-neonBlue/10 to-purple-500/10 border border-white/10 text-center"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-neonBlue/20 flex items-center justify-center text-neonBlue mx-auto mb-4">
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-neonBlue/10 to-purple-500/10">
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            Register your domain today and start building your online presence with confidence.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-neonBlue text-black font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:shadow-neonBlue/70 hover:scale-105">
                                Search Domains
                            </button>
                            <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-neonBlue/50 transition-all duration-300">
                                View All Pricing
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default DomainRegistration;
