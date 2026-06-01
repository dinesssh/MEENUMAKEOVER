"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePlausible } from "next-plausible";
import { siteConfig } from "@/config/site";

// Form Schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Event date is required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const plausible = usePlausible();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const text = `Hi Meenu, I would like to book a consultation.%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Email:* ${data.email || 'N/A'}%0A*Service:* ${data.service}%0A*Event Date:* ${data.date}%0A*Message:* ${data.message || 'N/A'}`;
      const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
      
      plausible("form_submit", { props: { service: data.service } });
      setIsSuccess(true);
      reset();
      
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => {
        router.push("/thank-you");
      }, 1000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-white text-black border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Emotional Copy + WhatsApp */}
          <div className="max-w-xl">
            <h2 className="text-gold font-accent tracking-widest text-sm font-medium mb-4 uppercase">
              Reserve Your Date
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-8 leading-tight text-black">
              Let&apos;s Create Something <span className="italic text-warm-gray">Beautiful</span>
            </h3>
            
            <p className="text-lg text-black/70 font-sans leading-relaxed mb-10">
              Your wedding day is one of the most important chapters of your life. We take on a limited number of brides each season to ensure an intimate, unhurried, and perfectly tailored luxury experience.
            </p>

            <div className="bg-[#F9F7F2] p-8 md:p-10 border border-black/5 rounded-sm">
              <h4 className="font-heading text-2xl mb-4 text-black">Fastest Way to Reach Us</h4>
              <p className="text-black/60 font-sans mb-8">
                For immediate availability checks and consultation bookings, message us directly on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I'm%20interested%20in%20booking%20a%20consultation`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-accent text-base font-medium tracking-wide hover:bg-[#20bd5a] transition-colors shadow-sm hover:shadow-md"
              >
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="bg-white lg:pt-4">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-ivory border border-gold/20 rounded-sm animate-in fade-in zoom-in duration-500">
                <CheckCircle2 size={64} className="text-gold mb-6" />
                <h4 className="text-3xl font-heading mb-4 text-black">Inquiry Sent</h4>
                <p className="text-black/70 font-sans">
                  Thank you for reaching out. Meenu will get back to you within 24 hours to discuss your big day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="relative">
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full bg-transparent border-b border-black/20 py-3 font-sans text-black focus:outline-none focus:border-gold transition-colors peer"
                      placeholder="Your Name *"
                    />
                    {errors.name && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-sans">{errors.name.message}</span>}
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full bg-transparent border-b border-black/20 py-3 font-sans text-black focus:outline-none focus:border-gold transition-colors peer"
                      placeholder="Phone Number *"
                    />
                    {errors.phone && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-sans">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Email */}
                  <div className="relative">
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full bg-transparent border-b border-black/20 py-3 font-sans text-black focus:outline-none focus:border-gold transition-colors peer"
                      placeholder="Email Address (Optional)"
                    />
                    {errors.email && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-sans">{errors.email.message}</span>}
                  </div>

                  {/* Date */}
                  <div className="relative">
                    <input
                      {...register("date")}
                      type="date"
                      className="w-full bg-transparent border-b border-black/20 py-3 font-sans text-black/50 focus:text-black focus:outline-none focus:border-gold transition-colors peer"
                      required
                    />
                    {errors.date && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-sans">{errors.date.message}</span>}
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <select
                    {...register("service")}
                    className="w-full bg-transparent border-b border-black/20 py-3 font-sans text-black/50 focus:text-black focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled hidden>Select Service *</option>
                    <option value="Bridal Package - Essential">Bridal Package - Essential</option>
                    <option value="Bridal Package - Luxury">Bridal Package - Luxury</option>
                    <option value="Bridal Package - Elite">Bridal Package - Elite</option>
                    <option value="Engagement Makeup">Engagement Makeup</option>
                    <option value="Reception Makeup">Reception Makeup</option>
                    <option value="Other">Other / Custom</option>
                  </select>
                  {errors.service && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-sans">{errors.service.message}</span>}
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    {...register("message")}
                    rows={3}
                    className="w-full bg-transparent border-b border-black/20 py-3 font-sans text-black focus:outline-none focus:border-gold transition-colors resize-none peer"
                    placeholder="Tell us about your wedding vision..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-4 bg-black text-ivory font-accent text-sm font-medium tracking-widest uppercase hover:bg-gold hover:text-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Request Consultation"}
                  {!isSubmitting && <Send size={16} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
