"use client";

import { useState, useEffect } from "react";
import { MessageCircle, CalendarHeart, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { usePlausible } from "next-plausible";

export default function ConversionElements() {
  const [showExitModal, setShowExitModal] = useState(false);
  const [isBookingVisible, setIsBookingVisible] = useState(false);
  const plausible = usePlausible();

  useEffect(() => {
    // Show modal after 1 minute
    const hasSeenModal = sessionStorage.getItem("hasSeenExitModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowExitModal(true);
        sessionStorage.setItem("hasSeenExitModal", "true");
        plausible("exit_modal_shown");
      }, 60000); // 1 minute in milliseconds
      return () => clearTimeout(timer);
    }
  }, [plausible]);

  useEffect(() => {
    // Intersection Observer for #booking
    const bookingEl = document.getElementById("booking");
    if (!bookingEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBookingVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(bookingEl);
    return () => observer.disconnect();
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I%27m%20interested%20in%20booking%20a%20bridal%20consultation`;

  return (
    <>
      {/*
       * ── Stacked floating elements (bottom-right, desktop) ──
       * Order (top → bottom):  "Book Your Date" pill  →  WhatsApp bubble
       */}
      <div 
        className={`fixed bottom-8 right-6 z-50 hidden md:flex flex-col items-end gap-3 transition-opacity duration-300 ${
          isBookingVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* "Book Your Date" pill */}
        <a
          href="#booking"
          aria-label="Book your date"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#2e1e12] border border-[#b8893e]/40 text-[#d4a574] font-sans text-[10px] tracking-[0.2em] uppercase rounded-full shadow-xl hover:bg-[#b8893e] hover:text-[#2e1e12] hover:border-[#b8893e] focus:outline-none focus:ring-2 focus:ring-[#b8893e] transition-all duration-300 whitespace-nowrap"
        >
          <CalendarHeart size={15} />
          Book Your Date
        </a>

        {/* WhatsApp bubble */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => plausible("whatsapp_float_click")}
          aria-label="Message on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 transition-all duration-300"
        >
          <MessageCircle size={26} />
          <span className="absolute right-full mr-3 bg-white text-black text-xs font-sans tracking-widest px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
            Chat with us
          </span>
        </a>
      </div>

      {/* ── Mobile: WhatsApp ── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => plausible("whatsapp_float_click")}
        aria-label="Message on WhatsApp"
        className="fixed bottom-6 right-6 mb-[env(safe-area-inset-bottom)] z-50 md:hidden flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={26} />
      </a>
      {/* ── Luxury Exit-Intent Modal ── */}
      {showExitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={() => setShowExitModal(false)}
          />
          <div className="relative w-full max-w-md bg-[#f5efe6] border border-[#b8893e]/20 shadow-2xl p-10 md:p-12 rounded-sm animate-in zoom-in-95 fade-in duration-400">
            <button
              onClick={() => setShowExitModal(false)}
              className="absolute top-4 right-4 text-[#2e1e12]/30 hover:text-[#2e1e12] transition-colors"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <div className="text-center">
              <span className="block w-10 h-px bg-[#b8893e] mx-auto mb-7" />
              <h3 className="font-heading text-3xl md:text-4xl text-[#2e1e12] leading-tight mb-4">
                Planning Your Dream
                <br />
                <em className="italic font-light text-[#7a5520]">Bridal Look?</em>
              </h3>
              <p className="font-sans text-[#2e1e12]/55 text-sm leading-relaxed mb-9">
                Let&apos;s discuss your wedding date, style preferences, and bridal package options.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowExitModal(false);
                    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-4 bg-[#4a2f1c] text-[#f5efe6] font-sans text-xs tracking-[0.22em] uppercase hover:bg-[#2e1e12] transition-colors"
                >
                  Reserve Consultation
                </a>
                <button
                  onClick={() => setShowExitModal(false)}
                  className="w-full py-3 text-[#2e1e12]/40 hover:text-[#2e1e12] font-sans text-xs tracking-widest uppercase transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
