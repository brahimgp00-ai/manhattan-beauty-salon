import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import React, { useRef } from 'react';

const CharSpan = ({
  char,
  progress,
  start,
  end
}: {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  key?: React.Key;
}) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span className="relative inline-block whitespace-pre">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

export function AnimatedText({ text, className = "", id }: { text: string; className?: string; id?: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  // Splitting down to words then chars to preserve word wrapping natively.
  const words = text.split(' ');
  const totalChars = text.length;
  let charCount = 0;

  return (
    <p ref={containerRef} className={className} id={id}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const renderWord = (
          <span key={wordIdx} className="inline-block">
            {wordChars.map((char, charIdx) => {
              const start = charCount / totalChars;
              charCount++;
              const end = start + (1 / totalChars);
              return (
                <CharSpan 
                  key={charIdx} 
                  char={char} 
                  progress={scrollYProgress} 
                  start={start} 
                  end={end} 
                />
              );
            })}
            {wordIdx !== words.length - 1 && (
              <CharSpan 
                char=" " 
                progress={scrollYProgress} 
                start={charCount / totalChars} 
                end={(charCount + 1) / totalChars} 
              />
            )}
          </span>
        );
        if (wordIdx !== words.length - 1) {
          charCount++; // for the space
        }
        return renderWord;
      })}
    </p>
  );
}
