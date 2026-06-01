"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { X, ZoomIn } from "lucide-react";
import { usePlausible } from "next-plausible";

type Category = "All" | "Bridal" | "Engagement" | "Reception" | "Microblading";

const categories: Category[] = ["All", "Bridal", "Engagement", "Reception", "Microblading"];

export default function Gallery({ items = [] }: { items?: any[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const plausible = usePlausible();
  
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter((item) => item.category === activeCategory);

  useGSAP(() => {
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
          start: "top 70%",
        },
      }
    );
  }, { scope: sectionRef });

  const handleCategoryChange = (cat: Category) => {
    if (cat === activeCategory) return;
    
    gsap.to(gridRef.current?.children as HTMLCollection, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      onComplete: () => {
        setActiveCategory(cat);
        setTimeout(() => {
          gsap.fromTo(
            gridRef.current?.children as HTMLCollection,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 }
          );
        }, 50);
      }
    });
  };

  if (!items || items.length === 0) {
    return (
      <section id="gallery" className="py-24 md:py-32 bg-white text-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-accent tracking-widest text-sm font-medium mb-4 uppercase">Portfolio</h2>
          <h3 className="text-4xl font-heading mb-10 text-black">Our Brides</h3>
          <p className="text-black/60 italic font-heading">Gallery items will appear here once added in Sanity Studio.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-gold font-accent tracking-widest text-sm font-medium mb-4 uppercase">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading mb-10 text-black">
            Our Brides
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-accent text-sm tracking-wide pb-1 border-b-2 transition-colors ${
                  activeCategory === cat 
                    ? "border-gold text-black font-medium" 
                    : "border-transparent text-black/50 hover:text-black"
                }`}
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
              className="group relative overflow-hidden bg-ivory cursor-pointer break-inside-avoid rounded-sm shadow-sm"
              onClick={() => {
                setSelectedImage(item);
                plausible("gallery_open", { props: { image_title: item.title } });
              }}
            >
              <div 
                className={`relative w-full ${item.aspectRatio || "aspect-[3/4]"} bg-gradient-to-br from-[#E8D5B0]/40 to-[#8A8580]/20 transition-transform duration-700 ease-out group-hover:scale-105 overflow-hidden`}
              >
                {item.image && typeof item.image === 'string' && (
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                    className="object-cover" 
                  />
                )}
              </div>
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center pointer-events-none md:pointer-events-auto">
                <ZoomIn className="text-gold mb-3" size={32} strokeWidth={1.5} />
                <p className="text-white font-heading text-xl">{item.title}</p>
                <p className="text-white/80 font-accent text-xs uppercase tracking-widest mt-2">{item.category}</p>
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
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center pointer-events-none">
                <p className="font-heading text-2xl md:text-4xl text-white mb-2">
                  {selectedImage.title}
                </p>
                <p className="font-accent tracking-widest text-white/80 uppercase">
                  {selectedImage.category}
                </p>
             </div>
          </div>
        </div>
      )}
    </section>
  );
}
