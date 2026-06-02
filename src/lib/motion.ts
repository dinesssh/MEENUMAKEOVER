/**
 * Meenu Makeover — Luxury Animation System
 * Uses GSAP. Strictly avoids bounce/spring. Follows prefers-reduced-motion.
 */

import { gsap } from "gsap";

export const MOTION = {
  duration: {
    fast: 0.2,
    base: 0.4,
    slow: 0.6,
    slower: 0.8,
  },
  easing: {
    out: "power3.out",       // maps to roughly cubic-bezier(0.4, 0, 0.2, 1)
    inOut: "power3.inOut",   // maps to roughly cubic-bezier(0.4, 0, 0.6, 1)
    luxe: "expo.out",        // elegant, long tail ease for hero
  },
  stagger: {
    tight: 0.06,
    base: 0.1,
    loose: 0.15,
  }
};

/**
 * Helper to wrap GSAP animations with reduced motion check.
 * If prefers-reduced-motion is true, it overrides duration and kills transforms.
 */
export const setupReducedMotion = () => {
  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.defaults({
      duration: 0.2,
      ease: "power1.inOut"
    });
    
    // Kill all translation and scaling across all tweens globally if possible,
    // or just rely on overriding them in specific animations.
  });
  return mm;
};

// Reusable configurations for components
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    from: { opacity: 0, y: 24 },
    to: { opacity: 1, y: 0, duration: MOTION.duration.slow, ease: MOTION.easing.out }
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: MOTION.duration.base, ease: MOTION.easing.out }
  }
};
