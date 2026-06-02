"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { H2, Eyebrow, BodyLg } from "@/components/ui/Typography";
import { TYPE_TOKENS } from "@/lib/typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { featuredPackages } from "@/data/featuredPackages";
import Image from "next/image";

export default function FeaturedPackages() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

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
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" } 
        }
      );

      // Explore Cards Animation
      gsap.fromTo(
        exploreRef.current?.children as HTMLCollection,
        { scale: 0.95, opacity: 0, y: 20 },
        {
          scale: 1, opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: exploreRef.current, start: "top 85%" }
        }
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.fromTo(
        headerRef.current?.children as HTMLCollection,
        { opacity: 0 },
        { opacity: 1, duration: MOTION.duration.fast, stagger: MOTION.stagger.tight, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
      gsap.fromTo(
        cardsRef.current?.children as HTMLCollection,
        { opacity: 0 },
        { opacity: 1, duration: MOTION.duration.fast, stagger: MOTION.stagger.tight, scrollTrigger: { trigger: cardsRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        exploreRef.current?.children as HTMLCollection,
        { opacity: 0 },
        { opacity: 1, duration: MOTION.duration.fast, stagger: MOTION.stagger.tight, scrollTrigger: { trigger: exploreRef.current, start: "top 85%" } }
      );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section id="signature-experiences" ref={sectionRef} className="py-24 lg:py-32 bg-[#F7F3ED] text-[#2B1D16]">
      <div className="section-container">
        
        {/* Header Section */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <Eyebrow className="mb-4 text-[#C8A15A]">SIGNATURE COLLECTION</Eyebrow>
          <H2 className="mb-5 text-[#2B1D16]">Signature Experiences</H2>
          <BodyLg className="text-[#2B1D16]/70">
            Our most requested bridal and salon experiences, crafted for timeless beauty, confidence, and unforgettable moments.
          </BodyLg>
        </div>

        {/* Swipeable Mobile Carousel / 2x2 Desktop Grid */}
        <div 
          ref={cardsRef} 
          className="flex md:grid md:grid-cols-2 gap-6 lg:gap-10 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {featuredPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={cn(
                "group relative bg-white rounded-sm p-8 lg:p-12 shadow-sm transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden shrink-0 w-[85vw] sm:w-[65vw] md:w-auto snap-center border",
                pkg.isFeatured 
                  ? "border-[#C8A15A]/60 shadow-[0_10px_30px_rgba(200,161,90,0.15)] hover:shadow-[0_20px_50px_rgba(200,161,90,0.25)]" 
                  : "border-[#C8A15A]/20 hover:border-[#C8A15A]/60 hover:shadow-[0_20px_50px_rgba(43,29,22,0.08)]"
              )}
            >
              {/* Premium Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A15A]/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#2B1D16]/60 font-semibold">
                    {pkg.category}
                  </span>
                  <span className={cn(
                    "relative overflow-hidden bg-[#F7F3ED] text-[#C8A15A] border border-[#C8A15A]/40 uppercase tracking-[0.15em] rounded-sm font-medium shadow-sm transition-colors group-hover:bg-[#C8A15A] group-hover:text-white flex items-center gap-1.5",
                    pkg.isFeatured ? "px-5 py-2 text-[10px]" : "px-4 py-1.5 text-[9px]",
                    pkg.isFeatured && "badge-shine"
                  )}>
                    {pkg.isFeatured && <Sparkles size={12} className="shrink-0" />}
                    {pkg.badge}
                  </span>
                </div>
                
                <h3 className={cn(
                  "font-heading text-[#2B1D16] mb-3 group-hover:text-[#C8A15A] transition-colors duration-300",
                  pkg.isFeatured ? "text-3xl lg:text-[36px]" : "text-3xl lg:text-[34px]"
                )}>
                  {pkg.title}
                </h3>
                
                <div className="font-sans text-2xl lg:text-3xl font-medium text-[#C8A15A] tracking-tight mb-8">
                  {pkg.price}
                </div>
                
                <div className="w-12 h-[1px] bg-[#C8A15A]/40 mb-8 group-hover:w-full transition-all duration-700" />
                
                <ul className="space-y-4 mb-12 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <Check className="text-[#C8A15A] shrink-0 mt-0.5 opacity-80 group-hover/item:scale-110 transition-transform" size={16} />
                      <p className="text-[#2B1D16]/80 text-sm lg:text-[15px] leading-relaxed font-sans">{feature}</p>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={pkg.linkTarget}
                  onClick={(e) => { e.preventDefault(); document.querySelector(pkg.linkTarget)?.scrollIntoView({ behavior: "smooth" }); }}
                  className={cn(
                    "group/cta relative overflow-hidden w-full text-center py-4 border tracking-[0.2em] text-[11px] rounded-sm font-sans uppercase font-medium transition-colors",
                    pkg.isFeatured 
                      ? "bg-[#C8A15A] text-white border-[#C8A15A] hover:bg-[#B8860B]" 
                      : "bg-transparent text-[#2B1D16] border-[#C8A15A] hover:bg-[#C8A15A] hover:text-white"
                  )}
                >
                  <span className="relative z-10">{pkg.buttonText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Navigation Cards */}
        <div className="mt-20 lg:mt-32 flex flex-col items-center justify-center relative z-10 border-t border-[#C8A15A]/20 pt-20">
          <Eyebrow className="mb-10 text-[#C8A15A] tracking-[0.3em] uppercase text-xs">
            Continue Exploring
          </Eyebrow>
          
          <div ref={exploreRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl">
            {/* Bridal Nav Card */}
            <a href="/bridal" className="group relative h-80 md:h-[400px] w-full overflow-hidden rounded-sm flex flex-col items-center justify-center border border-[#C8A15A]/20 shadow-sm hover:shadow-[0_20px_50px_rgba(200,161,90,0.15)] hover:border-[#C8A15A]/60 transition-all duration-500 hover:-translate-y-2">
              <Image src="/bridal-nav.jpg" alt="Explore Bridal Services" fill className="object-cover object-center transition-transform duration-[4s] group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-[#111111]/60 group-hover:bg-[#111111]/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center text-center px-6 mt-auto pb-12 w-full">
                <span className="font-heading text-3xl lg:text-4xl text-white font-medium mb-3 drop-shadow-lg group-hover:text-[#C8A15A] transition-colors duration-300">Explore Bridal Services</span>
                <p className="font-sans text-sm text-white/80 font-light max-w-sm mb-8">
                  Discover bridal makeup experiences, luxury packages, and wedding-day artistry.
                </p>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-white border-b border-[#C8A15A]/40 pb-1 group-hover:border-[#C8A15A] transition-colors">
                  View Bridal Services <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
            
            {/* Salon Nav Card */}
            <a href="/salon" className="group relative h-80 md:h-[400px] w-full overflow-hidden rounded-sm flex flex-col items-center justify-center border border-[#C8A15A]/20 shadow-sm hover:shadow-[0_20px_50px_rgba(200,161,90,0.15)] hover:border-[#C8A15A]/60 transition-all duration-500 hover:-translate-y-2">
              <Image src="/salon-nav.jpg" alt="Explore Salon Services" fill className="object-cover object-center transition-transform duration-[4s] group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-[#111111]/60 group-hover:bg-[#111111]/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center text-center px-6 mt-auto pb-12 w-full">
                <span className="font-heading text-3xl lg:text-4xl text-white font-medium mb-3 drop-shadow-lg group-hover:text-[#C8A15A] transition-colors duration-300">Explore Salon Services</span>
                <p className="font-sans text-sm text-white/80 font-light max-w-sm mb-8">
                  Explore premium hair, beauty, and self-care treatments.
                </p>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-white border-b border-[#C8A15A]/40 pb-1 group-hover:border-[#C8A15A] transition-colors">
                  View Salon Services <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
