"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Scissors, Droplet, Sun, Feather, Palette, Flower } from "lucide-react";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const featuredCategories = [
  { title: "Hair Treatments", desc: "Restore & Rejuvenate", icon: Sparkles },
  { title: "Hair Colour", desc: "Vibrant Transformations", icon: Palette },
  { title: "Waxing", desc: "Smooth & Flawless", icon: Feather },
  { title: "Skin Rituals", desc: "Luxury Therapies", icon: Flower },
];

const services = [
  {
    id: "hair-treatments",
    title: "Premium Hair Treatments",
    description: "Revitalize your locks with our bespoke nourishment and repair rituals.",
    icon: Sparkles,
    startingPrice: "₹1,999",
    items: [
      { name: "Hair Smoothening", desc: "Any Length", price: "₹1,999" },
      { name: "Keratin Treatment", desc: "Any Length", price: "₹3,499" },
      { name: "Hair Botox", desc: "Any Length", price: "₹4,499" },
      { name: "Collagen Treatment", desc: "Any Length", price: "₹5,499" },
    ],
  },
  {
    id: "world-of-colours",
    title: "World of Colours",
    description: "Transform your look with vibrant, long-lasting premium hair colors.",
    icon: Palette,
    startingPrice: "₹1,000",
    items: [
      { name: "Root Touch Up", desc: "Ammonia | Ammonia Free", price: "₹1,000" },
      { name: "Global Colour", desc: "Short | Medium | Long", price: "₹3,000" },
      { name: "Global Ammonia Free", price: "₹3,200" },
      { name: "Global Fashion Colour", price: "₹3,200" },
      { name: "Global With Highlights", desc: "Or Balayage", price: "₹5,000" },
      { name: "Highlights", desc: "Partial | Full", price: "₹2,500" },
      { name: "Highlights", desc: "Per Streak", price: "₹400" },
      { name: "Add On: Bond Strengthener", price: "₹500" },
    ],
  },
  {
    id: "texture-matters",
    title: "Texture Matters",
    description: "Professional straightening, perming, and rebonding for flawless texture.",
    icon: Scissors,
    startingPrice: "₹3,500",
    items: [
      { name: "Smoothening | Keratin | Botox", price: "₹4,500" },
      { name: "Straightening", desc: "Short | Medium | Long", price: "₹5,000" },
      { name: "Re-growth / Partial Straightening", price: "₹5,500" },
      { name: "Perming", desc: "Short | Medium | Long", price: "₹3,500" },
      { name: "Add On: Bond Strengthener", price: "₹750" },
    ],
  },
  {
    id: "cuts-styling",
    title: "Cuts & Styling",
    description: "Precision cuts and modern styling tailored to your face shape.",
    icon: Scissors,
    startingPrice: "₹350",
    items: [
      { name: "Classic Cut / U-Straight", price: "₹650" },
      { name: "Layer Trim", price: "₹1,100" },
      { name: "Change of Styling", desc: "By Senior Stylist", price: "₹1,500" },
      { name: "Fringe | Bangs", price: "₹350" },
      { name: "Kids Cut", desc: "Below 10 years", price: "₹400" },
    ],
  },
  {
    id: "hair-scalp-rituals",
    title: "Hair & Scalp Rituals",
    description: "Deep conditioning and therapeutic treatments for scalp health.",
    icon: Droplet,
    startingPrice: "₹700",
    items: [
      { name: "Head Massage", price: "₹700" },
      { name: "Color Save", price: "₹1,200" },
      { name: "Repair & Rejuvenate", price: "₹1,200" },
      { name: "Hair Strengthening Treatment", price: "₹1,500" },
      { name: "Dandruff Control", desc: "Multiple sittings recommended", price: "₹2,500" },
      { name: "Hair Fall Control", desc: "Multiple sittings recommended", price: "₹2,500" },
    ],
  },
  {
    id: "waxing-essentials",
    title: "Waxing Essentials",
    description: "Smooth, flawless skin with our gentle flavored and peel-off waxes.",
    icon: Feather,
    startingPrice: "₹120",
    items: [
      { name: "Half Arms | Legs", price: "₹650" },
      { name: "Full Arms | Legs", price: "₹800" },
      { name: "Full Waxing (FA+FL+UA)", price: "₹1,900" },
      { name: "Full Back | Midriff", price: "₹1,200" },
      { name: "Full Body", price: "₹3,500" },
      { name: "Peel Off Upper Lip", price: "₹150" },
      { name: "Peel Off Chin", price: "₹120" },
      { name: "Peel Off Face", price: "₹450" },
      { name: "Peel Off Underarms", price: "₹300" },
      { name: "Peel Off Bikini Line", price: "₹1,000" },
      { name: "Peel Off Full Bikini", price: "₹2,700" },
    ],
  },
  {
    id: "bleach-polish",
    title: "Bleach & Body Polish",
    description: "Radiant glow and exfoliation for silky smooth skin.",
    icon: Sun,
    startingPrice: "₹100",
    items: [
      { name: "Upper Lip Bleach", price: "₹100" },
      { name: "Face & Neck Bleach", price: "₹650" },
      { name: "Full Body Bleach", price: "₹3,500" },
      { name: "Whole Black Body Polish", price: "₹2,600" },
      { name: "Reflexology", desc: "Neck & Shoulder", price: "₹600" },
      { name: "Reflexology", desc: "Feet", price: "₹700" },
    ],
  },
];

