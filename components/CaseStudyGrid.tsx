import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioItems } from '@/lib/wordpress';

interface CaseStudyGridProps {
  title?: string;
  subtitle?: string;
  category?: string;
  excludeCategory?: string;
  limit?: number;
  variant?: 'default' | 'lab';
  showViewAll?: boolean;
  viewAllLabel?: string;
}

const CaseStudyGrid = async ({ 
  title, 
  subtitle, 
  category = "work", 
  excludeCategory,
  limit = 20, 
  variant = 'default',
  showViewAll = false,
  viewAllLabel = "View Full Inventory"
}: CaseStudyGridProps) => {
  let projects = [];
  
  try {
    projects = await getPortfolioItems(category, limit, excludeCategory);
  } catch (error) {
    console.error(`Failed to load portfolio items for ${category}:`, error);
  }

  if (projects.length === 0) return null;

  return (
    <section className={`px-6 lg:px-12 py-24 ${variant === 'lab' ? 'bg-zinc-50 dark:bg-zinc-900/50' : 'bg-white dark:bg-zinc-950'}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              {title && (
                <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 uppercase">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
            {showViewAll && (
              <Link 
                href="/portfolio" 
                className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-1"
              >
                {viewAllLabel} →
              </Link>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isLab = variant === 'lab' || project.categories?.nodes?.some(c => c.slug === 'custom-apps');
            
            return (
              <Link 
                key={project.slug} 
                href={`/portfolio/${project.slug}`}
                className={`group relative flex flex-col overflow-hidden border transition-all duration-300 
                  ${isLab 
                    ? 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 p-8' 
                    : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50'
                  }`}
              >
                {/* Lab Variant: High-Tech Header */}
                {isLab && (
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-zinc-50 dark:bg-zinc-900 px-2 py-1 border border-zinc-100 dark:border-zinc-800">
                      [ PROPRIETARY_SOFTWARE ]
                    </div>
                    <div className="h-2 w-2 rounded-full bg-brand shadow-[0_0_8px_rgba(252,175,59,0.5)]"></div>
                  </div>
                )}

                {/* Standard Variant: Image Container */}
                {!isLab && (
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
                )}

                {/* Content */}
                <div className={`${!isLab ? 'p-8' : ''} flex flex-col flex-grow`}>
                  <h3 className={`font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 group-hover:translate-x-1 transition-transform ${isLab ? 'text-2xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed line-clamp-3 prose prose-sm dark:prose-invert max-w-none font-light">
                    {project.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      {project.categories?.nodes?.filter(c => c.slug !== 'work')[0]?.name || 'Project'}
                    </div>
                    <span className="text-zinc-400 translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
