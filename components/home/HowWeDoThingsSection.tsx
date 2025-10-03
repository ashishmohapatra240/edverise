"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Study your brand in depth.",
    description:
      "When we say 'premium,' we mean an agency that works with brands that 'think, talk, and feel premium'.",
    cards: [
      {
        color: "#1D1C29",
        borderColor: "#978EEB",
        textColor: "#E8E8F5",
        descColor: "#B8B8D0",
        icon: "1.png",
      },
      {
        color: "#8B7FD8",
        borderColor: "#978EEB",
        textColor: "#1A1A1A",
        descColor: "#2A2A2A",
        icon: "1.png",
      },
    ],
  },
  {
    number: "02",
    title: "Analyse the scope & areas of improvements.",
    description:
      "When we say 'premium,' we mean an agency that works with brands that 'think, talk, and feel premium'.",
    cards: [
      {
        color: "#F3A73C",
        borderColor: "#F3AD88",
        textColor: "#1A1A1A",
        descColor: "#2A2A2A",
        icon: "2.png",
      },
      {
        color: "#F3A73C",
        borderColor: "#F3AD88",
        textColor: "#1A1A1A",
        descColor: "#2A2A2A",
        icon: "2.png",
      },
    ],
  },
  {
    number: "03",
    title: "Conduct research & design audit.",
    description:
      "When we say 'premium,' we mean an agency that works with brands that 'think, talk, and feel premium'.",
    cards: [
      {
        color: "#5EB5E6",
        borderColor: "#5EB5E6",
        textColor: "#1A1A1A",
        descColor: "#2A2A2A",
        icon: "2.png",
      },
      {
        color: "#7FC7ED",
        borderColor: "#7FC7ED",
        textColor: "#1A1A1A",
        descColor: "#2A2A2A",
        icon: "2.png",
      },
    ],
  },
  {
    number: "04",
    title: "Finally, we design you the experience you deserve.",
    description:
      "When we say 'premium,' we mean an agency that works with brands that 'think, talk, and feel premium'.",
    cards: [
      {
        color: "#28C662",
        borderColor: "#28C662",
        textColor: "#1A1A1A",
        descColor: "#2A2A2A",
        icon: "2.png",
      },
      {
        color: "#28C662",
        borderColor: "#28C662",
        textColor: "#1A1A1A",
        descColor: "#2A2A2A",
        icon: "2.png",
      },
    ],
  },
];

export default function HowWeDoThingsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  const setStepRef = (el: HTMLDivElement | null, idx: number) => {
    if (el) {
      stepsRef.current[idx] = el;
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(min-width:1024px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          snap: 1 / (stepsRef.current.length - 1),
        });

        stepsRef.current.forEach((stepEl, i) => {
          ScrollTrigger.create({
            trigger: stepEl,
            start: "top top+=80",
            pin: true,
            end: "+=100%",
            pinSpacing: true,
            anticipatePin: 1,
          });

          const cards = stepEl.querySelectorAll(".card");
          if (cards.length) {
            gsap.set(cards, { y: 30, opacity: 0, willChange: "transform" });
            gsap.to(cards, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
              stagger: 0.1,
              scrollTrigger: {
                trigger: stepEl,
                start: "top top+=10%",
                toggleActions: "play none none reverse",
              },
            });
          }
          const left = stepEl.querySelector(".step-left");
          if (left) {
            gsap.fromTo(
              left,
              { y: 16, opacity: 0.85 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: stepEl,
                  start: "top center+=15%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        });

        return () => {
          ctx.revert();
          mm.revert();
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      });
    });
  }, []);
  return (
    <section ref={sectionRef} className="relative bg-black py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight font-sans">
            How we do things.
          </h2>
          <p className="text-white text-base sm:text-lg lg:text-xl max-w-2xl font-normal font-sans leading-relaxed">
            When we say &apos;premium,&apos; we mean an agency that works with
            brands that{" "}
            <span className="text-[#FA7047]">
              &apos;think, talk, and feel premium&apos;
            </span>
            .
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => setStepRef(el, index)}
              className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12"
            >
              <div className="relative flex gap-4 lg:gap-6">
                {index < steps.length - 1 && (
                  <div className="absolute left-[18px] top-12 bottom-[-3rem] lg:bottom-[-4rem] w-[2px] bg-[#2A2A2A]" />
                )}

                <div className="flex-shrink-0">
                  <div
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white text-sm lg:text-base font-semibold font-sans"
                    style={{ backgroundColor: step.cards[0].color }}
                  >
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 pt-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-3 leading-tight tracking-tight font-sans">
                    {step.title}
                  </h3>
                  <p className="text-[#9C9C9C] text-sm sm:text-base font-normal font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 xl:gap-6">
                {step.cards.map((card, cardIndex) => (
                  <div
                    key={`card-${index}-${cardIndex}`}
                    className="rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 flex flex-col justify-between h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] transition-transform duration-300 z-10"
                    style={{
                      backgroundColor: card.color,
                      borderColor: card.borderColor,
                      borderWidth: "2px",
                    }}
                  >
                    <div className="mb-6 lg:mb-8">
                      <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                        <Image
                          src={`/images/how-we-do-things/${card.icon}`}
                          alt={`${step.title} icon`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div>
                      <h4
                        className="text-xl sm:text-2xl lg:text-3xl font-medium mb-3 lg:mb-4 leading-tight tracking-tight font-sans"
                        style={{ color: card.textColor }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-sm sm:text-base font-normal font-sans leading-relaxed"
                        style={{ color: card.descColor }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
