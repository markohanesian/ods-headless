import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-start justify-center min-h-[85vh] px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background architectural grid effect */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl z-10">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-[0.3em] uppercase border border-zinc-200 dark:border-zinc-800 text-zinc-500">
          Digital Solutions Agency
        </div>
        
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 text-zinc-900 dark:text-zinc-50">
          Elevate Your <br />
          <span className="text-zinc-400 dark:text-zinc-600">Digital Presence.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mb-12 leading-relaxed font-light">
          At Ohanesian Digital Solutions, we don’t just build. We strategize, design, and develop 
          professional websites and compelling brand identities, empowering businesses to lead 
          in a competitive landscape.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 text-center"
          >
            Schedule Consultation
          </Link>
          <Link 
            href="/services" 
            className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 text-center"
          >
            Explore Services
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 rotate-90 origin-right">
          ODS // 2025 CORE VERSION
        </div>
      </div>
    </section>
  );
};

export default Hero;
