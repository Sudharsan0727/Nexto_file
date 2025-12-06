import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Tag, Search, ChevronRight } from 'lucide-react';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Technology', 'Design', 'Marketing', 'Business'];

    const featuredPost = {
        id: 1,
        title: "The Future of Web Development: AI & No-Code",
        excerpt: "Explore how Artificial Intelligence and No-Code platforms are reshaping the landscape of web development and what it means for developers.",
        image: "/portfolio_hero.png",
        category: "Technology",
        author: "Sudharsan",
        date: "Dec 12, 2024",
        readTime: "5 min read"
    };

    const posts = [
        {
            id: 2,
            title: "10 SEO Strategies for 2025",
            excerpt: "Stay ahead of the competition with these cutting-edge SEO strategies that are set to dominate the search engine landscape in 2025.",
            image: "/seo_analytics_dashboard.png",
            category: "Marketing",
            author: "Sarah Jenkins",
            date: "Dec 10, 2024",
            readTime: "4 min read"
        },
        {
            id: 3,
            title: "Mastering UI/UX for Mobile Apps",
            excerpt: "Learn the core principles of designing intuitive and engaging mobile user interfaces that keep users coming back.",
            image: "/health_fitness_app.png",
            category: "Design",
            author: "Mike Ross",
            date: "Dec 08, 2024",
            readTime: "6 min read"
        },
        {
            id: 4,
            title: "Why Your Business Needs a Custom Email",
            excerpt: "Discover the benefits of professional business email solutions and how they build trust and credibility with your clients.",
            image: "/fintech_dashboard.png",
            category: "Business",
            author: "Jessica Lee",
            date: "Dec 05, 2024",
            readTime: "3 min read"
        },
        {
            id: 5,
            title: "Sustainable Web Design Practices",
            excerpt: "How to build eco-friendly websites that reduce carbon footprint while maintaining high performance and aesthetics.",
            image: "/eco_ecommerce_site.png",
            category: "Technology",
            author: "David Green",
            date: "Dec 01, 2024",
            readTime: "5 min read"
        },
        {
            id: 6,
            title: "The Power of Social Media Branding",
            excerpt: "Unlock the potential of your brand with a cohesive social media strategy that drives engagement and growth.",
            image: "/social_media_engagement.png",
            category: "Marketing",
            author: "Emily White",
            date: "Nov 28, 2024",
            readTime: "4 min read"
        }
    ];

    const filteredPosts = activeCategory === 'All'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-neonBlue/5 to-transparent" />
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-neonBlue font-bold tracking-wider uppercase text-sm mb-4 block">
                                Our Blog
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black mb-6">
                                Insights & <span className="text-neonBlue">News</span>
                            </h1>
                            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                                The latest industry trends, expert tips, and company updates from the Nexto team.
                            </p>
                        </motion.div>
                    </div>

                    {/* Featured Post */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 group hover:border-neonBlue/50 transition-all duration-300 max-w-5xl mx-auto"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="h-64 md:h-auto relative overflow-hidden">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-neonBlue text-black font-bold text-xs rounded-full">
                                        Featured
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {featuredPost.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {featuredPost.readTime}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-neonBlue transition-colors leading-tight">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed line-clamp-3">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <User className="w-4 h-4 text-neonBlue" />
                                        </div>
                                        <span className="text-white text-sm font-medium">{featuredPost.author}</span>
                                    </div>
                                    <button className="flex items-center gap-2 text-neonBlue text-sm font-bold hover:gap-3 transition-all">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            {/* Categories */}
                            <div className="flex flex-wrap gap-4 mb-12">
                                {categories.map((cat, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat
                                            ? 'bg-neonBlue text-black'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Posts Grid */}
                            <div className="grid gap-8">
                                {filteredPosts.map((post) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neonBlue/30 transition-all duration-300 group"
                                    >
                                        <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden flex-shrink-0">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center flex-grow">
                                            <div className="flex items-center gap-3 text-xs text-neonBlue font-bold uppercase tracking-wider mb-3">
                                                {post.category}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-400 mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto text-sm text-gray-500">
                                                <div className="flex items-center gap-4">
                                                    <span>{post.date}</span>
                                                    <span>•</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                                <button className="text-white group-hover:text-neonBlue transition-colors">
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3 space-y-8">
                            {/* Search Widget */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6">Search</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        className="w-full bg-black border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white focus:border-neonBlue focus:outline-none transition-colors"
                                    />
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                </div>
                            </div>

                            {/* Newsletter Widget */}
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-neonBlue/20 to-purple-500/20 border border-neonBlue/30">
                                <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Newsletter</h3>
                                <p className="text-gray-300 mb-6">
                                    Get the latest insights and news delivered directly to your inbox.
                                </p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full bg-black/50 border border-white/20 rounded-xl py-3 px-4 text-white focus:border-neonBlue focus:outline-none transition-colors"
                                    />
                                    <button className="w-full py-3 bg-neonBlue text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors">
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Web Dev', 'SEO', 'Marketing', 'Design', 'Business', 'AI', 'Startup', 'Growth'].map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm text-gray-300 bg-black border border-white/10 rounded-lg hover:border-neonBlue/50 hover:text-neonBlue cursor-pointer transition-colors"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
