import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Filter out the 'work' category to show more specific subcategories
  const specificCategories = post.categories.nodes.filter(cat => cat.slug !== 'work');
  const mainCategory = specificCategories[0]?.name || "Case Study";

  return (
    <article className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
             <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
               Project // {mainCategory}
             </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12">
            {post.title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Role</h3>
              <p className="font-bold">Digital Architect</p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Deliverable</h3>
              <p className="font-bold">{mainCategory}</p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Stack</h3>
              <p className="font-bold">Next.js / WordPress</p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Date</h3>
              <p className="font-bold">{post.date ? new Date(post.date).getFullYear() : '2026'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              {post.featuredImage ? (
                <div className="aspect-video relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-16 overflow-hidden">
                  <Image 
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-16 flex items-center justify-center">
                  <span className="font-mono text-zinc-400 uppercase tracking-widest">Image Archive Unavailable</span>
                </div>
              )}
              
              <div 
                className="prose prose-zinc dark:prose-invert max-w-none 
                  prose-h2:text-3xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:mb-6 prose-h2:mt-12
                  prose-p:text-xl prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:mb-8
                  prose-li:text-lg prose-li:text-zinc-600 dark:prose-li:text-zinc-400"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </div>
            
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div className="border-l-2 border-zinc-900 dark:border-zinc-50 pl-6 py-2">
                  <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 italic">
                    This project represents a strategic integration of performance engineering and user-centric design principles.
                  </p>
                </div>
                
                <Link 
                  href="/contact"
                  className="inline-block w-full text-center py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  Start Similar Project
                </Link>

                <div className="pt-8">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.nodes.map(cat => (
                      <span key={cat.slug} className="px-3 py-1 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono uppercase tracking-wider">
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </div>
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
