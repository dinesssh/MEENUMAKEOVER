"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";
import { H2, H4, Eyebrow, Body, Highlight } from "@/components/ui/Typography";
import { MOTION, setupReducedMotion } from "@/lib/motion";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        textRef.current?.children as HTMLCollection,
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, duration: MOTION.duration.slow, stagger: MOTION.stagger.base, ease: MOTION.easing.out,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        imageContainerRef.current,
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1, rotation: -2, duration: 1, ease: MOTION.easing.out,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.fromTo(
        textRef.current?.children as HTMLCollection,
        { opacity: 0 },
        {
          opacity: 1, duration: MOTION.duration.fast, stagger: MOTION.stagger.tight,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: MOTION.duration.fast,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-[#f5efe6] text-black overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Left: Founder Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-[400px]" ref={imageContainerRef}>
            {/* Decorative offset gold frame */}
            <div className="absolute inset-0 border border-[#b8893e]/50 translate-x-5 translate-y-5 rounded-sm -z-10" />
            <div className="relative w-full aspect-[3/4] bg-[#ede4d3] shadow-xl rounded-sm overflow-hidden">
              <Image
                src="/owner.webp"
                alt="Meenu - Founder & Lead Makeup Artist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Right: Story */}
          <div ref={textRef} className="max-w-xl">
            <Eyebrow className="mb-4">The Artist Behind The Brush</Eyebrow>

            <H2 className="mb-8">
              Crafting <Highlight>Timeless</Highlight> Memories
            </H2>

            <div className="space-y-5 mb-10">
              <Body>
                Meenu has been transforming brides into their most beautiful selves for nearly a decade.
                What started as a deep passion for artistry has evolved into Madurai&apos;s most trusted
                luxury bridal destination.
              </Body>
              <Body>
                We believe that bridal makeup shouldn&apos;t mask who you are—it should elevate your natural
                beauty, honoring both modern aesthetics and deep-rooted Tamil traditions. Every stroke,
                every shade is chosen to reflect your personal story on your biggest day.
              </Body>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#b8893e]/12">
              {[
                { value: "500+", label: "Brides" },
                { value: "8",    label: "Years Exp." },
                { value: "4.9★", label: "Google" },
              ].map((s) => (
                <div key={s.label}>
                  <H4 className="text-[#b8893e] mb-1">{s.value}</H4>
                  <Eyebrow className="text-[#2e1e12]/50 text-[9px] tracking-widest">{s.label}</Eyebrow>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
