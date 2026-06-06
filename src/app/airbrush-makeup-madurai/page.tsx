import type { Metadata } from "next";
import SeoLandingPage from "@/components/templates/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Airbrush Makeup Artist in Madurai | Meenu Makeover",
  description: "Book the finest Airbrush Makeup Artist in Madurai. Experience ultra-lightweight, 100% waterproof, and silicone-based luxury bridal makeup for a flawless finish.",
  alternates: {
    canonical: `https://${siteConfig.domain}/airbrush-makeup-madurai`,
  },
  openGraph: {
    title: "Airbrush Makeup Artist in Madurai | Meenu Makeover",
    description: "Book the finest Airbrush Makeup Artist in Madurai. Experience ultra-lightweight, 100% waterproof luxury bridal makeup.",
    url: `https://${siteConfig.domain}/airbrush-makeup-madurai`,
    images: ["/og-default.jpg"],
  },
};

export default function AirbrushMakeupMadurai() {
  const keyword = "Airbrush Makeup Artist in Madurai";

  return (
    <SeoLandingPage
      keyword={keyword}
      pageUrl="/airbrush-makeup-madurai"
      heroTitle={
        <>
          Luxury <span className="text-[#B8860B]">Airbrush Makeup Artist</span> in Madurai
        </>
      }
      heroSubtitle="Discover the ultimate in bridal luxury. Experience a feather-light, completely waterproof, and remarkably flawless finish with our advanced airbrush techniques."
      aboutTitle="The Luxury of Airbrush Bridal Makeup"
      aboutContent={
        <>
          <p className="mb-6">
            For brides seeking the absolute pinnacle of luxury and endurance on their wedding day, finding a specialized <strong>Airbrush Makeup Artist in Madurai</strong> is the ultimate game-changer. Airbrush makeup represents the highest tier of modern cosmetic application. Unlike traditional sponges or brushes, airbrushing utilizes a medical-grade compressor to spray a micro-fine mist of silicone-based foundation across the skin. At Meenu Makeover, our certified airbrush experts meticulously layer this mist to create a weightless, breathable, and utterly flawless complexion that looks as natural as your own skin, only perfected.
          </p>
          <p className="mb-6">
            The tropical climate and intense humidity of South India pose significant challenges for traditional makeup, often leading to melting or creasing under heavy bridal jewelry and hot stage lights. By booking the top <strong>Airbrush Makeup Artist in Madurai</strong>, you are investing in a completely waterproof and sweat-proof solution. The silicone-based formulas bind securely to the skin's surface, resisting moisture, tears of joy, and hours of dancing. It effectively conceals acne scars, hyperpigmentation, and uneven skin tones without ever looking thick or cakey, providing an ultra-smooth, poreless finish that HD cameras absolutely love.
          </p>
          <p className="mb-6">
            Beyond the unmatched longevity, the greatest advantage of airbrush makeup is its feather-light feel. Many brides worry about feeling heavily masked on their big day, but the microscopic droplets of airbrush foundation dry instantly on contact, feeling completely weightless. Furthermore, it is incredibly hygienic, as the makeup is sprayed directly onto the skin without any brushes or sponges making physical contact. We complement this flawless base with exquisite, customized eye artistry, rich lip colors, and seamless traditional South Indian saree draping and hairstyling.
          </p>
          <p>
            Meenu Makeover is dedicated to providing a serene, stress-free luxury experience. We bring our high-end airbrush equipment and premium international cosmetic kits directly to your location, offering exclusive on-venue bridal services across Madurai and neighboring areas. Let us transform your bridal vision into reality with the magic of airbrush artistry, ensuring you remain undeniably radiant, comfortable, and picture-perfect from the first morning ritual to the final evening farewell.
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
        { title: "Consultation", desc: "We discuss your vision, outfits, and ensure airbrush makeup is the perfect match for your skin type." },
        { title: "Skin Preparation", desc: "Thorough cleansing and deep hydration to ensure the airbrush mist adheres flawlessly to a smooth canvas." },
        { title: "Makeup Trial", desc: "Experience the weightless feel and incredible coverage of airbrush foundation during your optional trial." },
        { title: "Bridal Styling", desc: "Precision airbrush application, combined with detailed eye makeup, elegant hair styling, and saree draping." },
        { title: "Final Touchups", desc: "The silicone base naturally sets to a waterproof finish, but we add a final sealing mist for 18+ hours of perfection." }
      ]}
      areasWeServe={[
        "Madurai", "Anna Nagar", "KK Nagar", "Melur", 
        "Thirumangalam", "Tirupparankundram", "Koodal Nagar", "Nearby Wedding Venues"
      ]}
      faqs={[
        { q: "How much does bridal makeup cost in Madurai?", a: "Airbrush makeup is our most premium luxury service due to the specialized equipment and silicone-based products required. Please contact us for a customized quote based on your wedding dates." },
        { q: "Do you offer HD makeup?", a: "Yes, we offer both HD and Airbrush makeup. While HD is applied with traditional brushes/sponges for a flawless finish, Airbrush is sprayed on for a completely weightless feel." },
        { q: "Do you offer Airbrush makeup?", a: "Absolutely! We are the premier Airbrush Makeup Artist in Madurai, utilizing advanced compressor technology and luxury silicone-based formulas for a 100% waterproof finish." },
        { q: "Do you travel to wedding venues?", a: "Yes, our team is fully equipped to bring our airbrush machines and luxury setup directly to your hotel, home, or wedding venue in Madurai." },
        { q: "Do you provide bridal trials?", a: "Yes. A bridal trial is highly recommended, especially for brides who have never experienced the unique, feather-light feel of airbrush makeup before." },
        { q: "How long does bridal makeup last?", a: "Airbrush makeup is incredibly durable. Being silicone-based and waterproof, it is designed to last over 16-18 hours through extreme heat, humidity, and tears." },
        { q: "What products do you use?", a: "We use high-end, professional airbrush foundations (such as Temptu) alongside luxury cosmetics from MAC, NARS, and Huda Beauty to complete the look." },
        { q: "How early should I book?", a: "Because airbrush services are highly requested by modern brides, we recommend booking 3 to 6 months in advance to secure your dates." }
      ]}
    />
  );
}
