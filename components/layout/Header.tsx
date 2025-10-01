"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#9C9C9C]/4 backdrop-blur-sm" : "bg-[#9C9C9C]/8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Edverise Logo"
              width={150}
              height={40}
              className="h-7 lg:h-9 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/services"
              className="text-white hover:text-[#FA7047] transition-colors duration-200 text-sm lg:text-base font-normal"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#FA7047] transition-colors duration-200 text-sm lg:text-base font-normal"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#FA7047] transition-colors duration-200 text-sm lg:text-base font-normal"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="bg-[#FA7047] hover:bg-[#FA7047] text-white px-4 py-2 rounded-[10px] transition-all duration-200 text-base font-normal hover:bg-orange-600"
            >
              Get in Touch
            </Link>
          </nav>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-in slide-in-from-top">
            <Link
              href="/services"
              className="block text-white hover:text-[#FA7047] transition-colors duration-200 text-base py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-[#FA7047] transition-colors duration-200 text-base py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-[#FA7047] transition-colors duration-200 text-base py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-[#FA7047] hover:bg-[#FA7047] text-white px-4 py-2 rounded-[10px] transition-all duration-200 text-base mt-2 rounded-[10px] hover:bg-orange-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
