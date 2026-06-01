import Preloader from "@/components/layout/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Packages from "@/components/sections/Packages";
import Booking from "@/components/sections/Booking";
import fs from "fs";
import path from "path";
import testimonialsData from "@/data/testimonials.json";
import { siteConfig } from "@/config/site";

async function getTestimonials() {
  return testimonialsData;
}

async function getGalleryItems() {

  const localItems: any[] = [];
  try {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      files.forEach((file, index) => {
        if (file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
          let category = "All";
          const lowerName = file.toLowerCase();
          if (lowerName.includes("bridal")) category = "Bridal";
          else if (lowerName.includes("engagement")) category = "Engagement";
          else if (lowerName.includes("reception")) category = "Reception";
          else if (lowerName.includes("microblading")) category = "Microblading";

          const title = file.split(".")[0].replace(/[_-]/g, " ").replace(/\b\w/g, l => l.toUpperCase());

          localItems.push({
            _id: `local-${index}`,
            title: title,
            category: category,
            image: `/gallery/${file}`,
            aspectRatio: "aspect-[3/4]"
          });
        }
      });
    }
  } catch (error) {
    console.error("Failed to read local gallery files", error);
  }

  return localItems;
}

export default async function Home() {
  const testimonials = await getTestimonials();
  const galleryItems = await getGalleryItems();

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
        "ratingValue": (testimonials.reduce((acc: number, cur: any) => acc + (cur.rating || 5), 0) / testimonials.length).toFixed(1),
        "reviewCount": testimonials.length
      },
      "review": testimonials.map((t: any) => ({
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
      <Services />
      <Gallery items={galleryItems} />
      <Testimonials reviews={testimonials} />
      <Packages />
      <Booking />
    </main>
  );
}
