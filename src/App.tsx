// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
  const toggleMode = () => {
    // console.log(darkMode)
    setDarkMode(!darkMode);
  };

  return (
    <div className={`w-screen h-screen sm:overflow-x-hidden`}>
      <Navbar toggleMode={toggleMode} darkMode={darkMode} toggleMobileNav={toggleMobileNav}/>
      {isMobileNavOpen && <MobileNav toggleMobileNav={toggleMobileNav} toggleMode={toggleMode} darkMode={darkMode}/>}
      <HeroSection darkMode={darkMode}/>
    </div>
  )
}

export default App
