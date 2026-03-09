"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  flip?: boolean;
}

export default function WaveDivider({ fromColor, toColor, flip = false }: WaveDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const layer1X = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const layer2X = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const layer3X = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <div
      ref={ref}
      style={{
        background: fromColor,
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Layer 3 — deepest, most transparent */}
      <motion.svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "110%",
          height: "100px",
          position: "absolute",
          bottom: 0,
          left: "-5%",
          x: layer3X,
          opacity: 0.3,
        }}
      >
        <path
          d="M0,60 C200,20 400,90 600,50 C800,10 1000,80 1200,40 C1350,15 1420,55 1440,60 L1440,100 L0,100 Z"
          fill={toColor}
        />
      </motion.svg>

      {/* Layer 2 — middle */}
      <motion.svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "105%",
          height: "90px",
          position: "absolute",
          bottom: 0,
          left: "-2.5%",
          x: layer2X,
          opacity: 0.5,
        }}
      >
        <path
          d="M0,50 C180,85 360,15 540,50 C720,85 900,10 1080,50 C1260,85 1380,25 1440,50 L1440,100 L0,100 Z"
          fill={toColor}
        />
      </motion.svg>

      {/* Layer 1 — foreground, full opacity */}
      <motion.svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "80px",
          position: "relative",
          x: layer1X,
        }}
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={toColor}
        />
      </motion.svg>
    </div>
  );
}
