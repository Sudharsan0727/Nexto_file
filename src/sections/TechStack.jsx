import React, { useState } from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiPython, SiTypescript,
    SiMongodb, SiPostgresql, SiDocker, SiKubernetes,
    SiTailwindcss, SiExpress, SiRedux, SiGit, SiMysql, SiFirebase,
    SiFlutter, SiGraphql, SiJenkins
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techCategories = {
    'All': [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
        { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939' },
    ],
    'Frontend': [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
    ],
    'Backend': [
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
    ],
    'Database': [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    ],
    'DevOps': [
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939' },
    ],
    'Mobile': [
        { name: 'React Native', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
    ],
};

export default function TechStack() {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <SectionWrapper id="tech-stack">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                        Our <span className="text-neonBlue">Technology Stack</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Powered by the latest and most reliable technologies in the industry
                    </p>
                </motion.div>
            </div>

            {/* Tab Navigation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
            >
                {Object.keys(techCategories).map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === category
                            ? 'bg-neonBlue text-black shadow-lg shadow-neonBlue/50'
                            : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </motion.div>

            {/* Technology Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {techCategories[activeTab].map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group"
                        >
                            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-neonBlue/50 hover:shadow-xl hover:shadow-neonBlue/20 flex flex-col items-center justify-center aspect-square">
                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neonBlue/0 to-neonBlue/0 group-hover:from-neonBlue/10 group-hover:to-purple-500/10 transition-all duration-300" />

                                {/* Icon */}
                                <div className="relative mb-4 w-16 h-16 flex items-center justify-center text-5xl text-gray-400 group-hover:text-white transition-colors duration-300" style={{ color: tech.color }}>
                                    {tech.icon}
                                </div>

                                {/* Name */}
                                <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                                    {tech.name}
                                </h3>

                                {/* Active indicator dot */}
                                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-600 group-hover:bg-neonBlue group-hover:shadow-sm group-hover:shadow-neonBlue transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Bottom Stats/Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/30">
                    <div className="text-4xl font-bold text-neonBlue mb-2">20+</div>
                    <div className="text-gray-400">Technologies Mastered</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/30">
                    <div className="text-4xl font-bold text-neonBlue mb-2">100%</div>
                    <div className="text-gray-400">Modern Stack</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/30">
                    <div className="text-4xl font-bold text-neonBlue mb-2">24/7</div>
                    <div className="text-gray-400">Expert Support</div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
