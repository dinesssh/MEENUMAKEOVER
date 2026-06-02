import { client } from "@/sanity/client";
import { bridalLooksQuery } from "@/sanity/queries/bridalLooks";
import GalleryClient, { GalleryItem } from "./GalleryClient";

export default async function Gallery() {
  let items: GalleryItem[] = [];
  try {
    items = await client.fetch(bridalLooksQuery, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Failed to fetch gallery items from Sanity:", error);
  }

  return <GalleryClient items={items} />;
}
