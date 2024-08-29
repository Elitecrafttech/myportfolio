import React from 'react';
import pics from '../img/crafttech.jpeg';
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GrBlockQuote } from "react-icons/gr";
import { GrContactInfo } from "react-icons/gr";
import { RiServiceFill } from "react-icons/ri";
// import {Link} from 'react-router-dom';




const menu = () => {
  return (
    <div className="bg-[#151931] text-white w-[200px] h-[100%] fixed z-[1] top-0 left-0 overflow-x-hidden hidden lg:flex flex-col gap-[15px] ">
      <div className='bg-[hsla(51,100%,50%,1)] text-center hidden md:block'>
      <a href="value">
        <img src={pics} alt=""/>
        <span className='tracking-[6px] text-[27px] text-black'>Elitecraft</span>
      </a>
      </div>
        <ul className='flex flex-col gap-[20px] p-[30px]'>
          <a href="value" className='flex gap-[15px] items-center'>
            <IoHomeSharp /> <li>Home</li>
          </a>
          <a href="value" className='flex gap-[15px] items-center'>
            <MdOutlineContactSupport /> <li>Enquiry</li>
          </a>
          <a href="value" className='flex gap-[15px] items-center'>
            <GrProjects /> <li>Project</li>
          </a>
          <a href="value" className='flex gap-[15px] items-center'>
            <GrBlockQuote /> <li>Feedback</li>
          </a>
          {/* <a href="/#hero" className='flex gap-[15px] items-center'> */}
            <a href="/#hero" className='flex gap-[15px] items-center'><GrContactInfo /> <li>About</li></a>
          {/* </a> */}
          <a href="/#Services" className='flex gap-[15px] items-center'>
            <RiServiceFill /> <li>Services</li>
          </a>
        </ul>
        <p className='text-center'>Copyright @ Elitecraft</p>
    </div>
  )
}

export default menu