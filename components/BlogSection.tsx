import React from 'react';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/wordpress';

const BlogSection = async () => {
  let posts = [];
  
  try {
    posts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to load blog posts:", error);
  }

  if (posts.length === 0) return null;

  return (
    <section className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 uppercase">
              Digital Insights
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm uppercase tracking-widest">
              Articles, Case Studies, and Observations on the Modern Web
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-400">[ BLOG_INDEX_04 ]</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group border-b border-zinc-200 dark:border-zinc-800 pb-12 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors"
            >
              <div className="flex flex-col gap-6">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-4">
                  <span>[{post.categories?.nodes[0]?.name || "Uncategorized"}]</span>
                  <span className="h-px w-8 bg-zinc-200 dark:bg-zinc-800"></span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:underline underline-offset-8 decoration-1 transition-all">
                  {post.title}
                </h3>
                
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 max-w-xl">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  Read Analysis <span className="translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
