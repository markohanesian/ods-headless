import React from "react";

const CAPABILITIES = [
  {
    id: "01",
    title: "Lightning-Fast Websites & Portals",
    description: "Deliver frictionless digital experiences on every device. Your clients get instant page loads and clear navigation, while you gain a reliable platform built on modern software architecture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    id: "02",
    title: "Automated Lead Intake & Workflows",
    description: "Reclaim hours spent on repetitive emails and phone tag. Our custom intake workflows automatically screen incoming leads, gather necessary files, and route details directly into your operational tools.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  },
  {
    id: "03",
    title: "Integrated E-Commerce & Operations",
    description: "Simplify invoicing, manage subscriptions, and schedule bookings. Unify your essential sales tools into a seamless, single-platform workflow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  }
];

const CoreCapabilities = () => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="label-mono text-accent-blue mb-4">
            SECTION 03 // CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
            Engineered to Eliminate Your Daily Operational Friction
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {CAPABILITIES.map((cap) => (
            <div 
              key={cap.id} 
              className="flex flex-col p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/20 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-accent-blue group-hover:scale-105 transition-transform">
                  {cap.icon}
                </div>
                <span className="font-mono text-xl font-bold text-zinc-400 dark:text-zinc-600">
                  {cap.id}
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed font-light">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
