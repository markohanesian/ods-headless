import React from "react";

const SERVICES = [
  {
    id: "01",
    title: "Headless CMS Development",
    description: "Architecting decoupled systems using WordPress as a powerful backend API and modern frontend frameworks like Next.js.",
  },
  {
    id: "02",
    title: "Performance Optimization",
    description: "Audit and optimization of web applications to achieve perfect Core Web Vitals and lightning-fast load times.",
  },
  {
    id: "03",
    title: "Digital Architecture",
    description: "Designing scalable cloud infrastructure and CI/CD pipelines for modern web deployments.",
  },
  {
    id: "04",
    title: "Custom Integrations",
    description: "Connecting your digital ecosystem through secure and efficient custom API development.",
  },
];

export default function ServicesPage() {
  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">
            Archive_02 // Services
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 max-w-4xl">
            Technical expertise, refined.
          </h1>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 border-t border-l border-zinc-200 dark:border-zinc-800">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="p-8 border-r border-b border-zinc-200 dark:border-zinc-800 group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <div className="font-mono text-[10px] text-zinc-400 mb-6 uppercase tracking-widest">
                Service_{service.id}
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                {service.title}
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
