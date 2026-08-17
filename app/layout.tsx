import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ohanesian Digital Solutions | Custom Web Systems & Architecture",
  description: "Strategy-led digital experiences, high-performance custom web development, and operational workflow automation.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
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
      <head>
        <link rel="preconnect" href="https://wp.ohanesiandigitalsolutions.com" />
        <link rel="dns-prefetch" href="https://wp.ohanesiandigitalsolutions.com" />
      </head>
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
                Strategy-led digital experiences engineered for measurable business growth.
              </p>
            </div>
            <div className="label-mono">
              © 2026 OHANESIAN DIGITAL SOLUTIONS // ALL_RIGHTS_RESERVED
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
