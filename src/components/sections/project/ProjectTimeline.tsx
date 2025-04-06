// src/components/sections/projects/ProjectTimeline.tsx
"use client";

interface ProjectTimelineProps {
  status: "completed" | "in-progress";
}

export function ProjectTimeline({ status }: ProjectTimelineProps) {
  return (
    <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-6 pb-2 ml-4">
      <div className="mb-6 relative">
        <div className="absolute -left-[30px] top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
          Planning & Design
        </h4>
        <p className="text-slate-700 dark:text-slate-300">
          Initial concept, wireframes, and technology selection
        </p>
      </div>
      <div className="mb-6 relative">
        <div className="absolute -left-[30px] top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
          Development
        </h4>
        <p className="text-slate-700 dark:text-slate-300">
          Building core features and functionality
        </p>
      </div>
      <div className="relative">
        <div className="absolute -left-[30px] top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
          {status === "completed" ? "Completion & Deployment" : "In Progress"}
        </h4>
        <p className="text-slate-700 dark:text-slate-300">
          {status === "completed"
            ? "Final testing, optimization, and deployment"
            : "Actively working on implementation and refinement"}
        </p>
      </div>
    </div>
  );
}
