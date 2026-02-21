
import React, { useState } from 'react';
import system from '../img/elite.jpg';
import { MdEmail, MdAddHomeWork, MdOutlineContactSupport } from "react-icons/md";
import { RiMenuUnfold2Fill, RiServiceFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { GrProjects, GrBlockQuote, GrContactInfo } from "react-icons/gr";
import fb from '../img/fb.png';
import insta from '../img/insta.png';
import twitter from '../img/twitter.png';
import linkdln from '../img/linkdln.png';

const Section = () => {
  const [dropmenu, setDropmenu] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-visible text-white">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${system})`,
          backgroundColor: '#0D0F1B',
          backgroundPositionX: '170px',
          backgroundPositionY: '46.6%',
        }}
      />

      {/* Top contact + email section */}
      <div className="relative lg:ml-[220px] flex justify-between items-center p-[15px] md:p-0 z-20">
        <div className="flex flex-col md:flex-row md:gap-[270px] gap-[5px] text-[17px] md:text-[20px]">
          <p
            data-aos="zoom-out-down"
            data-aos-duration="3000"
            data-aos-delay="1000"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
          >
            +234 915 958 5211
          </p>
          <p
            data-aos="zoom-out-down"
            data-aos-duration="3000"
            data-aos-delay="1000"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
          >
            Elitecrafttech@gmail.com
          </p>
        </div>

        <h1
          data-aos="zoom-out-down"
          data-aos-duration="3000"
          data-aos-delay="1000"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          className="bg-[hsla(51,100%,50%,1)] py-[20px] px-[30px] rounded text-[25px] hidden md:flex hover:rounded-2xl"
        >
          <MdEmail />
        </h1>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setDropmenu(!dropmenu)}
          className="md:hidden fixed top-5 right-5 z-50 p-2 bg-[#0D0F1B] rounded text-[30px] text-[hsla(51,100%,50%,1)]"
        >
          <RiMenuUnfold2Fill />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[250px] bg-[#151931] z-40 flex flex-col transform transition-transform duration-300 ${
          dropmenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setDropmenu(false)}
          className="self-end text-[55px] text-[hsla(51,100%,50%,1)] p-2"
        >
          <IoMdClose />
        </button>

        <ul className="flex flex-col gap-[25px] p-[30px] text-[22px]">
          <li className="flex gap-[20px] items-center">
            <MdAddHomeWork /> <a href="/">Home</a>
          </li>
          <li className="flex gap-[20px] items-center">
            <MdOutlineContactSupport /> <a href="/#contact">Enquiry</a>
          </li>
          <li className="flex gap-[20px] items-center">
            <GrProjects /> <a href="/#projects">Project</a>
          </li>
          <li className="flex gap-[20px] items-center">
            <GrBlockQuote /> <a href="value">Feedback</a>
          </li>
          <li className="flex gap-[20px] items-center">
            <GrContactInfo /> <a href="/#about">About</a>
          </li>
          <li className="flex gap-[20px] items-center">
            <RiServiceFill /> <a href="/#Services">Services</a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="relative lg:ml-[220px] flex flex-col lg:flex-row items-center h-[80vh] justify-between z-20">
        {/* Left */}
        <div className="lg:pl-[100px] pt-[60px] md:pt-[40px] flex flex-col gap-[25px]">
          <h1 className="elite font-semibold text-[30px] md:text-[64px]">
            Elitecraft <span className="text-[hsla(51,100%,50%,1)]">Tech</span>
          </h1>

          <p
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            data-aos-delay="1000"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            className="text-[25px]"
          >
            Frontend Development
          </p>

          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            data-aos-delay="1000"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            className="fadeInUp w-[80vw] md:w-[45vw]"
          >
            From concept to launch, I bring concepts to life through thoughtful code
            and creative engineering. I build products that feel effortless and
            perform flawlessly. I turn designs into interactive, modern solutions,
            delivering aesthetics with technical precision.
          </div>

          <a
            href="/MyResumeCraftTech.pdf"
            download="MyResumeCraftTech.pdf"
            data-aos="zoom-out"
            data-aos-duration="3000"
            data-aos-delay="2000"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            className="fadeInUp self-start bg-[hsla(51,100%,50%,1)] p-[10px] w-[40vw] md:w-[20vw] lg:w-[13vw] rounded-lg text-black font-medium hover:text-white hover:lg:w-[15vw] text-center"
          >
            Download Resume
          </a>
        </div>

        {/* Right */}
        <div className="p-[30px] flex lg:flex-col gap-[15px]">
          {[fb, insta, twitter, linkdln].map((icon, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'}
              data-aos-duration="1000"
              data-aos-delay={`${i * 500}`}
              data-aos-easing="ease-in-out-sine"
              data-aos-mirror="true"
              className="p-[5px] border-[1.3px] border-solid border-zinc-600 rounded-md hover:border-[hsla(51,100%,50%,1)] hover:rounded-full"
            >
              <a href="value">
                <img src={icon} alt="social" className="h-[20px]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;