import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
  getStoredProjectIndex,
  PROJECTS,
  storeProjectIndex,
  wrapProjectIndex,
} from "../data/projects";

const ActiveProjectContext = createContext(null);

export function ActiveProjectProvider({ children }) {
  const [index, setIndexState] = useState(getStoredProjectIndex);

  const setIndex = useCallback((next) => {
    setIndexState((current) => {
      const resolved =
        typeof next === "function" ? next(current) : next;
      const wrapped = wrapProjectIndex(resolved);
      storeProjectIndex(wrapped);
      return wrapped;
    });
  }, []);

  const value = useMemo(() => {
    const project = PROJECTS[index];
    return {
      index,
      setIndex,
      project,
      count: PROJECTS.length,
    };
  }, [index, setIndex]);

  return (
    <ActiveProjectContext.Provider value={value}>
      {children}
    </ActiveProjectContext.Provider>
  );
}

export function useActiveProject() {
  const context = useContext(ActiveProjectContext);
  if (!context) {
    throw new Error("useActiveProject must be used within ActiveProjectProvider");
  }
  return context;
}
