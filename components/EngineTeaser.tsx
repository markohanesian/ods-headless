import React from 'react';
import Link from 'next/link';

const EngineTeaser = () => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-zinc-900 dark:bg-zinc-950 text-white border-y border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-sm font-mono font-medium tracking-wide text-zinc-300 uppercase">Proprietary Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Powered by the <br className="hidden md:block" />
            <span className="text-brand">ODS Core Engine.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-8 font-light">
            Behind every high-performance site we build is our custom engineering baseline. We've eliminated the bloat of traditional site builders to deliver instant load times, bulletproof security, and automated workflows out of the box.
          </p>
          <Link href="/engine" className="btn-brand inline-flex">
            Discover the Engine
          </Link>
        </div>
        <div className="flex-1 w-full max-w-lg md:max-w-none">
          <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-zinc-800 border border-zinc-700 p-8 flex flex-col justify-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
            
            {/* Code-like UI */}
            <div className="relative z-10 space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3 text-zinc-500">
                <span className="text-brand">import</span> {'{'} Engine {'}'} <span className="text-brand">from</span> '@ods/core'
              </div>
              <div className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                <div className="text-emerald-400 mb-2">// Performance Mandate</div>
                <div>lighthouseScore: <span className="text-amber-300">100</span>,</div>
                <div>coreWebVitals: <span className="text-emerald-300">'Passed'</span>,</div>
                <div className="text-emerald-400 mt-4 mb-2">// Accessibility Mandate</div>
                <div>wcagCompliance: <span className="text-emerald-300">'AA'</span>,</div>
                <div className="text-emerald-400 mt-4 mb-2">// Automation</div>
                <div>headlessCMS: <span className="text-amber-300">true</span>,</div>
                <div>smartWebhooks: <span className="text-amber-300">true</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineTeaser;
