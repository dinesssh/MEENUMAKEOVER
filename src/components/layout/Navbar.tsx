"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePlausible } from "next-plausible";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { TYPE_TOKENS } from "@/lib/typography";
import { H3 } from "@/components/ui/Typography";

const navLinks = [
  { name: "Home",     href: "/" },
  { name: "About",    href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Gallery",  href: "/#gallery" },
  { name: "Bridal",   href: "/bridal" },
  { name: "Salon",    href: "/salon" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const plausible = usePlausible();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#2e1e12]/98 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.4)] h-16"
            : "bg-[#2e1e12]/92 backdrop-blur-sm h-20"
        }`}
      >
        <div className="section-container h-full flex items-center justify-between">

        {/* ── Logo + Brand Text ── */}
        <Link href="/" className="flex items-center gap-4 flex-shrink-0">
          {/* Logo image */}
          <div className="relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14">
            <Image
              src="/logo.webp"
              alt="Meenu Makeover"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Brand text */}
          <div className="flex flex-col justify-center leading-none border-l border-[#b8893e]/30 pl-4">
            <span className="font-heading text-[#d4a574] text-base md:text-lg tracking-[0.12em] leading-snug">
              Meenu Makeover
            </span>
            <span className="font-accent text-white/40 text-[8px] md:text-[9px] tracking-[0.25em] uppercase mt-0.5">
              Luxury Bridal Studio
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav (centered via flex-1) ── */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(TYPE_TOKENS.navLink, "text-white/65 hover:text-[#d4a574] transition-colors duration-200")}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ── CTA Button ── */}
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I%27m%20interested%20in%20a%20bridal%20consultation`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => plausible("whatsapp_nav_click")}
          className={cn(TYPE_TOKENS.button, "hidden lg:inline-flex items-center gap-2 px-5 py-2 border border-[#b8893e]/60 text-[#d4a574] rounded-full hover:bg-[#b8893e] hover:text-[#2e1e12] hover:border-[#b8893e] transition-all duration-300 flex-shrink-0")}
        >
          Book Consultation
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden text-white/80 hover:text-[#d4a574] transition-colors p-3 -mr-3"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          suppressHydrationWarning
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 bg-[#2e1e12] z-[100] flex flex-col items-center justify-center gap-12 transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 p-6 text-[#f5efe6] hover:text-[#d4a574] transition-colors"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              <H3 className="text-[#f5efe6] tracking-widest hover:text-[#d4a574] transition-colors">{link.name}</H3>
            </Link>
          ))}
        </nav>

        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I%27m%20interested%20in%20a%20bridal%20consultation`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className={cn(TYPE_TOKENS.button, "mt-6 px-8 py-4 border border-[#b8893e] text-[#d4a574] rounded-full hover:bg-[#b8893e] hover:text-[#2e1e12] transition-colors")}
        >
          Book Consultation
        </a>
      </div>
    </>
  );
}
