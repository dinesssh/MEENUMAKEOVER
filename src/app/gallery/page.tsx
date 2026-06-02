import Gallery from "@/components/sections/Gallery";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridal Gallery",
  description: "View our portfolio of stunning Tamil brides, engagement looks, and reception styling.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Gallery />
    </div>
  );
}
