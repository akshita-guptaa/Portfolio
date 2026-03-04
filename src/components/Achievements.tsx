import { motion } from 'motion/react';
import { Trophy, Star, Target } from 'lucide-react';
import { resumeData } from '../data';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Key <span className="text-emerald-500">Impact</span>
          </h2>
          <p className="text-slate-400 dark:text-white/40 font-mono text-sm uppercase tracking-widest">
            Measurable Achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity">
                {index === 0 ? <Trophy size={80} /> : index === 1 ? <Target size={80} /> : <Star size={80} />}
              </div>
              
              <div className="mb-6 p-4 w-fit rounded-2xl bg-emerald-500/10 text-emerald-500">
                {index === 0 ? <Trophy size={24} /> : index === 1 ? <Target size={24} /> : <Star size={24} />}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-white/50 leading-relaxed text-sm">
                {item.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/5">
                <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">
                  Impact Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
