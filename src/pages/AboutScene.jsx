import React, { useMemo } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { TbMoodNerd, TbWorldHeart } from "react-icons/tb";
import { BRAND, CONTACT } from "../data/site";
import { PRINCIPLES } from "../data/capabilities";
import { useDocumentTitle } from "../hooks/useMotion";
import ImageSwitcher from "../component/ImageSwitcher";
import pics from "../img/bg.jpg";
import myimg1 from "../img/img01.jpg";
import myimg2 from "../img/img0.jpg";

const STATS = [
  { value: "24hrs", label: "Working Hours", icon: FaCalendarAlt },
  { value: "99.9%", label: "System Uptime", icon: FcIdea },
  { value: "24/7", label: "Active Support", icon: TbWorldHeart },
  { value: "100%", label: "Client Satisfaction", icon: TbMoodNerd },
];

const AboutScene = () => {
  useDocumentTitle(`About · ${BRAND.name}`);
  const portraits = useMemo(() => [pics, myimg2, myimg1], []);

  return (
    <section className="scene-scroll" aria-labelledby="about-title">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col gap-10 px-4 pb-6 pt-16 md:px-8 md:pt-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-center">
          <div className="order-2 flex flex-col gap-5 md:order-1">
            <p className="text-xs font-semibold tracking-[0.28em] text-[var(--label)]">
              About
            </p>
            <h1 id="about-title" className="display text-3xl font-bold leading-tight text-[var(--text)] sm:text-4xl">
              Engineering complete products, not isolated screens.
            </h1>
            <div className="space-y-3 text-sm font-medium leading-relaxed text-black subpixel-antialiased sm:text-base dark:text-white">
              <p>
                I build complete digital products, not isolated screens. My work connects product strategy, system architecture, data design, interface engineering and backend development into one reliable experience.
              </p>
              <p>
                I focus on maintainable design systems, secure integrations, clear data structures and thorough verification before release. Whether improving an existing platform or building from the ground up, I turn complex requirements into products that are understandable, scalable and ready for real users.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {PRINCIPLES.map((principle) => (
                <li
                  key={principle}
                  className="flex items-start gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {principle}
                </li>
              ))}
            </ul>

            <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[var(--text-muted)]">Studio</dt>
                <dd className="font-medium">{BRAND.name}</dd>
              </div>
              <div>
                <dt className="text-[var(--text-muted)]">Email</dt>
                <dd>
                  <a className="font-medium underline-offset-4 hover:underline" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[var(--text-muted)]">Availability</dt>
                <dd className="font-medium">{CONTACT.availability}</dd>
              </div>
            </dl>
          </div>

          <div className="order-1 mx-auto w-full max-w-md md:order-2">
            <ImageSwitcher images={portraits} />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <li
                key={stat.label}
                className="flex items-center gap-4 rounded-xl bg-[#727484] px-5 py-4 text-white shadow-lg"
              >
                <span className="text-[30px] text-[var(--accent)]">
                  <Icon />
                </span>
                <div>
                  <p className="text-[25px] font-extrabold leading-none">{stat.value}</p>
                  <p className="mt-1 text-sm">{stat.label}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AboutScene;
