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
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950"
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

      {/* Main content with proper spacing */}
      <div className="relative z-10 px-6 w-full max-w-5xl mx-auto py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-10">
          {/* Name with increased spacing */}
          <BlurFade delay={0.25} inView>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-amber-50 font-heading">
              Alexander Olomukoro
            </h1>
          </BlurFade>

          {/* Role with proper spacing */}
          <BlurFade delay={0.5 * 2} inView>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-amber-50 font-heading">
              <AuroraText>Full-Stack Developer</AuroraText>
            </h2>
          </BlurFade>

          {/* Tech stack pills - centered properly with spacing */}
          <div className="w-full flex justify-center pt-4">
            <BlurFade delay={0.5 * 3} inView>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
                {[
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Next.js",
                  "MongoDB",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-base md:text-lg bg-slate-800/70 text-gray-300 rounded-full border border-slate-700/50 font-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* Brief introduction - larger text with more spacing */}
          <BlurFade delay={0.5 * 4} inView>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 sm:mb-10 mb-5 max-w-3xl font-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            </p>
          </BlurFade>

          {/* Call to action buttons with increased spacing */}
          <BlurFade delay={0.5 * 5} inView>
            <div className="flex flex-col sm:flex-row gap-6 justify-center sm:pt-6 w-full font-body">
              <RainbowButton className="text-xl">View My Work</RainbowButton>
              <ShinyButton speed={1} className="text-xl cursor-pointer">
                Hire Me
              </ShinyButton>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Scroll indicator */}
    </div>
  );
}
