import React from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';

const steps = [
    { num: "01", title: "Discovery", desc: "We dive deep into your brand, goals, and audience." },
    { num: "02", title: "Strategy", desc: "We blueprint the architecture and user journey." },
    { num: "03", title: "Design", desc: "We craft high-fidelity visuals and interactive prototypes." },
    { num: "04", title: "Development", desc: "We build with clean, scalable, and performant code." },
    { num: "05", title: "Launch", desc: "We deploy, test, and optimize for maximum impact." },
];

export default function Process() {
    return (
        <SectionWrapper id="process">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our <span className="text-neonBlue">Process</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {/* Connector Line */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neonBlue/50 to-transparent z-0" />

                {steps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-black border border-white/10 group-hover:border-neonBlue group-hover:shadow-[0_0_20px_rgba(30,144,255,0.3)] transition-all duration-300 flex items-center justify-center mb-6">
                            <span className="text-2xl font-bold font-display text-gray-500 group-hover:text-white transition-colors">{step.num}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
