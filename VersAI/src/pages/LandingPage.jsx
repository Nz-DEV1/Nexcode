import { Link } from 'react-router-dom';
import { Bot, Sparkles, Zap, Code, Shield, Cpu, Rocket, CheckCircle2, ArrowRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticleBackground } from '../components/Layout/ParticleBackground';

export const LandingPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="relative min-h-screen overflow-x-hidden text-slate-100 bg-black">
            <ParticleBackground />

            {/* Navigation */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-50 px-6 md:px-12 py-6 flex justify-between items-center border-b border-white/5 backdrop-blur-xl bg-black/40 sticky top-0"
            >
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
                        <div className="relative bg-black border border-primary/50 p-2.5 rounded-xl">
                            <Bot size={24} className="text-primary" />
                        </div>
                    </div>
                    <span className="text-2xl font-black text-white tracking-tighter">VERSY<span className="text-primary text-glow">.AI</span></span>
                </div>

                <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-400">
                    <Link to="/features" className="hover:text-primary transition-all hover:scale-105">Features</Link>
                    <Link to="/how-it-works" className="hover:text-primary transition-all hover:scale-105">How it works</Link>
                    <Link to="/pricing" className="hover:text-primary transition-all hover:scale-105">Pricing</Link>
                </div>

                <Link to="/login" className="relative group overflow-hidden px-8 py-3 bg-white text-black rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    <span className="relative z-10 transition-colors group-hover:text-white">Launch App</span>
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
            </motion.nav>

            {/* Hero Section */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-[95vh] text-center px-4 pt-20 pb-40">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-5xl"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-12 backdrop-blur-md">
                        <Sparkles size={14} className="text-primary" />
                        <span className="text-[10px] md:text-xs font-bold text-primary tracking-[0.2em] uppercase">DeepSeek-V3 Engine Active</span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-7xl md:text-9xl font-black leading-[0.85] mb-10 text-white"
                    >
                        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 text-glow">UEFN</span>
                        <br />
                        <span className="opacity-90">Faster.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-medium"
                    >
                        The elite AI pair programmer for Verse. Architect stable code, solve complex logic, and master UEFN in record time.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row justify-center gap-6 mb-32"
                    >
                        <Link to="/login" className="px-10 py-5 bg-emerald-gradient text-black rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-primary/20 flex items-center gap-3">
                            Initialize AI <Zap size={20} fill="currentColor" />
                        </Link>
                        <Link to="/how-it-works" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                            Study Workflow
                        </Link>
                    </motion.div>

                    {/* Dashboard Preview Mockup */}
                    <motion.div
                        variants={itemVariants}
                        className="relative max-w-5xl mx-auto group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-emerald-500/30 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="relative glass-green rounded-[32px] border border-primary/30 overflow-hidden shadow-2xl">
                            <div className="flex justify-between items-center px-6 py-4 bg-black/60 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/30 border border-red-500/20"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/30 border border-yellow-500/20"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-primary/30 border border-primary/20"></div>
                                </div>
                                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">verse_engine_v3.0</div>
                                <div className="w-12"></div>
                            </div>
                            <div className="p-10 text-left font-mono text-sm md:text-base space-y-3 opacity-90 overflow-x-auto">
                                <div className="text-purple-400">using <span className="text-white">{`{ /Fortnite.com/Devices /Verse.org/Simulation }`}</span></div>
                                <div className="text-emerald-500/60 italic font-light"># Architect your metaverse experience</div>
                                <div className="text-white flex gap-2"><span className="text-primary">versy_device</span> := <span className="text-yellow-400">class</span>(creative_device):</div>
                                <div className="pl-6 text-slate-300">OnBegin<span className="text-primary">&lt;</span>override<span className="text-primary">&gt;</span>()<span className="text-primary">&lt;</span>suspends<span className="text-primary">&gt;</span>:void=</div>
                                <div className="pl-12 flex items-center gap-2">
                                    <span className="text-primary">Print</span>
                                    <span className="text-white">("Welcome to ")</span>
                                    <span className="text-primary font-bold">"VERSY.AI"</span>
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="w-2.5 h-5 bg-primary rounded-sm"
                                    ></motion.span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </main>

            {/* Features Section */}
            <section id="features" className="relative z-10 py-40 px-6 bg-gradient-to-b from-black via-slate-950/20 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-32"
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Next-Gen <span className="text-primary">Capabilities</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                            Engineered for creators who demand perfection in the Fortnite ecosystem.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Code className="w-8 h-8" />,
                                title: "Verse Generator",
                                desc: "Precision code generation optimized for the latest Verse language specifications."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Instant Debug",
                                desc: "Resolve complex runtime errors with deep contextual analysis and suggested fixes."
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "Device Library",
                                desc: "Comprehensive API knowledge covering every creative device and component available."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group glass-card p-12 rounded-[40px] border border-white/5 hover:border-primary/40 transition-all hover:-translate-y-3"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-lg group-hover:shadow-primary/30">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-5 tracking-tight">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium text-lg">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative z-10 py-48 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto glass-green p-16 md:p-32 rounded-[64px] border border-primary/20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -mr-64 -mt-64"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -ml-64 -mb-64"></div>

                    <h2 className="text-6xl md:text-8xl font-black mb-10 relative z-10 tracking-tighter leading-[0.9]">
                        Enter the <br /> <span className="text-primary text-glow">Metaverse</span>
                    </h2>
                    <p className="text-2xl md:text-3xl text-slate-400 mb-16 max-w-3xl mx-auto font-medium relative z-10">
                        Stop battling syntax. Start engineering legendary gaming experiences.
                    </p>
                    <Link to="/login" className="inline-flex items-center gap-4 px-16 py-7 bg-white text-black rounded-3xl font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/20 relative z-10">
                        Get Started Free
                        <Rocket size={26} />
                    </Link>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-24 px-6 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-3">
                            <Bot size={28} className="text-primary" />
                            <span className="text-3xl font-black tracking-tighter">VERSY</span>
                        </div>
                        <p className="text-slate-500 font-medium">Empowering the next generation of UEFN creators.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-sm font-bold text-slate-500">
                        <div className="flex items-center gap-10">
                            <a href="#" className="hover:text-white transition-colors">Documentation</a>
                            <a href="#" className="hover:text-white transition-colors">API</a>
                            <a href="#" className="hover:text-white transition-colors">Community</a>
                        </div>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all flex items-center gap-2 py-3 px-6 bg-white/5 rounded-full border border-white/5">
                            <Github size={20} />
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex justify-center text-[10px] font-bold text-slate-600 tracking-[0.4em] uppercase">
                    © 2026 VERSY AI. ALL RIGHTS RESERVED.
                </div>
            </footer>
        </div>
    );
};

