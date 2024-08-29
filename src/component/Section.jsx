import React, {useState} from 'react';
import system from '../img/header.jpg';
import { MdEmail } from "react-icons/md";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdAddHomeWork } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GrBlockQuote } from "react-icons/gr";
import { GrContactInfo } from "react-icons/gr";
import { RiServiceFill } from "react-icons/ri";
import fb from '../img/fb.png';
import insta from '../img/insta.png'
import twitter from '../img/twitter.png'
import linkdln from '../img/linkdln.png'

const Section = () => {
  const [dropmenu, setDropmenu] = useState(false)
  function Dropmenu(){
    setDropmenu(!dropmenu)
  }

  return (
    <div className='w-[100%]  text-white ' style={{ background: `url(${system})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#0D0F1B',
    backgroundPosition: 'left',
    backgroundSize: '120%'
    }}>

      <div className='lg:ml-[220px] flex justify-between items-center p-[15px] md:p-0'>
        <div className='flex flex-col md:flex-row md:gap-[270px] gap-[5px] text-[17px] md:text-[20px]'>
        <p>+234 704 171 7579</p>
        <p> Elitecrafttech@gmail.com</p>
        </div>
        <h1 className='bg-[hsla(51,100%,50%,1)] py-[20px] px-[30px] text-[25px] hidden md:flex'><MdEmail /></h1>
        <button onClick={Dropmenu} className='md:hidden text-[30px] text-[hsla(51,100%,50%,1)] fixed right-0 bg-[#0D0F1B]'><RiMenuUnfold2Fill /></button>
    </div>
    {dropmenu&&
    <div className="bg-[#151931] text-white w-[250px] h-[100%] fixed z-[1] top-0 right-0 flex flex-col ">
      <button onClick={Dropmenu} className='text-[55px] text-[hsla(51,100%,50%,1)] self-end'><IoMdClose /></button>

      <ul className='flex flex-col gap-[25px] p-[30px] text-[22px]'>
        <a href="value" className='flex gap-[20px] items-center'>
          <MdAddHomeWork /> <li>Home</li>
        </a>
        <a href="value" className='flex gap-[20px] items-center'>
          <MdOutlineContactSupport /> <li>Enquiry</li>
        </a>
        <a href="value" className='flex gap-[20px] items-center'>
          <GrProjects /> <li>Project</li>
        </a>
        <a href="value" className='flex gap-[20px] items-center'>
          <GrBlockQuote /> <li>Feedback</li>
        </a>
        <a href="value" className='flex gap-[20px] items-center'>
          <GrContactInfo /> <li>About</li>
        </a>
        <a href="value" className='flex gap-[20px] items-center'>
          <RiServiceFill /> <li>Services</li>
        </a>
      </ul>
  </div>
    }
    <div className='lg:ml-[220px] flex flex-col lg:flex-row items-center h-[80vh] justify-between'>
      <div className='lg:pl-[100px] pt-[60px] md:pt-[40px] flex flex-col gap-[25px]'>
        <h1 className='elite font-semibold text-[30px] md:text-[64px]'>Elitecraft <span className='text-[hsla(51,100%,50%,1)]'>Tech</span></h1>
        <p className='text-[25px]'>Frontend Development</p>
        <div className='fadeInUp w-[80vw] md:w-[45vw]'>Crafting seamless user experiences from concept to deployment. I transform designs into dynamic, user-friendly interfaces, and bring ideas to life with efficient, scalable, and maintainable solutions."</div>
        <button className='fadeInUp self-start bg-[hsla(51,100%,50%,1)] p-[10px] w-[40vw] md:w-[20vw] lg:w-[13vw] rounded-lg text-black font-medium hover:text-white hover:lg:w-[15vw]'>Download CV</button>
      </div>
      <div className='p-[30px] flex lg:flex-col gap-[15px]'>
        <div className='p-[5px] border-[1.3px] border-solid border-zinc-600 rounded-md hover:border-[hsla(51,100%,50%,1)] hover:rounded-full'><a href="value"><img src={fb} alt="" className='h-[20px]'/></a></div>
        <div className='p-[5px] border-[1.3px] border-solid border-zinc-600 rounded-md hover:border-[hsla(51,100%,50%,1)] hover:rounded-full'><a href="value"><img src={insta} alt="" className='h-[20px]'/></a></div>
        <div className='p-[5px] border-[1.3px] border-solid border-zinc-600 rounded-md hover:border-[hsla(51,100%,50%,1)] hover:rounded-full'><a href="value"><img src={twitter} alt="" className='h-[20px]'/></a></div>
        <div className='p-[5px] border-[1.3px] border-solid border-zinc-600 rounded-md hover:border-[hsla(51,100%,50%,1)] hover:rounded-full'><a href="value"><img src={linkdln} alt="" className='h-[20px]'/></a></div>
      </div>
    </div>

    
    </div>
  )
}

export default Section