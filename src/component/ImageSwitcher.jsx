import React, { useEffect, useState } from "react";

const ImageSwitcher = ({ images, interval = 4000 }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative md:h-[400px] h-[330px] w-full max-w-[450px]">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="profile"
          draggable="false"
          className={`
            absolute inset-0 w-full h-full object-cover rounded-[20px]
            transition-opacity duration-1000 ease-in-out
            ${active === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        />
      ))}
    </div>
  );
};

export default ImageSwitcher;