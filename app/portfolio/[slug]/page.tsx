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
             <div className={`h-px w-12 ${accentColor} opacity-20`}></div>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-16 leading-[0.9]">
            {post.title}
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-zinc-100 dark:border-zinc-900 pt-12">
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">Role</h3>
              <p className="font-bold text-lg">Digital Architect</p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">Deliverable</h3>
              <p className="font-bold text-lg">{mainCategory}</p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">Stack</h3>
              <p className="font-bold text-lg">Next.js / WordPress</p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">Date</h3>
              <p className="font-bold text-lg">{post.date ? new Date(post.date).getFullYear() : '2026'}</p>
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
                className="prose prose-zinc dark:prose-invert max-w-none 
                  prose-h2:text-3xl md:prose-h2:text-5xl prose-h2:font-bold prose-h2:tracking-tighter prose-h2:mb-12 prose-h2:mt-32 first:prose-h2:mt-0 prose-h2:uppercase prose-h2:leading-[1.1]
                  prose-h3:text-xl md:prose-h3:text-2xl prose-h3:font-bold prose-h3:tracking-tight prose-h3:mb-8 prose-h3:mt-24
                  prose-p:text-lg md:prose-p:text-xl prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:mb-12
                  prose-li:text-lg prose-li:text-zinc-600 dark:prose-li:text-zinc-400 prose-li:mb-4
                  prose-img:border prose-img:border-zinc-200 dark:prose-img:border-zinc-800 prose-img:my-20
                  [&_div]:bg-transparent [&_div]:p-0 [&_div]:m-0
                  
                  /* Force H2 override for WP classes */
                  [&_h2]:text-3xl md:[&_h2]:text-5xl [&_h2]:font-bold [&_h2]:tracking-tighter [&_h2]:uppercase [&_h2]:leading-[1.1] [&_h2]:mt-32 first:[&_h2]:mt-0
                  [&_h3]:mt-24
                  
                  /* WP Column Support for Metrics */
                  [&_.wp-block-columns]:flex [&_.wp-block-columns]:flex-col md:[&_.wp-block-columns]:flex-row [&_.wp-block-columns]:gap-8 [&_.wp-block-columns]:my-20
                  [&_.wp-block-column]:flex-1 [&_.wp-block-column]:min-w-0
                  [&_.wp-block-column_p]:text-center [&_.wp-block-column_h2]:text-center [&_.wp-block-column_h2]:text-5xl [&_.wp-block-column_h2]:mb-2
                  [&_.wp-block-column_h3]:text-center [&_.wp-block-column_h3]:text-sm [&_.wp-block-column_h3]:font-mono [&_.wp-block-column_h3]:text-zinc-400 [&_.wp-block-column_h3]:uppercase [&_.wp-block-column_h3]:tracking-widest" 
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
                    Core Technicality <div className="h-px w-full bg-zinc-100 dark:bg-zinc-900"></div>
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
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            End of File
          </div>
        </div>
      </section>
    </article>
  );
}
