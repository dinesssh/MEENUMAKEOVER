# Changelog - Strict Polish Pass (v2)

## Fixed / Completed

### Priority 1: Critical Bugs
- **Salon Price Table Text Overlap**: Rebuilt `MenuSection` in `src/app/salon/page.tsx` using a robust CSS grid/flex layout with fixed widths for pricing columns (`w-32`) and right-alignment.
- **Floating CTA Overlap**: Refactored `src/components/ui/ConversionElements.tsx` to stack the "Book Your Date" pill and WhatsApp bubble in the bottom right with a `gap-3`. Handled mobile appropriately. Added `pb-32` to the trailing sections of all pages, and implemented an `IntersectionObserver` to seamlessly fade out both floating elements when the booking footer is on-screen. Forced `z-index: 50`.
- **"Most Popular" Badge Clipped**: Updated `src/app/bridal/page.tsx` to shift the badge to `-top-4`, added `overflow-visible`, applied correct inner padding and rounded corners, and ensured a continuous gold border wraps the entire card.

### Priority 2: Table & Pricing Alignment
- **Premium Hair Treatments**: Converted the 2x2 grid into a single-column stack with flex layout (`justify-between`), utilizing sans for names and tabular serif for prices, separated by a 20% opacity gold 1px border.
- **Complete Hair Care Combo**: Restructured the feature row to use `gap-x-8` on desktop and stack vertically on mobile. Integrated gold/white checkmarks (`✓`) and added a subtle shadow and border.
- **Pricing Tables**: Unified all tables into a reusable `MenuSection`. Applied `bg-[#f5efe6]/30` on alternating rows, tabular-nums for prices, sub-text styling, hover state highlighting, and mobile-friendly stacking functionality.

### Priority 3: "Our Menus" Section
- **Card Styling**: Reduced vertical padding to `py-12`. Ensured `h-full` and `items-stretch` for equal height. Added a subtle 5% opacity decorative corner circle.
- **CTAs**: Synchronized the "View Bridal Menu" and "View Salon Menu" links to use exact uppercase, gold tracking typography with a dynamic right-arrow translation on hover.
- **Section Headers**: Corrected the `mb-6` spacing and tracking for the eyebrow, and unified the H2 styling with the requested leading-relaxed paragraph.

### Priority 4: Complimentary Gift Banner
- **Banner UI**: Increased the opacity of the decorative background element (`bg-[#b8893e]/25`) so it provides proper depth.
- **CTA Link**: Converted the text pill to a fully interactive `<a>` link pointing to `#booking`. Implemented hover fill (white background, gold text) and a subtle `scale-105` transformation. Resolved the `DON'T` apostrophe issue.

### Priority 5: Bridal Package Cards
- **Structural Integrity**: Forced `h-full` on all package containers with the `w-16` unified divider. Adjusted feature lists to align using `mt-auto` on the CTA buttons ensuring perfect horizontal sync.
- **Button Consistency**: Fixed the standard tier CTA buttons to feature a true gold border, transitioning to a full gold background with white text on hover.

### Priority 6: Typography Consistency
- **Eyebrows**: Modified `.eyebrow` class in `src/app/globals.css` to centralize the `text-xs uppercase tracking-[0.3em] font-medium text-[#b8893e]` rule, ensuring site-wide sync.
- **H2s**: Modified `.heading-lg` in `src/app/globals.css` to adopt the requested `font-heading text-5xl lg:text-6xl text-[#2e1e12] leading-tight font-normal` rules.

### Priority 7: Responsive & Verification
- Mobile stack transitions verified (Pricing tables format to vertical cards on iPhone 12 Mini viewports, floating pills hide seamlessly).
- Passed `npm run build` with zero errors. Fixed lint issues affecting `src/app/bridal/page.tsx` and `src/app/sitemap.ts`.

---

## Judgment Calls & Review Notes
1. **Typography Conversion**: You asked me to choose between leaving Salon H2s uppercase sans-serif vs converting them to Title Case Cormorant Garamond. I executed **Option A (Title Case Cormorant)** via a JavaScript title-case function mapping inside the `MenuSection` component so they match the rest of the site perfectly.
2. **"Our Menus" Background Decor**: You asked for a faint decorative SVG in the top right. Since no distinct standalone decorative SVG was exported in the current components, I utilized the existing brand-color geometric circle `rounded-bl-full` at a subtle 5% opacity. It looks very premium and matches the complimentary banner style.

## TODOs / Incomplete
- **Pre-existing Lint Errors**: 9 lingering lint warnings exist inside unmodified files (`src/app/gallery/page.tsx`, `layout.tsx`, etc.) complaining about `Unexpected any`. I **did not touch** these files because it violates Rule R1 and R3 (Do not change anything outside the specific fixes). I only resolved the lint errors that were directly introduced in the files modified during this pass.
