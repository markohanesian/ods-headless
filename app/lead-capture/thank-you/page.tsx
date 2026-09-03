import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "Thank You | Ohanesian Digital Solutions",
  robots: "noindex, nofollow"
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-950">
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-18337571182/FsHwCJTVkOwcEO7ChKhE'});`}
      </Script>
      <div className="max-w-xl w-full text-center space-y-8 p-12 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800">
        <div className="flex justify-center">
          <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 p-4">
            <CheckCircle2 className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            We’ve Received Your Project Details.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md mx-auto">
            We are reviewing your business profile and will follow up within 1 business day with your sprint timeline and tracking architecture.
          </p>
        </div>
        
        <div className="pt-6">
          <a
            href="https://www.ohanesiandigitalsolutions.com"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 px-6 py-3 text-sm font-medium text-white dark:text-zinc-900 shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Return to Main Website
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
