"use client";

import { useState, useEffect } from "react";
import { MessageCircle, CalendarHeart, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { usePlausible } from "next-plausible";
import { cn } from "@/lib/utils";

export default function ConversionElements() {
  const [showExitModal, setShowExitModal] = useState(false);
  const [isBookingVisible, setIsBookingVisible] = useState(false);
  const plausible = usePlausible();

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenExitModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowExitModal(true);
        sessionStorage.setItem("hasSeenExitModal", "true");
        plausible("exit_modal_shown");
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, [plausible]);

  useEffect(() => {
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

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Meenu%20Makeover%2C%20I%20would%20like%20to%20know%20more%20about%20your%20bridal%20and%20salon%20services.`;

  return (
    <>
      {/* ── Stacked floating elements (bottom-right, desktop) ── */}
      <div 
        className={cn(
          "fixed bottom-8 right-6 md:right-10 z-[60] hidden md:flex flex-col items-end gap-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isBookingVisible ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
        )}
      >
        {/* "Book Your Date" pill */}
        <a
          href="#booking"
          aria-label="Book your date"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white/95 backdrop-blur-sm border border-[#B8860B]/30 text-[#2C2C2C] font-sans text-[10px] tracking-[0.2em] font-medium uppercase rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-[#B8860B] transition-all duration-300 whitespace-nowrap"
        >
          <CalendarHeart size={14} className="text-[#B8860B] group-hover:scale-110 transition-transform duration-300" />
          Book Your Date
        </a>

        {/* WhatsApp bubble */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => plausible("whatsapp_float_click")}
          aria-label="Message on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#111111] text-white rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.2)] border border-white/10 hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
        >
          <MessageCircle size={22} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="absolute right-full mr-4 bg-[#111111] text-white text-[10px] font-sans uppercase tracking-[0.2em] px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 shadow-xl">
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
        className={cn(
          "fixed bottom-6 right-6 z-[60] md:hidden flex items-center justify-center w-14 h-14 bg-[#111111] border border-white/20 text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isBookingVisible ? "translate-y-[150%] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        )}
      >
        <MessageCircle size={22} />
      </a>

      {/* ── Luxury Exit-Intent Modal ── */}
      {showExitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-[#111111]/80 backdrop-blur-md"
            onClick={() => setShowExitModal(false)}
          />
          <div className="relative w-full max-w-[480px] bg-white border border-[#B8860B]/20 shadow-[0_30px_60px_rgba(0,0,0,0.2)] p-12 lg:p-14 rounded-sm animate-in zoom-in-95 fade-in duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <button
              onClick={() => setShowExitModal(false)}
              className="absolute top-6 right-6 text-[#2C2C2C]/40 hover:text-[#B8860B] transition-colors focus:outline-none"
              aria-label="Close"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <div className="text-center">
              <span className="block w-px h-12 bg-gradient-to-b from-transparent to-[#B8860B]/40 mx-auto mb-8" />
              <h3 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] leading-tight mb-6">
                Planning Your Dream <br />
                <span className="italic text-[#B8860B]">Bridal Look?</span>
              </h3>
              <p className="font-sans text-[#4A4A4A] text-[15px] font-light leading-relaxed mb-10">
                Let's discuss your wedding date, style preferences, and how we can bring your vision to life.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowExitModal(false);
                    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-4.5 bg-[#B8860B] text-white font-sans text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#96700A] transition-colors rounded-sm"
                >
                  Reserve Consultation
                </a>
                <button
                  onClick={() => setShowExitModal(false)}
                  className="w-full py-3 text-[#2C2C2C]/50 hover:text-[#B8860B] font-sans text-[10px] tracking-[0.2em] uppercase transition-colors"
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
