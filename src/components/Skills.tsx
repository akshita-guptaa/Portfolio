import { motion } from 'motion/react';
import { resumeData } from '../data';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Technical <span className="text-emerald-500">Stack</span>
        </h2>
        <p className="text-slate-400 dark:text-white/40 font-mono text-sm uppercase tracking-widest">
          Skills & Expertise
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(resumeData.skills).map(([category, skills], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-emerald-500 font-mono">0{idx + 1}.</span>
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                  className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/70 text-sm font-medium transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20"
      >
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resumeData.certifications.map((cert, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-500 dark:text-white/60 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {cert}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
