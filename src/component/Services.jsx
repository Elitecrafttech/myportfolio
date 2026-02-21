import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import gif from "../img/internet.gif";
import py from "../img/py.gif";
import mobile from "../img/mobile.gif";
import btc from "../img/bitcoin.gif";
import backend from "../img/backend.gif";
import globe from "../img/globe.gif";

const Services = () => {
  return (
    <div id='Services' className=' w-full py-[100px] bg-[#1c213b]'>
        <div className='lg:ml-[220px] flex flex-col gap-[50px]'>
            <div className='flex flex-col items-center justify-center'>
                <h1 data-aos="fade-up" className='font-bold text-[40px] md:text-[45px] text-[#727484]'>My Services</h1>
                <p data-aos="fade-up" className='elite text-[30px] font-medium md:text-[38px] md:font-[350] text-[#9fa1bb]'>A brief of Offering Services</p>
            </div>
            <div className='flex flex-wrap gap-[30px] text-[#e4e6f3] items-center justify-center md:justify-around'>
                <div className='web bg-[#727484]  p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img data-aos="fade-up" draggable="false"  src={globe} alt=""  className='rounded-full'/>
                    <h1 data-aos="fade-up">Web design</h1>
                    <ul>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Figma to Static(HTML/CSS) </li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Javascript </li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Reactjs </li>
                    </ul>
                </div>
                <div className='web p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img data-aos="fade-up" draggable="false" src={gif} alt="" className='rounded-full'/>
                    <h1 data-aos="fade-up">Website Development</h1>
                    <ul>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> “front-end” </li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> “back-end” </li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> “full stack” </li>
                    </ul>
                </div>
                <div className='web p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img data-aos="fade-up" draggable="false" src={py} alt="" className='rounded-full'/>
                    <h1 data-aos="fade-up">Python</h1>
                    <ul>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> GUI Development</li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Web Development </li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Web Scraping </li>
                    </ul>
                </div>
                <div className='web p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img data-aos="fade-up" draggable="false" src={mobile} alt="" className='rounded-xl'/>
                    <h1 data-aos="fade-up">Mobile development</h1>
                    <ul>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Hybrid applications </li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Mobile web applications </li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Cross-platform apps </li>
                    </ul>
                </div>
                <div className='web p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img data-aos="fade-up" draggable="false" src={backend} alt="" className='rounded-full'/>
                    <h1 data-aos="fade-up">Software Development</h1>
                    <ul>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> API development </li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Application development </li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Mobile app development </li>
                    </ul>
                </div>
                <div className='web p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img data-aos="fade-up" draggable="false" src={btc} alt="" className='rounded-full'/>
                    <h1 data-aos="fade-up">Blockchain</h1>
                    <ul>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Public blockchain </li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Private blockchain</li>
                        <li data-aos="fade-up" className='flex items-center gap-[10px]'> <IoIosArrowForward /> Hybrid blockchain </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Services