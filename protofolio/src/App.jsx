import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Sparkles,
  Layers,
  Clock,
  Terminal
} from 'lucide-react';

import Navbar from './components/Navbar';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';

const TECH_STACK = [
  { name: "React.js", color: "hover:text-[#61DAFB] hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.4)]" },
  { name: "Next.js", color: "hover:text-[#ffffff] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" },
  { name: "Tailwind CSS", color: "hover:text-[#38B2AC] hover:drop-shadow-[0_0_8px_rgba(56,178,172,0.4)]" },
  { name: "Node.js", color: "hover:text-[#339933] hover:drop-shadow-[0_0_8px_rgba(51,153,51,0.4)]" },
  { name: "PHP", color: "hover:text-[#777BB4] hover:drop-shadow-[0_0_8px_rgba(119,123,180,0.4)]" },
  { name: "MySQL", color: "hover:text-[#4479A1] hover:drop-shadow-[0_0_8px_rgba(68,121,161,0.4)]" },
  { name: "TypeScript", color: "hover:text-[#3178C6] hover:drop-shadow-[0_0_8px_rgba(49,120,198,0.4)]" },
  { name: "Framer Motion", color: "hover:text-[#0055FF] hover:drop-shadow-[0_0_8px_rgba(0,85,255,0.4)]" },
  { name: "MongoDB", color: "hover:text-[#47A248] hover:drop-shadow-[0_0_8px_rgba(71,162,72,0.4)]" },
  { name: "Figma", color: "hover:text-[#F24E1E] hover:drop-shadow-[0_0_8px_rgba(242,78,30,0.4)]" },
  { name: "GraphQL", color: "hover:text-[#E10098] hover:drop-shadow-[0_0_8px_rgba(225,0,152,0.4)]" },
  { name: "PostgreSQL", color: "hover:text-[#336791] hover:drop-shadow-[0_0_8px_rgba(51,103,145,0.4)]" }
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const AbstractLogo = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M39 58 L44 38 L65 28 L52 48 Z" fill="currentColor" />
    <path d="M61 42 L56 62 L35 72 L48 52 Z" fill="currentColor" />
  </svg>
);

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#000000] text-slate-300 font-sans selection:bg-primary selection:text-black relative overflow-x-hidden">

      <Navbar />

      {/* Premium Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>



      {/* --- 1. HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
        >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.85] mb-8"
            >
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-white animate-pulse-slow">
                PLATFORMS
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-lg text-slate-400 max-w-xl font-medium leading-relaxed mb-10 px-4"
            >
              NEXcode is a premium engineering studio. We partner with forward-thinking brands to build robust, scalable platforms and high-conversion digital experiences.
            </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-8 items-center justify-center"
          >
            <button 
              onClick={() => scrollTo('work')} 
              className="group px-10 py-5 rounded-full bg-white text-black font-extrabold text-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
            >
              View Our Work
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="group px-10 py-5 rounded-full bg-transparent border border-white/20 text-white font-extrabold text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-all active:scale-95"
            >
              Start Project <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- INFINITE MARQUEE --- */}
      <div className="relative flex overflow-x-hidden border-y border-white/[0.05] bg-black py-4 md:py-6 w-full group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>

        <div className="animate-scroll-banner group-hover:[animation-play-state:paused] transition-all duration-300 flex items-center whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
            <div key={idx} className="flex items-center mx-6 md:mx-10">
              <span className={`text-base md:text-xl font-black text-slate-800 uppercase tracking-[0.15em] transition-all duration-500 cursor-default ${tech.color}`}>
                {tech.name}
              </span>
              <span className="mx-6 md:mx-10 text-xs text-primary/20 animate-pulse">✦</span>
            </div>
          ))}
        </div>
      </div>

      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4 cursor-default">
                <AbstractLogo className="w-10 h-10 text-primary" />
                <span className="text-white font-bold text-2xl tracking-tight">NEXcode.</span>
              </div>
              <p className="text-slate-500 max-w-xs">Premium web engineering for visionary brands.</p>
            </div>

            <div className="flex gap-12">
              <div>
                <h4 className="text-white font-semibold mb-4">Navigation</h4>
                <div className="flex flex-col gap-2">
                  {['Expertise', 'Work', 'Agency'].map(item => (
                    <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-accent text-left transition-all duration-300 max-w-max">{item}</button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Social</h4>
                <div className="flex flex-col gap-2">
                  {['Twitter', 'LinkedIn', 'GitHub'].map(item => (
                    <a key={item} href="#" className="text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 max-w-max">{item}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
            <p className="text-slate-600 text-sm">© {new Date().getFullYear()} NEXcode Web Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
