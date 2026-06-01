import Packages from "@/components/sections/Packages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridal Packages",
  description: "Transparent pricing for luxury bridal makeup packages in Madurai.",
};

export default function PackagesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Packages />
    </div>
  );
}
