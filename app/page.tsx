import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import CoreValues from "@/components/CoreValues";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudyGrid />
      <CoreValues />
      <BlogSection />
      
      {/* Final CTA Section */}
      <section className="px-6 lg:px-12 py-32 bg-zinc-900 dark:bg-white text-zinc-50 dark:text-zinc-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Let’s Build Your Next Digital Success.
          </h2>
          <p className="text-xl text-zinc-400 dark:text-zinc-500 mb-12">
            Have a vision for your business? We’re ready to listen and build a digital solution that brings your ideas to life.
          </p>
          <a 
            href="/contact"
            className="inline-block px-12 py-5 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
          >
            Send Us a Message
          </a>
        </div>
      </section>
    </>
  );
}
