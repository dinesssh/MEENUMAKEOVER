"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  _id?: string;
  name: string;
  occasion: string;
  rating?: number;
  text: string;
  image?: string;
}

function TestimonialCard({ review }: { review: Testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const initials = review.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <div className="bg-white rounded-[16px] px-[28px] py-[36px] border border-[#F0E6D3] shadow-[0_4px_20px_rgba(0,0,0,0.04)] min-w-[320px] max-w-[380px] shrink-0 hover:-translate-y-[6px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all duration-[350ms] ease-in-out flex flex-col group relative">
      
      {/* Subtle Quote Icon */}
      <span className="absolute top-4 left-6 text-[80px] text-[#B8860B] opacity-[0.12] font-serif leading-none pointer-events-none">&quot;</span>

      {/* Avatar */}
      <div 
        className="w-[56px] h-[56px] rounded-full flex items-center justify-center mx-auto mb-[12px] text-white font-sans font-bold text-[20px] shrink-0"
        style={{ background: 'linear-gradient(135deg, #B8860B, #D4A843)' }}
      >
        {initials}
      </div>

      {/* Name */}
      <p className="font-heading font-bold text-[18px] text-[#2C2C2C] text-center">
        {review.name}
      </p>

      {/* Service Label */}
      <p className="font-sans uppercase tracking-[2px] font-semibold text-[10px] text-[#B8860B] text-center mt-[4px]">
        {review.occasion}
      </p>

      {/* Star Rating */}
      <div className="flex gap-[3px] justify-center my-[12px]">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={cn((review.rating || 5) > i ? "text-[#B8860B] fill-[#B8860B]" : "text-[#E0D5C5] fill-[#E0D5C5]")} 
          />
        ))}
      </div>

      {/* Review Text */}
      <div className="text-center px-[8px] mt-auto">
        <p className={cn("font-sans font-normal text-[15px] text-[#4A4A4A] leading-[1.7]", !expanded && "line-clamp-5")}>
          {review.text}
        </p>
        {review.text.length > 150 && ( // Simple heuristic for long text
          <button 
            suppressHydrationWarning
            onClick={() => setExpanded(!expanded)}
            className="text-[#B8860B] font-sans text-[13px] font-medium mt-2 hover:underline focus:outline-none"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Testimonials({ reviews = [] }: { reviews?: Testimonial[] }) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  // Duplicate the entire set of testimonial cards inside the track
  const displayReviews = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="bg-[#FDF8F0] py-[80px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[48px]">
        <div className="text-center animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-[12px] font-sans text-[12px] tracking-[3px] uppercase font-semibold text-[#B8860B]">
            <span><span className="gold-number">4.8</span>★ GOOGLE RATING</span>
            <span className="hidden md:inline">·</span>
            <span><span className="gold-number">750+</span> HAPPY BRIDES</span>
            <span className="hidden md:inline">·</span>
            <span>TRUSTED ACROSS TAMIL NADU</span>
          </div>
          <h2 className="font-heading font-bold text-[42px] text-[#2C2C2C]">
            Words From Our Brides
          </h2>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="w-full testimonial-carousel animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="testimonial-track py-4">
          {displayReviews.map((review, idx) => (
            <TestimonialCard key={`${review._id || review.name}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
