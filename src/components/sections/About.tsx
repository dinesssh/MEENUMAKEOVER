"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";
import { H2, Eyebrow, Body, Highlight } from "@/components/ui/Typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. Image Timeline: Slide up, fade in
      gsap.fromTo(
        imageContainerRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      // 2. Image Parallax & Floating
      gsap.to(imageInnerRef.current, {
        y: "8%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Subtle float animation for the image container
      gsap.to(imageContainerRef.current, {
        y: -10,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5 // Start after reveal
      });

      // 3. Content Timeline
      const tl = gsap.timeline({
        scrollTrigger: { trigger: textRef.current, start: "top 80%" },
      });

      // Eyebrow
      tl.fromTo(
        textRef.current?.querySelector('.eyebrow-wrapper') as Element,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      // Heading line by line
      tl.fromTo(
        textRef.current?.querySelectorAll('.heading-line') as unknown as Element[],
        { y: 30, opacity: 0, rotationX: -20 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.15, ease: "power4.out" },
        "-=0.4"
      );

      // Paragraphs stagger
      tl.fromTo(
        textRef.current?.querySelectorAll('.body-paragraph') as unknown as Element[],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.6"
      );

      // Stats cards stagger
      tl.fromTo(
        statsRef.current?.children as HTMLCollection,
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)" },
        "-=0.4"
      );

      // Stats counter animation
      const stats = gsap.utils.toArray<HTMLElement>('.about-stat');
      stats.forEach(stat => {
        const target = parseFloat(stat.dataset.target || "0");
        if (target > 0) {
          gsap.fromTo(stat, 
            { textContent: 0 }, 
            {
              textContent: target,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: target % 1 === 0 ? 1 : 0.1 },
              scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
            }
          );
        }
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.fromTo(imageContainerRef.current, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }});
      gsap.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: textRef.current, start: "top 80%" }});
      gsap.fromTo(statsRef.current, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: statsRef.current, start: "top 80%" }});
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-12 lg:py-20 bg-[#FDF8F0] text-[#2C2C2C] relative overflow-hidden">
      
      {/* Decorative Radial Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(184,134,11,0.03)_0%,_transparent_70%)] pointer-events-none rounded-full" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Founder Image (Mobile First) */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-[500px] order-1 lg:order-1" ref={imageContainerRef}>
            
            {/* Layered Luxury Frame */}
            <div className="absolute inset-0 bg-[#B8860B]/5 border border-[#B8860B]/20 translate-x-4 translate-y-4 rounded-sm -z-20 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-6 group-hover:translate-y-6" />
            <div className="absolute inset-0 bg-white/50 border border-[#B8860B]/10 -translate-x-3 -translate-y-3 rounded-sm -z-10 backdrop-blur-sm shadow-xl" />

            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1),_0_0_40px_rgba(184,134,11,0.0)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15),_0_0_40px_rgba(184,134,11,0.2)] transition-shadow duration-700 border border-[#B8860B]/30">
              <div ref={imageInnerRef} className="absolute inset-0 -top-[10%] -bottom-[10%]">
                <Image
                  src="/owner.webp"
                  alt="Meenu - Founder & Lead Makeup Artist"
                  fill
                  className="object-cover object-top transition-transform duration-[3s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#B8860B]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
            </div>
          </div>

          {/* Right: Story */}
          <div ref={textRef} className="w-full max-w-xl flex flex-col justify-center order-2 lg:order-2 lg:pl-4">
            
            {/* Eyebrow with Decorative Line */}
            <div className="eyebrow-wrapper flex items-center gap-4 mb-6">
              <span className="block h-[1px] w-12 bg-gradient-to-r from-transparent to-[#B8860B] flex-shrink-0" />
              <Eyebrow className="text-[#B8860B] tracking-[0.4em] uppercase text-[10px] md:text-[11px] font-medium">The Artist Behind The Vision</Eyebrow>
              <span className="block h-[1px] w-12 bg-gradient-to-l from-transparent to-[#B8860B] flex-shrink-0" />
            </div>

            {/* Heading with Soft Gradient Accent */}
            <H2 className="mb-10 relative">
              <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,_rgba(184,134,11,0.08)_0%,_transparent_70%)] blur-xl -z-10" />
              <span className="block heading-line">Elevating</span>
              <span className="block heading-line"><Highlight>Your Story</Highlight></span>
              <span className="block heading-line">with Luxury</span>
            </H2>

            <div className="space-y-4 mb-10">
              <Body className="body-paragraph font-medium text-[#B8860B] text-[16px] lg:text-[18px] leading-relaxed">
                For over a decade, Meenu has defined the pinnacle of luxury bridal makeup in Tamil Nadu, transforming natural beauty into timeless elegance.
              </Body>
              <Body className="body-paragraph font-light text-[#4A4A4A] leading-loose">
                We believe that bridal beauty should never be a mask. It is an intimate, personalized journey to reveal the most luminous, authentic version of yourself. From the first consultation to the final touch-up, our focus is entirely on you.
              </Body>
              <Body className="body-paragraph font-light text-[#4A4A4A] leading-loose">
                Using exclusively premium international cosmetics, every brushstroke is meticulously planned to ensure your radiance endures from the morning rituals to the evening reception. This is more than makeup; it is a masterclass in bridal artistry.
              </Body>
            </div>

            {/* Luxury Stat Cards */}
            <div ref={statsRef} className="grid grid-cols-2 gap-3 md:gap-5">
              {[
                { value: "750", suffix: "+", label: "HAPPY BRIDES" },
                { value: "10", suffix: "+", label: "YEARS EXPERIENCE" },
                { value: "4.9", suffix: "★", label: "GOOGLE RATING" },
                { value: "100", suffix: "%", label: "PREMIUM PRODUCTS" },
              ].map((s) => (
                <div key={s.label} className="group relative bg-white/60 backdrop-blur-md border border-[#B8860B]/10 rounded-sm p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(184,134,11,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center items-center text-center overflow-hidden">
                  {/* Border Animation */}
                  <div className="absolute inset-0 border border-[#B8860B] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 rounded-sm" />
                  
                  <div className="flex items-baseline gap-0.5 mb-2 relative z-10">
                    <span className="font-heading text-2xl sm:text-3xl text-[#C89B2C] tabular-nums about-stat" data-target={s.value}>
                      {s.value}
                    </span>
                    <span className="font-heading text-xl sm:text-2xl text-[#C89B2C]">{s.suffix}</span>
                  </div>
                  <Eyebrow className="text-[#2C2C2C]/60 text-[9px] tracking-[0.2em] relative z-10 uppercase font-medium">{s.label}</Eyebrow>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
