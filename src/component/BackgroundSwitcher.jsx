import React, { useEffect, useState } from "react";

const BackgroundSwitcher = ({
  image,
  interval = 4000,
}) => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); // < lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Only switch on mobile
  useEffect(() => {
    if (!isMobile) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, interval);

    return () => clearInterval(timer);
  }, [interval, isMobile]);

  return (
    <div className="absolute inset-0 w-full">

      {/* STYLE 1 */}
      <div
        className={`
          absolute inset-0 transition-all duration-1000 ease-in-out
          bg-no-repeat bg-cover
          sm:bg-center
          bg-[position:-170px_46.6%]
          md:bg-[position:120px_46.6%]
          lg:bg-[position:170px_46.6%]
          ${isMobile ? (active === 0 ? "opacity-100" : "opacity-0") : "opacity-100"}
        `}
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: "#0D0F1B",
        }}
      />

      {/* STYLE 2 (Only mobile visible) */}
      {isMobile && (
        <div
          className={`
            absolute inset-0 transition-all duration-1000 ease-in-out
            bg-no-repeat
            bg-[position:60%_49%]
            md:bg-[position:53%_37%]
            lg:bg-cover
            lg:bg-[position:170px_46.6%]
            ${active === 1 ? "opacity-100" : "opacity-0"}
          `}
          style={{
            backgroundImage: `url(${image})`,
            backgroundColor: "#0D0F1B",
          }}
        />
      )}

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-black/60
          md:bg-black/30
          lg:bg-black/0
          transition-all duration-500
        "
      />
    </div>
  );
};

export default BackgroundSwitcher;