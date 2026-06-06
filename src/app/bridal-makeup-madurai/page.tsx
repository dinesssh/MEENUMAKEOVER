import type { Metadata } from "next";
import SeoLandingPage from "@/components/templates/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Bridal Makeup Artist in Madurai | Meenu Makeover",
  description: "Looking for the best Bridal Makeup Artist in Madurai? Meenu Makeover offers luxury HD, Airbrush, and Waterproof bridal makeup services for your big day.",
  alternates: {
    canonical: `https://${siteConfig.domain}/bridal-makeup-madurai`,
  },
  openGraph: {
    title: "Bridal Makeup Artist in Madurai | Meenu Makeover",
    description: "Looking for the best Bridal Makeup Artist in Madurai? Meenu Makeover offers luxury HD, Airbrush, and Waterproof bridal makeup.",
    url: `https://${siteConfig.domain}/bridal-makeup-madurai`,
    images: ["/og-default.jpg"],
  },
};

export default function BridalMakeupMadurai() {
  const keyword = "Bridal Makeup Artist in Madurai";

  return (
    <SeoLandingPage
      keyword={keyword}
      pageUrl="/bridal-makeup-madurai"
      heroTitle={
        <>
          Best <span className="text-[#B8860B]">Bridal Makeup Artist</span> in Madurai
        </>
      }
      heroSubtitle="Elevate your wedding look with Meenu Makeover. Specializing in flawless, luxury bridal makeup tailored specifically for the modern bride."
      aboutTitle="Flawless Beauty for Your Special Day"
      aboutContent={
        <>
          <p className="mb-6">
            Your wedding day is one of the most important milestones of your life, and finding the perfect <strong>Bridal Makeup Artist in Madurai</strong> is absolutely essential to ensuring you look and feel your best. At Meenu Makeover, we understand that every bride has a unique vision for her big day. Whether you desire a traditional, opulent South Indian bridal look complete with heavy temple jewelry and silk sarees, or a contemporary, subtle, and natural glow, our expert artistry is tailored precisely to your facial features, skin type, and personal preferences.
          </p>
          <p className="mb-6">
            As Madurai's premier luxury bridal studio, we pride ourselves on utilizing only high-end, premium international cosmetic products that guarantee a flawless, camera-ready finish. The humid climate of South India requires specialized application techniques to ensure makeup does not melt or crease. From intricate, expressive eye makeup to perfectly pleated and draped sarees, along with elegant floral hairstyling, we provide a completely comprehensive beauty experience that transforms you from head to toe.
          </p>
          <p className="mb-6">
            We specialize in advanced, modern techniques, meaning when you book the leading <strong>Bridal Makeup Artist in Madurai</strong>, you are guaranteed access to premium services. Our expertise ensures your look remains pristine, completely sweat-proof, and tear-proof from the early morning rituals all the way to the late-night reception. We meticulously blend foundation to match your exact undertone, ensuring no white cast under harsh photography flashes, leaving you with a radiant, lit-from-within glow.
          </p>
          <p>
            Understanding the bustling and often chaotic nature of Indian weddings, we also offer exclusive <strong>on-venue makeup services</strong>. Our professional team travels directly to your wedding hall, hotel, or residence within Madurai and surrounding regions, bringing the entire luxury studio experience to your doorstep. This allows you to relax, stay comfortable, and enjoy the pampering without the stress of traveling through traffic on your wedding day. Trust Meenu Makeover to deliver unmatched elegance and perfection for your once-in-a-lifetime celebration.
          </p>
        </>
      }
      whyChooseUsCards={[
        { title: "Premium Products", desc: "We use elite brands like MAC, Huda Beauty, NARS, and Charlotte Tilbury for skin-safe, flawless results." },
        { title: "HD Makeup Expertise", desc: "Certified mastery in high-definition makeup techniques that photograph perfectly under intense stage lighting." },
        { title: "Airbrush Makeup Expertise", desc: "Advanced silicone-based airbrush application for a lightweight, poreless, and completely waterproof finish." },
        { title: "Long Lasting Finish", desc: "Sweat-resistant and tear-proof formulas designed specifically to withstand the humid Madurai climate." },
        { title: "Bridal Hairstyling", desc: "Custom traditional and contemporary hair styling, including intricate floral arrangements and extensions." },
        { title: "Personalized Looks", desc: "Every bride receives dedicated time and a customized look designed to complement her outfit and jewelry." }
      ]}
      processSteps={[
        { title: "Initial Consultation", desc: "We discuss your outfits, jewelry, venue lighting, and personal preferences to design a customized makeup look." },
        { title: "Skin Preparation", desc: "We analyze your skin type and recommend a tailored skincare routine leading up to the wedding." },
        { title: "Makeup Trial", desc: "Test out your desired look prior to the wedding, giving you complete confidence and peace of mind." },
        { title: "Bridal Styling", desc: "Our team applies long-lasting makeup, followed by expert hair styling and seamless traditional saree draping." },
        { title: "Final Touchups", desc: "We lock the look in place using professional setting sprays, guaranteeing you remain radiant through every photograph." }
      ]}
      areasWeServe={[
        "Madurai City", "Anna Nagar", "KK Nagar", "Melur", 
        "Thirumangalam", "Tirupparankundram", "Koodal Nagar", "Nearby Wedding Venues"
      ]}
      faqs={[
        { q: "How much does bridal makeup cost in Madurai?", a: "Our bridal packages are competitively priced based on the techniques and services required. Premium services vary in cost depending on whether you choose HD or Airbrush makeup. Please contact us directly for a personalized quote tailored to your specific wedding events." },
        { q: "Do you offer HD makeup?", a: "Yes, we specialize in high-definition (HD) bridal makeup. This technique uses light-scattering ingredients to create a flawless, natural look that hides blemishes and looks perfect both in person and on high-resolution cameras." },
        { q: "Do you offer Airbrush makeup?", a: "Yes! As a leading Bridal Makeup Artist in Madurai, we provide premium airbrush makeup services. This involves spraying a fine mist of silicone-based foundation onto the skin, resulting in a completely waterproof, lightweight, and poreless finish." },
        { q: "Do you travel to wedding venues?", a: "Absolutely. We offer convenient on-location services and can travel to your home, hotel, or wedding mandapam anywhere in and around Madurai to provide a stress-free dressing experience." },
        { q: "Do you provide bridal trials?", a: "Yes, we highly recommend a bridal trial. It gives us the opportunity to understand your skin type, test out different looks, and ensure you are 100% satisfied with your final appearance before the actual wedding day." },
        { q: "How long does bridal makeup last?", a: "By utilizing high-end international products, waterproof formulas, and professional setting techniques, our bridal makeup is designed to last over 12-16 hours without melting or creasing." },
        { q: "What products do you use?", a: "We only use premium, 100% authentic international brands such as MAC, Huda Beauty, NARS, Kryolan, Estée Lauder, and Charlotte Tilbury to ensure safety, longevity, and a luxurious finish." },
        { q: "How early should I book?", a: "We recommend booking your Bridal Makeup Artist in Madurai at least 3 to 6 months in advance, especially during peak wedding seasons (Muhurtham dates), to secure your preferred slot." }
      ]}
    />
  );
}
