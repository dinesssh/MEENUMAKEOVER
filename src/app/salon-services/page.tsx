import { Metadata } from "next";
import SalonMenuClient from "./SalonMenuClient";

export const metadata: Metadata = {
  title: "Salon Services in Madurai | Meenu Makeover",
  description: "Beyond weddings, Meenu Makeover is a Luxury Bridal Studio offering premium salon services. Experience expert care from a Bridal Makeup Artist in Madurai, featuring HD Makeup, Airbrush Makeup, and more.",
};

export default function SalonPage() {
  return <SalonMenuClient />;
}
