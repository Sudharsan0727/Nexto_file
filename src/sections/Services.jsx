import React from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Code, ShoppingCart, Smartphone, TrendingUp, Mail, Megaphone } from 'lucide-react';

const services = [
    {
        icon: Code,
        title: "Dynamic Web Solutions",
        desc: "Providing creative and dynamic solutions for all industries with professional web designers & developers."
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Development",
        desc: "Effectively showcase your products and services, reaching potential customers and driving business success."
    },
    {
        icon: Smartphone,
        title: "Mobile Applications",
        desc: "High-performance mobile apps across iOS, Android, and hybrid platforms using cutting-edge technologies."
    },
    {
        icon: TrendingUp,
        title: "SEO & Digital Marketing",
        desc: "Boost your online presence with expert SEO strategies and comprehensive digital marketing services."
    },
    {
        icon: Megaphone,
        title: "Influencer Marketing",
        desc: "Expand your brand's reach and credibility with tailored influencer marketing solutions."
    },
    {
        icon: Mail,
        title: "Corporate Mailing Solutions",
        desc: "Choosing a hassle-free business email service is essential for professional communication."
    },
];

export default function Services() {
    return (
        <SectionWrapper id="services">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our <span className="text-neonBlue">Services</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Empowering clients with supreme web solutions. Crafted by professional designers & developers for industry success.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 rounded-2xl relative group overflow-hidden"
                    >
                        {/* Continuous Rotating Border */}
                        <div className="animated-border" />

                        <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="w-14 h-14 bg-black/50 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-neonBlue/50 transition-colors relative z-10">
                            <service.icon className="w-7 h-7 text-white group-hover:text-neonBlue transition-colors" />
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-neonBlue transition-colors relative z-10">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed relative z-10">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
