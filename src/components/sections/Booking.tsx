"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageCircle, CheckCircle2, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePlausible } from "next-plausible";
import { siteConfig } from "@/config/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  category: z.string().optional(),
  service: z.string().optional(),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  date: z.string().min(1, "Event date is required"),
  time: z.string().optional(),
  location: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const BRIDAL_SERVICES = [
  "Krylon Makeup",
  "HD Makeup",
  "Waterproof Makeup",
  "Airbrush Makeup",
  "Bride Maid Makeup"
];

const SALON_SERVICES = {
  "Hair": ["Hair Smoothening", "Keratin", "Straightening", "Botox", "Hair Spa", "Hair Strengthening", "Dandruff Control", "Hair Fall Control"],
  "Styling": ["Hair Cut", "Layer Cut", "U Cut", "Hair Wash", "Blow Dry", "Hair Styling"],
  "Color": ["Root Touch Up", "Global Colour", "Highlights", "Balayage"],
  "Skin": ["Waxing", "Bleach", "Body Polish", "Reflexology"]
};

export default function Booking() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const plausible = usePlausible();
  const stepContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { category: "", service: "", name: "", phone: "", email: "", date: "", time: "", location: "", message: "" }
  });

  const category = watch("category");
  const service = watch("service");

  // Animate step transitions
  useEffect(() => {
    if (stepContainerRef.current) {
      gsap.fromTo(
        stepContainerRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [step]);

  // Initial scroll reveal
  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );
  }, { scope: sectionRef });

  const handleNext = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = !!category;
      if (!isValid) alert("Please select a category.");
    } else if (step === 2) {
      isValid = !!service;
      if (!isValid) alert("Please select a service.");
    } else if (step === 3) {
      isValid = await trigger(["name", "phone", "date"]);
    }

    if (isValid) setStep((s) => Math.min(s + 1, 4));
  };

  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const text = `Hi Meenu, I would like to reserve my bridal experience.%0A%0A*Category:* ${data.category}%0A*Service:* ${data.service}%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Date:* ${data.date}%0A*Time:* ${data.time || "N/A"}%0A*Location:* ${data.location || "N/A"}%0A*Vision:* ${data.message || "N/A"}`;
      plausible("form_submit", { props: { service: data.service, category: data.category } });
      setIsSuccess(true);
      window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, "_blank");
      setTimeout(() => router.push("/thank-you"), 1500);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const FloatingInput = ({ id, label, type = "text", required = false }: { id: keyof FormData, label: string, type?: string, required?: boolean }) => (
    <div className="relative pt-5 pb-2">
      <input
        id={id}
        type={type}
        suppressHydrationWarning
        {...register(id)}
        className="peer w-full h-10 border-b border-[#2B1D16]/20 bg-transparent text-[#2B1D16] font-sans text-base placeholder-transparent focus:border-[#C8A15A] focus:outline-none transition-colors"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-1 text-[10px] uppercase tracking-widest text-[#2B1D16]/50 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#2B1D16]/60 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#C8A15A] peer-focus:uppercase peer-focus:tracking-widest cursor-text"
      >
        {label} {required && "*"}
      </label>
      {errors[id] && <span className="absolute bottom-[-10px] left-0 text-[10px] text-red-500">{errors[id]?.message as string}</span>}
    </div>
  );

  return (
    <section id="booking" ref={sectionRef} className="pt-24 pb-32 bg-[#F7F3ED] text-[#2B1D16] border-t border-[#C8A15A]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">

          {/* ── Left: Premium Copy + WhatsApp ── */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] font-semibold text-[#C8A15A] mb-6">Exclusive Consultation</p>
              <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl text-[#2B1D16] mb-8 leading-[1.1]">
                Reserve Your<br /><i className="font-light text-[#C8A15A]">Luxury Consultation</i>
              </h2>
              <p className="font-sans text-[#2B1D16]/70 text-base leading-relaxed mb-12 max-w-md">
                Tell us about your beauty needs and our team will help create your perfect luxury experience.
              </p>

              <div className="bg-white/40 backdrop-blur-sm p-8 rounded-sm border border-[#C8A15A]/20 shadow-[0_10px_40px_rgba(43,29,22,0.03)] mb-12">
                <h3 className="font-heading text-xl text-[#2B1D16] mb-6">Why Brides Choose Meenu Makeover</h3>
                <ul className="space-y-4">
                  {[
                    "Personalized Consultation",
                    "Premium International Products",
                    "10+ Years Experience",
                    "750+ Happy Brides",
                    "Dedicated Bridal Support",
                    "Luxury Studio Experience"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#2B1D16]/80 font-sans">
                      <CheckCircle2 size={16} className="text-[#C8A15A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#2B1D16]/50 mb-4">Need Immediate Assistance?</p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I%20need%20assistance%20with%20a%20luxury%20booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-6 bg-[#25D366] text-white rounded-sm hover:bg-[#20bd5a] transition-all duration-500 shadow-[0_10px_30px_rgba(37,211,102,0.2)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)]"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle size={24} />
                  <span className="font-sans font-medium tracking-wide">Chat With Our Team</span>
                </div>
                <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* ── Right: Multi-Step Luxury Form ── */}
          <div className="bg-white/60 backdrop-blur-md p-8 lg:p-12 rounded-sm border border-[#C8A15A]/20 shadow-[0_20px_60px_rgba(43,29,22,0.05)] relative overflow-hidden">
            
            {/* Step Indicators */}
            {!isSuccess && (
              <div className="flex items-center gap-2 mb-10">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className={cn(
                      "h-1 w-full rounded-full transition-all duration-700",
                      step >= s ? "bg-[#C8A15A]" : "bg-[#2B1D16]/10"
                    )} />
                  </div>
                ))}
              </div>
            )}

            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-[#C8A15A]/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={40} className="text-[#C8A15A]" />
                </div>
                <h3 className="font-heading text-4xl text-[#2B1D16] mb-4">Thank You</h3>
                <p className="font-sans text-[#2B1D16]/70 text-base leading-relaxed max-w-sm mx-auto mb-8">
                  We are honored to be part of your special day. Our team will contact you shortly to discuss your personalized experience.
                </p>
                <div className="space-y-3 text-sm text-[#2B1D16]/60 font-sans text-left bg-white/50 p-6 rounded-sm border border-[#C8A15A]/10 w-full max-w-sm mx-auto">
                  <p className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#C8A15A]" /> Consultation Request Received</p>
                  <p className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#C8A15A]" /> Team Will Contact Within 24 Hours</p>
                  <p className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#C8A15A]" /> WhatsApp Confirmation Sent</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="min-h-[400px] flex flex-col" suppressHydrationWarning>
                
                <div ref={stepContainerRef} className="flex-1">
                  
                  {/* STEP 1: Category */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="font-heading text-3xl text-[#2B1D16] mb-2">Select Service Category</h3>
                      <p className="font-sans text-sm text-[#2B1D16]/50 mb-8">Choose the type of experience you are looking for.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Bridal Services", "Salon Services"].map((cat) => (
                          <div
                            key={cat}
                            onClick={() => setValue("category", cat)}
                            className={cn(
                              "cursor-pointer p-6 rounded-sm border-2 transition-all duration-300 flex items-center justify-between group",
                              category === cat 
                                ? "border-[#C8A15A] bg-[#C8A15A]/5 shadow-[0_0_20px_rgba(200,161,90,0.15)]" 
                                : "border-[#2B1D16]/10 bg-white/50 hover:border-[#C8A15A]/50 hover:bg-white"
                            )}
                          >
                            <span className="font-heading text-xl text-[#2B1D16]">{cat}</span>
                            <div className={cn(
                              "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                              category === cat ? "border-[#C8A15A]" : "border-[#2B1D16]/20 group-hover:border-[#C8A15A]/50"
                            )}>
                              {category === cat && <div className="w-2.5 h-2.5 bg-[#C8A15A] rounded-full" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Service */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="font-heading text-3xl text-[#2B1D16] mb-2">Select {category === "Bridal Services" ? "Bridal" : "Salon"} Service</h3>
                      <p className="font-sans text-sm text-[#2B1D16]/50 mb-8">Which specific service interests you?</p>
                      
                      {category === "Bridal Services" ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {BRIDAL_SERVICES.map((srv) => (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => { setValue("service", srv); handleNext(); }}
                              className={cn(
                                "text-left px-5 py-4 font-sans text-sm border rounded-sm transition-all duration-300",
                                service === srv ? "border-[#C8A15A] bg-[#C8A15A]/5 text-[#2B1D16]" : "border-[#2B1D16]/10 bg-white/50 text-[#2B1D16]/70 hover:border-[#C8A15A]/50"
                              )}
                            >
                              {srv}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-6 h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                          {Object.entries(SALON_SERVICES).map(([group, services]) => (
                            <div key={group}>
                              <p className="font-sans text-[10px] uppercase tracking-widest text-[#C8A15A] mb-3">{group}</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {services.map((srv) => (
                                  <button
                                    key={srv}
                                    type="button"
                                    onClick={() => { setValue("service", srv); handleNext(); }}
                                    className={cn(
                                      "text-left px-4 py-3 font-sans text-sm border rounded-sm transition-all duration-300",
                                      service === srv ? "border-[#C8A15A] bg-[#C8A15A]/5 text-[#2B1D16]" : "border-[#2B1D16]/10 bg-white/50 text-[#2B1D16]/70 hover:border-[#C8A15A]/50"
                                    )}
                                  >
                                    {srv}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 3: Customer Information */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <h3 className="font-heading text-3xl text-[#2B1D16] mb-2">Your Details</h3>
                      <p className="font-sans text-sm text-[#2B1D16]/50 mb-6">How can we reach you to confirm your booking?</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        <FloatingInput id="name" label="Full Name" required />
                        <FloatingInput id="phone" label="Phone Number" type="tel" required />
                        <FloatingInput id="email" label="Email Address" type="email" />
                        <FloatingInput id="location" label="Location / City" />
                        <FloatingInput id="date" label="Wedding / Event Date" type="date" required />
                        <FloatingInput id="time" label="Preferred Time" type="time" />
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Vision */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <h3 className="font-heading text-3xl text-[#2B1D16] mb-2">Tell Us About Your Vision</h3>
                      <p className="font-sans text-sm text-[#2B1D16]/50 mb-6">Share the details to help us craft your perfect look.</p>
                      
                      <div className="relative pt-2">
                        <textarea
                          id="message"
                          suppressHydrationWarning
                          {...register("message")}
                          rows={5}
                          className="w-full p-4 bg-transparent border border-[#2B1D16]/20 text-[#2B1D16] font-sans text-base focus:border-[#C8A15A] focus:outline-none transition-colors rounded-sm resize-none custom-scrollbar"
                          placeholder="Share your wedding theme, preferred bridal look, venue details, and any special requirements..."
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Form Navigation Controls */}
                <div className="mt-10 pt-6 border-t border-[#2B1D16]/10 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="font-sans text-xs uppercase tracking-widest text-[#2B1D16]/60 hover:text-[#C8A15A] transition-colors flex items-center gap-2"
                    >
                      <ChevronLeft size={16} /> Back
                    </button>
                  ) : <div />}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2B1D16] text-[#F7F3ED] font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#1a110a] transition-all rounded-sm shadow-sm"
                    >
                      Continue <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      suppressHydrationWarning
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#C8A15A] to-[#B8860B] text-white font-sans text-sm tracking-[0.2em] uppercase transition-all duration-500 rounded-sm hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(200,161,90,0.4)] disabled:opacity-70"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                      
                      {isSubmitting ? "Processing..." : "Reserve My Date"}
                      {!isSubmitting && <Sparkles size={16} />}
                    </button>
                  )}
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
