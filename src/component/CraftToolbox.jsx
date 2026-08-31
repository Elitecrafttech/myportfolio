import React, { useEffect, useState } from "react";
import { FaGitAlt, FaGithubSquare, FaPython, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiAxios,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiSocketdotio,
  SiSupabase,
} from "react-icons/si";
import { Code, Database, Sparkles, Wrench, Zap } from "lucide-react";
import { cn } from "../lib/utils";

const STACK_SKILLS = [
  { name: "React.js", level: 90, category: "frontend", icon: FaReact, color: "text-[#61dafb]" },
  { name: "Next.js", level: 80, category: "frontend", icon: RiNextjsFill, color: "text-[#0070F3]" },
  { name: "JavaScript", level: 80, category: "frontend", icon: RiJavascriptFill, color: "text-[#F0DB4F]" },
  { name: "TypeScript", level: 50, category: "frontend", icon: BiLogoTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: RiTailwindCssFill, color: "text-[purple]" },
  { name: "React Native", level: 75, category: "frontend", icon: TbBrandReactNative, color: "text-[#0081A3]" },
  { name: "Flutter", level: 70, category: "frontend", icon: SiFlutter, color: "text-[#027DFD]" },
  { name: "Node.js", level: 85, category: "backend", icon: RiNodejsLine, color: "text-[#68a063]" },
  { name: "Express.js", level: 85, category: "backend", icon: SiExpress, color: "text-[#0081A3]" },
  { name: "MongoDB", level: 80, category: "backend", icon: SiMongodb, color: "text-[#0081A3]" },
  { name: "Socket.io", level: 75, category: "backend", icon: SiSocketdotio, color: "text-[#0081A3]" },
  { name: "Python", level: 50, category: "backend", icon: FaPython, color: "text-[#0081A3]" },
  { name: "Supabase", level: 80, category: "backend", icon: SiSupabase, color: "text-[#0081A3]" },
  { name: "Firebase", level: 80, category: "backend", icon: RiFirebaseFill, color: "text-[#0081A3]" },
  { name: "Git", level: 90, category: "tools", icon: FaGitAlt, color: "text-[#0081A3]" },
  { name: "GitHub", level: 90, category: "tools", icon: FaGithubSquare, color: "text-[#0081A3]" },
  { name: "Axios", level: 85, category: "tools", icon: SiAxios, color: "text-[#0081A3]" },
  { name: "Docker", level: 70, category: "tools", icon: SiDocker, color: "text-[#0081A3]" },
];

const CATEGORIES = [
  { id: "all", name: "All Skills", icon: Sparkles },
  { id: "frontend", name: "Frontend", icon: Code },
  { id: "backend", name: "Backend", icon: Database },
  { id: "tools", name: "Tools & Libraries", icon: Wrench },
];

const CraftToolbox = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const skills = STACK_SKILLS.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <div id="myCraft" className="craft-copy">
      <div
        className={cn(
          "mb-5 text-center transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <div className="mb-2 inline-flex items-center gap-2">
          <Zap className="h-5 w-5 animate-pulse text-purple-400" />
          <span className="text-sm font-medium uppercase tracking-wider text-purple-400">
            Core Technologies
          </span>
          <Zap className="h-5 w-5 animate-pulse text-cyan-400 delay-1000" />
        </div>
        <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
          <span className="text-white">My Craft</span>
          <span className="project-gradient"> Toolbox / Stack Skills</span>
        </h2>
        <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
      </div>

      <div
        className={cn(
          "mb-5 flex flex-wrap justify-center gap-2 transition-all delay-200 duration-1000 sm:gap-3",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {CATEGORIES.map((category) => {
          const Icon = category.icon;
          const active = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                active ? "text-white" : "text-gray-300 hover:text-white"
              )}
            >
              {active && (
                <>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/80 to-cyan-500/80 blur-sm" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                </>
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {category.name}
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100" />
            </button>
          );
        })}
      </div>

      <div
        className={cn(
          "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="group relative transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-xl border border-gray-700/50 bg-gray-900/40 p-4 backdrop-blur-xl transition-all duration-300 group-hover:border-gray-600/70">
                <div className="absolute right-0 top-0 h-20 w-20 opacity-5">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 blur-xl" />
                </div>
                <div className="relative mb-3 flex items-center gap-3">
                  <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    <Icon className={skill.color} />
                  </div>
                  <h3 className="min-w-0 flex-1 truncate text-sm font-bold text-white transition-colors duration-300 group-hover:text-purple-300">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-medium text-gray-400">{skill.level}%</span>
                </div>
                <div className="relative">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800/50">
                    <div
                      className="h-2 origin-left rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                  <div
                    className="absolute top-0 h-2 rounded-full bg-gradient-to-r from-purple-400/50 to-cyan-400/50 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CraftToolbox;
