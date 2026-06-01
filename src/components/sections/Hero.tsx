"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animation
    const tl = gsap.timeline({ delay: 1.2 }); // Wait for preloader

    tl.fromTo(
      textRef.current?.children as HTMLCollection,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    // Scroll indicator fade out on scroll
    gsap.to(arrowRef.current, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
      
      {/* Background Placeholder - Replace with real Next/Image before launch */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#E8D5B0] to-[#8A8580] animate-pulse-slow"
        data-placeholder="true"
        aria-label="Hero background image placeholder"
      >
        {/* Real image setup (commented for handoff) */}
        {/* <Image 
          src="/images/hero-bridal.jpg"
          alt="Luxury Tamil Bridal Makeup"
          fill
          priority
          className="object-cover scale-105" // scale-105 accounts for ken burns
          sizes="100vw"
        /> */}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div ref={textRef} className="max-w-3xl">
          <p className="text-gold font-accent tracking-[0.2em] text-sm md:text-base font-medium mb-6 uppercase">
            Madurai&apos;s Luxury Bridal Studio
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[1.1] text-ivory font-heading mb-8">
            Where Tradition Meets <br/>
            <span className="italic text-white/90">Timeless Elegance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ivory/80 font-sans max-w-xl mb-12 leading-relaxed">
            Premium bridal makeup, HD styling, and luxury beauty experiences crafted for modern Tamil brides.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I'm%20interested%20in%20booking%20a%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-black font-accent text-base font-medium tracking-wide hover:bg-gold-light transition-colors text-center"
            >
              Book Consultation
            </a>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-white/30 text-ivory font-accent text-base font-medium tracking-wide hover:bg-white/10 hover:border-white/50 transition-colors text-center"
            >
              View Bridal Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={arrowRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/70 font-accent">Scroll</span>
        <ArrowDown size={20} className="text-gold animate-bounce" />
      </div>
    </section>
  );
}
