import React from 'react';

const SERVICES = [
  {
    title: "Website Development",
    description: "We engineer high-performance websites and dynamic web applications. From custom code to seamless integrations, we deliver powerful, scalable, and compliant websites that drive your business forward.",
    id: "01"
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces (UI) and engaging user experiences (UX). We design every digital touchpoint to be visually appealing, effortlessly functional, and a joy for your audience to navigate.",
    id: "02"
  },
  {
    title: "Brand Identity",
    description: "Developing powerful brand consistency and distinctive visual identities. From strategic logo design to comprehensive brand guidelines, we build the consistent and memorable presence your business deserves.",
    id: "03"
  }
];

const Services = () => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 uppercase">
            Our_Services
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="group">
              <div className="font-mono text-[10px] text-zinc-400 mb-6 flex items-center gap-4 uppercase tracking-[0.2em]">
                <span className="text-zinc-900 dark:text-zinc-50">[{service.id}]</span>
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
