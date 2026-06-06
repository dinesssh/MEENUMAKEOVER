import Preloader from "@/components/layout/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedPackages from "@/components/sections/FeaturedPackages";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Scarcity from "@/components/sections/Scarcity";
import Booking from "@/components/sections/Booking";
import fs from "fs";
import path from "path";
import testimonialsData from "@/data/testimonials.json";
import { siteConfig } from "@/config/site";

async function getTestimonials() {
  return testimonialsData;
}

export default async function Home() {
  const testimonials = await getTestimonials();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": siteConfig.businessName,
    "image": `https://${siteConfig.domain}/og-image.jpg`,
    "url": `https://${siteConfig.domain}`,
    "telephone": `+${siteConfig.whatsappNumber}`,
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "625001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.9252,
      "longitude": 78.1198
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    ...(testimonials.length > 0 && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": (testimonials.reduce((acc: number, cur: Record<string, unknown>) => acc + (typeof cur.rating === 'number' ? cur.rating : 5), 0) / testimonials.length).toFixed(1),
        "reviewCount": testimonials.length
      },
      "review": testimonials.map((t: Record<string, unknown>) => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": t.name
        },
        "datePublished": t.date,
        "reviewBody": t.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t.rating || 5,
          "bestRating": 5,
          "worstRating": 1
        }
      }))
    })
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Preloader />
      
      {/* Sections */}
      <Hero />
      <About />
      <FeaturedPackages />
      <Gallery />
      <Testimonials reviews={testimonials} />
      <Scarcity />
      
      {/* SEO Internal Link Block */}
      <section className="py-12 bg-white text-center border-t border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#4A4A4A] font-light text-sm leading-relaxed mb-4">
            Meenu Makeover is widely recognized as the premier <a href="/bridal-makeup-madurai" className="text-[#B8860B] font-medium hover:underline">Bridal Makeup Artist in Madurai</a>. We specialize in providing luxurious, on-venue transformations for the modern bride.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-[#B8860B]">
            <a href="/hd-bridal-makeup-madurai" className="hover:underline">HD Bridal Makeup</a>
            <a href="/airbrush-makeup-madurai" className="hover:underline">Airbrush Makeup</a>
            <a href="/engagement-makeup-madurai" className="hover:underline">Engagement Makeup</a>
            <a href="/reception-makeup-madurai" className="hover:underline">Reception Makeup</a>
          </div>
        </div>
      </section>

      <Booking />
    </main>
  );
}
