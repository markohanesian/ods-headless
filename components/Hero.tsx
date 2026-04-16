import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-start justify-center min-h-[80vh] px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background architectural grid effect */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', size: '40px 40px' }} />
      
      <div className="max-w-5xl z-10">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest uppercase border border-zinc-200 dark:border-zinc-800 text-zinc-500">
          Digital Architecture & Engineering
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 text-zinc-900 dark:text-zinc-50">
          Building the <span className="text-zinc-400 dark:text-zinc-600">future</span> of digital infrastructure.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Ohanesian Digital Solutions specializes in high-performance headless architectures, custom digital tools, and engineering-focused web experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200">
            Start a Project
          </button>
          <button className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-200">
            View Portfolio
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 rotate-90 origin-right">
          ODS // 2024_CORE_VERSION
        </div>
      </div>
    </section>
  );
};

export default Hero;
