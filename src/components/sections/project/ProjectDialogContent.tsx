// src/components/sections/projects/ProjectDialogContent.tsx
"use client";

import { Project } from "@/data/projectData";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Github,
  Globe,
  Code,
  Layers,
  PieChart,
  Lightbulb,
  Clock,
} from "lucide-react";
import { ProjectGallery } from "./ProjectGallery";
import { TechnologyChart } from "./TechnologyChart";
import { ProjectTimeline } from "./ProjectTimeline";
import { ProjectFeatures } from "./ProjectFeatures";

interface ProjectDialogContentProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDialogContent({
  project,
  onClose,
}: ProjectDialogContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Project Header with Gradient Title */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl"></div>
        <div className="relative bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold font-heading bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-body mt-2">
            {project.shortDescription}
          </p>

          {/* Status Badge */}
          <div className="mt-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
              ${
                project.status === "completed"
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full mr-2 
                ${
                  project.status === "completed"
                    ? "bg-green-500"
                    : "bg-amber-500"
                }`}
              ></span>
              {project.status === "completed" ? "Completed" : "In Progress"}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Tabs for Project Details */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Layers size={16} />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="features" className="flex items-center gap-2">
            <Lightbulb size={16} />
            <span className="hidden sm:inline">Features</span>
          </TabsTrigger>
          <TabsTrigger value="tech" className="flex items-center gap-2">
            <Code size={16} />
            <span className="hidden sm:inline">Tech</span>
          </TabsTrigger>
          <TabsTrigger value="challenges" className="flex items-center gap-2">
            <PieChart size={16} />
            <span className="hidden sm:inline">Challenges</span>
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center gap-2">
            <Clock size={16} />
            <span className="hidden sm:inline">Timeline</span>
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectGallery images={project.images} title={project.title} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 font-heading text-slate-900 dark:text-white">
              About this project
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>
        </TabsContent>

        {/* Features Tab */}
        <TabsContent value="features">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 font-heading text-slate-900 dark:text-white">
              Key Features
            </h3>
            <ProjectFeatures features={project.features} />
          </motion.div>
        </TabsContent>

        {/* Tech Tab */}
        <TabsContent value="tech">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 font-heading text-slate-900 dark:text-white">
              Technology Breakdown
            </h3>
            <TechnologyChart technologies={project.technologies} />

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 font-heading text-slate-900 dark:text-white">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30
                            text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </TabsContent>

        {/* Challenges Tab */}
        <TabsContent value="challenges">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 font-heading text-slate-900 dark:text-white">
              Challenges & Solutions
            </h3>

            {project.challenges && project.solutions ? (
              <Accordion type="single" collapsible className="w-full">
                {project.challenges.map((challenge, idx) => (
                  <AccordionItem key={idx} value={`challenge-${idx}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {challenge}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg mt-2">
                        <p className="text-slate-700 dark:text-slate-300">
                          {project.solutions?.[idx]}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-slate-500 dark:text-slate-400">
                No challenges documented for this project.
              </p>
            )}
          </motion.div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 font-heading text-slate-900 dark:text-white">
              Project Journey
            </h3>
            <ProjectTimeline status={project.status} />
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-8 justify-end">
        {project.githubUrl && (
          <Button asChild variant="outline" className="gap-2 h-12">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Github size={18} />
              <span>View Code</span>
            </a>
          </Button>
        )}

        {project.liveUrl && (
          <Button
            asChild
            className="gap-2 h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Globe size={18} />
              <span>Live Demo</span>
            </a>
          </Button>
        )}

        <Button variant="secondary" className="h-12" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}
