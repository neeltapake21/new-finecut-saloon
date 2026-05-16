import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[819px] flex items-center justify-center px-4 md:px-8 py-16 md:py-[120px] bg-surface-container-lowest bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "linear-gradient(rgba(19, 19, 19, 0.8), rgba(19, 19, 19, 0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAS2JP91EzuTAiOYXzhE3_F8tvXCiXVYC5iBNJt-FgMfug0q3KX6v1qUx_snkbXTYV7fa0Qbhxcivop-KZVhynkcycAgnsz516WjP-ne9EAi-qTMzEYBVk-PiVUZnDCC86b87gCW1qA0JYW2w28OX5dqD84IBeMtfG0rGmn3zxSTUYfKssZn7zeKeZuAGQPRbFTtg2qIkA-MOMcNuLBGLKItnp3jGuyd3V0dSXuTgKNNvx4LKBcSJ_8XonIOLSSoCfb2KF0xLv5g7dj')"
        }}
      >
        <div className="max-w-[1200px] mx-auto text-center z-10 w-full md:w-8/12">
          <h1 className="text-display-lg text-primary uppercase mb-8 tracking-widest leading-tight">
            Look Sharp.<br />Feel Confident.
          </h1>
          <p className="text-body-lg text-secondary-fixed-dim mb-12 max-w-2xl mx-auto">
            Modern grooming for modern gentlemen. Walk in looking good, walk out feeling unstoppable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-primary text-on-primary font-bold px-10 py-5 text-[15px] uppercase tracking-[0.15em] shadow-[0_0_15px_rgba(242,202,80,0.25)] hover:shadow-[0_0_25px_rgba(242,202,80,0.4)] hover:bg-primary-fixed transition-all duration-300 transform hover:scale-[1.02]"
            >
              Book Your Cut
            </Link>
            <Link 
              href="/services" 
              className="border border-primary text-primary text-label-md px-8 py-4 uppercase tracking-widest hover:bg-primary/10 transition-colors"
            >
              See Services
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* About Us Teaser Section */}
      <section className="px-4 md:px-8 py-16 md:py-[120px] max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="signature-divider ml-0"></div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-widest mb-8">
              A Legacy of<br />Excellence
            </h2>
            <p className="text-body-lg text-secondary-fixed-dim mb-6">
              Founded on the principles of classic barbering, New Fine Cut Saloon brings traditional techniques into the modern era. We believe that a haircut is not just a service, but an experience—a moment of refined relaxation for the modern gentleman.
            </p>
            <p className="text-body-lg text-secondary-fixed-dim mb-8">
              Our master barbers are artisans of their craft, dedicated to precision, attention to detail, and a commitment to ensuring every client walks out feeling their absolute best. Step into our sanctuary and discover the art of true grooming.
            </p>
            <Link href="/about" className="text-primary hover:text-primary-fixed uppercase tracking-widest text-label-md flex items-center gap-2 w-fit">
              Read Our Story <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div 
            className="md:w-1/2 w-full h-[500px] bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: "linear-gradient(rgba(19, 19, 19, 0.3), rgba(19, 19, 19, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdkQJTjxJuvTsBZOg5XBO1j_fYDyT4CePIqXf2CmAi8AMR27LvRtPgSdHWuPuTPrQXq14kfNBC4oEfDgzKAgTgnfSGSDBX0EBz4fU6SealuYZaYaKfo9mp3nrSHFZOScIpD0JGnstdNSuikc7e0Kj3IjGNphPYRwZBej5F1AaJzC1giWFgsEu21UxKkWKGYMRHB62_vG2zTW3eQW9Y-sgBwH1fzSKpUT-_zomQWtuHAb1TUgJ5I9JB_Fq06dZhR-rXYo5qmWlaPIAO')"
            }}
          >
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Client Praise Section */}
      <section className="px-4 md:px-8 py-16 md:py-[120px] bg-surface-container-lowest">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="signature-divider"></div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-widest mb-4">
              Client Praise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface p-10 border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex text-primary mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined icon-fill">star</span>
                  ))}
                </div>
                <p className="text-body-lg text-on-surface mb-8 italic">"Best salon in Town. Best experience"</p>
              </div>
              <div>
                <p className="text-label-md text-secondary-fixed uppercase tracking-wider">Zeeshan</p>
              </div>
            </div>
            
            <div className="bg-surface p-10 border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex text-primary mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined icon-fill">star</span>
                  ))}
                </div>
                <p className="text-body-lg text-on-surface mb-8 italic">"Excellent and Fully satisfying haircut."</p>
              </div>
              <div>
                <p className="text-label-md text-secondary-fixed uppercase tracking-wider">Fozail khan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Contact & Booking Section */}
      <section className="flex flex-col">
        <div className="px-4 md:px-8 py-16 md:py-[120px] max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-16">
            <div className="signature-divider"></div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-widest mb-4">
              Contact & Booking
            </h2>
            <p className="text-body-md text-secondary-fixed-dim">Secure your appointment and find our sanctuary.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-5/12 flex flex-col justify-center">
              <h3 className="text-headline-md text-on-surface uppercase tracking-widest mb-6">Reserve Your Chair</h3>
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
        </div>
      </section>
    </>
  );
}
