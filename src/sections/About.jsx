import React from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import { motion } from 'framer-motion';

function AboutImage() {
    // Professional Unsplash image - Digital workspace/technology theme
    // Using higher resolution (1200px) for crisp display on all screens
    const unsplashImageUrl = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=900&q=85&fit=crop";

    return (
        <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
            <img
                src={unsplashImageUrl}
                alt="Nexto Digital - Digital Marketing Services"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
            />

            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonBlue to-transparent" />
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-neonBlue to-transparent" />
            </div>
            <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-neonBlue to-transparent" />
                <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-neonBlue to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonBlue to-transparent" />
                <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-neonBlue to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20">
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-neonBlue to-transparent" />
                <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-neonBlue to-transparent" />
            </div>
        </div>
    );
}

export default function About() {
    return (
        <SectionWrapper id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                        Nexto Digital: Your Partner in <span className="text-neonBlue">Digital Marketing Services</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
                        At NEXTO Digital, we blend innovation with expertise to deliver outstanding web and digital solutions.
                        From dynamic website designs to cutting-edge mobile apps, we are committed to transforming your digital presence and driving your success.
                    </p>
                    <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                        Nexto Digital is a leading web design and development firm, offering custom website design, e-commerce development,
                        mobile applications, digital marketing services, cloud server management, and corporate mailing solutions.
                    </p>

                    <div className="flex flex-wrap gap-6 md:gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white">5+</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Years Exp</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">Global</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Presence</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">100+</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Projects</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden neon-box w-full" style={{ aspectRatio: '4/3' }}>
                        <AboutImage />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-neonBlue/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
