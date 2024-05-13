import MoonFillLight from '/Images/Moon_fill_light.svg'
import MoonFill from '/Images/Moon_fill.svg'
import SunFill from '/Images/Sun_fill.svg'
import SunFillLight from '/Images/Sun_fill_light.svg'
import {  X } from 'lucide-react'
export default function MobileNav({ toggleMobileNav, toggleMode, darkMode }: { toggleMobileNav: () => void, toggleMode: () => void, darkMode: boolean }) {
    return (
        <div className="fixed inset-1/2 top-0 z-40 h-full w-1/2 bg-white  transition-all duration-300 ease-in-out md:hidden " >
            <div className=" float-right px-9 py-5" onClick={toggleMobileNav}>
                    <X/>
                </div>
            <div className="relative top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center  gap-10">
                <div className="flex flex-col gap-6">
                    <h1 className="text-3xl font-bold">About us</h1>
                    <h1 className=" text-3xl text-[#909193] font-medium">Product</h1>
                    <h1 className=" text-3xl text-[#909193] font-medium">Resource</h1>
                    <h1 className=" text-3xl text-[#909193] font-medium">Contact</h1>
                </div>
                <div className="w-fit rounded-full bg-[#223344] flex p-1 gap-2 transition-all duration-500 ease-in-out" onClick={toggleMode}>
                    <img src={darkMode ? MoonFill : MoonFillLight} alt="Moon" className={` ${darkMode ? 'bg-[#F2F9FE] p-[0.5px]' : ""} rounded-full`} />
                    <img src={darkMode ? SunFillLight : SunFill} alt="Sun" className={`${darkMode ? '' : "bg-[#F2F9FE]"} rounded-full`} />
                </div>
                
            </div>

        </div>

    )
}