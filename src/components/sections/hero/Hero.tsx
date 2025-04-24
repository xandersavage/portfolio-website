// components/sections/hero.tsx
"use client";

import { Meteors } from "@/components/magicui/meteors";
import { BlurFade } from "@/components/magicui/blur-fade";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { AuroraText } from "@/components/magicui/aurora-text";

export function Hero() {
  return (
    <div
      className={
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950 pb-16 sm:pb-0" // Added bottom padding on mobile
      }
    >
      {/* Dark meteors with varied sizes */}
      <Meteors
        number={150}
        minSize={0.6}
        maxSize={4.5}
        minDuration={5}
        maxDuration={15}
        colors={[
          "#334155", // slate-700
          "#1e293b", // slate-800
          "#475569", // slate-600
        ]}
        className="z-0 opacity-90"
      />

      {/* Main content with proper spacing - reduced vertical padding on small screens */}
      <div className="relative z-10 px-4 sm:px-6 w-full max-w-5xl mx-auto py-8 sm:py-12 md:py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-6 md:space-y-10">
          {/* Name with increased spacing - reduced text size on smallest screens */}
          <BlurFade delay={0.25} inView>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-50 font-heading">
              Alexander Olomukoro
            </h1>
          </BlurFade>

          {/* Role with proper spacing - reduced text size on smallest screens */}
          <BlurFade delay={0.5 * 2} inView>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-amber-50 font-heading">
              <AuroraText>Full-Stack Developer</AuroraText>
            </h2>
          </BlurFade>

          {/* Tech stack pills - centered properly with spacing - smaller on mobile */}
          <div className="w-full flex justify-center pt-2 sm:pt-4">
            <BlurFade delay={0.5 * 3} inView>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl">
                {[
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Next.js",
                  "MongoDB",
                  "PostgreSQL",
                  "and more...",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base md:text-lg bg-slate-800/70 text-gray-300 rounded-full border border-slate-700/50 font-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* Brief introduction - hidden on mobile, visible on md screens and up */}
          <BlurFade delay={0.5 * 4} inView>
            <p className=" text-lg md:text-xl lg:text-2xl text-gray-300 mb-5 sm:mb-10 max-w-3xl font-body">
              Crafting seamless, responsive web apps with React, Node.js, and
              Next.js, I blend creativity and code to deliver exceptional
              digital experiences.
            </p>
          </BlurFade>

          {/* Call to action buttons with increased spacing - adjusted for mobile */}
          <BlurFade delay={0.5 * 5} inView>
            <div className="flex flex-row gap-3 sm:gap-6 justify-center mt-2 sm:mt-4 md:mt-6 mb-6 sm:mb-0 w-full font-body">
              <RainbowButton className="hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                View My Work
              </RainbowButton>
              <ShinyButton
                speed={2.5}
                className="text-base sm:text-lg md:text-xl px-4 sm:px-6 py-2 sm:py-2.5 md:py-3 w-[120px] sm:w-[140px] md:w-[160px] cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Hire Me
              </ShinyButton>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Scroll indicator removed to avoid additional overlap issues */}
    </div>
  );
}
