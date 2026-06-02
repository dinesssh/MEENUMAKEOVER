import { siteConfig } from "@/config/site";
import React from "react";

// Helper component for category sections
function MenuSection({ title, subtitle, items }: { title: string; subtitle?: string; items: { name: string; desc?: string; regular: string; member: string }[] }) {
  // We use Option A (Title Case Cormorant) for H2s as recommended in the plan
  const formattedTitle = title.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="mb-16">
      <div className="mb-6 border-b border-black/10 pb-4">
        <h2 className="font-heading text-5xl lg:text-6xl text-[#2e1e12] leading-tight font-normal">{formattedTitle}</h2>
        {subtitle && <p className="font-sans text-sm italic text-[#2e1e12]/60 mt-1">{subtitle}</p>}
      </div>
      
      <div className="flex flex-col border border-black/5 rounded-sm overflow-hidden">
        {/* Table Header (Desktop) */}
        <div className="hidden md:flex items-center gap-x-8 px-4 py-3 bg-white border-b border-[#b8893e]">
          <div className="flex-1 font-accent text-xs uppercase tracking-wider text-[#7a5520]">Service</div>
          <div className="w-32 text-right font-accent text-xs uppercase tracking-wider text-[#7a5520]">Regular</div>
          <div className="w-32 text-right font-accent text-xs uppercase tracking-wider text-[#7a5520]">Member</div>
        </div>

        {/* Items */}
        {items.map((item, i) => (
          <div 
            key={i} 
            className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-x-8 px-4 py-4 md:py-3 transition-colors hover:bg-[#b8893e]/5 ${i % 2 === 0 ? 'bg-transparent' : 'bg-[#f5efe6]/30'}`}
          >
            {/* Service Name & Desc */}
            <div className="flex-1">
              <h3 className="font-sans text-[#2e1e12] text-base font-medium">{item.name}</h3>
              {item.desc && <p className="font-sans text-[#2e1e12]/50 text-xs mt-0.5 italic">{item.desc}</p>}
            </div>
            
            {/* Pricing (Mobile stacked, Desktop columns) */}
            <div className="flex md:contents justify-between mt-2 md:mt-0 text-sm md:text-base border-t border-black/5 md:border-none pt-2 md:pt-0">
              <div className="md:w-32 md:text-right font-serif text-[#2e1e12]/80 tabular-nums">
                <span className="md:hidden text-xs text-[#7a5520] uppercase tracking-wider block mb-1">Regular</span>
                {item.regular}
              </div>
              <div className="md:w-32 md:text-right font-serif text-[#2e1e12] tabular-nums font-medium">
                <span className="md:hidden text-xs text-[#7a5520] uppercase tracking-wider block mb-1">Member</span>
                {item.member}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Salon Menu | Meenu Makeover",
  description: "Explore our comprehensive salon menu, from waxing and cuts to premium hair treatments and coloring.",
};

export default function SalonPage() {
  return (
    <main className="min-h-screen bg-[#f5efe6] pt-28 pb-32">
      <div className="section-container max-w-4xl">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <p className="eyebrow text-[#b8893e] mb-4">Our Services</p>
          <h1 className="heading-lg text-[#2e1e12] mb-6">Salon Menu</h1>
          <p className="font-sans text-[#2e1e12]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Experience premium care with our extensive range of salon services. We offer special pricing for our members.
          </p>
        </div>

        {/* Premium Treatments Banner */}
        <div className="bg-gradient-to-r from-[#2e1e12] to-[#1a110a] text-white p-6 md:p-8 rounded-sm shadow-xl mb-16 border border-[#b8893e]/30">
          <h2 className="font-heading text-2xl text-[#d4a574] mb-6 text-center">Premium Hair Treatments</h2>
          
          <div className="flex flex-col border border-[#b8893e]/20 rounded-sm mb-8">
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#b8893e]/20">
              <span className="font-sans text-white">Hair Smoothening (Any Length)</span>
              <span className="font-serif text-[#d4a574] text-xl tabular-nums">₹1,999</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#b8893e]/20">
              <span className="font-sans text-white">Keratin Treatment (Any Length)</span>
              <span className="font-serif text-[#d4a574] text-xl tabular-nums">₹3,499</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#b8893e]/20">
              <span className="font-sans text-white">Hair Botox (Any Length)</span>
              <span className="font-serif text-[#d4a574] text-xl tabular-nums">₹4,499</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4">
              <span className="font-sans text-white">Collagen Treatment (Any Length)</span>
              <span className="font-serif text-[#d4a574] text-xl tabular-nums">₹5,499</span>
            </div>
          </div>

          <div className="bg-[#b8893e] text-[#2e1e12] p-6 rounded-md shadow-lg text-center border border-white/20">
            <h3 className="font-heading text-xl md:text-2xl mb-2">Complete Hair Care Combo @ ₹2,999 Only</h3>
            <p className="font-sans text-sm md:text-base mb-2 font-medium">Scalp Detox Treatment + Deep Nourishing Hair Spa + Hair Cut & Styling</p>
            <p className="font-sans text-xs opacity-80 mb-5 italic">(Mid-thigh length & longer hair N/A. Worth ₹3,500+)</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-x-8 font-bold text-xs uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><span className="text-white">✓</span> Free Hair Analysis</span>
              <span className="flex items-center gap-1.5"><span className="text-white">✓</span> Free Head Massage</span>
              <span className="flex items-center gap-1.5"><span className="text-white">✓</span> Free Serum</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {/* LEFT COLUMN */}
          <div>
            <MenuSection 
              title="Flavored Cartridge Waxing" 
              items={[
                { name: "Half Arms | Legs", regular: "650 | 850", member: "550 | 750" },
                { name: "Full Arms | Legs", regular: "800 | 950", member: "700 | 850" },
                { name: "Full Waxing (FA+FL+UA)", regular: "1900", member: "1800" },
                { name: "Full Back | Midriff", regular: "1200", member: "1000" },
                { name: "Full Body", regular: "3500", member: "3200" },
              ]} 
            />

            <MenuSection 
              title="Peel Off" 
              subtitle="We recommend peel off for sensitive areas"
              items={[
                { name: "Upper Lip", regular: "150", member: "100" },
                { name: "Chin", regular: "120", member: "100" },
                { name: "Face", regular: "450", member: "400" },
                { name: "Underarms", regular: "300", member: "250" },
                { name: "Bikini Line", regular: "1000", member: "850" },
                { name: "Full Bikini", regular: "2700", member: "2500" },
              ]} 
            />

            <MenuSection 
              title="Cuts & Styling" 
              items={[
                { name: "Classic Cut / U-Cut / U-Straight", regular: "650", member: "600" },
                { name: "Layer Trim", regular: "1100", member: "1000" },
                { name: "Change of Styling by Sr. Stylist", regular: "1500", member: "1300" },
                { name: "Fringe | Bangs", regular: "350", member: "NA" },
                { name: "Kids Cut (Below 10yrs)", regular: "400", member: "350" },
              ]} 
            />

            <MenuSection 
              title="Hair Wash & Blow Dry" 
              items={[
                { name: "Hair Wash & Conditioning", regular: "500", member: "450" },
                { name: "Blow Dry (Short | Medium)", regular: "1000 | 1150", member: "900 | 1050" },
                { name: "Curly Hair Styling", regular: "1200", member: "NA" },
              ]} 
            />
          </div>

          {/* RIGHT COLUMN */}
          <div>
             <MenuSection 
              title="World of Colours" 
              items={[
                { name: "Root Touch Up", desc: "Ammonia | Ammonia Free", regular: "1000 | 1400", member: "900 | 1300" },
                { name: "Global (Short|Med|Long)", regular: "3000|3500|4000", member: "2700|3000|3800" },
                { name: "Global Ammonia Free", regular: "3200|3700|4200", member: "3000|3500|4000" },
                { name: "Global Fashion Colour", regular: "3200|3700|4200", member: "3000|3500|4000" },
                { name: "Global With Highlights / Balayage", regular: "5000", member: "4500" },
                { name: "Highlights - Partial | Full", regular: "2500 | 3500", member: "2200 | 3200" },
                { name: "Highlights (Per Streak)", regular: "400", member: "350" },
                { name: "Add On: Bond Strengthener", regular: "500", member: "NA" },
              ]} 
            />

            <MenuSection 
              title="Texture Matters" 
              items={[
                { name: "Smoothening | Keratin | Botox", regular: "4500", member: "NA" },
                { name: "Straightening (Short|Med|Long)", regular: "5000|7000|9000", member: "NA" },
                { name: "Re-growth / Partial Straightening", regular: "5500", member: "NA" },
                { name: "Perming (Short|Med|Long)", regular: "3500|4500|6000", member: "NA" },
                { name: "Add On: Bond Strengthener", regular: "750", member: "NA" },
              ]} 
            />

            <MenuSection 
              title="Hair & Scalp Rituals" 
              items={[
                { name: "Head Massage", regular: "700", member: "600" },
                { name: "Color Save", regular: "1200", member: "1100" },
                { name: "Repair & Rejuvenate", regular: "1200", member: "1100" },
                { name: "Hair Strengthening Treatment", regular: "1500", member: "NA" },
                { name: "Dandruff Control", desc: "For best results, multiple sittings needed", regular: "2500", member: "2300" },
                { name: "Hair Fall Control", desc: "For best results, multiple sittings needed", regular: "2500", member: "2300" },
              ]} 
            />
          </div>
        </div>
        
        {/* Full width bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-8">
           <div>
            <MenuSection 
                title="Style It Right" 
                items={[
                  { name: "Ironing (Medium | Long)", regular: "950 | 1100", member: "850 | 1000" },
                  { name: "Tongs (Medium | Long)", regular: "1100 | 1300", member: "1000 | 1200" },
                  { name: "Updo (Medium | Long)", regular: "900 | 1000", member: "800 | 900" },
                ]} 
              />
           </div>
           <div>
            <MenuSection 
                title="Bleach & Body Polish" 
                items={[
                  { name: "Upper Lip Bleach", regular: "100", member: "80" },
                  { name: "Face & Neck Bleach", regular: "650", member: "600" },
                  { name: "Full Body Bleach", regular: "3500", member: "3150" },
                  { name: "Whole Black Body Polish", regular: "2600", member: "2500" },
                  { name: "Reflexology (Neck & Shoulder)", regular: "600", member: "550" },
                  { name: "Reflexology (Feet)", regular: "700", member: "650" },
                ]} 
              />
           </div>
        </div>

        <div className="text-center mt-12 border-t border-black/10 pt-12">
           <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello,%20I%20would%20like%20to%20book%20a%20salon%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2e1e12] text-white hover:bg-[#b8893e] hover:text-[#2e1e12] px-10 py-4 font-accent text-xs tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-xl rounded-sm"
            >
              Book an Appointment
            </a>
        </div>
      </div>
    </main>
  );
}
