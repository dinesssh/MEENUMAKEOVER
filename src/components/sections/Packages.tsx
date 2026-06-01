"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Check, X } from "lucide-react";
import { usePlausible } from "next-plausible";
import { siteConfig } from "@/config/site";

const packages = [
  {
    id: "essential",
    name: "Essential",
    price: "Starting from ₹15,000",
    popular: false,
    features: [
      { name: "HD Bridal Makeup", included: true },
      { name: "Basic Hairstyling", included: true },
      { name: "Saree Draping (1 style)", included: true },
      { name: "Lash Application", included: true },
      { name: "Pre-wedding Consultation", included: false },
      { name: "Premium Hair Accessories", included: false },
      { name: "Touch-up Kit", included: false },
    ]
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "Starting from ₹25,000",
    popular: true,
    features: [
      { name: "Airbrush / Ultra HD Makeup", included: true },
      { name: "Advanced Hairstyling", included: true },
      { name: "Saree Draping (up to 2 styles)", included: true },
      { name: "Premium Mink Lashes", included: true },
      { name: "Pre-wedding Trial Session", included: true },
      { name: "Premium Hair Accessories", included: true },
      { name: "Touch-up Kit", included: false },
    ]
  },
  {
    id: "elite",
    name: "Elite",
    price: "Custom Pricing",
    popular: false,
    features: [
      { name: "Celebrity Artist Meenu", included: true },
      { name: "Multiple Look Changes", included: true },
      { name: "Full Day Assistance", included: true },
      { name: "Customized Lash Design", included: true },
      { name: "Pre-wedding Trial Session", included: true },
      { name: "Exclusive Jewelry Rental", included: true },
      { name: "Luxury Touch-up Kit", included: true },
    ]
  }
];

export default function Packages() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const plausible = usePlausible();

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current?.children as HTMLCollection,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="packages" ref={sectionRef} className="py-24 md:py-32 bg-[#F9F7F2] text-black">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-gold font-accent tracking-widest text-sm font-medium mb-4 uppercase">
            Investment
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading mb-6 text-black">
            Bridal Packages
          </h3>
          <p className="text-black/70 font-sans text-lg max-w-2xl mx-auto">
            Transparent pricing for an uncompromising luxury experience. Select the tier that perfectly aligns with your vision.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative bg-white p-8 md:p-10 shadow-sm flex flex-col h-full transition-transform hover:-translate-y-2 duration-300 ${
                pkg.popular ? "border-2 border-gold scale-100 lg:scale-105 z-10 py-12 shadow-xl" : "border border-black/5"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-black font-accent text-xs font-bold uppercase tracking-widest py-1.5 px-4 shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8 pb-8 border-b border-black/5">
                <h4 className="text-2xl font-heading mb-2 text-black">{pkg.name}</h4>
                <p className="text-xl font-accent text-gold">{pkg.price}</p>
              </div>

              <ul className="space-y-5 flex-grow mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm font-sans ${feature.included ? "text-black/80" : "text-black/40"}`}>
                    {feature.included ? (
                      <Check size={18} className="text-gold shrink-0 mt-0.5" />
                    ) : (
                      <X size={18} className="text-black/20 shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? "" : "line-through"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello,%20I%20would%20like%20to%20enquire%20about%20the%20${pkg.name}%20Bridal%20Package.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => plausible("package_view", { props: { package_name: pkg.name } })}
                className={`w-full text-center py-3 font-accent text-sm tracking-wide transition-colors border ${
                  pkg.popular 
                    ? "bg-gold text-black border-gold hover:bg-gold-light" 
                    : "bg-transparent text-black border-black/20 hover:border-gold hover:text-gold"
                }`}
              >
                Select Package
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
