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
    title: "Luxury / Dewy Makeup",
    price: "₹14,999",
    features: ["Airbrush HD", "Trial Session", "Premium Lashes"],
    linkTarget: "#booking",
  },
  {
    id: "bridal-elite",
    category: "BRIDAL",
    badge: "Premium",
    title: "Elite Makeup",
    price: "Custom Pricing",
    features: ["Celebrity Artist", "Multiple Looks", "Full Day Assistance"],
    linkTarget: "#booking",
  },
  {
    id: "salon-bestseller",
    category: "SALON",
    badge: "Bestseller",
    title: "Premium Hair Smoothing",
    price: "₹1,999",
    features: ["Any Length", "Long-lasting Finish", "Salon Member 10% OFF"],
    linkTarget: "#booking",
  },
  {
    id: "salon-combo",
    category: "SALON",
    badge: "Combo Special",
    title: "Complete Hair Care",
    price: "₹2,999",
    features: ["Scalp Detox", "Hair Spa + Cut", "Free Hair Analysis"],
    linkTarget: "#booking",
  },
];
