/**
 * Meenu Makeover — Luxury Typography System
 * Implements a strict 1.250 (Major Third) scale.
 */

export const TYPE_TOKENS = {
  // --- DISPLAY TIER ---
  displayXl: "font-heading text-5xl md:text-7xl lg:text-[96px] font-normal leading-[0.95] tracking-[-0.02em]",

  // --- HEADING TIER ---
  headingXl: "font-heading text-5xl lg:text-6xl font-normal leading-tight text-[#2a2520]",
  headingLg: "font-heading text-3xl md:text-[44px] font-normal leading-[1.1] text-[#2a2520]",
  headingMd: "font-heading text-[22px] md:text-[28px] font-medium leading-[1.2] text-[#2a2520]",
  headingSm: "font-sans text-[14px] font-semibold uppercase tracking-[0.15em] leading-[1.5] text-[#2a2520]",

  // --- EYEBROW TIER ---
  eyebrow: "text-xs uppercase tracking-[0.3em] font-medium text-[#b8893e]",

  // --- BODY TIER ---
  bodyLg: "font-sans text-[18px] md:text-[20px] font-normal leading-[1.6] text-[#2a2520]/80",
  body: "font-sans text-base lg:text-[17px] leading-[1.7] text-[#2a2520]/80",
  bodySm: "font-sans text-[14px] font-normal leading-[1.5] text-[#2a2520]/80",

  // --- UTILITY TIER ---
  caption: "font-sans text-[13px] font-normal italic leading-[1.4]",
  price: "font-heading text-[32px] md:text-[40px] font-medium tabular-nums text-[#b8893e] leading-[1.1]",
  tag: "font-sans text-[10px] font-semibold uppercase tracking-[0.2em] leading-[1.2]",
  navLink: "font-sans text-[13px] font-medium uppercase tracking-[0.2em] leading-[1.5]",
  button: "text-[13px] uppercase tracking-[0.18em] font-semibold",

  // --- MODIFIERS ---
  italicEmphasis: "italic text-[#b8893e] tracking-[0.02em] font-normal",
} as const;

export type TypographyToken = keyof typeof TYPE_TOKENS;
