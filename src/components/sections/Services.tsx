"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Sparkles, Heart, Star, Scissors, Eye } from "lucide-react";

const services = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    description: "Flawless HD & Airbrush makeup designed to last through tears of joy and endless photographs.",
    icon: Sparkles,
  },
  {
    id: "engagement",
    title: "Engagement Makeup",
    description: "Soft, glowing, and elegant looks that perfectly capture the romance of your special day.",
    icon: Heart,
  },
  {
    id: "reception",
    title: "Reception Makeup",
    description: "Glamorous and striking evening looks tailored to complement heavy jewelry and lighting.",
    icon: Star,
  },
  {
    id: "microblading",
    title: "Microblading",
    description: "Semi-permanent brow styling to frame your face perfectly before your wedding events.",
    icon: Scissors,
  },
  {
    id: "lashes",
    title: "Lash Extensions",
    description: "Custom volume and classic lash extensions for that effortless, beautiful flutter.",
    icon: Eye,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current?.children as HTMLCollection,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current?.children as HTMLCollection,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-[#F9F7F2] text-black">
      <div className="container mx-auto px-6 md:px-12">
        
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-gold font-accent tracking-widest text-sm font-medium mb-4 uppercase">
            Our Offerings
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading mb-6 text-black">
            Bespoke Bridal Services
          </h3>
          <p className="text-black/70 font-sans text-lg">
            Every bride is unique. We tailor our luxury services to ensure you look and feel your absolute best.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="group relative bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 ease-out flex flex-col items-start border border-black/5 hover:-translate-y-1"
              >
                {/* Top Border Hover Reveal */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                
                <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center mb-6 border border-gold/20 group-hover:border-gold/50 transition-colors">
                  <Icon size={20} className="text-gold" />
                </div>
                
                <h4 className="text-2xl font-heading mb-3 text-black">
                  {service.title}
                </h4>
                
                <p className="text-black/60 font-sans leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <a 
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-accent text-sm tracking-wide text-black uppercase pb-1 border-b border-black/20 hover:border-gold hover:text-gold transition-colors mt-auto"
                >
                  Enquire Now
                </a>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
