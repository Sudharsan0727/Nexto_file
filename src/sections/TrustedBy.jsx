import React from 'react';

const logos = [
    "Google", "Microsoft", "Tesla", "SpaceX", "Apple", "Nvidia", "Amazon", "Meta"
];

export default function TrustedBy() {
    return (
        <div className="w-full bg-black border-y border-white/5 py-10 overflow-hidden relative z-20">
            <div className="flex w-max animate-marquee gap-20">
                {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="text-3xl font-display font-bold text-gray-800 hover:text-neonBlue hover:neon-text transition-colors duration-300 cursor-default uppercase tracking-widest"
                    >
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    );
}
