import FeaturedPackages from "@/components/sections/FeaturedPackages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Bridal makeup, engagement styling, reception makeup, and microblading in Madurai.",
};

export default function ServicesPage() {
  return (
      <FeaturedPackages />
  );
}
