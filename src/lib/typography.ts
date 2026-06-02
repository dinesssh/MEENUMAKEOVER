/**
 * Meenu Makeover — Luxury Typography System
 * Implements a strict 1.250 (Major Third) scale.
 */

export const TYPE_TOKENS = {
  // --- DISPLAY TIER ---
  displayXl: "font-heading text-5xl md:text-7xl lg:text-[96px] font-normal leading-[0.95] tracking-[-0.02em]",

  // --- HEADING TIER ---
  headingXl: "font-heading text-5xl lg:text-6xl font-bold leading-tight text-[#2C2C2C]",
  headingLg: "font-heading text-3xl md:text-[44px] font-bold leading-[1.1] text-[#2C2C2C]",
  headingMd: "font-heading text-[22px] md:text-[28px] font-bold leading-[1.2] text-[#2C2C2C]",
  headingSm: "font-sans text-[14px] font-semibold uppercase tracking-[0.15em] leading-[1.5] text-[#2C2C2C]",

  // --- EYEBROW TIER ---
  eyebrow: "text-xs uppercase tracking-[0.3em] font-medium text-[#b8893e]",

  // --- BODY TIER ---
  bodyLg: "font-sans text-[18px] md:text-[20px] font-normal leading-[1.6] text-[#4A4A4A]",
  body: "font-sans text-base lg:text-[17px] leading-[1.7] text-[#4A4A4A]",
  bodySm: "font-sans text-[14px] font-normal leading-[1.5] text-[#4A4A4A]",

  // --- UTILITY TIER ---
  caption: "font-sans text-[13px] font-normal italic leading-[1.4]",
  price: "font-sans text-[36px] font-bold tabular-nums text-[#B8860B] leading-[1.1]",
  tag: "font-sans text-[10px] font-semibold uppercase tracking-[0.2em] leading-[1.2]",
  navLink: "font-sans text-[13px] font-medium uppercase tracking-[0.2em] leading-[1.5]",
  button: "text-[13px] uppercase tracking-[0.18em] font-semibold",

  // --- MODIFIERS ---
  italicEmphasis: "italic text-[#b8893e] tracking-[0.02em] font-normal",
} as const;

export type TypographyToken = keyof typeof TYPE_TOKENS;
