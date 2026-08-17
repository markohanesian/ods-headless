import Hero from "@/components/Hero";
import ArchitectureComparison from "@/components/ArchitectureComparison";
import CoreCapabilities from "@/components/CoreCapabilities";
import LeadIntakeTeaser from "@/components/LeadIntakeTeaser";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />
      
      {/* Section 2: Why Custom Web Architecture Beats Standard Builders */}
      <ArchitectureComparison />

      {/* Section 3: Core Capabilities */}
      <CoreCapabilities />

      {/* Showcase / Portfolio Section */}
      <CaseStudyGrid 
        title="Web Systems & Engineering Portfolio" 
        subtitle="A curated selection of high-performance digital platforms and engineering-led web solutions designed for measurable business growth."
        category="web-development"
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

