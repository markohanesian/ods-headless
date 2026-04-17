import React from 'react';

const SERVICES = [
  {
    title: "Website Development",
    description: "We engineer high-performance websites and dynamic web applications. From custom code to seamless integrations, we deliver powerful, scalable, and compliant websites that drive your business forward.",
    id: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces (UI) and engaging user experiences (UX). We design every digital touchpoint to be visually appealing, effortlessly functional, and a joy for your audience to navigate.",
    id: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.5 1.5"></path>
        <path d="M7 11l-5-5"></path>
      </svg>
    )
  },
  {
    title: "Brand Identity",
    description: "Developing powerful brand consistency and distinctive visual identities. From strategic logo design to comprehensive brand guidelines, we build the consistent and memorable presence your business deserves.",
    id: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 uppercase">
            Our Services
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="group">
              <div className="text-zinc-900 dark:text-zinc-50 mb-6 flex items-center gap-4">
                <div className="p-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                  {service.icon}
                </div>
                <span className="h-px w-8 bg-zinc-200 dark:bg-zinc-800"></span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
                {service.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
