# Design System Specification

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Core"**

This design system moves away from the "generic corporate template" by adopting a philosophy of **Architectural Precision**. For an enterprise system integrator like PT. Network Data Sistem, the digital experience must mirror the infrastructure they build: robust, transparent, and sophisticated. 

The system utilizes "Architectural Layering"—a technique where depth is communicated through tonal shifts rather than lines. By prioritizing white space as a structural element and utilizing an editorial typographic scale, we create an atmosphere of "High-End Technical Authority." The result is a layout that feels intentional, curated, and institutional-grade, moving beyond simple UI into the realm of a premium brand experience.

---

## 2. Colors & Surface Philosophy

The palette is engineered for "Technical Trust," using deep charcoals and precision blues to anchor the brand, while leveraging a multi-tiered grayscale for structural depth.

### Color Tokens
*   **Primary (Technical Authority):** `#003d9b` (Primary) transitioning to `#0052cc` (Primary Container).
*   **Neutral (The Foundation):** `#f9f9f9` (Surface) and `#1a1c1c` (On-Surface).
*   **Accents (The Signal):** `#004c4c` (Tertiary/Muted Teal) for specialized enterprise callouts.

### The "No-Line" Rule
To maintain a premium editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting against a `surface` background provides a soft, sophisticated transition that avoids the "boxy" look of entry-level bootstrap sites.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper and frosted glass. 
*   **Base:** `surface` (#f9f9f9)
*   **Sectioning:** `surface-container-low` (#f3f3f3)
*   **Component Level:** `surface-container-lowest` (#ffffff)
*   **Interactive/Elevated:** `surface-container-high` (#e8e8e8)

### The "Glass & Gradient" Rule
For floating elements (Mega Menus, Sticky Headers), utilize **Glassmorphism**. Apply a semi-transparent `surface` color with a `backdrop-blur` (16px–24px). This allows technical data to feel integrated into the environment. Use subtle linear gradients (Primary to Primary-Container) on CTAs to provide "visual soul"—a slight 15-degree tilt to the gradient adds a sense of forward motion.

---

## 3. Typography: The Editorial Voice

We utilize **Inter** across all scales to maintain a clean, geometric, and hyper-modern tech feel. The hierarchy is designed to be "Top-Heavy," using large display sizes to command attention.

*   **Display (Lg/Md/Sm):** 3.5rem down to 2.25rem. Used for Hero statements and key value propositions. Letter spacing should be -0.02em to feel "tight" and authoritative.
*   **Headlines:** 2rem to 1.5rem. Use `headline-lg` for section headers. Always pair with generous top-margin (Spacing Scale 80px+) to let the typography breathe.
*   **Titles:** 1.375rem to 1rem. Reserved for card titles and sub-navigation.
*   **Body:** 1rem (`body-lg`) for general reading; 0.875rem (`body-md`) for secondary data. 
*   **Labels:** 0.75rem. Always uppercase with +0.05em tracking when used for "Bilingual Toggles" or "Service Categories."

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering**. 

*   **The Layering Principle:** Place a `surface-container-lowest` (pure white) card on a `surface-container-low` (light grey) background. This creates a natural "lift" that is felt rather than seen.
*   **Ambient Shadows:** For high-priority floating elements (e.g., Lead Capture modals), use an "Ambient Diffusion" shadow: `box-shadow: 0 20px 40px rgba(26, 28, 28, 0.06);`. The shadow color is a tint of the `on-surface` charcoal, not a neutral grey.
*   **The Ghost Border Fallback:** If a border is required for accessibility (e.g., Input Fields), use the `outline-variant` token at 15% opacity. Never use 100% opaque borders.
*   **Glassmorphism:** Navigation bars must use 80% opacity on the surface color with a blur. This ensures the content "flows" under the header as the user scrolls, emphasizing the system's fluidity.

---

## 5. Components

### Mega Menus & Navigation
*   **Structure:** Use a 4-column layout within the mega menu. Column 1 should be a "Featured Insight" with a subtle background gradient; Columns 2–4 are category links.
*   **Bilingual Toggle:** A minimalist `label-md` switch. Use `primary` text for the active language and `secondary` (50% opacity) for the inactive.

### Enterprise-Style Cards
*   **Rule:** Forbid divider lines. 
*   **Style:** Use `surface-container-lowest` as the card base. Use 24px–32px padding (`xl` spacing). The hover state should not use a shadow; instead, shift the background to `surface-bright` and subtly scale the primary icon.

### Lead Capture Forms
*   **Inputs:** Bottom-border only or "Ghost Border" containers. Focus states transition the border to `primary` with a 2px thickness.
*   **CTAs:** Primary buttons use `rounded-md` (0.375rem). They must feature a subtle "shimmer" animation on hover to signify high-tech responsiveness.

### Sticky Header
*   **Behavior:** Shrink height by 20% on scroll. The background transitions from 0% opacity to a "Glassmorphed" `surface-container-lowest` at 90% opacity with a 20px blur.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts (e.g., a 60% width image offset by a 40% text block) to create a premium editorial look.
*   **Do** prioritize "Leading" (line-height). Body text should be at 1.6x the font size to ensure readability in enterprise contexts.
*   **Do** use `tertiary_container` for subtle "Success" or "Innovation" callouts to break the monotony of blue and charcoal.

### Don't
*   **Don't** use 1px dividers to separate sections. Use a 120px vertical gap or a color shift between `surface` and `surface-container-low`.
*   **Don't** use standard "web-safe" blue. Stick strictly to the `primary` (#003d9b) for a specialized technical feel.
*   **Don't** use "Pop" animations. All transitions must be `cubic-bezier(0.4, 0, 0.2, 1)`—a smooth, "heavy" movement that feels institutional and stable.