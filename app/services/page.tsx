import React from "react";
import Link from "next/link";

const SERVICE_TIERS = [
  {
    id: "01",
    title: "Websites and Applications",
    summary: "A digital foundation tailored to your exact business workflow, or an upgrade to your current site.",
    whatWeDeliver: "Top page speed rankings, beautiful layouts on all devices, accessibility compliance, and custom tools .",
  },
  {
    id: "02",
    title: "Design and Strategy",
    summary: "Clear, modern visuals that make your business look authoritative and professional from day one.",
    whatWeDeliver: "Custom color palettes, typography rules that fit your brand, responsive design components, and clear layout standards.",
  },
  {
    id: "03",
    title: "Systems and Automation",
    summary: "Connect your website directly to your daily tools, payment processors, and scheduling apps.",
    whatWeDeliver: "Easy payment checkouts, custom lead intake forms, automated client onboarding emails, and integrated event hubs.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Header Section */}
      <section className="px-6 lg:px-12 pt-36 pb-20 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 max-w-5xl leading-[1.08]">
            Digital Tools Built for Powerful Growth
          </h1>
          <div className="h-px w-24 bg-accent-blue mb-8"></div>
          
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 max-w-4xl font-light leading-relaxed">
            We don&apos;t just build pages that look good. We build digital tools that handle your daily operations and enhance your business.
          </p>
        </div>
      </section>

      {/* Service Tiers Section */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {SERVICE_TIERS.map((service) => (
              <div 
                key={service.id} 
                className="flex flex-col p-8 sm:p-10 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-accent-blue/50 transition-all duration-300 group"
              >
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                  {service.title}
                </h2>
                
                <p className="text-zinc-700 dark:text-zinc-200 font-medium mb-8 leading-relaxed">
                  {service.summary}
                </p>

                <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="label-mono text-[10px] text-accent-blue uppercase tracking-widest mb-3">
                    WHAT WE DELIVER
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                    {service.whatWeDeliver}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Support Section */}
      <section className="px-6 lg:px-12 py-24 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-8 leading-[1.15]">
            The Webmaster Care Plan
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 dark:text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            We manage your site hosting, security, updates, and everything your website needs to run smoothly 24/7.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact"
              className="btn-brand px-8 py-4 text-base font-bold shadow-lg"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

