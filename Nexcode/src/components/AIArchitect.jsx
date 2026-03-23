import React, { useState } from 'react';
import { Layers, Server, Code2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const phases = [
    {
        id: 'discovery',
        title: 'Strategy & Requirements',
        icon: <Layers size={24} />,
        description: 'Comprehensive analysis of business objectives and technical requirements. We establish clear project scopes, success metrics, and architectural foundations before writing any code.',
        points: ['Requirements Gathering', 'Systems Architecture Design', 'Feasibility & Risk Assessment', 'Project Roadmap & Milestones'],
        techStack: ['Jira / Linear', 'Figma', 'Miro', 'Notion']
    },
    {
        id: 'architecture',
        title: 'System Design',
        icon: <Server size={24} />,
        description: 'Designing resilient, scalable infrastructure optimized for security and performance. Our architecture ensures your platform seamlessly handles high concurrency and data volume.',
        points: ['Database Schema & ERD', 'REST/GraphQL API Design', 'Cloud Resource Allocation', 'Security & Compliance Audits'],
        techStack: ['PostgreSQL', 'Redis', 'Docker', 'AWS / GCP']
    },
    {
        id: 'development',
        title: 'Engineering & QA',
        icon: <Code2 size={24} />,
        description: 'Iterative, sprint-based development utilizing modern frameworks. Every module is subjected to rigorous automated testing and peer code reviews to guarantee enterprise-grade stability.',
        points: ['Component-Driven UI/UX', 'Microservices Architecture', 'Continuous Integration', 'Automated Unit & E2E Testing'],
        techStack: ['React / Next.js', 'Node.js / Python', 'Jest / Cypress', 'TypeScript']
    },
    {
        id: 'deployment',
        title: 'Deployment & Ops',
        icon: <Rocket size={24} />,
        description: 'Automated deployment pipelines and comprehensive observability. We ensure smooth delivery with reliable, zero-downtime releases and proactive infrastructure monitoring.',
        points: ['CI/CD Pipeline Configuration', 'Load Balancing & CDN', 'Real-time Telemetry & Logging', 'Disaster Recovery Protocols'],
        techStack: ['GitHub Actions', 'Kubernetes', 'Datadog / Sentry', 'Cloudflare']
    }
];

const AIArchitect = () => {
    const [activePhase, setActivePhase] = useState(phases[0]);

    return (
        <section id="architecture" className="py-24 px-4 md:px-6 relative overflow-hidden bg-black border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase"
                    >
                        Our Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Blueprint</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        How we transform complex visions into scalable, high-performance digital reality. A flawless process from concept to deployment.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
                    {/* Left: Phase Navigation */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {phases.map((phase, index) => {
                            const isActive = activePhase.id === phase.id;
                            return (
                                <motion.button
                                    key={phase.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setActivePhase(phase)}
                                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-6 group relative overflow-hidden ${
                                        isActive 
                                        ? 'bg-black border-primary/30 shadow-[0_0_30px_-5px_rgba(46,161,227,0.15)] z-10' 
                                        : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeIndicator" 
                                            className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-accent" 
                                        />
                                    )}
                                    
                                    <div className={`p-4 rounded-xl shrink-0 transition-colors duration-300 ${isActive ? 'bg-primary/10 text-primary' : 'bg-white/5 text-slate-400 group-hover:text-white'}`}>
                                        {phase.icon}
                                    </div>
                                    
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 mb-1.5 tracking-wider uppercase">Phase 0{index + 1}</div>
                                        <h3 className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                            {phase.title}
                                        </h3>
                                    </div>
                                    
                                    <ArrowRight className={`ml-auto shrink-0 transition-all duration-300 ${isActive ? 'text-primary opacity-100 translate-x-0' : 'text-slate-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Right: Phase Details */}
                    <div className="lg:col-span-7 relative min-h-[500px] flex md:min-h-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePhase.id}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute inset-0 md:relative md:w-full bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col shadow-2xl overflow-hidden"
                            >
                                {/* Decorative gradient blob inside the card */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                                <div className="relative z-10 mb-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-xs mb-6 tracking-wide uppercase">
                                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                                        Phase {phases.findIndex(p => p.id === activePhase.id) + 1} Active
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                        {activePhase.title}
                                    </h3>
                                    <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                                        {activePhase.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-auto relative z-10">
                                    {/* Key Deliverables */}
                                    <div className="space-y-6">
                                        <h4 className="text-white font-bold flex items-center gap-2 uppercase tracking-widest text-xs text-slate-500">
                                            <CheckCircle2 size={16} className="text-primary" />
                                            Key Focus Areas
                                        </h4>
                                        <ul className="space-y-4">
                                            {activePhase.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0"></div>
                                                    <span className="text-sm font-medium">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-6">
                                        <h4 className="text-white font-bold flex items-center gap-2 uppercase tracking-widest text-xs text-slate-500">
                                            <Code2 size={16} className="text-accent" />
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2.5">
                                            {activePhase.techStack.map((tech, i) => (
                                                <span 
                                                    key={i} 
                                                    className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs font-bold tracking-wide transition-colors hover:bg-white/10 cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIArchitect;
