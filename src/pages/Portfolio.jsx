import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ExternalLink, ArrowRight, Layout, Search } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [isNavbarHidden, setIsNavbarHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setIsNavbarHidden(true);
        } else {
            setIsNavbarHidden(false);
        }
    });

    const categories = ['All', 'Web Development', 'App Development', 'Digital Marketing', 'Branding'];

    const projects = [
        {
            id: 1,
            title: 'FinTech Dashboard',
            category: 'Web Development',
            image: '/fintech_dashboard.png',
            description: 'A comprehensive financial analytics dashboard with real-time data visualization.',
            tags: ['React', 'D3.js', 'Node.js'],
            link: '#'
        },
        {
            id: 2,
            title: 'HealthMate App',
            category: 'App Development',
            image: '/health_fitness_app.png',
            description: 'AI-powered health tracking application with personalized workout plans.',
            tags: ['Flutter', 'Firebase', 'AI'],
            link: '#'
        },
        {
            id: 3,
            title: 'EcoStore E-commerce',
            category: 'Web Development',
            image: '/eco_ecommerce_site.png',
            description: 'Sustainable product marketplace with advanced filtering and seamless checkout.',
            tags: ['Next.js', 'Stripe', 'Tailwind'],
            link: '#'
        },
        {
            id: 4,
            title: 'Urban Realty SEO',
            category: 'Digital Marketing',
            image: '/seo_analytics_dashboard.png',
            description: 'Complete SEO overhaul resulting in 300% traffic increase for a real estate firm.',
            tags: ['SEO', 'Content Strategy', 'Analytics'],
            link: '#'
        },
        {
            id: 5,
            title: 'Neon Brand Identity',
            category: 'Branding',
            image: '/social_media_engagement.png',
            description: 'Futuristic brand identity design including logo, guidelines, and stationery.',
            tags: ['Design', 'Branding', 'Identity'],
            link: '#'
        },
        {
            id: 6,
            title: 'TravelGo Booking',
            category: 'App Development',
            image: '/portfolio_hero.png',
            description: 'Seamless travel booking experience with AR destination previews.',
            tags: ['React Native', 'AR', 'Maps'],
            link: '#'
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/portfolio_hero.png"
                        alt="Portfolio Hero"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neonBlue/10 border border-neonBlue/30 mb-6">
                            <Layout className="w-4 h-4 text-neonBlue" />
                            <span className="text-neonBlue text-sm font-semibold">Our Masterpieces</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            Selected <span className="text-neonBlue">Works</span>
                        </h1>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            A showcase of our finest digital creations, from immersive web experiences to powerful mobile applications.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className={`py-12 border-b border-white/10 bg-white/5 backdrop-blur-sm sticky z-40 transition-all duration-300 ${isNavbarHidden ? 'top-0' : 'top-20'}`}>
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${filter === cat
                                    ? 'bg-neonBlue text-black shadow-lg shadow-neonBlue/25 scale-105'
                                    : 'bg-black/50 text-gray-400 border border-white/10 hover:border-neonBlue/50 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-neonBlue/50 transition-all duration-500"
                                >
                                    {/* Project Image */}
                                    <div className="h-64 w-full relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                View Project <ExternalLink className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-8">
                                        <div className="text-neonBlue text-sm font-bold mb-2 uppercase tracking-wider">
                                            {project.category}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-6 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-lg border border-white/10"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                                <Search className="w-8 h-8 text-gray-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                            <p className="text-gray-400">Try selecting a different category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-t from-neonBlue/10 to-transparent">
                <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-8">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Let's collaborate to bring your vision to life with our expertise in design and development.
                    </p>
                    <button className="px-10 py-5 bg-neonBlue text-black font-bold text-lg rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:scale-105 flex items-center gap-2 mx-auto">
                        Start Your Project
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
