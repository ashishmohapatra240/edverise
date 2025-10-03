"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Nihar Ranjan Rout",
    description: "CEO @ Edverise",
    image: "/images/team/nihar.png",
  },
  {
    name: "Samikshya S Kar",
    description: "Lead Designer @ Edverise",
    image: "/images/team/samikshya.webp",
  },
  {
    name: "Ashish Mohapatra",
    description: "Software Engineer @ Edverise",
    image: "/images/team/ashish.jpg",
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  const setCardRef = (el: HTMLDivElement | null, idx: number) => {
    if (el) {
      cardsRef.current[idx] = el;
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            y: 20,
            opacity: 0,
            duration: 0.3,
            delay: 0.2 + i * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });

    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-16 sm:py-20 lg:py-24 xl:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center lg:text-left">
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight font-sans"
          >
            Our (small but elite) team.
          </h2>
          <p
            ref={subtitleRef}
            className="text-white text-base sm:text-lg lg:text-xl max-w-2xl font-normal font-sans leading-relaxed"
          >
            When we say &apos;premium,&apos; we mean an agency that works with
            brands that{" "}
            <span className="text-[#FA7047] font-medium">
              &apos;think, talk, and feel premium&apos;
            </span>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => setCardRef(el, index)}
              className="group relative rounded-2xl lg:rounded-3xl overflow-hidden bg-[#1A1A1A] border-2 border-[#2A2A2A] hover:border-[#FA7047]/50 transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="bg-[#FA7047] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black mb-2 leading-tight tracking-tight font-sans">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base font-normal text-black/90 font-sans leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="bg-[#1A1A1A] border-2 border-[#2A2A2A] rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="text-center lg:text-left">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-tight tracking-tight font-sans">
              And together we&apos;ve created{" "}
              <span className="text-[#FA7047]">edverise</span>, from a dream to
              reality. Join us in our journey.
            </p>
          </div>
          <button className="flex-shrink-0 bg-[#FA7047] hover:bg-orange-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl transition-all duration-300 text-base sm:text-lg font-medium font-sans cursor-pointer whitespace-nowrap">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
