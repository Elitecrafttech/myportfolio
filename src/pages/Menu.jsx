import React from 'react';
import pics from '../img/bg.jpg';
import { MdAddHomeWork } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GiStarsStack } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";



const menu = () => {
  return (
    <div className="bg-[#151931] text-white w-[200px] h-screen max-h-screen fixed z-[1] top-0 left-0 overflow-hidden hidden lg:inline-flex flex-col justify-between">
      <div className='flex flex-col gap-[15px] '>
      <div className='bg-[hsla(51,100%,50%,1)] text-center hidden md:block'>
      <a href="value" className='flex flex-col items-center'>
        <img
           data-aos="flip-down"
           data-aos-duration="2500"
           data-aos-delay="1500"
           data-aos-easing="ease-in-out-sine"
           data-aos-mirror="true"
         src={pics} alt="" className='w-full h-auto object-cover'/>
        <span
        data-aos="zoom-out-left"
        data-aos-duration="3000"
        data-aos-delay="2300"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
         className='tracking-[6px] text-[27px] text-black'>Elitecraft</span>
      </a>
      </div>
      

        <ul className='flex flex-col gap-[20px] lg:gap-[10px] lg:px-[30px] lg:py-0 p-[30px]'>
        <li
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true">
              <a href="/" 
              className='flex gap-[20px] items-center'><MdAddHomeWork /> Home</a>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true">
              <a href="/#contact" 
              className='flex gap-[20px] items-center'><MdOutlineContactSupport /> Enquiry</a>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true">
              <a href="/#projects" 
              className='flex gap-[20px] items-center'><GrProjects /> Project</a>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true">
              <a href="/#myCraft" 
              className='flex gap-[20px] items-center'><GiStarsStack /> Stack/Tool</a>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true">
              <a href="/#about" 
              className='flex gap-[20px] items-center'><GrContactInfo /> About</a>
          </li>
        </ul>
      </div>
        <p className='text-center'>{new Date().getFullYear()} &copy; Elitecrafttech</p>
    </div>
  )
}

export default menu