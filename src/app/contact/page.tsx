import type { Metadata } from "next";
import Booking from "@/components/sections/Booking";

export const metadata: Metadata = {
  title: "Contact Meenu Makeover | Bridal Makeup Artist Madurai",
  description: "Contact Meenu Makeover to book your session at our Luxury Bridal Studio. Secure the best Bridal Makeup Artist in Madurai for premium HD Makeup and Airbrush Makeup for your upcoming wedding.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F0] pt-20">
      <Booking />
    </main>
  );
}
