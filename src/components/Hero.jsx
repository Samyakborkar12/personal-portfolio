import React from "react";
import { ArrowRight, Terminal, Sparkles, FolderGit2 } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle background ambient illumination */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headings & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for opportunities & collaboration</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1] [text-wrap:balance]">
                Hi, I'm Samyak Borkar.
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-indigo-600 dark:text-indigo-400">
                An Aspiring Software Developer.
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
              I build practical web applications, AI-powered solutions, and software projects that solve real-world problems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-indigo-500 cursor-pointer group"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-500 cursor-pointer"
              >
                Contact Me
              </button>
            </div>

            {/* Quick overview markers */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>AI & Web Development</span>
              </div>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <div className="flex items-center gap-2">
                <FolderGit2 className="w-3.5 h-3.5 text-indigo-500" />
                <span>Open Source Projects</span>
              </div>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                <span>Full-Stack & Algorithms</span>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  <Terminal className="w-3 h-3" />
                  <span>developer.profile.js</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Code window content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-neutral-800 dark:text-neutral-200">
                <div className="text-neutral-400 dark:text-neutral-500 select-none">
                  // Passionate about building impactful software
                </div>
                <div className="mt-2">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">const</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">developer</span>{" "}
                  <span className="text-neutral-500">=</span> &#123;
                </div>
                <div className="pl-4 space-y-1 mt-1">
                  <div>
                    <span className="text-neutral-500">name:</span>{" "}
                    <span className="text-amber-600 dark:text-amber-300">"Samyak Borkar"</span>,
                  </div>
                  <div>
                    <span className="text-neutral-500">role:</span>{" "}
                    <span className="text-amber-600 dark:text-amber-300">"Aspiring Software Developer"</span>,
                  </div>
                  <div>
                    <span className="text-neutral-500">focus:</span> [
                  </div>
                  <div className="pl-4 space-y-0.5 text-amber-600 dark:text-amber-300">
                    <div>"Modern Web Applications",</div>
                    <div>"AI-Powered Solutions",</div>
                    <div>"Database Architecture",</div>
                    <div>"Practical Problem Solving"</div>
                  </div>
                  <div>
                    <span className="text-neutral-500">],</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">coreStack:</span> [
                    <span className="text-indigo-600 dark:text-indigo-300">"React"</span>,{" "}
                    <span className="text-indigo-600 dark:text-indigo-300">"Python"</span>,{" "}
                    <span className="text-indigo-600 dark:text-indigo-300">"C++"</span>,{" "}
                    <span className="text-indigo-600 dark:text-indigo-300">"SQL"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-neutral-500">status:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">"Building real-world projects"</span>
                  </div>
                </div>
                <div className="mt-1">&#125;;</div>

                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Ready to build & deploy
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
