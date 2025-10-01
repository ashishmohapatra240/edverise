"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatWeOfferSection() {
  const services = [
    {
      icon: "✨",
      label: "UI/UX DESIGN",
      title: "UI/UX Design",
      description:
        "When we say 'premium,' we mean an agency that works with brands that 'think, talk, and feel premium'.",
    },
    {
      icon: "✨",
      label: "BRAND REFRESHMENT",
      title: "UX/UI Refresh",
      description:
        "When we say 'premium,' we mean an agency that works with brands that 'think, talk, and feel premium'.",
    },
    {
      icon: "✨",
      label: "VISUAL DESIGN",
      title: "Visual Design",
      description:
        "When we say 'premium,' we mean an agency that works with brands that 'think, talk, and feel premium'.",
    },
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white leading-tight tracking-tight font-sans mb-4">
            What we offer.
          </h2>
          <p className="text-white text-base font-normal font-sans tracking-tight leading-relaxed max-w-2xl">
            When we say 'premium,' we mean an agency that works with brands that{" "}
            <span className="text-[#FA7047] font-medium">
              'think, talk, and feel premium'
            </span>
            .
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-6 flex flex-col space-y-4 sm:space-y-5 lg:space-y-6"
            >
              <div className="w-12 h-12 flex items-center justify-start">
                <Image src="/images/offer-star.svg" alt="Star" width={48} height={48} />
              </div>

              <p className="text-[#808080] text-base font-medium tracking-wider uppercase font-sans">
                {service.label}
              </p>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white font-sans tracking-tight">
                {service.title}
              </h3>

              <p className="text-[#9C9C9C] text-base font-normal font-sans leading-relaxed flex-grow">
                {service.description}
              </p>

              <Link
                href="/contact"
                className="bg-[#FA7047] hover:bg-orange-600 text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-[10px] transition-all duration-300 text-base font-medium font-sans cursor-pointer inline-block text-center mt-2"
              >
                Book Service
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

