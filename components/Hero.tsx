import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-start justify-center min-h-[85vh] px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background architectural grid effect */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl z-10">
        <div className="inline-block px-3 py-1 mb-6 label-mono border border-zinc-200 dark:border-zinc-800">
          Digital Solutions Agency
        </div>
        
        <h1 className="mb-8 text-zinc-900 dark:text-zinc-50">
          Elevate Your <br />
          <span className="text-accent-blue">Digital Presence.</span>
        </h1>
        
        <p className="text-zinc-600 dark:text-zinc-300 max-w-3xl mb-12">
          At Ohanesian Digital Solutions, we don’t just build. We strategize, design, and develop 
          professional websites and compelling brand identities, empowering businesses to lead 
          in a competitive landscape.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="btn-primary"
          >
            Schedule Consultation
          </Link>
          <Link 
            href="/services" 
            className="btn-secondary"
          >
            Explore Services
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="label-mono rotate-90 origin-right">
          ODS // 2025 CORE VERSION
        </div>
      </div>
    </section>
  );
};

export default Hero;
