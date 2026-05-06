import React from "react";
import Link from "next/link";

const CORE_SERVICES = [
  {
    id: "01",
    title: "Website Development",
    description: "We engineer high-performance websites and dynamic web applications. From custom code to seamless integrations, we deliver powerful, scalable, and compliant websites that drive your business forward.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces (UI) and engaging user experiences (UX). We design every digital touchpoint to be visually appealing, effortlessly functional, and a joy for your audience to navigate.",
  },
  {
    id: "03",
    title: "Brand Identity",
    description: "Developing powerful brand consistency and distinctive visual identities. From strategic logo design to comprehensive brand guidelines, we build the consistent and memorable presence your business deserves.",
  },
];

const TECHNICAL_SPECIALTIES = [
  {
    title: "Custom Application Development",
    description: "Bespoke software solutions architected for specific operational needs and complex business logic.",
  },
  {
    title: "Shopify & E-commerce Plugins",
    description: "Tailored e-commerce extensions and deep integrations to optimize the merchant and customer experience.",
  },
  {
    title: "AI Operational Workflows",
    description: "Implementing intelligent automation and AI-driven systems to streamline your internal processes and decision-making.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Header Section */}
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 uppercase">
            Services
          </h1>
          <div className="h-px w-24 bg-accent-blue mb-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <p className="text-2xl md:text-3xl text-zinc-900 dark:text-zinc-50 font-light leading-tight">
              Whether you’re starting a new business, expanding your brand, or looking to 
              establish a digital presence, Ohanesian Digital Solutions can get you there.
            </p>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Think of us as an extension of your team, a group of specialists that give you 
              the results you need to increase your business’s success while you can focus 
              on your day-to-day.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {CORE_SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col">
                <div className="text-[10px] font-mono text-zinc-400 mb-8 flex items-center gap-4">
                  <span className="text-zinc-900 dark:text-zinc-50">[{service.id}]</span>
                  <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800"></div>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specialized Solutions */}
      <section className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Advanced Technical Solutions
            </h3>
            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TECHNICAL_SPECIALTIES.map((spec, index) => (
              <div key={index} className="p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                  {spec.title}
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
            Ready to Build Your <br />Digital Advantage?
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-12">
            You’ve reviewed our services. The next step is a strategic, no-obligation 
            consultation where we focus on your specific business goals and define 
            a clear roadmap for success.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-12 py-5 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
