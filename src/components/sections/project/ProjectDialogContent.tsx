// src/components/sections/project/ProjectDialogContent.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projectData";
import { cn } from "@/lib/utils";
import { Github, Globe, ExternalLink, X, Sparkles } from "lucide-react";

interface ProjectDialogContentProps {
  project: Project;
  onClose: () => void;
}

type TabId = "overview" | "features" | "tech" | "challenges";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "tech", label: "Architecture" },
  { id: "challenges", label: "Challenges" },
];

// Tech dot colors
const TECH_DOT: Record<string, string> = {
  Python: "bg-yellow-400",
  TensorFlow: "bg-orange-500",
  Keras: "bg-red-500",
  PyTorch: "bg-orange-400",
  "scikit-learn": "bg-orange-400",
  XGBoost: "bg-orange-500",
  CatBoost: "bg-orange-500",
  React: "bg-cyan-400",
  "Next.js": "bg-blue-400",
  TypeScript: "bg-blue-500",
  "Tailwind CSS": "bg-cyan-400",
  FastAPI: "bg-emerald-400",
  Streamlit: "bg-red-400",
  "Node.js": "bg-emerald-500",
  Plotly: "bg-purple-400",
  Pandas: "bg-teal-400",
  NumPy: "bg-teal-400",
  Seaborn: "bg-teal-400",
  Matplotlib: "bg-teal-400",
  Prophet: "bg-violet-400",
  SARIMAX: "bg-violet-400",
  statsmodels: "bg-slate-400",
  "Pydantic v2": "bg-emerald-400",
  "Random Forest": "bg-green-400",
  CNN: "bg-violet-400",
  PCA: "bg-indigo-400",
  GridSearchCV: "bg-orange-400",
  Vercel: "bg-slate-400",
  Render: "bg-slate-400",
  MagicUI: "bg-pink-400",
  "Framer Motion": "bg-pink-400",
  "Shadcn UI": "bg-slate-400",
};

const TYPE_BADGE: Record<string, string> = {
  web: "bg-blue-500/20 text-blue-400 border-blue-500/20",
  ml: "bg-[#7639ef]/20 text-[#a78bfa] border-[#7639ef]/20",
  fullstack: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
};

const TYPE_LABEL: Record<string, string> = {
  web: "Web",
  ml: "ML / AI",
  fullstack: "Full Stack",
};

