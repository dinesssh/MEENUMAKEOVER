"use client";

import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ThankYou() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".anim-element",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, { scope: container });

  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center p-6 text-black" ref={container}>
      <div className="max-w-md w-full bg-white p-12 rounded-sm border border-gold/20 shadow-sm text-center">
        <CheckCircle2 size={80} className="text-gold mx-auto mb-8 anim-element" />
        <h1 className="text-4xl font-heading mb-4 text-black anim-element">
          Thank You!
        </h1>
        <p className="text-lg text-black/70 font-sans mb-8 anim-element leading-relaxed">
          Your consultation request has been received. We'll reply within 24 hours to discuss your big day.
        </p>
        <Link 
          href="/" 
          className="anim-element inline-flex items-center justify-center gap-2 text-sm font-accent tracking-widest uppercase border-b border-black pb-1 hover:text-gold hover:border-gold transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
