export const SCENE_EASE = [0.22, 1, 0.36, 1];
export const SCENE_DURATION = 0.55;
export const PROJECT_DURATION = 0.7;

export const sceneVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 36 : -36,
    y: 14,
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -28 : 28,
    y: -18,
  }),
};

export const reducedSceneVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export const introVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: SCENE_EASE,
      staggerChildren: 0.08,
    },
  },
};

export const introItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: SCENE_EASE } },
};
