export interface FeaturedPackage {
  id: string;
  category: "BRIDAL" | "SALON";
  badge: string;
  title: string;
  price: string;
  features: string[];
  linkTarget: string;
  buttonText: string;
  isFeatured?: boolean;
}

export const featuredPackages: FeaturedPackage[] = [
  {
    id: "hd-bridal",
    category: "BRIDAL",
    badge: "MOST BOOKED",
    title: "HD Bridal Experience",
    price: "₹12,999",
    features: [
      "HD Makeup Application",
      "Premium Skin Preparation",
      "Bridal Hairstyling",
      "Saree Draping",
      "Camera Ready Finish"
    ],
    linkTarget: "#booking",
    buttonText: "BOOK HD MAKEUP",
  },
  {
    id: "airbrush-luxury",
    category: "BRIDAL",
    badge: "PREMIUM CHOICE",
    title: "Airbrush Luxury Bridal",
    price: "₹19,999",
    features: [
      "Airbrush Makeup",
      "Ultra-Light Finish",
      "Premium International Products",
      "Long Lasting Wear",
      "Flawless Photography Look"
    ],
    linkTarget: "#booking",
    buttonText: "BOOK AIRBRUSH MAKEUP",
    isFeatured: true,
  },
  {
    id: "keratin-smooth",
    category: "SALON",
    badge: "BEST SELLER",
    title: "Keratin & Smoothening",
    price: "Starting ₹4,500",
    features: [
      "Keratin Treatment",
      "Hair Smoothening",
      "Frizz Control",
      "Silky Finish",
      "Professional Styling"
    ],
    linkTarget: "#booking",
    buttonText: "BOOK TREATMENT",
  },
  {
    id: "hair-spa",
    category: "SALON",
    badge: "SALON FAVORITE",
    title: "Hair Spa & Scalp Therapy",
    price: "Starting ₹2,500",
    features: [
      "Hair Fall Control",
      "Dandruff Care",
      "Hair Strengthening",
      "Deep Nourishment",
      "Scalp Rejuvenation"
    ],
    linkTarget: "#booking",
    buttonText: "BOOK SPA SESSION",
  },
];
