import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import React, { useRef } from 'react';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './Buttons';

const projects = [
  {
    num: "01",
    label: "Hair",
    name: "Signature Hair Styling",
    images: {
      l1: "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_1531-1-scaled.jpg",
      l2: "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_0936-1-scaled.jpg",
      r1: "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_1455-1.jpg"
    }
  },
  {
    num: "02",
    label: "Beauty",
    name: "Color & Beauty Care",
    images: {
      l1: "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_0824-1.jpg",
      l2: "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_1320-1-scaled.jpg",
      r1: "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/DBDB6AEE-7DA5-4E5C-84DF-383D91662B7E-1.jpg"
    }
  },
  {
    num: "03",
    label: "Salon",
    name: "Manhattan Experience",
    images: {
      l1: "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_0902-1.jpg",
      l2: "https://manhattan-beauty-salon.com/wp-content/uploads/2020/11/IMG_1154-1-scaled.jpg",
      r1: "https://manhattan-beauty-salon.com/wp-content/uploads/2021/04/Manhattan-Beauty-Salon.png"
    }
  }
];

const ProjectCard = ({ project, i, progress }: { project: any, i: number, progress: MotionValue<number>, key?: React.Key }) => {
  const totalCards = 3;
  const targetScale = 1 - (totalCards - 1 - i) * 0.03;

  // The range where this specific card scales down is when the NEXT cards are scrolling over it.
  // Using global progress, card 0 scales when progress is between 0 and ~0.33. Let's map it smoothly.
  const start = i / totalCards;
  const end = start + (1 / totalCards);
  
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div className="h-[100vh] flex justify-center sticky top-24 md:top-32">
      <motion.div 
        style={{ scale, top: `${i * 28}px` }} 
        className="relative bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 w-full h-[80vh] flex flex-col mx-auto shrink-0 max-w-7xl origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8 gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[#D7E2EA] font-black text-[clamp(2.5rem,6vw,80px)] leading-none line-clamp-1">
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="uppercase text-[#D7E2EA]/60 text-xs sm:text-sm tracking-widest font-medium">
                {project.label}
              </span>
              <span className="uppercase text-[#D7E2EA] font-medium text-lg sm:text-2xl md:text-3xl leading-tight">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton className="shrink-0" />
        </div>

        {/* Bottom Row Images */}
        <div className="flex gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-5 min-h-0 shrink-0">
            <div 
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-white/10 shrink-0" 
              style={{ minHeight: 'clamp(130px, 16vw, 230px)', flexBasis: 'clamp(130px, 16vw, 230px)' }}
            >
              <img src={project.images.l1} alt={`Manhattan Beauty Salon Gallery Image - ${project.name} (Top Left)`} className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" loading="lazy" />
            </div>
            <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-white/10 flex-1 min-h-[clamp(160px, 22vw, 340px)]">
               <img src={project.images.l2} alt={`Manhattan Beauty Salon Gallery Image - ${project.name} (Bottom Left)`} className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" loading="lazy" />
            </div>
          </div>
          
          <div className="w-[60%] flex flex-col min-h-0 shrink-0">
            <div className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-white/10 overflow-hidden">
             <img src={project.images.r1} alt={`Manhattan Beauty Salon Gallery Image - ${project.name} (Right Column)`} className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" loading="lazy" />
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="gallery" ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 relative px-2 sm:px-6 md:px-10 py-20 pb-0">
      <FadeIn y={30} className="mb-8">
         <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
           Gallery
         </h2>
      </FadeIn>
      
      <div className="w-full max-w-[1400px] mx-auto min-h-screen">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} i={i} progress={scrollYProgress} />
        ))}
      </div>
      <div className="h-[10vh]" /> {/* Bottom padded scroll */}
    </section>
  )
}
