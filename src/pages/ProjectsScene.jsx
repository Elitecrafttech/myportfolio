import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Code2, ExternalLink, Github, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useActiveProject } from "../context/ActiveProjectContext";
import { PROJECTS, wrapProjectIndex } from "../data/projects";
import { BRAND } from "../data/site";
import { useDocumentTitle, usePrefersReducedMotion } from "../hooks/useMotion";
import { cn } from "../lib/utils";

const DRAG_THRESHOLD = 56;

const ProjectsScene = () => {
  useDocumentTitle(`Projects · ${BRAND.name}`);
  const { index, setIndex, project, count } = useActiveProject();
  const reduced = usePrefersReducedMotion();
  const [failed, setFailed] = useState(false);
  const [dragX, setDragX] = useState(0);
  const startX = useRef(0);
  const pointerId = useRef(null);

  useEffect(() => {
    setFailed(false);
  }, [project.id]);

  const go = useCallback(
    (delta) => setIndex((current) => wrapProjectIndex(current + delta)),
    [setIndex]
  );

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  };

  const onPointerDown = (event) => {
    pointerId.current = event.pointerId;
    startX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (pointerId.current !== event.pointerId) return;
    setDragX(event.clientX - startX.current);
  };

  const onPointerUp = (event) => {
    if (pointerId.current !== event.pointerId) return;
    const delta = event.clientX - startX.current;
    setDragX(0);
    pointerId.current = null;
    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      go(delta < 0 ? 1 : -1);
    }
  };

  return (
    <section
      className="project-copy scene-scroll"
      aria-labelledby="projects-title"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="mx-auto grid min-h-full w-full min-w-0 max-w-6xl gap-3 px-3 pb-3 pt-14 lg:grid-cols-[minmax(14rem,20rem)_minmax(0,1fr)] lg:gap-6 lg:px-8 lg:pb-6 lg:pt-12">
        <div className="min-w-0 rounded-xl border border-white/20 bg-[#727484] p-3 dark:border-gray-700/50 dark:bg-gray-900/90 lg:p-4">
          <div className="inline-flex items-center gap-2">
            <Code2 className="h-4 w-4 text-purple-400" />
            <p className="text-sm font-medium uppercase tracking-wider text-purple-400">
              My Work
            </p>
            <Code2 className="h-4 w-4 text-cyan-400" />
          </div>
          <h1 id="projects-title" className="mt-2 text-2xl font-bold text-white lg:mt-3 lg:text-4xl">
            <span className="text-white">Featured</span>
            <span className="project-gradient"> Projects</span>
          </h1>
          <p className="mt-3 hidden text-sm leading-relaxed text-[#cbd5e1] lg:block">
            Here are some of my recent projects showcasing expertise in full-stack development,
            AI integration, and modern web technologies.
          </p>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 lg:mt-4" />
          <p className="mt-2 hidden text-xs text-gray-400 lg:mt-3 lg:block">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
          <ul className="mt-3 flex min-w-0 gap-2 overflow-x-auto pb-1 no-scrollbar lg:mt-5 lg:flex-col lg:overflow-visible lg:pb-2">
            {PROJECTS.map((item, itemIndex) => (
              <li key={item.id} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => setIndex(itemIndex)}
                  className={cn(
                    "flex min-h-10 w-auto items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition-colors lg:min-h-11 lg:w-full lg:gap-3",
                    itemIndex === index
                      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]"
                      : "border-gray-700/50 bg-gray-800/60 text-white"
                  )}
                >
                  <span
                    className={cn(
                      "text-xs",
                      itemIndex === index ? "text-[var(--accent-ink)]/70" : "text-gray-400"
                    )}
                  >
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-bold",
                      itemIndex === index ? "text-[var(--accent-ink)]" : "text-white"
                    )}
                  >
                    {item.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <article
          className="flex w-full min-w-0 max-w-full flex-col self-start overflow-hidden rounded-xl border border-gray-700/50 bg-gray-900/90"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            transform: reduced || !dragX ? undefined : `translateX(${dragX * 0.08}px)`,
          }}
        >
          <div className="relative aspect-[16/9] max-h-[12.5rem] w-full bg-[#0f172a] sm:max-h-[18rem] lg:max-h-[33rem]">
            {!failed ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="h-full w-full object-cover object-top"
                onError={() => setFailed(true)}
              />
            ) : (
              <div className="flex h-full items-end p-5">
                <p className="text-2xl font-bold text-white">{project.title}</p>
              </div>
            )}
            <div className="absolute left-3 top-3">
              <span className="rounded-full border border-gray-600/50 bg-gray-900/80 px-2 py-1 text-xs font-medium text-purple-400">
                {project.category}
              </span>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-2 p-3 lg:p-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-600/50 bg-gray-800/60 px-2 py-0.5 text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="rounded-full border border-gray-600/50 bg-gray-800/60 px-2 py-0.5 text-xs text-gray-400">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
            <h2 className="text-lg font-bold text-white lg:text-xl">{project.title}</h2>
            <p className="line-clamp-2 text-sm leading-relaxed text-[#cbd5e1] lg:line-clamp-none">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 text-gray-300 hover:text-purple-400 lg:min-h-11"
                  >
                    <ExternalLink size={16} />
                    Live site
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    state={{ project: project.title }}
                    className="inline-flex min-h-10 items-center gap-2 text-gray-300 hover:text-purple-400 lg:min-h-11"
                  >
                    <Lock size={16} />
                    {project.access || "Request access"}
                  </Link>
                )}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 text-gray-300 hover:text-cyan-400 lg:min-h-11"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">Source unavailable</span>
                )}
              </div>
              <span className="text-xs text-gray-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <a
              href={BRAND.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="box-border flex w-full min-w-0 max-w-full items-center justify-center gap-1.5 rounded-full bg-[var(--accent)] px-3 py-2.5 text-center text-xs font-semibold leading-tight text-[var(--accent-ink)] sm:text-sm lg:min-h-11 lg:px-5"
            >
              <span className="min-w-0 truncate">
                <span className="lg:hidden">View on GitHub</span>
                <span className="hidden lg:inline">Explore All Projects on GitHub</span>
              </span>
              <ArrowRight size={16} className="shrink-0" />
            </a>
            <div className="sr-only" aria-live="polite">
              {project.title}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProjectsScene;
