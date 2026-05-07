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
                className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-12 max-w-md prose prose-zinc dark:prose-invert font-light leading-relaxed
                  [&_h2]:text-[10px] [&_h2]:font-mono [&_h2]:uppercase [&_h2]:tracking-[0.2em] [&_h2]:text-zinc-400 [&_h2]:mb-4 [&_h2]:mt-12 first:[&_h2]:mt-0
                  [&_p]:text-lg [&_p]:md:text-xl [&_p]:font-bold [&_p]:text-zinc-900 [&_p]:dark:text-zinc-50 [&_p]:mb-0"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
              />
            ) : (
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-12 max-w-md font-light leading-relaxed">
                Ready to architect your next digital solution? Get in touch to discuss your technical requirements.
              </p>
            )}
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
