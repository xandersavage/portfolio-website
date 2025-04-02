// components/magicui/meteors.tsx
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  minSize?: number;
  maxSize?: number;
  color?: string;
  colors?: string[];
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  minSize = 0.5,
  maxSize = 3,
  color = "#71717a",
  colors,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<
    Array<{
      id: number;
      top: string;
      left: string;
      delay: string;
      duration: string;
      size: number;
      tailLength: number;
      opacity: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const newMeteors = [...Array(number)].map((_, idx) => {
      // Generate random duration
      const durationValue = Math.floor(
        Math.random() * (maxDuration - minDuration) + minDuration
      );

      // Generate random size - weighted to create more small meteors than large ones
      const randomFactor = Math.random() * Math.random(); // Weighted distribution
      const size = minSize + randomFactor * (maxSize - minSize);

      // Calculate tail length based on size and speed
      // Larger meteors and faster meteors get longer tails
      const speedFactor =
        1 - (durationValue - minDuration) / (maxDuration - minDuration);
      const tailLength = Math.round(30 + size * 15 + speedFactor * 30);

      // Larger meteors are brighter
      const opacity = 0.7 + (size / maxSize) * 0.3;

      // Select random color if colors array is provided
      const meteorColor = colors
        ? colors[Math.floor(Math.random() * colors.length)]
        : color;

      return {
        id: idx,
        top: Math.floor(Math.random() * 50) + "%", // Position in the top half
        left: Math.floor(Math.random() * 100) + "%", // Random horizontal position
        delay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
        duration: durationValue + "s",
        size,
        tailLength,
        opacity,
        color: meteorColor,
      };
    });

    setMeteorStyles(newMeteors);
  }, [
    number,
    minDelay,
    maxDelay,
    minDuration,
    maxDuration,
    minSize,
    maxSize,
    color,
    colors,
  ]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {meteorStyles.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute rounded-full animate-meteor"
          style={
            {
              top: meteor.top,
              left: meteor.left,
              "--delay": meteor.delay,
              "--duration": meteor.duration,
              height: `${meteor.size}px`,
              width: `${meteor.size}px`,
              backgroundColor: meteor.color,
              boxShadow: `0 0 ${meteor.size * 2}px ${meteor.color}`,
              opacity: meteor.opacity,
              transform: `rotate(${angle}deg)`,
            } as React.CSSProperties
          }
        >
          {/* Meteor Tail */}
          <div
            className="pointer-events-none absolute top-1/2 -z-10 -translate-y-1/2"
            style={{
              height: `${meteor.size * 0.6}px`,
              width: `${meteor.tailLength}px`,
              background: `linear-gradient(90deg, ${meteor.color}, transparent)`,
              opacity: meteor.opacity * 0.8, // Tail slightly more transparent than head
            }}
          />
        </div>
      ))}
    </div>
  );
};
