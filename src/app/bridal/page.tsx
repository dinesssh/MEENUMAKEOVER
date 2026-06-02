import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";

const bridalPackages = [
  { name: "Krylon Makeup", price: "₹9,999", popular: false },
  { name: "Ultra Makeup", price: "₹11,999", popular: false },
  { name: "Dewy Makeup", price: "₹14,999", popular: true },
  { name: "Airbrush Makeup", price: "₹17,999", popular: false },
  { name: "Celebrity Makeup", price: "₹20,000", popular: false },
  { name: "Bridesmaid Makeup", price: "₹5,999", popular: false },
];

export const metadata = {
  title: "Bridal Packages | Meenu Makeover",
  description: "Explore our exclusive bridal makeup packages for your special day. From Krylon to Airbrush and Celebrity makeup.",
};

export default function BridalPage() {
  return (
    <main className="min-h-screen bg-[#f5efe6] pt-28 pb-32">
      <div className="section-container">
        
        {/* Header section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow text-[#b8893e] mb-4">Glam Up & Shine Bright</p>
          <h1 className="heading-lg text-[#2e1e12] mb-6">Bridal Packages</h1>
          <p className="font-sans text-[#2e1e12]/70 text-lg leading-relaxed">
            Your special day deserves perfection. We offer a range of premium bridal packages tailored to give you the flawless look you&apos;ve always dreamed of.
          </p>
        </div>

        {/* Bonus Offer Banner */}
        <div className="bg-[#2e1e12] text-white p-6 md:p-8 rounded-sm shadow-xl max-w-4xl mx-auto mb-16 border border-[#b8893e]/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b8893e]/25 rounded-bl-full pointer-events-none" />
          <h3 className="font-heading text-2xl md:text-3xl text-[#d4a574] mb-3">Complimentary Gift Included</h3>
          <p className="font-sans text-white/80 text-base md:text-lg">
            All packages come with one complimentary gift of your choice:<br/>
            <strong className="text-white font-medium">Jewellery Set, 2 Saree Draping & Any Service</strong>
          </p>
          <a href="#booking" className="mt-4 inline-block bg-[#b8893e] text-[#2e1e12] font-accent text-[10px] uppercase tracking-widest px-4 py-1.5 font-bold shadow-sm hover:bg-[#d4a574] hover:scale-105 transition-all">
            Limited Period Offer — Don&apos;t Miss Out!
          </a>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {bridalPackages.map((pkg) => (
            <div 
              key={pkg.name}
              className={`relative flex flex-col h-full bg-white p-8 border overflow-visible ${
                pkg.popular 
                  ? "border-2 border-[#b8893e] shadow-xl md:-translate-y-2" 
                  : "border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b8893e] text-[#2e1e12] font-accent text-[9px] font-bold uppercase tracking-[0.2em] py-1.5 px-4 shadow-sm whitespace-nowrap rounded-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-heading text-2xl text-[#2e1e12] mb-3 text-center">{pkg.name}</h3>
              <p className="font-accent text-3xl text-[#b8893e] text-center mb-6">{pkg.price}</p>
              
              <div className="w-16 h-px bg-black/10 mx-auto mb-6" />

              <ul className="space-y-3 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm font-sans text-[#2e1e12]/75">
                  <Check size={16} className="text-[#b8893e] shrink-0 mt-0.5" />
                  <span>Flawless Base & Finishing</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-sans text-[#2e1e12]/75">
                  <Check size={16} className="text-[#b8893e] shrink-0 mt-0.5" />
                  <span>Premium Products</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-sans text-[#2e1e12]/75">
                  <Check size={16} className="text-[#b8893e] shrink-0 mt-0.5" />
                  <span>Eligible for Complimentary Gift</span>
                </li>
              </ul>
              
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello,%20I%20would%20like%20to%20enquire%20about%20the%20${pkg.name}%20(${pkg.price})%20Bridal%20Package.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center h-12 flex items-center justify-center font-accent text-xs tracking-[0.2em] uppercase transition-colors border-2 rounded-sm mt-auto ${
                  pkg.popular
                    ? "bg-[#b8893e] text-[#2e1e12] border-[#b8893e] hover:bg-[#d4a574] hover:border-[#d4a574]"
                    : "bg-transparent text-[#2e1e12] border-[#b8893e] hover:bg-[#b8893e] hover:text-white"
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
