import Link from "next/link";
import { Check, Sparkles, MapPin, ArrowRight } from "lucide-react";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import testimonialsData from "@/data/testimonials.json";
import { siteConfig } from "@/config/site";
import React from "react";

export interface SeoLandingPageProps {
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  aboutTitle: string;
  aboutContent: React.ReactNode;
  whyChooseUsCards: { title: string; desc: string }[];
  processSteps: { title: string; desc: string }[];
  areasWeServe: string[];
  faqs: { q: string; a: string }[];
  pageUrl: string;
  keyword: string;
}

export default function SeoLandingPage({
  heroTitle,
  heroSubtitle,
  aboutTitle,
  aboutContent,
  whyChooseUsCards,
  processSteps,
  areasWeServe,
  faqs,
  pageUrl,
  keyword,
}: SeoLandingPageProps) {
  const fullUrl = `https://${siteConfig.domain}${pageUrl}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Meenu Makeover",
    "image": `https://${siteConfig.domain}/og-default.jpg`,
    "url": fullUrl,
    "telephone": `+${siteConfig.whatsappNumber}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN",
    },
    "description": heroSubtitle,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://${siteConfig.domain}/`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": keyword,
        "item": fullUrl,
      },
    ],
  };

  const whatsappText = encodeURIComponent(`Hello, I'm interested in your ${keyword} services.`);

  return (
    <main className="min-h-screen bg-[#FDF8F0] pt-24 text-[#2C2C2C]">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B8860B]/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#B8860B]/10 border border-[#B8860B]/30 rounded-full mb-8">
              <Sparkles size={14} className="text-[#B8860B]" />
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B8860B]">Luxury Bridal Studio</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              {heroTitle}
            </h1>
            <p className="font-sans text-[#4A4A4A] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#booking" className="w-full sm:w-auto px-8 py-4 bg-[#B8860B] text-white font-sans text-[11px] uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-[#96700A] transition-all shadow-lg hover:shadow-xl text-center">
                Book Consultation
              </a>
              <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-sans text-[11px] uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl text-center">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white border-y border-[#E5E5E5]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">{aboutTitle}</h2>
            <div className="prose prose-lg text-[#4A4A4A] font-light leading-relaxed max-w-none">
              {aboutContent}
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
              <h2 className="font-heading text-3xl md:text-4xl mb-8">Bridal Makeup Process</h2>
              <p className="font-sans text-[#4A4A4A] mb-8 leading-relaxed font-light">Achieving perfection requires meticulous planning and flawless execution. Here is how we bring your dream look to life:</p>
              
              <div className="space-y-6">
                {processSteps.map((step, idx) => (
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
                <h2 className="font-heading text-3xl mb-8">Why Choose Meenu Makeover</h2>
                
                <ul className="space-y-6">
                  {whyChooseUsCards.map((item, idx) => (
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

      {/* Areas We Serve */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#E5E5E5]">
        <div className="section-container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="font-sans text-[11px] uppercase tracking-[0.3em] font-medium text-[#B8860B] mb-4">Local Expertise</p>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">Areas We Serve</h2>
              <p className="font-sans text-[#4A4A4A] font-light leading-relaxed mb-6">
                While our luxury studio is based in the heart of the city, our reputation extends far beyond. We provide exclusive on-venue bridal styling across all major locations in and around Madurai.
              </p>
              <p className="font-sans text-[#4A4A4A] font-light leading-relaxed">
                We regularly travel to luxury hotels, resorts, and wedding mandapams in these areas, ensuring you receive premium service wherever you choose to tie the knot.
              </p>
            </div>
            <div className="flex-1 w-full bg-[#FDF8F0] p-8 md:p-12 border border-[#E5E5E5] rounded-sm">
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                {areasWeServe.map(area => (
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
            {faqs.map((faq, idx) => (
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
