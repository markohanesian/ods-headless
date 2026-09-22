import Hero from "@/components/Hero";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import ProductizedOffers from "@/components/ProductizedOffers";
import ArchitectureComparison from "@/components/ArchitectureComparison";
import PerformanceMandate from "@/components/PerformanceMandate";
import WhiteLabelBanner from "@/components/WhiteLabelBanner";
import LeadIntakeTeaser from "@/components/LeadIntakeTeaser";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />
      
      {/* Section 2: Proof & Real Metrics (Moved directly below Hero) */}
      <CaseStudyGrid 
        title="Featured Projects" 
        subtitle="Websites and tools built for measurable business growth:"
        category="work"
        excludeCategory="custom-apps"
        limit={3}
        showViewAll={true}
        viewAllLabel="View Work"
      />

      {/* Section 3: Productized Offers (The 3 Doors) */}
      <ProductizedOffers />

      {/* Section 4: The Problem & Comparison */}
      <ArchitectureComparison />

      {/* Section 5: Performance Mandate */}
      <PerformanceMandate />
      
      {/* Section 6: White-Label Agency Partnership Banner */}
      <WhiteLabelBanner />

      <BlogSection />
      
      {/* Section 7: Pre-Footer Final Call to Action */}
      <LeadIntakeTeaser />
    </>
  );
}

