import React, { useEffect, useState } from "react";
import { useDocumentHidden, usePrefersReducedMotion } from "../hooks/useMotion";

const ImageSwitcher = ({ images, interval = 5000 }) => {
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();
  const hidden = useDocumentHidden();
  const count = images?.length ?? 0;

  useEffect(() => {
    if (count < 2 || reduced || hidden) return undefined;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, interval);
    return () => window.clearInterval(timer);
  }, [count, interval, reduced, hidden]);

  if (!images || count === 0) return null;

  return (
    <div className="relative h-[280px] w-full overflow-hidden sm:h-[340px] lg:h-[420px]">
      {images.map((img, index) => {
        const isActive = active === index;
        return (
          <div
            key={img}
            className="about-portrait absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : 0,
              transform: "translateZ(0)",
              transition: reduced ? "none" : "opacity 1000ms ease-in-out",
            }}
          >
            <img
              src={img}
              alt={isActive ? "Portrait of the LitcraftIQ engineer" : ""}
              draggable="false"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSwitcher;
