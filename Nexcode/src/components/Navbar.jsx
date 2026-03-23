import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <div className="flex items-center gap-3 cursor-default">
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary">
      <path d="M39 58 L44 38 L65 28 L52 48 Z" fill="currentColor" />
      <path d="M61 42 L56 62 L35 72 L48 52 Z" fill="currentColor" />
    </svg>
    <span className="text-white font-bold text-xl tracking-tight">NEXcode.</span>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Work', href: '#work' },
    { name: 'Agency', href: '#agency' },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 px-4 py-6 pointer-events-none">
      <div className="container mx-auto max-w-5xl flex justify-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`
                        w-full flex items-center justify-between px-6 py-3 rounded-full pointer-events-auto
                        border border-white/10 transition-all duration-500
                        ${isScrolled ? 'bg-black/80 backdrop-blur-2xl shadow-2xl py-2' : 'bg-black/40 backdrop-blur-md'}
                    `}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 px-6 py-2 rounded-full bg-white/5 border border-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 text-sm font-medium tracking-wide uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="group flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-slate-100 transition-all active:scale-95"
            >
              Start Project <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 top-24 z-40 md:hidden glass-morphism rounded-[2.5rem] border border-white/10 p-8 flex flex-col items-center justify-center gap-8 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-white text-black py-5 rounded-3xl text-center font-bold text-xl mt-4"
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
