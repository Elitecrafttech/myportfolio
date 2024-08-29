import React from 'react'
import { GrCloudlinux } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";

const Resume = () => {
  return (
    <div className='anim w-full bg-[#F7F7F7] py-[100px]'>
        <div className='lg:ml-[220px] flex flex-col gap-[50px]'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-[40px] md:text-[50px] text-[#D9DAE7] '>My Resume</h1>
                <p className='elite text-[30px] font-medium md:text-[42px] md:font-[350]'>Education & Experience</p>
            </div>
            <div className='flex flex-wrap items-center justify-center md:justify-around gap-[30px]'>
                <div className='trans flex flex-col md:flex-row shadow-2xl p-[20px] rounded-lg gap-[10px] md:gap-[15px]'>
                    <div className='p-[5px] text-[25px]'><GrCloudlinux className=''/></div>
                    <div className='flex flex-col gap-[5px] md:gap-[15px]'>
                        <h1 className='font-semibold text-[20px]'>UX / UI Designer</h1>
                        <h1 className='font-medium text-[#46435E]'>Apple Inc (2017 - 2020)</h1>
                        <p className='w-[65vw] md:w-[22vw]'>Contrary the on way yollis pellentesque pellentesque feugiat risus met.</p>
                    </div>
                </div>
                <div className='trans flex flex-col md:flex-row shadow-2xl p-[20px] rounded-lg gap-[10px] md:gap-[15px]'>
                    <div className='p-[5px] text-[25px]'><FaPython /></div>
                    <div className='flex flex-col gap-[5px] md:gap-[15px]'>
                        <h1 className='font-semibold text-[20px]'>Web Developer</h1>
                        <h1 className='font-medium text-[#46435E]'>Ducor Ptv Ltd (2008 - 2014)</h1>
                        <p className='w-[65vw] md:w-[22vw]'>Contrary the on way yollis pellentesque pellentesque feugiat risus nunc.</p>
                    </div>
                </div>
                <div className='trans flex flex-col md:flex-row shadow-2xl p-[20px] rounded-lg gap-[10px] md:gap-[15px]'>
                    <div className='p-[5px] text-[25px]'><FaPython /></div>
                    <div className='flex flex-col gap-[5px] md:gap-[15px]'>
                        <h1 className='font-semibold text-[20px]'>python Developer</h1>
                        <h1 className='font-medium text-[#46435E]'>Google Inc (2015 - 2016)</h1>
                        <p className='w-[65vw] md:w-[22vw]'>Contrary the on way yollis pellentesque pellentesque feugiat risus nunc.</p>
                    </div>
                </div>
                <div className='trans flex flex-col md:flex-row shadow-2xl p-[20px] rounded-lg gap-[10px] md:gap-[15px]'>
                    <div className='p-[5px] text-[25px]'><FaGraduationCap /></div>
                    <div className='flex flex-col gap-[5px] md:gap-[15px]'>
                        <h1 className='font-semibold text-[20px]'>BSc in CSE</h1>
                        <h1 className='font-medium text-[#46435E]'>University of Enkha (2003 - 2006)</h1>
                        <p className='w-[65vw] md:w-[22vw]'>Contrary the on way yollis pellentesque pellentesque feugiat risus nunc.</p>
                    </div>
                </div>
                <div className='trans flex flex-col md:flex-row shadow-2xl p-[20px] rounded-lg gap-[10px] md:gap-[15px]'>
                    <div className='p-[5px] text-[25px]'><FaGraduationCap /></div>
                    <div className='flex flex-col gap-[5px] md:gap-[15px]'>
                        <h1 className='font-semibold text-[20px]'>MSc in CSE</h1>
                        <h1 className='font-medium text-[#46435E]'>University of Enkha (2007 - 2008)</h1>
                        <p className='w-[65vw] md:w-[22vw]'>Contrary the on way yollis pellentesque pellentesque feugiat risus nunc.</p>
                    </div>
                </div>
                <div className='trans flex flex-col md:flex-row shadow-2xl p-[20px] rounded-lg gap-[10px] md:gap-[15px]'>
                    <div className='p-[5px] text-[25px]'><FaFileContract /></div>
                    <div className='flex flex-col gap-[5px] md:gap-[15px]'>
                        <h1 className='font-semibold text-[20px]'>Enkha College</h1>
                        <h1 className='font-medium text-[#46435E]'>High School Diploma (2001 - 2003)</h1>
                        <p className='w-[65vw] md:w-[22vw]'>Contrary the on way yollis pellentesque pellentesque feugiat risus nunc.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume