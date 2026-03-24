import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "SupNum Connect",
    category: "University Platform",
    description: "A scalable university platform designed to streamline communication and engagement between students, alumni, and the academic community. Centralizes interactions, events, and user activity into a single modern interface.",
    tech: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'TailwindCSS'],
    image: '/verse-ai.png',
    link: 'https://almalumni-supnum.vercel.app/',
    accentColor: 'from-primary/20 via-primary/5 to-transparent',
    badge: 'bg-primary/10 text-primary border-primary/20',
    borderGlow: 'hover:border-primary/40'
  },
  {
    title: "Verse AI Assistant",
    category: "AI Developer Tool · UEFN",
    description: "An AI-powered assistant built to enhance developer productivity within the Verse ecosystem for UEFN. Helps developers understand, generate, and optimize Verse code, simplifying complex logic and accelerating the creation of interactive Fortnite experiences.",
    tech: ['Next.js', 'React.js', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    image: '/supnum-connect.png',
    link: 'https://versyai.vercel.app/',
    accentColor: 'from-accent/20 via-accent/5 to-transparent',
    badge: 'bg-accent/10 text-accent border-accent/20',
    borderGlow: 'hover:border-accent/40'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};



const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 px-4 md:px-6 relative">
      <motion.div 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
        className="container mx-auto max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
            Featured <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-slow">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed font-medium">This is not even the 1% of what we have done. Explore a selection of our premium engineering work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`group relative rounded-3xl md:rounded-[2.5rem] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 ${project.borderGlow} hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]`}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              {/* Noise Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />

              <div className="relative w-full p-4 md:p-7 pb-0">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/10 shadow-3xl bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <span className={`absolute top-6 left-6 text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full border backdrop-blur-xl ${project.badge} shadow-2xl z-20`}>
                      {project.category}
                    </span>
                </div>
              </div>

              <div className="relative z-10 p-6 md:p-10 pt-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-black text-white tracking-tighter leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white/40 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                    <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                <p className="text-slate-400 text-base leading-relaxed mb-8 line-clamp-2 font-medium transition-colors group-hover:text-slate-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-white/5 text-slate-400 border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 py-1 text-sm font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-all duration-300">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/50 group-hover:after:w-full transition-all duration-500">
                    View Project
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
