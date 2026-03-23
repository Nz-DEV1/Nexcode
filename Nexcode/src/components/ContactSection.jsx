import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { type: "spring", damping: 25, stiffness: 100 }
};

const DiscordIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 127.14 96.36" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M107.7 8.07A105.15 105.15 0 0081.47 0a72.06 72.06 0 00-3.36 6.83 97.68 97.68 0 00-29.08 0A72.37 72.37 0 0045.67 0a105.5 105.5 0 00-26.23 8.09C2.04 33.84-2.18 58.91.95 83.65a105.7 105.7 0 0032.22 16.3 77.7 77.7 0 006.89-11.1 68.42 68.42 0 01-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0064.32 0c.87.71 1.76 1.39 2.68 2a67.6 67.6 0 01-10.87 5.19 77 77 0 006.89 11.1 105.25 105.25 0 0032.23-16.3c3.55-29.47-3.9-54-19.42-75.59zM42.49 65.16c-5.32 0-9.71-4.86-9.71-10.84s4.3-10.82 9.71-10.82c5.44 0 9.77 4.88 9.69 10.82 0 5.98-4.3 10.84-9.69 10.84zm42.16 0c-5.32 0-9.71-4.86-9.71-10.84s4.3-10.82 9.71-10.82c5.44 0 9.77 4.88 9.69 10.82 0 5.98-4.3 10.84-9.69 10.84z" />
  </svg>
);

const ContactSection = () => {
    return (
        <section id="contact" className="py-32 px-4 md:px-6">
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="container mx-auto max-w-5xl"
            >
                <motion.div 
                  variants={fadeInUp}
                  className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-black p-8 md:p-16 lg:p-32 text-center"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-6 uppercase leading-[0.85]">
                                READY TO <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-slow">SCALE?</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                                Stop settling for mediocre digital experiences. Partner with NEXcode and let's build something extraordinary together.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 items-center">
                                <a href="https://discord.gg/WyNqUZJj" target="_blank" rel="noopener noreferrer" className="group px-10 py-5 rounded-full bg-white text-black font-black text-xl hover:bg-slate-100 hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer active:scale-95">
                                    <DiscordIcon size={28} /> Join our Discord
                                </a>
                                <a href="mailto:nexcode01@gmail.com" className="group px-10 py-5 rounded-full bg-transparent border border-white/20 text-white font-black text-xl hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95">
                                    <Mail size={24} /> Or Send an Email
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
        </section>
    );
};

export default ContactSection;
