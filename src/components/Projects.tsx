import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Code2, Layers } from 'lucide-react';
import { useState } from 'react';
import { resumeData } from '../data';

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Technical <span className="text-emerald-500">Projects</span>
        </h2>
        <p className="text-slate-400 dark:text-white/40 font-mono text-sm uppercase tracking-widest">
          Selected Works & Endeavors
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects?.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative h-[400px] rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden cursor-pointer hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-all duration-300"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full p-8 flex flex-col">
              <div className="mb-6 flex justify-between items-start relative z-20">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <Code2 size={24} />
                </div>
                <motion.a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-white/10 dark:bg-white/10 light:bg-slate-200 border border-white/20 dark:border-white/20 light:border-slate-300 text-slate-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-xl backdrop-blur-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((tech, tIdx) => (
                  <span 
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[10px] font-mono text-slate-500 dark:text-white/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Overlay Details */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 z-10 bg-white/95 dark:bg-black/90 backdrop-blur-md p-8 flex flex-col justify-center border-t border-emerald-500/50"
                  >
                    <div className="flex items-center gap-2 text-emerald-500 mb-4">
                      <Layers size={18} />
                      <span className="text-xs font-mono uppercase tracking-widest">Project Details</span>
                    </div>
                    <p className="text-slate-700 dark:text-white/80 text-sm leading-relaxed mb-6">
                      {project.details}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
