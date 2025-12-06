import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Target, Users, BarChart3, LineChart, Share2, MessageCircle, ThumbsUp, Eye, ArrowRight, Check, Zap, Award, Globe, Star, Rocket } from 'lucide-react';

const SeoSmm = () => {
    const services = [
        {
            icon: <Search className="w-8 h-8" />,
            title: 'Search Engine Optimization',
            description: 'Improve your website\'s visibility and rank higher on search engines with proven SEO strategies.',
            features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
        },
        {
            icon: <Share2 className="w-8 h-8" />,
            title: 'Social Media Marketing',
            description: 'Build your brand presence and engage with your audience across all social platforms.',
            features: ['Content Strategy', 'Community Management', 'Paid Campaigns', 'Analytics']
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: 'Content Marketing',
            description: 'Create compelling content that attracts, engages, and converts your target audience.',
            features: ['Blog Writing', 'Video Content', 'Infographics', 'Content Calendar']
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: 'Local SEO',
            description: 'Dominate local search results and attract customers in your geographic area.',
            features: ['Google My Business', 'Local Citations', 'Review Management', 'Local Keywords']
        },
        {
            icon: <LineChart className="w-8 h-8" />,
            title: 'Analytics & Reporting',
            description: 'Track your performance with detailed analytics and actionable insights.',
            features: ['Traffic Analysis', 'Conversion Tracking', 'Custom Reports', 'ROI Measurement']
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Influencer Marketing',
            description: 'Partner with influencers to amplify your brand reach and credibility.',
            features: ['Influencer Outreach', 'Campaign Management', 'Performance Tracking', 'ROI Analysis']
        }
    ];

    const stats = [
        { icon: <TrendingUp />, value: '250%', label: 'Avg. Traffic Increase' },
        { icon: <Target />, value: '85%', label: 'Conversion Rate' },
        { icon: <Award />, value: '500+', label: 'Successful Campaigns' },
        { icon: <Users />, value: '200+', label: 'Happy Clients' }
    ];

    const process = [
        {
            step: '01',
            title: 'Research & Analysis',
            description: 'We analyze your industry, competitors, and target audience to create a winning strategy.'
        },
        {
            step: '02',
            title: 'Strategy Development',
            description: 'Custom SEO and social media strategies tailored to your business goals and budget.'
        },
        {
            step: '03',
            title: 'Implementation',
            description: 'Execute campaigns with precision, optimizing every element for maximum impact.'
        },
        {
            step: '04',
            title: 'Monitor & Optimize',
            description: 'Continuous monitoring and optimization to ensure sustained growth and ROI.'
        }
    ];

    const keywords = [
        { keyword: 'Digital Marketing', rank: 1, change: '+5' },
        { keyword: 'SEO Services', rank: 2, change: '+3' },
        { keyword: 'Social Media', rank: 3, change: '+8' },
        { keyword: 'Content Strategy', rank: 5, change: '+2' }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section - Split with Keyword Rankings */}
            <section className="relative min-h-[700px] overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(0, 247, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 247, 255, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
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
                                <Rocket className="w-4 h-4 text-neonBlue" />
                                <span className="text-neonBlue text-sm font-semibold">SEO & Social Media Experts</span>
                            </div>

                            <h1 className="text-5xl font-black mb-6 leading-[1.1]">
                                Dominate Search
                                <br />
                                <span className="bg-gradient-to-r from-neonBlue via-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                    Rule Social Media
                                </span>
                            </h1>

                            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                                Get more traffic, leads, and sales with data-driven SEO and social media strategies that deliver real results.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <button className="px-8 py-4 bg-neonBlue text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2">
                                    Get Free Audit
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    Our Success Stories
                                </button>
                            </div>

                            {/* Quick Features */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <TrendingUp className="w-5 h-5" />, text: '250% Traffic Growth' },
                                    { icon: <Target className="w-5 h-5" />, text: 'Top 3 Rankings' },
                                    { icon: <Users className="w-5 h-5" />, text: 'Engaged Audience' },
                                    { icon: <Award className="w-5 h-5" />, text: 'Proven Results' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-neonBlue/10 flex items-center justify-center text-neonBlue">
                                            {item.icon}
                                        </div>
                                        <span className="text-sm font-medium">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Visual - SEO Dashboard Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Dashboard Image */}
                                <div className="relative rounded-3xl overflow-hidden border-2 border-neonBlue/30 shadow-2xl shadow-neonBlue/20">
                                    <img
                                        src="/seo_analytics_dashboard.png"
                                        alt="SEO Analytics Dashboard"
                                        className="w-full h-auto max-h-[500px] object-cover"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-6 -right-6 px-6 py-4 bg-gradient-to-r from-neonBlue to-cyan-400 text-black rounded-2xl shadow-2xl"
                                >
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 fill-current" />
                                        <div>
                                            <div className="text-xs font-medium">Success Rate</div>
                                            <div className="text-2xl font-black">98%</div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Stats */}
                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute -bottom-6 -left-6 px-6 py-4 bg-gradient-to-br from-green-500/90 to-emerald-500/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-green-400/30"
                                >
                                    <div className="flex items-center gap-3">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                        <div>
                                            <div className="text-xs text-white/80 font-medium">Traffic Growth</div>
                                            <div className="text-2xl font-black text-white">+250%</div>
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
                            Comprehensive SEO and social media marketing solutions to boost your online presence
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

            {/* Process Timeline */}
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
                                {/* Step Number Background */}
                                <div className="text-8xl font-black text-neonBlue/10 absolute -top-8 -left-4">
                                    {item.step}
                                </div>

                                <div className="relative p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>

                                {/* Connector Line */}
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-neonBlue/50 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Media Engagement Section */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Social Media Dashboard Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden border-2 border-neonBlue/30 shadow-2xl shadow-neonBlue/20">
                                <img
                                    src="/social_media_engagement.png"
                                    alt="Social Media Engagement Dashboard"
                                    className="w-full h-auto max-h-[450px] object-cover"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Engagement Badge */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -bottom-4 -right-4 px-6 py-4 bg-gradient-to-br from-purple-500/90 to-pink-500/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-400/30"
                            >
                                <div className="flex items-center gap-3">
                                    <Share2 className="w-6 h-6 text-white" />
                                    <div>
                                        <div className="text-xs text-white/80 font-medium">Engagement</div>
                                        <div className="text-2xl font-black text-white">+650%</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-black mb-6">
                                Social Media <span className="text-neonBlue">Excellence</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Build a powerful social media presence that engages your audience and drives real business results across all platforms.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: <Users className="w-6 h-6" />, label: 'Audience Growth', value: '+350%' },
                                    { icon: <MessageCircle className="w-6 h-6" />, label: 'Engagement Rate', value: '12.5%' },
                                    { icon: <ThumbsUp className="w-6 h-6" />, label: 'Brand Awareness', value: '+280%' },
                                    { icon: <Share2 className="w-6 h-6" />, label: 'Viral Reach', value: '2.5M+' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-4 rounded-xl bg-white/5 border border-white/10"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-lg bg-neonBlue/10 flex items-center justify-center text-neonBlue">
                                                {item.icon}
                                            </div>
                                            <div className="text-sm text-gray-400">{item.label}</div>
                                        </div>
                                        <div className="text-2xl font-black text-white">{item.value}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Results Showcase */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4">
                            Real <span className="text-neonBlue">Results</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            See the impact of our SEO and social media strategies
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { metric: 'Organic Traffic', before: '5K', after: '25K', increase: '+400%' },
                            { metric: 'Keyword Rankings', before: 'Page 5', after: 'Top 3', increase: '+92%' },
                            { metric: 'Social Engagement', before: '2K', after: '15K', increase: '+650%' }
                        ].map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-gradient-to-br from-neonBlue/10 to-purple-500/10 border border-neonBlue/30"
                            >
                                <div className="text-center">
                                    <div className="text-gray-400 text-sm mb-4">{result.metric}</div>
                                    <div className="flex items-center justify-center gap-4 mb-4">
                                        <div>
                                            <div className="text-gray-500 text-xs mb-1">Before</div>
                                            <div className="text-2xl font-bold text-white">{result.before}</div>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-neonBlue" />
                                        <div>
                                            <div className="text-gray-500 text-xs mb-1">After</div>
                                            <div className="text-2xl font-bold text-neonBlue">{result.after}</div>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                                        <TrendingUp className="w-4 h-4 text-green-400" />
                                        <span className="text-green-400 font-semibold">{result.increase}</span>
                                    </div>
                                </div>
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
                        <h2 className="text-5xl font-black mb-6">
                            Ready to Skyrocket Your Rankings?
                        </h2>
                        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                            Let's create a winning SEO and social media strategy that drives real results
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

export default SeoSmm;
