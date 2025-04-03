import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Animation speed modifier
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, speed = 2, ...props }, ref) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const animRef = useRef<number | null>(null);

  // Custom animation without relying on framer-motion
  useEffect(() => {
    const button = ref
      ? (ref as React.RefObject<HTMLButtonElement>).current
      : buttonRef.current;
    if (!button) return;

    let progress = 0;

    const animate = () => {
      // Speed is multiplied to make animation faster
      progress += 1.5 * speed;
      if (progress > 200) progress = -100;

      // Update CSS variables for the animation
      button.style.setProperty("--x", `${progress}%`);

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [ref, speed]);

  return (
    <button
      ref={ref || buttonRef}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium text-white bg-black backdrop-blur-xl transition-all duration-300 overflow-hidden",
        "hover:shadow-lg hover:shadow-[hsl(210_100%_63%)/20%]",
        "after:absolute after:inset-0 after:z-10 after:block after:rounded-lg after:bg-[linear-gradient(-75deg,rgba(0,150,255,0.1)_calc(var(--x,0%)+20%),rgba(0,150,255,0.5)_calc(var(--x,0%)+25%),rgba(0,150,255,0.1)_calc(var(--x,0%)+100%))] after:p-px",
        className
      )}
      {...props}
    >
      <span className="relative z-20 block">{children}</span>
    </button>
  );
});

ShinyButton.displayName = "ShinyButton";
