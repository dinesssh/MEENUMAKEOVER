"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Check, ArrowRight } from "lucide-react";
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
    <section id="featured-packages" ref={sectionRef} className="py-20 lg:py-24 bg-[#f5efe6] text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <Eyebrow className="mb-4">SIGNATURE COLLECTION</Eyebrow>
          <H2 className="mb-5">Our Most-Loved Packages</H2>
          <BodyLg>
            A curated selection of bridal and salon experiences our clients return for, again and again.
          </BodyLg>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="group relative bg-white rounded-sm border border-[#b8893e]/20 p-10 lg:p-12 shadow-[0_10px_40px_rgba(46,30,18,0.03)] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(184,137,62,0.15)] hover:border-[#b8893e]/40 flex flex-col h-full overflow-hidden"
            >
              {/* Premium Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b8893e]/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#2e1e12]/60 font-semibold">
                    {pkg.category}
                  </span>
                  <span className={cn(
                    "relative overflow-hidden bg-[#f5efe6] text-[#b8893e] border border-[#b8893e]/30 text-[9px] uppercase tracking-[0.15em] px-4 py-1.5 rounded-full font-medium shadow-sm",
                    pkg.badge === "Most Popular" && "badge-shine"
                  )}>
                    {pkg.badge}
                  </span>
                </div>
                
                <H4 className="text-[#2e1e12] mb-4 group-hover:text-[#b8893e] transition-colors duration-300 font-heading text-2xl lg:text-[28px]">{pkg.title}</H4>
                <div className="gold-number text-5xl lg:text-6xl leading-none mb-8 tracking-tight">{pkg.price}</div>
                
                <div className="w-16 h-px bg-[#b8893e]/40 mb-10" />
                
                <ul className="space-y-4 mb-12 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-[#b8893e] shrink-0 mt-0.5 opacity-80" size={14} />
                      <p className="text-[#2e1e12]/80 text-[13px] leading-relaxed font-light tracking-wide">{feature}</p>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={pkg.linkTarget}
                  onClick={(e) => { e.preventDefault(); document.querySelector(pkg.linkTarget)?.scrollIntoView({ behavior: "smooth" }); }}
                  className={cn(TYPE_TOKENS.button, "group/cta relative overflow-hidden w-full text-center bg-transparent text-[#2e1e12] py-5 border border-[#2e1e12] tracking-[0.2em] text-[11px]")}
                >
                  <span className="relative z-10 group-hover/cta:text-[#f5efe6] transition-colors duration-[400ms]">RESERVE EXPERIENCE</span>
                  <span className="absolute inset-0 bg-[#2e1e12] scale-y-0 origin-bottom group-hover/cta:scale-y-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 flex flex-col items-center justify-center relative z-10">
          <Eyebrow className="mb-10 text-[#b8893e]/80 tracking-[0.3em] uppercase text-xs">
            Continue Exploring
          </Eyebrow>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
            <a href="/bridal" className="group flex items-center gap-4 text-[#2e1e12] hover:text-[#b8893e] transition-colors duration-300">
              <span className="font-heading text-3xl lg:text-4xl font-medium tracking-tight">Bridal Packages</span>
              <ArrowRight className="w-6 h-6 opacity-50 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300" />
            </a>
            
            <div className="w-12 h-px sm:w-px sm:h-12 bg-[#b8893e]/20" />
            
            <a href="/salon" className="group flex items-center gap-4 text-[#2e1e12] hover:text-[#b8893e] transition-colors duration-300">
              <span className="font-heading text-3xl lg:text-4xl font-medium tracking-tight">Salon Services</span>
              <ArrowRight className="w-6 h-6 opacity-50 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
