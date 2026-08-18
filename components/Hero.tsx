import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-start justify-center min-h-[85vh] px-6 lg:px-12 pt-16 md:pt-24 pb-24 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background architectural grid effect */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl z-10">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter mb-8 text-zinc-900 dark:text-zinc-50 leading-[1.05]">
          Tech that works as <span className="text-brand dark:text-accent-blue">hard as you do.</span>
        </h1>
        
        <p className="lead-text text-zinc-600 dark:text-zinc-300 max-w-3xl mb-12 text-lg sm:text-xl leading-relaxed font-light">
          ODS builds custom websites, apps, and strategic systems that save time and increase revenue.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact#intake-audit" 
            className="btn-brand text-center"
          >
            Free Site Audit
          </Link>
          <a 
            href="#what-makes-us-different" 
            className="btn-secondary text-center"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="label-mono rotate-90 origin-right text-zinc-400 dark:text-zinc-600">
          ODS // HIGH-PERFORMANCE SYSTEMS
        </div>
      </div>
    </section>
  );
};

export default Hero;

