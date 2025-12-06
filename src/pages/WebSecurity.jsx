import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Zap, Globe, Server, FileText, Activity, ShieldCheck, ShieldAlert, Key, Fingerprint, Database, CloudOff, Bug } from 'lucide-react';

const WebSecurity = () => {
    const services = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'SSL/TLS Certificates',
            description: 'Secure your website with industry-standard SSL certificates and HTTPS encryption.',
            features: ['256-bit Encryption', 'Browser Trust', 'SEO Benefits', 'Free Installation']
        },
        {
            icon: <ShieldAlert className="w-8 h-8" />,
            title: 'DDoS Protection',
            description: 'Advanced protection against distributed denial-of-service attacks and traffic floods.',
            features: ['Real-time Monitoring', 'Auto Mitigation', 'Traffic Filtering', '99.9% Uptime']
        },
        {
            icon: <Bug className="w-8 h-8" />,
            title: 'Malware Scanning',
            description: 'Continuous monitoring and removal of malware, viruses, and malicious code.',
            features: ['Daily Scans', 'Auto Removal', 'Threat Detection', 'Clean Reports']
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: 'Web Application Firewall',
            description: 'Protect your applications from OWASP top 10 vulnerabilities and zero-day attacks.',
            features: ['SQL Injection Block', 'XSS Protection', 'Custom Rules', 'Real-time Updates']
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: 'Data Backup & Recovery',
            description: 'Automated daily backups with quick recovery options to protect your data.',
            features: ['Daily Backups', 'One-Click Restore', 'Off-site Storage', '30-Day Retention']
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: 'Security Monitoring',
            description: '24/7 security monitoring with instant alerts for suspicious activities.',
            features: ['24/7 Monitoring', 'Instant Alerts', 'Activity Logs', 'Threat Analysis']
        }
    ];

    const threats = [
        {
            icon: <ShieldAlert className="w-6 h-6" />,
            title: 'DDoS Attacks',
            description: 'Overwhelming traffic floods that can take your site offline',
            protection: 'Advanced DDoS mitigation with traffic filtering'
        },
        {
            icon: <Bug className="w-6 h-6" />,
            title: 'Malware & Viruses',
            description: 'Malicious software that can steal data or damage your site',
            protection: 'Real-time scanning and automatic malware removal'
        },
        {
            icon: <Key className="w-6 h-6" />,
            title: 'Brute Force Attacks',
            description: 'Automated attempts to guess passwords and gain access',
            protection: 'Login protection with rate limiting and 2FA'
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: 'Data Breaches',
            description: 'Unauthorized access to sensitive customer information',
            protection: 'Encryption and secure data storage protocols'
        }
    ];

    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: 'Enterprise-Grade Protection',
            description: 'Military-grade security infrastructure protecting your website 24/7'
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Zero Performance Impact',
            description: 'Security that works in the background without slowing down your site'
        },
        {
            icon: <Activity className="w-8 h-8" />,
            title: 'Real-Time Threat Detection',
            description: 'AI-powered monitoring identifies and blocks threats instantly'
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: 'Compliance Ready',
            description: 'Meet PCI DSS, GDPR, and other regulatory requirements'
        }
    ];

    const stats = [
        { value: '99.9%', label: 'Threat Block Rate' },
        { value: '24/7', label: 'Security Monitoring' },
        { value: '<1ms', label: 'Response Time' },
        { value: '100K+', label: 'Sites Protected' }
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
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute top-0 right-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, -90, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity }}
                        className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
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
                                <Shield className="w-4 h-4 text-neonBlue" />
                                <span className="text-neonBlue text-sm font-semibold">Enterprise Security Solutions</span>
                            </div>

                            <h1 className="text-5xl font-black mb-6 leading-[1.1]">
                                Protect Your Website
                                <br />
                                <span className="bg-gradient-to-r from-neonBlue via-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                    From Every Threat
                                </span>
                            </h1>

                            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                                Comprehensive web security solutions to safeguard your website, data, and customers from cyber threats.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <button className="px-8 py-4 bg-neonBlue text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                    Get Protected Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    Free Security Audit
                                </button>
                            </div>

                            {/* Security Badges */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <Shield className="w-5 h-5" />, text: 'SSL Encrypted' },
                                    { icon: <Lock className="w-5 h-5" />, text: 'DDoS Protected' },
                                    { icon: <Eye className="w-5 h-5" />, text: '24/7 Monitored' },
                                    { icon: <CheckCircle className="w-5 h-5" />, text: 'PCI Compliant' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                                            {item.icon}
                                        </div>
                                        <span className="text-sm font-medium">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Visual - Security Dashboard */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Security Status Card */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <div className="text-gray-400 text-sm mb-1">Security Status</div>
                                            <div className="text-3xl font-black text-white">Protected</div>
                                        </div>
                                        <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                                            <ShieldCheck className="w-8 h-8 text-green-400" />
                                        </div>
                                    </div>

                                    {/* Threat Blocks */}
                                    <div className="space-y-3">
                                        {[
                                            { threat: 'DDoS Attacks', blocked: '1,247', color: 'neonBlue' },
                                            { threat: 'Malware Scans', blocked: '856', color: 'green-400' },
                                            { threat: 'Brute Force', blocked: '2,341', color: 'purple-400' }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1 + i * 0.2 }}
                                                className="p-4 rounded-xl bg-white/5 border border-white/10"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="text-white font-semibold text-sm">{item.threat}</div>
                                                    <div className={`text-${item.color} font-bold`}>{item.blocked}</div>
                                                </div>
                                                <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: '100%' }}
                                                        transition={{ duration: 1, delay: 1.5 + i * 0.2 }}
                                                        className={`h-full bg-gradient-to-r from-${item.color} to-${item.color}/50`}
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-6 -right-6 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-2xl"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                        <div>
                                            <div className="text-xs text-white/80 font-medium">Threats Blocked</div>
                                            <div className="text-2xl font-black text-white">4,444</div>
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
                            Our Security <span className="text-neonBlue">Services</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Comprehensive security solutions to protect your website from all angles
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
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Threats Protection Section */}
            <section className="py-20 bg-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">
                            Threats We <span className="text-neonBlue">Protect Against</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Advanced protection against the most common and dangerous cyber threats
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {threats.map((threat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 flex-shrink-0">
                                        {threat.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{threat.title}</h3>
                                        <p className="text-gray-400 text-sm mb-3">{threat.description}</p>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <div className="flex items-center gap-2 text-green-400">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span className="text-sm font-semibold">{threat.protection}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">
                            Why Choose <span className="text-neonBlue">Our Security?</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Industry-leading security features that keep your website safe
                        </p>
                    </div>

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
                                <div className="w-16 h-16 rounded-2xl bg-neonBlue/10 flex items-center justify-center text-neonBlue mx-auto mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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
                        <Shield className="w-20 h-20 text-neonBlue mx-auto mb-8" />
                        <h2 className="text-4xl font-black mb-6">
                            Ready to Secure Your Website?
                        </h2>
                        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                            Get enterprise-grade security protection starting today
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-neonBlue text-black font-bold text-lg rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                Get Started Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-10 py-5 bg-white/5 text-white font-bold text-lg rounded-full border-2 border-white/10 hover:bg-white/10 hover:border-neonBlue/50 transition-all duration-300">
                                Request Security Audit
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default WebSecurity;
