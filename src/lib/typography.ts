/**
 * Meenu Makeover — Luxury Typography System
 * Implements a strict 1.250 (Major Third) scale.
 */

export const TYPE_TOKENS = {
  // --- DISPLAY TIER ---
  displayXl: "font-heading text-[42px] md:text-[64px] lg:text-[80px] font-normal leading-[1.05] tracking-tight text-[#2C2C2C]",

  // --- HEADING TIER ---
  headingXl: "font-heading text-[32px] md:text-[48px] lg:text-[56px] font-normal leading-[1.15] text-[#2C2C2C]",
  headingLg: "font-heading text-[28px] md:text-[36px] lg:text-[42px] font-normal leading-[1.2] text-[#2C2C2C]",
  headingMd: "font-heading text-[22px] md:text-[28px] lg:text-[34px] font-normal leading-[1.25] text-[#2C2C2C]",
  headingSm: "font-sans text-[14px] font-semibold uppercase tracking-[0.15em] leading-[1.5] text-[#2C2C2C]",

  // --- EYEBROW TIER ---
  eyebrow: "text-[11px] md:text-xs uppercase tracking-[0.3em] font-medium text-[#b8893e]",

  // --- BODY TIER ---
  bodyLg: "font-sans text-[18px] md:text-[20px] font-light leading-[1.6] text-[#4A4A4A]",
  body: "font-sans text-[16px] md:text-[18px] font-light leading-[1.7] text-[#4A4A4A]",
  bodySm: "font-sans text-[14px] font-light leading-[1.6] text-[#4A4A4A]",

  // --- UTILITY TIER ---
  caption: "font-sans text-[13px] font-light italic leading-[1.5]",
  price: "font-sans text-[32px] md:text-[36px] font-medium tabular-nums text-[#B8860B] leading-[1.1]",
  tag: "font-sans text-[10px] font-medium uppercase tracking-[0.2em] leading-[1.2]",
  navLink: "font-sans text-[12px] md:text-[13px] font-medium uppercase tracking-[0.2em] leading-[1.5]",
  button: "text-[12px] md:text-[13px] uppercase tracking-[0.18em] font-medium",

  // --- MODIFIERS ---
  italicEmphasis: "italic text-[#b8893e] tracking-normal font-normal",
} as const;

export type TypographyToken = keyof typeof TYPE_TOKENS;
