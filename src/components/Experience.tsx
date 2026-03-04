import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { resumeData } from '../data';

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Professional <span className="text-emerald-500">Journey</span>
        </h2>
        <p className="text-slate-400 dark:text-white/40 font-mono text-sm uppercase tracking-widest">
          Experience & Leadership
        </p>
      </motion.div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden ${
              expandedIndex === index 
                ? 'bg-slate-100 dark:bg-white/5 border-slate-300 dark:border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(255,255,255,0.05)]' 
                : 'bg-transparent border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl transition-colors ${
                  expandedIndex === index ? 'bg-emerald-500 text-white dark:text-black' : 'bg-slate-100 dark:bg-white/5 text-emerald-500'
                }`}>
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-slate-500 dark:text-white/60 font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 dark:text-white/40">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {exp.dates}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {exp.location}
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  className="hidden md:block"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>
            </button>

            <AnimatePresence>
              {expandedIndex === index && exp.bullets.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="h-[1px] w-full bg-slate-200 dark:bg-white/10 mb-6" />
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, bIndex) => (
                      <motion.li
                        key={bIndex}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: bIndex * 0.1 }}
                        className="flex items-start gap-3 text-slate-600 dark:text-white/70 leading-relaxed"
                      >
                        <div className="mt-1.5 shrink-0">
                          <Sparkles size={14} className="text-emerald-500" />
                        </div>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
