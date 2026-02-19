import React, { useEffect, useState } from 'react';
import pics from '../img/img01.jpg';
import { FaUserTie, FaWhatsapp, FaTelegram, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbWorldHeart, TbMoodNerd } from "react-icons/tb";
import { FcIdea } from "react-icons/fc";
import { Star } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id='hero' className='w-full py-[100px] bg-[#1c213b]'>

      {/* Background gradients & floating stars */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute w-80 h-80 opacity-15 blur-3xl animate-pulse'
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '35%',
            right: '10%',
          }}
        />
        <div
          className="absolute w-72 h-72 opacity-10 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            bottom: '25%',
            left: '20%',
            animationDelay: '1s',
          }}
        />

        {/* Floating stars */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-white animate-ping"
              size={Math.random() * 8 + 8}
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

      {/* About Section */}
      <div id='about' className='lg:ml-[220px] flex flex-col gap-[50px]'>
        <div data-aos="fade-up" className='flex flex-col md:flex-row gap-[40px] items-center justify-center'>
          <img data-aos="fade-up" draggable="false" src={pics} alt="About Me" className='about md:h-[400px] h-[330px] rounded-[20px]'/>
          <div className='fadeInUp flex flex-col gap-[10px] p-[15px]'>
            <h1 data-aos="fade-up" className='font-bold text-[50px] md:text-[60px] text-[#727484]'>About Me</h1>
            <h2 data-aos="fade-up" className='elite text-[27px] text-[#9fa1bb]'>Fullstack Developer</h2>
            <p data-aos="fade-up" className='w-[90vw] md:w-[40vw] text-[#9fa1bb]'>
              I build more than just websites and apps—I craft digital experiences that solve real problems. 
              From designing sleek user interfaces to architecting robust backend systems, I thrive at the intersection 
              of creativity and logic. I believe code isn’t just a tool; it’s a way to bring ideas to life, streamline workflows, 
              and make technology feel effortless.
            </p>
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[20px] md:gap-[50px]'>
              <div className='flex flex-col gap-[20px]'>
                <p className='flex items-center gap-[15px] text-[#9fa1bb]'>
                  <span className='text-[hsla(51,100%,50%,1)]'><FaUserTie /></span>Elitecraft Tech
                </p>
                <p className='flex items-center gap-[15px] text-[#9fa1bb]'>
                  <span className='text-[hsla(51,100%,50%,1)]'><FaWhatsapp /></span>+234 704 171 7579
                </p>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <p className='flex items-center text-[#9fa1bb] gap-[15px]'>
                  <span className='text-[hsla(51,100%,50%,1)]'><FaTelegram /></span>@Elitecraft_tech
                </p>
                <p className='flex items-center text-[#9fa1bb] gap-[15px]'>
                  <span className='text-[hsla(51,100%,50%,1)]'><MdOutlineMarkEmailRead /></span>Elitecrafttech@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className='flex flex-wrap md:items-center justify-center gap-[80px] md:gap-[20px] lg:gap-[60px]'>
          <StatCard icon={<FaCalendarAlt />} value="24hrs" label="Working Hours" />
          <StatCard icon={<FcIdea />} value="99.9%" label="System Uptime" />
          <StatCard icon={<TbWorldHeart />} value="24/7" label="Active Support" />
          <StatCard icon={<TbMoodNerd />} value="100%" label="Client Satisfaction" />
        </div>
      </div>
    </div>
  );
};

// Small reusable stat card component
const StatCard = ({ icon, value, label }) => (
  <div className='flex items-center gap-[20px] shadow-xl p-[60px] md:p-[20px] rounded-lg bg-[#727484]'>
    <span className='text-[hsla(51,100%,50%,1)] text-[30px]'>{icon}</span>
    <div>
      <h1 className='font-extrabold text-[25px]'>{value}</h1>
      <h2>{label}</h2>
    </div>
  </div>
);

export default Hero;
