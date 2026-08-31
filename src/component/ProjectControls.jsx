import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { cn } from "../lib/utils";

const ProjectControls = ({
  index,
  onPrev,
  onNext,
  onSelect,
  disableWheelHint = false,
}) => {
  return (
    <div className="mt-3 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)]"
          aria-label="Previous project"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)]"
          aria-label="Next project"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex items-center gap-1.5" role="tablist" aria-label="Project indicators">
        {PROJECTS.map((project, itemIndex) => (
          <button
            key={project.id}
            type="button"
            role="tab"
            aria-selected={itemIndex === index}
            aria-label={`Show ${project.title}`}
            onClick={() => onSelect(itemIndex)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              itemIndex === index
                ? "w-6 bg-[var(--accent)]"
                : "w-2 bg-[var(--text-muted)]/45 hover:bg-[var(--text-muted)]"
            )}
          />
        ))}
      </div>

      {!disableWheelHint && (
        <p className="hidden text-[11px] tracking-wide text-[var(--text-muted)] lg:block">
          Drag, arrows or wheel
        </p>
      )}
    </div>
  );
};

export default ProjectControls;
