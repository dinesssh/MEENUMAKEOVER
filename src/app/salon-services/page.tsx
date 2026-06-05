import { Metadata } from "next";
import SalonMenuClient from "./SalonMenuClient";

export const metadata: Metadata = {
  title: "Salon Menu | Meenu Makeover Studio",
  description: "Explore our comprehensive luxury salon menu, from premium hair treatments to exclusive spa rituals.",
};

export default function SalonPage() {
  return <SalonMenuClient />;
}
