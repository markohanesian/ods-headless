
$transcript = @"
# ODS Website Copy Transcript

## Global Navigation
- **Logo**: ODS (OHANESIAN DIGITAL SOLUTIONS)
- **Links**: Work, Services, For Agencies, About, Contact
- **Desktop CTA**: Contact (text link)
- **Mobile Menu**: Work, Services, For Agencies, About, Contact
- **Mobile Sticky CTA**: Free Site Audit (Triggers intake modal)

---

## Homepage (/)

### Section 1: Hero
- **Eyebrow Badge**: CUSTOM WEBSITES • CAMPAIGN LANDING PAGES • WORKFLOW APPS
- **Headline (H1)**: Tech that works as hard as you do.
- **Subtitle/Paragraph**: We build websites and dedicated landing pages that convert to sales—with built-in analytics, functional design, and zero plugin bloat.
- **Primary CTA**: Free Site Audit (Triggers intake modal)
- **Secondary CTA**: See Our Results (Smooth-scrolls to #case-studies)

### Section 2: Proof & Real Metrics
- **Eyebrow Badge**: PROVEN RESULTS
- **Headline (H2)**: Featured Projects
- **Sub-Headline**: Websites and tools built for measurable business growth:
- **Case Studies**: 3x-5x Increase in Online Sales (The Pomegranate Boutique), Automated Leads & Quoting (Four Seasons Ag Services), Zero-to-One Web Presence (Diversified Land Management)

### Section 3: Productized Offers
- **Headline (H2)**: Built by engineers, made for business profit
- **Sub-Headline**: Clear deliverables with zero scope confusion. Pick the engine your business needs:
- **Card 1**: The Ad Campaign Landing Page (BUILT IN 1 WEEK • 30 DAYS OF INCLUDED ANALYTICS)
- **Card 2**: The Custom Business Hub (FULL WEBSITE BUILD OR COMPLETE REDESIGN)
- **Card 3**: Custom Applications & Automation (OPERATIONAL TOOLS & EXTENSIONS)

### Section 4: The Problem & Comparison
- **Headline (H2)**: Is your current website costing you business?
- **Sub-Headline**: Fragile website templates and bloated plugins waste ad spend and create more work. Here is how custom engineering compares:
- **Comparison Points**: Slow Load Times vs Under 1 Second, Fragile Plugins vs Custom Code, Disorganized Leads vs Automated Pipelines, Cluttered Navigation vs Clean Layouts.

### Section 5: Performance Mandate
- **Eyebrow Badge**: PERFORMANCE STANDARDS
- **Headline (H2)**: Built to convert. Engineered never to break.
- **Sub-Headline**: We don't assemble fragile off-the-shelf templates. We engineer lightweight, resilient platforms that protect your advertising budget and streamline daily operations.
- **Value Pillars**: Instant Mobile Loading, Built for Every Screen, Direct Lead Delivery.

### Section 6: White-Label Agency Partnership Banner
- **Eyebrow Badge**: AGENCY PARTNERSHIPS
- **Headline (H2)**: A dependable development partner for PPC and marketing agencies.
- **Paragraph**: Eliminate the dev bottleneck. We build lightning-fast, tracking-ready landing pages and web apps under your agency's brand. We protect your ROAS, stick strictly to 5 business-day delivery windows, and respect absolute NDA confidentiality.
- **CTA Button**: Inquire About White-Label

### Section 7: Pre-Footer Final Call to Action
- **Headline (H3)**: Ready for a website that pulls its weight?
- **Paragraph**: Get an objective breakdown of your site's speed, mobile responsiveness, and conversion leaks.
- **CTA Button**: Free Site Audit (Triggers intake modal)

---

## Global Lead Intake Modal (<dialog>)
- **Header**: Technical Site & Conversion Audit
- **Step 1**: Your Business Basics (Full Name, Business Email, Company Name, Current Website URL)
- **Step 2**: What are you looking to solve? (Ad Campaign Landing Page, Build / Redesign Full Website, Agency White-Label Dev Support, Custom App / Operational Automation)
- **Step 3**: Project Details (Target Timeline, Primary Headache)
- **Submit CTA**: Submit Audit Request

---

## Services Page (/services)
- **Headline (H1)**: Services
- **Subtitle**: We don't just build pages that look good. We build digital tools that handle your daily operations and enhance your business.
- **Service Tier 1**: Dedicated Lead Capture Pages (High-converting, dedicated landing pages built specifically for paid ad campaigns.)
- **Service Tier 2**: Websites and Applications (Instant load speeds, beautiful layouts on all devices, legally compliant design, and custom tools.)
- **Service Tier 3**: Design and Strategy
- **Service Tier 4**: Systems and Automation

---

## Lead Capture Landing Page (/lead-capture)

### Section 1: Hero
- **Eyebrow Badge**: CAMPAIGN LANDING PAGES • 1-WEEK DELIVERY
- **Headline (H1)**: Turn ad clicks into paying clients.
- **Sub-Headline**: Stop wasting ad spend, capture qualified leads, and grow your sales—with one dedicated page.
- **Primary Action CTA**: Get Started on Your Landing Page (Smooth-scrolls to #lead-form)
- **Secondary Trust Anchor**: Includes 30 days of live lead tracking and performance reporting.

### Section 2: What We Launch in 1 Week (Deliverables)
- **Headline (H2)**: Everything you need to turn clicks into customers
- **Sub-Headline**: We build and launch a turn-key campaign page in 1 week with zero technical headache on your end.
- **4 Feature Cards/Columns**: Built for Fast Action, Loads Instantly on Mobile, Instant Lead Notifications, 100% Full Ownership

### Section 3: Included Live Analytics
- **Eyebrow**: TRANSPARENT RESULTS
- **Headline (H2)**: See exactly how your ads are performing.
- **Paragraph**: Most web agencies build a page and walk away. With every build, we include 30 days of live performance tracking. You get a private, easy-to-read analytics dashboard that shows you exactly how many people visited, who submitted a form, and what each lead cost you.
- **3 Value Checkmarks**: Real-time lead count and conversion rate tracking, Clear data showing which ad campaigns generate calls, 30 days of post-launch technical support included.

### Section 4: Why Dedicated Pages Beat Websites
- **Headline (H2)**: Why send ad traffic to a dedicated landing page?
- **Comparison Grid**: Standard Website vs ODS Dedicated Page

### Section 5: Embedded Intake Form (#lead-form)
- **Form Header**: Start Your Campaign Landing Page
- **Form Subtitle**: Tell us about your offer and ad goals. We'll review your project and get back to you within 1 business day.
- **Fields**: Full Name, Work Email, Company Name or Current Website URL, Are you currently running ads? Target Launch Timeline
- **Submit Button**: Request Your Landing Page Build
- **Trust Microcopy**: ⚡ 1-week turnaround. 30 days of performance reporting included. No spam, ever.
"@

Set-Content -Path "COPY_TRANSCRIPT.md" -Value $transcript -Encoding UTF8

