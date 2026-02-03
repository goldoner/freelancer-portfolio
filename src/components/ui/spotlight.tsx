"use client";
import React, { useId, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

const driftPresets: Record<string, { x: number[]; y: number[]; duration: number }> = {
  purple: {
    x: [0, 60, -40, 80, -20, 0],
    y: [0, -50, 30, -70, 20, 0],
    duration: 18,
  },
  blue: {
    x: [0, -50, 70, -30, 40, 0],
    y: [0, 40, -60, 50, -30, 0],
    duration: 22,
  },
  white: {
    x: [0, 40, -60, 20, -40, 0],
    y: [0, -30, 50, -40, 10, 0],
    duration: 20,
  },
};

export const Spotlight = ({ className, fill = "white" }: SpotlightProps) => {
  const id = useId();
  const filterId = `spotlight-filter-${id}`;
  const preset = driftPresets[fill] ?? driftPresets.white;

  return (
    <motion.div
      className={cn("pointer-events-none absolute z-[1]", className)}
      animate={{ x: preset.x, y: preset.y }}
      transition={{ duration: preset.duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        className="animate-spotlight h-[169%] w-[138%] lg:w-[84%] opacity-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter={`url(#${filterId})`}>
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill}
            fillOpacity="0.21"
          />
        </g>
        <defs>
          <filter
            id={filterId}
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_1065_8"
            />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
};

export function MouseSpotlight({ children, className }: { children?: React.ReactNode; className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, [isFocused]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setOpacity(0.6);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setOpacity(0);
  }, []);

  const handleMouseEnter = useCallback(() => setOpacity(0.6), []);
  const handleMouseLeave = useCallback(() => setOpacity(0), []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120,80,255,.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
