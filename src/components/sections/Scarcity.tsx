"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { H2, Eyebrow, BodyLg } from "@/components/ui/Typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { TYPE_TOKENS } from "@/lib/typography";

export default function Scarcity() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        headerRef.current?.children as HTMLCollection,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
      
      gsap.fromTo(
        cardsRef.current?.children as HTMLCollection,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "expo.out", scrollTrigger: { trigger: cardsRef.current, start: "top 80%" } }
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
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="py-24 lg:py-32 bg-[#111111] text-[#FDF8F0] relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B8860B]/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="section-container relative z-10">
        
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <Eyebrow className="mb-6 text-[#D4AF37] tracking-[0.3em]">The Luxury Standard</Eyebrow>
          <H2 className="mb-6 font-heading text-[40px] md:text-[56px] text-white">An Exclusive Experience</H2>
          <BodyLg className="text-[#FDF8F0]/70 font-light">
            To ensure unparalleled attention to detail, we accept a strictly limited number of bridal commissions each season.
          </BodyLg>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Card 1: The Signature Bridal Journey */}
          <div className="bg-[#1A1A1A] p-10 lg:p-14 rounded-sm border border-white/5 relative overflow-hidden group hover:border-[#B8860B]/40 transition-all duration-700 shadow-lg hover:shadow-[0_15px_40px_rgba(184,134,11,0.08)] flex flex-col justify-between h-full">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#B8860B] to-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            
            <div>
              <h3 className="font-heading text-3xl lg:text-4xl text-white mb-6 group-hover:text-[#D4AF37] transition-colors duration-500">The Signature Bridal Journey</h3>
              <p className="font-sans text-[15px] lg:text-[16px] leading-relaxed text-[#FDF8F0]/70 font-light mb-10 group-hover:text-[#FDF8F0]/90 transition-colors duration-500">
                Every bride deserves our complete attention, artistry, and care. From consultation to the final touch-up, we create a seamless bridal experience designed to make you feel confident, beautiful, and truly celebrated on your special day.
              </p>
              
              <ul className="space-y-5 mb-12">
                {[
                  "Personalised Bridal Consultation",
                  "Dedicated Trial Session",
                  "Luxury Styling Experience",
                  "Senior Artist Attention",
                  "Calm & Stress-Free Bridal Preparation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-5 h-5 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0 border border-[#B8860B]/30 group-hover/item:bg-[#B8860B]/20 transition-colors">
                      <Check size={10} className="text-[#D4AF37]" />
                    </div>
                    <span className="font-sans text-[14px] lg:text-[15px] text-white/80 tracking-wide font-light group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="#booking"
              onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: "smooth" }); }}
              className={cn(TYPE_TOKENS.button, "group/cta relative overflow-hidden w-full text-center bg-[#B8860B]/10 text-white py-4 lg:py-5 border border-[#B8860B]/50 tracking-[0.2em] text-[11px] rounded-sm mt-auto transition-colors hover:border-[#B8860B]")}
            >
              <span className="relative z-10 group-hover/cta:text-white transition-colors duration-[400ms]">BEGIN YOUR BRIDAL JOURNEY</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#96700A] scale-x-0 origin-left group-hover/cta:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            </a>
          </div>

          {/* Card 2: The Bridal Model Image */}
          <div className="relative rounded-sm border border-white/5 overflow-hidden group shadow-lg min-h-[400px]">
            <div className="absolute inset-0 bg-[#1A1A1A]">
              <Image
                src="/hero-bride.png"
                alt="Premium Bridal Artistry"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            {/* Content inside Image */}
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 z-10 flex flex-col items-start justify-end h-full">
              <Eyebrow className="mb-4 text-[#D4AF37] tracking-[0.3em] font-medium">Flawless Finish</Eyebrow>
              <h3 className="font-heading text-3xl lg:text-4xl text-white mb-4 leading-tight">Timeless South Indian Elegance</h3>
              <p className="font-sans text-[14px] leading-relaxed text-white/80 font-light max-w-sm mb-6">
                Our signature aesthetic balances traditional grandeur with modern minimalism, ensuring you look breathtaking both in person and on camera.
              </p>
              
              <a 
                href="#booking"
                onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: "smooth" }); }}
                className="group/btn flex items-center gap-3 pb-2 border-b border-[#B8860B]/50 hover:border-[#D4AF37] transition-colors duration-300"
              >
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-white group-hover/btn:text-[#D4AF37] transition-colors">Discover the Look</span>
                <ArrowRight className="w-4 h-4 text-[#B8860B] group-hover/btn:translate-x-2 transition-transform duration-300 group-hover/btn:text-[#D4AF37]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
