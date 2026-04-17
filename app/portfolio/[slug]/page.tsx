import React from "react";
import Link from "next/link";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <article className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">
            Project_Case_Study // {slug.replace(/-/g, "_").toUpperCase()}
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12">
            {slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Role</h3>
              <p className="font-bold">Digital Architect</p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Deliverable</h3>
              <p className="font-bold">Headless Solution</p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Stack</h3>
              <p className="font-bold">Next.js / WordPress</p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Year</h3>
              <p className="font-bold">2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-16 flex items-center justify-center">
                <span className="font-mono text-zinc-400 uppercase tracking-widest">Primary_Image_Placeholder</span>
              </div>
              
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold tracking-tight mb-6">The Challenge</h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
                  Every project begins with a complex problem. This case study explores how we 
                  architected a solution that prioritizes performance without sacrificing user experience.
                </p>
                
                <h2 className="text-3xl font-bold tracking-tight mb-6">The Approach</h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Utilizing a decoupled architecture, we established a robust API layer to bridge 
                  content and presentation. This ensured absolute control over the rendering pipeline.
                </p>
              </div>
            </div>
            
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div className="border-l-2 border-zinc-900 dark:border-zinc-50 pl-6 py-2">
                  <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 italic">
                    &ldquo;The engineering rigor applied to this project resulted in a 40% increase in 
                    conversion rates and a perfect 100/100 Lighthouse score.&rdquo;
                  </p>
                </div>
                
                <Link 
                  href="/contact"
                  className="inline-block w-full text-center py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  Start_Similar_Project
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="px-6 lg:px-12 py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            ← Return_to_Archive
          </Link>
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            End_of_File
          </div>
        </div>
      </section>
    </article>
  );
}
