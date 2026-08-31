import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useActiveProject } from "../context/ActiveProjectContext";
import { PROJECTS, wrapProjectIndex } from "../data/projects";
import { PROJECT_DURATION, SCENE_EASE } from "../lib/motion";
import { useDocumentHidden } from "../hooks/useMotion";
import ProjectCard from "./ProjectCard";
import ProjectControls from "./ProjectControls";

const AUTOPLAY_MS = 7000;
const WHEEL_COOLDOWN_MS = 800;
const DRAG_THRESHOLD = 56;

const positions = {
  prev: { x: "-26%", scale: 0.82, opacity: 0.38, rotate: -4, zIndex: 1 },
  active: { x: "0%", scale: 1, opacity: 1, rotate: 0, zIndex: 3 },
  next: { x: "26%", scale: 0.82, opacity: 0.38, rotate: 4, zIndex: 2 },
  hidden: { x: "0%", scale: 0.72, opacity: 0, rotate: 0, zIndex: 0 },
};

const reducedPositions = {
  prev: { opacity: 0, zIndex: 1 },
  active: { opacity: 1, zIndex: 3 },
  next: { opacity: 0, zIndex: 2 },
  hidden: { opacity: 0, zIndex: 0 },
};

function slotFor(itemIndex, activeIndex) {
  if (itemIndex === activeIndex) return "active";
  if (itemIndex === wrapProjectIndex(activeIndex - 1)) return "prev";
  if (itemIndex === wrapProjectIndex(activeIndex + 1)) return "next";
  return "hidden";
}

const ProjectStage = ({ compact = false }) => {
  const { index, setIndex, project, count } = useActiveProject();
  const reduced = useReducedMotion();
  const hidden = useDocumentHidden();
  const stageRef = useRef(null);
  const pointerIdRef = useRef(null);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const dragPending = useRef(false);
  const wheelLock = useRef(false);
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragX, setDragX] = useState(0);

  const goTo = useCallback(
    (nextIndex) => {
      const wrapped = wrapProjectIndex(nextIndex);
      if (wrapped === index) return;
      setIndex(wrapped);
    },
    [index, setIndex]
  );

  const go = useCallback(
    (delta) => {
      setIndex((current) => wrapProjectIndex(current + delta));
    },
    [setIndex]
  );

  const paused = hovering || focused || dragging || hidden || reduced;

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [go, paused]);

  useEffect(() => {
    const next = wrapProjectIndex(index + 1);
    const img = new Image();
    img.src = PROJECTS[next].image;
  }, [index]);

  const onPointerDown = (event) => {
    if (event.target.closest("a, button")) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerIdRef.current = event.pointerId;
    dragStartX.current = event.clientX;
    dragStartY.current = event.clientY;
    dragPending.current = true;
  };

  const onPointerMove = (event) => {
    if (event.pointerId !== pointerIdRef.current) return;
    const dx = event.clientX - dragStartX.current;
    const dy = event.clientY - dragStartY.current;

    if (dragPending.current) {
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        dragPending.current = false;
        pointerIdRef.current = null;
        return;
      }
      dragPending.current = false;
      setDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    if (dragging || event.currentTarget.hasPointerCapture(event.pointerId)) {
      setDragX(dx);
    }
  };

  const endDrag = (event) => {
    if (event.pointerId !== pointerIdRef.current) return;
    const delta = event.clientX - dragStartX.current;
    const wasDragging = dragging || Math.abs(delta) >= DRAG_THRESHOLD;
    setDragging(false);
    setDragX(0);
    dragPending.current = false;
    pointerIdRef.current = null;
    if (wasDragging && Math.abs(delta) >= DRAG_THRESHOLD) {
      go(delta < 0 ? 1 : -1);
    }
  };

  useEffect(() => {
    const node = stageRef.current;
    if (!node || reduced) return undefined;
    const onWheel = (event) => {
      if (wheelLock.current) return;
      const dominant =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (Math.abs(dominant) < 18) return;
      event.preventDefault();
      wheelLock.current = true;
      go(dominant > 0 ? 1 : -1);
      window.setTimeout(() => {
        wheelLock.current = false;
      }, WHEEL_COOLDOWN_MS);
    };
    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [go, reduced]);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      goTo(count - 1);
    }
  };

  const visibleIndexes = [
    wrapProjectIndex(index - 1),
    index,
    wrapProjectIndex(index + 1),
  ];
  const pos = reduced ? reducedPositions : positions;
  const liveAction = project.demoUrl
    ? { to: project.demoUrl, external: true, label: "View project" }
    : { to: "/contact", external: false, label: project.access || "Request access" };

  return (
    <section
      ref={stageRef}
      tabIndex={0}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocused(false);
        }
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      aria-roledescription="carousel"
      aria-label="Featured projects"
      className="relative flex h-full min-h-[18rem] flex-col outline-none"
    >
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <p className="text-xs font-semibold tracking-[0.22em] text-[var(--text-muted)]">
          <span className="text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
          <span className="mx-1.5 text-[var(--text-muted)]">/</span>
          {String(count).padStart(2, "0")}
        </p>
        {liveAction.external ? (
          <a
            href={liveAction.to}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {liveAction.label}
          </a>
        ) : (
          <Link
            to={liveAction.to}
            state={{ project: project.title }}
            className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {liveAction.label}
          </Link>
        )}
      </div>

      <div
        className={`relative isolate flex-1 ${compact ? "min-h-[16rem]" : "min-h-[18rem] sm:min-h-[22rem] lg:min-h-0"}`}
        style={{ perspective: reduced ? "none" : "1400px" }}
      >
        {visibleIndexes.map((itemIndex) => {
          const item = PROJECTS[itemIndex];
          const slot = slotFor(itemIndex, index);
          const offset = reduced ? 0 : slot === "active" ? dragX : dragX * 0.28;
          return (
            <motion.div
              key={item.id}
              className="absolute inset-y-0 left-[8%] right-[8%] cursor-grab touch-pan-y active:cursor-grabbing"
              initial={false}
              animate={pos[slot]}
              transition={{
                duration: dragging || reduced ? 0 : PROJECT_DURATION,
                ease: SCENE_EASE,
              }}
              style={{
                transformOrigin: "center center",
                pointerEvents: slot === "active" ? "auto" : "none",
              }}
            >
              <div
                className="h-full"
                style={{ transform: offset ? `translateX(${offset}px)` : undefined }}
              >
                <ProjectCard
                  project={item}
                  variant={slot === "active" ? "active" : "peek"}
                  preload={slot !== "hidden"}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Showing project {index + 1} of {count}: {project.title}
      </div>

      <ProjectControls
        index={index}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
        onSelect={(nextIndex) => goTo(nextIndex)}
      />
    </section>
  );
};

export default ProjectStage;
