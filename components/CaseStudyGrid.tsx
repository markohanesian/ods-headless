import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioItems, PortfolioItem } from '@/lib/wordpress';

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
  let projects: PortfolioItem[] = [];
  
  try {
    projects = await getPortfolioItems(category, limit, excludeCategory);
  } catch (error) {
    console.error(`Failed to load portfolio items for ${category}:`, error);
  }

  if (projects.length === 0) return null;

  return (
    <section className={`px-6 lg:px-12 py-16 md:py-24 ${variant === 'lab' ? 'bg-zinc-50 dark:bg-zinc-900/50' : 'bg-white dark:bg-zinc-950'}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              {title && (
                <h2 className="mb-4 uppercase">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                  {subtitle}
                </p>
              )}
            </div>
            {showViewAll && (
              <Link 
                href="/portfolio" 
                className="label-mono transition-colors mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-1 hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                {viewAllLabel} →
              </Link>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: PortfolioItem) => {
            const isLab = variant === 'lab' || project.categories?.nodes?.some((c: { slug: string }) => c.slug === 'custom-apps');
            
            // Extract Status and App Type from tags
            const tags = project.tags?.nodes || [];
            
            const statusTag = tags.find(t => 
              ['alpha', 'beta', 'development', 'in progress', 'live'].includes(t.slug)
            );
            
            const appTypeTag = tags.find(t => 
              ['shopify-plugin', 'mobile-app', 'chrome-extension', 'web-app', 'developer-tool'].includes(t.slug)
            );

            const isLive = statusTag?.slug === 'live';
            const statusLabel = statusTag ? statusTag.name : 'Development';
            const appTypeLabel = appTypeTag ? appTypeTag.name : 'PROPRIETARY_SOFTWARE';

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
                    <div className="label-mono bg-zinc-50 dark:bg-zinc-900 px-2 py-1 border border-zinc-100 dark:border-zinc-800 uppercase">
                      [ {appTypeLabel} ]
                    </div>
                    <div 
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                        isLive 
                          ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' 
                          : 'bg-brand shadow-[0_0_8px_rgba(252,175,59,0.5)]'
                      }`}
                      title={`Status: ${statusLabel}`}
                    ></div>
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
                        className="object-cover md:grayscale md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center label-mono">
                        No Image Found
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className={`${!isLab ? 'p-8' : ''} flex flex-col flex-grow`}>
                  <h3 className={`font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 group-hover:translate-x-1 transition-transform ${isLab ? '!text-2xl' : '!text-xl'}`}>
                    {project.title}
                  </h3>
                  
                  <p className="!text-sm text-zinc-500 dark:text-zinc-300 mb-8 line-clamp-3 max-w-none">
                    {project.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="label-mono">
                      GO
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
