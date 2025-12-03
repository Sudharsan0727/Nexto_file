import React from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Quote } from 'lucide-react';

const testimonials = [
    { quote: "NEXTO transformed our digital presence completely. The anti-gravity effect is a game changer.", author: "Alex Rivera", role: "CEO, FinTech Co" },
    { quote: "The level of detail and futuristic design is unmatched. Highly recommended.", author: "Sarah Chen", role: "Founder, SpaceWalk" },
    { quote: "Professional, innovative, and incredibly talented team.", author: "Mike Ross", role: "CTO, CyberNet" },
];

export default function Testimonials() {
    return (
        <SectionWrapper id="testimonials" className="bg-zinc-900/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="glass-card p-8 rounded-2xl relative">
                        <Quote className="w-10 h-10 text-neonBlue mb-6 opacity-50" />
                        <p className="text-lg text-gray-300 mb-6 italic">"{t.quote}"</p>
                        <div>
                            <h4 className="font-bold text-white">{t.author}</h4>
                            <p className="text-sm text-gray-500">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
