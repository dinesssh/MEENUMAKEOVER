# Meenu Makeover Animation System (v3)

## Centralized Tokens
Animations strictly utilize GSAP.
We enforce standardized durations and easing stored in `src/lib/motion.ts`.

### Setup Reduced Motion Context
`setupReducedMotion()` is used across all `useGSAP` hooks. This sets up a `matchMedia` context to handle `(prefers-reduced-motion)` globally per component.

```tsx
import { MOTION, setupReducedMotion } from "@/lib/motion";

useGSAP(() => {
  const mm = setupReducedMotion();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Elegant, slow translation + scale + opacity
    gsap.fromTo(element, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: MOTION.duration.slow, ease: MOTION.easing.out });
  });

  mm.add("(prefers-reduced-motion: reduce)", () => {
    // Fast fade only, NO scale or translation
    gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: MOTION.duration.fast });
  });

  return () => mm.revert();
}, { scope: ref });
```

### Motion Presets
- **duration**: `fast` (0.2s), `base` (0.4s), `slow` (0.6s)
- **easing**: `out` (`power3.out`), `inOut` (`power3.inOut`)
- **stagger**: `tight` (0.06s), `base` (0.1s), `loose` (0.15s)

### Features
- Scroll reveals via GSAP ScrollTrigger
- Gallery Category changing (FLIP alternative via targeted translation & scale)
- Gallery Item Lightbox reveal
- Hover transitions combining Tailwind and GSAP for scale + border + overlay text.
- Testimonials auto-rotation pauses on interaction and halts on reduced-motion.
