import React, { useEffect, useRef } from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { FaRocket, FaHandshake, FaLightbulb, FaChartLine, FaUserShield, FaHeadset } from 'react-icons/fa';

const Counter = ({ value, suffix = "", prefix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2500 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = prefix + Math.floor(latest) + suffix;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref}>0{suffix}</span>;
};

const reasons = [
    {
        icon: <FaRocket />,
        title: "Innovation First",
        description: "We don't just follow trends; we set them. Our team leverages the latest technologies to build future-proof solutions that keep you ahead of the curve.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: <FaHandshake />,
        title: "Client-Centric Approach",
        description: "Your success is our obsession. We work as an extension of your team, ensuring transparent communication and alignment with your business goals.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: <FaChartLine />,
        title: "Data-Driven Results",
        description: "We don't guess; we measure. Every strategy is backed by data analytics to maximize ROI and deliver measurable growth for your business.",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: <FaUserShield />,
        title: "Enterprise Security",
        description: "Security isn't an afterthought. We implement bank-grade security protocols to protect your data and your users' privacy from day one.",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: <FaLightbulb />,
        title: "Creative Excellence",
        description: "Design that captivates. Our award-winning designers create intuitive, stunning interfaces that leave a lasting impression on your audience.",
        color: "from-yellow-500 to-amber-500"
    },
    {
        icon: <FaHeadset />,
        title: "24/7 Dedicated Support",
        description: "We're always here for you. Our global support team ensures your digital assets run smoothly around the clock, no matter where you are.",
        color: "from-indigo-500 to-violet-500"
    }
];

export default function WhyChooseUs() {
    return (
        <SectionWrapper id="why-choose-us">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-neonBlue/30 bg-neonBlue/5">
                        <span className="text-neonBlue text-sm font-semibold uppercase tracking-wider">Why Choose Nexto</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                        We Build Digital <br />
                        <span className="text-neonBlue">Success Stories</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                        Partner with a team that combines technical expertise, creative innovation, and strategic thinking to elevate your brand.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 gap-4 md:gap-8"
                >
                    <div className="space-y-4 md:space-y-8 mt-8 md:mt-16">
                        <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-neonBlue/30 transition-colors duration-300">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                <Counter value={98} suffix="%" />
                            </h3>
                            <p className="text-gray-400 text-sm">Client Retention</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-neonBlue/30 transition-colors duration-300">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                <Counter value={500} suffix="+" />
                            </h3>
                            <p className="text-gray-400 text-sm">Projects Launched</p>
                        </div>
                    </div>
                    <div className="space-y-4 md:space-y-8">
                        <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-neonBlue/30 transition-colors duration-300">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                <Counter value={10} suffix="+" />
                            </h3>
                            <p className="text-gray-400 text-sm">Years Experience</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-neonBlue/30 transition-colors duration-300">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                24/7
                            </h3>
                            <p className="text-gray-400 text-sm">Active Support</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative p-8 rounded-3xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-800/30 overflow-hidden"
                    >
                        {/* Hover Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                        {/* Icon */}
                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-2xl text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            {reason.icon}
                        </div>

                        {/* Content */}
                        <div className="relative">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors duration-300">
                                {reason.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {reason.description}
                            </p>
                        </div>

                        {/* Decorative Corner */}
                        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${reason.color} opacity-10 blur-2xl rounded-full -mr-10 -mt-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-150`} />
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
