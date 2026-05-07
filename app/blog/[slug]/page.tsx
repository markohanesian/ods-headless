import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";

export default async function BlogSinglePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
             <span className="label-mono">
               Insights // {mainCategory}
             </span>
             <div className="h-px w-12 bg-brand opacity-50"></div>
             <span className="label-mono">
               {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'April 2026'}        
             </span>
          </div>

          <h1 className="text-zinc-900 dark:text-zinc-50 mb-12">        
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
            className="max-w-none text-zinc-900 dark:text-zinc-50
              /* Typography Overrides - Headings */
              [&_h2]:!text-3xl md:[&_h2]:!text-5xl [&_h2]:!font-bold [&_h2]:!tracking-tighter [&_h2]:!mt-20 [&_h2]:!mb-8 [&_h2]:!leading-[1.1] [&_h2]:!text-zinc-900 dark:[&_h2]:!text-zinc-50 [&_h2]:!block
              [&_h3]:!text-2xl md:[&_h3]:!text-3xl [&_h3]:!font-bold [&_h3]:!tracking-tight [&_h3]:!mt-16 [&_h3]:!mb-6 [&_h3]:!text-zinc-900 dark:[&_h3]:!text-zinc-50 [&_h3]:!block
              
              /* Typography Overrides - Body Text */
              [&_p]:!text-lg md:[&_p]:!text-xl [&_p]:!leading-relaxed [&_p]:!text-zinc-600 dark:[&_p]:!text-zinc-300 [&_p]:!font-light [&_p]:!mb-10 [&_p]:!block
              [&_li]:!text-lg md:[&_li]:!text-xl [&_li]:!leading-relaxed [&_li]:!text-zinc-600 dark:[&_li]:!text-zinc-300 [&_li]:!font-light
              
              /* Force inherit colors/fonts on all nested spans/elements within paragraphs */
              [&_p_*]:!text-inherit [&_p_*]:!font-inherit [&_p_*]:!font-size-inherit
              
              /* List Specifics */
              [&_ul]:!list-disc [&_ul]:!pl-6 [&_ul]:!mb-12 [&_ul]:!mt-4 [&_ul]:!space-y-4 [&_ul]:!block
              [&_ol]:!list-decimal [&_ol]:!pl-6 [&_ol]:!mb-12 [&_ol]:!mt-4 [&_ol]:!space-y-4 [&_ol]:!block
              
              /* Blockquotes */
              [&_blockquote]:!border-l-4 [&_blockquote]:!border-brand [&_blockquote]:!pl-8 [&_blockquote]:!my-12 [&_blockquote]:!italic [&_blockquote]:!text-2xl [&_blockquote]:!font-light [&_blockquote]:!text-zinc-700 dark:[&_blockquote]:!text-zinc-200 [&_blockquote]:!block
              
              /* Image handling */
              [&_figure]:!my-16 [&_figure]:!block
              [&_img]:!border [&_img]:!border-zinc-100 dark:[&_img]:!border-zinc-900 [&_img]:!w-full [&_img]:!h-auto
              
              /* Table Styling - Design System Implementation */
              [&_table]:!w-full [&_table]:!border-collapse [&_table]:!my-16 [&_table]:!text-left
              [&_thead]:!border-b-2 [&_thead]:!border-zinc-900 dark:[&_thead]:!border-zinc-50
              [&_th]:!py-6 [&_th]:!text-sm [&_th]:!font-bold [&_th]:!uppercase [&_th]:!tracking-[0.2em] [&_th]:!text-zinc-900 dark:[&_th]:!text-zinc-50
              [&_td]:!py-6 [&_td]:!border-b [&_td]:!border-zinc-100 dark:[&_td]:!border-zinc-900 [&_td]:!text-lg [&_td]:!font-light [&_td]:!text-zinc-600 dark:[&_td]:!text-zinc-300 [&_td]:!leading-relaxed
              
              /* Specific handling for table headers (handles both <thead> and no-thead cases) */
              [&_thead_td]:!font-bold [&_thead_td]:!text-zinc-900 dark:[&_thead_td]:!text-zinc-50 [&_thead_td]:!uppercase [&_thead_td]:!text-sm [&_thead_td]:!tracking-[0.2em]
              [&_tbody:first-child_tr:first-child_td]:!font-bold [&_tbody:first-child_tr:first-child_td]:!text-zinc-900 dark:[&_tbody:first-child_tr:first-child_td]:!text-zinc-50 [&_tbody:first-child_tr:first-child_td]:!uppercase [&_tbody:first-child_tr:first-child_td]:!text-sm [&_tbody:first-child_tr:first-child_td]:!tracking-[0.2em]
              
              /* Ensure the second row and beyond are always light weight */
              [&_tbody_tr:not(:first-child)_td]:!font-light [&_tbody_tr:not(:first-child)_td]:!text-zinc-600 dark:[&_tbody_tr:not(:first-child)_td]:!text-zinc-300
              [&_tr:last-child_td]:!border-b-0"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
          
          <div className="mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-900">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-8">Related Categories</h4>
            <div className="flex flex-wrap gap-2">
              {post.categories.nodes.map(cat => (
                <span key={cat.slug} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono uppercase tracking-widest">
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
          <Link href="/" className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            ← Back to Insights
          </Link>
          <Link href="/contact" className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-50 font-bold hover:underline underline-offset-8 decoration-brand decoration-2">
            Start a Conversation
          </Link>
        </div>
      </section>
    </article>
  );
}
