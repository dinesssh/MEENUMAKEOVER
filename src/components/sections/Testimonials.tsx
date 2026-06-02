"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { H2, Eyebrow, Body } from "@/components/ui/Typography";
import { setupReducedMotion } from "@/lib/motion";

interface Testimonial {
  _id?: string;
  name: string;
  occasion: string;
  rating?: number;
  text: string;
  image?: string;
}

export default function Testimonials({ reviews = [] }: { reviews?: Testimonial[] }) {
  const [isReduced, setIsReduced] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsReduced(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleScroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = window.innerWidth < 768 ? 320 + 24 : 380 + 24;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const displayReviews = isReduced ? reviews : [...reviews, ...reviews];
  const sectionRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    if (reviews.length === 0) return;
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Heading Animations
      gsap.fromTo(".testimonial-eyebrow", 
        { opacity: 0, y: 16 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".testimonial-heading", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5, delay: 0.15, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );

      // Star Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(entry.target.querySelectorAll('.star-icon'), {
              opacity: 1,
              scale: 1,
              duration: 0.2,
              stagger: 0.08,
              ease: "power2.out",
              overwrite: "auto"
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      document.querySelectorAll('.testimonial-card').forEach(card => observer.observe(card));
      return () => observer.disconnect();
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".testimonial-eyebrow, .testimonial-heading", { opacity: 1, y: 0 });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  if (!reviews || reviews.length === 0) {
    return (
      <section id="testimonials" className="py-20 lg:py-32 bg-white text-center border-t border-black/5">
        <div className="section-container">
          <Eyebrow className="mb-4">Love Notes</Eyebrow>
          <H2 className="mb-6">Words From Our Brides</H2>
          <Body className="italic text-[#2e1e12]/40">
            Reviews will appear here once added in Sanity Studio.
          </Body>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 lg:py-32 bg-white text-black overflow-hidden border-t border-black/5">
      <div className="section-container mb-14">
        <div className="text-center">
          <div className="testimonial-eyebrow opacity-0">
            <Eyebrow className="mb-4">Love Notes</Eyebrow>
          </div>
          <div className="testimonial-heading opacity-0">
            <H2>Words From Our Brides</H2>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden relative">
        <div className={cn("w-full", !isReduced && "marquee-wrapper")}>
          <div
            ref={scrollRef}
            className={cn(
              "flex gap-6 pb-6 pt-2 px-6",
              isReduced 
                ? "overflow-x-auto snap-x snap-mandatory hide-scrollbar md:px-12"
                : "marquee-track"
            )}
          >
            {displayReviews.map((review, idx) => (
              <div
                key={`${review._id || review.name}-${idx}`}
                className={cn(
                  "testimonial-card bg-white p-8 lg:p-10 shadow-[0_4px_20px_rgba(184,137,62,0.08)] border border-[#b8893e]/20 rounded-xl flex flex-col min-h-[280px] h-full",
                  isReduced ? "snap-center shrink-0 w-[82vw] sm:w-[320px]" : "shrink-0 w-[320px] md:w-[380px]"
                )}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 testimonial-stars">
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={cn("text-[#b8893e] fill-[#b8893e] star-icon", !isReduced && "opacity-0 scale-90")} 
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-grow flex flex-col">
                  <span className="absolute -top-6 -left-2 text-7xl text-[#b8893e] opacity-30 font-serif leading-none">&quot;</span>
                  <p className="font-heading text-[22px] leading-relaxed italic text-[#2e1e12] relative z-10 mb-6">
                    {review.text}
                  </p>
                </div>

                {/* Divider & Author */}
                <div className="mt-auto pt-6 border-t border-[#b8893e]/30">
                  <p className="font-heading font-medium text-[20px] text-[#b8893e]">{review.name}</p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] font-semibold text-[#2e1e12]/50 mt-1">{review.occasion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manual navigation for reduced motion */}
        {isReduced && reviews.length > 1 && (
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-[#b8893e]/30 bg-white text-[#b8893e] hover:bg-[#b8893e] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8893e]"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-[#b8893e]/30 bg-white text-[#b8893e] hover:bg-[#b8893e] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8893e]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
