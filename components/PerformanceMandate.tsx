import React from 'react';

const PerformanceMandate = () => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-zinc-900 dark:bg-zinc-950 text-white border-y border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-24">
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-sm font-mono font-medium tracking-wide text-zinc-300 uppercase">Performance Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
            Built to convert. Engineered never to break.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
            We don't assemble fragile off-the-shelf templates. We engineer lightweight, resilient platforms that protect your advertising budget and streamline daily operations.
          </p>
        </div>
        
        <div className="flex-1 w-full flex flex-col gap-8">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded bg-brand/20 border border-brand/50 flex items-center justify-center text-brand font-bold">1</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Instant Mobile Loading</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Fast speeds eliminate bounce rates and ensure every paid ad click reaches your pitch.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded bg-accent-blue/20 border border-accent-blue/50 flex items-center justify-center text-accent-blue font-bold">2</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Built for Every Screen</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Accessible, legally sound layouts providing frictionless browsing across phones, tablets, and desktops.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-500 font-bold">3</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Direct Lead Delivery</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Quote requests and form submissions routed straight to your phone or CRM with zero dropped inquiries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMandate;
