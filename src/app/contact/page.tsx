import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Booking | New Fine Cut Saloon",
  description: "Book your appointment via WhatsApp. Find our premium men's salon in Kalwad, Lohegaon, Pune.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="px-4 md:px-8 py-16 md:py-[120px] max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-16">
          <div className="signature-divider"></div>
          <h1 className="text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-widest mb-4">
            Contact & Booking
          </h1>
          <p className="text-body-md text-secondary-fixed-dim">
            Secure your appointment and find our sanctuary.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-5/12 flex flex-col justify-center">
            <h2 className="text-headline-md text-on-surface uppercase tracking-widest mb-6">Reserve Your Chair</h2>
            <p className="text-body-lg text-secondary-fixed-dim mb-8">
              We value your time and precision. Book ahead to ensure your preferred slot.
            </p>
            <div className="space-y-6 pt-8 mt-8 border-t border-outline-variant/20">
              <p className="text-body-md text-on-surface flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span> HWR4+VQR, Kalwad, Lohegaon, Pune
              </p>
              <p className="text-body-md text-on-surface flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">call</span> 08999624893
              </p>
              <p className="text-body-md text-on-surface flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">schedule</span> Open Daily: 9:00 AM - 9:00 PM
              </p>
            </div>
          </div>
          <div className="md:w-7/12">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Map Section Integrated */}
      <Link 
        href="https://maps.app.goo.gl/i8UpMuWy1gcP5fpU7"
        target="_blank"
        rel="noopener noreferrer"
        className="block group h-96 w-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 bg-surface-container-highest border-y border-outline-variant/20 relative"
      >
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 group-hover:bg-transparent transition-colors duration-500">
          <span className="bg-background/90 px-6 py-3 rounded text-primary font-label-md uppercase tracking-widest flex items-center gap-2 shadow-lg group-hover:shadow-[0_0_20px_rgba(242,202,80,0.3)] transition-shadow duration-300">
            <MapPin size={18} /> Open Live Map in Google Maps
          </span>
        </div>
      </Link>
    </div>
  );
}
