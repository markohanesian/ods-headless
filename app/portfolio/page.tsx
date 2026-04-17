import React from "react";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import ProductLab from "@/components/ProductLab";

export const metadata = {
  title: "Portfolio | Ohanesian Digital Solutions",
  description: "A curated inventory of high-performance digital platforms and engineering-led web solutions.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Header Section */}
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12">
            Portfolio
          </h1>
          
          <div className="max-w-3xl">
            <p className="text-2xl md:text-3xl text-zinc-900 dark:text-zinc-50 font-light leading-tight mb-8">
              A curated inventory of high-performance digital platforms and engineering-led 
              web solutions designed for measurable business growth.
            </p>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every project represents a strategic partnership focused on solving complex 
              technical challenges while delivering an exceptional user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Grid Section */}
      <CaseStudyGrid hideHeader={true} />

      {/* Innovation Lab Section */}
      <ProductLab />

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-32 bg-zinc-50 dark:bg-zinc-900/30 border-t border-zinc-100 dark:border-zinc-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight text-zinc-900 dark:text-zinc-50">
            Have a Complex Project?
          </h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 font-light">
            We specialize in architecting custom digital solutions for businesses with unique requirements.
          </p>
          <a 
            href="/contact"
            className="inline-block px-12 py-5 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
          >
            Start a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
