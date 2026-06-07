import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './Buttons';

export function HeroSection() {
  return (
    <section className="flex h-screen flex-col overflow-x-clip relative w-full">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] w-full z-30 relative">
        {["About", "Prices", "Gallery", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="transition-opacity duration-200 hover:opacity-70">
            {item}
          </a>
        ))}
      </FadeIn>

      {/* Heading */}
      <div className="overflow-hidden w-full flex-shrink-0 mt-6 sm:mt-4 md:-mt-5 z-0 relative">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10vw] sm:text-[12vw] md:text-[14vw] lg:text-[16vw]">
            Manhattan
          </h1>
        </FadeIn>
      </div>

      {/* Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img 
              src="/hero-portrait.png" 
              alt="Manhattan Hero Portrait" 
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain max-h-[70vh] sm:max-h-none block"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex-1 w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 pointer-events-none absolute bottom-0 left-0">
        <FadeIn delay={0.35} y={20} className="pointer-events-auto max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)]">
            A luxury beauty salon in Casablanca creating elegant hair, beauty, makeup, nails, and skincare experiences since 1986.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
