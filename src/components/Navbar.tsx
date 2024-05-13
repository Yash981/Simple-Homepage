import AlaradoLogo from '/Images/alarado-icon-homepage.svg'
import AlaradoLogoDark from '/Images/alarado-icon-homepage-dark.svg'
import MoonFillLight from '/Images/Moon_fill_light.svg'
import MoonFill from '/Images/Moon_fill.svg'
import SunFill from '/Images/Sun_fill.svg'
import SunFillLight from '/Images/Sun_fill_light.svg'
import {  MenuIcon } from 'lucide-react'
export default function Navbar({ toggleMobileNav,toggleMode,darkMode }: {  toggleMobileNav: () => void ,toggleMode: () => void ,darkMode:boolean}) {
    return (
        <nav className={`w-full h-16  flex items-center justify-between px-10 ${darkMode ? 'bg-[#111729] text-[#F2F9FE]' : 'bg-[#F2F9FE] text-[#111729]'}`}>
            <div className="">
                <img src={darkMode ? AlaradoLogoDark : AlaradoLogo} alt="logo" />
            </div>
            <div className="md:block lg:block hidden">
                <ul className='flex gap-6'>
                    <li className='font-bold'>About us</li>
                    <li className='font-bold text-[#909193]'>Product</li>
                    <li className='font-bold text-[#909193]'>Resource</li>
                    <li className='font-bold text-[#909193]'>Contact</li>
                </ul>
            </div>
            <div className="w-fit rounded-full bg-[#223344]  p-1 gap-2 transition-all duration-500 ease-in-out md:flex lg:flex hidden" onClick={toggleMode}>
                <img src={darkMode ? MoonFill : MoonFillLight} alt="Moon" className={` ${darkMode ? 'bg-[#F2F9FE] p-[0.5px]':""} rounded-full`}/>
                <img src={darkMode ? SunFillLight : SunFill} alt="Sun" className={`${darkMode ? '':"bg-[#F2F9FE]"} rounded-full`} />
            </div>
            <div className="hamburger md:hidden lg:hidden  flex flex-col gap-0" onClick={toggleMobileNav}>
                <MenuIcon/>
            </div>
        </nav>
    )

}