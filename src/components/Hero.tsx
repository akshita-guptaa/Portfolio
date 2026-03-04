import { motion } from 'motion/react';
import { Download, Linkedin, Mail, MapPin, Github } from 'lucide-react';
import { resumeData } from '../data';

export const Hero = () => {
  const { basics } = resumeData;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="h-[1px] w-8 bg-emerald-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">
            Available for Internships
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
          {basics.photo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative shrink-0"
            >
              <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 rounded-full" />
              <img
                src={basics.photo}
                alt={basics.name}
                referrerPolicy="no-referrer"
                className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-white/10 shadow-2xl"
              />
            </motion.div>
          )}
          
          <div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 leading-none">
              {basics.name}
            </h1>
            
            <h2 className="text-xl md:text-3xl font-medium text-slate-600 dark:text-white/70 max-w-2xl">
              {basics.label}
              <span className="block text-sm md:text-lg mt-2 font-normal text-slate-400 dark:text-white/40">
                {basics.subLabel}
              </span>
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-white/60">
            <MapPin size={14} className="text-emerald-500" />
            {basics.location}
          </div>
          <a
            href={`mailto:${basics.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-white/60 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            <Mail size={14} className="text-emerald-500" />
            {basics.email}
          </a>
          <a
            href={basics.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-white/60 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            <Linkedin size={14} className="text-emerald-500" />
            LinkedIn
          </a>
          <a
            href={basics.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-white/60 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            <Github size={14} className="text-emerald-500" />
            GitHub
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-emerald-500 text-white dark:text-black font-semibold rounded-xl text-center transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            View Experience
          </motion.a>
          <motion.a
            href={basics.resume}
            download="Akshita_Gupta_Resume.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold rounded-xl text-center hover:bg-slate-200 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-white/20 font-mono">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
      </motion.div>
    </section>
  );
};
