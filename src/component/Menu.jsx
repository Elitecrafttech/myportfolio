import React from 'react';
import pics from '../img/bg.jpg';
import { MdAddHomeWork } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GrBlockQuote } from "react-icons/gr";
import { GrContactInfo } from "react-icons/gr";
import { RiServiceFill } from "react-icons/ri";




const menu = () => {
  return (
    <div className="bg-[#151931] text-white w-[200px] h-screen max-h-screen fixed z-[1] top-0 left-0 overflow-hidden hidden lg:flex flex-col gap-[15px] ">
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
        <ul className='flex flex-col gap-[20px] p-[30px]'>
          <a
           data-aos="fade-right"
           data-aos-duration="1000"
           data-aos-delay="0"
           data-aos-easing="ease-in-out-sine"
           data-aos-mirror="true"
           href="value" className='flex gap-[15px] items-center'>
          <MdAddHomeWork /> <li>Home</li>
          </a>
          <a
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
           href="value" className='flex gap-[15px] items-center'>
            <MdOutlineContactSupport /> <li>Enquiry</li>
          </a>
          <a
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="1000"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
           href="value" className='flex gap-[15px] items-center'>
            <GrProjects /> <li>Project</li>
          </a>
          <a
           data-aos="fade-right"
           data-aos-duration="1000"
           data-aos-delay="1500"
           data-aos-easing="ease-in-out-sine"
           data-aos-mirror="true"
           href="value" className='flex gap-[15px] items-center'>
            <GrBlockQuote /> <li>Feedback</li>
          </a>
         
            <a
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="2000"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
             href="/#hero" className='flex gap-[15px] items-center'><GrContactInfo /> <li>About</li></a>
          
          <a
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="2500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
           href="/#Services" className='flex gap-[15px] items-center'>
            <RiServiceFill /> <li>Services</li>
          </a>
        </ul>
        <p className='text-center'>Copyright @ Elitecraft</p>
    </div>
  )
}

export default menu