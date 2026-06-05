"use client";

import { useState, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";
import { H2, Eyebrow, BodyLg } from "@/components/ui/Typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";

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
    <div className="bg-white rounded-sm px-8 py-10 border border-[#B8860B]/20 shadow-sm min-w-[340px] max-w-[420px] shrink-0 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(184,134,11,0.08)] hover:border-[#B8860B]/40 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col group relative overflow-hidden h-full">
      
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Verified Google Review Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-sm shadow-sm pointer-events-none z-10">
        <svg viewBox="0 0 48 48" width="14" height="14">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
        </svg>
        <span className="font-sans text-[10px] font-medium text-gray-700">Google Review</span>
      </div>

      <div className="flex items-center gap-5 mb-6 relative z-10">
        {/* Avatar */}
        <div 
          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-sans font-medium text-xl shrink-0 shadow-inner"
          style={{ background: 'linear-gradient(135deg, #2C2C2C, #111111)' }}
        >
          {initials}
        </div>
        <div>
          {/* Name */}
          <h3 className="font-heading font-medium text-xl text-[#2C2C2C]">
            {review.name}
          </h3>
          {/* Service Label */}
          <p className="font-sans uppercase tracking-[0.2em] font-medium text-[10px] text-[#B8860B] mt-1">
            {review.occasion}
          </p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-6 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={cn((review.rating || 5) > i ? "text-[#B8860B] fill-[#B8860B]" : "text-[#E5E5E5] fill-[#E5E5E5]")} 
          />
        ))}
      </div>

      {/* Review Text */}
      <div className="mt-auto relative z-10">
        <p className={cn("font-sans font-light text-[15px] text-[#4A4A4A] leading-[1.8] tracking-wide", !expanded && "line-clamp-6")}>
          &quot;{review.text}&quot;
        </p>
        {review.text.length > 200 && ( 
          <button 
            suppressHydrationWarning
            onClick={() => setExpanded(!expanded)}
            className="text-[#B8860B] font-sans text-[11px] uppercase tracking-[0.1em] font-semibold mt-4 hover:text-[#2C2C2C] transition-colors focus:outline-none"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Testimonials({ reviews = [] }: { reviews?: Testimonial[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        headerRef.current?.children as HTMLCollection,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.fromTo(
        headerRef.current?.children as HTMLCollection,
        { opacity: 0 },
        { opacity: 1, duration: MOTION.duration.fast, stagger: MOTION.stagger.tight, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  if (!reviews || reviews.length === 0) {
    return null;
  }

  // Duplicate the entire set of testimonial cards inside the track for seamless loop
  const displayReviews = [...reviews, ...reviews];

  return (
    <section id="testimonials" ref={sectionRef} className="bg-white py-16 lg:py-20 overflow-hidden border-t border-[#B8860B]/10">
      <div className="section-container mb-10 lg:mb-12">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-6 font-sans text-[10px] tracking-[0.3em] uppercase font-semibold text-[#B8860B]">
            <span className="flex items-center gap-1.5"><Star size={12} className="fill-[#B8860B]" /> 5.0 GOOGLE RATING</span>
            <span className="hidden md:inline opacity-40">|</span>
            <span>750+ HAPPY BRIDES</span>
            <span className="hidden md:inline opacity-40">|</span>
            <span>TRUSTED ACROSS TAMIL NADU</span>
          </div>
          <H2 className="mb-6 font-heading text-[40px] md:text-[56px] text-[#2C2C2C]">
            Words From Our Brides
          </H2>
          <BodyLg className="text-[#4A4A4A] font-light">
            Read the experiences of brides who trusted Meenu Makeover for their most important day.
          </BodyLg>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="w-full testimonial-carousel pb-12 pt-4 relative -ml-4 md:ml-0">
        <div className="testimonial-track will-change-transform">
          {displayReviews.map((review, idx) => (
            <TestimonialCard key={`${review._id || review.name}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
