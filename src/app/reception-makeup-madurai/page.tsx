import type { Metadata } from "next";
import SeoLandingPage from "@/components/templates/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Reception Makeup Artist in Madurai | Meenu Makeover",
  description: "Book the top Reception Makeup Artist in Madurai. Stand out under evening lights with glamorous, bold, and modern reception makeup and styling.",
  alternates: {
    canonical: `https://${siteConfig.domain}/reception-makeup-madurai`,
  },
  openGraph: {
    title: "Reception Makeup Artist in Madurai | Meenu Makeover",
    description: "Book the top Reception Makeup Artist in Madurai. Stand out under evening lights with glamorous and modern makeup.",
    url: `https://${siteConfig.domain}/reception-makeup-madurai`,
    images: ["/og-default.jpg"],
  },
};

export default function ReceptionMakeupMadurai() {
  const keyword = "Reception Makeup Artist in Madurai";

  return (
    <SeoLandingPage
      keyword={keyword}
      pageUrl="/reception-makeup-madurai"
      heroTitle={
        <>
          Glamorous <span className="text-[#B8860B]">Reception Makeup Artist</span> in Madurai
        </>
      }
      heroSubtitle="Own the evening with a bold, glamorous, and intensely radiant look. We specialize in modern makeup styles designed perfectly for evening receptions and grand stage lighting."
      aboutTitle="Steal the Spotlight at Your Reception"
      aboutContent={
        <>
          <p className="mb-6">
            The wedding reception is the grand finale of your bridal journey—a night dedicated to celebration, dancing, and glamorous photography. Unlike the traditional, deeply cultural aesthetics required for the morning wedding ceremonies, the reception gives you the creative freedom to experiment with bold, modern, and striking looks. To execute this flawless transition, you need the expertise of the premier <strong>Reception Makeup Artist in Madurai</strong>. At Meenu Makeover, we specialize in high-glamour evening transformations that ensure you absolutely steal the spotlight the moment you walk onto the stage.
          </p>
          <p className="mb-6">
            Evening receptions in Madurai are characterized by brilliant, intense stage lighting, heavy flash photography, and luxurious, contemporary outfits like designer lehengas, shimmering gowns, or heavily embellished sarees. As an expert <strong>Reception Makeup Artist in Madurai</strong>, we utilize advanced HD and Airbrush techniques that are specifically formulated to interact beautifully with artificial lighting. We focus on creating a flawless, luminous base, complemented by striking elements such as intense smokey eyes, dramatic cut-creases, dramatic false lashes, and perfectly contoured cheekbones that add sharp definition to your face.
          </p>
          <p className="mb-6">
            The transition from a traditional morning bride to a glamorous evening diva requires immense skill and speed, especially since the gap between events is often short. Our highly experienced team works efficiently without compromising on the luxury experience. We provide complete styling, which includes transitioning your traditional braided hair into elegant contemporary updos, Hollywood waves, or sleek straight styles that perfectly complement your evening attire.
          </p>
          <p>
            Because receptions often involve hours of greeting guests, dancing, and dining, long-lasting makeup is non-negotiable. Meenu Makeover guarantees a completely sweat-proof, smudge-proof, and waterproof finish using elite international brands like MAC, NARS, and Huda Beauty. We offer exclusive on-location makeup services across Madurai, traveling directly to your luxury hotel or reception hall to provide a seamless, stress-free makeover experience right when you need it. Let us make your reception night truly unforgettable.
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
        { title: "Glamour Consultation", desc: "We review your reception outfit and discuss bold, contemporary looks that contrast your morning bridal style." },
        { title: "Evening Skin Prep", desc: "Deep cleansing and hydration to refresh your skin between the morning wedding and the evening reception." },
        { title: "Makeup Trial", desc: "Test out your dramatic evening look with an optional pre-wedding trial for total peace of mind." },
        { title: "Stage-Ready Styling", desc: "Expert application of HD/Airbrush makeup with dramatic eye artistry, contouring, and modern hairstyling." },
        { title: "Final Touchups", desc: "Sealing the makeup with heavy-duty, sweat-proof sprays to ensure it lasts through hours of dancing and greeting." }
      ]}
      areasWeServe={[
        "Madurai", "Anna Nagar", "KK Nagar", "Melur", 
        "Thirumangalam", "Tirupparankundram", "Koodal Nagar", "Nearby Wedding Venues"
      ]}
      faqs={[
        { q: "How much does bridal makeup cost in Madurai?", a: "Reception makeup is available as a standalone service or as part of a comprehensive bridal package (Wedding + Reception). Please contact us directly for customized pricing." },
        { q: "Do you offer HD makeup?", a: "Yes, HD makeup is highly recommended for receptions as the light-diffusing particles look incredibly flawless under heavy artificial stage lighting." },
        { q: "Do you offer Airbrush makeup?", a: "Absolutely. Airbrush makeup provides a luxurious, sweat-proof, and dramatic finish that is perfect for long reception evenings and dancing." },
        { q: "Do you travel to wedding venues?", a: "Yes, we provide on-venue styling for receptions. We can travel directly to your banquet hall or hotel room in Madurai for a quick and stress-free transformation." },
        { q: "Do you provide bridal trials?", a: "Yes, you can absolutely book a trial specifically for your reception look to test out the dramatic, glamorous style before the big night." },
        { q: "How long does bridal makeup last?", a: "Our reception makeup is sealed using professional-grade setting techniques, ensuring it remains smudge-proof and flawless for 12+ hours." },
        { q: "What products do you use?", a: "We exclusively use high-end international cosmetic brands, including MAC, Huda Beauty, NARS, and Anastasia Beverly Hills, for vibrant and long-lasting pigmentation." },
        { q: "How early should I book?", a: "Reception slots, especially in the evenings during wedding seasons, fill up extremely fast. We strongly advise booking 3 to 6 months in advance." }
      ]}
    />
  );
}
