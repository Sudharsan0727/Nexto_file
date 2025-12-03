import React from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';

const stats = [
    { label: "Projects Completed", value: "250+" },
    { label: "Happy Clients", value: "100+" },
    { label: "Awards Won", value: "15" },
    { label: "Team Members", value: "40+" },
];

export default function Stats() {
    return (
        <SectionWrapper className="py-10 md:py-20 border-y border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, i) => (
                    <div key={i}>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</h3>
                        <p className="text-neonBlue uppercase tracking-widest text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
