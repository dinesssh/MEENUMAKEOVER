import Gallery from "@/components/sections/Gallery";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridal Makeup Gallery | Meenu Makeover",
  description: "View the stunning portfolio of Meenu Makeover. See flawless HD Makeup and Airbrush Makeup looks created by the finest Bridal Makeup Artist in Madurai at our Luxury Bridal Studio.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Gallery />
    </div>
  );
}
