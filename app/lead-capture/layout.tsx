import Footer from "@/components/Footer";

export const metadata = {
  title: "Dedicated Lead Capture Pages | ODS",
  description: "Stop wasting ad spend. We build high-speed, single-purpose landing pages engineered specifically for Google Ads.",
};

export default function LeadCaptureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

