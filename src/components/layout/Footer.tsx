"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, CheckCircle2, Star, Sparkles, Phone, Camera, MessageCircle } from "lucide-react";
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

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
            
            {/* COLUMN 1 – BRAND */}
            <div className="lg:pr-8">
              <Link href="/" className="inline-block mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#C8A15A]/30">
                  <Image src="/logo.webp" alt="Meenu Makeover" fill className="object-cover" />
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
                  { label: "Bridal Services", href: "/bridal-services" },
                  { label: "Bridal Makeup in Madurai", href: "/bridal-makeup-madurai" },
                  { label: "HD Bridal Makeup", href: "/hd-bridal-makeup-madurai" },
                  { label: "Airbrush Makeup", href: "/airbrush-makeup-madurai" },
                  { label: "Engagement Makeup", href: "/engagement-makeup-madurai" },
                  { label: "Reception Makeup", href: "/reception-makeup-madurai" },
                  { label: "Salon Services", href: "/salon-services" },
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
              
              <div className="space-y-4 mb-6">
                <a 
                  href="tel:+917397631999"
                  className="flex items-center gap-3 font-sans text-[15px] tracking-wide text-white/80 hover:text-[#C8A15A] transition-colors"
                >
                  <Phone size={16} className="text-[#C8A15A]" /> +91 73976 31999
                </a>
                <a 
                  href="https://instagram.com/meenu_makeover_madurai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 font-sans text-[15px] tracking-wide text-white/80 hover:text-[#C8A15A] transition-colors"
                >
                  <Camera size={16} className="text-[#C8A15A]" /> @meenu_makeover_madurai
                </a>
              </div>

              {/* Luxury Contact Action Buttons */}
              <div className="flex gap-3 mb-8 w-full">
                <a href="tel:+917397631999" className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 hover:border-[#C8A15A]/40 rounded-sm hover:bg-white/10 transition-colors group">
                  <Phone size={14} className="text-[#C8A15A] group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-white/80 group-hover:text-white mt-1 sm:mt-0">Call Now</span>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 py-3 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/70 rounded-sm hover:bg-[#25D366]/20 transition-colors group">
                  <MessageCircle size={14} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-white/80 group-hover:text-white mt-1 sm:mt-0">WhatsApp</span>
                </a>
                <a href="https://instagram.com/meenu_makeover_madurai" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 hover:border-[#C8A15A]/40 rounded-sm hover:bg-white/10 transition-colors group">
                  <Instagram size={14} className="text-[#C8A15A] group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-white/80 group-hover:text-white mt-1 sm:mt-0">Instagram</span>
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
