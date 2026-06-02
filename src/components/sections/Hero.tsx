"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Display, Eyebrow, BodyLg, Body, Highlight, H4 } from "@/components/ui/Typography";
import { TYPE_TOKENS } from "@/lib/typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const trustItems = [
  { value: "500+",    label: "Brides Styled" },
  { value: "4.9★",   label: "Client Rating" },
  { value: "Premium", label: "Products Used" },
  { value: "Pan TN",  label: "Travel Available" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ delay: 0.9 });

      if (leftRef.current) {
        tl.fromTo(
          Array.from(leftRef.current.children),
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.11, ease: MOTION.easing.out }
        );
      }
      tl.fromTo(
        rightRef.current,
        { opacity: 0, x: 36, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 1.3, ease: MOTION.easing.out },
        "-=0.75"
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      const tl = gsap.timeline({ delay: 0.2 });

      if (leftRef.current) {
        tl.fromTo(
          Array.from(leftRef.current.children),
          { opacity: 0 },
          { opacity: 1, duration: MOTION.duration.base, stagger: MOTION.stagger.tight }
        );
      }
      tl.fromTo(
        rightRef.current,
        { opacity: 0 },
        { opacity: 1, duration: MOTION.duration.base },
        "-=0.2"
      );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="hero"
      /* Fill viewport minus 80px navbar on desktop, 64px on mobile */
      className="relative w-full flex items-center bg-gradient-to-br from-[#f5efe6] via-[#f5efe6] to-[#ede4d3] overflow-hidden"
      style={{ minHeight: "calc(100vh - 80px)", paddingTop: 80 }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[55%] h-full opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 85% 25%, rgba(184,137,62,0.12) 0%, transparent 55%)",
        }}
      />

      {/* ── Grid — same container as Navbar ── */}
      <div className="section-container w-full py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">

        {/* ═══════════════ LEFT COLUMN ═══════════════ */}
        <div ref={leftRef} className="flex flex-col pb-28 lg:pb-0">

          {/* 1 · Eyebrow label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block h-px w-8 bg-[#b8893e] flex-shrink-0" />
            <Eyebrow>
              Madurai&apos;s Luxury Bridal Studio
            </Eyebrow>
          </div>

          {/* 2 · Brand subtitle */}
          <Eyebrow className="text-[#b8893e]/70 mb-5 tracking-[0.22em] text-[11px]">
            Meenu Makeover
          </Eyebrow>

          {/* 3 · Headline */}
          <Display className="text-[#2e1e12] mb-7">
            Crafting
            <br />
            <Highlight>Timeless</Highlight>
            <br />
            Bridal Beauty.
          </Display>

          {/* 4 · Supporting copy */}
          <div className="border-l-2 border-[#b8893e]/20 pl-5 mb-10 max-w-md">
            <BodyLg className="text-[#2e1e12]/75 italic mb-3">
              For the most important day of your life.
            </BodyLg>
            <Body className="text-[#2e1e12]/55">
              Premium bridal makeup, HD styling, and luxury beauty experiences
              tailored for the modern Tamil bride.
            </Body>
          </div>

          {/* 5 · CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I%27m%20interested%20in%20booking%20a%20bridal%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(TYPE_TOKENS.button, "group relative inline-flex items-center justify-center gap-2 h-14 px-8 bg-[#4a2f1c] text-[#f5efe6] overflow-hidden shadow-[0_8px_32px_rgba(74,47,28,0.25)] hover:shadow-[0_12px_40px_rgba(74,47,28,0.35)] transition-shadow")}
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-[#2e1e12] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </a>

            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(TYPE_TOKENS.button, "inline-flex items-center justify-center h-14 px-8 border border-[#b8893e]/50 text-[#b8893e] hover:border-[#b8893e] hover:bg-[#b8893e]/8 transition-all duration-300")}
            >
              View Portfolio
            </a>
          </div>

          {/* 6 · Trust indicators */}
          <div className="pt-7 border-t border-[#b8893e]/12 grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-6">
            {trustItems.map((item) => (
              <div key={item.label}>
                <H4 className="text-[#2e1e12] mb-1">
                  {item.value}
                </H4>
                <Eyebrow className="text-[#b8893e]/80 text-[9px] tracking-widest">
                  {item.label}
                </Eyebrow>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════ RIGHT COLUMN ═══════════════ */}
        <div
          ref={rightRef}
          className="relative w-full self-stretch flex items-center justify-center lg:justify-end min-h-[420px] md:min-h-[520px]"
        >
          <div className="absolute inset-0 rounded-[60px_60px_16px_16px] overflow-hidden border border-white/50 shadow-[0_40px_80px_rgba(139,107,74,0.14)] group">
            <Image
              src="/hero-studio.webp"
              alt="Luxury Bridal Makeup Products"
              fill
              priority
              fetchPriority="high"
              className="object-cover object-center transition-transform duration-[4s] ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ede4d3]/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
