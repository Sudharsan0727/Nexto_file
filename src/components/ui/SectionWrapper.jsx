import React from 'react';

export default function SectionWrapper({ children, id, className = "" }) {
    return (
        <section id={id} className={`py-20 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto ${className}`}>
            {children}
        </section>
    );
}
