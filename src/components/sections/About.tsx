"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade up text elements
    gsap.fromTo(
      textRef.current?.children as HTMLCollection,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    // Subtle image reveal
    gsap.fromTo(
      imageContainerRef.current,
      { y: 40, opacity: 0, rotation: 0 },
      {
        y: 0,
        opacity: 1,
        rotation: -2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-ivory text-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Founder Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md" ref={imageContainerRef}>
            {/* Decorative Gold Frame */}
            <div className="absolute inset-0 border border-gold translate-x-4 translate-y-4 rounded-sm -z-10"></div>
            
            {/* Image Placeholder - 3:4 Aspect Ratio */}
            <div 
              className="relative w-full aspect-[3/4] bg-[#E8D5B0] shadow-xl rounded-sm overflow-hidden"
              data-placeholder="true"
              aria-label="Founder portrait placeholder"
            >
               {/* Real image setup (commented for handoff) */}
              {/* <Image 
                src="/images/about-founder.jpg"
                alt="Meenu - Founder & Lead Makeup Artist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              /> */}
            </div>
          </div>

          {/* Right: Story */}
          <div ref={textRef} className="max-w-xl">
            <h2 className="text-gold font-accent tracking-widest text-sm font-medium mb-4 uppercase">
              The Artist Behind The Brush
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-8 leading-tight text-black">
              Crafting <span className="italic text-warm-gray">Timeless</span> Memories
            </h3>
            
            <div className="space-y-6 text-lg text-black/70 font-sans leading-relaxed mb-10">
              <p>
                Meenu has been transforming brides into their most beautiful selves for nearly a decade. What started as a deep passion for artistry has evolved into Madurai&apos;s most trusted luxury bridal destination.
              </p>
              <p>
                We believe that bridal makeup shouldn&apos;t mask who you are—it should elevate your natural beauty, honoring both modern aesthetics and deep-rooted Tamil traditions. Every stroke, every shade is chosen to reflect your personal story on your biggest day.
              </p>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/10">
              <div>
                <p className="text-3xl font-heading text-gold mb-1">500+</p>
                <p className="text-sm font-accent text-black/60 uppercase tracking-wide">Brides</p>
              </div>
              <div>
                <p className="text-3xl font-heading text-gold mb-1">8</p>
                <p className="text-sm font-accent text-black/60 uppercase tracking-wide">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-heading text-gold mb-1">4.9★</p>
                <p className="text-sm font-accent text-black/60 uppercase tracking-wide">Google</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
