// src/components/sections/projects/ProjectCard.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projectData";
import { cn } from "@/lib/utils";

// CSS for the shimmer animation (add to global styles or as a style tag)
const shimmerStyles = `
@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
`;

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

// Technology color mapping (same as before)
const TECH_COLORS: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  // ... (same as in your original code)
};

// Default color (same as before)
const DEFAULT_TECH_COLOR = {
  bg: "bg-slate-100 dark:bg-slate-700",
  text: "text-slate-700 dark:text-slate-300",
  border: "border-slate-200 dark:border-slate-600",
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for dynamic lighting effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Get tech color from our mapping or use default
  const getTechColor = (tech: string) => {
    return TECH_COLORS[tech] || DEFAULT_TECH_COLOR;
  };

  return (
    <>
      {/* Add shimmer animation styles */}
      <style jsx global>
        {shimmerStyles}
      </style>

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
        className={cn(
          "group flex flex-col rounded-xl overflow-hidden relative h-full cursor-pointer",
          // Glass effect styling
          "bg-white/60 dark:bg-slate-800/50 backdrop-blur-md",
          "border border-white/20 dark:border-slate-700/30",
          // Shadow and transition effects
          "transition-all duration-300 ease-out",
          "shadow-[0_8px_30px_rgb(0,0,0,0.06)]",
          "hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]",
          "dark:hover:shadow-[0_20px_50px_rgba(66,_153,_225,_0.15)]"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={() => onClick(project)}
      >
        {/* Enhanced Flashy Spotlight Effect */}
        {isHovered && (
          <>
            {/* Primary spotlight beam */}
            <div
              className="absolute -inset-px opacity-60 rounded-xl pointer-events-none z-0 transition-opacity duration-300"
              style={{
                background: `
                  radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(120, 119, 255, 0.15), 
                  transparent 40%)
                `,
              }}
            />

            {/* Secondary colorful spotlight for added flash */}
            <div
              className="absolute -inset-px opacity-40 rounded-xl pointer-events-none z-0 mix-blend-overlay transition-opacity duration-300"
              style={{
                background: `
                  radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(142, 81, 234, 0.2), 
                  transparent 35%)
                `,
              }}
            />

            {/* Moving border highlight */}
            <div className="absolute -inset-0.5 rounded-xl pointer-events-none z-0 opacity-50 overflow-hidden">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(152, 103, 243, 0.3) 30%, rgba(79, 70, 229, 0.4) 50%, rgba(152, 103, 243, 0.3) 70%, transparent 100%)`,
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s infinite",
                }}
              />
            </div>

            {/* Subtle corner highlights */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-tl-xl pointer-events-none z-0 opacity-70" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-br-xl pointer-events-none z-0 opacity-70" />
          </>
        )}

        {/* Project Image with Enhanced Glass Effect */}
        <div className="relative h-52 w-full overflow-hidden">
          {/* Gradient Overlay with enhanced opacity for glass effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className={cn(
              "object-cover transition-all duration-700",
              "group-hover:scale-110 group-hover:filter group-hover:brightness-110"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Status Badges with Glass Effect */}
          {project.status === "in-progress" && (
            <Badge
              className={cn(
                "absolute top-3 right-3 z-20",
                "bg-amber-500/80 hover:bg-amber-500/90 text-white border-none",
                "shadow-sm backdrop-blur-md"
              )}
            >
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              In Progress
            </Badge>
          )}

          {project.isFeatured && (
            <Badge
              className={cn(
                "absolute top-3 left-3 z-20",
                "bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white border-none",
                "shadow-sm backdrop-blur-md"
              )}
            >
              <svg
                className="w-3 h-3 mr-1 text-yellow-300 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              Featured
            </Badge>
          )}
        </div>

        {/* Content Section with Glass Effect */}
        <div className="flex flex-col p-5 flex-grow bg-gradient-to-b from-white/60 to-slate-50/60 dark:from-slate-800/50 dark:to-slate-800/40 backdrop-blur-sm">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

          <h3
            className={cn(
              "text-xl font-bold mb-2 font-heading",
              "text-slate-900 dark:text-white",
              "group-hover:text-blue-700 dark:group-hover:text-blue-400",
              "transition-colors duration-300"
            )}
          >
            {project.title}
          </h3>

          <p
            className={cn(
              "text-slate-700 dark:text-slate-300 mb-4 line-clamp-2 flex-grow font-body",
              "text-sm leading-relaxed"
            )}
          >
            {project.shortDescription}
          </p>

          {/* Colorful Technology Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
            {project.technologies.slice(0, 3).map((tech) => {
              const colors = getTechColor(tech);
              return (
                <span
                  key={tech}
                  className={cn(
                    "px-2 py-1 text-xs rounded-full",
                    "transition-all duration-300 ease-in-out",
                    "border backdrop-blur-sm",
                    colors.bg.replace("bg-", "bg-opacity-70 bg-"),
                    colors.text,
                    colors.border,
                    "group-hover:scale-105",
                    "group-hover:shadow-sm"
                  )}
                >
                  {tech}
                </span>
              );
            })}
            {project.technologies.length > 3 && (
              <span
                className={cn(
                  "px-2 py-1 text-xs rounded-full",
                  "bg-gradient-to-r from-blue-100/70 to-purple-100/70 dark:from-blue-900/30 dark:to-purple-900/30",
                  "text-blue-800 dark:text-blue-300",
                  "border border-blue-200/50 dark:border-blue-800/30 backdrop-blur-sm",
                  "transition-all duration-300 ease-in-out",
                  "group-hover:scale-105",
                  "group-hover:shadow-sm"
                )}
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Glass Button with Enhanced Hover Effect */}
          <button
            className={cn(
              "w-full py-2.5 px-4 rounded-lg font-medium",
              "bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm",
              "text-slate-700 dark:text-slate-200",
              "border border-white/30 dark:border-slate-600/30",
              "transition-all duration-300 ease-in-out",
              "group-hover:bg-gradient-to-r group-hover:from-blue-500/90 group-hover:to-purple-500/90",
              "group-hover:text-white group-hover:border-transparent",
              "group-hover:shadow-[0_10px_20px_rgba(79,_70,_229,_0.2)]",
              "font-body text-sm"
            )}
          >
            <div className="flex items-center justify-center">
              <span>View Project</span>
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </motion.div>
    </>
  );
}
