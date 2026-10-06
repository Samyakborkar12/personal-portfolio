import React, { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp, Layers } from "lucide-react";
import ProjectVisual from "./ProjectVisual.jsx";

export default function ProjectCard({ project }) {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-xs hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200">
      {/* Visual Header Area */}
      <div className="w-full h-64 sm:h-72 overflow-hidden bg-neutral-950 relative">
        <ProjectVisual type={project.visualType} />
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-6">
        <div className="space-y-4">
          {/* Card Top Title & Badge */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
                {project.title}
              </h3>
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {project.badge}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features Accordion Toggle */}
          {project.features && project.features.length > 0 && (
            <div className="border-t border-neutral-100 dark:border-neutral-800/80 pt-3">
              <button
                type="button"
                onClick={() => setShowFeatures(prev => !prev)}
                className="flex items-center justify-between w-full text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 cursor-pointer"
                aria-expanded={showFeatures}
              >
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  Key Highlights & Architecture ({project.features.length})
                </span>
                {showFeatures ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>

              {showFeatures && (
                <ul className="mt-2.5 space-y-1.5 pl-2 border-l-2 border-indigo-500/30 text-xs text-neutral-600 dark:text-neutral-400 animate-in fade-in duration-150">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-indigo-500 font-bold">·</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Technology Badges */}
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Technologies Used
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-500"
          >
            <Github className="w-4 h-4 shrink-0" />
            <span>View on GitHub</span>
          </a>

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-indigo-500"
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
