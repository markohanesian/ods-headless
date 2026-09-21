import React from "react";

const COMPARISONS = [
  {
    elsewhere: "3+ second load delays that cause 50%+ of paid mobile traffic to bounce.",
    ods: "Sub-second load speeds on edge infrastructure that retain every visitor.",
  },
  {
    elsewhere: "Fragile plugins and third-party updates that break forms when you need them most.",
    ods: "Zero bloated plugins, custom-coded for reliable uptime and security.",
  },
  {
    elsewhere: "Basic contact forms that dump disorganized submissions into crowded inboxes.",
    ods: "Automated intake pipelines that qualify leads and dispatch quotes instantly.",
  },
  {
    elsewhere: "Cluttered, non-compliant menus that fail accessibility standards and frustrate mobile users.",
    ods: "100% WCAG-accessible, responsive layouts built to convert across every screen size.",
  },
];

const ArchitectureComparison = () => {
  return (
    <section id="what-makes-us-different" className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900/30 border-t border-zinc-100 dark:border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
            Is your current website costing you business?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed font-light">
            Fragile website templates and bloated plugins waste ad spend and create more work. Here's how we compare:
          </p>
        </div>

        <div className="overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 shadow-sm">
          {/* Header row */}
          <div className="grid grid-cols-2 bg-zinc-100/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 divide-x divide-zinc-200 dark:divide-zinc-800">
            <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <span className="hidden sm:inline-block w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <h3 className="text-sm sm:text-sm font-mono uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300">
                Outdated Templates
              </h3>
            </div>
            <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 bg-accent-blue/5 dark:bg-accent-blue/10">
              <span className="hidden sm:inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <h3 className="text-sm sm:text-sm font-mono uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-50">
                Custom ODS Engineering <span className="text-accent-blue font-normal block sm:inline mt-1 sm:mt-0">(High Performance)</span>
              </h3>
            </div>
          </div>

          {/* Comparison items */}
          <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
            {COMPARISONS.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-2 group hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20 transition-colors"
              >
                {/* Elsewhere Column */}
                <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start gap-3 border-r border-zinc-100 dark:border-zinc-900">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 flex items-center justify-center text-sm sm:text-sm font-bold mt-0.5">
                    ✕
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-snug sm:leading-relaxed">
                    {item.elsewhere}
                  </p>
                </div>

                {/* ODS Column */}
                <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start gap-3 bg-accent-blue/[0.02] dark:bg-accent-blue/[0.03]">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm sm:text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base leading-snug sm:leading-relaxed">
                    {item.ods}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureComparison;
