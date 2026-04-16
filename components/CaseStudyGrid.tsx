import React from 'react';

interface CaseStudy {
  id: string;
  title: string;
  excerpt: string;
  serviceCategory: string;
  projectResult: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

const CaseStudyGrid = ({ projects }: { projects: CaseStudy[] }) => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 uppercase">
              Trust_Inventory
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm uppercase tracking-widest">
              Selected Digital Architectures and Engineering Audits
            </p>
          </div>
          <div className="h-px flex-grow bg-zinc-200 dark:bg-zinc-800 mx-8 hidden lg:block"></div>
          <div className="text-xs font-mono text-zinc-400">[ ARCHIVE_INDEX_03 ]</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white dark:bg-zinc-950 p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="text-[10px] font-mono mb-6 text-zinc-400 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 border border-current"></span>
                  [{project.serviceCategory}]
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h3>
                
                <div 
                  className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.excerpt }}
                />
              </div>

              <div className="mt-auto">
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">
                    Metric // Outcome
                  </div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    {project.projectResult}
                  </p>
                </div>
                
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  View Case Study <span className="translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
