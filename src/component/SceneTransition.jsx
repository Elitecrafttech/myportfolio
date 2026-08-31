import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { getNavIndex } from "../data/site";
import { reducedSceneVariants, SCENE_DURATION, SCENE_EASE, sceneVariants } from "../lib/motion";
import HomeScene from "../pages/HomeScene";
import AboutScene from "../pages/AboutScene";
import ProjectsScene from "../pages/ProjectsScene";
import ServicesScene from "../pages/ServicesScene";
import ContactScene from "../pages/ContactScene";

const SceneTransition = () => {
  const location = useLocation();
  const reduced = useReducedMotion();
  const previousPath = useRef(location.pathname);
  const direction = getNavIndex(location.pathname) - getNavIndex(previousPath.current);

  useEffect(() => {
    previousPath.current = location.pathname;
  }, [location.pathname]);

  return (
    <div className="relative h-full min-h-0">
      <AnimatePresence mode="wait" initial={false} custom={direction || 1}>
        <motion.div
          key={location.pathname}
          role="main"
          id="main-content"
          tabIndex={-1}
          custom={direction || 1}
          variants={reduced ? reducedSceneVariants : sceneVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: reduced ? 0.2 : SCENE_DURATION,
            ease: SCENE_EASE,
          }}
          className="absolute inset-0 overflow-hidden"
        >
          <Routes location={location}>
            <Route path="/" element={<HomeScene />} />
            <Route path="/about" element={<AboutScene />} />
            <Route path="/projects" element={<ProjectsScene />} />
            <Route path="/services" element={<ServicesScene />} />
            <Route path="/contact" element={<ContactScene />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SceneTransition;
