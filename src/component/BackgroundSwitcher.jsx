import React, { useEffect, useRef, useState } from "react";
import { useActiveProject } from "../context/ActiveProjectContext";
import { useTheme } from "../context/ThemeContext";
import { useDocumentHidden, usePrefersReducedMotion } from "../hooks/useMotion";
import system from "../img/elite.jpg";

const FRAMES = [
  {
    mobile: "-170px 46.6%",
    desktop: "32% 42%",
  },
  {
    mobile: "60% 49%",
    desktop: "72% 40%",
  },
];

const BackgroundSwitcher = ({ image = system, interval = 5000 }) => {
  const { theme } = useTheme();
  const { project } = useActiveProject();
  const reducedMotion = usePrefersReducedMotion();
  const hidden = useDocumentHidden();
  const layerRef = useRef(null);
  const frameRef = useRef(0);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (hidden) return undefined;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, interval);
    return () => window.clearInterval(timer);
  }, [hidden, interval]);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer || reducedMotion) return undefined;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      layer.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.04)`;
      frameRef.current = window.requestAnimationFrame(animate);
    };

    const onMove = (event) => {
      const { innerWidth, innerHeight } = window;
      targetX = ((event.clientX / innerWidth) - 0.5) * 12;
      targetY = ((event.clientY / innerHeight) - 0.5) * 8;
    };

    frameRef.current = window.requestAnimationFrame(animate);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reducedMotion]);

  const accent = project?.accent || "#FACA22";
  const fadeMs = reducedMotion ? 400 : 1400;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        ref={layerRef}
        className="absolute inset-[-3%] will-change-transform"
        style={{ transform: "translate3d(0,0,0) scale(1.04)" }}
      >
        {FRAMES.map((frame, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-[#0D0F1B] bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: isMobile ? frame.mobile : frame.desktop,
              opacity: active === index ? 1 : 0,
              transition: `opacity ${fadeMs}ms ease-in-out`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background:
            theme === "light"
              ? `linear-gradient(90deg, var(--overlay-right) 0%, rgba(248,247,242,0.42) 48%, var(--overlay-left) 100%)`
              : `linear-gradient(90deg, rgba(8,10,18,0.08) 0%, rgba(8,10,18,0.32) 48%, rgba(8,10,18,0.78) 100%)`,
        }}
      />

      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse 50% 45% at 28% 42%, ${accent}26, transparent 62%)`,
        }}
      />
    </div>
  );
};

export default BackgroundSwitcher;
