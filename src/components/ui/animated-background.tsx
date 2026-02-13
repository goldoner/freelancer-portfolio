"use client";
import { motion } from "framer-motion";

type Blob = {
  gradient: string;
  size: number;
  x: number[];
  y: number[];
  duration: number;
  startX: string;
  startY: string;
};

const VARIANTS: Blob[][] = [
  [
    { gradient: "rgba(168,85,247,0.28)", size: 650, startX: "50%", startY: "50%",
      x: [0,  560, -500,  620, -540,  400, 0],
      y: [0, -320,  400, -380,  350, -280, 0], duration: 22 },
    { gradient: "rgba(59,130,246,0.22)", size: 480, startX: "50%", startY: "50%",
      x: [0, -520,  480, -580,  440, -380, 0],
      y: [0,  380, -320,  420, -360,  300, 0], duration: 26 },
    { gradient: "rgba(139,92,246,0.18)", size: 360, startX: "50%", startY: "50%",
      x: [0,  320, -480,  400, -350,  500, 0],
      y: [0, -400,  280, -450,  320, -380, 0], duration: 20 },
  ],
  [
    { gradient: "rgba(168,85,247,0.24)", size: 580, startX: "50%", startY: "50%",
      x: [0,  540, -460,  580, -500,  420, 0],
      y: [0,  300, -380,  260, -340,  380, 0], duration: 24 },
    { gradient: "rgba(99,102,241,0.18)", size: 420, startX: "50%", startY: "50%",
      x: [0, -480,  520, -440,  500, -360, 0],
      y: [0, -340,  300, -400,  280, -320, 0], duration: 26 },
  ],
  [
    { gradient: "rgba(139,92,246,0.24)", size: 600, startX: "50%", startY: "50%",
      x: [0, -560,  480, -520,  600, -440, 0],
      y: [0,  360, -300,  400, -260,  340, 0], duration: 22 },
    { gradient: "rgba(192,132,252,0.18)", size: 400, startX: "50%", startY: "50%",
      x: [0,  480, -540,  420, -500,  360, 0],
      y: [0, -300,  380, -340,  300, -380, 0], duration: 25 },
  ],
  [
    { gradient: "rgba(59,130,246,0.24)", size: 560, startX: "50%", startY: "50%",
      x: [0,  500, -560,  440, -520,  480, 0],
      y: [0, -360,  300, -420,  340, -300, 0], duration: 25 },
    { gradient: "rgba(168,85,247,0.18)", size: 440, startX: "50%", startY: "50%",
      x: [0, -440,  520, -480,  400, -560, 0],
      y: [0,  320, -380,  280, -360,  320, 0], duration: 20 },
  ],
  [
    { gradient: "rgba(168,85,247,0.24)", size: 620, startX: "50%", startY: "50%",
      x: [0,  580, -520,  460, -580,  500, 0],
      y: [0,  280, -360,  320, -280,  360, 0], duration: 24 },
    { gradient: "rgba(96,165,250,0.18)", size: 380, startX: "50%", startY: "50%",
      x: [0, -500,  440, -560,  420, -480, 0],
      y: [0, -320,  380, -260,  340, -400, 0], duration: 26 },
  ],
  [
    { gradient: "rgba(139,92,246,0.24)", size: 540, startX: "50%", startY: "50%",
      x: [0,  460, -540,  500, -420,  560, 0],
      y: [0, -340,  280, -380,  320, -260, 0], duration: 22 },
    { gradient: "rgba(168,85,247,0.18)", size: 460, startX: "50%", startY: "50%",
      x: [0, -520,  460, -480,  540, -400, 0],
      y: [0,  300, -360,  280, -320,  380, 0], duration: 25 },
  ],
  [
    { gradient: "rgba(168,85,247,0.26)", size: 600, startX: "50%", startY: "50%",
      x: [0,  540, -480,  580, -500,  420, 0],
      y: [0, -300,  380, -340,  300, -380, 0], duration: 24 },
    { gradient: "rgba(59,130,246,0.20)", size: 420, startX: "50%", startY: "50%",
      x: [0, -460,  520, -420,  480, -360, 0],
      y: [0,  360, -280,  400, -320,  280, 0], duration: 26 },
  ],
];

export function AnimatedBackground({ variant = 0 }: { variant?: number }) {
  const blobs = VARIANTS[variant % VARIANTS.length];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={i > 0 ? "absolute hidden sm:block" : "absolute"}
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.startX,
            top: blob.startY,
            translateX: "-50%",
            translateY: "-50%",
            background: `radial-gradient(circle, ${blob.gradient} 0%, transparent 70%)`,
          }}
          animate={{ x: blob.x, y: blob.y }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
