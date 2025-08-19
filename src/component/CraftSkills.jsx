import React, { useEffect, useState } from 'react'
import { FaReact, FaPython, FaGitAlt, FaGithubSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiNodejsLine, RiJavascriptFill, RiNextjsFill, RiFirebaseFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress, SiSocketdotio, SiMongodb, SiSupabase, SiAxios, SiFlutter, SiDocker } from "react-icons/si";
import { Code, Database, Wrench, Sparkles, Star, Zap } from "lucide-react";
import {cn} from "../lib/utils"

const myCraft = [
      // Frontend
    { name: "React.js", level: 90, category: "frontend", icon: <FaReact className='text-[#61dafb]'/> },
    { name: "Next.js", level: 80, category: "frontend", icon: <RiNextjsFill className='text-[#0070F3]'/> },
    { name: "JavaScript", level: 80, category: "frontend", icon: <RiJavascriptFill className='text-[#F0DB4F]'/> },
    { name: "TypeScript", level: 50, category: "frontend", icon: <BiLogoTypescript className='text-[#3178C6] '/> },
    { name: "Tailwind CSS", level: 90, category: "frontend", icon: <RiTailwindCssFill className=' text-[purple]'/> },
    { name: "React Native", level: 75, category: "frontend", icon: <TbBrandReactNative className='text-[#0081A3]'/> },
    { name: "Flutter", level: 70, category: "frontend", icon: <SiFlutter  className='text-[#027DFD]'/> },


    // Backend
    { name: "Node.js", level: 85, category: "backend", icon:<RiNodejsLine className='text-[#333333]'/> },
    { name: "Express.js", level: 85, category: "backend", icon: <SiExpress className='text-[#0081A3]'/> },
    { name: "MongoDB", level: 80, category: "backend", icon: <SiMongodb className='text-[#0081A3]'/> },
    { name: "Socket.io", level: 75, category: "backend", icon: <SiSocketdotio className='text-[#0081A3]'/> },
    { name: "Python", level: 50, category: "backend", icon: <FaPython className='text-[#0081A3]'/> },
    { name: "Supabase", level: 80, category: "backend", icon: <SiSupabase className='text-[#0081A3]'/> },
    { name: "Firebase", level: 80, category: "backend", icon: <RiFirebaseFill className='text-[#0081A3]'/> },


    // Tools
    { name: "Git", level: 90, category: "tools", icon: <FaGitAlt className='text-[#0081A3]'/> },
    { name: "GitHub", level: 90, category: "tools", icon: <FaGithubSquare className='text-[#0081A3]'/> },
    { name: "Axios", level: 85, category: "tools", icon: <SiAxios className='text-[#0081A3]'/> },
    { name: "Docker", level: 70, category: "tools", icon: <SiDocker className='text-[#0081A3]'/> },

];

const categories = [
  { id: "all", name: "All Skills", icon: Sparkles },
  { id: "frontend", name: "Frontend", icon: Code },
  { id: "backend", name: "Backend", icon: Database },
  { id: "tools", name: "Tools & Libraries", icon: Wrench },
];
const CraftSkills = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting){
                    setIsVisible(true);
                }
            },
            {threshold: 0.1}
        );
        const section = document.getElementById('myCraft');
        if(section) observer.observe(section);

        const handleMouseMove = (e) => {
            setMousePosition({x: e.clientX, y: e.clientY})
        };
        window.addEventListener('mousemove', handleMouseMove);

        return()=>{
            if(section) observer.unobserve(section);
            window.removeEventListener('mousemove', handleMouseMove)
        };
    }, []);

    const filteredCraft = myCraft.filter(
        (Craft)=> activeCategory === "all" || Craft.category === activeCategory
    );
  return (
    <section
        id='myCraft'
        className='w-full relative py-16 px-4 overflow-hidden bg-gray-950'>
        <div className='lg:ml-[220px] flex flex-col gap-[50px]'>

            <div className=' absolute inset-0 overflow-hidden'>

                <div className='absolute w-80 h-80 opacity-15 blur-3xl animate-pulse'
                style={{
                background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)',
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                top: '5%',
                right: '10%',
                }}
                />
                <div
                className="absolute w-72 h-72 opacity-10 blur-3xl animate-pulse"
                style={{
                    background: 'radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
                    transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
                    bottom: '10%',
                    left: '5%',
                    animationDelay: '1s',
                }}
                />

                {/* Floating particles */}
            <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
                <Star
                key={i}
                className="absolute text-purple-400/20 animate-ping"
                size={Math.random() * 6 + 4}
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.8}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                }}
                />
            ))}
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        </div>
        <div className='container mx-auto max-w-7xl relative z-10 h-full flex flex-col justify-center py-16'>
            {/* Section Header */}
            <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
                    <span className="text-purple-400 font-medium text-sm tracking-wider uppercase">Core Technologies</span>
                    <Zap className="w-5 h-5 text-cyan-400 animate-pulse delay-1000" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[30px] font-bold mb-4">
                    <span className="text-white">My Craft</span>
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient"> Toolbox / Stack Skills</span>
                </h2>

                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
            </div>

            {/* Category Filter */}
            <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {categories.map((category)=>{
                    const Icon = category.icon;
                    return (
                        <button 
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={cn(
                        "group relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden",
                        activeCategory === category.id
                            ? "text-white"
                            : "text-gray-300 hover:text-white"
                        )}
                        >
                            {activeCategory === category.id && (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-full blur-sm"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                            </>
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            {category.name}
                            </span>

                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </button>
                    )
                })}
            </div>
             {/* Skills Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {filteredCraft.map((craft, index)=>(
                    <div
                    key={craft.name}
                    className="group relative transition-all duration-500 hover:scale-105"
                    style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : '',
                    }}
                    >
                        {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 rounded-xl blur-lg transition-all duration-300" />
                    {/* Main Card */}
                    <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 group-hover:border-gray-600/70 transition-all duration-300 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-xl" />
                        </div>
                    

                    {/* Skill Header */}
                    <div className="relative flex items-center gap-3 mb-3">
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                            {typeof craft.icon === "string" && !craft.icon.includes('.') ? (
                            <span>{craft.icon}</span>
                            ) : (
                                <h1>{craft.icon}</h1>
                            // <img 
                            //     src={`/${craft.icon}`} 
                            //     alt={craft.name}
                            //     className="w-6 h-6 object-contain"
                            // />
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors duration-300 truncate">
                            {craft.name}
                            </h3>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">
                            {craft.level}%
                        </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="relative">
                    <div className="w-full bg-gray-800/50 h-2 rounded-full overflow-hidden">
                        <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 origin-left transition-all duration-1000 ease-out"
                        style={{
                            width: isVisible ? `${craft.level}%` : '0%',
                            animationDelay: `${index * 100}ms`
                        }}
                        />
                    </div>

                    {/* Animated glow on progress bar */}
                    <div
                        className="absolute top-0 h-2 rounded-full bg-gradient-to-r from-purple-400/50 to-cyan-400/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ width: `${craft.level}%` }}
                    />
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default CraftSkills