import { Link } from 'react-router-dom';
import {
    Code, Zap, Shield, Sparkles, Cpu, Rocket,
    Bot, ArrowLeft, MessageSquare, Terminal,
    Layers, Globe, Smartphone, Github, Database
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticleBackground } from '../components/Layout/ParticleBackground';

export const FeaturesPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const featureList = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Verse Engine V3",
            desc: "Advanced logic generation contextually aware of the latest UEFN device updates and Verse syntax.",
            status: "Prime"
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Device Schema",
            desc: "Instant access to all device properties and methods without leaving the editor.",
            status: "Elite"
        },
        {
            icon: <Terminal className="w-8 h-8" />,
            title: "Logic Debugger",
            desc: "Solve race conditions and async failures with our proprietary UEFN debugger unit.",
            status: "Pro"
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Architect Chat",
            desc: "Natural language interface that understands complex architectural patterns for islands.",
            status: "Live"
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Multi-file Sync",
            desc: "Reference multiple Verse files and assets to maintain consistent project logic.",
            status: "Beta"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Logic Safety",
            desc: "Automatic validation of Verse code to prevent common crashes and memory leaks.",
            status: "Core"
        }
    ];

    return (
        <div className="relative min-h-screen overflow-x-hidden text-slate-100 bg-black pb-40">
            <ParticleBackground />

            {/* Navigation */}
            <nav className="relative z-50 px-6 md:px-12 py-8 flex justify-between items-center border-b border-white/5 backdrop-blur-xl bg-black/40 sticky top-0">
                <Link to="/" className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative bg-black border border-primary/50 p-2.5 rounded-xl">
                            <ArrowLeft size={18} className="text-primary" />
                        </div>
                    </div>
                    <span className="text-sm font-black text-white tracking-widest uppercase">Go Back</span>
                </Link>
                <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                    <span className="text-primary flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div> System Nominal</span>
                    <span>Version 3.4.0</span>
                </div>
            </nav>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <Sparkles size={14} className="text-primary" />
                        <span className="text-[10px] font-bold text-slate-300 tracking-[0.2em] uppercase">Advanced Toolkit</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black mb-8 text-white tracking-tighter">
                        Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 text-glow">Capabilities</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        A proprietary suite of AI-driven tools designed to redefine the boundaries of UEFN creation.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {featureList.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative glass-card p-10 rounded-[48px] border border-white/5 transition-all overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                {feature.icon}
                            </div>

                            <div className="flex justify-between items-start mb-10">
                                <div className="w-16 h-16 bg-primary/10 rounded-[28px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl group-hover:shadow-primary/30">
                                    {feature.icon}
                                </div>
                                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-slate-500">
                                    {feature.status}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-5 tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-medium text-base mb-8">{feature.desc}</p>

                            <div className="h-1 w-0 bg-primary/30 group-hover:w-full transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Technical Specs Banner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-40 p-10 md:p-16 glass-green rounded-[56px] border border-primary/10 flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="md:w-1/3">
                        <div className="p-8 bg-black/40 rounded-[40px] border border-white/5">
                            <Cpu size={48} className="text-primary mb-6" />
                            <h4 className="text-xl font-bold mb-2">Neural Architecture</h4>
                            <p className="text-slate-500 text-sm font-medium">DeepSeek-V3 Engine optimized for Verse logic.</p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Performance Benchmarks</h2>
                        <div className="space-y-6">
                            {[
                                { label: "Generation Latency", value: "0.8s", width: "w-[95%]" },
                                { label: "Verse Logic Stability", value: "99.2%", width: "w-[99%]" },
                                { label: "Device Schema Coverage", value: "100%", width: "w-full" }
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 text-slate-400">
                                        <span>{stat.label}</span>
                                        <span className="text-primary">{stat.value}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: stat.width }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-emerald-gradient"
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <div className="mt-40 text-center">
                    <Link to="/chat" className="inline-flex items-center gap-4 px-16 py-7 bg-white text-black rounded-3xl font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/20">
                        Launch Experience Now
                        <Rocket size={26} />
                    </Link>
                </div>
            </main>
        </div>
    );
};
