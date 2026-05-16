import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-8 py-16 max-w-[1200px] mx-auto gap-8">
        <div className="md:w-1/3">
          <div className="text-headline-md text-primary uppercase mb-6 tracking-tight">
            New Fine Cut Saloon
          </div>
          <div className="flex items-center gap-2 mb-2 group">
            <MapPin size={16} className="text-primary group-hover:text-primary-fixed transition-colors" />
            <p className="text-label-sm text-on-surface-variant group-hover:text-primary transition-all duration-300">
              HWR4+VQR, Kalwad, Lohegaon, Pune
            </p>
          </div>
          <div className="flex items-center gap-2 mb-6 group">
            <Phone size={16} className="text-primary group-hover:text-primary-fixed transition-colors" />
            <p className="text-label-sm text-on-surface-variant group-hover:text-primary transition-all duration-300">
              08999624893
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
          </div>
        </div>
        
        <div className="md:w-2/3 flex flex-col md:items-end justify-between h-full">
          <div className="flex flex-wrap gap-8 mb-12 md:mb-0">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-label-sm text-on-surface-variant hover:text-primary uppercase tracking-widest transition-colors">Home</Link>
              <Link href="/about" className="text-label-sm text-on-surface-variant hover:text-primary uppercase tracking-widest transition-colors">About</Link>
              <Link href="/services" className="text-label-sm text-on-surface-variant hover:text-primary uppercase tracking-widest transition-colors">Services</Link>
              <Link href="/contact" className="text-label-sm text-on-surface-variant hover:text-primary uppercase tracking-widest transition-colors">Contact</Link>
            </div>
          </div>
          <p className="text-body-md text-on-surface-variant mt-8 md:mt-0">
            © {new Date().getFullYear()} New Fine Cut Saloon. Precision Grooming.
          </p>
        </div>
      </div>
    </footer>
  );
}
