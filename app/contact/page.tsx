import React from "react";

export default function ContactPage() {
  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">
            Archive 03 // Contact
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 max-w-4xl">
            Start a project.
          </h1>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-md">
              Ready to architect your next digital solution? Get in touch to discuss your technical requirements.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Email Correspondence</h3>
                <a href="mailto:hello@ohanesiandigitalsolutions.com" className="text-xl font-bold hover:text-zinc-500 transition-colors">
                  hello@ohanesiandigitalsolutions.com
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Location HQ</h3>
                <p className="text-xl font-bold">Remote // Global</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800">
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Project Brief</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button className="w-full py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