export function ProjectDialogContent({ project, onClose }: ProjectDialogContentProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const badgeClass = TYPE_BADGE[project.type] || TYPE_BADGE.web;
  const badgeLabel = TYPE_LABEL[project.type] || "Web";

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row bg-[#0f172a] overflow-hidden">

      {/* ── Background glow decorations ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#7639ef]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-purple-900/15 rounded-full blur-[100px]" />
      </div>

      {/* ── Close button ── */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/80 text-slate-400 hover:text-white transition-all backdrop-blur-sm border border-white/5 group"
        aria-label="Close"
      >
        <X size={18} className="group-hover:rotate-90 transition-transform duration-200" />
      </button>

      {/* ══════════════════════════════════════════
          LEFT COLUMN — Sticky sidebar
      ══════════════════════════════════════════ */}
      <div className="relative z-10 w-full md:w-[38%] bg-[#020617]/80 backdrop-blur-md border-b md:border-b-0 md:border-r border-slate-800/60 flex flex-col overflow-y-auto">
        <div className="p-6 md:p-8 flex flex-col h-full gap-7">

          {/* Header */}
          <div className="flex flex-col gap-3 items-start">
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border",
              badgeClass
            )}>
              {badgeLabel}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight font-heading">
              {project.title}
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed font-body">
              {project.shortDescription}
            </p>
          </div>

          {/* Key Metrics — ML projects only */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Key Metrics
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {/* First metric spans full width */}
                <div className="col-span-2 p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex flex-col gap-1 hover:border-slate-700 transition-colors">
                  <span className="text-slate-400 text-sm font-medium">{project.metrics[0].label}</span>
                  <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    {project.metrics[0].value}
                  </span>
                </div>
                {/* Remaining metrics in 2-col grid */}
                {project.metrics.slice(1).map((m) => (
                  <div key={m.label} className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex flex-col gap-1 hover:border-slate-700 transition-colors">
                    <span className="text-slate-400 text-sm font-medium">{m.label}</span>
                    <span className="text-2xl font-bold text-white">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Highlights — Web projects */}
          {!project.metrics && project.category && (
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Project Highlights
              </h3>
              <div className="flex flex-col gap-2">
                {project.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/40">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium flex items-center gap-2"
                >
                  {TECH_DOT[tech] && (
                    <span className={cn("w-2 h-2 rounded-full flex-shrink-0", TECH_DOT[tech])} />
                  )}
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-auto flex flex-col gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full h-12 rounded-xl bg-[#7639ef] hover:bg-[#7639ef]/90 text-white font-medium shadow-lg shadow-[#7639ef]/20 transition-all flex items-center justify-center gap-2"
              >
                <Globe size={16} />
                <span>Live Demo</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            )}
            {project.streamlitUrl && (
              <a
                href={project.streamlitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full h-12 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-medium transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} />
                <span>Streamlit App</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 text-white font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Github size={18} />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          RIGHT COLUMN — Tabbed content
      ══════════════════════════════════════════ */}
      <div className="relative z-10 w-full md:w-[62%] bg-[#0f172a] flex flex-col overflow-hidden">

        {/* Sticky tab bar */}
        <div className="sticky top-0 z-20 bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-800/60 pt-5 px-6 md:px-8">
          <div className="flex gap-6 md:gap-8 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "pb-4 text-sm font-medium transition-colors relative whitespace-nowrap",
                  activeTab === tab.id
                    ? "text-white font-bold"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {tab.label}
                {activeTab === tab.id ? (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7639ef] via-purple-400 to-[#7639ef]" />
                ) : (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-slate-700 transition-colors" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 relative">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#7639ef]/5 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="max-w-3xl mx-auto pb-10"
            >
              {/* ── OVERVIEW TAB ── */}
              {activeTab === "overview" && (
                <div className="flex flex-col gap-6">
                  {/* Hero image */}
                  <div className="relative h-52 md:h-64 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Status badge */}
                    <span className={cn(
                      "absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5",
                      project.status === "completed"
                        ? "bg-emerald-500/90 text-white"
                        : "bg-amber-500/90 text-white"
                    )}>
                      <span className={cn("w-1.5 h-1.5 rounded-full", project.status === "completed" ? "bg-white" : "bg-white animate-pulse")} />
                      {project.status === "completed" ? "Completed" : "In Progress"}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white mb-3 font-heading">
                      About this project
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed font-body">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Category tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 text-xs rounded-full bg-slate-800/60 text-slate-400 border border-slate-700"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ── FEATURES TAB ── */}
              {activeTab === "features" && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2 font-heading">
                      <Sparkles size={18} className="text-[#7639ef]" />
                      Key Features
                    </h2>
                  </div>

                  {project.features.map((feature, i) => {
                    const isHighlighted = i === 3; // 4th card gets the active glow state
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className={cn(
                          "group relative flex items-start gap-4 p-5 rounded-xl border transition-all duration-300",
                          isHighlighted
                            ? "border-[#7639ef]/40 bg-slate-800/40 shadow-[0_0_20px_-5px_rgba(118,57,239,0.15)] hover:border-[#7639ef]/60"
                            : "border-slate-800 bg-slate-800/30 hover:bg-slate-800/50 hover:border-slate-700 hover:shadow-lg hover:shadow-[#7639ef]/5"
                        )}
                      >
                        {/* Hover gradient overlay */}
                        {!isHighlighted && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[#7639ef]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />
                        )}

                        {/* Number badge */}
                        <div className={cn(
                          "shrink-0 flex items-center justify-center w-8 h-8 rounded-full border shadow-inner transition-all duration-300 z-10",
                          isHighlighted
                            ? "bg-gradient-to-br from-[#7639ef] to-purple-600 border-[#7639ef]/50 shadow-lg shadow-[#7639ef]/20"
                            : "bg-gradient-to-br from-slate-700 to-slate-800 border-slate-600 group-hover:from-[#7639ef] group-hover:to-purple-600 group-hover:border-[#7639ef]/50"
                        )}>
                          <span className={cn(
                            "text-xs font-bold transition-colors",
                            isHighlighted ? "text-white" : "text-slate-300 group-hover:text-white"
                          )}>
                            {i + 1}
                          </span>
                        </div>

                        {/* Feature text */}
                        <div className="flex flex-col gap-1 z-10">
                          <p className={cn(
                            "text-sm leading-relaxed font-body transition-colors",
                            isHighlighted ? "text-slate-300" : "text-slate-400 group-hover:text-slate-300"
                          )}>
                            {feature}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* ── TECH / ARCHITECTURE TAB ── */}
              {activeTab === "tech" && (
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-white mb-2 font-heading">
                    Technology Breakdown
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 }}
                        className="group flex items-center gap-3 p-4 rounded-xl border border-slate-800 bg-slate-800/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300"
                      >
                        <div className={cn(
                          "w-3 h-3 rounded-full flex-shrink-0",
                          TECH_DOT[tech] || "bg-slate-500"
                        )} />
                        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── CHALLENGES TAB ── */}
              {activeTab === "challenges" && (
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-white mb-2 font-heading">
                    Challenges & Solutions
                  </h2>
                  {project.challenges && project.solutions ? (
                    project.challenges.map((challenge, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="rounded-xl overflow-hidden border border-slate-800"
                      >
                        {/* Challenge */}
                        <div className="flex items-start gap-3 p-4 bg-slate-800/40">
                          <span className="text-amber-400 mt-0.5 flex-shrink-0 text-base">⚠</span>
                          <p className="text-sm font-semibold text-slate-200 font-body">{challenge}</p>
                        </div>
                        {/* Solution */}
                        <div className="flex items-start gap-3 p-4 bg-[#7639ef]/5 border-t border-slate-800">
                          <span className="text-emerald-400 mt-0.5 flex-shrink-0 text-base">✓</span>
                          <p className="text-sm text-slate-300 font-body">{project.solutions?.[i]}</p>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-slate-500 text-sm">No challenges documented for this project.</p>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
