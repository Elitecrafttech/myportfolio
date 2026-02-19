import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import './App.css';
import Menu from './component/Menu';
import Section from './component/Section';
import Hero from './component/Hero';
import CraftSkills from './component/CraftSkills';
import Contact from './component/Contact';
import Project from './component/Project';

function App() {
  React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="">
        <Menu/>
        <Section/>
        <Hero/>
        <CraftSkills />
        <Project />
        <Contact />

    </div>
  );
}

export default App;
