import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const contactOptions = [
    {
        id: 'whatsapp',
        icon: FaWhatsapp,
        label: 'WhatsApp',
        href: "https://wa.me/919841234447?text=Hi%20Nexto,%20I'm%20interested%20in%20your%20services!",
        color: 'rgba(37, 211, 102, 0.2)', // Glassy WhatsApp Green
        borderColor: '#25D366',
        hoverColor: '#25D366'
    },
    {
        id: 'phone',
        icon: FaPhoneAlt,
        label: 'Call Us',
        href: 'tel:+919841234447',
        color: 'rgba(30, 144, 255, 0.2)', // Glassy Neon Blue
        borderColor: '#1E90FF',
        hoverColor: '#1E90FF'
    }
];

export default function FloatingContactBar() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 p-2">
            {contactOptions.map((option) => (
                <div
                    key={option.id}
                    className="relative flex items-center justify-end"
                    onMouseEnter={() => setHoveredId(option.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {/* Tooltip Label */}
                    <AnimatePresence>
                        {hoveredId === option.id && (
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: -10, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-full mr-2 px-4 py-2 backdrop-blur-md bg-black/60 border border-white/10 text-white text-sm font-bold rounded-xl shadow-xl whitespace-nowrap"
                            >
                                {option.label}
                                {/* Glassy Arrow */}
                                <div className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-3 h-3 bg-black/60 border-t border-r border-white/10 transform rotate-45" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Glassy Icon Button */}
                    <a
                        href={option.href}
                        target={option.id === 'whatsapp' ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full text-white shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-md border transition-all duration-300 hover:scale-110 group relative overflow-hidden"
                        style={{
                            backgroundColor: option.color,
                            borderColor: option.borderColor
                        }}
                    >
                        {/* Hover Glow Effect */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ backgroundColor: option.hoverColor }}
                        />

                        <option.icon size={20} className="relative z-10 drop-shadow-lg" />
                    </a>
                </div>
            ))}
        </div>
    );
}
