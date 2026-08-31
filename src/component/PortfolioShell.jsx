import React from "react";
import BackgroundSwitcher from "./BackgroundSwitcher";
import AmbientEffects from "./AmbientEffects";
import ThemeToggle from "./ThemeToggle";
import BottomNavigation from "./BottomNavigation";
import SceneTransition from "./SceneTransition";

const PortfolioShell = () => {
  return (
    <div className="relative h-[100dvh] min-h-[100dvh] overflow-hidden text-[var(--text)]">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <BackgroundSwitcher />
      <AmbientEffects />
      <ThemeToggle />
      <div
        className="relative z-10 h-full"
        style={{
          paddingTop: "max(0.5rem, env(safe-area-inset-top))",
          paddingLeft: "max(0.75rem, env(safe-area-inset-left))",
          paddingRight: "max(0.75rem, env(safe-area-inset-right))",
          paddingBottom: "calc(4.85rem + env(safe-area-inset-bottom))",
        }}
      >
        <SceneTransition />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default PortfolioShell;
