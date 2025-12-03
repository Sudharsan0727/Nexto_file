import React from 'react';
import { Twitter, Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="text-3xl font-display font-bold text-white tracking-tighter mb-6 block">
                            NEXTO<span className="text-neonBlue">.</span>
                        </a>
                        <p className="text-gray-500 mb-6">
                            Crafted by professional web designers & developers. Empowering clients with supreme web solutions.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a href="tel:9841234447" className="flex items-center gap-2 text-gray-400 hover:text-neonBlue transition-colors">
                                <Phone size={16} />
                                <span>98412 34447</span>
                            </a>
                            <a href="mailto:connect@nex2.in" className="flex items-center gap-2 text-gray-400 hover:text-neonBlue transition-colors">
                                <Mail size={16} />
                                <span>connect@nex2.in</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li className="hover:text-neonBlue transition-colors cursor-pointer">Web Development</li>
                            <li className="hover:text-neonBlue transition-colors cursor-pointer">E-commerce Development</li>
                            <li className="hover:text-neonBlue transition-colors cursor-pointer">Mobile Applications</li>
                            <li className="hover:text-neonBlue transition-colors cursor-pointer">Digital Marketing</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li className="hover:text-neonBlue transition-colors cursor-pointer">About Us</li>
                            <li className="hover:text-neonBlue transition-colors cursor-pointer">Services</li>
                            <li className="hover:text-neonBlue transition-colors cursor-pointer">Portfolio</li>
                            <li className="hover:text-neonBlue transition-colors cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-neonBlue hover:text-black transition-all cursor-pointer">
                                <Twitter size={20} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-neonBlue hover:text-black transition-all cursor-pointer">
                                <Instagram size={20} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-neonBlue hover:text-black transition-all cursor-pointer">
                                <Linkedin size={20} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-neonBlue hover:text-black transition-all cursor-pointer">
                                <Github size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">© 2024 NEXTO. All rights reserved.</p>
                    <div className="flex gap-8 text-sm text-gray-600">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
