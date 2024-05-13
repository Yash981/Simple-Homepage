
import DoneRing from '/Images/Done_ring_round_fill.svg'
import HeroImage from '/Images/hero-image-simple-homepage.png'
const HeroSection = ({darkMode}:{darkMode:boolean}) => {
    return (
        <main className={`min-w-full min-h-[calc(100vh-64px)] ${darkMode ? 'bg-[#111729] text-[#F2F9FE]' : 'bg-[#F2F9FE] text-[#111729]'} flex  md:flex-col-reverse md:items-center  lg:flex-row sm:flex-col-reverse max-sm:flex-col-reverse `}>
            <section className="lg:w-1/2 flex flex-col justify-start gap-10 items-start px-16 py-20 md:w-full md:items-start md:px-20 sm:w-full max-sm:w-full max-sm:p-2">
                <div className="">
                    <h3 className={`uppercase tracking-wide ${darkMode ? ' text-[#F2F9FE]' : ' text-[#111729]'} font-bold`}>😎  Simple way to communicate</h3>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className={`${darkMode ? ' text-[#F2F9FE]' : ' text-[#111729]'} font-extrabold text-6xl`}>Actions for</h1>
                    <h1 className={`${darkMode ? ' text-[#F2F9FE]' : ' text-[#111729]'} font-extrabold text-6xl`}>Accessibility</h1>
                    <h1 className={`${darkMode ? ' text-[#F2F9FE]' : ' text-[#111729]'} font-extrabold text-6xl`}>in Design</h1>
                </div>
                <div className="">
                    <h3 className="text-[#909193]">The fastest way to build and deploy websites</h3><h3 className="text-[#909193]">with resusable components.</h3>
                </div>
                <div className="flex gap-2">
                    <button className="bg-[#2A4DD0] px-6 py-[10px] rounded-lg text-white font-medium">GET STARTED</button>
                    <button className="text-[#2A4DD0] px-4 py-2 rounded-lg font-medium underline ">Get live demo</button>
                </div>
                <div className="flex gap-2">
                    <div className="">
                        <p className='flex gap-2'> <img src={DoneRing} alt="" /> No credit card required</p>
                    </div>
                    <div >
                        <p className="flex gap-2"> <img src={DoneRing} alt="" /> No software to install</p>
                    </div>
                </div>
            </section>
            <section className="w-1/2 px-10 py-20 flex items-center justify-center  md:w-full sm:w-full max-sm:w-full">
                <img src={HeroImage} alt="HeroImage" />
            </section>
        </main>
    )
}

export default HeroSection