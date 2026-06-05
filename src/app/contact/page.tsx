import type { Metadata } from "next";
import Booking from "@/components/sections/Booking";

export const metadata: Metadata = {
  title: "Contact Us | Meenu Makeover Studio",
  description: "Get in touch to book your premium bridal makeup, HD styling, and luxury beauty experiences.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F0] pt-20">
      <Booking />
    </main>
  );
}
