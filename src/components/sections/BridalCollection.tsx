"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Check, Sparkles, Gem, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MOTION, setupReducedMotion } from "@/lib/motion";

const bridalPackages = [
  {
    name: "Krylon Makeup",
    price: "₹10,000",
    badge: "Classic Choice",
    features: [
      "Professional Bridal Finish",
      "Premium Products",
      "Complimentary Gift Included"
    ],
    popular: false,
  },
  {
    name: "HD Makeup",
    price: "₹13,000",
    badge: "MOST POPULAR ⭐",
    features: [
      "Flawless HD Finish",
      "Premium Products",
      "Complimentary Gift Included"
    ],
    popular: true,
  },
  {
    name: "Waterproof Makeup",
    price: "₹15,000",
    badge: "Long Lasting Favourite",
    features: [
      "Sweat Resistant Finish",
      "Premium Products",
      "Complimentary Gift Included"
    ],
    popular: false,
  },
  {
    name: "Airbrush Makeup",
    price: "₹20,000",
    badge: "Luxury Signature",
    features: [
      "Ultra Lightweight Finish",
      "Premium Products",
      "Complimentary Gift Included"
    ],
    popular: false,
  },
];

export default function BridalCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const giftRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = setupReducedMotion();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Header Animation
      gsap.fromTo(
        headerRef.current?.children as HTMLCollection,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%" } }
      );
      
      // Cards Animation
      gsap.fromTo(
        cardsRef.current?.children as HTMLCollection,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: cardsRef.current, start: "top 75%" } }
      );

      // Gift Card Animation
      gsap.fromTo(
        giftRef.current,
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: giftRef.current, start: "top 85%" } }
      );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#FDF8F0] relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B8860B]/5 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#B8860B]/5 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Header section */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] font-medium text-[#B8860B] mb-6">Bridal Excellence</p>
          <h1 className="font-heading text-[40px] md:text-[56px] text-[#2C2C2C] mb-6 leading-tight">Luxury Bridal Artistry Collection</h1>
          <p className="font-sans text-[#4A4A4A] text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Crafted for brides who desire timeless elegance, flawless beauty, and a truly unforgettable wedding day experience.
          </p>
        </div>

        {/* Exclusive Bridal Gift Included */}
        <div ref={giftRef} className="max-w-4xl mx-auto mb-20 lg:mb-28">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] text-white p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
              
              <div className="text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#B8860B]/10 border border-[#B8860B]/30 rounded-full mb-6">
                  <Sparkles size={14} className="text-[#D4AF37]" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Special Offer</span>
                </div>
                <h3 className="font-heading text-3xl md:text-4xl text-white mb-4">Exclusive Bridal Gift Included</h3>
                <p className="font-sans text-white/80 font-light text-lg">
                  Every bridal booking includes ONE complimentary gift. Choose between our premium additions to complete your bridal look.
                </p>
              </div>

              <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />

              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 flex-shrink-0">
                <div className="flex flex-col items-center text-center group/item">
                  <div className="w-16 h-16 rounded-full bg-[#2C2C2C] flex items-center justify-center mb-4 border border-[#B8860B]/20 group-hover/item:border-[#B8860B] group-hover/item:bg-[#B8860B]/10 transition-colors">
                    <Gem size={28} className="text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <span className="font-sans text-[14px] text-white/90 font-medium tracking-wide">Jewellery Set</span>
                </div>
                
                <div className="flex items-center justify-center -mx-2 sm:mx-0">
                  <span className="font-sans text-[11px] text-[#B8860B] uppercase tracking-[0.2em] italic">OR</span>
                </div>

                <div className="flex flex-col items-center text-center group/item">
                  <div className="w-16 h-16 rounded-full bg-[#2C2C2C] flex items-center justify-center mb-4 border border-[#B8860B]/20 group-hover/item:border-[#B8860B] group-hover/item:bg-[#B8860B]/10 transition-colors">
                    <span className="text-[28px]">👗</span>
                  </div>
                  <span className="font-sans text-[14px] text-white/90 font-medium tracking-wide">Saree Draping</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] mx-auto items-stretch">
          {bridalPackages.map((pkg, i) => (
            <div 
              key={pkg.name}
              className={cn(
                "relative flex flex-col h-full bg-white px-8 py-12 rounded-sm transition-all duration-700 hover:-translate-y-2 group overflow-visible",
                pkg.popular 
                  ? "border border-[#B8860B]/60 shadow-[0_20px_50px_rgba(184,134,11,0.15)] xl:scale-105 z-10" 
                  : "border border-[#E5E5E5] shadow-sm hover:border-[#B8860B]/40 hover:shadow-xl z-0"
              )}
            >
              {/* Premium Glow Effect on Hover (for all) & Active (for popular) */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br from-[#B8860B]/[0.05] via-transparent to-transparent pointer-events-none transition-opacity duration-700",
                pkg.popular ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )} />

              {/* Badge */}
              <div className={cn(
                "inline-flex self-start px-4 py-1.5 mb-8 rounded-sm text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors",
                pkg.popular 
                  ? "bg-[#B8860B] text-white shadow-md badge-shine" 
                  : "bg-[#FDF8F0] text-[#B8860B] border border-[#B8860B]/20 group-hover:bg-[#B8860B]/10"
              )}>
                {pkg.badge}
              </div>
              
              <h3 className={cn(
                "font-heading mb-4 transition-colors duration-300",
                pkg.popular ? "text-[32px] text-[#2C2C2C] group-hover:text-[#B8860B]" : "text-[28px] text-[#2C2C2C]"
              )}>
                {pkg.name}
              </h3>
              
              <div className="font-sans text-[32px] md:text-[36px] font-medium text-[#B8860B] tracking-tight mb-8">
                {pkg.price}
              </div>
              
              <div className="w-12 h-px bg-[#B8860B]/30 mb-8 group-hover:w-full transition-all duration-700" />

              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <Check size={16} strokeWidth={2.5} className="text-[#B8860B] shrink-0 mt-0.5 opacity-80 group-hover/item:scale-110 transition-transform" />
                    <span className="text-[#4A4A4A] text-[14px] leading-relaxed font-sans">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello,%20I%20would%20like%20to%20enquire%20about%20the%20${pkg.name}%20(${pkg.price})%20Bridal%20Package.`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative overflow-hidden w-full text-center py-4 border tracking-[0.2em] text-[11px] rounded-sm font-sans uppercase font-medium transition-all duration-300",
                  pkg.popular 
                    ? "bg-[#B8860B] text-white border-[#B8860B] hover:bg-[#96700A] shadow-md hover:shadow-xl" 
                    : "bg-transparent text-[#2C2C2C] border-[#E5E5E5] group-hover:border-[#B8860B] hover:bg-[#B8860B] hover:text-white"
                )}
              >
                <span className="relative z-10">Reserve This Package</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
