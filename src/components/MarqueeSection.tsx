import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef, useEffect, useState } from 'react';

const gifs = [
  "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_1531-1-scaled-500x600.jpg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_0936-1-scaled-500x600.jpg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_1455-1-500x600.jpg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_0824-1-500x600.jpg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_1320-1-scaled-500x600.jpg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/DBDB6AEE-7DA5-4E5C-84DF-383D91662B7E-1-500x600.jpg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_0902-1-500x600.jpg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_1154-1-scaled-500x600.jpg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-06-at-3.58.56-PM-1-500x600.jpeg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-06-at-3.58.56-PM-500x600.jpeg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-06-at-3.58.57-PM-1-500x600.jpeg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-06-at-3.58.57-PM-500x600.jpeg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-06-at-3.58.58-PM-500x600.jpeg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-06-at-4.02.26-PM-500x600.jpeg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-06-at-4.02.27-PM-1-500x600.jpeg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-06-at-4.02.27-PM-500x600.jpeg",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/04/Manhattan-Beauty-Salon.png",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/04/Manhattan-Beauty-Studio.png",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/12/Manhattan-Beauty-1-500x500.png",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/12/Manhattan-Beauty-2-500x500.png",
  "https://manhattan-beauty-salon.com/wp-content/uploads/2021/12/Manhattan-Beauty-3-500x500.png"
];

const row1Original = gifs.slice(0, 11);
const row2Original = gifs.slice(11);

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
