"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowRight, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Display, Eyebrow, BodyLg, Highlight } from "@/components/ui/Typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const trustItems = [
  { value: "750", suffix: "+", label: "HAPPY BRIDES" },
  { value: "10", suffix: "+", label: "YEARS EXPERIENCE" },
  { value: "4.9", suffix: "★", label: "CLIENT RATING" },
  { value: "100", suffix: "%", label: "PREMIUM PRODUCTS" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const bgOverlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ delay: 0.8 });

      // Image reveal
      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
      }

      // Mobile background overlay fade
      if (bgOverlayRef.current) {
        gsap.fromTo(bgOverlayRef.current, { opacity: 0 }, { opacity: 0.6, duration: 2, ease: "power2.out" });
      }

      if (leftRef.current) {
        tl.fromTo(
          Array.from(leftRef.current.children),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
        );
      }
      
      // Parallax effect on scroll
      gsap.to(rightRef.current, {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
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
      if (rightRef.current) {
        gsap.fromTo(rightRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
      }
    });

    // Count up animation for stats
    const stats = gsap.utils.toArray<HTMLElement>('.stat-number');
    stats.forEach(stat => {
      const target = parseFloat(stat.dataset.target || "0");
      if (target > 0) {
        gsap.fromTo(stat, 
          { textContent: 0 }, 
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: target % 1 === 0 ? 1 : 0.1 },
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );
      } else {
        stat.textContent = stat.dataset.target || "";
      }
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full flex items-center bg-[#111111] overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: 80 }}
    >
      {/* ═══════════════ BACKGROUND IMAGE (MOBILE ONLY) ═══════════════ */}
      <div className="absolute inset-0 lg:hidden pointer-events-none z-0">
        <Image
          src="/hero-bride.png"
          alt="Meenu Makeover Bridal Model"
          fill
          priority
          className="object-cover object-top opacity-50"
        />
        <div ref={bgOverlayRef} className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />
      </div>

      {/* ── Grid ── */}
      <div className="section-container relative z-10 w-full py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center h-full">

        {/* ═══════════════ LEFT COLUMN ═══════════════ */}
        <div ref={leftRef} className="flex flex-col pb-20 lg:pb-0 pt-32 lg:pt-0">

          {/* 1 · Eyebrow label */}
          <div className="flex items-center gap-4 mb-8">
            <span className="block h-[1px] w-12 bg-[#D4AF37] flex-shrink-0 opacity-80" />
            <Eyebrow className="text-[#D4AF37] tracking-[0.4em] font-medium text-[10px] sm:text-[11px]">
              10+ YEARS OF BRIDAL EXCELLENCE
            </Eyebrow>
          </div>

          {/* 2 · Headline */}
          <Display className="text-white mb-8 leading-[1.05] tracking-tight">
            Luxury Bridal
            <br />
            <Highlight className="text-[#D4AF37]">Artistry</Highlight>
            <br />
            by Meenu.
          </Display>

          {/* 3 · Supporting copy */}
          <div className="border-l border-[#D4AF37]/30 pl-6 mb-12 max-w-[420px]">
            <p className="font-heading text-xl lg:text-[24px] text-white/90 italic mb-3 leading-snug">
              750+ Brides Styled Across Tamil Nadu.
            </p>
            <p className="font-sans text-[15px] lg:text-[16px] text-white/70 leading-relaxed font-light">
              Experience the pinnacle of bridal styling with personalized luxury care, designed exclusively for the modern bride in Madurai.
            </p>
          </div>

          {/* 4 · CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-14">
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden bg-[#D4AF37] text-white font-sans font-medium text-[12px] uppercase tracking-[0.2em] px-8 py-4 rounded-sm flex items-center justify-center transition-transform hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center">
                Book Consultation
                <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>

            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative border border-[#D4AF37]/50 text-white font-sans font-medium text-[12px] uppercase tracking-[0.2em] px-8 py-4 rounded-sm flex items-center justify-center overflow-hidden"
            >
              <span className="relative z-10 transition-colors group-hover:text-[#111111]">View Gallery</span>
              <div className="absolute inset-0 bg-[#D4AF37] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>

          {/* 5 · Trust indicators - Premium Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {trustItems.map((item, idx) => (
              <div key={item.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-4 lg:p-5 flex flex-col justify-center transition-colors hover:bg-white/10 hover:border-[#D4AF37]/30">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-sans font-medium text-2xl lg:text-3xl text-[#D4AF37] tabular-nums stat-number" data-target={item.value === "All" ? 0 : item.value}>
                    {item.value}
                  </span>
                  <span className="font-sans font-medium text-lg lg:text-xl text-[#D4AF37]">{item.suffix}</span>
                </div>
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-white/60">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* ═══════════════ RIGHT COLUMN (DESKTOP) ═══════════════ */}
        <div className="hidden lg:flex relative w-full h-[85vh] items-center justify-end z-10">
          <div ref={rightRef} className="relative w-[95%] h-[90%] rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <Image
              src="/hero-bride.png"
              alt="Luxury Bridal Styling"
              fill
              priority
              className="object-cover object-center"
              sizes="45vw"
            />
            {/* Inner glow/shadow */}
            <div className="absolute inset-0 border border-white/10 rounded-sm pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
