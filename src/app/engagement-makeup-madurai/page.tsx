import type { Metadata } from "next";
import SeoLandingPage from "@/components/templates/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Engagement Makeup Artist in Madurai | Meenu Makeover",
  description: "Look radiant for your ring ceremony with the best Engagement Makeup Artist in Madurai. Discover subtle, glowing, and elegant makeup looks.",
  alternates: {
    canonical: `https://${siteConfig.domain}/engagement-makeup-madurai`,
  },
  openGraph: {
    title: "Engagement Makeup Artist in Madurai | Meenu Makeover",
    description: "Look radiant for your ring ceremony with the best Engagement Makeup Artist in Madurai.",
    url: `https://${siteConfig.domain}/engagement-makeup-madurai`,
    images: ["/og-default.jpg"],
  },
};

export default function EngagementMakeupMadurai() {
  const keyword = "Engagement Makeup Artist in Madurai";

  return (
    <SeoLandingPage
      keyword={keyword}
      pageUrl="/engagement-makeup-madurai"
      heroTitle={
        <>
          Elegant <span className="text-[#B8860B]">Engagement Makeup Artist</span> in Madurai
        </>
      }
      heroSubtitle="Celebrate the beginning of your forever. Let us craft a subtle, glowing, and breathtakingly elegant look for your engagement ceremony."
      aboutTitle="Radiant Beauty for Your Ring Ceremony"
      aboutContent={
        <>
          <p className="mb-6">
            Your engagement ceremony marks the beautiful beginning of your wedding journey, serving as the first grand introduction to your extended families and friends. As such, it requires a look that strikes the perfect balance between bridal elegance and subtle, natural radiance. Finding the right <strong>Engagement Makeup Artist in Madurai</strong> is crucial to achieving this delicate equilibrium. At Meenu Makeover, we specialize in curating engagement looks that are distinct from your upcoming wedding day style—focusing on soft glam, luminous skin, and an effortlessly romantic aesthetic.
          </p>
          <p className="mb-6">
            Unlike the heavy, opulent traditional styling often reserved for the main wedding day, engagement makeup is all about glowing, fresh-faced beauty. As the premier <strong>Engagement Makeup Artist in Madurai</strong>, we utilize high-end HD and Airbrush techniques tailored specifically for modern ring ceremonies. Whether your event is a grand evening banquet under bright hall lights or a vibrant, sunlit daytime celebration, we expertly balance high-definition foundation, soft contouring, and shimmering eye palettes to ensure you look breathtakingly beautiful without appearing overly dramatic.
          </p>
          <p className="mb-6">
            We understand that your engagement outfit—be it an elegant pastel lehenga, a grand designer gown, or a gorgeous traditional silk saree—dictates the entire vibe of the ceremony. Our luxury styling services go beyond just facial makeup. We provide customized, contemporary hairstyling such as messy buns, soft romantic curls, and delicate floral accessorizing, alongside expert saree draping. The result is a highly cohesive, sophisticated appearance that highlights your natural features and photographs immaculately.
          </p>
          <p>
            With Meenu Makeover, you can expect an indulgent, stress-free experience. We offer highly convenient on-venue styling, traveling to engagement halls, hotels, and residences across Madurai and nearby areas. We use only premium, sweat-proof international cosmetic brands like MAC, Huda Beauty, and Charlotte Tilbury, ensuring your luminous glow remains flawless through hours of ring exchanges, family portraits, and joyous celebrations. Book with us to ensure your first step toward marriage is nothing short of spectacular.
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
        { title: "Consultation", desc: "We discuss your engagement outfit and vision to ensure your look is distinct from your future wedding style." },
        { title: "Skin Preparation", desc: "Focusing on deep hydration and luminous primers to create a fresh, glowing 'soft glam' canvas." },
        { title: "Makeup Trial", desc: "An optional pre-engagement trial allows you to perfect the subtle, elegant aesthetic you desire." },
        { title: "Event Styling", desc: "Expert application of HD or Airbrush makeup, soft romantic hair styling, and outfit draping." },
        { title: "Final Touchups", desc: "Locking the luminous glow in place with lightweight, long-lasting setting sprays." }
      ]}
      areasWeServe={[
        "Madurai", "Anna Nagar", "KK Nagar", "Melur", 
        "Thirumangalam", "Tirupparankundram", "Koodal Nagar", "Nearby Wedding Venues"
      ]}
      faqs={[
        { q: "How much does bridal makeup cost in Madurai?", a: "Engagement makeup is typically priced differently from the main wedding day bridal packages. Please contact us with your event details for a specific, customized quote." },
        { q: "Do you offer HD makeup?", a: "Yes! HD makeup is incredibly popular for engagement ceremonies because it provides a flawless, glowing, and highly natural look that photographs beautifully." },
        { q: "Do you offer Airbrush makeup?", a: "Yes, we offer premium Airbrush makeup for engagements as well. It provides a lightweight, sheer-to-full coverage that feels like you're wearing nothing at all." },
        { q: "Do you travel to wedding venues?", a: "Absolutely. We travel to engagement halls, banquet rooms, and private residences across Madurai to provide on-venue styling." },
        { q: "Do you provide bridal trials?", a: "Yes, we encourage trials. Many brides book their engagement makeup as a 'live trial' for their upcoming wedding, allowing them to experience our artistry firsthand." },
        { q: "How long does bridal makeup last?", a: "Using professional-grade international cosmetics, your engagement makeup is guaranteed to last flawlessly for 12+ hours through all the celebrations." },
        { q: "What products do you use?", a: "We strictly use authentic, luxury brands like MAC, NARS, Charlotte Tilbury, and Huda Beauty to ensure your skin is protected and radiant." },
        { q: "How early should I book?", a: "We recommend booking your Engagement Makeup Artist in Madurai at least 2 to 4 months in advance, especially during the auspicious wedding seasons." }
      ]}
    />
  );
}
