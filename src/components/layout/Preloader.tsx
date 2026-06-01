"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    // 1. Fade in logo (0.4s)
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    })
    // 2. Expand gold line (0.4s)
    .to(lineRef.current, {
      scaleX: 1,
      duration: 0.4,
      ease: "power2.inOut",
    }, "-=0.2")
    // 3. Slide up and fade out container (0.4s) -> Total ~1.0s
    .to(containerRef.current, {
      y: "-100%",
      duration: 0.6,
      ease: "power3.inOut",
      delay: 0.2, // Small pause to read
    });
  }, { scope: containerRef });

  // Fallback to remove it just in case
  useEffect(() => {
    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(fallbackTimeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black bg-opacity-100"
    >
      <div 
        ref={logoRef}
        className="opacity-0 translate-y-4 flex flex-col items-center"
      >
        <span className="text-4xl md:text-5xl font-heading text-gold mb-4 tracking-widest">
          MM
        </span>
        <div className="w-24 h-[1px] bg-white/20 overflow-hidden">
          <div 
            ref={lineRef} 
            className="w-full h-full bg-gold origin-left scale-x-0"
          ></div>
        </div>
      </div>
    </div>
  );
}
