import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { type: "spring", damping: 25, stiffness: 100 }
};

const AboutSection = () => {
  return (
    <section id="agency" className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
            The NEXcode <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-slow">Collective</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We are a collective of elite developers and visionary designers operating globally.
            We don&apos;t do fluff. We build systems that perform securely, scale endlessly, and captivate globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false }}
            className="bento-card p-12 rounded-[3rem] border border-white/10"
          >
            <h3 className="text-2xl font-black text-white mb-4">Our Philosophy</h3>
            <p className="text-slate-400 text-base leading-relaxed font-medium text-justify">Function dictates form. An incredible design is useless if the underlying architecture crashes under load. We treat extreme performance as a fundamental design constraint across all our digital products, ensuring code that actively drives business value.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false }}
            className="bento-card p-12 rounded-[3rem] flex flex-col justify-center border border-white/10"
          >
            <h3 className="text-2xl font-black text-white mb-4">Direct Communication</h3>
            <p className="text-slate-400 text-base leading-relaxed font-medium text-justify">We operate completely transparently. By leveraging direct platforms like Discord, we maintain rapid iteration loops, provide instant technical support, and ensure frictionless collaboration from initial concept to deployment.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
