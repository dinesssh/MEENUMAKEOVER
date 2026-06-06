import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, Sparkles, MapPin, ArrowRight } from "lucide-react";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import testimonialsData from "@/data/testimonials.json";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Bridal Makeup Artist in Madurai | Meenu Makeover",
  description: "Professional Bridal Makeup Artist in Madurai offering HD, Airbrush and Waterproof Bridal Makeup services. Book your luxury bridal studio experience.",
  alternates: {
    canonical: `https://${siteConfig.domain}/bridal-makeup-madurai`,
  },
};

export default function BridalMakeupMaduraiPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Meenu Makeover",
    "image": `https://${siteConfig.domain}/og-default.jpg`,
    "url": `https://${siteConfig.domain}/bridal-makeup-madurai`,
    "telephone": `+${siteConfig.whatsappNumber}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "description": "Professional Bridal Makeup Artist in Madurai offering HD, Airbrush and Waterproof Bridal Makeup services."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost of bridal makeup in Madurai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our bridal packages are competitively priced based on the techniques and services required. Premium services like HD Bridal Makeup and Airbrush Makeup vary in cost depending on the exact requirements. Please contact us directly for a personalized quote tailored to your wedding events."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer bridal trials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We highly recommend a bridal trial. It gives us the opportunity to understand your skin type, test out different looks, and ensure you are 100% satisfied with your final appearance before the wedding day."
        }
      },
      {
        "@type": "Question",
        "name": "Do you travel to wedding venues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. As a dedicated Bridal Makeup Artist in Madurai, we offer convenient on-location services. We can travel to your home, hotel, or wedding mandapam to provide a stress-free dressing experience."
        }
      },
      {
        "@type": "Question",
        "name": "How long does bridal makeup last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By utilizing high-end products, waterproof formulas, and professional setting techniques, our bridal makeup is designed to last over 12-16 hours. Whether you choose HD or Airbrush makeup, your look will withstand humidity, sweat, and emotional tears."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#FDF8F0] pt-24 text-[#2C2C2C]">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B8860B]/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#B8860B]/10 border border-[#B8860B]/30 rounded-full mb-8">
              <Sparkles size={14} className="text-[#B8860B]" />
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B8860B]">Madurai's Premier Luxury Studio</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Best <span className="text-[#B8860B]">Bridal Makeup Artist</span> in Madurai
            </h1>
            <p className="font-sans text-[#4A4A4A] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
              Elevate your wedding look with Meenu Makeover. Specializing in flawless HD Makeup and ultra-lightweight Airbrush Makeup for the modern bride.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#booking" className="w-full sm:w-auto px-8 py-4 bg-[#B8860B] text-white font-sans text-[11px] uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-[#96700A] transition-all shadow-lg hover:shadow-xl text-center">
                Book Consultation
              </a>
              <Link href="/bridal-services" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#B8860B] text-[#B8860B] font-sans text-[11px] uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-[#B8860B]/5 transition-all text-center">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white border-y border-[#E5E5E5]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">Flawless Beauty for Your Special Day</h2>
            <div className="prose prose-lg text-[#4A4A4A] font-light leading-relaxed">
              <p className="mb-6">
                Your wedding day is one of the most important moments of your life, and finding the perfect <strong>Bridal Makeup Artist in Madurai</strong> is essential to ensuring you look and feel your absolute best. At Meenu Makeover, we understand that every bride has a unique vision. Whether you desire a traditional, opulent South Indian bridal look or a contemporary, subtle glow, our expert artistry is tailored precisely to your features, skin type, and preferences.
              </p>
              <p className="mb-6">
                As Madurai's premier luxury bridal studio, we pride ourselves on utilizing only high-end, premium international products that guarantee a flawless, camera-ready finish. From intricate eye makeup to perfectly draped sarees and elegant hairstyling, we provide a comprehensive beauty experience. We specialize in advanced techniques like <strong>HD Bridal Makeup Madurai</strong> and <strong>Airbrush Makeup Madurai</strong>, ensuring your look remains pristine, sweat-proof, and tear-proof from the early morning rituals to the late-night reception.
              </p>
              <p>
                Understanding the bustling nature of weddings, we also offer exclusive <strong>on-venue makeup services</strong>. Our professional team travels to your wedding hall, hotel, or residence within Madurai and surrounding regions, bringing the luxury studio experience directly to you. This allows you to relax and enjoy the pampering without the stress of traveling on your big day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Process & Why Choose Us */}
      <section className="py-20 lg:py-32 relative">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* The Process */}
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.3em] font-medium text-[#B8860B] mb-4">How We Work</p>
              <h2 className="font-heading text-3xl md:text-4xl mb-8">Our Signature Bridal Makeup Process</h2>
              <p className="font-sans text-[#4A4A4A] mb-8 leading-relaxed font-light">Achieving perfection requires meticulous planning and flawless execution. Here is how we bring your dream look to life:</p>
              
              <div className="space-y-6">
                {[
                  { title: "Initial Consultation & Vision Board", desc: "We start by discussing your outfits, jewelry, venue lighting, and personal preferences to design a customized makeup look." },
                  { title: "Pre-Wedding Skin Preparation", desc: "We analyze your skin type and recommend a tailored skincare routine leading up to the wedding." },
                  { title: "The Bridal Trial (Optional)", desc: "Test out your desired look with our HD or Airbrush makeup prior to the wedding, giving you complete confidence." },
                  { title: "The Wedding Day Application", desc: "Our team arrives on time at your venue. We apply long-lasting makeup, followed by expert hair styling and seamless saree draping." },
                  { title: "Final Touch-Ups & Setting", desc: "We lock the look in place using professional setting sprays, guaranteeing you remain radiant through every photograph." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B8860B]/10 text-[#B8860B] flex items-center justify-center font-heading text-lg">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-heading text-xl mb-2">{step.title}</h4>
                      <p className="font-sans text-sm text-[#4A4A4A] font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <div className="bg-white p-8 md:p-12 rounded-sm border border-[#E5E5E5] shadow-sm sticky top-32">
                <p className="font-sans text-[11px] uppercase tracking-[0.3em] font-medium text-[#B8860B] mb-4">The Meenu Difference</p>
                <h2 className="font-heading text-3xl mb-8">Why Brides Choose Us</h2>
                
                <ul className="space-y-6">
                  {[
                    { title: "Unmatched Expertise", desc: "Years of professional experience styling hundreds of beautiful brides in Madurai." },
                    { title: "Luxury International Products", desc: "We use elite brands like MAC, Huda Beauty, NARS, and Kryolan for skin-safe, premium results." },
                    { title: "HD & Airbrush Specialists", desc: "Certified mastery in advanced makeup techniques that photograph flawlessly." },
                    { title: "Long-Lasting & Waterproof", desc: "Sweat-resistant formulas designed specifically for the humid South Indian climate." },
                    { title: "Complete Bridal Styling", desc: "Comprehensive packages covering makeup, custom hairstyling, and traditional saree draping." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <Check size={20} className="text-[#B8860B] flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block font-sans text-[15px] font-medium text-[#2C2C2C] mb-1">{item.title}</strong>
                        <span className="font-sans text-sm text-[#4A4A4A] font-light">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Package Preview */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="section-container text-center max-w-4xl mx-auto">
          <Sparkles size={24} className="text-[#B8860B] mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl mb-6">Preview Our Bridal Services</h2>
          <p className="font-sans text-white/70 text-lg leading-relaxed mb-12 font-light">
            We offer customized bridal packages to suit your specific needs, all crafted to deliver an unforgettable luxury experience. Explore our <strong>HD Bridal Makeup</strong> and <strong>Airbrush Makeup</strong> packages tailored for Madurai brides.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-[#B8860B]/40 transition-colors">
              <h3 className="font-heading text-xl mb-3 text-[#B8860B]">HD Makeup</h3>
              <p className="font-sans text-sm text-white/60 font-light">Blemish-free, radiant complexion that looks completely natural on camera.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-[#B8860B]/40 transition-colors">
              <h3 className="font-heading text-xl mb-3 text-[#B8860B]">Airbrush</h3>
              <p className="font-sans text-sm text-white/60 font-light">Ultra-lightweight mist providing a flawless, waterproof, and long-lasting finish.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-[#B8860B]/40 transition-colors">
              <h3 className="font-heading text-xl mb-3 text-[#B8860B]">Kryolan</h3>
              <p className="font-sans text-sm text-white/60 font-light">Time-tested traditional makeup with enhanced longevity for day-long ceremonies.</p>
            </div>
          </div>
          <Link 
            href="/bridal-services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#B8860B] text-white font-sans text-[11px] uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-[#96700A] transition-all"
          >
            View Full Bridal Packages <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="section-container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="font-sans text-[11px] uppercase tracking-[0.3em] font-medium text-[#B8860B] mb-4">Local Expertise</p>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">Areas We Serve in Madurai</h2>
              <p className="font-sans text-[#4A4A4A] font-light leading-relaxed mb-6">
                While our luxury studio is based in the heart of the city, our reputation as the leading Bridal Makeup Artist in Madurai extends far beyond. We provide exclusive on-venue bridal styling across all major locations in and around Madurai.
              </p>
              <p className="font-sans text-[#4A4A4A] font-light leading-relaxed">
                We regularly travel to luxury hotels, resorts, and wedding mandapams in these areas, ensuring you receive premium service wherever you choose to tie the knot.
              </p>
            </div>
            <div className="flex-1 w-full bg-[#FDF8F0] p-8 md:p-12 border border-[#E5E5E5] rounded-sm">
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Anna Nagar", "KK Nagar", "Thiruparankundram", "Tallakulam", 
                  "Bypass Road", "Othakadai", "Kalavasal", "TVS Nagar"
                ].map(area => (
                  <li key={area} className="flex items-center gap-2 text-[#2C2C2C] font-sans text-sm">
                    <MapPin size={14} className="text-[#B8860B]" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials reviews={testimonialsData} />

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white border-t border-[#E5E5E5]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] font-medium text-[#B8860B] mb-4">Clarifications</p>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "What is the cost of bridal makeup in Madurai?",
                a: "Our bridal packages are competitively priced based on the techniques and services required. Premium services like HD Bridal Makeup and Airbrush Makeup vary in cost depending on the exact requirements. Please contact us directly for a personalized quote tailored to your wedding events."
              },
              {
                q: "Do you offer bridal trials?",
                a: "Yes! We highly recommend a bridal trial. It gives us the opportunity to understand your skin type, test out different looks, and ensure you are 100% satisfied with your final appearance before the wedding day."
              },
              {
                q: "Do you travel to wedding venues?",
                a: "Absolutely. As a dedicated Bridal Makeup Artist in Madurai, we offer convenient on-location services. We can travel to your home, hotel, or wedding mandapam to provide a stress-free dressing experience."
              },
              {
                q: "How long does bridal makeup last?",
                a: "By utilizing high-end products, waterproof formulas, and professional setting techniques, our bridal makeup is designed to last over 12-16 hours. Whether you choose HD or Airbrush makeup, your look will withstand humidity, sweat, and emotional tears."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-[#E5E5E5] rounded-sm p-6 bg-[#FDF8F0]/50 hover:border-[#B8860B]/30 transition-colors">
                <h3 className="font-heading text-xl mb-3 text-[#2C2C2C]">{faq.q}</h3>
                <p className="font-sans text-[#4A4A4A] font-light leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Booking */}
      <div id="booking">
        <Booking />
      </div>

    </main>
  );
}
