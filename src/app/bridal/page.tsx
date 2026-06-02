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
            <strong className="text-white font-medium">Jewellery Set, <span className="gold-number">2</span> Saree Draping & Any Service</strong>
          </p>
          <a href="#booking" className="mt-4 inline-block bg-[#b8893e] text-[#2e1e12] font-sans text-[10px] uppercase tracking-widest px-4 py-1.5 font-bold shadow-sm hover:bg-[#d4a574] hover:scale-105 transition-all">
            Limited Period Offer — Don&apos;t Miss Out!
          </a>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {bridalPackages.map((pkg, i) => (
            <div 
              key={pkg.name}
              className={`relative flex flex-col h-full bg-white px-8 py-10 border rounded-2xl overflow-visible animate-fade-in-up hover-card-effect ${
                pkg.popular 
                  ? "border-2 border-[#B8860B] shadow-[0_8px_32px_rgba(184,134,11,0.15)] md:-translate-y-2" 
                  : "border-[#F0E6D3] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8860B] text-white font-sans text-[11px] font-bold uppercase tracking-[2px] py-1.5 px-5 shadow-sm whitespace-nowrap rounded-[20px]">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-heading text-2xl font-bold text-[#2C2C2C] mb-3 text-center">{pkg.name}</h3>
              <p className="font-sans text-[36px] font-bold text-[#B8860B] text-center mb-6">{pkg.price}</p>
              
              <div className="w-16 h-px bg-[#F0E6D3] mx-auto mb-6" />

              <ul className="space-y-3 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-[15px] font-sans text-[#555]">
                  <Check size={18} strokeWidth={3} className="text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Flawless Base & Finishing</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] font-sans text-[#555]">
                  <Check size={18} strokeWidth={3} className="text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Premium Products</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] font-sans text-[#555]">
                  <Check size={18} strokeWidth={3} className="text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Eligible for Complimentary Gift</span>
                </li>
              </ul>
              
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello,%20I%20would%20like%20to%20enquire%20about%20the%20${pkg.name}%20(${pkg.price})%20Bridal%20Package.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto ${
                  pkg.popular ? "btn-primary w-full" : "btn-outline w-full"
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
