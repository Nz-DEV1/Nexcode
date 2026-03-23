import { Link } from 'react-router-dom';
import { Bot, Key, MessageSquare, Zap, ArrowLeft, CheckCircle, Rocket, Shield, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticleBackground } from '../components/Layout/ParticleBackground';

export const HowItWorksPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const steps = [
        {
            step: "01",
            icon: <Key size={32} />,
            title: "Connect Engine",
            desc: "Securely link your AI intelligence via OpenRouter or direct endpoints. Your keys are encrypted and stored locally in your browser memory—never on our servers.",
            details: ["256-bit Encryption", "Local Key Storage", "Auto-Validation"],
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 blur-[60px] rounded-full animate-float"></div>
                    <Key size={80} className="text-primary opacity-20" />
                    <div className="absolute inset-0 border border-primary/20 rounded-[32px] m-8 border-dashed animate-pulse"></div>
                </div>
            )
        },
        {
            step: "02",
            icon: <Terminal size={32} />,
            title: "Architect Logic",
            desc: "Communicate in natural language. Describe your creative vision, and Versy translates it into high-performance Verse code with proper UEFN device interfaces.",
            details: ["Syntax Highlighting", "Context Awareness", "Error Diagnosis"],
            visual: (
                <div className="p-6 font-mono text-[10px] space-y-2 opacity-40">
                    <div className="text-emerald-400"># Generating Creative Device...</div>
                    <div className="text-white">creative_device := class:</div>
                    <div className="pl-4 text-slate-400">OnBegin():void=</div>
                    <div className="pl-8 text-primary">Print("Verse Active")</div>
                    <div className="w-full h-[1px] bg-primary/20 my-4"></div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500/20"></div>
                    </div>
                </div>
            )
        },
        {
            step: "03",
            icon: <Rocket size={32} />,
            title: "Deploy & Scale",
            desc: "One-click copy-paste deployment. Get detailed implementation guides and master Every Fortnite creative device with our extensive knowledge base.",
            details: ["One-Click Copy", "Step Guides", "Pro Templates"],
            visual: (
                <div className="relative w-full h-full flex items-center justify-center p-8">
                    <div className="w-full h-full glass-card rounded-2xl flex items-center justify-center border border-primary/10">
                        <Rocket size={48} className="text-primary animate-float" />
                    </div>
                </div>
            )
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
                <div className="flex items-center gap-3">
                    <Bot size={20} className="text-primary" />
                    <span className="text-xl font-black tracking-tighter">VERSY</span>
                </div>
            </nav>

            <main className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-40"
                >
                    <h1 className="text-6xl md:text-9xl font-black mb-8 text-white tracking-tighter">
                        Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 text-glow">Workflow</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Engineered for speed. Built for the future of Fortnite development.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-48"
                >
                    {steps.map((item, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-24 items-center`}>
                            <motion.div variants={itemVariants} className="md:w-1/2 relative">
                                <span className="text-[12rem] font-black text-white/[0.03] absolute -top-32 -left-12 leading-none select-none pointer-events-none">{item.step}</span>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-emerald-gradient p-0.5 rounded-[32px] mb-10 shadow-xl shadow-primary/20">
                                        <div className="w-full h-full bg-black rounded-[30px] flex items-center justify-center text-primary">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">{item.title}</h2>
                                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 font-medium">{item.desc}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {item.details.map(d => (
                                            <div key={d} className="flex items-center gap-3 py-3 px-4 bg-white/[0.03] border border-white/5 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-300">
                                                <CheckCircle size={14} className="text-primary shrink-0" /> {d}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="md:w-1/2 w-full"
                            >
                                <div className="glass-green aspect-square md:aspect-video rounded-[64px] border border-primary/20 overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-primary/5 opacity-40 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {item.visual}
                                    </div>
                                    {/* Grid Decor */}
                                    <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-[1px] bg-white/[0.05]"></div>
                                    <div className="absolute inset-y-12 left-1/2 -translate-x-1/2 w-[1px] bg-white/[0.05]"></div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>

                {/* Final CTA Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-64 text-center glass-green p-16 md:p-32 rounded-[64px] border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px]"></div>

                    <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter relative z-10">Start Your <span className="text-primary text-glow">Journey</span></h2>
                    <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium relative z-10">
                        Join thousands of creators building the next generation of Metaverse experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                        <Link to="/chat" className="px-16 py-6 bg-emerald-gradient text-black rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3">
                            Launch Now <Zap size={24} fill="currentColor" />
                        </Link>
                    </div>
                </motion.div>
            </main>

            {/* Simple Footer Link */}
            <div className="border-t border-white/5 pt-20 text-center">
                <Link to="/features" className="text-slate-500 hover:text-primary font-bold transition-colors">Explore Professional Features →</Link>
            </div>
        </div>
    );
};

