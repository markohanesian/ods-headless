import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioItems } from '@/lib/wordpress';

const CaseStudyGrid = async ({ hideHeader = false }: { hideHeader?: boolean }) => {
  let projects = [];
  
  try {
    projects = await getPortfolioItems();
  } catch (error) {
    console.error("Failed to load portfolio items:", error);
    // Fallback to empty array or show error UI if needed
  }

  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 uppercase">
                Our Expertise in Action.
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                At Ohanesian Digital Solutions, we are dedicated to crafting exceptional digital experiences. 
                While many of our recent projects involve sensitive client information, we maintain a 
                robust portfolio showcasing our successes in cutting-edge web development, 
                intuitive UI/UX design, and impactful brand identity.
              </p>
            </div>
            <div className="h-px flex-grow bg-zinc-200 dark:bg-zinc-800 mx-8 hidden lg:block"></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/portfolio/${project.slug}`}
              className="group relative bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                {project.featuredImage ? (
                  <Image 
                    src={project.featuredImage.node.sourceUrl}
                    alt={project.featuredImage.node.altText || project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                    No Image Found
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h3>
                
                <div 
                  className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed line-clamp-3 prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.excerpt }}
                />

                <div className="mt-auto flex items-center justify-between">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    View
                  </div>
                  <span className="text-zinc-400 translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {projects.length === 0 && (
          <div className="py-24 text-center border border-dashed border-zinc-200 dark:border-zinc-800">
            <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              Initializing Archive... No Projects Found
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyGrid;
