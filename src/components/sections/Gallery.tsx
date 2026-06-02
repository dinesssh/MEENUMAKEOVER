import fs from "fs";
import path from "path";
import GalleryClient, { GalleryItem } from "./GalleryClient";

export default async function Gallery() {
  const galleryDir = path.join(process.cwd(), "public", "originals", "gallery");
  let items: GalleryItem[] = [];

  try {
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      items = files
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .map((file, index) => ({
          _id: `local-${index}`,
          title: `Bridal Look ${index + 1}`,
          category: "Signature Bridal",
          image: `/originals/gallery/${encodeURIComponent(file)}`,
        }));
    }
  } catch (error) {
    console.error("Failed to read local gallery directory:", error);
  }

  return <GalleryClient items={items} />;
}
