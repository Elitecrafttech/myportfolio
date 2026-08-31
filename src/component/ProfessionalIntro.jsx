import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "../data/site";
import { introItem, introVariants } from "../lib/motion";

const ProfessionalIntro = () => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="relative z-10 flex w-full flex-col justify-center gap-4 py-2 lg:max-w-[38rem] lg:pl-2"
      variants={reduced ? undefined : introVariants}
      initial={reduced ? false : "hidden"}
      animate="show"
    >
      <motion.p
        variants={introItem}
        className="inline-flex w-fit items-center rounded-full border border-[var(--label)]/30 bg-[var(--surface-strong)] px-3.5 py-1.5 text-xs font-semibold tracking-[0.28em] text-[var(--label)] shadow-[0_8px_20px_rgba(20,22,40,0.08)] backdrop-blur-md sm:text-sm dark:border-[var(--accent)]/40 dark:bg-[var(--accent-ink)]/88 dark:text-[var(--accent)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
      >
        {BRAND.eyebrow}
      </motion.p>
      <motion.h1
        variants={introItem}
        className="display text-[2rem] font-bold leading-[1.05] text-[var(--text)] sm:text-5xl lg:text-[3.35rem]"
      >
        {BRAND.title}
      </motion.h1>
      <motion.p
        variants={introItem}
        className="text-sm font-medium text-[var(--text)] sm:text-base"
      >
        {BRAND.specialization}
      </motion.p>
      <motion.p
        variants={introItem}
        className="max-w-[36rem] text-sm leading-relaxed text-[#1c1912] sm:text-[0.95rem] dark:text-[#eeeae0]"
      >
        {BRAND.description}
      </motion.p>
      <motion.p
        variants={introItem}
        className="text-sm font-medium leading-relaxed text-[var(--text)] sm:text-base"
      >
        {BRAND.supporting}
      </motion.p>
      <motion.div
        variants={introItem}
        className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"
      >
        <Link
          to="/projects"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-ink)]"
        >
          Explore Projects
        </Link>
        <Link
          to="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-5 text-sm font-semibold text-[var(--text)]"
        >
          Start a Conversation
        </Link>
      </motion.div>
      <motion.a
        variants={introItem}
        href={BRAND.resumeHref}
        download={BRAND.resumeFilename}
        className="self-start text-sm text-[var(--text-muted)] underline-offset-4 hover:text-[var(--text)] hover:underline"
      >
        Download resume
      </motion.a>
    </motion.div>
  );
};

export default ProfessionalIntro;
