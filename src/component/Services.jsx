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
    <div id='Services' className='anim w-full py-[100px] bg-[#FFFFFF]'>
        <div className='lg:ml-[220px] flex flex-col gap-[50px]'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-[40px] md:text-[45px] text-[#D9DAE7]'>My Services</h1>
                <p className='elite text-[30px] font-medium md:text-[38px] md:font-[350]'>A brief of Offering Services</p>
            </div>
            <div className='flex flex-wrap gap-[30px] items-center justify-center md:justify-around'>
                <div className='web bg-[#FFFFFF] p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img draggable="false"  src={globe} alt=""  className='rounded-full'/>
                    <h1>Web design</h1>
                    <ul>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Figma to Static(HTML/CSS) </li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Javascript </li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Reactjs </li>
                    </ul>
                </div>
                <div className='web p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img draggable="false" src={gif} alt="" className='rounded-full'/>
                    <h1>Website Development</h1>
                    <ul>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> “front-end” </li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> “back-end” </li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> “full stack” </li>
                    </ul>
                </div>
                <div className='web p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img draggable="false" src={py} alt="" className='rounded-full'/>
                    <h1>Python</h1>
                    <ul>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> GUI Development</li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Web Development </li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Web Scraping </li>
                    </ul>
                </div>
                <div className='web p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img draggable="false" src={mobile} alt="" className='rounded-xl'/>
                    <h1>Mobile development</h1>
                    <ul>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Hybrid applications </li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Mobile web applications </li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Cross-platform apps </li>
                    </ul>
                </div>
                <div className='web p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img draggable="false" src={backend} alt="" className='rounded-full'/>
                    <h1>Software Development</h1>
                    <ul>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> API development </li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Application development </li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Mobile app development </li>
                    </ul>
                </div>
                <div className='web p-[30px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[80vw] md:w-[22vw]'>
                    <img draggable="false" src={btc} alt="" className='rounded-full'/>
                    <h1>Blockchain</h1>
                    <ul>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Public blockchain </li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Private blockchain</li>
                        <li className='flex items-center gap-[10px]'> <IoIosArrowForward /> Hybrid blockchain </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Services