"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { usePlausible } from "next-plausible";
import { H2, Eyebrow, BodyLg } from "@/components/ui/Typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  _id: string;
  title: string;
  category: string;
  image: string;
}

interface GalleryClientProps {
  items: GalleryItem[];
}

export default function GalleryClient({ items }: GalleryClientProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const plausible = usePlausible();
  
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const openLightbox = (index: number, item: GalleryItem) => {
    setIsImageLoading(true);
    setSelectedIndex(index);
    plausible("gallery_open", { props: { image_title: item.title } });
  };

  const goToNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < items.length - 1) {
      setIsImageLoading(true);
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, items.length]);

  const goToPrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setIsImageLoading(true);
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex]);

  // Touch Handlers for Mobile Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) goToNext();
    else if (diff < -50) goToPrev();
    
    touchStartX.current = null;
  };

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Header Animation (Fade up)
      gsap.fromTo(
        headerRef.current?.children as HTMLCollection,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );

      // Grid Items Staggered Reveal Animation
      gsap.fromTo(
        gridRef.current?.children as HTMLCollection,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.1, ease: "expo.out", scrollTrigger: { trigger: gridRef.current, start: "top 80%" } }
      );

      // Light Scroll Parallax on Images
      const cards = gsap.utils.toArray<HTMLElement>('.gallery-parallax-img');
      cards.forEach(img => {
        gsap.to(img, {
          y: "10%",
          ease: "none",
          scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true }
        });
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.fromTo(headerRef.current?.children as HTMLCollection, { opacity: 0 }, { opacity: 1, duration: MOTION.duration.fast, stagger: MOTION.stagger.tight, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
      gsap.fromTo(gridRef.current?.children as HTMLCollection, { opacity: 0 }, { opacity: 1, duration: MOTION.duration.fast, stagger: MOTION.stagger.tight, scrollTrigger: { trigger: gridRef.current, start: "top 80%" } });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  if (!items || items.length === 0) {
    return (
      <section id="gallery" className="py-24 md:py-32 bg-[#FDF8F0] text-[#2C2C2C] text-center border-t border-[#B8860B]/10">
        <div className="container mx-auto px-6">
          <Eyebrow className="mb-4 text-[#B8860B]">The Lookbook</Eyebrow>
          <H2 className="mb-10">Editorial Gallery</H2>
          <BodyLg className="italic">Gallery coming soon.</BodyLg>
        </div>
      </section>
    );
  }

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <section id="gallery" ref={sectionRef} className="py-24 lg:py-32 bg-[#FDF8F0] text-[#2C2C2C] relative border-t border-[#B8860B]/10 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B8860B]/5 via-transparent to-transparent opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6 text-[#B8860B] tracking-[0.3em]">The Editorial Showcase</Eyebrow>
            <H2 className="mb-6 font-heading text-[48px] md:text-[64px] leading-none">Bridal Masterpieces</H2>
            <BodyLg className="text-[#4A4A4A] font-light">
              A curated collection of our most breathtaking bridal transformations. Every look is an elegant, timeless expression of beauty tailored to the individual.
            </BodyLg>
          </div>
          <a href="https://instagram.com/meenumakeover" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 pb-2 border-b border-[#B8860B]/30 hover:border-[#B8860B] transition-colors duration-300">
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2C2C2C]">View Full Portfolio</span>
            <ArrowRight className="w-4 h-4 text-[#B8860B] transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* True CSS Masonry Gallery */}
        <div ref={gridRef} className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div 
              key={item._id}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              suppressHydrationWarning
              className="group relative overflow-hidden bg-[#111111] cursor-pointer rounded-sm shadow-sm transition-all duration-700 hover:shadow-[0_15px_40px_rgba(184,134,11,0.15)] focus:outline-none focus:ring-1 focus:ring-[#B8860B] aspect-[3/4] md:aspect-[4/5] break-inside-avoid mb-4 md:mb-6"
              onClick={() => openLightbox(index, item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index, item);
                }
              }}
            >
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-700 ease-out z-10 pointer-events-none" />
              
              {item.image && typeof item.image === 'string' && (
                <div className="absolute inset-[-10%] gallery-parallax-img transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.10]">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={index < 4 ? "eager" : "lazy"}
                    className="object-cover" 
                  />
                </div>
              )}
              
              {/* Luxury Text Reveal */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
                <p className="text-[#B8860B] font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium mb-2 drop-shadow-md">{item.category}</p>
                <h4 className="text-white font-heading text-2xl md:text-3xl drop-shadow-lg leading-tight">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Fullscreen Lightbox */}
      {selectedItem && selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-[#111111]/98 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-500"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white hover:rotate-90 transition-all duration-500 z-50 bg-black/20 p-4 rounded-full backdrop-blur-sm border border-white/5 hover:border-white/20 hover:bg-black/40"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>
          
          {/* Previous Button */}
          {selectedIndex > 0 && (
            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-300 z-50 bg-black/20 hover:bg-black/40 p-4 rounded-full backdrop-blur-sm border border-white/5 hover:border-white/20 hidden sm:block"
              onClick={goToPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Next Button */}
          {selectedIndex < items.length - 1 && (
            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-300 z-50 bg-black/20 hover:bg-black/40 p-4 rounded-full backdrop-blur-sm border border-white/5 hover:border-white/20 hidden sm:block"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          )}

          <div 
            className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center p-4 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative w-full h-[75vh] md:h-[85vh] flex items-center justify-center">
              
              {/* Luxury Gold Loading Animation */}
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-2 border-[#B8860B]/20 rounded-full" />
                    <div className="absolute inset-0 border-2 border-transparent border-t-[#B8860B] rounded-full animate-spin" />
                  </div>
                </div>
              )}

              {selectedItem.image && typeof selectedItem.image === 'string' && (
                <Image 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  fill 
                  className={cn("object-contain drop-shadow-2xl transition-opacity duration-500", isImageLoading ? "opacity-0" : "opacity-100")}
                  priority
                  onLoad={() => setIsImageLoading(false)}
                />
              )}
            </div>
            
            {/* Image Metadata */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-center bg-black/50 backdrop-blur-md px-10 py-5 rounded-sm border border-white/10 shadow-2xl transition-all duration-500 transform translate-y-0">
              <p className="text-[#B8860B] font-sans text-[9px] uppercase tracking-[0.4em] mb-3 font-semibold">{selectedItem.category}</p>
              <h3 className="text-white font-heading text-2xl md:text-3xl tracking-wide">{selectedItem.title}</h3>
              <p className="text-white/40 font-sans text-[10px] uppercase tracking-widest mt-4">
                {selectedIndex + 1} / {items.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
