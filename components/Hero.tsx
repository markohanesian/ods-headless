import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-start justify-center min-h-[85vh] px-6 lg:px-12 pt-36 pb-24 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background architectural grid effect */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl z-10">
        <div className="inline-block px-3 py-1 mb-6 label-mono border border-zinc-200 dark:border-zinc-800 text-accent-blue">
          OHANESIAN DIGITAL SOLUTIONS // CUSTOM WEB SYSTEMS
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-zinc-900 dark:text-zinc-50 leading-[1.05]">
          Turn Your Website into Your <span className="text-brand dark:text-accent-blue">Hardest-Working Sales Rep.</span>
        </h1>
        
        <p className="lead-text text-zinc-600 dark:text-zinc-300 max-w-3xl mb-12 text-lg sm:text-xl leading-relaxed font-light">
          Stop losing qualified leads to slow page loads and confusing admin tasks. We build custom, automated web systems that eliminate paperwork and convert more visitors into high-value clients.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact#intake-audit" 
            className="btn-brand text-center"
          >
            Get Your Free Site Audit
          </Link>
          <a 
            href="#why-custom" 
            className="btn-secondary text-center"
          >
            See How It Works
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

