import type { Metadata } from "next";
import SeoLandingPage from "@/components/templates/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "HD Bridal Makeup in Madurai | Meenu Makeover",
  description: "Experience flawless HD Bridal Makeup in Madurai with Meenu Makeover. Achieve a picture-perfect, blemish-free look that shines under high-definition cameras.",
  alternates: {
    canonical: `https://${siteConfig.domain}/hd-bridal-makeup-madurai`,
  },
  openGraph: {
    title: "HD Bridal Makeup in Madurai | Meenu Makeover",
    description: "Experience flawless HD Bridal Makeup in Madurai with Meenu Makeover. Achieve a picture-perfect, blemish-free look.",
    url: `https://${siteConfig.domain}/hd-bridal-makeup-madurai`,
    images: ["/og-default.jpg"],
  },
};

export default function HdBridalMakeupMadurai() {
  const keyword = "HD Bridal Makeup in Madurai";

  return (
    <SeoLandingPage
      keyword={keyword}
      pageUrl="/hd-bridal-makeup-madurai"
      heroTitle={
        <>
          Flawless <span className="text-[#B8860B]">HD Bridal Makeup</span> in Madurai
        </>
      }
      heroSubtitle="Step into the spotlight with absolute confidence. Our specialized HD makeup techniques ensure you look breathtakingly natural both in person and on camera."
      aboutTitle="The Science of Perfect HD Bridal Makeup"
      aboutContent={
        <>
          <p className="mb-6">
            In the era of ultra-high-definition cameras and cinematic wedding videography, traditional makeup often falls short, appearing cakey or revealing microscopic skin imperfections under intense stage lighting. This is why choosing expert <strong>HD Bridal Makeup in Madurai</strong> is no longer just a luxury, but a necessity for the modern bride. At Meenu Makeover, we specialize in high-definition artistry, utilizing state-of-the-art products formulated with light-scattering pigments that blur fine lines, minimize pores, and seamlessly conceal blemishes, giving you an airbrushed, second-skin finish.
          </p>
          <p className="mb-6">
            The magic of <strong>HD Bridal Makeup in Madurai</strong> lies in the technique. Unlike standard foundations that sit heavily on the surface, HD products are micro-formulated to melt into the skin. When applied by our highly trained artists using specialized sponges and stippling brushes, the makeup diffuses ambient and direct light. This means whether you are standing under the harsh halogen lights of a Madurai wedding mandapam or posing in the soft golden hour sunlight for your outdoor photoshoot, your complexion will remain flawlessly radiant without ever looking overdone or artificial.
          </p>
          <p className="mb-6">
            South Indian weddings are known for their grandeur, long hours, and emotional moments, accompanied by the warm and humid local climate. Our premium HD makeup application is entirely sweat-proof, tear-proof, and extremely long-lasting. We begin with advanced skin preparation, selecting the perfect high-definition primers and color correctors to neutralize dark circles or pigmentation. By carefully layering lightweight HD foundations from elite brands like Make Up For Ever, MAC, and Charlotte Tilbury, we ensure your skin can breathe while maintaining full, opaque coverage that lasts over 16 hours.
          </p>
          <p>
            When you book Meenu Makeover for your HD bridal transformation, you are not just booking a makeup session; you are investing in peace of mind. We offer exclusive on-venue services, bringing our luxury studio experience directly to your location in and around Madurai. Let us meticulously craft a customized, picture-perfect bridal look that enhances your natural beauty, complements your exquisite jewelry and silk sarees, and ensures your wedding album is filled with flawless memories you will cherish for a lifetime.
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
        { title: "Consultation", desc: "We discuss your skin concerns, outfits, and the specific lighting of your venue to select the right HD products." },
        { title: "Skin Preparation", desc: "We deeply hydrate and prime your skin using pore-blurring HD primers for a perfectly smooth canvas." },
        { title: "Makeup Trial", desc: "Experience the HD finish firsthand with a pre-wedding trial to finalize your exact desired look." },
        { title: "Bridal Styling", desc: "Meticulous application of HD foundation, expert contouring, hair styling, and traditional draping." },
        { title: "Final Touchups", desc: "Sealing the makeup with high-definition setting powders and sprays for 16+ hours of wear." }
      ]}
      areasWeServe={[
        "Madurai", "Anna Nagar", "KK Nagar", "Melur", 
        "Thirumangalam", "Tirupparankundram", "Koodal Nagar", "Nearby Wedding Venues"
      ]}
      faqs={[
        { q: "How much does bridal makeup cost in Madurai?", a: "The cost depends on the specific services, but HD Bridal Makeup is competitively priced for its premium, camera-ready quality. Contact us with your venue details and dates for an exact quote." },
        { q: "Do you offer HD makeup?", a: "Yes, HD Bridal Makeup is our specialty. We use advanced light-diffusing products to create a flawless, natural look that hides imperfections without looking heavy." },
        { q: "Do you offer Airbrush makeup?", a: "Yes, alongside HD makeup, we also offer luxury Airbrush makeup which provides a silicone-based, waterproof, and ultra-lightweight finish." },
        { q: "Do you travel to wedding venues?", a: "Yes, we provide our HD Bridal Makeup services directly at your wedding venue, hotel, or home across Madurai and surrounding areas." },
        { q: "Do you provide bridal trials?", a: "Absolutely. We encourage booking a trial so you can see how perfectly the HD makeup photographs and feels on your skin before the actual wedding." },
        { q: "How long does bridal makeup last?", a: "Our HD makeup is expertly layered and sealed to be sweat-proof and tear-proof, lasting well over 12-16 hours through all your ceremonies." },
        { q: "What products do you use?", a: "For HD makeup, we use specialized high-definition lines from brands like Make Up For Ever, MAC Cosmetics, Huda Beauty, and NARS." },
        { q: "How early should I book?", a: "To secure your dates, especially during the busy Madurai wedding season, we recommend booking your HD Bridal Makeup package 3 to 6 months in advance." }
      ]}
    />
  );
}
