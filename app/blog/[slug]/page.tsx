import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";

export default async function BlogSinglePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Filter out the 'blog' category to show more specific subcategories if any
  const specificCategories = post.categories.nodes.filter(cat => cat.slug !== 'blog');
  const mainCategory = specificCategories[0]?.name || "Article";

  return (
    <article className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Header Section */}
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
             <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 border border-zinc-200 dark:border-zinc-800">
               {mainCategory}
             </span>
             <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
               {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'April 2026'}
             </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12 leading-[1.1]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="px-6 lg:px-12 -mt-12 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[21/9] relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl">
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
      <section className="px-6 lg:px-12 py-12 pb-32">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-zinc dark:prose-invert max-w-none 
              prose-h2:text-3xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:mb-6 prose-h2:mt-16
              prose-p:text-xl prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:mb-10
              prose-li:text-lg prose-li:text-zinc-600 dark:prose-li:text-zinc-400 prose-blockquote:border-l-zinc-900 dark:prose-blockquote:border-l-zinc-50
              prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:font-light"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
          
          <div className="mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-900">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-8">Related Categories</h4>
            <div className="flex flex-wrap gap-2">
              {post.categories.nodes.map(cat => (
                <span key={cat.slug} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono uppercase tracking-wider">
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="px-6 lg:px-12 py-12 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            ← Back to Insights
          </Link>
          <Link href="/contact" className="text-[10px] font-mono uppercase tracking-widest text-zinc-900 dark:text-zinc-50 font-bold hover:underline underline-offset-4">
            Start a Conversation
          </Link>
        </div>
      </section>
    </article>
  );
}
