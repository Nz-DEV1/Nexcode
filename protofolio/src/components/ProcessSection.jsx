import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Terminal, Rocket } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { type: "spring", damping: 25, stiffness: 100 }
};

const ProcessSection = () => {
    const steps = [
        {
            icon: <Search size={28} className="text-primary" />,
            title: "Consult",
            description: "Deep dive into your business logic and user journey to define a clear, technical vision.",
            color: "from-primary/10 to-transparent"
        },
        {
            icon: <PenTool size={28} className="text-accent" />,
            title: "Architect",
            description: "Mapping out scalable infrastructure and high-performance system architectures.",
            color: "from-accent/10 to-transparent"
        },
        {
            icon: <Terminal size={28} className="text-white" />,
            title: "Ship",
            description: "Rapid engineering using elite modern stacks to bring your platform to life in weeks.",
            color: "from-white/5 to-transparent"
        },
        {
            icon: <Rocket size={28} className="text-primary" />,
            title: "Scale",
            description: "Continuous optimization, performance monitoring, and strategic technical evolution.",
            color: "from-primary/10 to-transparent"
        }
    ];

    return (
        <section id="process" className="py-24 px-4 md:px-6 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>

            <motion.div 
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: false, margin: "-100px" }}
                transition={{ staggerChildren: 0.1 }}
                className="container mx-auto max-w-6xl relative z-10"
            >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-slow">Process</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        Our battle-tested workflow for building world-class digital platforms with speed and precision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            variants={fadeInUp}
                            className="bento-card rounded-[2.5rem] p-8 md:p-10 border border-white/10 relative group overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            <div className="relative z-10">
                                <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
                                    {String(idx + 1).padStart(2, '0')}. {step.title}
                                </h3>
                                <p className="text-slate-400 text-base leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                                    {step.description}
                                </p>
                            </div>

                            <div className="absolute -bottom-6 -right-6 text-9xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-all duration-700 select-none">
                                {idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ProcessSection;
