import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const RainbowButton = React.forwardRef<
  HTMLButtonElement,
  RainbowButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
        // Animation styles
        "[animation:rainbow_2s_infinite_linear]",
        // before styles
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:[animation:rainbow_2s_infinite_linear] before:bg-[linear-gradient(90deg,hsl(0_100%_63%),hsl(90_100%_63%),hsl(210_100%_63%),hsl(195_100%_63%),hsl(270_100%_63%))] before:[filter:blur(calc(0.8*1rem))]",
        // light mode colors - black background
        "bg-[linear-gradient(#000,#000),linear-gradient(#000_50%,rgba(0,0,0,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0_100%_63%),hsl(90_100%_63%),hsl(210_100%_63%),hsl(195_100%_63%),hsl(270_100%_63%))]",
        // dark mode colors - black background
        "dark:bg-[linear-gradient(#000,#000),linear-gradient(#000_50%,rgba(0,0,0,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0_100%_63%),hsl(90_100%_63%),hsl(210_100%_63%),hsl(195_100%_63%),hsl(270_100%_63%))]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

RainbowButton.displayName = "RainbowButton";
