import React, { useEffect, useState } from 'react';
import pics from '../img/img01.jpg';
import { FaUserTie } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TbWorldHeart } from "react-icons/tb";
import { FcIdea } from "react-icons/fc";
import { TbMoodNerd } from "react-icons/tb";
import {  Star } from "lucide-react";
import { MdSystemUpdateAlt } from "react-icons/md";




const Hero = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          setIsVisible(true);
        }
      },
      {threshold: 0.1}
    );
    const section = document.getElementById("hero");
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


  return (
    <div id='hero' className=' w-full py-[100px] bg-[#1c213b]'>

      <div className=' absolute inset-0 overflow-hidden'>
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

          {/* Floating particles */}
      <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
          <Star
          key={i}
          className="absolute text-white animate-ping"
          size={Math.random() * 8 + 8}
          style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              right: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
          }}
          />
      ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>


      <div id='about' className='lg:ml-[220px] flex flex-col gap-[50px]'>
        <div data-aos="fade-up" className='flex flex-col md:flex-row gap-[40px] items-center justify-center'>
          <img data-aos="fade-up" draggable="false" src={pics} alt="" className='about md:h-[400px] h-[330px] rounded-[20px]'/>
          <div className='fadeInUp flex flex-col gap-[10px] p-[15px]'>
            <h1 data-aos="fade-up" className='font-bold text-[50px] md:text-[60px] text-[#727484]'>About Me</h1>
            <h2 data-aos="fade-up" className='elite text-[27px] text-[#9fa1bb]'>Fullstack Developer</h2>
            <p data-aos="fade-up" className='w-[90vw] md:w-[40vw] text-[#9fa1bb]'>
              I build more than just websites and apps—I craft digital 
              experiences that solve real problems. 
              From designing sleek user interfaces to architecting 
              robust backend systems,Bring ui/ux to live coding
               I thrive at the intersection 
              of creativity and logic. I believe code isn’t just a tool; 
              it’s a way to bring ideas to life, streamline workflows, 
              and make technology feel effortless.
              I build interfaces that not only look great but feel natural, intuitive, and built to last.
            </p>
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[20px]  md:gap-[50px]'>
              <div className='flex flex-col gap-[20px]'>
                <p data-aos="fade-up" className='flex items-center gap-[15px] text-[#9fa1bb]'><span className='text-[hsla(51,100%,50%,1)]'><FaUserTie /></span>Elitecraft Tech</p>
                <p data-aos="fade-up" className='flex items-center gap-[15px] text-[#9fa1bb]'><span className='text-[hsla(51,100%,50%,1)]'><FaWhatsapp /></span>+234 704 171 7579</p>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <p data-aos="fade-up" className='flex items-center text-[#9fa1bb] gap-[15px]'><span className='text-[hsla(51,100%,50%,1)]'><FaTelegram /></span>@Elitecraft_tech</p>
                <p data-aos="fade-up" className='flex items-center text-[#9fa1bb] gap-[15px]'><span className='text-[hsla(51,100%,50%,1)]'><MdOutlineMarkEmailRead /></span>Elitecrafttech@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap md:items-center justify-center gap-[80px] md:gap-[20px] lg:gap-[60px]'>
          <div data-aos="fade-up" className='flex items-center gap-[20px] shadow-xl p-[60px] md:p-[20px] rounded-lg bg-[#727484]'>
            <span className='text-[hsla(51,100%,50%,1)] text-[30px]'><FaCalendarAlt /></span>
            <div>
              <h1 className='font-extrabold text-[25px]'>24hrs</h1>
              <h2>Working Hours</h2>
            </div>
          </div>
          <div data-aos="fade-up" className='flex items-center gap-[20px] shadow-xl p-[60px] md:p-[20px] rounded-lg bg-[#727484]'>
            <span className='text-[hsla(51,100%,50%,1)] text-[30px]'><FcIdea /></span>
            <div>
              <h1 className='font-extrabold text-[25px]'>99.9%</h1>
              <h2>System Uptime</h2>
            </div>
          </div>
          <div data-aos="fade-up" className='flex items-center gap-[20px] shadow-xl p-[60px] md:p-[20px] rounded-lg bg-[#727484]'>
            <span className=' text-[hsla(51,100%,50%,1)] text-[35px]'><TbWorldHeart /></span>
            <div>
              <h1 className='font-extrabold text-[25px]'>24/7</h1>
              <h2>Active Support</h2>
            </div>
          </div>
          <div data-aos="fade-up" className='flex items-center gap-[20px] shadow-xl p-[60px] md:p-[20px] rounded-lg bg-[#727484]'>
            <span className='text-[hsla(51,100%,50%,1)] text-[45px]'><TbMoodNerd /></span>
            <div>
              <h1 className='font-extrabold text-[25px]'>100%</h1>
              <h2>Client Satisfaction</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero