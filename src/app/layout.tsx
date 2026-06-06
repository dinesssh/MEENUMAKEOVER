import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import PlausibleProvider from "next-plausible";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConversionElements from "@/components/ui/ConversionElements";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.meenumakeover.in'),
  title: "Meenu Makeover | Luxury Bridal Makeup Artist in Madurai",
  description: "Welcome to Meenu Makeover, the premier Luxury Bridal Studio. Book the best Bridal Makeup Artist in Madurai for flawless HD Makeup and Airbrush Makeup services tailored for your special day.",
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon-32x32.png?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png?v=2', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Meenu Makeover | Luxury Bridal Makeup Artist in Madurai",
    description: "Welcome to Meenu Makeover, the premier Luxury Bridal Studio. Book the best Bridal Makeup Artist in Madurai for flawless HD Makeup and Airbrush Makeup services tailored for your special day.",
    url: "https://www.meenumakeover.in",
    siteName: "Meenu Makeover",
    images: [
      {
        url: "/og-default.jpg",
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
    title: "Meenu Makeover | Luxury Bridal Makeup Artist in Madurai",
    description: "Welcome to Meenu Makeover, the premier Luxury Bridal Studio. Book the best Bridal Makeup Artist in Madurai for flawless HD Makeup and Airbrush Makeup services tailored for your special day.",
    images: ["/og-default.jpg"],
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <PlausibleProvider 
          {...{ domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "meenumakeover.in" }}
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-ivory text-text overflow-x-hidden">
        <a 
          href="#main-content" 
          className="absolute left-1/2 -translate-x-1/2 -top-16 focus:top-4 z-[100] bg-[#b8893e] text-white px-6 py-3 font-semibold uppercase tracking-widest text-xs rounded-sm transition-all shadow-lg outline-none focus:ring-2 focus:ring-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <ConversionElements />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-G02FQJR10B" />
      </body>
    </html>
  );
}
