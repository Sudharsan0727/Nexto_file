import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from './ui/MagneticButton';
import { Menu, X, ChevronDown, ArrowRight, Globe, Server, Code, Megaphone, BarChart, Mail, Shield, Smartphone, Users } from 'lucide-react';

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        {
            name: 'Our Services',
            href: '/#services',
            megaMenu: [
                { name: "Domain Registration", href: "/domain-registration", icon: Globe, desc: "Secure your online identity" },
                { name: "Web Hosting", href: "/web-hosting", icon: Server, desc: "High-performance servers" },
                { name: "Web Development", href: "/web-development", icon: Code, desc: "Custom digital solutions" },
                { name: "Digital Marketing", href: "/digital-marketing", icon: Megaphone, desc: "Reach your audience" },
                { name: "SEO & SMM", href: "/seo-smm", icon: BarChart, desc: "Boost your rankings" },
                { name: "Business Emails", href: "/business-emails", icon: Mail, desc: "Professional communication" },
                { name: "Web Security", href: "/web-security", icon: Shield, desc: "Protect your assets" },
                { name: "App Development", href: "/app-development", icon: Smartphone, desc: "iOS & Android apps" },
                { name: "Influencer Marketing", href: "/influencer-marketing", icon: Users, desc: "Connect with influencers" }
            ]
        },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative">
                <Link to="/" className="text-2xl font-display font-bold text-white tracking-tighter">
                    NEXTO<span className="text-neonBlue">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                to={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-neonBlue transition-colors flex items-center gap-1 py-4"
                            >
                                {link.name}
                                {link.megaMenu && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                            </Link>

                            {link.megaMenu && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 hidden group-hover:block w-[1000px]">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 grid grid-cols-4 gap-6 shadow-2xl"
                                    >
                                        {link.megaMenu.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className="group/card flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-neonBlue/10 flex items-center justify-center text-neonBlue group-hover/card:bg-neonBlue group-hover/card:text-black transition-all">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-medium mb-1 group-hover/card:text-neonBlue transition-colors">{item.name}</h4>
                                                    <p className="text-xs text-gray-500 leading-relaxed group-hover/card:text-gray-400 transition-colors">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <MagneticButton className="!px-6 !py-2 !text-sm">
                            Let's Talk
                        </MagneticButton>
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto"
                >
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <Link
                                    to={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-neonBlue transition-colors"
                                    onClick={() => !link.megaMenu && setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {link.megaMenu && (
                                    <button
                                        onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.name ? null : link.name)}
                                        className="text-gray-400 p-2"
                                    >
                                        <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileSubmenu === link.name ? 'rotate-180' : ''}`} />
                                    </button>
                                )}
                            </div>

                            {link.megaMenu && activeMobileSubmenu === link.name && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="flex flex-col gap-4 pl-4 mt-4 border-l border-white/10"
                                >
                                    {link.megaMenu.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="text-sm text-gray-400 hover:text-neonBlue transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}
                    <MagneticButton className="w-full justify-center">
                        Let's Talk
                    </MagneticButton>
                </motion.div>
            )}
        </motion.nav>
    );
}
