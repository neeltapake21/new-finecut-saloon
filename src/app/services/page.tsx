import type { Metadata } from "next";
import ServicePriceList from "@/components/ServicePriceList";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing | New Fine Cut Saloon",
  description: "Explore our premium men's grooming services including fade cuts, hot towel shaves, hair patch fixes, and facials in Lohegaon.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="px-4 md:px-8 py-16 md:py-[120px] max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-16">
          <div className="signature-divider"></div>
          <h1 className="text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-widest mb-4">
            Our Services
          </h1>
          <p className="text-body-md text-secondary-fixed-dim">
            Precision and care in every detail.
          </p>
        </div>
        
        <ServicePriceList />

        <div className="mt-24 text-center">
          <p className="text-body-lg text-secondary-fixed-dim mb-8">
            Ready to elevate your identity?
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-on-primary font-bold px-10 py-5 text-[15px] uppercase tracking-[0.15em] shadow-[0_0_15px_rgba(242,202,80,0.25)] hover:shadow-[0_0_25px_rgba(242,202,80,0.4)] hover:bg-primary-fixed transition-all duration-300 transform hover:scale-[1.02]"
          >
            Book Your Chair
          </Link>
        </div>
      </section>
    </div>
  );
}
