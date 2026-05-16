import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | New Fine Cut Saloon",
  description: "Discover the legacy of excellence at New Fine Cut Saloon in Lohegaon, Pune.",
};

export default function AboutPage() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-[120px] max-w-[1200px] mx-auto min-h-[60vh] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <div className="signature-divider ml-0"></div>
          <h1 className="text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-widest mb-8">
            A Legacy of<br />Excellence
          </h1>
          <p className="text-body-lg text-secondary-fixed-dim mb-6">
            Founded on the principles of classic barbering, New Fine Cut Saloon brings traditional techniques into the modern era. We believe that a haircut is not just a service, but an experience—a moment of refined relaxation for the modern gentleman.
          </p>
          <p className="text-body-lg text-secondary-fixed-dim mb-6">
            Our master barbers are artisans of their craft, dedicated to precision, attention to detail, and a commitment to ensuring every client walks out feeling their absolute best. Step into our sanctuary and discover the art of true grooming.
          </p>
          <p className="text-body-lg text-secondary-fixed-dim">
            Located in the heart of Kalwad, Lohegaon, Pune, we have established ourselves as the premier destination for men's grooming. From our bespoke Fade Cuts to our Royal Hot Towel Shaves, every service is tailored to elevate your identity and master the art of first impressions.
          </p>
        </div>
        <div 
          className="md:w-1/2 w-full h-[600px] bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(19, 19, 19, 0.3), rgba(19, 19, 19, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdkQJTjxJuvTsBZOg5XBO1j_fYDyT4CePIqXf2CmAi8AMR27LvRtPgSdHWuPuTPrQXq14kfNBC4oEfDgzKAgTgnfSGSDBX0EBz4fU6SealuYZaYaKfo9mp3nrSHFZOScIpD0JGnstdNSuikc7e0Kj3IjGNphPYRwZBej5F1AaJzC1giWFgsEu21UxKkWKGYMRHB62_vG2zTW3eQW9Y-sgBwH1fzSKpUT-_zomQWtuHAb1TUgJ5I9JB_Fq06dZhR-rXYo5qmWlaPIAO')"
          }}
        >
        </div>
      </div>
    </section>
  );
}
