import Navigation from "@/components/Navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
