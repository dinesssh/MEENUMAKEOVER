"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { usePlausible } from "next-plausible";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const Instagram = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);



const navLinks = [
  { name: "Home",     href: "/" },
  { name: "About",    href: "/#about" },
  { name: "Bridal",   href: "/bridal-services" },
  { name: "Salon",    href: "/salon-services" },
  { name: "Gallery",  href: "/gallery" },
  { name: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const plausible = usePlausible();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-between px-6 md:px-12",
          isScrolled || isMenuOpen
            ? "bg-[#111111]/95 backdrop-blur-md h-20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent h-28"
        )}
      >
        {/* ── Logo + Brand Text ── */}
        <Link href="/" className="flex items-center gap-4 flex-shrink-0 group z-50" onClick={() => setIsMenuOpen(false)}>
          {/* Logo image */}
          <div className="relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-105 rounded-full overflow-hidden border border-[#B8860B]/30 shadow-[0_0_10px_rgba(184,134,11,0.2)]">
            <Image
              src="/logo.webp"
              alt="Meenu Makeover"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Brand text */}
          <div className="flex flex-col justify-center leading-none border-l border-[#B8860B]/40 pl-4 py-1">
            <span className="font-heading text-[#D4AF37] text-lg md:text-xl tracking-[0.15em] leading-snug drop-shadow-md">
              Meenu Makeover
            </span>
            <span className="font-sans text-white/60 text-[9px] md:text-[10px] tracking-[0.3em] uppercase mt-1">
              Luxury Bridal Studio
            </span>
          </div>
        </Link>

        {/* ── Menu Trigger ── */}
        <button
          onClick={toggleMenu}
          className="flex items-center gap-3 group z-50 focus:outline-none"
          aria-label="Toggle menu"
          suppressHydrationWarning
        >
          <span className="hidden md:block font-sans text-[11px] uppercase tracking-[0.2em] font-medium text-white group-hover:text-[#B8860B] transition-colors duration-300">
            {isMenuOpen ? "Close" : "Menu"}
          </span>
          <div className="relative w-8 h-8 flex items-center justify-center">
            {isMenuOpen ? (
              <X size={28} className="text-white group-hover:text-[#B8860B] transition-colors duration-300" />
            ) : (
              <div className="flex flex-col gap-1.5 items-end">
                <span className="block w-7 h-px bg-white group-hover:bg-[#B8860B] transition-all duration-300" />
                <span className="block w-5 h-px bg-white group-hover:bg-[#B8860B] group-hover:w-7 transition-all duration-300" />
                <span className="block w-7 h-px bg-white group-hover:bg-[#B8860B] transition-all duration-300" />
              </div>
            )}
          </div>
        </button>
      </header>

      {/* ── Full Screen Luxury Menu Overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-[90] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible delay-200"
        )}
      >
        {/* Background Layers */}
        <div 
          className={cn(
            "absolute inset-0 bg-[#111111]/90 backdrop-blur-2xl transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]",
            isMenuOpen ? "scale-y-100 origin-top" : "scale-y-0 origin-bottom"
          )}
        />
        <div 
          className={cn(
            "absolute inset-0 bg-[url('/bg-pattern.png')] opacity-5 transition-opacity duration-1000 delay-300",
            isMenuOpen ? "opacity-5" : "opacity-0"
          )}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start h-full pt-32 pb-16">
          
          {/* Left Side: Navigation Links */}
          <nav className="flex flex-col space-y-6 md:space-y-8 w-full md:w-auto text-center md:text-left mt-10 md:mt-20">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "group overflow-hidden inline-block transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="font-sans text-[12px] text-[#B8860B] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">0{idx + 1}</span>
                  <span className="font-heading text-[40px] md:text-[64px] lg:text-[80px] text-white/90 group-hover:text-white transition-colors duration-300 leading-none">
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
          </nav>

          {/* Right Side: Contact & Socials */}
          <div className={cn(
            "flex flex-col items-center md:items-end w-full md:w-auto mt-16 md:mt-24 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
            isMenuOpen ? "translate-x-0 opacity-100 delay-[400ms]" : "translate-x-12 opacity-0"
          )}>
            
            <div className="text-center md:text-right mb-12">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B8860B] block mb-4">Bookings & Inquiries</span>
              <a 
                href={`https://wa.me/${siteConfig.whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-sans text-xl md:text-2xl text-white font-light tracking-wide hover:text-[#B8860B] transition-colors"
                onClick={() => { plausible("whatsapp_nav_click"); setIsMenuOpen(false); }}
              >
                +{siteConfig.whatsappNumber}
              </a>
              <a 
                href="mailto:contact@meenumakeover.in" 
                className="block font-sans text-sm md:text-base text-white/50 font-light tracking-wide hover:text-white transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                contact@meenumakeover.in
              </a>
            </div>

            <div className="text-center md:text-right mb-12">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B8860B] block mb-4">Follow Us</span>
              <div className="flex gap-6 justify-center md:justify-end">
                <a href={siteConfig.instagram || "#"} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#B8860B] hover:-translate-y-1 transition-all duration-300">
                  <Instagram size={24} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-[#B8860B] text-white font-sans text-[11px] uppercase tracking-[0.2em] font-medium px-10 py-5 rounded-sm hover:bg-[#96700A] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(184,134,11,0.2)]"
            >
              Book Consultation
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
