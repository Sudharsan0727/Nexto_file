import React from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';

const industries = [
    "Fintech", "Healthcare", "E-Commerce", "Real Estate", "Education", "Entertainment", "Automotive", "Logistics"
];

export default function Industries() {
    return (
        <SectionWrapper id="industries" className="bg-zinc-900/20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Industries We <span className="text-neonBlue">Revolutionize</span></h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((ind, i) => (
                    <div key={i} className="group p-6 border border-white/5 hover:border-neonBlue/50 bg-black/40 hover:bg-neonBlue/5 transition-all duration-300 rounded-lg text-center cursor-pointer">
                        <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{ind}</span>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
