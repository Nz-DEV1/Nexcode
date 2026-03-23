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
    accentColor: 'from-primary/20 to-primary/10',
    badge: 'bg-primary/10 text-primary border-primary/20',
    borderGlow: 'hover:border-primary/30'
  },
  {
    title: "Verse AI Assistant",
    category: "AI Developer Tool · UEFN",
    description: "An AI-powered assistant built to enhance developer productivity within the Verse ecosystem for UEFN. Helps developers understand, generate, and optimize Verse code, simplifying complex logic and accelerating the creation of interactive Fortnite experiences.",
    tech: ['Next.js', 'React.js', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    image: '/supnum-connect.png',
    link: 'https://versyai.vercel.app/',
    accentColor: 'from-accent/20 to-accent/10',
    badge: 'bg-accent/10 text-accent border-accent/20',
    borderGlow: 'hover:border-accent/30'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { type: "spring", damping: 25, stiffness: 100 }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              variants={fadeInUp}
              className={`block group relative rounded-[3rem] bg-[#050505] border border-white/10 overflow-hidden transition-all duration-700 ${project.borderGlow} hover:shadow-[0_0_80px_rgba(255,255,255,0.03)] hover:-translate-y-2`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative w-full p-4 md:p-6 pb-0">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
                <span className={`absolute top-8 left-8 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border backdrop-blur-md ${project.badge} shadow-2xl`}>
                  {project.category}
                </span>
              </div>

              <div className="relative z-10 p-6 md:p-10 pt-8">
                <h3 className="text-3xl font-black text-white mb-3 tracking-tighter transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8 line-clamp-3 font-medium transition-colors group-hover:text-slate-300">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/8 tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-base font-bold text-slate-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  <span className="uppercase tracking-widest">Explore Project</span>
                  <ArrowUpRight size={20} className="text-slate-400 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
