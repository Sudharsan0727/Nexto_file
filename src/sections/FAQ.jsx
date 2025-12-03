import React, { useState } from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    {
        question: "What services does Nexto Digital offer?",
        answer: "We offer a comprehensive range of digital solutions including Custom Website Design, E-commerce Development, Mobile App Development (iOS & Android), Digital Marketing (SEO, SEM, SMM), Cloud Server Management, and Corporate Branding services."
    },
    {
        question: "How long does it take to build a website?",
        answer: "The timeline varies based on the project's complexity. A standard business website typically takes 2-4 weeks, while more complex e-commerce platforms or custom web applications may take 6-12 weeks. We provide a detailed timeline during our initial consultation."
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer flexible maintenance packages to ensure your digital assets remain secure, up-to-date, and optimized. Our support includes regular backups, security patches, content updates, and technical troubleshooting."
    },
    {
        question: "What is your pricing structure?",
        answer: "Our pricing is project-based and tailored to your specific requirements. We believe in transparency and provide detailed quotes with no hidden costs. Contact us for a free consultation and customized proposal."
    },
    {
        question: "Can you help improve our Google search rankings?",
        answer: "Absolutely! Our Digital Marketing team specializes in SEO (Search Engine Optimization). We use proven strategies to improve your visibility, drive organic traffic, and boost your rankings on Google and other search engines."
    },
    {
        question: "Do you work with startups or established enterprises?",
        answer: "We work with businesses of all sizes! From ambitious startups looking to launch their first product to established enterprises seeking digital transformation, we scale our solutions to meet your specific goals and budget."
    }
];

const FAQItem = ({ faq, isOpen, toggleOpen, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
        >
            <button
                onClick={toggleOpen}
                className={`w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 border ${isOpen
                        ? 'bg-gray-800/50 border-neonBlue/50 shadow-lg shadow-neonBlue/10'
                        : 'bg-gray-900/30 border-gray-800 hover:bg-gray-800/50 hover:border-gray-700'
                    }`}
            >
                <span className={`text-lg md:text-xl font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-neonBlue' : 'text-white'}`}>
                    {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen
                        ? 'bg-neonBlue border-neonBlue text-black rotate-180'
                        : 'border-gray-600 text-gray-400 group-hover:border-neonBlue group-hover:text-neonBlue'
                    }`}>
                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-2 text-gray-400 leading-relaxed border-l-2 border-neonBlue/20 ml-6 mt-2">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <SectionWrapper id="faq">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left Side - Header & Info */}
                <div className="lg:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="sticky top-32"
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-neonBlue/30 bg-neonBlue/5">
                            <span className="text-neonBlue text-sm font-semibold uppercase tracking-wider">Common Questions</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Frequently Asked <span className="text-neonBlue">Questions</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Got questions? We've got answers. Here's everything you need to know about our services and process. Can't find what you're looking for?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-white font-semibold hover:text-neonBlue transition-colors duration-300 group"
                        >
                            Contact our support team
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                    </motion.div>
                </div>

                {/* Right Side - Accordion */}
                <div className="lg:col-span-7">
                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                index={index}
                                isOpen={openIndex === index}
                                toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
