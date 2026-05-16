"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-primary/20 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-6 max-w-[1200px] mx-auto">
        <Link href="/" className="text-headline-md text-primary tracking-tight uppercase">
          New Fine Cut Saloon
        </Link>
        
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-label-md transition-all duration-300 ease-in-out uppercase tracking-widest ${
                  pathname === link.href ? "text-primary" : "text-on-surface hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-primary text-on-primary text-label-md px-6 py-3 uppercase tracking-widest hover:bg-primary-fixed transition-colors"
        >
          Book Appointment
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-primary/20 absolute w-full">
          <ul className="flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-label-md transition-all duration-300 ease-in-out uppercase tracking-widest ${
                    pathname === link.href ? "text-primary" : "text-on-surface hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center mt-4 bg-primary text-on-primary text-label-md px-6 py-3 uppercase tracking-widest hover:bg-primary-fixed transition-colors"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
