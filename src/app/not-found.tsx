import Link from "next/link";
import { H1, Body } from "@/components/ui/Typography";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-[#b8893e] text-lg tracking-[0.3em] uppercase mb-4 font-medium">Error 404</h2>
          <H1 className="text-[#2e1e12] mb-6">Page not found</H1>
          <Body className="text-[#2e1e12]/70 mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Body>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="w-full sm:w-auto bg-[#2e1e12] text-white px-8 py-4 text-[13px] uppercase tracking-[0.18em] font-semibold hover:bg-[#4a2f1c] transition-colors duration-300"
          >
            Return Home
          </Link>
          <a 
            href="https://wa.me/919999999999" // Assuming standard WhatsApp CTA link format
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-[#b8893e] text-[#2e1e12] px-8 py-4 text-[13px] uppercase tracking-[0.18em] font-semibold hover:bg-[#b8893e]/10 transition-colors duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
