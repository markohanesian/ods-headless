import React from 'react';

const Products = () => {
  const tools = [
    {
      name: 'Baggy',
      type: 'Chrome Extension',
      version: 'v1.4.2',
      status: 'Stable',
      description: 'A performance-first utility for digital architects to inspect and optimize headless CMS data layers in real-time.',
      tech: ['React', 'TypeScript', 'Chrome API', 'GraphQL'],
      link: '#'
    },
    {
      name: 'ODS-CLI',
      type: 'Developer Tool',
      version: 'v0.8.0',
      status: 'Beta',
      description: 'Command-line interface for rapid scaffolding of headless WordPress projects with Next.js and Tailwind.',
      tech: ['Node.js', 'Go', 'Shell'],
      link: '#'
    }
  ];

  return (
    <section className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
              Proprietary Tools
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We build custom digital instruments designed to bridge the gap between complex backend systems and performant frontend experiences.
            </p>
          </div>
          <div className="text-sm font-mono text-zinc-400">
            [ TOOLS_INDEX_01 ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className="group relative p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{tool.name}</h3>
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                      {tool.version}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{tool.type}</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" title={tool.status}></div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed h-20 overflow-hidden">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {tool.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>

              <a href={tool.link} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-50 group-hover:gap-2 transition-all">
                Access Tool 
                <span className="opacity-0 group-hover:opacity-100 transition-opacity"> →</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
