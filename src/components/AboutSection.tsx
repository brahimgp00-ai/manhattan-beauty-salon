import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './Buttons';

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* Top Left */}
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" className="w-[120px] sm:w-[160px] md:w-[210px] object-contain" alt="" aria-hidden="true" />
      </FadeIn>
      
      {/* Bottom Left */}
      <FadeIn delay={0.25} duration={0.9} x={-80} y={0} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" className="w-[100px] sm:w-[140px] md:w-[180px] object-contain" alt="" aria-hidden="true" />
      </FadeIn>
      
      {/* Top Right */}
      <FadeIn delay={0.15} duration={0.9} x={80} y={0} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" className="w-[120px] sm:w-[160px] md:w-[210px] object-contain" alt="" aria-hidden="true" />
      </FadeIn>
      
      {/* Bottom Right */}
      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" className="w-[130px] sm:w-[170px] md:w-[220px] object-contain" alt="" aria-hidden="true" />
      </FadeIn>

      <div className="z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About us
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText 
            text="Since 1986, Manhattan Beauty Salon has built a trusted beauty heritage in Casablanca. Founded by Amdlou Med, a nationally awarded hair expert and Maghreb champion, the salon brings together professional hair styling, color, makeup, nails, skincare, and beauty treatments for clients who want to look elegant, confident, and unforgettable."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />

          <FadeIn delay={0.2} y={30}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
