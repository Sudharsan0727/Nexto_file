import React from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import MagneticButton from '../components/ui/MagneticButton';

export default function CTA() {
    return (
        <SectionWrapper className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/20 to-purple-600/20 opacity-30 blur-3xl" />
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                    Get Started with <span className="text-neonBlue">Us Today</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                    Elevate your digital presence with NEXTO Digital. Whether you need a stunning website,
                    a powerful mobile app, or effective digital marketing, we have the expertise to make it happen.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <MagneticButton className="!px-12 !py-5 !text-xl">Start Your Project</MagneticButton>
                    <a href="tel:9841234447" className="text-neonBlue hover:text-white transition-colors text-lg font-medium">
                        📞 98412 34447
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}
