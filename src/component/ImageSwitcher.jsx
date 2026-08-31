import React, { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/useMotion";

const ImageSwitcher = ({ images, interval = 5000 }) => {
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!images || images.length === 0 || reduced) return undefined;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [images, interval, reduced]);

  if (!images || images.length === 0) return null;

  return (
    <div className="about-portrait relative h-[280px] w-full sm:h-[340px] lg:h-[420px]">
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={index === active ? "Portrait of the LitcraftIQ engineer" : ""}
          draggable="false"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSwitcher;
