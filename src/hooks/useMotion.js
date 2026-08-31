import { useEffect, useState } from "react";

const FINE_HOVER_QUERY = "(hover: hover) and (pointer: fine)";

export function useFinePointerHover() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia(FINE_HOVER_QUERY).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(FINE_HOVER_QUERY);
    const onChange = () => setEnabled(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return enabled;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function useDocumentHidden() {
  const [hidden, setHidden] = useState(
    typeof document !== "undefined" ? document.hidden : false
  );

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return hidden;
}

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
