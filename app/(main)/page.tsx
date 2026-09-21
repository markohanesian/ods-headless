import Hero from "@/components/Hero";
import ArchitectureComparison from "@/components/ArchitectureComparison";
import ProductizedOffers from "@/components/ProductizedOffers";
import PerformanceMandate from "@/components/PerformanceMandate";
import LeadIntakeTeaser from "@/components/LeadIntakeTeaser";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import BlogSection from "@/components/BlogSection";
import WhiteLabelBanner from "@/components/WhiteLabelBanner";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />
      
      {/* Section 2: Why Custom Web Architecture Beats Standard Builders */}
      <ArchitectureComparison />

      {/* Section 3: Productized Offers */}
      <ProductizedOffers />

      {/* Section 4: Performance Mandate */}
      <PerformanceMandate />
      
      {/* Section 4: White-Label Agency Partnership Banner */}
      <WhiteLabelBanner />

      {/* Showcase / Portfolio Section */}
      <CaseStudyGrid 
        title="Proof & Measurable Outcomes" 
        subtitle="Real engineering solutions built for measurable growth."
        category="work"
        limit={3}
        showViewAll={true}
        viewAllLabel="View Portfolio"
      />

      <BlogSection />
      
      {/* Section 4: Lead Intake Teaser & Call to Action */}
      <LeadIntakeTeaser />
    </>
  );
}

