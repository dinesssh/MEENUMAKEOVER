"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, CheckCircle2, Star, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";

const Instagram = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsApp = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const trustRef = useRef<HTMLDivElement>(null);

  // Trust Bar Animations
  useGSAP(() => {
    gsap.fromTo(
      trustRef.current?.children as HTMLCollection,
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: { trigger: trustRef.current, start: "top 85%" } 
      }
    );
  }, { scope: trustRef });

  const mapUrl = "https://maps.app.goo.gl/WuMsh4oM7TZFVhP18";
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Meenu%20Makeover%2C%20I%20would%20like%20to%20know%20more%20about%20your%20bridal%20and%20salon%20services.`;

  return (
    <>
      <footer className="bg-[#111111] text-[#F7F3ED] relative overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(200,161,90,0.1),_transparent_60%)] pointer-events-none" />

        {/* ── Trust Bar ── */}
        <div className="border-b border-[#C8A15A]/10 bg-[#1A1A1A]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
            <div ref={trustRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#C8A15A]/10">
              {[
                { icon: Sparkles, value: "750+", label: "Happy Brides" },
                { icon: Star, value: "10+", label: "Years Experience" },
                { icon: Star, value: "4.9★", label: "Client Rating" },
                { icon: CheckCircle2, value: "100%", label: "Premium Products" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center pt-6 md:pt-0 first:pt-0">
                  <div className="text-[#C8A15A] mb-2"><stat.icon size={20} strokeWidth={1.5} /></div>
                  <span className="font-heading text-2xl text-white mb-1">{stat.value}</span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C8A15A] font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
            
            {/* COLUMN 1 – BRAND */}
            <div className="lg:pr-8">
              <Link href="/" className="inline-block mb-6">
                <div className="relative w-20 h-20">
                  <Image src="/logo.webp" alt="Meenu Makeover" fill className="object-contain" />
                </div>
              </Link>
              <h3 className="font-heading text-2xl text-white mb-4">Meenu Makeover</h3>
              <p className="font-sans text-[14px] text-white/60 font-light leading-relaxed mb-8">
                Luxury bridal artistry crafted for modern Tamil brides. For over a decade, we have created timeless bridal transformations with premium products, personalized styling, and exceptional attention to detail.
              </p>
            </div>

            {/* COLUMN 2 – EXPLORE */}
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#C8A15A] font-semibold mb-8">Explore</h4>
              <ul className="space-y-4">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/#about" },
                  { label: "Bridal Services", href: "/bridal" },
                  { label: "Salon Services", href: "/salon" },
                  { label: "Gallery", href: "/#gallery" },
                  { label: "Contact", href: "/#booking" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="font-sans text-[14px] text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 – CONTACT */}
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#C8A15A] font-semibold mb-8">Contact & Location</h4>
              
              <div className="space-y-4 mb-8">
                <a 
                  href={`https://wa.me/${siteConfig.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 font-sans text-sm text-white/80 hover:text-[#C8A15A] transition-colors"
                >
                  <WhatsApp size={16} /> +{siteConfig.whatsappNumber}
                </a>
                <a 
                  href="https://instagram.com/meenu_makeover_madurai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 font-sans text-sm text-white/80 hover:text-[#C8A15A] transition-colors"
                >
                  <Instagram size={16} /> @meenu_makeover_madurai
                </a>
              </div>

              <div className="bg-[#1A1A1A] border border-white/10 p-6 rounded-sm relative group overflow-hidden">
                <div className="absolute inset-0 bg-[url('/map-placeholder.jpg')] bg-cover bg-center opacity-20 grayscale group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#1A1A1A]/80 group-hover:bg-[#1A1A1A]/60 transition-colors duration-500" />
                
                <div className="relative z-10 flex flex-col items-start h-full">
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="text-[#C8A15A] shrink-0 mt-1" size={20} />
                    <div>
                      <h5 className="font-heading text-lg text-white mb-1">Meenu Makeover Studio</h5>
                      <p className="font-sans text-xs text-white/60 leading-relaxed">Madurai, Tamil Nadu<br />India</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col w-full gap-3 mt-auto">
                    <a 
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#C8A15A] text-white font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-[#B8860B] transition-colors rounded-sm font-medium"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[11px] uppercase tracking-[0.1em] text-white/40">
            <p>&copy; {currentYear} Meenu Makeover Studio. All rights reserved.</p>
            <p className="text-[#C8A15A]">Designed for the Modern Bride.</p>
          </div>

        </div>
      </footer>

    </>
  );
}
