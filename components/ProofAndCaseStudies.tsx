import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CASE_STUDIES = [
  {
    slug: "the-pomegranate-boutique",
    title: "The Pomegranate Boutique",
    description: "E-Commerce Optimization: 3x–5x online sales growth following custom theme migration, streamlined variant discovery, and checkout flow redesign.",
    isLab: false
  },
  {
    slug: "four-seasons-ag-services",
    title: "Four Seasons Ag Services",
    description: "Service Operations: Engineered digital quote and job application engine from scratch, replacing manual phone calls and saving hours of admin overhead.",
    isLab: true,
    appType: "web-app",
    status: "live"
  },
  {
    slug: "diversified-land-management",
    title: "Diversified Land Management",
    description: "Corporate Web Architecture: Transitioned an established brand from zero online presence to consistent year-over-year organic traffic and lead capture.",
    isLab: false
  }
];

const ProofAndCaseStudies = () => {
  return (
    <section className="px-6 lg:px-12 py-16 md:py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="mb-4 uppercase">
              Proof & Real Metrics
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              A curated selection of high-performance digital platforms and engineering-led web solutions designed for measurable business growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm sm:text-sm font-bold tracking-wider uppercase bg-brand dark:bg-accent-blue text-zinc-950 dark:text-white rounded hover:opacity-90 transition-opacity"
            >
              View Portfolio
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm sm:text-sm font-bold tracking-wider uppercase border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((project) => (
            <Link 
              key={project.slug} 
              href={`/portfolio/${project.slug}`}
              className={`group relative flex flex-col overflow-hidden border transition-all duration-300 ${
                project.isLab 
                  ? 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 p-8' 
                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50'
              }`}
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <div className="absolute inset-0 flex items-center justify-center label-mono">
                  [ Image Pending ]
                </div>
                {project.isLab && (
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                    <div className="label-mono bg-zinc-900/80 backdrop-blur text-white px-2.5 py-1 border border-zinc-700 uppercase text-sm">
                      [ {project.appType || 'PROPRIETARY_SOFTWARE'} ]
                    </div>
                    <div 
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                        project.status === 'live'
                          ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' 
                          : 'bg-brand shadow-[0_0_8px_rgba(252,175,59,0.5)]'
                      }`}
                      title={`Status: ${project.status}`}
                    ></div>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className={`font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 group-hover:translate-x-1 transition-transform ${project.isLab ? '!text-2xl' : '!text-xl'}`}>
                  {project.title}
                </h3>
                
                <p className="!text-sm text-zinc-500 dark:text-zinc-300 mb-8 max-w-none">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="label-mono">
                    GO
                  </div>
                  <span className="text-zinc-400 translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofAndCaseStudies;
