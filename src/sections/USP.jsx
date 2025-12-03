import React from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Zap, Layout, Smartphone, Lock } from 'lucide-react';

const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed with next-gen tech stack." },
    { icon: Layout, title: "Pixel Perfect", desc: "Obsessive attention to detail in every pixel." },
    { icon: Smartphone, title: "Mobile First", desc: "Seamless experience across all devices." },
    { icon: Lock, title: "Secure by Design", desc: "Enterprise-grade security built-in." },
];

export default function USP() {
    return (
        <SectionWrapper id="usp" className="bg-zinc-900/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-black border border-white/5 hover:border-neonBlue/50 transition-colors group">
                        <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 group-hover:bg-neonBlue group-hover:text-black transition-colors">
                            <feature.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-neonBlue transition-colors">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
