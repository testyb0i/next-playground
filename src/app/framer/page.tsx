"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import {
  motion,
  useAnimate,
  useAnimation,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import useMotionGradient from "@components/hooks/useMotionGradient";

const inter = Inter({ subsets: ["latin"] });

export default function Framer() {
  const position = useMotionValue(0);
  const [scope, animate] = useAnimate();
  const animation = useMotionGradient(50);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(ref.current) {
      setTimeout(() => {
    controls.start({
      backgroundImage: [
        "radial-gradient(circle, red, yellow)",
        "radial-gradient(circle, blue, green)",
      ],
    }, { duration: 2, ease: "easeInOut" });
  }, 1000)
    }
  }, [controls]);

  const background = useTransform(
    position,
    [0, 100],
    [
      "radial-gradient(circle at 50% 50%,rgba(14, 165, 233, 100) 0%, rgba(14, 165, 233, 0) .01%, transparent 100%)",
      "radial-gradient(circle at 50% 50%,rgba(14, 165, 233, 100) 0%, rgba(14, 165, 233, 1) 99.9%, rgba(14, 165, 233, 1) 100%)",
    ]
  );

  // setTimeout(() => {
  //   animate(
  //     scope.current,
  //     {
  //       backgroundImage:
  //         "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU)",
  //     },
  //     { duration: 2, ease: "linear" }
  //   );
  // }, 1000);

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      {/* <motion.div
        className="w-full border border-slate-800 relative flex rounded-xl h-full bg-slate-400"
        initial={{ backgroundColor: "#92F371" }}
        ref={scope}
      ></motion.div> */}
      <motion.div
     
        className="gradient-background w-full border border-slate-800 relative flex rounded-xl h-full bg-slate-400"
        
        animate={animation}
       
      ></motion.div>
    </main>
  );
}
