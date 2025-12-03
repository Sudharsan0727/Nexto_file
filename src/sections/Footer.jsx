import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowUp, FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-neonBlue/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neonBlue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <a href="#" className="text-4xl font-display font-bold text-white tracking-tighter mb-6 block">
                            NEXTO<span className="text-neonBlue">.</span>
                        </a>
                        <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
                            Crafting digital masterpieces that define the future. We blend innovation with design to deliver exceptional web solutions for forward-thinking brands.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaTwitter />, href: "#" },
                                { icon: <FaInstagram />, href: "#" },
                                { icon: <FaLinkedin />, href: "#" },
                                { icon: <FaGithub />, href: "#" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ y: -5, backgroundColor: '#00f2ff', color: '#000' }}
                                    className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 transition-all duration-300"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold text-lg mb-8">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Team', 'Careers', 'Case Studies', 'Blog'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 hover:text-neonBlue transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-neonBlue transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold text-lg mb-8">Services</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Digital Marketing', 'Cloud Solutions'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 hover:text-neonBlue transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-neonBlue transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold text-lg mb-8">Stay Updated</h4>
                        <p className="text-gray-500 mb-6 text-sm">Subscribe to our newsletter for the latest tech trends and updates.</p>

                        <div className="relative mb-8">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-900/50 border border-gray-800 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-neonBlue/50 transition-colors"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-neonBlue rounded-lg flex items-center justify-center text-black hover:bg-white transition-colors">
                                <FaPaperPlane size={12} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:connect@nex2.in" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-neonBlue group-hover:scale-110 transition-transform">
                                    <FaEnvelope size={14} />
                                </div>
                                <span>connect@nex2.in</span>
                            </a>
                            <a href="tel:9841234447" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-neonBlue group-hover:scale-110 transition-transform">
                                    <FaPhoneAlt size={14} />
                                </div>
                                <span>+91 98412 34447</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Nexto Digital. All rights reserved.
                    </p>

                    <div className="flex gap-8 text-sm text-gray-600">
                        <a href="#" className="hover:text-neonBlue transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-neonBlue transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-neonBlue transition-colors">Cookie Policy</a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:border-neonBlue hover:text-neonBlue transition-all duration-300 group"
                    >
                        <FaArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
