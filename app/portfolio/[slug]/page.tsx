import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Filter out the 'work' category to show more specific subcategories
  const specificCategories = post.categories.nodes.filter(cat => cat.slug !== 'work');
  const mainCategory = specificCategories[0]?.name || "Case Study";
  
  // Potential accent color - for now we'll use our brand color
  const accentColor = "bg-brand";  
  return (
    <article className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Header Section */}
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
             <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
               Archive // {mainCategory}
             </span>
             <div className={`h-px w-12 ${accentColor} opacity-50`}></div>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-16 leading-[0.9]">
            {post.title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-100 dark:border-zinc-900 pt-12">
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">Platform & Ecosystem</h3>
              <p className="font-bold text-lg">
                {specificCategories.map(c => c.name).join(" / ") || "Digital Architecture"}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">Deliverables</h3>
              <p className="font-bold text-lg text-zinc-600 dark:text-zinc-400">
                {post.tags?.nodes?.length ? post.tags.nodes.map(t => t.name).join(" / ") : "Strategy / Engineering"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Image */}
      {post.featuredImage && (
        <section className="px-6 lg:px-12 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="aspect-[21/9] relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <Image 
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8">
              <div 
                className={`prose prose-zinc dark:prose-invert max-w-none 
                  /* Typography Overrides */
                  [&_h2]:!text-4xl md:[&_h2]:!text-7xl [&_h2]:!font-bold [&_h2]:!tracking-tighter [&_h2]:!mb-12 [&_h2]:!mt-32 first:[&_h2]:!mt-0 [&_h2]:!uppercase [&_h2]:!leading-[0.9]
                  [&_h2_*]:!text-inherit /* Override font-size: inherit on children */
                  
                  [&_h3]:!text-2xl md:[&_h3]:!text-3xl [&_h3]:!font-bold [&_h3]:!tracking-tight [&_h3]:!mb-8 [&_h3]:!mt-24
                  [&_h3_*]:!text-inherit
                  
                  prose-p:text-lg md:prose-p:text-xl prose-p:leading-relaxed prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:font-light prose-p:mb-12
                  
                  /* Native WP Column Design (Minimal) */
                  [&_.wp-block-columns]:flex [&_.wp-block-columns]:flex-col md:[&_.wp-block-columns]:flex-row [&_.wp-block-columns]:gap-6 md:[&_.wp-block-columns]:gap-8 [&_.wp-block-columns]:my-24
                  [&_.wp-block-column]:flex-1 [&_.wp-block-column]:min-w-0
                  
                  /* List Normalization */
                  [&_ul]:list-disc [&_ul]:pl-6 md:[&_ul]:pl-8 [&_ul]:mb-16 [&_ul]:mt-8 [&_ul]:space-y-4
                  [&_ol]:list-decimal [&_ol]:pl-6 md:[&_ol]:pl-8 [&_ol]:mb-16 [&_ol]:mt-8 [&_ol]:space-y-4
                  [&_li]:text-lg md:[&_li]:text-xl [&_li]:leading-relaxed [&_li]:text-zinc-600 dark:[&_li]:text-zinc-400 [&_li]:font-light
                  
                  /* Image handling */
                  [&_figure]:my-24
                  [&_img]:border [&_img]:border-zinc-100 dark:[&_img]:border-zinc-900
                  
                  /* SVG & Icon Sizing Fix */
                  [&_svg]:w-[50px] [&_svg]:h-auto
                  [&_img[src*=".svg"]]:w-[50px] [&_img[src*=".svg"]]:h-auto
                  
                  /* KPI / Stat Column Styling - Enhanced for Large Percentages */
                  [&_.wp-block-column:has(svg)]:!flex [&_.wp-block-column:has(svg)]:!flex-row [&_.wp-block-column:has(svg)]:!items-center [&_.wp-block-column:has(svg)]:!justify-center [&_.wp-block-column:has(svg)]:!gap-4
                  [&_.wp-block-column:has(svg)]:!p-8 [&_.wp-block-column:has(svg)]:!bg-zinc-50 dark:[&_.wp-block-column:has(svg)]:!bg-zinc-900/50
                  [&_.wp-block-column:has(svg)]:!border [&_.wp-block-column:has(svg)]:!border-zinc-100 dark:[&_.wp-block-column:has(svg)]:!border-zinc-800
                  [&_.wp-block-column:has(svg)]:!rounded-sm
                  [&_.wp-block-column:has(svg)_*]:!m-0
                  
                  /* Style both H2 and H3 as the large percentage within a card */
                  [&_.wp-block-column:has(svg)_h2]:!text-4xl md:[&_.wp-block-column:has(svg)_h2]:!text-6xl [&_.wp-block-column:has(svg)_h2]:!font-bold [&_.wp-block-column:has(svg)_h2]:!tracking-tighter [&_.wp-block-column:has(svg)_h2]:!text-accent-blue
                  [&_.wp-block-column:has(svg)_h2_*]:!text-inherit [&_.wp-block-column:has(svg)_h2_*]:!font-size-inherit
                  
                  [&_.wp-block-column:has(svg)_h3]:!text-4xl md:[&_.wp-block-column:has(svg)_h3]:!text-6xl [&_.wp-block-column:has(svg)_h3]:!font-bold [&_.wp-block-column:has(svg)_h3]:!tracking-tighter [&_.wp-block-column:has(svg)_h3]:!text-accent-blue
                  [&_.wp-block-column:has(svg)_h3_*]:!text-inherit [&_.wp-block-column:has(svg)_h3_*]:!font-size-inherit
                  
                  [&_.wp-block-column:has(svg)_p]:!text-[10px] md:[&_.wp-block-column:has(svg)_p]:!text-xs [&_.wp-block-column:has(svg)_p]:!uppercase [&_.wp-block-column:has(svg)_p]:!tracking-[0.2em] [&_.wp-block-column:has(svg)_p]:!text-zinc-500 dark:[&_.wp-block-column:has(svg)_p]:!text-zinc-400 [&_.wp-block-column:has(svg)_p]:!font-mono
                  [&_.wp-block-column:has(svg)_p_*]:!text-inherit [&_.wp-block-column:has(svg)_p_*]:!font-size-inherit`} 
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </div>
            
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-16">
                <div className={`border-l-2 border-zinc-900 dark:border-zinc-50 pl-8 py-4`}>
                  <p className="text-lg font-light text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
                    &quot;This project represents a strategic integration of performance engineering and user-centric design principles, 
                    prioritizing business ROI over aesthetic trends.&quot;
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center gap-4">
                    Core Project Areas <div className="h-px w-full bg-zinc-100 dark:bg-zinc-900"></div>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.nodes.map(cat => (
                      <span key={cat.slug} className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono uppercase tracking-wider bg-white dark:bg-zinc-950">
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="inline-block w-full text-center py-6 bg-brand text-zinc-900 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#e69b2d] transition-all shadow-xl"
                >
                  Start Similar Project
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="px-6 lg:px-12 py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/portfolio" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            ← Return to Portfolio
          </Link>
        </div>
      </section>
    </article>
  );
}
