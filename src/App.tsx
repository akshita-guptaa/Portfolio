import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    } catch (e) {
      console.error('Failed to load theme from localStorage', e);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    
    // Apply to both html and body for maximum compatibility
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
    
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.error('Failed to save theme to localStorage', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      console.log(`Theme switched to: ${next}`);
      return next;
    });
  };

  return (
    <div className={`${theme} relative min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white selection:bg-emerald-500/30 selection:text-emerald-500 transition-colors duration-300`}>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <div key="splash">
            <SplashScreen onComplete={() => setShowSplash(false)} />
          </div>
        ) : (
          <div key="content" className="relative">
            <AnimatedBackground theme={theme} />
            <Navbar />
            <main>
              <Hero />
              <Projects />
              <Experience />
              <Achievements />
              <Skills />
              <Education />
            </main>
            
            <footer className="py-12 px-6 border-t border-slate-200 dark:border-white/5 text-center">
              <div className="max-w-7xl mx-auto">
                <p className="text-slate-400 dark:text-white/20 text-xs font-mono tracking-widest uppercase mb-4">
                  Built with Precision & Motion
                </p>
                <p className="text-slate-500 dark:text-white/40 text-sm">
                  &copy; {new Date().getFullYear()} Akshita Gupta. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
