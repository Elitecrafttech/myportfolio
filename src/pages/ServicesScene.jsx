import React from "react";
import { BRAND } from "../data/site";
import { CAPABILITIES } from "../data/capabilities";
import { useDocumentTitle } from "../hooks/useMotion";
import CraftToolbox from "../component/CraftToolbox";

const ServicesScene = () => {
  useDocumentTitle(`Services & Technologies · ${BRAND.name}`);

  return (
    <section className="scene-scroll" aria-labelledby="services-title">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col gap-8 px-4 pb-6 pt-16 lg:px-8 lg:pt-12">
        <header className="max-w-3xl">
          <p className="inline-flex w-fit items-center rounded-full border border-[var(--label)]/30 bg-[var(--surface-strong)] px-3 py-1.5 text-sm font-semibold tracking-[0.22em] text-[var(--label)] shadow-[0_8px_20px_rgba(20,22,40,0.08)] backdrop-blur-md dark:border-transparent dark:bg-transparent dark:px-0 dark:py-0 dark:shadow-none">
            Services & Technologies
          </p>
          <h1 id="services-title" className="display mt-2 text-3xl font-bold sm:text-4xl">
            Capabilities that hold a product together.
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-black subpixel-antialiased sm:text-base dark:text-[#eeeae0]">
            Work is organised around the parts of a product that have to stay reliable: structure, data, interface, security, integration and release.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {CAPABILITIES.map((capability, index) => (
            <article
              key={capability.id}
              className="web surface flex flex-col gap-2 rounded-2xl p-4"
            >
              <img
                src={capability.icon}
                alt=""
                draggable="false"
                className="h-12 w-12 rounded-full object-contain"
              />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[var(--label)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="display text-base font-semibold leading-snug">
                {capability.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {capability.description}
              </p>
            </article>
          ))}
        </div>

        <CraftToolbox />
      </div>
    </section>
  );
};

export default ServicesScene;
