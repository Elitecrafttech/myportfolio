import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { useDocumentHidden, usePrefersReducedMotion } from "../hooks/useMotion";

const STARS = [
  { top: "12%", left: "8%", size: 10, delay: "0s", duration: "3.2s" },
  { top: "22%", left: "78%", size: 8, delay: "0.8s", duration: "4s" },
  { top: "38%", left: "18%", size: 12, delay: "1.6s", duration: "3.6s" },
  { top: "48%", left: "88%", size: 9, delay: "2.4s", duration: "4.4s" },
  { top: "62%", left: "12%", size: 11, delay: "0.4s", duration: "3.8s" },
  { top: "70%", left: "64%", size: 8, delay: "1.2s", duration: "4.2s" },
  { top: "84%", left: "28%", size: 10, delay: "2s", duration: "3.4s" },
  { top: "16%", left: "52%", size: 7, delay: "2.8s", duration: "4.6s" },
];

const AmbientEffects = () => {
  const reduced = usePrefersReducedMotion();
  const hidden = useDocumentHidden();
  const blobA = useRef(null);
  const blobB = useRef(null);

  useEffect(() => {
    if (reduced) return undefined;

    const onMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      if (blobA.current) {
        blobA.current.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
      }
      if (blobB.current) {
        blobB.current.style.transform = `translate(${x * -0.01}px, ${y * -0.01}px)`;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const paused = hidden || reduced;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
      style={{ animationPlayState: paused ? "paused" : "running" }}
    >
      <div
        ref={blobA}
        className={`absolute right-[10%] top-[35%] h-80 w-80 rounded-full opacity-15 blur-3xl ${
          paused ? "" : "animate-pulse"
        }`}
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)",
        }}
      />
      <div
        ref={blobB}
        className={`absolute bottom-[25%] left-[20%] h-72 w-72 rounded-full opacity-10 blur-3xl ${
          paused ? "" : "animate-pulse"
        }`}
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)",
          animationDelay: "1s",
        }}
      />

      {STARS.map((star, index) => (
        <Star
          key={index}
          className={`absolute text-white ${paused ? "opacity-40" : "animate-ping"}`}
          size={star.size}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            color: index % 2 === 0 ? "rgba(196, 181, 253, 0.55)" : "rgba(255, 255, 255, 0.55)",
          }}
        />
      ))}
    </div>
  );
};

export default AmbientEffects;
