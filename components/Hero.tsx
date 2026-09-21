import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-start justify-center min-h-[85vh] px-6 lg:px-12 pt-16 md:pt-24 pb-24 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background architectural grid effect */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 mb-8 sm:mb-12">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
          <span className="text-xs sm:text-sm font-mono font-medium tracking-wide text-zinc-600 dark:text-zinc-300">
            CUSTOM WEBSITES // CAMPAIGN LANDING PAGES // WORKFLOW APPS
          </span>
        </div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter mb-8 text-zinc-900 dark:text-zinc-50 leading-[1.05]">
          Tech that works as <span className="text-brand dark:text-accent-blue">hard as you do.</span>
        </h1>
        
        <p className="lead-text text-zinc-600 dark:text-zinc-300 max-w-3xl mb-12 text-lg sm:text-xl leading-relaxed font-light">
          We build websites and dedicated landing pages that convert to sales—with built-in analytics, functional design, and zero plugin bloat.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="btn-brand text-center"
          >
            Free Site Audit
          </Link>
          <a 
            href="#case-studies" 
            className="btn-secondary text-center"
          >
            See Our Results
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
