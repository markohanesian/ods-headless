import React from 'react';

interface Tool {
  name: string;
  version: string;
  status: 'STABLE' | 'BETA' | 'ALPHA';
  repoStatus: string;
  description: string;
  tech: string[];
  link: string;
  buttonText: string;
}

const ProductLab = () => {
  const tools: Tool[] = [
    {
      name: 'Baggy',
      version: 'v1.4.2',
      status: 'STABLE',
      repoStatus: 'Up-to-date',
      description: 'Performance-first utility for digital architects to inspect and optimize headless CMS data layers in real-time.',
      tech: ['React', 'TypeScript', 'Chrome API', 'GraphQL'],
      link: 'https://chromewebstore.google.com/detail/baggy/fghfofgepffmbmklmfididjfnnndofig',
      buttonText: 'View on Chrome Store'
    },
    {
      name: 'ai-copy-mso',
      version: 'v1.0.0',
      status: 'BETA',
      repoStatus: 'Active',
      description: 'AI-driven content generation and copywriting tool optimized for conversion-focused digital platforms.',
      tech: ['Next.js', 'OpenAI', 'Tailwind CSS', 'TypeScript'],
      link: 'https://github.com/markohanesian/ai-copy-mso',
      buttonText: 'View on GitHub'
    }
  ];

  return (
    <section className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 uppercase">
              Innovation Lab
            </h2>
            <div className="flex-grow h-px bg-zinc-200 dark:bg-zinc-800"></div>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm uppercase tracking-widest max-w-2xl leading-relaxed">
            Developing proprietary instruments to accelerate digital modernization and architectural efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {tools.map((tool) => (
            <div key={tool.name} className="relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm dark:shadow-none">
              {/* Dashboard Header Bar */}
              <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                    SYSTEM PROCESS // {tool.name}.exe
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
                    {tool.status}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tighter">
                      {tool.name}
                    </h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center text-[10px] font-mono border-b border-zinc-100 dark:border-zinc-800 pb-2">
                        <span className="text-zinc-400 uppercase">Version</span>
                        <span className="text-zinc-900 dark:text-zinc-50 font-bold">{tool.version}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono border-b border-zinc-100 dark:border-zinc-800 pb-2">
                        <span className="text-zinc-400 uppercase">Repo Status</span>
                        <span className="text-zinc-900 dark:text-zinc-50 font-bold">{tool.repoStatus}</span>
                      </div>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-8">
                      {tool.description}
                    </p>
                  </div>

                  <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 border border-zinc-100 dark:border-zinc-800">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-6 border-b border-zinc-200 dark:border-zinc-700 pb-2">
                      Stack Overview
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tool.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-[10px] font-mono bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-12 space-y-2 opacity-50 select-none pointer-events-none">
                      <div className="h-1 w-full bg-zinc-200 dark:bg-zinc-800"></div>
                      <div className="h-1 w-2/3 bg-zinc-200 dark:bg-zinc-800"></div>
                      <div className="h-1 w-1/2 bg-zinc-200 dark:bg-zinc-800"></div>
                    </div>
                  </div>
                </div>

                <a 
                  href={tool.link} 
                  className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-[10px] font-mono uppercase tracking-[0.2em] font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  {tool.buttonText} <span className="ml-3">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLab;
