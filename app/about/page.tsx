import React from "react";

export default function AboutPage() {
  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">
            Archive_01 // About_Us
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 max-w-4xl">
            Engineering-focused digital solutions.
          </h1>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              We are a team of digital architects specializing in high-performance, 
              headless WordPress solutions. Our approach combines engineering rigor 
              with minimalist design principles.
            </p>
            <p>
              By decoupling the frontend from the backend, we deliver lightning-fast 
              experiences that don't compromise on content management flexibility. 
              Our stacks are built for speed, security, and scalability.
            </p>
          </div>
          <div className="border border-zinc-200 dark:border-zinc-800 p-8 bg-zinc-50 dark:bg-zinc-900/50">
            <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-900 dark:text-zinc-50 mb-6">
              Core_Philosophy
            </h3>
            <ul className="space-y-4 text-sm font-mono text-zinc-500 dark:text-zinc-400">
              <li className="flex items-start">
                <span className="mr-4 text-zinc-900 dark:text-zinc-50">[01]</span>
                Performance is not a feature; it is a requirement.
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-zinc-900 dark:text-zinc-50">[02]</span>
                Code should be as clean as the interfaces it powers.
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-zinc-900 dark:text-zinc-50">[03]</span>
                Scalability through modular architecture.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
