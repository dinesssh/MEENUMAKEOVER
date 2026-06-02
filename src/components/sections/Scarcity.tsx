"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowRight } from "lucide-react";

export default function Scarcity() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current?.children as HTMLCollection,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-24 bg-[#0a0a0a] text-white border-y border-white/10 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-gold/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div ref={contentRef} className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-gold font-accent tracking-[0.3em] text-xs font-semibold mb-6 uppercase">
            Limited Availability
          </p>
          
          <h2 className="text-3xl md:text-5xl font-heading mb-6 leading-tight">
            Only limited bridal slots available <br className="hidden md:block" />
            <span className="italic text-ivory/80">this wedding season.</span>
          </h2>
          
          <p className="text-ivory/60 font-sans mb-10 max-w-xl mx-auto leading-relaxed">
            Due to high demand and our commitment to providing an unhurried, luxury experience for every bride, our calendar is filling up quickly.
          </p>
          
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 bg-white text-black font-accent text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors flex items-center gap-2"
          >
            Book Your Trial Consultation
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