function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-[#D4AF37]/20"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer p-6 md:p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] flex items-center justify-center flex-shrink-0 text-[#B8860B] group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-6 h-6 stroke-[1.5]" />
            </div>
            
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-2 group-hover:text-[#B8860B] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-sans text-[#666666] text-sm md:text-base leading-relaxed max-w-md font-light mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-[#999999] font-medium">Starting From</span>
                <span className="font-sans text-lg font-medium text-[#1a1a1a]">{service.startingPrice}</span>
              </div>
            </div>
          </div>

          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 bg-[#FAF8F5] text-[#B8860B]",
            isOpen ? "rotate-180" : "rotate-0"
          )}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 md:px-8 pb-8 pt-2">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent mb-6" />
              
              <div className="flex flex-col gap-1">
                {service.items.map((item: any, i: number) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={i} 
                    className="flex justify-between items-end py-3 group/item hover:bg-[#FAF8F5] px-4 -mx-4 rounded-lg transition-colors gap-4"
                  >
                    <div className="flex-shrink max-w-[75%]">
                      <h4 className="font-sans text-[15px] font-medium text-[#2C2C2C] group-hover/item:text-[#B8860B] transition-colors leading-tight">
                        {item.name}
                      </h4>
                      {item.desc && (
                        <p className="font-sans text-[13px] text-[#888888] font-light mt-1 leading-snug">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex-grow border-b-2 border-dotted border-[#D4AF37]/30 mb-2 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                    
                    <div className="font-sans text-[16px] font-medium text-[#1a1a1a] tabular-nums flex-shrink-0 whitespace-nowrap mb-0.5">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function SalonMenuClient() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] selection:bg-[#B8860B]/20 selection:text-[#B8860B]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D4AF37]/30 shadow-sm mb-8">
              <Sparkles className="w-4 h-4 text-[#B8860B]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#B8860B]">Our Services</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl text-[#1a1a1a] mb-6 leading-tight tracking-tight">
              Luxury Salon <span className="italic font-light text-[#B8860B]">Menu</span>
            </h1>
            <p className="font-sans text-[#666666] text-lg md:text-xl leading-relaxed font-light">
              Experience premium care with our extensive range of bespoke salon services. Elevated aesthetics, tailored for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="py-12 bg-white border-y border-[#D4AF37]/10 relative z-20 shadow-[0_0_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {featuredCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div 
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#FAF8F5] border border-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#B8860B] group-hover:border-[#B8860B] transition-all duration-500 shadow-sm">
                    <Icon className="w-7 h-7 text-[#B8860B] group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
                  </div>
                  <h3 className="font-heading text-lg text-[#1a1a1a] mb-1">{cat.title}</h3>
                  <p className="font-sans text-[12px] uppercase tracking-widest text-[#999999] font-medium">{cat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Accordion */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent opacity-60" />
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-[#D4AF37]">Ready for a transformation?</h2>
            <p className="font-sans text-white/70 text-lg mb-10 font-light">
              Book your appointment today and step into a world of luxury and elegance.
            </p>
            <a
              href={`https://wa.me/${siteConfig?.whatsappNumber}?text=Hello,%20I%20would%20like%20to%20book%20a%20luxury%20salon%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#B8860B] to-[#96700A] text-white font-sans text-[14px] uppercase tracking-[0.2em] font-medium px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(184,134,11,0.4)]"
            >
              Book an Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
