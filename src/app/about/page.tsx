import About from "@/components/sections/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Meenu",
  description: "Learn about Meenu's journey as a premier bridal makeup artist in Madurai.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <About />
    </div>
  );
}
