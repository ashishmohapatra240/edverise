"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex items-center py-20 sm:py-24 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-[1.1] sm:leading-[1.05] lg:leading-[1] tracking-tight font-sans">
              We&apos;re a premium design agency.
            </h1>

            <p className="text-white text-sm sm:text-base lg:text-lg max-w-xl font-normal font-sans tracking-tight leading-relaxed">
              When we say &apos;premium,&apos; we mean an agency that works with brands
              that{" "}
              <span className="text-[#FA7047] font-medium">
                &apos;think, talk, and feel premium&apos;
              </span>
              .
            </p>

           
          </div>

          <div className="relative w-full order-2 lg:order-2">
            <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Hero.png"
                alt="Premium design workspace"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 bg-[#9C9C9C]/8 rounded-[20px] mt-6 sm:mt-8 border-2 border-[#9C9C9C]/24 p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm sm:text-base lg:text-lg font-normal font-sans px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-0 border-none rounded-[8px]"
              />
              <button
                className="bg-[#FA7047] hover:bg-orange-600 text-white px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-[8px] transition-all duration-300 text-sm sm:text-base font-medium font-sans cursor-pointer whitespace-nowrap"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
