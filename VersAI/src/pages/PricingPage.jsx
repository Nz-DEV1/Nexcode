import { Link } from 'react-router-dom';
import { Bot, Check, ArrowLeft, Rocket, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticleBackground } from '../components/Layout/ParticleBackground';

export const PricingPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
        <div className="relative min-h-screen overflow-x-hidden text-slate-100 bg-black pb-24">
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

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32"
                >
                    <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter">
                        Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 text-glow">Pricing</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Scale your UEFN development with precision-engineered AI intelligence.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
                >
                    {/* Free Plan */}
                    <motion.div variants={itemVariants} className="group glass-card p-12 rounded-[48px] border border-white/5 flex flex-col hover:border-white/10 transition-all">
                        <div className="mb-10 text-center md:text-left">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                <Rocket size={24} className="text-slate-300" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 tracking-tight">Explorer</h3>
                            <p className="text-slate-500 font-medium leading-snug">Ideal for architects just starting their Verse journey.</p>
                        </div>
                        <div className="mb-12 text-center md:text-left">
                            <div className="flex items-baseline gap-1">
                                <span className="text-6xl font-black text-white tracking-tight">$0</span>
                                <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">/ month</span>
                            </div>
                        </div>
                        <ul className="space-y-5 mb-12 flex-1">
                            {['Basic Verse Logic', '10 Daily Generations', 'Island Templates', 'Discord Access'].map((feat) => (
                                <li key={feat} className="flex items-center gap-4 text-slate-400 font-semibold text-sm">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Check size={12} className="text-primary" />
                                    </div>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <Link to="/chat" className="w-full py-5 rounded-3xl bg-white/5 border border-white/10 font-black text-sm uppercase tracking-widest hover:bg-white text-black transition-all flex items-center justify-center">Get Started</Link>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative flex flex-col scale-105 z-10"
                    >
                        <div className="absolute -inset-1 bg-emerald-gradient rounded-[52px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative h-full glass-green p-12 rounded-[48px] border border-primary/30 flex flex-col shadow-2xl shadow-primary/20">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">Elite Creator</div>

                            <div className="mb-10 text-center md:text-left">
                                <div className="w-14 h-14 bg-emerald-gradient rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                                    <Crown size={24} className="text-black" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 tracking-tight">Creator Pro</h3>
                                <p className="text-emerald-400/80 font-medium leading-snug">The industry standard for professional UEFN developers.</p>
                            </div>
                            <div className="mb-12 text-center md:text-left">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-6xl font-black text-white tracking-tight">$19</span>
                                    <span className="text-slate-400/60 text-xs font-bold uppercase tracking-[0.2em]">/ month</span>
                                </div>
                            </div>
                            <ul className="space-y-5 mb-12 flex-1">
                                {[
                                    'Unlimited Generation',
                                    'Advanced Logic Engine V3',
                                    'Multi-File Awareness',
                                    'Private Code Vault',
                                    'Early API Access'
                                ].map((feat) => (
                                    <li key={feat} className="flex items-center gap-4 text-slate-200 font-semibold text-sm">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Check size={12} className="text-primary" />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/chat" className="w-full py-5 rounded-3xl bg-emerald-gradient text-black font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/30">
                                Upgrade Now <Zap size={16} fill="currentColor" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Team Plan */}
                    <motion.div variants={itemVariants} className="group glass-card p-12 rounded-[48px] border border-white/5 flex flex-col hover:border-white/10 transition-all">
                        <div className="mb-10 text-center md:text-left">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                <Bot size={24} className="text-slate-300" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 tracking-tight">Studio</h3>
                            <p className="text-slate-500 font-medium leading-snug">Optimized collaboration for high-output development teams.</p>
                        </div>
                        <div className="mb-12 text-center md:text-left">
                            <div className="flex items-baseline gap-1">
                                <span className="text-6xl font-black text-white tracking-tight">$49</span>
                                <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">/ month</span>
                            </div>
                        </div>
                        <ul className="space-y-5 mb-12 flex-1">
                            {['Everything in Pro', 'Unlimited Team Slots', 'Shared Logic Library', '24/7 Priority Ops', 'Custom API Endpoints'].map((feat) => (
                                <li key={feat} className="flex items-center gap-4 text-slate-400 font-semibold text-sm">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Check size={12} className="text-primary" />
                                    </div>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-5 rounded-3xl bg-white/5 border border-white/10 font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">Contact Sales</button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-40 text-center"
                >
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.4em] mb-4">Enterprise Scaling Available</p>
                    <p className="text-slate-400 max-w-xl mx-auto font-medium">
                        Need something more custom? We offer tailor-made solutions for large-scale studios and agencies.
                        <a href="#" className="text-primary ml-2 hover:underline">Learn more.</a>
                    </p>
                </motion.div>
            </main>
        </div>
    );
};

