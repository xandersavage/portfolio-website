"use client";

import { Container } from "@/components/layout/Container";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Code, Database, Globe, Server } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-slate-100 dark:bg-slate-900"
    >
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
          <div className="md:col-span-5 space-y-8">
            {/* Profile Image with Card Effect */}
            <div className="relative mx-auto md:mx-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <Image
                src="/profile.jpg" // Replace with your actual image path
                alt="Alexander Olomukoro"
                fill
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>

            {/* Quick Stats Card with BorderBeam */}
            <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
              {/* BorderBeam - applied to the card container */}
              <BorderBeam
                duration={8}
                size={250}
                className="absolute inset-0 rounded-xl z-0"
              />

              {/* Card content - positioned above the beam */}
              <div className="relative z-10 p-6 lg:p-8 space-y-6 lg:space-y-8">
                {/* Experience Stat */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm md:text-base lg:text-lg uppercase tracking-wider text-slate-500 dark:text-slate-400 font-heading">
                    Experience
                  </h3>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-body">
                    5+ Years
                  </p>
                </div>

                {/* Tech Stack Stats */}
                <div className="space-y-4 lg:space-y-6">
                  <h3 className="text-sm md:text-base lg:text-lg uppercase tracking-wider text-slate-500 dark:text-slate-400 font-heading">
                    Tech Expertise
                  </h3>

                  <div className="grid grid-cols-2 gap-4 lg:gap-6 font-body">
                    {/* Frontend */}
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Code size={20} className="lg:size-6" />
                      </div>
                      <div>
                        <p className="text-sm md:text-base lg:text-lg font-medium text-slate-900 dark:text-white">
                          Frontend
                        </p>
                        <p className="text-xs md:text-sm lg:text-base text-slate-500 dark:text-slate-400">
                          React, Next.js
                        </p>
                      </div>
                    </div>

                    {/* Backend */}
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                        <Server size={20} className="lg:size-6" />
                      </div>
                      <div>
                        <p className="text-sm md:text-base lg:text-lg font-medium text-slate-900 dark:text-white">
                          Backend
                        </p>
                        <p className="text-xs md:text-sm lg:text-base text-slate-500 dark:text-slate-400">
                          Node.js, Express
                        </p>
                      </div>
                    </div>

                    {/* Database */}
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                        <Database size={20} className="lg:size-6" />
                      </div>
                      <div>
                        <p className="text-sm md:text-base lg:text-lg font-medium text-slate-900 dark:text-white">
                          Database
                        </p>
                        <p className="text-xs md:text-sm lg:text-base text-slate-500 dark:text-slate-400">
                          MongoDB, PostgreSQL
                        </p>
                      </div>
                    </div>

                    {/* DevOps */}
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                        <Globe size={20} className="lg:size-6" />
                      </div>
                      <div>
                        <p className="text-sm md:text-base lg:text-lg font-medium text-slate-900 dark:text-white">
                          DevOps
                        </p>
                        <p className="text-xs md:text-sm lg:text-base text-slate-500 dark:text-slate-400">
                          Docker, AWS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects Completed */}
                <div className="pt-2 lg:pt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm md:text-base lg:text-lg uppercase tracking-wider text-slate-500 dark:text-slate-400 font-heading">
                      Projects Completed
                    </h3>
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white font-body">
                      25+
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2 md:h-3 bg-slate-200 dark:bg-slate-700 rounded-full mt-2 lg:mt-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 7/12 on desktop */}
          <div className="md:col-span-7 space-y-8 lg:space-y-10">
            {/* Section Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Introduction */}
            <div className="text-slate-700 dark:text-slate-300 space-y-4 font-body">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                I&apos;m a{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Full Stack Developer
                </span>{" "}
                with over 5 years of experience building robust, scalable web
                applications. My passion lies in creating efficient solutions
                that deliver exceptional user experiences.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Specializing in modern JavaScript frameworks and serverless
                architectures, I enjoy tackling complex problems and
                transforming ideas into fully-functional applications that meet
                business objectives.
              </p>
            </div>

            {/* Approach & Philosophy */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                My Approach
              </h3>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 font-body">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mt-1">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      User-Centered Design
                    </h4>
                    <p className="text-base md:text-lg">
                      I believe in putting users first, creating intuitive
                      interfaces and experiences that solve real problems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mt-1">
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Performance Optimization
                    </h4>
                    <p className="text-base md:text-lg">
                      I&apos;m committed to building applications that are not
                      just functional, but blazing fast and responsive.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mt-1">
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Clean, Maintainable Code
                    </h4>
                    <p className="text-base md:text-lg">
                      I write code with the future in mind, ensuring it&apos;s
                      well-documented, tested, and easy to maintain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Skills */}
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3 font-body">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "REST API",
                  "GraphQL",
                  "Redux",
                  "TailwindCSS",
                  "Framer Motion",
                  "Git",
                  "Docker",
                  "AWS",
                  "CI/CD",
                  "Jest",
                  "React Testing Library",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 
                   rounded-full border border-slate-200 dark:border-slate-700 text-sm md:text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-body">
                Interested in working together? Check out my projects or get in
                touch to discuss how I can help bring your ideas to life.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg 
                 shadow-md hover:shadow-lg transition-shadow duration-300 text-sm md:text-base font-body"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 
                 font-medium rounded-lg shadow-md border border-slate-200 dark:border-slate-700 
                 hover:shadow-lg transition-shadow duration-300 text-sm md:text-base font-body"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
