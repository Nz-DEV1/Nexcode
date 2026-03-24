import React, { useState } from 'react';
import { Mail, ArrowRight, MessageSquare, Globe, ArrowUpRight, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const DiscordIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 127.14 96.36" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M107.7 8.07A105.15 105.15 0 0081.47 0a72.06 72.06 0 00-3.36 6.83 97.68 97.68 0 00-29.08 0A72.37 72.37 0 0045.67 0a105.5 105.5 0 00-26.23 8.09C2.04 33.84-2.18 58.91.95 83.65a105.7 105.7 0 0032.22 16.3 77.7 77.7 0 006.89-11.1 68.42 68.42 0 01-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0064.32 0c.87.71 1.76 1.39 2.68 2a67.6 67.6 0 01-10.87 5.19 77 77 0 006.89 11.1 105.25 105.25 0 0032.23-16.3c3.55-29.47-3.9-54-19.42-75.59zM42.49 65.16c-5.32 0-9.71-4.86-9.71-10.84s4.3-10.82 9.71-10.82c5.44 0 9.77 4.88 9.69 10.82 0 5.98-4.3 10.84-9.69 10.84zm42.16 0c-5.32 0-9.71-4.86-9.71-10.84s4.3-10.82 9.71-10.82c5.44 0 9.77 4.88 9.69 10.82 0 5.98-4.3 10.84-9.69 10.84z" />
    </svg>
);

const CLIENTS = [
    { name: "Alpha", initial: "A" },
    { name: "Beta", initial: "B" },
    { name: "Gamma", initial: "G" },
    { name: "Delta", initial: "D" }
];


const ContactSection = () => {
    const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);
    const [emailData, setEmailData] = useState({ email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent("New Project Inquiry from NEXcode");
        const bodyContent = `Hello NEXcode Team,\n\nI'm reaching out regarding a new project opportunity.\n\nMy Email: ${emailData.email}\n\nMessage:\n${emailData.message}\n\nLooking forward to hearing back.`;
        const body = encodeURIComponent(bodyContent);

        // Gmail Compose Window (Better for "Got Gmail" request)
        const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nexcode01@gmail.com&su=${subject}&body=${body}`;

        // Standard Mailto as Fallback
        const mailtoLink = `mailto:nexcode01@gmail.com?subject=${subject}&body=${body}`;

        // Open Gmail in a new tab
        window.open(gmailComposeUrl, '_blank');

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setIsEmailFormOpen(false);
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 md:py-40 px-4 md:px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[160px] rounded-full"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="flex-1"
                    >

                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.8] mb-8 md:mb-16 uppercase"
                        >
                            LET'S <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-slow">BUILD.</span>
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="max-w-md">
                            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-tight mb-8">
                                Stop settling for mediocre. Partner with NEXcode to engineer your competitive advantage.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {CLIENTS.map((client, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-2xl relative group/avatar">
                                            <span className="text-[10px] font-black text-white/40 tracking-tighter transition-colors group-hover/avatar:text-primary">{client.initial}</span>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-30"></div>
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-black">+20</span>
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Happy Clients</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content / CTA Wall */}
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="w-full lg:w-auto"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="bg-[#0A0A0A]/60 backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 w-full lg:w-[480px] shadow-3xl relative overflow-hidden group min-h-[380px]"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-700"></div>

                            <AnimatePresence mode="wait">
                                {!isEmailFormOpen ? (
                                    <motion.div
                                        key="cta"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="h-full flex flex-col"
                                    >
                                        <h3 className="text-2xl font-black text-white mb-8 tracking-tight">Project Inquiry</h3>

                                        <div className="flex flex-col gap-4">
                                            <a
                                                href="https://discord.gg/WyNqUZJj"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn relative flex items-center justify-between w-full h-20 px-8 rounded-2xl bg-white text-black font-black text-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-white/5"
                                            >
                                                <div className="flex items-center gap-4 relative z-10">
                                                    <DiscordIcon size={24} />
                                                    <span>Discord</span>
                                                </div>
                                                <ArrowRight size={24} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer"></div>
                                            </a>

                                            <button
                                                onClick={() => setIsEmailFormOpen(true)}
                                                className="group/btn relative flex items-center justify-between w-full h-20 px-8 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-lg overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-95"
                                            >
                                                <div className="flex items-center gap-4 relative z-10">
                                                    <Mail size={24} className="text-primary" />
                                                    <span>Email Us</span>
                                                </div>
                                                <div className="relative z-10 px-3 py-1 bg-primary/20 rounded-full border border-primary/20 group-hover/btn:bg-primary group-hover/btn:text-black transition-all">
                                                    <span className="text-[10px] uppercase font-bold tracking-widest">Connect</span>
                                                </div>
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="h-full"
                                    >
                                        <div className="flex items-center justify-between mb-8">
                                            <h3 className="text-2xl font-black text-white tracking-tight">Send a Message</h3>
                                            <button
                                                onClick={() => setIsEmailFormOpen(false)}
                                                className="p-2 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white transition-colors"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>

                                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                            <div className="relative">
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Your Email Address"
                                                    className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all font-medium"
                                                    value={emailData.email}
                                                    onChange={(e) => setEmailData({ ...emailData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="relative">
                                                <textarea
                                                    required
                                                    rows="4"
                                                    placeholder="Tell us about your project..."
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all font-medium resize-none"
                                                    value={emailData.message}
                                                    onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitted}
                                                className="group/btn relative flex items-center justify-center w-full h-14 rounded-xl bg-primary text-black font-black text-lg transition-all hover:scale-[1.02] active:scale-95 disabled:grayscale disabled:scale-100"
                                            >
                                                {isSubmitted ? (
                                                    <span className="flex items-center gap-2">Sent Successfully! <Sparkles size={18} /></span>
                                                ) : (
                                                    <span className="flex items-center gap-2">Send Inquiry <Send size={18} /></span>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Our Base</p>
                                    <p className="text-sm font-bold text-slate-300">Remote / Worldwide</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Socials</p>
                                    <div className="flex gap-4">
                                        {['TW', 'LI', 'GH'].map(s => (
                                            <a key={s} href="#" className="text-sm font-bold text-slate-500 hover:text-white transition-colors">{s}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
