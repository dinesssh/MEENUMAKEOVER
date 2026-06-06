import { siteConfig } from "@/config/site";
import BridalCollection from "@/components/sections/BridalCollection";

export const metadata = {
  title: "Bridal Makeup Services in Madurai | Meenu Makeover",
  description: "Explore exclusive bridal packages at Meenu Makeover, a Luxury Bridal Studio. As a top Bridal Makeup Artist in Madurai, we offer premium HD Makeup and Airbrush Makeup for stunning wedding looks.",
};

export default function BridalPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F0] pt-28">
      <BridalCollection />
      <section className="py-12 bg-white text-center border-t border-[#E5E5E5]">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[#4A4A4A] font-light text-sm leading-relaxed">
            Planning a wedding in the Temple City? Discover why Meenu Makeover is the trusted choice for hundreds of brides. Read our comprehensive guide on finding the perfect <a href="/bridal-makeup-madurai" className="text-[#B8860B] font-medium hover:underline">Bridal Makeup Artist in Madurai</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
