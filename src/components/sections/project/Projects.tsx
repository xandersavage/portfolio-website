// src/components/sections/Projects.tsx
"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import projects from "@/data/projectData";
import type { Project } from "@/data/projectData";
import { ProjectCard } from "@/components/sections/project/ProjectCard";
import { ProjectDialogContent } from "@/components/sections/project/ProjectDialogContent";
import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  // Base delay for first animation
  const baseDelay = 0.2;
  // Incremental delay for subsequent animations
  const delayIncrement = 0.1;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <Container>
        {/* Section Header */}
        <BlurFade delay={baseDelay} inView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
              My Projects
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-body">
              A collection of applications I&apos;ve built, showcasing my skills
              and experience.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>
        </BlurFade>

        {/* Projects Container */}
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <BlurFade
              key={project.id}
              className="w-full sm:w-1/2 lg:w-1/3 p-4"
              delay={baseDelay + (index % 3) * delayIncrement}
              inView
            >
              <ProjectCard project={project} onClick={handleProjectClick} />
            </BlurFade>
          ))}
        </div>

        {/* Project Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
          <DialogContent className="sm:max-w-[90%] md:max-w-[85%] lg:max-w-5xl max-h-[90vh] overflow-y-auto bg-slate-50 dark:bg-slate-900 p-6">
            {selectedProject && (
              <>
                {/* Adding the required DialogTitle for accessibility */}
                <DialogTitle className="sr-only">
                  {selectedProject.title} Project Details
                </DialogTitle>

                <ProjectDialogContent
                  project={selectedProject}
                  onClose={handleCloseDialog}
                />
              </>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
}
