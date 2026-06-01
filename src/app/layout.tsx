import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PlausibleProvider from "next-plausible";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Meenu Makeover Studio | Luxury Bridal Makeup Madurai",
    template: "%s | Meenu Makeover Studio",
  },
  description: "Premium bridal makeup, HD styling, and luxury beauty experiences crafted for modern Tamil brides in Madurai.",
  openGraph: {
    title: "Meenu Makeover Studio",
    description: "Premium bridal makeup, HD styling, and luxury beauty experiences.",
    url: "https://meenumakeover.com",
    siteName: "Meenu Makeover",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meenu Makeover Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meenu Makeover Studio",
    description: "Premium bridal makeup and luxury beauty experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <PlausibleProvider 
          {...{ domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "meenumakeover.com" } as any}
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-ivory text-text">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
