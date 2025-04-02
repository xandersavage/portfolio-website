// components/sections/hero.tsx
"use client";

import { Meteors } from "@/components/magicui/meteors";
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950 pb-24">
      {/* Dark meteors with varied sizes */}
      <Meteors
        number={95}
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

      {/* Main heading with your name using gradients and staggered animation */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <div className="mb-4 flex items-center space-x-2">
          <TextAnimate
            animation="slideLeft"
            as="h1"
            duration={1.5}
            by="character"
            className="whitespace-pre-wrap bg-clip-text text-4xl md:text-5xl font-bold leading-tight text-amber-50"
            delay={0} // Start immediately
            once
          >
            Alexander
          </TextAnimate>
          <TextAnimate
            animation="slideRight"
            as="h1"
            duration={1.5}
            by="character"
            className="whitespace-pre-wrap bg-clip-text text-4xl md:text-5xl font-bold leading-tight text-amber-50"
            delay={1.5} // Start slightly after "Alexander"
            once
          >
            Olomukoro
          </TextAnimate>
        </div>

        {/* Animated role description with a further delay */}
        <div className="h-12 mb-8">
          <TextAnimate
            animation="blurInUp"
            as="h2"
            duration={1.5}
            by="line"
            className="text-4xl text-amber-50 md:text-5xl font-bold tracking-tight"
            delay={3.5} // Start after both parts of the name
            once
          >
            Full-Stack Developer
          </TextAnimate>
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl">
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
              className="px-3 py-1 text-sm bg-slate-800/70 text-gray-300 rounded-full border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Brief introduction */}
        <p className="text-gray-400 mb-8 max-w-2xl">
          I build performant, accessible web applications with modern
          technologies. Specializing in creating seamless user experiences
          backed by robust server-side solutions.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="group px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-md transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-0 right-0 flex justify-center animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
