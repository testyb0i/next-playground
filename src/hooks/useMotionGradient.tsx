"use client";
import { useEffect } from "react";
import { useAnimation, useMotionValue } from "framer-motion";
import { time } from "console";

export default function useMotionGradient(timeout: number) {
  const animation = useAnimation();
  const gradientPos = useMotionValue(0);
  const alpha = useMotionValue(0);

  const gradientMask = async (pos: number, al: number) => {
    await animation.start({
      scale: 1,
      background: `radial-gradient(circle at 38% 45%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, ${
        al + 0.3
      }) ${pos}%, rgba(0, 0, 0, ${al}) ${pos + 10}%, rgba(0, 0, 0, 0) ${
        pos + 20
      }%)`,
      transition: { duration: 1.5 },
    });

    const newPosition = pos + 20;
    const newAlpha = al + 0.2;

    if (pos >= 100 && al >= 1) {
      gradientPos.set(newPosition);
      alpha.set(newAlpha);
      return;
    } else {
      setTimeout(() => {
        gradientMask(newPosition, newAlpha);
      }, timeout);
    }
  };

  

  return { animation, gradientPos, alpha,  gradientMask}
}
