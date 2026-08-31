import React, { useState } from "react";
import { cn } from "../lib/utils";

const ProjectCard = ({
  project,
  variant = "active",
  preload = false,
  className,
}) => {
  const [failed, setFailed] = useState(false);
  const isActive = variant === "active";

  return (
    <article
      className={cn(
        "relative h-full overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]",
        isActive ? "bg-[var(--surface-strong)]" : "bg-[var(--surface)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[#e8e6dc] dark:bg-[#0b0d18]">
        {!failed ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-contain object-center"
            loading={preload || isActive ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
            draggable="false"
          />
        ) : (
          <div className="flex h-full w-full items-end bg-[#12152a] p-5">
            <p className="display text-xl text-white">{project.title}</p>
          </div>
        )}
        <div
          className={cn(
            "absolute inset-0",
            isActive
              ? "bg-gradient-to-t from-black/70 via-black/10 to-transparent"
              : "bg-black/45"
          )}
        />
      </div>

      {isActive && (
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
          <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-purple-400">
            {project.category}
          </p>
          <h3 className="!font-sans text-lg font-bold text-white sm:text-xl">
            {project.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-600/50 bg-gray-800/60 px-2 py-0.5 text-[10px] text-gray-300 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
