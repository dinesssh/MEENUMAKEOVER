"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { X } from "lucide-react";
import { usePlausible } from "next-plausible";
import { H2, Eyebrow, Body } from "@/components/ui/Typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";

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
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const plausible = usePlausible();
  
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        gridRef.current?.children as HTMLCollection,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
        }
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.fromTo(
        gridRef.current?.children as HTMLCollection,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
        }
      );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  if (!items || items.length === 0) {
    return (
      <section id="gallery" className="py-24 md:py-32 bg-white text-black text-center border-y border-black/5">
        <div className="container mx-auto px-6">
          <Eyebrow className="mb-4">Bridal Gallery</Eyebrow>
          <H2 className="mb-10">Our Brides</H2>
          <Body className="italic">Gallery coming soon.</Body>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-white text-black border-y border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16 lg:mb-24">
          <Eyebrow className="mb-4">The Editorial Showcase</Eyebrow>
          <H2 className="mb-6">Bridal Gallery</H2>
          <Body className="max-w-2xl mx-auto text-[#2e1e12]/60">
            A curated collection of our most stunning bridal transformations. Every look is an elegant, timeless expression of beauty.
          </Body>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {items.map((item) => (
            <div 
              key={item._id}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              suppressHydrationWarning
              className="group relative overflow-hidden bg-[#ede4d3] cursor-pointer rounded-sm shadow-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(46,30,18,0.1)] focus:outline-none focus:ring-2 focus:ring-[#b8893e]"
              onClick={() => {
                setSelectedImage(item);
                plausible("gallery_open", { props: { image_title: item.title } });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(item);
                  plausible("gallery_open", { props: { image_title: item.title } });
                }
              }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
                {/* Premium Hover Zoom & Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-[800ms] ease-out z-10" />
                
                {item.image && typeof item.image === 'string' && (
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05]" 
                  />
                )}
                
                {/* Hover Text Reveal */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[600ms] ease-out z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <h4 className="text-[#f5efe6] font-heading text-2xl mb-1.5">{item.title}</h4>
                  <div className="w-10 h-[1px] bg-[#b8893e] mb-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-[800ms] delay-100 origin-left" />
                  <p className="text-[#b8893e] font-sans text-[10px] uppercase tracking-[0.2em]">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            aria-label="Close image gallery"
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl h-full aspect-[4/5] md:aspect-auto"
            onClick={(e) => e.stopPropagation()}
          >
             {selectedImage.image && typeof selectedImage.image === 'string' && (
               <Image 
                 src={selectedImage.image} 
                 alt={selectedImage.title} 
                 fill 
                 className="object-contain" 
               />
             )}
          </div>
        </div>
      )}
    </section>
  );
}
