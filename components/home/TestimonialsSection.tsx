"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO @ LuxeFashion",
      avatar: "/images/testimonials/avatar1.png",
      text: "Edverise transformed our entire digital presence. Their attention to detail and understanding of luxury branding is unmatched. Our conversion rates increased by 340% after the redesign. They truly understand what it means to 'think, talk, and feel premium'.",
    },
    {
      name: "Marcus Rodriguez",
      position: "Founder @ TechFlow",
      avatar: "/images/testimonials/avatar1.png",
      text: "Working with Edverise was a game-changer for our startup. They didn't just design our app - they crafted an experience that resonates with our users. The UI/UX work they delivered exceeded all expectations and helped us secure Series A funding.",
    },
    {
      name: "Emily Watson",
      position: "CMO @ HealthTech Pro",
      avatar: "/images/testimonials/avatar1.png",
      text: "The brand refresh Edverise created for us was phenomenal. They understood our vision from day one and brought it to life beautifully. Our brand recognition has tripled since the launch. They're not just designers - they're brand strategists.",
    },
    {
      name: "David Kim",
      position: "VP Design @ FinTech Solutions",
      avatar: "/images/testimonials/avatar1.png",
      text: "Edverise's premium approach to design is exactly what we needed. Their work on our financial platform made complex features feel intuitive and trustworthy. The user feedback has been overwhelmingly positive. They deliver excellence every time.",
    },
    {
      name: "Lisa Thompson",
      position: "Founder @ EcoLuxury",
      avatar: "/images/testimonials/avatar1.png",
      text: "From concept to launch, Edverise guided us through every step. Their understanding of sustainable luxury branding is incredible. They helped us create a visual identity that perfectly balances environmental consciousness with premium appeal.",
    },
    {
      name: "James Wilson",
      position: "CTO @ DataViz Inc",
      avatar: "/images/testimonials/avatar1.png",
      text: "The data visualization dashboard Edverise designed for us is a masterpiece. They took complex data and made it beautiful and accessible. Our clients are amazed by the interface. Edverise truly knows how to make data 'think, talk, and feel premium'.",
    },
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 sm:mb-16 lg:mb-20">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white leading-tight tracking-tight font-sans mb-4">
            What they say about us.
          </h2>
          <p className="text-white text-base font-normal font-sans tracking-tight leading-relaxed max-w-2xl">
            When we say 'premium,' we mean an agency that works with brands that{" "}
            <span className="text-[#FA7047] font-medium">
              'think, talk, and feel premium'
            </span>
            .
          </p>
        </div>
      </div>

      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={false}
        className="overflow-hidden"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="mx-3 sm:mx-4 lg:mx-5 w-[340px] sm:w-[400px] lg:w-[450px] flex-shrink-0"
          >
            <div className="bg-[#7747CE] rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-6 sm:p-8 h-full flex flex-col space-y-4 sm:space-y-5">
              <div className="flex items-center">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0 bg-white/10 border-2 border-[#7747CE] z-10">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[#FFA500] flex items-center justify-center flex-shrink-0 right-4">
                  <Image
                    src="/images/testimonials/company-logo.svg"
                    alt="Verified"
                    width={24}
                    height={24}
                  />
                </div>

                <div className="flex-1 mx-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white font-sans tracking-tight truncate">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 font-normal font-sans truncate">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm sm:text-base text-white/90 font-normal font-sans leading-relaxed">
                  <span className="font-medium text-white">
                    'think, talk, and feel premium'
                  </span>
                  . {testimonial.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
