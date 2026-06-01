"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";


export default function Testimonials({ reviews = [] }: { reviews?: any[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!carouselRef.current || isHovered || reviews.length === 0) return;

    const interval = setInterval(() => {
      const container = carouselRef.current;
      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 350, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, reviews.length]);

  if (!reviews || reviews.length === 0) {
    return (
      <section id="testimonials" className="py-24 md:py-32 bg-ivory text-black border-t border-black/5 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-accent tracking-widest text-sm font-medium mb-4 uppercase">Love Notes</h2>
          <h3 className="text-4xl font-heading mb-6 text-black">Words From Our Brides</h3>
          <p className="text-black/60 italic font-heading">Reviews will appear here once added in Sanity Studio.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-ivory text-black overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-gold font-accent tracking-widest text-sm font-medium mb-4 uppercase">
            Love Notes
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading mb-6 text-black">
            Words From Our Brides
          </h3>
        </div>
      </div>

      <div 
        className="w-full px-6 md:px-12 lg:px-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:gap-8 pb-10 pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div 
              key={review._id || review.name}
              className="snap-center shrink-0 w-[85vw] sm:w-[350px] bg-white p-8 md:p-10 shadow-sm border border-black/5 rounded-sm flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full border-2 border-gold/30 bg-[#F5EFE6] flex-shrink-0 overflow-hidden">
                  {review.image && typeof review.image === 'string' && review.image !== '' && (
                    <Image 
                      src={review.image} 
                      alt={review.name} 
                      fill 
                      className="object-cover" 
                    />
                  )}
                </div>
                
                <div>
                  <h4 className="font-heading text-xl text-black">{review.name}</h4>
                  <p className="text-xs font-accent tracking-wide text-black/50 uppercase mt-1">
                    {review.occasion}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating || 5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="font-heading italic text-lg text-black/80 leading-relaxed flex-grow">
                &quot;{review.text}&quot;
              </p>

              <div className="mt-8 flex items-center gap-2 pt-4 border-t border-black/5">
                <CheckCircle size={14} className="text-green-600" />
                <span className="text-xs font-sans text-black/60">Verified Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
