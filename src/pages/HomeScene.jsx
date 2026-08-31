import React from "react";
import ProfessionalIntro from "../component/ProfessionalIntro";
import ProjectStage from "../component/ProjectStage";
import { useDocumentTitle } from "../hooks/useMotion";
import { BRAND } from "../data/site";

const HomeScene = () => {
  useDocumentTitle(`${BRAND.name} · Full-Stack Product Engineer`);

  return (
    <section className="scene-scroll h-full" aria-label="Home">
      <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-6 px-3 pb-4 pt-14 lg:flex-row lg:items-stretch lg:gap-8 lg:px-8 lg:pt-10">
        <div className="order-2 flex min-h-[22rem] w-full flex-1 flex-col lg:order-1 lg:min-h-[26rem]">
          <ProjectStage />
        </div>
        <div className="order-1 relative flex w-full shrink-0 lg:order-2 lg:w-[42%] lg:items-center lg:overflow-y-auto">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-6 -left-4 -right-3 hidden rounded-3xl bg-gradient-to-l from-white/80 via-white/45 to-transparent dark:from-black/75 dark:via-black/40 dark:to-transparent lg:block"
          />
          <ProfessionalIntro />
        </div>
      </div>
    </section>
  );
};

export default HomeScene;
