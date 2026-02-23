import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import './App.css';
import Menu from './pages/Menu';
import Section from './pages/Section';
import Hero from './pages/Hero';
import CraftSkills from './pages/CraftSkills';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Services from './pages/Services';

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
    <div cclassName="flex">
      {/* Sidebar */}
        <Menu/>

        <main className="flex-1">
        <Section/>
        <Hero/>
        <CraftSkills />
        <Services />
        <Project />
        <Contact />

        </main>

    </div>
  );
}

export default App;
