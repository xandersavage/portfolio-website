// src/components/sections/Projects.tsx
"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import projects from "@/data/projectData";
import type { Project } from "@/data/projectData";
import { ProjectCard } from "@/components/sections/project/ProjectCard";
import { ProjectDialogContent } from "@/components/sections/project/ProjectDialogContent";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type FilterType = "all" | "web" | "ml";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All Projects", value: "all" },
  { label: "Web", value: "web" },
  { label: "ML / AI", value: "ml" },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.type === activeFilter));
    }
  }, [activeFilter]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  const baseDelay = 0.2;
  const delayIncrement = 0.1;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <Container>
        {/* Section Header */}
        <BlurFade delay={baseDelay} inView>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
              My Projects
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-body">
              A collection of web applications and ML/AI systems I&apos;ve
              built — from production microservices to deep learning models.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>
        </BlurFade>

        {/* Filter Tabs */}
        <BlurFade delay={baseDelay + delayIncrement} inView>
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-slate-100 dark:bg-slate-800 rounded-full p-1 gap-1">
              {FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-body",
                    activeFilter === filter.value
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap -mx-4"
          >
            {filteredProjects.map((project, index) => (
              <BlurFade
                key={project.id}
                className="w-full sm:w-1/2 lg:w-1/3 p-4"
                delay={baseDelay + (index % 3) * delayIncrement}
                inView
              >
                <ProjectCard project={project} onClick={handleProjectClick} />
              </BlurFade>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Full-Screen Project Overlay */}
      <AnimatePresence>
        {isOverlayOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={handleCloseOverlay}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 sm:inset-4 md:inset-8 bg-slate-50 dark:bg-slate-900 rounded-none sm:rounded-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectDialogContent
                project={selectedProject}
                onClose={handleCloseOverlay}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
