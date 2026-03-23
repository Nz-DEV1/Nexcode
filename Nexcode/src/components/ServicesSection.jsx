import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code2, Layout } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { type: "spring", damping: 25, stiffness: 100 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { type: "spring", damping: 25, stiffness: 100 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { type: "spring", damping: 25, stiffness: 100 }
};

const ServicesSection = () => {
  return (
    <section id="expertise" className="py-24 px-4 md:px-6">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, margin: "-100px" }}
        transition={{ staggerChildren: 0.1 }}
        className="container mx-auto max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">
            Our DNA & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-slow">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed font-medium">We don&apos;t just write code. We engineer solutions designed to scale, convert, and dominate.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-[250px]" style={{ perspective: 1200 }}>

          {/* Box 1: About (Large) */}
          <motion.div
            variants={fadeInLeft}
            className="bento-card rounded-[3rem] p-10 md:col-span-2 md:row-span-2 flex flex-col justify-between group overflow-hidden relative border border-white/10"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
            ></motion.div>
            <div>
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-8 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <Zap size={28} className="text-primary" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Built for Growth.</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                We bridge the gap between aesthetics and performance. By understanding your core business objectives, we deliver scalable infrastructure that sets industry standards. Quality is not an afterthought; it is our baseline.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              {['React', 'Next.js', 'Node', 'Tailwind'].map(t => (
                <span key={t} className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 bg-white/5 text-slate-300 group-hover:border-primary/30 group-hover:text-primary transition-all cursor-default">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Box 2: Service 1 */}
          <motion.div
            variants={fadeInRight}
            className="bento-card rounded-[3rem] p-10 md:col-span-1 md:row-span-1 flex flex-col justify-center group border border-white/10 hover:border-accent/40 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500 relative z-10">
              <Code2 size={24} className="text-accent" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 relative z-10">Engineering</h3>
            <p className="text-base text-slate-400 leading-relaxed font-medium">Custom web apps built with modern, scalable architectures.</p>
          </motion.div>

          {/* Box 3: Service 2 */}
          <motion.div
            variants={fadeInRight}
            className="bento-card rounded-[3rem] p-10 md:col-span-1 md:row-span-1 flex flex-col justify-center group border border-white/10 hover:border-primary/40 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 relative z-10">
              <Layout size={24} className="text-primary" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 relative z-10">Interface Design</h3>
            <p className="text-base text-slate-400 leading-relaxed font-medium">Frictionless, high-converting interfaces crafted for humans.</p>
          </motion.div>

          {/* Box 4: Why Us / Speed (Wide) */}
          <motion.div
            variants={fadeInUp}
            className="bento-card rounded-[3rem] p-8 md:p-10 md:col-span-2 md:row-span-1 flex flex-col md:flex-row items-start md:items-center justify-between group relative overflow-hidden border border-white/10 gap-6 md:gap-0"
          >
            <div className="absolute -bottom-4 md:-bottom-10 -right-4 md:-right-10 text-8xl md:text-[10rem] font-black text-white/[0.02] group-hover:text-white/[0.06] group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 select-none">99</div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-2">Performance Focused</h3>
              <p className="text-slate-400 max-w-sm text-base font-medium leading-relaxed">Sub-second load times and flawless lighthouse scores. We engineer it fast.</p>
            </div>
            <div className="w-20 h-20 rounded-full border-4 border-primary/30 flex flex-col items-center justify-center relative z-10 bg-black/40 backdrop-blur-sm group-hover:border-primary transition-all">
              <span className="text-primary font-black text-xl">100</span>
              <span className="text-[9px] text-primary/60 font-bold tracking-widest uppercase">Score</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
