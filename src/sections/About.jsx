import React, { useRef, useEffect } from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import { motion } from 'framer-motion';

function DigitalExcellenceCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);

        const width = canvas.width / 2;
        const height = canvas.height / 2;

        const particles = [];
        const particleCount = 100;
        const connectionDistance = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                this.color = `rgba(30, 144, 255, ${Math.random() * 0.5 + 0.2})`;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off walls
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let animationId;
        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = `rgba(30, 144, 255, ${opacity * 0.4})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full opacity-80"
            />

            {/* Tech UI elements - Kept as subtle decoration, removed main center text */}
            <div className="absolute top-4 left-4 text-xs font-mono text-neonBlue/50">
                <div>SYS_ID: NXT-2024</div>
                <div>STATUS: ACTIVE</div>
            </div>

            <div className="absolute bottom-4 right-4 text-xs font-mono text-neonBlue/50 text-right">
                <div>v2.0.1</div>
                <div>SECURE</div>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonBlue to-transparent" />
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-neonBlue to-transparent" />
            </div>
            <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-neonBlue to-transparent" />
                <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-neonBlue to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonBlue to-transparent" />
                <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-neonBlue to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20">
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-neonBlue to-transparent" />
                <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-neonBlue to-transparent" />
            </div>
        </div>
    );
}

export default function About() {
    return (
        <SectionWrapper id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Nexto Digital: Your Partner in <span className="text-neonBlue">Digital Marketing Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        At NEXTO Digital, we blend innovation with expertise to deliver outstanding web and digital solutions.
                        From dynamic website designs to cutting-edge mobile apps, we are committed to transforming your digital presence and driving your success.
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Nexto Digital is a leading web design and development firm, offering custom website design, e-commerce development,
                        mobile applications, digital marketing services, cloud server management, and corporate mailing solutions.
                    </p>

                    <div className="flex gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white">5+</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Years Exp</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">Global</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Presence</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">100+</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Projects</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden neon-box aspect-square">
                        <DigitalExcellenceCanvas />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-neonBlue/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
