import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

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
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#portfolio' },
        { name: 'Process', href: '#process' },
        { name: 'About', href: '#about' },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <a href="#" className="text-2xl font-display font-bold text-white tracking-tighter">
                    NEXTO<span className="text-neonBlue">.</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-neonBlue transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
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

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-neonBlue transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <MagneticButton className="w-full justify-center">
                        Let's Talk
                    </MagneticButton>
                </motion.div>
            )}
        </motion.nav>
    );
}
