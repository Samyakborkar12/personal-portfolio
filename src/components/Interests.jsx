import React from "react";
import { Bot, Globe, Lightbulb, GraduationCap } from "lucide-react";

export default function Interests() {
  const items = [
    {
      title: "AI-Powered Applications",
      description: "Building practical applications that use AI to solve real-world problems.",
      icon: Bot
    },
    {
      title: "Web Applications",
      description: "Creating responsive and user-friendly web experiences.",
      icon: Globe
    },
    {
      title: "Problem-Solving Projects",
      description: "Turning real-world problems into practical software solutions.",
      icon: Lightbulb
    },
    {
      title: "Learning & Experimentation",
      description: "Continuously learning new technologies by building projects.",
      icon: GraduationCap
    }
  ];

  return (
    <section className="py-20 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/40 dark:bg-neutral-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Focus Areas
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
            What I Like Building
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3">
            Core domains and engineering challenges that inspire my development process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-xs flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
