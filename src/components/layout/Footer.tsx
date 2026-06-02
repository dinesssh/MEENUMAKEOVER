import Link from "next/link";
import Image from "next/image";
import { Hash, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BodySm } from "@/components/ui/Typography";
import { TYPE_TOKENS } from "@/lib/typography";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0f08] text-white/70 pt-16 pb-28 sm:pb-10 border-t border-white/5">
      <div className="section-container">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-14">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="relative block w-36 h-14 flex-shrink-0">
              <Image src="/logo.webp" alt="Meenu Makeover Studio" fill className="object-contain object-left" />
            </Link>
            <BodySm className="text-white/55 max-w-xs">
              Madurai&apos;s premier luxury bridal makeup studio. Where tradition meets timeless
              elegance for the modern Tamil bride.
            </BodySm>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={cn(TYPE_TOKENS.headingSm, "text-[#b8893e] mb-6")}>Explore</h4>
            <ul className="space-y-3 font-sans text-sm">
              {["Our Story:#about", "Services:#services", "Bridal Gallery:#gallery", "Packages:#packages", "Book a Consultation:#booking"].map((item) => {
                const [label, href] = item.split(":");
                return (
                  <li key={label}>
                    <a href={href} className="text-white/55 hover:text-[#d4a574] transition-colors">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={cn(TYPE_TOKENS.headingSm, "text-[#b8893e] mb-6")}>Studio</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#b8893e] shrink-0 mt-0.5" />
                <span className="text-white/55">Madurai, Tamil Nadu<br />India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#b8893e] shrink-0" />
                <a href={`tel:+${siteConfig.whatsappNumber}`} className="text-white/55 hover:text-[#d4a574] transition-colors">
                  {siteConfig.displayWhatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Hash size={16} className="text-[#b8893e] shrink-0" />
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-[#d4a574] transition-colors">
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-white/35">
          <p>&copy; {currentYear} Meenu Makeover Studio. All rights reserved.</p>
          <p className="tracking-wide">Designed with ❤️ for Modern Tamil Brides</p>
        </div>

      </div>
    </footer>
  );
}
