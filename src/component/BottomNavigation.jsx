import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Briefcase, Cpu, Home, Mail, User } from "lucide-react";
import { getNavIndex, NAV_ITEMS } from "../data/site";
import { usePrefersReducedMotion } from "../hooks/useMotion";
import { cn } from "../lib/utils";

const ICONS = {
  home: Home,
  about: User,
  projects: Briefcase,
  services: Cpu,
  contact: Mail,
};

const DRAG_THRESHOLD = 8;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function hitIndex(x, layout) {
  const index = layout.findIndex((item) => x >= item.left && x <= item.left + item.width);
  if (index !== -1) return index;

  let nearest = 0;
  let distance = Infinity;
  layout.forEach((item, itemIndex) => {
    const center = item.left + item.width / 2;
    const next = Math.abs(center - x);
    if (next < distance) {
      distance = next;
      nearest = itemIndex;
    }
  });
  return nearest;
}

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reduced = usePrefersReducedMotion();
  const routeIndex = getNavIndex(location.pathname);

  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const draggingRef = useRef(false);
  const didDragRef = useRef(false);
  const startXRef = useRef(0);
  const pointerIdRef = useRef(null);

  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });
  const [hoverIndex, setHoverIndex] = useState(routeIndex);
  const [dragging, setDragging] = useState(false);

  const visualIndex = dragging ? hoverIndex : routeIndex;

  const lastXRef = useRef(0);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return [];
    const trackRect = track.getBoundingClientRect();
    return itemRefs.current.map((node) => {
      if (!node) return { left: 0, width: 0 };
      const rect = node.getBoundingClientRect();
      return {
        left: rect.left - trackRect.left,
        width: rect.width,
      };
    });
  }, []);

  const placeOnIndex = useCallback(
    (index) => {
      const layout = measure();
      const item = layout[index];
      if (!item || !item.width) return;
      setPill({ left: item.left, width: item.width, ready: true });
    },
    [measure]
  );

  const movePillToClientX = useCallback(
    (clientX) => {
      const track = trackRef.current;
      const layout = measure();
      if (!track || layout.length === 0) return;

      const trackRect = track.getBoundingClientRect();
      const x = clientX - trackRect.left;
      lastXRef.current = clientX;
      const index = hitIndex(x, layout);
      const target = layout[index];
      const width = target.width;
      const minLeft = layout[0].left;
      const maxLeft = layout[layout.length - 1].left + layout[layout.length - 1].width - width;
      const left = clamp(x - width / 2, minLeft, maxLeft);

      setHoverIndex(index);
      setPill({ left, width, ready: true });
    },
    [measure]
  );

  useLayoutEffect(() => {
    if (draggingRef.current) return;
    setHoverIndex(routeIndex);
    placeOnIndex(routeIndex);
  }, [placeOnIndex, routeIndex, location.pathname]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return undefined;

    const sync = () => {
      if (!draggingRef.current) placeOnIndex(getNavIndex(location.pathname));
    };

    const observer = new ResizeObserver(sync);
    observer.observe(track);
    window.addEventListener("resize", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, [location.pathname, placeOnIndex]);

  const onPointerDown = (event) => {
    if (event.button !== 0) return;
    pointerIdRef.current = event.pointerId;
    startXRef.current = event.clientX;
    didDragRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (pointerIdRef.current !== event.pointerId) return;

    const delta = Math.abs(event.clientX - startXRef.current);
    if (!draggingRef.current) {
      if (delta < DRAG_THRESHOLD) return;
      draggingRef.current = true;
      didDragRef.current = true;
      setDragging(true);
    }

    event.preventDefault();
    movePillToClientX(event.clientX);
  };

  const goToClientX = (clientX, shouldNavigate) => {
    const layout = measure();
    const track = trackRef.current;
    if (!track || layout.length === 0) return;

    const index = hitIndex(clientX - track.getBoundingClientRect().left, layout);
    placeOnIndex(index);
    setHoverIndex(index);

    if (shouldNavigate && NAV_ITEMS[index] && index !== routeIndex) {
      navigate(NAV_ITEMS[index].path);
      return;
    }

    placeOnIndex(routeIndex);
    setHoverIndex(routeIndex);
  };

  const finishPointer = (event, shouldNavigate) => {
    if (pointerIdRef.current !== event.pointerId) return;
    pointerIdRef.current = null;

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const wasDragging = draggingRef.current;
    draggingRef.current = false;
    setDragging(false);

    if (!shouldNavigate) {
      didDragRef.current = false;
      placeOnIndex(routeIndex);
      setHoverIndex(routeIndex);
      return;
    }

    goToClientX(event.clientX, true);
    if (!wasDragging) {
      didDragRef.current = false;
    }
  };

  const onPointerUp = (event) => finishPointer(event, true);
  const onPointerCancel = (event) => finishPointer(event, false);

  return (
    <nav
      aria-label="Primary"
      className="fixed z-40 left-1/2 w-[min(94vw,40rem)] -translate-x-1/2"
      style={{
        bottom: "max(0.7rem, env(safe-area-inset-bottom))",
      }}
    >
      <ul
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        className={cn(
          "nav-dock surface surface-blur relative flex touch-none select-none items-center justify-between gap-0.5 rounded-full px-1.5 py-1.5 sm:justify-center sm:gap-1 sm:px-2",
          dragging ? "cursor-grabbing" : "cursor-grab"
        )}
        onDragStart={(event) => event.preventDefault()}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1.5 bottom-1.5 rounded-full bg-[var(--accent)] shadow-[0_6px_16px_rgba(250,202,34,0.28)]"
          style={{
            left: pill.left,
            width: pill.width,
            opacity: pill.ready ? 1 : 0,
            transition: dragging || reduced ? "none" : "left 280ms ease, width 280ms ease",
          }}
        />
        {NAV_ITEMS.map((item, index) => {
          const Icon = ICONS[item.id];
          const highlighted = visualIndex === index;
          return (
            <li key={item.id} className="relative z-10 flex-1 sm:flex-none">
              <NavLink
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                to={item.path}
                end={item.path === "/"}
                draggable={false}
                onDragStart={(event) => event.preventDefault()}
                onClick={(event) => {
                  if (didDragRef.current || event.detail !== 0) {
                    event.preventDefault();
                    didDragRef.current = false;
                  }
                }}
                aria-current={routeIndex === index ? "page" : undefined}
                className={cn(
                  "group flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-2.5 py-2 transition-colors duration-200 sm:min-w-[3.25rem] sm:px-3",
                  highlighted ? "text-[var(--accent-ink)]" : "text-[var(--text-muted)]"
                )}
              >
                <Icon
                  size={18}
                  strokeWidth={highlighted ? 2.4 : 1.8}
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "text-[11px] font-semibold tracking-wide sm:text-xs",
                    highlighted ? "inline" : "hidden md:inline"
                  )}
                >
                  {item.shortLabel || item.label}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
