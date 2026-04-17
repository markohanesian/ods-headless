import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ohanesian Digital Solutions | Digital Solutions Agency",
  description: "Minimalist, high-performance, and business-driven digital solutions with engineering expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <footer className="py-12 px-6 lg:px-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className="text-xl font-bold tracking-tighter mb-2">ODS</div>
              <p className="text-sm text-zinc-500 max-w-xs">
                Business-driven digital solutions powered by engineering expertise.
              </p>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              © 2026 OHANESIAN DIGITAL SOLUTIONS // ALL_RIGHTS_RESERVED
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
