"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { X } from "lucide-react";
import { usePlausible } from "next-plausible";
import { H2, H3, Eyebrow, Body } from "@/components/ui/Typography";
import { TYPE_TOKENS } from "@/lib/typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Category = "All" | "Bridal" | "Engagement" | "Reception" | "Microblading" | "Mehendi";

const categories: Category[] = ["All", "Bridal", "Engagement", "Reception", "Mehendi", "Microblading"];

export interface GalleryItem {
  _id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio?: string;
}

interface GalleryClientProps {
  items: GalleryItem[];
}

export default function GalleryClient({ items }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const plausible = usePlausible();
  
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter((item) => item.category === activeCategory);

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        gridRef.current?.children as HTMLCollection,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
          duration: 0.2,
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

  const handleCategoryChange = (cat: Category) => {
    if (cat === activeCategory) return;
    
    const mm = gsap.matchMedia();
    const isReduced = mm.contexts.some(c => c.conditions?.reduce);
    
    gsap.to(gridRef.current?.children as HTMLCollection, {
      opacity: 0,
      y: isReduced ? 0 : 10,
      duration: 0.2,
      onComplete: () => {
        setActiveCategory(cat);
        setTimeout(() => {
          gsap.fromTo(
            gridRef.current?.children as HTMLCollection,
            { opacity: 0, y: isReduced ? 0 : 10 },
            { opacity: 1, y: 0, duration: 0.2, stagger: isReduced ? 0 : 0.05, ease: "power2.out" }
          );
        }, 50);
      }
    });
  };

  if (!items || items.length === 0) {
    return (
      <section id="gallery" className="py-24 md:py-32 bg-white text-black text-center">
        <div className="container mx-auto px-6">
          <Eyebrow className="mb-4">Portfolio</Eyebrow>
          <H2 className="mb-10">Our Brides</H2>
          <Body className="italic">Gallery coming soon.</Body>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <Eyebrow className="mb-4">Portfolio</Eyebrow>
          <H2 className="mb-10">Our Brides</H2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                suppressHydrationWarning
                onClick={() => handleCategoryChange(cat)}
                className={cn(TYPE_TOKENS.navLink, `relative pb-1 transition-colors duration-250 ${
                  activeCategory === cat 
                    ? "text-[#2e1e12] after:w-full" 
                    : "text-[#2e1e12]/50 hover:text-[#2e1e12] opacity-60 hover:opacity-100 after:w-0"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#b8893e] after:transition-all after:duration-[250ms] after:ease-out`)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item._id}
              suppressHydrationWarning
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              className="group block w-full relative overflow-hidden bg-ivory cursor-pointer break-inside-avoid rounded-md shadow-sm motion-safe:hover:shadow-[0_8px_30px_rgba(184,137,62,0.15)] focus:outline-none focus:ring-2 focus:ring-[#b8893e] transition-shadow duration-250 ease-out text-left"
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
              <div 
                className={`relative w-full ${item.aspectRatio || "aspect-[3/4]"} bg-gradient-to-br from-[#E8D5B0]/40 to-[#8A8580]/20 overflow-hidden`}
              >
                {item.image && typeof item.image === 'string' && (
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw" 
                    className="object-cover" 
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            aria-label="Close image gallery"
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative w-full max-w-4xl max-h-[80vh] aspect-[3/4] md:aspect-auto md:h-full bg-black/50"
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
