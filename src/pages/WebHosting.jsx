import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Zap, Shield, Clock, HardDrive, Cpu, Database, Globe, Check, ArrowRight, Award, Headphones, RefreshCw, Gauge, Lock, Users } from 'lucide-react';

const WebHosting = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const hostingPlans = [
        {
            name: 'Starter',
            tagline: 'Perfect for beginners',
            monthlyPrice: 4.99,
            yearlyPrice: 49.99,
            popular: false,
            features: [
                '1 Website',
                '10 GB SSD Storage',
                '100 GB Bandwidth',
                'Free SSL Certificate',
                '5 Email Accounts',
                '24/7 Support',
                'Daily Backups',
                '99.9% Uptime'
            ]
        },
        {
            name: 'Professional',
            tagline: 'Most popular choice',
            monthlyPrice: 9.99,
            yearlyPrice: 99.99,
            popular: true,
            features: [
                '5 Websites',
                '50 GB SSD Storage',
                'Unlimited Bandwidth',
                'Free SSL Certificate',
                '25 Email Accounts',
                '24/7 Priority Support',
                'Daily Backups',
                '99.9% Uptime',
                'Free Domain (1 Year)',
                'Advanced Security'
            ]
        },
        {
            name: 'Business',
            tagline: 'For growing businesses',
            monthlyPrice: 19.99,
            yearlyPrice: 199.99,
            popular: false,
            features: [
                'Unlimited Websites',
                '100 GB SSD Storage',
                'Unlimited Bandwidth',
                'Free SSL Certificate',
                'Unlimited Email Accounts',
                '24/7 VIP Support',
                'Hourly Backups',
                '99.99% Uptime',
                'Free Domain (1 Year)',
                'Advanced Security',
                'Dedicated IP',
                'SEO Tools'
            ]
        }
    ];

    const features = [
        {
            icon: <Gauge className="w-8 h-8" />,
            title: 'Blazing Fast Speed',
            description: 'NVMe SSD drives and LiteSpeed servers deliver lightning-fast performance for your website.'
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: 'Enterprise Security',
            description: 'Advanced firewall, malware scanning, and DDoS protection keep your data safe 24/7.'
        },
        {
            icon: <RefreshCw className="w-8 h-8" />,
            title: 'Auto Backups',
            description: 'Daily automated backups ensure your data is always protected and recoverable.'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Expert Support',
            description: 'Our experienced team is available 24/7 to help you with any hosting questions.'
        }
    ];

    const getPrice = (plan) => {
        return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    };

    return (
        <div className="pt-20">
            {/* Hero Section - Split Design */}
            <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 247, 255, 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neonBlue/10 border border-neonBlue/30 mb-6">
                                <Server className="w-4 h-4 text-neonBlue" />
                                <span className="text-neonBlue text-sm font-semibold">Premium Web Hosting</span>
                            </div>

                            <h1 className="text-5xl font-black mb-6 leading-[1.1]">
                                Powerful Hosting
                                <br />
                                <span className="bg-gradient-to-r from-neonBlue via-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                    Built for Speed
                                </span>
                            </h1>

                            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                                Experience lightning-fast performance with our SSD-powered hosting. 99.9% uptime guaranteed.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <button className="px-8 py-4 bg-neonBlue text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105">
                                    Get Started Now
                                </button>
                                <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    View Plans
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { value: '99.9%', label: 'Uptime' },
                                    { value: '24/7', label: 'Support' },
                                    { value: '50K+', label: 'Websites' }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl font-black text-neonBlue mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Floating Cards */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute top-0 right-0 p-6 rounded-2xl bg-gradient-to-br from-neonBlue/20 to-cyan-500/20 backdrop-blur-sm border border-neonBlue/30 shadow-2xl"
                                >
                                    <Zap className="w-8 h-8 text-neonBlue mb-2" />
                                    <div className="text-sm text-gray-400">Speed</div>
                                    <div className="text-2xl font-bold text-white">Ultra Fast</div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                    className="absolute bottom-20 left-0 p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 shadow-2xl"
                                >
                                    <Shield className="w-8 h-8 text-purple-400 mb-2" />
                                    <div className="text-sm text-gray-400">Security</div>
                                    <div className="text-2xl font-bold text-white">Protected</div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 shadow-2xl"
                                >
                                    <Award className="w-10 h-10 text-green-400 mb-3 mx-auto" />
                                    <div className="text-sm text-gray-400 text-center">Uptime</div>
                                    <div className="text-3xl font-bold text-white text-center">99.9%</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-neonBlue/10 flex items-center justify-center text-neonBlue mx-auto mb-6 hover:bg-neonBlue/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section - Modern Cards */}
            <section className="py-20 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4">
                            Simple, Transparent <span className="text-neonBlue">Pricing</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                            Choose the perfect plan for your needs. All plans include our core features.
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center gap-2 p-1 bg-black border border-white/10 rounded-full">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${billingCycle === 'monthly'
                                    ? 'bg-neonBlue text-black shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle('yearly')}
                                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative ${billingCycle === 'yearly'
                                    ? 'bg-neonBlue text-black shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                Yearly
                                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                                    -17%
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {hostingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                                        <div className="px-6 py-2 bg-gradient-to-r from-neonBlue to-cyan-400 text-black text-sm font-bold rounded-full shadow-xl">
                                            ⭐ MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className={`relative p-8 rounded-3xl border transition-all duration-300 hover:scale-105 ${plan.popular
                                    ? 'bg-gradient-to-br from-neonBlue/10 to-purple-500/10 border-neonBlue/50 shadow-2xl shadow-neonBlue/20'
                                    : 'bg-black border-white/10 hover:border-neonBlue/30'
                                    }`}>
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                        <p className="text-gray-400 text-sm">{plan.tagline}</p>
                                    </div>

                                    <div className="text-center mb-8">
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-gray-500 text-2xl">$</span>
                                            <span className="text-6xl font-black text-white">
                                                {getPrice(plan).toFixed(2).split('.')[0]}
                                            </span>
                                            <span className="text-gray-400 text-xl">.{getPrice(plan).toFixed(2).split('.')[1]}</span>
                                        </div>
                                        <p className="text-gray-500 mt-2">
                                            per {billingCycle === 'monthly' ? 'month' : 'year'}
                                        </p>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-neonBlue/20 flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3 text-neonBlue" />
                                                </div>
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.popular
                                        ? 'bg-neonBlue text-black hover:bg-cyan-400 shadow-lg shadow-neonBlue/50'
                                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-neonBlue/50'
                                        }`}>
                                        Choose {plan.name}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-neonBlue/10 via-purple-500/10 to-transparent">
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-black mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                                Join thousands of websites powered by Nexto hosting
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="px-10 py-5 bg-neonBlue text-black font-bold text-lg rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                    Start Hosting Today
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="px-10 py-5 bg-white/5 text-white font-bold text-lg rounded-full border-2 border-white/10 hover:bg-white/10 hover:border-neonBlue/50 transition-all duration-300">
                                    Contact Sales
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebHosting;
