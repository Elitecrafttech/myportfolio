import React from 'react';
import pics from '../img/crafttech.jpeg';
import { FaUserTie } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TbWorldHeart } from "react-icons/tb";
import { FcIdea } from "react-icons/fc";
import { TbMoodNerd } from "react-icons/tb";



const Hero = () => {
  return (
    <div id='hero' className='anim w-full py-[100px] bg-[#FFFFFF]'>
      <div className='lg:ml-[220px] flex flex-col gap-[50px]'>
        <div className='flex flex-col md:flex-row gap-[40px] items-center justify-center'>
          <img draggable="false" src={pics} alt="" className='about md:h-[400px] h-[330px] rounded-[20px]'/>
          <div className='fadeInUp flex flex-col gap-[10px] p-[15px]'>
            <h1 className='font-bold text-[50px] md:text-[60px] text-[#D9DAE7]'>About Me</h1>
            <h2 className='elite text-[27px]'>Fullstack Developer</h2>
            <p className='w-[90vw] md:w-[40vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum vel fuga totam quibusdam, in corporis illum cum dolores sed quae placeat excepturi velit fugit doloribus quos libero repudiandae eius.lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio odit sed ad. Excepturi, ipsam voluptates laborum in, sed quam doloribus nihil.</p>
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[20px]  md:gap-[50px]'>
              <div className='flex flex-col gap-[20px]'>
                <p className='flex items-center gap-[15px]'><span className='text-[hsla(51,100%,50%,1)]'><FaUserTie /></span>Elitecraft Tech</p>
                <p className='flex items-center gap-[15px]'><span className='text-[hsla(51,100%,50%,1)]'><FaWhatsapp /></span>+234 704 171 7579</p>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <p className='flex items-center gap-[15px]'><span className='text-[hsla(51,100%,50%,1)]'><FaTelegram /></span>@Elitecraft_tech</p>
                <p className='flex items-center gap-[15px]'><span className='text-[hsla(51,100%,50%,1)]'><MdOutlineMarkEmailRead /></span>Elitecrafttech@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap md:items-center justify-center gap-[80px] md:gap-[20px] lg:gap-[85px]'>
          <div className='flex items-center gap-[20px] shadow-xl p-[60px] md:p-[20px] rounded-lg'>
            <span className='text-[hsla(51,100%,50%,1)] text-[30px]'><FaCalendarAlt /></span>
            <div>
              <h1 className='font-extrabold text-[25px]'>2550</h1>
              <h2>Working Hours</h2>
            </div>
          </div>
          <div className='flex items-center gap-[20px] shadow-xl p-[60px] md:p-[20px] rounded-lg'>
            <span className='text-[hsla(51,100%,50%,1)] text-[30px]'><TbWorldHeart /></span>
            <div>
              <h1 className='font-extrabold text-[25px]'>550</h1>
              <h2>Total projects</h2>
            </div>
          </div>
          <div className='flex items-center gap-[20px] shadow-xl p-[60px] md:p-[20px] rounded-lg'>
            <span className='text-[35px]'><FcIdea /></span>
            <div>
              <h1 className='font-extrabold text-[25px]'>12</h1>
              <h2>Years Journey</h2>
            </div>
          </div>
          <div className='flex items-center gap-[20px] shadow-xl p-[60px] md:p-[20px] rounded-lg'>
            <span className='text-[hsla(51,100%,50%,1)] text-[45px]'><TbMoodNerd /></span>
            <div>
              <h1 className='font-extrabold text-[25px]'>1500</h1>
              <h2>Total Client</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero