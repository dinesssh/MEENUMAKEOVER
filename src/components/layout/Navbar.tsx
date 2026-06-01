"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { usePlausible } from "next-plausible";
import { siteConfig } from "@/config/site";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Packages", href: "/packages" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const plausible = usePlausible();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled ? "bg-black/95 backdrop-blur-md py-4 border-white/10" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="relative h-8 w-32 md:h-10 md:w-40 flex items-center"
        >
          <Image src="/logo.PNG" alt="Meenu Makeover Studio" fill className="object-contain object-left" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-ivory/80 hover:text-gold transition-colors font-accent tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I'm%20interested%20in%20booking%20a%20consultation`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => plausible("whatsapp_click")}
            className="px-6 py-2.5 bg-gold text-black font-accent text-sm font-medium tracking-wide hover:bg-gold-light transition-colors"
          >
            Book on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-ivory"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="text-2xl text-ivory font-heading tracking-wide hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I'm%20interested%20in%20booking%20a%20consultation`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => plausible("whatsapp_click")}
            className="mt-8 px-8 py-3 bg-gold text-black font-accent text-base font-medium tracking-wide"
          >
            Book on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
