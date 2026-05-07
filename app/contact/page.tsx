import React from "react";
import { getPageByUri } from "@/lib/wordpress";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage() {
  const pageData = await getPageByUri("/contact/");

  return (
    <section className="px-6 lg:px-12 pt-32 pb-24 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 max-w-4xl">
            Get in touch.
          </h1>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="order-2 lg:order-1">
            {pageData?.content ? (
              <div 
                className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-12 max-w-md prose prose-zinc dark:prose-invert font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
              />
            ) : (
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-12 max-w-md font-light leading-relaxed">
                Ready to architect your next digital solution? Get in touch to discuss your technical requirements.
              </p>
            )}
            
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-4">
                  Email Correspondence <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-900 lg:hidden"></div>
                </h3>
                <a href="mailto:hello@ohanesiandigitalsolutions.com" className="text-lg md:text-xl font-bold hover:text-brand transition-colors break-all">
                  hello@ohanesiandigitalsolutions.com
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-4">
                  Location HQ <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-900 lg:hidden"></div>
                </h3>
                <p className="text-lg md:text-xl font-bold">Remote // Global</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-12 border border-zinc-200 dark:border-zinc-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
