import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, User, Briefcase, MessageSquare } from 'lucide-react';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        projectDetails: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'E-commerce Solutions',
        'Digital Marketing',
        'SEO Services',
        'Cloud Solutions',
        'Custom Software Development',
        'Other'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const serviceId = 'service_0gn8h82';
            const templateId = 'template_l9ru7q4';
            const publicKey = 'lfgUtt-mH80nnO7cn';

            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );

            if (result.text === 'OK') {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
                });
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    service: '',
                    projectDetails: ''
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or contact us directly.'
            });
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neonBlue/5 rounded-full blur-[150px]" />
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-neonBlue/20" />
                <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full border-2 border-purple-500/20" />

                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-neonBlue text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6"
                        >
                            Get In Touch
                        </motion.p>

                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Let's Build Something
                            <br />
                            <span className="text-neonBlue">Amazing Together</span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-neonBlue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Contact <span className="text-neonBlue">Information</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: <Mail className="w-6 h-6" />,
                                        title: 'Email',
                                        content: 'info@nexto.in',
                                        link: 'mailto:info@nexto.in'
                                    },
                                    {
                                        icon: <Phone className="w-6 h-6" />,
                                        title: 'Phone',
                                        content: '+91 98765 43210',
                                        link: 'tel:+919876543210'
                                    },
                                    {
                                        icon: <MapPin className="w-6 h-6" />,
                                        title: 'Office',
                                        content: 'Anna Nagar, Chennai, Tamil Nadu 600040, India',
                                        link: null
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-6 rounded-2xl bg-black border border-white/10 hover:border-neonBlue/50 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-neonBlue/10 flex items-center justify-center text-neonBlue group-hover:bg-neonBlue/20 transition-colors flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                                            {item.link ? (
                                                <a href={item.link} className="text-gray-400 hover:text-neonBlue transition-colors">
                                                    {item.content}
                                                </a>
                                            ) : (
                                                <p className="text-gray-400">{item.content}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                                <div className="flex gap-4">
                                    {['twitter', 'linkedin', 'github', 'instagram'].map((social, index) => (
                                        <motion.a
                                            key={social}
                                            href={`#${social}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neonBlue hover:border-neonBlue/50 transition-all duration-300"
                                        >
                                            <span className="capitalize text-xs">{social[0]}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-white font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-neonBlue/50 focus:bg-white/10 transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-neonBlue/50 focus:bg-white/10 transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-neonBlue/50 focus:bg-white/10 transition-all duration-300"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-white font-medium mb-2">
                                        Select Service *
                                    </label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-neonBlue/50 focus:bg-white/10 transition-all duration-300 cursor-pointer appearance-none"
                                        >
                                            <option value="" className="bg-gray-900">Select a service...</option>
                                            {services.map((service) => (
                                                <option key={service} value={service} className="bg-gray-900">
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="projectDetails" className="block text-white font-medium mb-2">
                                        Project Details *
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                        <textarea
                                            id="projectDetails"
                                            name="projectDetails"
                                            value={formData.projectDetails}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-neonBlue/50 focus:bg-white/10 transition-all duration-300 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                </div>

                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-xl flex items-center gap-3 ${status.type === 'success'
                                            ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                                            : 'bg-red-500/10 border border-red-500/30 text-red-400'
                                            }`}
                                    >
                                        {status.type === 'success' ? (
                                            <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                        )}
                                        <p className="text-sm">{status.message}</p>
                                    </motion.div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-neonBlue text-black font-semibold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-neonBlue/50 hover:shadow-neonBlue/70 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Visit Our <span className="text-neonBlue">Office</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We'd love to meet you in person. Drop by our office in Chennai for a coffee and a chat.
                        </p>
                    </div>
                    <div className="rounded-3xl overflow-hidden border border-white/10 h-[400px] bg-gray-900">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490895253!2d79.92254335!3d13.047984899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1733473177000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Nexto Office Location - Chennai"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
