"use client";

import { Container } from "@/components/layout/Container";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Code, Database, Globe, Server } from "lucide-react";
import { aboutData } from "@/data/aboutData";
import { AboutTerminal } from "@/components/sections/about/AboutTerminal";

export function About() {
  // Base delay for first animation
  const baseDelay = 0.2;
  // Incremental delay for subsequent animations
  const delayIncrement = 0.1;

  // Map icon names to components
  const iconComponents = {
    Code,
    Server,
    Database,
    Globe,
  };

  // Helper function to get skill color based on skill type or index
  const getSkillColor = (skill: string) => {
    // Define color categories
    const colorCategories: Record<
      string,
      { bg: string; border: string; text: string }
    > = {
      frontend: {
        bg: "bg-blue-50 dark:bg-blue-900/30",
        border: "border-blue-200 dark:border-blue-800",
        text: "text-blue-700 dark:text-blue-300",
      },
      backend: {
        bg: "bg-emerald-50 dark:bg-emerald-900/30",
        border: "border-emerald-200 dark:border-emerald-800",
        text: "text-emerald-700 dark:text-emerald-300",
      },
      database: {
        bg: "bg-amber-50 dark:bg-amber-900/30",
        border: "border-amber-200 dark:border-amber-800",
        text: "text-amber-700 dark:text-amber-300",
      },
      tools: {
        bg: "bg-purple-50 dark:bg-purple-900/30",
        border: "border-purple-200 dark:border-purple-800",
        text: "text-purple-700 dark:text-purple-300",
      },
      testing: {
        bg: "bg-red-50 dark:bg-red-900/30",
        border: "border-red-200 dark:border-red-800",
        text: "text-red-700 dark:text-red-300",
      },
    };

    // Map skills to categories
    const frontendSkills = [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Redux",
      "Framer Motion",
    ];
    const backendSkills = ["Node.js", "Express", "REST API", "GraphQL"];
    const databaseSkills = ["MongoDB", "PostgreSQL", "Redis"];
    const toolsSkills = ["Git", "Docker", "AWS", "CI/CD"];
    const testingSkills = ["Jest", "React Testing Library"];

    // Determine category
    let category = "frontend"; // Default category

    if (frontendSkills.includes(skill)) category = "frontend";
    else if (backendSkills.includes(skill)) category = "backend";
    else if (databaseSkills.includes(skill)) category = "database";
    else if (toolsSkills.includes(skill)) category = "tools";
    else if (testingSkills.includes(skill)) category = "testing";

    // Return color classes for the determined category
    return colorCategories[category];
  };

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
            <BlurFade delay={baseDelay} inView>
              <div className="relative mx-auto md:mx-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Alexander Olomukoro"
                  fill
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </BlurFade>

            {/* Quick Stats Card with BorderBeam */}
            <BlurFade delay={baseDelay + delayIncrement} inView>
              <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                <BorderBeam
                  duration={8}
                  size={250}
                  className="absolute inset-0 rounded-xl z-0"
                />

                {/* Card content */}
                <div className="relative z-10 p-6 lg:p-8 space-y-6 lg:space-y-8">
                  {/* Experience Stat */}
                  <BlurFade delay={baseDelay + delayIncrement + 0.05} inView>
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-sm md:text-base lg:text-lg uppercase tracking-wider text-slate-500 dark:text-slate-400 font-heading">
                        Experience
                      </h3>
                      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-body">
                        {aboutData.experience}
                      </p>
                    </div>
                  </BlurFade>

                  {/* Tech Stack Stats */}
                  <BlurFade delay={baseDelay + delayIncrement + 0.1} inView>
                    <div className="space-y-4 lg:space-y-6">
                      <h3 className="text-sm md:text-base lg:text-lg uppercase tracking-wider text-slate-500 dark:text-slate-400 font-heading">
                        Tech Expertise
                      </h3>

                      <div className="grid grid-cols-2 gap-4 lg:gap-6 font-body">
                        {aboutData.techExpertise.map((tech) => {
                          const IconComponent =
                            iconComponents[
                              tech.icon as keyof typeof iconComponents
                            ];
                          return (
                            <div
                              key={tech.title}
                              className="flex items-center space-x-3 lg:space-x-4"
                            >
                              <div
                                className={`flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-lg ${tech.bgColor} ${tech.textColor}`}
                              >
                                <IconComponent
                                  size={20}
                                  className="lg:size-6"
                                />
                              </div>
                              <div>
                                <p className="text-sm md:text-base lg:text-lg font-medium text-slate-900 dark:text-white">
                                  {tech.title}
                                </p>
                                <p className="text-xs md:text-sm lg:text-base text-slate-500 dark:text-slate-400">
                                  {tech.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </BlurFade>

                  {/* Projects Completed */}
                  <BlurFade delay={baseDelay + delayIncrement + 0.15} inView>
                    <div className="pt-2 lg:pt-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm md:text-base lg:text-lg uppercase tracking-wider text-slate-500 dark:text-slate-400 font-heading">
                          Projects Completed
                        </h3>
                        <span className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white font-body">
                          {aboutData.projectsCompleted}
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="w-full h-2 md:h-3 bg-slate-200 dark:bg-slate-700 rounded-full mt-2 lg:mt-3 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-[35%]"></div>
                      </div>
                    </div>
                  </BlurFade>
                </div>
              </div>
            </BlurFade>

            {/* Key Skills - Moved from right column */}
            <BlurFade delay={baseDelay + 2 * delayIncrement} inView>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-5 lg:p-6 relative">
                <BorderBeam
                  duration={8}
                  size={250}
                  reverse
                  className="from-transparent via-green-500 to-transparent"
                />
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  Key Skills
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 font-body">
                  {aboutData.skills.map((skill, idx) => {
                    const skillColors = getSkillColor(skill);

                    return (
                      <BlurFade
                        key={skill}
                        delay={baseDelay + 2 * delayIncrement + 0.02 * idx}
                        inView
                      >
                        <span
                          className={`inline-block px-3 py-1.5 mb-1 text-xs sm:text-sm
                                    rounded-full border ${skillColors.bg} ${skillColors.border} ${skillColors.text}`}
                        >
                          {skill}
                        </span>
                      </BlurFade>
                    );
                  })}
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Column - 7/12 on desktop */}
          <div className="md:col-span-7 space-y-8 lg:space-y-10">
            {/* Section Title */}
            <BlurFade delay={baseDelay} inView>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </BlurFade>

            {/* Introduction */}
            <BlurFade delay={baseDelay + delayIncrement} inView>
              <div className="text-slate-700 dark:text-slate-300 space-y-4 font-body">
                {aboutData.introduction.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={`text-base md:text-lg ${
                      idx === 0 ? "lg:text-xl" : ""
                    } leading-relaxed`}
                  >
                    {idx === 0 ? (
                      <>
                        I&apos;m a{" "}
                        <span className="font-semibold text-slate-900 dark:text-white">
                          Full Stack Developer
                        </span>{" "}
                        {paragraph.substring(paragraph.indexOf("with"))}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </BlurFade>

            {/* Approach & Philosophy */}
            <BlurFade delay={baseDelay + 2 * delayIncrement} inView>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 lg:p-8 relative overflow-hidden">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  My Approach
                </h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-300 font-body">
                  {aboutData.approachPoints.map((point, idx) => (
                    <BlurFade
                      key={point.title}
                      delay={baseDelay + 2 * delayIncrement + 0.05 * (idx + 1)}
                      inView
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full ${point.bgColor} flex items-center justify-center mt-1`}
                        >
                          <span className={point.textColor + " font-semibold"}>
                            {point.number}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {point.title}
                          </h4>
                          <p className="text-base md:text-lg">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Terminal Component */}
            <BlurFade delay={baseDelay + 2.5 * delayIncrement} inView>
              <AboutTerminal />
            </BlurFade>
          </div>
        </div>
      </Container>
    </section>
  );
}
