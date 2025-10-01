"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChoosePackageSection() {
  const packages = [
    {
      price: "STARTS FROM $25 K",
      title: "Premium Brand Suite",
      description:
        "Complete brand transformation with UI/UX design, visual identity, and strategic consulting for enterprise-level brands.",
      features: [
        { text: "Complete UI/UX design & user research", active: true },
        { text: "Brand identity & visual design system", active: true },
        { text: "Strategic consulting & brand positioning", active: true },
        { text: "Unlimited revisions & dedicated support", active: true },
      ],
    },
    {
      price: "STARTS FROM $15 K",
      title: "Essential Refresh",
      description:
        "Perfect for startups and growing businesses looking to elevate their digital presence with professional design.",
      features: [
        { text: "UI/UX design for web or mobile app", active: true },
        { text: "Visual refresh & design optimization", active: true },
        { text: "Brand strategy consultation", active: false },
        { text: "3 rounds of revisions & email support", active: true },
      ],
    },
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white leading-tight tracking-tight font-sans mb-4">
            Choose your package.
          </h2>
          <p className="text-white text-base font-normal font-sans tracking-tight leading-relaxed max-w-2xl">
            When we say &apos;premium,&apos; we mean an agency that works with brands that{" "}
            <span className="text-[#FA7047] font-medium">
              &apos;think, talk, and feel premium&apos;
            </span>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col space-y-4 sm:space-y-5 lg:space-y-6"
            >
              <div className="w-12 h-12 flex items-center justify-start">
                <Image
                  src="/images/offer-star.svg"
                  alt="Star"
                  width={48}
                  height={48}
                />
              </div>

              <p className="text-[#808080] text-base font-medium tracking-wider uppercase font-sans">
                {pkg.price}
              </p>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white font-sans tracking-tight">
                {pkg.title}
              </h3>

              <p className="text-[#9C9C9C] text-base font-normal font-sans leading-relaxed">
                {pkg.description}
              </p>

              <div className="space-y-3 flex-grow pt-2">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          feature.active
                            ? "bg-white"
                            : "bg-[#3A3A3A] opacity-50"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={feature.active ? "#000000" : "#808080"}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <p
                      className={`text-base font-normal font-sans leading-relaxed ${
                        feature.active ? "text-white" : "text-[#5A5A5A]"
                      }`}
                    >
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>


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

