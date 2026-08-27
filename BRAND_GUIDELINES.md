# ODS Brand Design System & Guidelines

This document serves as the single source of truth for the ODS brand design system in this repository. All new pages, components, and refactors MUST adhere to these guidelines to ensure complete design parity across the digital footprint.

## 1. Color Palette

*   **Background (Light/Dark):** `bg-white` / `bg-zinc-950`
*   **Foreground (Light/Dark):** `text-zinc-900` / `text-zinc-50`
*   **Brand Gold (Primary):** Use the Tailwind variable `--color-brand` (`#fcaf3b`).
    *   *Usage:* Primary call-to-action buttons, active states, key emphasis underlines.
    *   *Classes:* `bg-brand`, `text-brand`, `border-brand`
*   **Accent Blue:** Use the Tailwind variable `--color-accent-blue` (`#304ffe`).
    *   *Usage:* Secondary highlights, specific headline accents (e.g., "hard as you do" text in the hero).
    *   *Classes:* `bg-accent-blue`, `text-accent-blue`

## 2. Typography

*   **Primary Font (Sans):** Geist Sans (var: `--font-geist-sans`)
*   **Monospace Font (Mono):** Geist Mono (var: `--font-geist-mono`)
    *   *Usage:* Overlines, button text, form labels, copyright, and technical data tags.

### Headings
*   **H1:** `text-5xl md:text-8xl font-bold tracking-[-0.05em] leading-[0.95] md:leading-[0.9]`
*   **H2:** `text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]`
*   **H3:** `text-2xl md:text-3xl font-bold tracking-tight`
*   **Lead Text (Subheadline):** `text-2xl md:text-3xl font-light tracking-tight leading-tight` (use the `.lead-text` utility class).

### Utilities
*   **Labels:** `.label-mono` (`text-sm font-mono uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400`)

## 3. Button Design (Global)

All buttons are strictly **square (0px border radius)** to maintain the brutalist, architectural brand aesthetic. Do **not** use `rounded-md`, `rounded-lg`, or `rounded-full` on core CTAs.

*   **.btn-brand:**
    *   *Look:* Solid gold background, black text.
    *   *Hover State:* Inverts to black background with white text (light mode) or white background with black text (dark mode).
    *   *Classes:* `px-8 py-5 bg-brand text-zinc-900 font-bold uppercase tracking-[0.2em] text-sm hover:bg-zinc-900 dark:hover:bg-zinc-50 hover:text-zinc-50 dark:hover:text-zinc-900 transition-all duration-300 text-center shadow-lg inline-block font-mono`
*   **.btn-primary:**
    *   *Look:* Solid black (light mode) or solid white (dark mode) background.
    *   *Hover State:* Inverts to solid gold background with black text.
*   **.btn-secondary:**
    *   *Look:* Transparent with border.
    *   *Hover State:* Light background fill on hover.

## 4. Form Design

All forms must match the `/contact` page design exactly.
*   **Labels:** Use `.label-mono`.
*   **Inputs:** `bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-brand transition-colors rounded-none appearance-none`. Do NOT use full borders or rounded corners.
*   **Submit Buttons:** Use `.w-full.btn-brand`.

## 5. Spacing & Containers

*   Standard padding for sections: `px-6 lg:px-12 py-24`
*   Max width for inner wrappers: `max-w-7xl mx-auto` or `max-w-5xl` for text-heavy blocks.

## 6. Copywriting Tone

*   **Direct & ROI-Focused:** Focus on business outcomes, lead conversion, automated workflows, and operational time saved.
*   **Technical Mastery Without Jargon:** Communicate senior software engineering authority cleanly.
*   **Problem / Solution Contrast:** Contrast off-the-shelf builder friction directly against ODS custom engineering.
*   **Action-Oriented CTAs:** ("Free Site Audit", "Schedule a Consultation", "Claim Your Pilot").
