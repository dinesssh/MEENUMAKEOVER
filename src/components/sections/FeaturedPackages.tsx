"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Check, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { H2, Eyebrow, BodyLg } from "@/components/ui/Typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { featuredPackages } from "@/data/featuredPackages";
import Image from "next/image";

export default function FeaturedPackages() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // Carousel Logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIdx = (prev + 1) % featuredPackages.length;
        scrollToIndex(nextIdx);
        return nextIdx;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToIndex = (index: number) => {
    if (!cardsContainerRef.current) return;
    const container = cardsContainerRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft - 16,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = () => {
    if (!cardsContainerRef.current) return;
    setShowSwipeHint(false); // Hide hint on interaction
    const container = cardsContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth > 400 ? 400 : container.offsetWidth * 0.85; 
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < featuredPackages.length) {
      setActiveIndex(newIndex);
    }
  };

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
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } 
        }
      );
      
      // Explore Cards Animation
      gsap.fromTo(
        exploreRef.current?.children as HTMLCollection,
        { scale: 0.95, opacity: 0, y: 20 },
        {
          scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: exploreRef.current, start: "top 85%" }
        }
      );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section id="packages" ref={sectionRef} className="py-16 lg:py-20 bg-[#F7F3ED] text-[#2B1D16]">
      <div className="section-container">
        
        {/* Header Section */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <Eyebrow className="mb-4 text-[#C8A15A]">OUR PACKAGES</Eyebrow>
          <H2 className="mb-5 text-[#2B1D16]">Bridal & Salon Services</H2>
          <BodyLg className="text-[#2B1D16]/70">
            Professional bridal and salon packages crafted for flawless beauty and confidence.
          </BodyLg>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => { setIsPaused(true); setShowSwipeHint(false); }}
          onTouchEnd={() => setIsPaused(false)}
        >
          {showSwipeHint && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none md:hidden bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm text-xs tracking-widest uppercase animate-pulse">
              Swipe to explore
            </div>
          )}

          <div 
            ref={cardsContainerRef} 
            onScroll={handleScroll}
            className="flex gap-4 lg:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth"
          >
            {featuredPackages.map((pkg, idx) => {
              // Highlight HD Bridal as MOST POPULAR
              const isPopular = pkg.id === "hd-bridal";
              return (
                <div 
                  key={pkg.id} 
                  className={cn(
                    "group relative bg-white rounded-sm p-8 lg:p-10 transition-all duration-500 flex flex-col h-full shrink-0 w-[85vw] sm:w-[65vw] md:w-[400px] snap-center border",
                    isPopular 
                      ? "border-[#C8A15A] shadow-[0_20px_50px_rgba(200,161,90,0.25)] ring-1 ring-[#C8A15A]/40 scale-[1.03] z-10" 
                      : "border-[#C8A15A]/20 hover:border-[#C8A15A]/50 hover:shadow-lg"
                  )}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#2B1D16]/60 font-semibold">
                        {pkg.category}
                      </span>
                      <span className={cn(
                        "relative border uppercase tracking-[0.15em] rounded-sm font-medium flex items-center gap-1.5",
                        isPopular 
                          ? "px-5 py-2 text-[10px] bg-gradient-to-r from-[#C8A15A] to-[#B8860B] text-white border-transparent shadow-md" 
                          : "px-4 py-1.5 text-[9px] bg-[#F7F3ED] text-[#C8A15A] border-[#C8A15A]/40"
                      )}>
                        {isPopular ? "⭐ MOST BOOKED" : pkg.badge}
                      </span>
                    </div>
                    
                    <h3 className={cn(
                      "font-heading mb-2 transition-colors",
                      isPopular 
                        ? "text-3xl lg:text-[38px] leading-tight text-[#B8860B] drop-shadow-sm font-medium" 
                        : "text-2xl lg:text-[32px] leading-tight text-[#2B1D16] group-hover:text-[#C8A15A]"
                    )}>
                      {pkg.title}
                    </h3>
                    
                    <div className="font-sans text-3xl lg:text-[34px] font-semibold text-[#B8860B] tracking-tight mb-8 mt-1">
                      {pkg.price}
                    </div>
                    
                    <div className="w-12 h-[1px] bg-[#C8A15A]/40 mb-8 group-hover:w-full transition-all duration-700" />
                    
                    <ul className="space-y-4 mb-10 flex-grow">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 group/item">
                          <Check className="text-[#C8A15A] shrink-0 mt-0.5 opacity-80" size={16} />
                          <p className="text-[#2B1D16]/80 text-sm lg:text-[15px] leading-relaxed font-sans">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={pkg.linkTarget}
                      onClick={(e) => { e.preventDefault(); document.querySelector(pkg.linkTarget)?.scrollIntoView({ behavior: "smooth" }); }}
                      className={cn(
                        "relative w-full text-center py-4 border tracking-[0.2em] text-[11px] rounded-sm font-sans uppercase font-medium transition-colors",
                        isPopular 
                          ? "bg-[#C8A15A] text-white border-[#C8A15A] hover:bg-[#B8860B]" 
                          : "bg-transparent text-[#2B1D16] border-[#C8A15A] hover:bg-[#C8A15A] hover:text-white"
                      )}
                    >
                      {pkg.buttonText}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="flex flex-col items-center justify-center mt-6 gap-3">
            <div className="flex gap-2">
              {featuredPackages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { scrollToIndex(idx); setActiveIndex(idx); }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300 focus:outline-none",
                    activeIndex === idx ? "bg-[#C8A15A] w-6" : "bg-[#C8A15A]/30 hover:bg-[#C8A15A]/60"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="font-sans text-[10px] tracking-widest text-[#2B1D16]/50">
              {activeIndex + 1} / {featuredPackages.length}
            </div>
          </div>
        </div>

        {/* Luxury Navigation Cards */}
        <div className="mt-16 lg:mt-24 flex flex-col items-center justify-center relative z-10 border-t border-[#C8A15A]/20 pt-16">
          <Eyebrow className="mb-10 text-[#C8A15A] tracking-[0.3em] uppercase text-xs">
            Continue Exploring
          </Eyebrow>
          
          <div ref={exploreRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl">
            {/* Bridal Nav Card */}
            <a href="/bridal-services" className="group relative h-80 md:h-[400px] w-full overflow-hidden rounded-sm flex flex-col items-center justify-center border border-[#C8A15A]/20 shadow-sm hover:shadow-[0_20px_50px_rgba(200,161,90,0.15)] hover:border-[#C8A15A]/60 transition-all duration-500 hover:-translate-y-2">
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
            <a href="/salon-services" className="group relative h-80 md:h-[400px] w-full overflow-hidden rounded-sm flex flex-col items-center justify-center border border-[#C8A15A]/20 shadow-sm hover:shadow-[0_20px_50px_rgba(200,161,90,0.15)] hover:border-[#C8A15A]/60 transition-all duration-500 hover:-translate-y-2">
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
