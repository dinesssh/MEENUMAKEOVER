import Gallery from "@/components/sections/Gallery";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridal Gallery",
  description: "View our portfolio of stunning Tamil brides, engagement looks, and reception styling.",
};

async function getGalleryItems() {
  const localItems: any[] = [];
  try {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      files.forEach((file, index) => {
        if (file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
          let category = "All";
          const lowerName = file.toLowerCase();
          if (lowerName.includes("bridal")) category = "Bridal";
          else if (lowerName.includes("engagement")) category = "Engagement";
          else if (lowerName.includes("reception")) category = "Reception";
          else if (lowerName.includes("microblading")) category = "Microblading";

          const title = file.split(".")[0].replace(/[_-]/g, " ").replace(/\b\w/g, l => l.toUpperCase());

          localItems.push({
            _id: `local-${index}`,
            title: title,
            category: category,
            image: `/gallery/${file}`,
            aspectRatio: "aspect-[3/4]"
          });
        }
      });
    }
  } catch (error) {
    console.error("Failed to read local gallery files", error);
  }

  return localItems;
}

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();
  return (
    <div className="pt-24 min-h-screen">
      <Gallery items={galleryItems} />
    </div>
  );
}
