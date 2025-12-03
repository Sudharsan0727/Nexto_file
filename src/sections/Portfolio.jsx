import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
    {
        title: "Neon Finance",
        cat: "Fintech App",
        color: "from-blue-500 to-cyan-500",
        image: "images/DAC.png",
        tech: ["React", "Node.js", "Web3"]
    },
    {
        title: "Cyber Health",
        cat: "Medical Platform",
        color: "from-green-500 to-emerald-500",
        image: "images/DAC.png",
        tech: ["Vue.js", "Python", "AI/ML"]
    },
    {
        title: "Orbit Realty",
        cat: "Real Estate",
        color: "from-purple-500 to-pink-500",
        image: "images/DAC.png",
        tech: ["Next.js", "GraphQL", "3D"]
    },
    {
        title: "Quantum Learn",
        cat: "EdTech",
        color: "from-orange-500 to-red-500",
        image: "images/DAC.png",
        tech: ["React", "Firebase", "WebRTC"]
    },
    {
        title: "Nexus Auto",
        cat: "Automotive",
        color: "from-yellow-500 to-amber-500",
        image: "images/DAC.png",
        tech: ["Three.js", "React", "WebGL"]
    },
];

function ProjectCard({ project, index }) {
    const canvasRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = 30;

        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width / 2;
                this.y = Math.random() * canvas.height / 2;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width / 2) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height / 2) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(30, 144, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let animationId;
        function animate() {
            ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(30, 144, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        }

        if (isHovered) {
            animate();
        }

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [isHovered]);

    return (
        <div
            className="group relative h-[400px] md:h-[500px] w-[300px] md:w-[400px] overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 flex-shrink-0 hover:border-neonBlue/50 transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Image or Gradient Background */}
            {project.image ? (
                <div className="absolute inset-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                    />
                </div>
            ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-neonBlue/20 text-neonBlue border border-neonBlue/30">
                            {tech}
                        </span>
                    ))}
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-neonBlue transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 font-mono text-sm uppercase tracking-wider mb-4">{project.cat}</p>

                {/* View Project Button */}
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 flex items-center gap-2 text-sm text-white hover:text-neonBlue">
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonBlue to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonBlue to-transparent" />
            </div>
        </div>
    );
}

export default function Portfolio() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} id="portfolio" className="relative h-[250vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24 will-change-transform">
                    <div className="flex-shrink-0 w-[300px] md:w-[400px] flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                                Selected <br />
                                <span className="text-neonBlue">Works</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-xs mb-8">
                                A showcase of our most ambitious projects, pushing the boundaries of design and code.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-neonBlue" />
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Scroll to explore</span>
                            </div>
                        </motion.div>
                    </div>

                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
