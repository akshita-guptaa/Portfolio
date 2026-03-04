import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { resumeData } from '../data';

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Academic <span className="text-emerald-500">Foundation</span>
        </h2>
        <p className="text-slate-400 dark:text-white/40 font-mono text-sm uppercase tracking-widest">
          Education History
        </p>
      </motion.div>

      <div className="space-y-8">
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l border-slate-200 dark:border-white/10"
          >
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            
            <div className="p-8 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                </div>
                <div className="flex items-center gap-2 text-slate-400 dark:text-white/40 text-sm font-mono">
                  <Calendar size={14} />
                  {edu.dates}
                </div>
              </div>
              
              {edu.degree && (
                <p className="text-emerald-500 font-medium mb-2">
                  {edu.degree}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
