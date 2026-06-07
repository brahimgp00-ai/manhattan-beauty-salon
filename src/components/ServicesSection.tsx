import React from 'react';
import { FadeIn } from './FadeIn';

const services = [
  {
    num: "01",
    name: "Hair Styling",
    desc: "Elegant brushing, cuts, Babyliss waves, and modern hairstyles designed to enhance your natural beauty with a polished salon finish.",
    prices: ["Babyliss & Wavy: 100 DH", "Brushing: 70 DH", "Coupe: 250 DH", "Les pointes: 100 DH", "Coiffure soirée: from 300 DH"]
  },
  {
    num: "02",
    name: "Hair Color",
    desc: "Professional root color, full hair coloring, ombré, balayage, rinsing, and premium color transformations adapted to your hair length and style.",
    prices: ["Coloration racine standard: from 300 DH", "Coloration racine sans ammoniaque: from 400 DH", "Coloration cheveux: from 500 DH", "Ombré & Balayage: from 1000 DH"]
  },
  {
    num: "03",
    name: "Hair Care",
    desc: "Hydrating treatments, bio protein, standard protein, and deep care rituals that restore shine, softness, and healthy-looking hair.",
    prices: ["Protéine standard: from 800 DH", "Protéine Bio: from 1000 DH", "Soins hydratant: from 250 DH"]
  },
  {
    num: "04",
    name: "Makeup & Ceremonies",
    desc: "Makeup and evening hairstyles for special occasions, celebrations, events, and elegant moments that deserve a refined beauty look.",
    prices: ["Makeup Soirée: from 300 DH"]
  },
  {
    num: "05",
    name: "Nails & Aesthetics",
    desc: "Manicure, pedicure, gel, permanent polish, waxing, facial care, hydrafacial, and complete beauty services for a clean and confident appearance.",
    prices: ["Pédicure Spa: 180 DH", "Manucure Spa: 120 DH", "Soin hydrafacial: 400 DH"]
  }
];

export function ServicesSection() {
  return (
    <section id="price" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <FadeIn y={30}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={20} className="flex flex-col md:flex-row md:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0 gap-2 sm:gap-6 md:gap-14">
            <div className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none shrink-0 md:min-w-[200px]">
              {svc.num}
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2 md:mb-4">
                {svc.name}
              </h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {svc.desc}
              </p>
              {svc.prices && (
                <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                  {svc.prices.map(p => (
                    <span key={p} className="text-[10px] sm:text-xs bg-[#0C0C0C]/5 rounded-full px-3 py-1 font-medium tracking-wide uppercase text-[#0C0C0C]/80">
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
