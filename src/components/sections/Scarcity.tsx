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
          <p className="text-[#b8893e] font-sans tracking-[0.3em] text-xs font-semibold mb-6 uppercase">
            Exclusive Availability
          </p>
          
          <h2 className="text-3xl md:text-5xl font-heading mb-6 leading-tight text-[#f5efe6]">
            Limited Bridal Dates <br className="hidden md:block" />
            <span className="italic text-[#f5efe6]/70">Available.</span>
          </h2>
          
          <p className="text-[#f5efe6]/60 font-sans mb-10 max-w-xl mx-auto leading-relaxed">
            To ensure every bride receives a personalised luxury experience, only a select number of bookings are accepted each month.
          </p>
          
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#b8893e] text-white font-sans text-[10px] tracking-[0.2em] uppercase shadow-[0_10px_30px_rgba(184,137,62,0.3)] hover:shadow-[0_15px_40px_rgba(184,137,62,0.4)] hover:bg-[#a67a36] transition-all duration-300"
          >
            Reserve Your Date
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
