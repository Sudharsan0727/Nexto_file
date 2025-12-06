import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Cloud, Zap, Users, Lock, CheckCircle, ArrowRight, Globe, Server, Smartphone, Clock, FileText, Briefcase } from 'lucide-react';

const BusinessEmails = () => {
    const plans = [
        {
            name: 'Starter',
            price: '2.99',
            popular: false,
            features: [
                '5 Email Accounts',
                '10 GB Storage per Account',
                'Custom Domain Email',
                'Webmail Access',
                'Mobile App Support',
                'Basic Security',
                'Email Support'
            ]
        },
        {
            name: 'Professional',
            price: '5.99',
            popular: true,
            features: [
                '25 Email Accounts',
                '50 GB Storage per Account',
                'Custom Domain Email',
                'Webmail & Desktop Access',
                'Mobile App Support',
                'Advanced Security & Spam Filter',
                'Priority Email Support',
                'Email Aliases',
                'Auto-responders'
            ]
        },
        {
            name: 'Enterprise',
            price: '12.99',
            popular: false,
            features: [
                'Unlimited Email Accounts',
                '100 GB Storage per Account',
                'Custom Domain Email',
                'Full Platform Access',
                'Mobile & Desktop Apps',
                'Enterprise Security Suite',
                '24/7 Priority Support',
                'Unlimited Aliases',
                'Advanced Auto-responders',
                'Email Archiving',
                'API Access'
            ]
        }
    ];

    const features = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Advanced Security',
            description: 'Enterprise-grade security with spam filtering, virus protection, and encryption.'
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: 'Cloud Storage',
            description: 'Generous storage space with automatic backup and easy file sharing.'
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: 'Mobile Access',
            description: 'Access your emails anywhere with our mobile apps for iOS and Android.'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Team Collaboration',
            description: 'Shared calendars, contacts, and seamless team communication tools.'
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: 'Data Privacy',
            description: 'Your data is encrypted and protected with industry-leading privacy standards.'
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Lightning Fast',
            description: 'High-performance servers ensure your emails are delivered instantly.'
        }
    ];

    const benefits = [
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: 'Professional Image',
            description: 'Build credibility with custom domain email addresses like you@yourcompany.com'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Enhanced Security',
            description: 'Advanced spam filters and virus protection keep your inbox safe and clean'
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: 'Global Access',
            description: 'Access your emails from anywhere in the world on any device'
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: '99.9% Uptime',
            description: 'Reliable email service with guaranteed uptime and fast delivery'
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[700px] overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 247, 255, 0.15) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }} />
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
                                <Mail className="w-4 h-4 text-neonBlue" />
                                <span className="text-neonBlue text-sm font-semibold">Professional Email Solutions</span>
                            </div>

                            <h1 className="text-5xl font-black mb-6 leading-[1.1]">
                                Business Email
                                <br />
                                <span className="bg-gradient-to-r from-neonBlue via-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                    That Works
                                </span>
                            </h1>

                            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                                Professional email hosting with your custom domain. Secure, reliable, and easy to use.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <button className="px-8 py-4 bg-neonBlue text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                    Get Started Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    Compare Plans
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { value: '99.9%', label: 'Uptime' },
                                    { value: '24/7', label: 'Support' },
                                    { value: '100GB', label: 'Storage' }
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

                        {/* Right Visual - Email Interface */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Email Card */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-neonBlue/20 flex items-center justify-center">
                                            <Mail className="w-8 h-8 text-neonBlue" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-lg">you@yourcompany.com</div>
                                            <div className="text-gray-400 text-sm">Professional Email</div>
                                        </div>
                                    </div>

                                    {/* Email Preview */}
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1 + i * 0.2 }}
                                                className="p-4 rounded-xl bg-white/5 border border-white/10"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="text-white font-semibold text-sm">Client Meeting</div>
                                                    <div className="text-gray-500 text-xs">2 min ago</div>
                                                </div>
                                                <div className="text-gray-400 text-xs">Meeting scheduled for tomorrow at 10 AM...</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Floating Badges */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                    className="absolute -top-6 -right-6 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-2xl"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                        <div>
                                            <div className="text-xs text-white/80 font-medium">Secure</div>
                                            <div className="text-xl font-black text-white">100%</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">
                            Why Choose <span className="text-neonBlue">Our Email Service?</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Everything you need for professional business communication
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-black border border-white/10 hover:border-neonBlue/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-neonBlue/10 flex items-center justify-center text-neonBlue mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">
                            Simple <span className="text-neonBlue">Pricing</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Choose the perfect plan for your business needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
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
                                        <div className="flex items-baseline justify-center gap-1 mb-2">
                                            <span className="text-gray-500 text-2xl">$</span>
                                            <span className="text-6xl font-black text-white">{plan.price}</span>
                                        </div>
                                        <p className="text-gray-500">per month</p>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-neonBlue/20 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-3 h-3 text-neonBlue" />
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

            {/* Benefits Section */}
            <section className="py-20 bg-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">
                            Key <span className="text-neonBlue">Benefits</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Professional email hosting that helps your business grow
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

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-neonBlue/10 via-cyan-500/10 to-transparent">
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Mail className="w-20 h-20 text-neonBlue mx-auto mb-8" />
                        <h2 className="text-4xl font-black mb-6">
                            Ready to Get Professional Email?
                        </h2>
                        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                            Start building your professional image with custom domain email today
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-neonBlue text-black font-bold text-lg rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-10 py-5 bg-white/5 text-white font-bold text-lg rounded-full border-2 border-white/10 hover:bg-white/10 hover:border-neonBlue/50 transition-all duration-300">
                                Contact Sales
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default BusinessEmails;
