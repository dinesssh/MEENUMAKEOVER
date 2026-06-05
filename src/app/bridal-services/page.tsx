import { siteConfig } from "@/config/site";
import BridalCollection from "@/components/sections/BridalCollection";

export const metadata = {
  title: "Bridal Packages | Meenu Makeover",
  description: "Explore our exclusive bridal makeup packages for your special day. From Krylon to Airbrush and Celebrity makeup.",
};

export default function BridalPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F0] pt-28">
      <BridalCollection />
    </main>
  );
}
