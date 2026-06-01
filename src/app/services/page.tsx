import Services from "@/components/sections/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Bridal makeup, engagement styling, reception makeup, and microblading in Madurai.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <Services />
    </div>
  );
}
