import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef, useEffect, useState } from 'react';

const gifs = [
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853251/176156945_783006059006372_1596543678906006643_n_uo0nx7.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853251/133090051_720990515207927_2382211696552807983_n_awqcoi.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853252/WhatsApp-Image-2021-03-06-at-3.58.58-PM-500x600_af306n.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853252/176103536_783006149006363_1071830874126976552_n_forytj.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853253/WhatsApp-Image-2021-03-06-at-4.02.27-PM-1-500x600_1_r3uynd.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853252/WhatsApp-Image-2021-03-06-at-4.02.26-PM-500x600_childz.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853254/IMG_0902-1-500x600_jov0g1.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853255/IMG_1320-1-scaled-500x600_spfotb.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853255/DBDB6AEE-7DA5-4E5C-84DF-383D91662B7E-1-500x600_brfpb8.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853255/WhatsApp-Image-2021-03-06-at-4.02.27-PM-1-500x600_knln1c.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853255/IMG_0824-1-500x600_aqadhu.webp",
  "https://res.cloudinary.com/dlohdj45w/image/upload/q_auto/f_auto/v1780853291/60818456_359623884677927_2358798585878806528_n_aa90dq.webp"
];

const row1Original = gifs.slice(0, 6);
const row2Original = gifs.slice(6);

// Triple them for seamless scrolling
const row1 = [...row1Original, ...row1Original, ...row1Original];
const row2 = [...row2Original, ...row2Original, ...row2Original];

export function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [top, setTop] = useState(0);
  const [innerHeight, setInnerHeight] = useState(1000);

  useEffect(() => {
    if (ref.current) {
      setTop(ref.current.offsetTop);
    }
    setInnerHeight(window.innerHeight);
    
    const handleResize = () => {
      if (ref.current) setTop(ref.current.offsetTop);
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const x1 = useTransform(scrollY, (y) => {
    const offset = (y - top + innerHeight) * 0.3;
    return offset - 800; // Adjusted starting position so we don't hit edge immediately
  });

  const x2 = useTransform(scrollY, (y) => {
    const offset = (y - top + innerHeight) * 0.3;
    return -(offset - 200);
  });

  return (
    <section ref={ref} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
      {/* Row 1 */}
      <motion.div 
        className="flex gap-3 w-fit" 
        style={{ x: x1, willChange: 'transform' }}
      >
        {row1.map((src, i) => (
          <div key={i} className="w-[420px] h-[270px] shrink-0">
            <img src={src} alt="Manhattan Beauty Salon Gallery Image" loading="lazy" className="w-full h-full object-cover rounded-2xl" />
          </div>
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div 
        className="flex gap-3 w-fit" 
        style={{ x: x2, willChange: 'transform', marginLeft: '-20vw' }}
      >
        {row2.map((src, i) => (
          <div key={i} className="w-[420px] h-[270px] shrink-0">
            <img src={src} alt="Manhattan Beauty Salon Gallery Image" loading="lazy" className="w-full h-full object-cover rounded-2xl" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
