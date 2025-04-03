"use client";

import { Container } from "@/components/layout/Container";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-slate-900">
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-0 h-full w-full"
        )}
      />

      {/* Content Container */}
      <Container>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - 5/12 on desktop */}
          <div className="md:col-span-5 space-y-6">
            {/* Your profile image and quick stats will go here */}
          </div>

          {/* Right Column - 7/12 on desktop */}
          <div className="md:col-span-7 space-y-6">
            {/* Your about text content will go here */}
          </div>
        </div>
      </Container>
    </section>
  );
}
