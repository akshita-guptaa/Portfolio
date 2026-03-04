import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Linkedin, Mail, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { resumeData } from '../data';

export const Navbar = () => {
  const { basics } = resumeData;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white group">
            AG<span className="text-emerald-500 group-hover:animate-pulse">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-500 dark:text-white/60 hover:text-emerald-500 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-slate-200 dark:bg-white/20" />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a href={basics.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-white/40 hover:text-emerald-500 dark:hover:text-white transition-colors">
                  <Github size={18} />
                </a>
                <a href={basics.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-white/40 hover:text-emerald-500 dark:hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href={`mailto:${basics.email}`} className="text-slate-400 dark:text-white/40 hover:text-emerald-500 dark:hover:text-white transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-30 bg-white dark:bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-6 mt-8">
          <a href={basics.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white">
            <Github size={24} />
          </a>
          <a href={basics.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${basics.email}`} className="p-4 rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </>
  );
};
