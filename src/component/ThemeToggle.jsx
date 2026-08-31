import React, { useRef } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { usePrefersReducedMotion } from "../hooks/useMotion";

const REVEAL_MS = 3800;

const ThemeToggle = () => {
  const { isDark, setTheme } = useTheme();
  const reduced = usePrefersReducedMotion();
  const buttonRef = useRef(null);
  const busyRef = useRef(false);

  const onToggle = async () => {
    if (busyRef.current) return;
    const next = isDark ? "light" : "dark";

    if (reduced || typeof document.startViewTransition !== "function") {
      setTheme(next);
      return;
    }

    const button = buttonRef.current;
    const rect = button?.getBoundingClientRect();
    const toggleX = rect ? rect.left + rect.width / 2 : window.innerWidth - 40;
    const toggleY = rect ? rect.top + rect.height / 2 : 40;
    const startX = 0;
    const startY = window.innerHeight * 0.7;
    const endRadius = Math.hypot(
      Math.max(toggleX, window.innerWidth - toggleX),
      Math.max(toggleY, window.innerHeight - toggleY)
    );

    busyRef.current = true;
    document.documentElement.classList.add("theme-revealing");

    try {
      const transition = document.startViewTransition(() => {
        flushSync(() => setTheme(next));
      });

      await transition.ready;

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${startX}px ${startY}px)`,
            `circle(${Math.round(endRadius)}px at ${toggleX}px ${toggleY}px)`,
          ],
        },
        {
          duration: REVEAL_MS,
          easing: "cubic-bezier(0.22, 0.61, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );

      await transition.finished;
    } catch {
      setTheme(next);
    } finally {
      document.documentElement.classList.remove("theme-revealing");
      busyRef.current = false;
    }
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onToggle}
      className="fixed z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.78)] text-[#16120a] shadow-[var(--shadow)] surface-blur"
      style={{
        top: "max(0.9rem, env(safe-area-inset-top))",
        right: "max(0.9rem, env(safe-area-inset-right))",
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-icon" key={isDark ? "sun" : "moon"}>
        {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
      </span>
    </button>
  );
};

export default ThemeToggle;
