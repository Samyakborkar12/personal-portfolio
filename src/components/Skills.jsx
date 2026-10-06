import React from "react";
import { Layout, Code2, Database, Wrench, Cpu, Check } from "lucide-react";
import { skillCategories } from "../data/skills.js";

const iconMap = {
  Layout: Layout,
  Code2: Code2,
  Database: Database,
  Wrench: Wrench,
  Cpu: Cpu
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/40 dark:bg-neutral-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3">
            Core technologies and tools utilized across my projects, backend scripts, and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <div
                key={category.name}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between text-xs sm:text-sm py-1.5 px-2 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
