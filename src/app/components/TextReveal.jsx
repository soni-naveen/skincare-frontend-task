"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const RevealWord = ({ word, index, total, scrollYProgress }) => {
  // Add overlap by expanding the scroll interval for each word
  const start = (index - 1) / total;
  const end = (index + 2) / total;

  // Add smooth interpolation using useSpring
  const rawOpacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  const opacity = useSpring(rawOpacity, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
      {index < total - 1 && <span>&nbsp;</span>}
    </motion.span>
  );
};

const TextScrollReveal = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 40%"], // starts a bit later for smoother entry
  });

  const words = text.trim().split(/\s+/);

  return (
    <div
      ref={ref}
      className="text-secondary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug pb-16 xs:py-16 md:py-20 px-[5%]"
    >
      {words.map((word, i) => (
        <RevealWord
          key={i}
          word={word}
          index={i}
          total={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
};

export default TextScrollReveal;
