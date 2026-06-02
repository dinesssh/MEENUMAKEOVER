export interface FeaturedPackage {
  id: string;
  category: "BRIDAL" | "SALON";
  badge: string;
  title: string;
  price: string;
  features: string[];
  linkTarget: string;
}

export const featuredPackages: FeaturedPackage[] = [
  {
    id: "bridal-luxury",
    category: "BRIDAL",
    badge: "Most Popular",
    title: "The Royal Radiance",
    price: "₹14,999",
    features: ["Airbrush HD Application", "Bridal Trial Session", "Premium Mink Lashes"],
    linkTarget: "#booking",
  },
  {
    id: "bridal-elite",
    category: "BRIDAL",
    badge: "Luxury Choice",
    title: "The Celebrity Bride",
    price: "Custom Pricing",
    features: ["Meenu Signature Look", "Multiple Outfit Changes", "Full Day Artist Assistance"],
    linkTarget: "#booking",
  },
  {
    id: "salon-bestseller",
    category: "SALON",
    badge: "Best Value",
    title: "Signature Glass Hair",
    price: "₹1,999",
    features: ["Premium Keratin Smoothing", "Luminous Shine Finish", "Complimentary Scalp Detox"],
    linkTarget: "#booking",
  },
  {
    id: "salon-combo",
    category: "SALON",
    badge: "Pre-Bridal",
    title: "The Golden Glow Spa",
    price: "₹2,999",
    features: ["Luxury Hair Spa", "Signature Trim & Styling", "Deep Nourishing Mask"],
    linkTarget: "#booking",
  },
];
