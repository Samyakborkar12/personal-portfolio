import React from "react";
import { Code, Database, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Web development",
    "React",
    "JavaScript",
    "Python",
    "Flask",
    "AI",
    "Databases",
    "Problem solving"
  ];

  return (
    <section id="about" className="py-20 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: About Text */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                Background & Focus
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
                About Me
              </h2>
            </div>

            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Computer Science student and aspiring software developer passionate about building practical software applications, AI-powered solutions, and modern web experiences.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              My work focuses on translating real-world needs into clean, functional code. Through building real-world projects from scratch—ranging from AI-driven civic issue management to digital hospital appointment booking and personal finance trackers—I cultivate deep hands-on expertise across both frontend interfaces and backend logic.
            </p>

            {/* Core Competencies Highlight Grid */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                Featured Project Competencies
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {highlights.map(item => (
                  <div
                    key={item}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-100/70 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Clean Developer Architecture Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-7 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                    Development Philosophy
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    How I approach building software
                  </p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Code className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 font-semibold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">Practical Purpose First</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-0.5 leading-relaxed">
                      Every tool, algorithm, or framework must solve an actual pain point and deliver a usable experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 font-semibold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">Clean & Maintainable Structure</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-0.5 leading-relaxed">
                      Writing clear, modular components and structured data workflows for readability and scale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 font-semibold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">Continuous Hands-on Learning</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-0.5 leading-relaxed">
                      Deepening knowledge in systems, AI integration, and databases through active project execution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
                <span>Location: India</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">CS Student & Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
