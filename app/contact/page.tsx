import React from "react";
import { getPageByUri } from "@/lib/wordpress";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage() {
  const pageData = await getPageByUri("/contact/");

  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 max-w-4xl">
            Get in touch.
          </h1>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {pageData?.content ? (
              <div 
                className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-md prose prose-zinc dark:prose-invert font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
              />
            ) : (
              <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-md">
                Ready to architect your next digital solution? Get in touch to discuss your technical requirements.
              </p>
            )}
            
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
