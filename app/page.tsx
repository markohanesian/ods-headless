import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      
      {/* Additional section for Portfolio placeholder */}
      <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
              Selected Works
            </h2>
            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group cursor-pointer overflow-hidden">
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">
                  Project_Archive_0{i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
