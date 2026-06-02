"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePlausible } from "next-plausible";
import { siteConfig } from "@/config/site";

const formSchema = z.object({
  name:    z.string().min(2, "Name is required"),
  phone:   z.string().min(10, "Valid phone number is required"),
  email:   z.string().email("Valid email is required").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  date:    z.string().min(1, "Event date is required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

/* Shared input/field classes for perfect consistency */
const inputClass =
  "w-full h-12 px-0 bg-transparent border-b border-[#2e1e12]/15 font-sans text-sm text-[#2e1e12] placeholder:text-[#2e1e12]/40 focus:outline-none focus:border-[#b8893e] transition-colors";

const labelClass =
  "block font-accent text-[9px] tracking-[0.2em] uppercase text-[#7a5520]/80 mb-1.5";

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess,    setIsSuccess   ] = useState(false);
  const router   = useRouter();
  const plausible = usePlausible();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const text = `Hi Meenu, I would like to book a consultation.%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Email:* ${data.email || "N/A"}%0A*Service:* ${data.service}%0A*Event Date:* ${data.date}%0A*Message:* ${data.message || "N/A"}`;
      plausible("form_submit", { props: { service: data.service } });
      setIsSuccess(true);
      reset();
      window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, "_blank");
      setTimeout(() => router.push("/thank-you"), 1000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="pt-20 lg:pt-32 pb-32 lg:pb-44 bg-white text-black border-t border-black/5">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">

          {/* ── Left: Copy + WhatsApp ── */}
          <div>
            <p className="eyebrow text-[#b8893e] mb-5">Reserve Your Date</p>
            <h2 className="heading-lg text-[#2e1e12] mb-7 leading-tight">
              Let&apos;s Create Something{" "}
              <em className="italic font-light text-[#8A8580]">Beautiful</em>
            </h2>
            <p className="font-sans text-[#2e1e12]/60 text-base leading-relaxed mb-10">
              Your wedding day is one of the most important chapters of your life. We take on
              a limited number of brides each season to ensure an intimate, unhurried, and perfectly
              tailored luxury experience.
            </p>

            <div className="bg-[#f5efe6] p-7 lg:p-9 border border-[#b8893e]/12 rounded-sm">
              <h3 className="font-heading text-xl text-[#2e1e12] mb-3">Fastest Way to Reach Us</h3>
              <p className="font-sans text-[#2e1e12]/55 text-sm mb-7">
                For immediate availability checks and consultation bookings, message us directly on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meenu,%20I%27m%20interested%20in%20booking%20a%20consultation`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#25D366] text-white font-accent text-xs tracking-[0.15em] uppercase hover:bg-[#20bd5a] transition-colors shadow-sm hover:shadow-md rounded-sm"
              >
                <MessageCircle size={18} />
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* ── Right: Inquiry Form ── */}
          <div>
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-[#f5efe6] border border-[#b8893e]/20 rounded-sm">
                <CheckCircle2 size={56} className="text-[#b8893e] mb-5" />
                <h3 className="font-heading text-2xl text-[#2e1e12] mb-3">Inquiry Sent</h3>
                <p className="font-sans text-[#2e1e12]/60 text-sm">
                  Thank you for reaching out. Meenu will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-7"
                suppressHydrationWarning
              >
                {/* Row 1: Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label htmlFor="name" className={labelClass}>Your Name *</label>
                    <div className="relative">
                      <input id="name" suppressHydrationWarning {...register("name")} type="text" placeholder="e.g. Priya" className={inputClass} />
                      {errors.name && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.name.message}</span>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                    <div className="relative">
                      <input id="phone" suppressHydrationWarning {...register("phone")} type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} />
                      {errors.phone && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.phone.message}</span>}
                    </div>
                  </div>
                </div>

                {/* Row 2: Email + Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address</label>
                    <input id="email" suppressHydrationWarning {...register("email")} type="email" placeholder="Optional" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="date" className={labelClass}>Event Date *</label>
                    <div className="relative">
                      <input id="date" suppressHydrationWarning {...register("date")} type="date" className={inputClass} required />
                      {errors.date && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.date.message}</span>}
                    </div>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className={labelClass}>Select Service *</label>
                  <div className="relative">
                    <select id="service" suppressHydrationWarning {...register("service")} className={`${inputClass} cursor-pointer appearance-none`}>
                      <option value="" disabled hidden>Choose a service…</option>
                      <option value="Bridal Package - Essential">Bridal Package – Essential</option>
                      <option value="Bridal Package - Luxury">Bridal Package – Luxury</option>
                      <option value="Bridal Package - Elite">Bridal Package – Elite</option>
                      <option value="Engagement Makeup">Engagement Makeup</option>
                      <option value="Reception Makeup">Reception Makeup</option>
                      <option value="Other">Other / Custom</option>
                    </select>
                    {errors.service && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.service.message}</span>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>Your Vision</label>
                  <textarea id="message" suppressHydrationWarning {...register("message")} rows={3} placeholder="Tell us about your wedding vision…" className={`${inputClass} h-auto py-3 resize-none`} />
                </div>

                {/* Submit */}
                <button
                  suppressHydrationWarning
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 h-12 px-9 bg-[#4a2f1c] text-[#f5efe6] font-accent text-xs tracking-[0.22em] uppercase hover:bg-[#2e1e12] transition-colors disabled:opacity-60 rounded-sm"
                >
                  {isSubmitting ? "Sending…" : "Request Consultation"}
                  {!isSubmitting && <Send size={14} />}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
