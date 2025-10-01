"use client";

import Image from "next/image";

export default function ImagineSection() {
  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white text-center mb-12 leading-tight tracking-tight font-sans">
          Imagine that's your product.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl md:rounded-3xl lg:rounded-[32px] p-8 flex flex-col items-center text-center space-y-3">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                src="/images/Imagine1.svg"
                alt="Imagine 1"
                width={200}
                height={200}
              />
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white font-sans tracking-tight">
              Without Us
            </h3>

            <p className="text-[#9C9C9C] text-base font-normal font-sans leading-relaxed max-w-md">
              Too many ideas, too many inspirations, too many references for
              your next product concept?
            </p>
          </div>

  
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl md:rounded-3xl lg:rounded-[32px] p-8 flex flex-col items-center text-center space-y-3">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                src="/images/Imagine2.svg"
                alt="Imagine 2"
                width={200}
                height={200}
              />
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white font-sans tracking-tight">
              With Us
            </h3>

            <p className="text-[#9C9C9C] text-base font-normal font-sans leading-relaxed max-w-md">
              "Design is the art of letting go, of all that is unnecessary". We
              truly believe in designing for the 'whys?'.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
