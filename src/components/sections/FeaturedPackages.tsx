"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Check } from "lucide-react";
import { H2, H4, Eyebrow, BodyLg, BodySm } from "@/components/ui/Typography";
import { TYPE_TOKENS } from "@/lib/typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { featuredPackages } from "@/data/featuredPackages";

export default function FeaturedPackages() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = setupReducedMotion();
    
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Header Animation
      gsap.fromTo(
        headerRef.current?.children as HTMLCollection,
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: MOTION.duration.slow, 
          stagger: 0.1, 
          ease: MOTION.easing.out,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } 
        }
      );
      
      // Cards Animation
      gsap.fromTo(
        cardsRef.current?.children as HTMLCollection,
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" } 
        }
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.fromTo(
        headerRef.current?.children as HTMLCollection,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: MOTION.duration.fast, 
          stagger: MOTION.stagger.tight,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } 
        }
      );
      
      gsap.fromTo(
        cardsRef.current?.children as HTMLCollection,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: MOTION.duration.fast, 
          stagger: MOTION.stagger.tight,
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" } 
        }
      );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section id="featured-packages" ref={sectionRef} className="py-20 lg:py-32 bg-[#f5efe6] text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <Eyebrow className="mb-4">SIGNATURE COLLECTION</Eyebrow>
          <H2 className="mb-5">Our Most-Loved Packages</H2>
          <BodyLg>
            A curated selection of bridal and salon experiences our clients return for, again and again.
          </BodyLg>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-xl border border-[#b8893e]/30 p-8 shadow-[0_4px_20px_rgba(184,137,62,0.08)] transition-all duration-250 ease-out hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs uppercase tracking-wider text-[#b8893e] font-semibold">
                  {pkg.category}
                </span>
                <span className="bg-[#b8893e] text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-medium">
                  {pkg.badge}
                </span>
              </div>
              
              <H4 className="text-[#2e1e12] mb-2">{pkg.title}</H4>
              <div className="text-3xl font-heading text-[#b8893e] mb-6">{pkg.price}</div>
              
              <div className="w-12 h-px bg-[#b8893e]/50 mb-6" />
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-[#b8893e] shrink-0 mt-0.5" size={18} />
                    <BodySm className="text-[#2e1e12]/70 leading-relaxed">{feature}</BodySm>
                  </li>
                ))}
              </ul>
              
              <a 
                href={pkg.linkTarget}
                onClick={(e) => { e.preventDefault(); document.querySelector(pkg.linkTarget)?.scrollIntoView({ behavior: "smooth" }); }}
                className={cn(TYPE_TOKENS.button, "w-full text-center bg-[#2e1e12] text-white py-4 hover:bg-[#b8893e] transition-colors")}
              >
                BOOK {pkg.category} →
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <BodySm as="div" className="text-[#2e1e12]/60 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span>Explore the full menu &mdash;</span>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <a href="/bridal" className="text-[#7a5520] font-semibold hover:underline underline-offset-4">VIEW BRIDAL PACKAGES</a>
              <span className="text-[#2e1e12]/30">|</span>
              <a href="/salon" className="text-[#7a5520] font-semibold hover:underline underline-offset-4">VIEW SALON SERVICES</a>
            </div>
          </BodySm>
        </div>
      </div>
    </section>
  );
}
