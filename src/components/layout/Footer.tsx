import Link from "next/link";
import Image from "next/image";
import { Hash, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-black text-ivory/80 pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <Link href="/" className="relative h-10 w-40 block">
                <Image src="/logo.PNG" alt="Meenu Makeover Studio" fill className="object-contain object-left" />
              </Link>
              <p className="text-sm font-sans max-w-sm leading-relaxed">
                Madurai&apos;s premier luxury bridal makeup studio. Where tradition meets timeless elegance for the modern Tamil bride.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gold font-accent tracking-widest text-sm mb-6 uppercase">Explore</h4>
              <ul className="space-y-4 font-sans text-sm">
                <li><a href="#about" className="hover:text-gold transition-colors">Our Story</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-gold transition-colors">Bridal Gallery</a></li>
                <li><a href="#packages" className="hover:text-gold transition-colors">Packages</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-gold font-accent tracking-widest text-sm mb-6 uppercase">Studio</h4>
              <ul className="space-y-4 font-sans text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>Madurai, Tamil Nadu<br/>India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gold shrink-0" />
                  <a href={`tel:+${siteConfig.whatsappNumber}`} className="hover:text-gold transition-colors">{siteConfig.displayWhatsapp}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Hash size={18} className="text-gold shrink-0" />
                  <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">{siteConfig.instagramHandle}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
            <p>&copy; {currentYear} Meenu Makeover Studio. All rights reserved.</p>
            <p className="tracking-wide">Designed with ❤️ for Modern Tamil Brides</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I'm%20interested%20in%20booking%20a%20consultation`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-black text-xs font-accent py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
          Book Consultation
        </span>
      </a>
    </>
  );
}
