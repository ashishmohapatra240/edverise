"use client";

import Image from "next/image";

export default function WhatAreWeMadeOfSection() {
  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white leading-tight tracking-tight font-sans mb-4">
            What are we made of?
          </h2>
          <p className="text-white text-base font-normal font-sans tracking-tight leading-relaxed max-w-2xl">
            When we say 'premium,' we mean an agency that works with brands that{" "}
            <span className="text-[#FA7047] font-medium">
              'think, talk, and feel premium'
            </span>
            .
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block relative">
            <div className="flex items-center justify-center py-12">
              <div className="relative w-full flex items-center justify-center">
                <Image
                  src="/images/pie-chart.png"
                  alt="3D Pie Chart"
                  height={1000}
                  width={1000}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="lg:hidden space-y-8">
              <div className="flex items-center justify-center">
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src="/images/pie-chart.png"
                    alt="3D Pie Chart"
                    height={1000}
                    width={1000}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
