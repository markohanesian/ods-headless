# Ohanesian Digital Solutions (ODS) Headless Engine

## 1. App Summary & Core Intent
- **Purpose:** Provide a high-performance, custom-engineered digital storefront and headless frontend for Ohanesian Digital Solutions (ODS). It is built to replace slow legacy page builders with modern custom web architecture, capture qualified leads, and showcase a high-converting digital portfolio.
- **Classification:** ODS Client Site & Dedicated Lead Capture Engine (Agency Asset).
- **Target Audience:** Business owners looking for strategy-led digital experiences, custom web development, and operational workflow automation who want to eliminate paperwork and operational friction.
- **Monetization / Business Goal:** High-conversion lead generation, client acquisition, and demonstrating custom software engineering capabilities.

## 2. Technical Architecture & Tech Stack
- **Framework & Runtime:** Next.js 16.2.4 (App Router), React 19.2.4, Node.js 20+.
- **Monorepo / Workspace:** pnpm Workspace (`pnpm-workspace.yaml`).
- **Styling & UI System:** Tailwind CSS v4 with custom utility classes and design tokens.
- **State Management & Validation:** React State (`useState`) and HTML5 native validation for forms.
- **Database & Backend Integrations:** Headless WordPress via GraphQL API (Apollo Client) for CMS data, Resend for transactional email and lead routing.
- **Deployment & Edge Infrastructure:** Standard Next.js deployment compatible (Vercel-ready).
- **Key Dependencies:** 
  - `next` (16.2.4)
  - `react` (19.2.4)
  - `@apollo/client` (^4.1.7)
  - `graphql` (^16.13.2)
  - `lucide-react` (^1.34.0)
  - `resend` (^6.12.2)
  - `tailwindcss` (^4)

## 3. Brand Identity & Design System Standards
- **Design Aesthetic:** Minimalist "Digital Architect", Brutalist direct-response UI (strictly square buttons, 0px border radius, clear architectural lines).
- **Typography & Color Tokens:** 
  - Primary Font: Geist Sans (`--font-geist-sans`)
  - Monospace Font: Geist Mono (`--font-geist-mono`) for overlines, labels, and technical data.
  - Brand Gold (Primary): `--color-brand` (`#fcaf3b`)
  - Accent Blue: `--color-accent-blue` (`#304ffe`)
  - Backgrounds: `bg-white` (Light) / `bg-zinc-950` (Dark)
- **Accessibility Baseline:** Strict adherence to WCAG 2.1 AA standards (keyboard navigation, high contrast, semantic HTML, screen-reader labels).

## 4. Copy Tone & Voice Guidelines
- **Core Voice:** ROI-driven, authoritative, problem-solving, and clear. Communicate senior software engineering authority cleanly.
- **Tone Philosophy:** 8th-grade readability level; outcome-first (time saved, revenue earned, friction removed before technical specifications).
- **Messaging Flow:** Follow the "slippery slope" direct-response principle—every line propels the reader toward conversion or action. Contrast off-the-shelf builder friction directly against ODS custom engineering.
- **Approved Primary CTAs:** "Free Site Audit", "Start questionnaire", "Schedule a Consultation", "Book a Call", "Claim Your Free Strategy Call".

## 5. Current Feature Status & Roadmap
- **Production-Ready Features:** 
  - Headless WordPress integration for portfolio, team, and blog routing.
  - Lead Capture Intake Form and Contact Form integrated with Resend.
  - Core layouts, global typography, and theming capabilities.
- **In-Progress Work:** Active development of primary site routes (`/about`, `/blog`, `/contact`, `/engine`, `/portfolio`, `/services`).
- **Known Blockers / Technical Debt:** 
  - Relies on local mock fallbacks for Resend if API keys are missing.
  - WordPress media URLs require custom Regex rewriting to map to the `wp.` subdomain in production.
  - Form validation utilizes native HTML attributes; migrating to Zod + React Hook Form could improve UX and schema strictness on advanced intake flows.
