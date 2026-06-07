import { motion } from 'motion/react';
import React, { ElementType } from 'react';

type FadeInProps = {
  as?: ElementType | string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  children: React.ReactNode;
  className?: string;
  id?: string;
  key?: React.Key;
};

export function FadeIn({
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  children,
  className,
  id
}: FadeInProps) {
  const MotionComponent = motion.create(as as any);
  
  return (
    <MotionComponent
      id={id}
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionComponent>
  );
}
