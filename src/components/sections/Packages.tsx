"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { H2, H3, Eyebrow, BodyLg, Body } from "@/components/ui/Typography";
import { TYPE_TOKENS } from "@/lib/typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Packages() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        cardsRef.current?.children as HTMLCollection,
        { y: 48, opacity: 0 },
        {
          y: 0, opacity: 1, duration: MOTION.duration.slow, stagger: 0.18, ease: MOTION.easing.out,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.fromTo(
        cardsRef.current?.children as HTMLCollection,
        { opacity: 0 },
        {
          opacity: 1, duration: MOTION.duration.fast, stagger: MOTION.stagger.tight,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section id="packages" ref={sectionRef} className="py-20 lg:py-32 bg-[#f5efe6] text-black border-y border-black/5">
      <div className="section-container">

        <div className="text-center mb-14 lg:mb-20">
          <Eyebrow className="mb-6">Investment & Care</Eyebrow>
          <H2 className="mb-5">Our Menus</H2>
          <BodyLg className="max-w-2xl mx-auto">
            Discover our comprehensive pricing for luxury bridal packages and premium salon services. Transparent, straightforward, and tailored to you.
          </BodyLg>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-4xl mx-auto items-stretch">
          {/* Bridal Card */}
          <Link href="/bridal" className="group flex flex-col relative bg-white border border-black/10 px-10 py-12 lg:px-14 lg:py-12 transition-all duration-500 hover:shadow-2xl hover:border-[#b8893e] hover:-translate-y-2 overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b8893e]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            <H3 className="text-[#2e1e12] mb-4">Bridal Packages</H3>
            <Body className="text-[#2e1e12]/60 mb-8 flex-grow">
              Explore our Krylon, Ultra HD, Airbrush, and Celebrity bridal packages, complete with complimentary jewelry and saree draping.
            </Body>
            <div className={cn(TYPE_TOKENS.navLink, "flex items-center gap-3 text-[#7a5520] font-bold mt-auto")}>
              View Bridal Menu
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Salon Card */}
          <Link href="/salon" className="group flex flex-col relative bg-white border border-black/10 px-10 py-12 lg:px-14 lg:py-12 transition-all duration-500 hover:shadow-2xl hover:border-[#b8893e] hover:-translate-y-2 overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b8893e]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            <H3 className="text-[#2e1e12] mb-4">Salon Services</H3>
            <Body className="text-[#2e1e12]/60 mb-8 flex-grow">
              Explore our full salon menu including haircuts, global coloring, keratin treatments, waxing, bleach, and hair care combos.
            </Body>
            <div className={cn(TYPE_TOKENS.navLink, "flex items-center gap-3 text-[#7a5520] font-bold mt-auto")}>
              View Salon Menu
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
