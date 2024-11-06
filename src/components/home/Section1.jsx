import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'

const Section1 = () => {

    return (
        <div className='section1 min-h-screen relative w-full '>
            <Navbar />
            <div className=' sticky z-10 top-0 w-full h-[65vh] flex flex-col justify-end p-[2vw] pb-[5vw]'>
                <div className='flex flex-col mb-[1.3vw] '>
                    <div className='flex items-center gap-[2vw]'>
                        <h1 className='text-white text-[8vw] font-[font2] capitalize leading-none'>designing</h1>
                    </div>
                </div>
                <div className='flex items-end justify-between'>
                    <div className='flex flex-col '>
                        <div className='flex items-center gap-[2vw]'>
                            <h1 className='text-white text-[8vw] font-[font2] capitalize leading-none'>applications</h1>
                        </div>
                    </div>
                    <div className='social flex items-center gap-[1vw]'>
                        <span className="w-[3vw] h-[3vw] border border-white rounded-full flex items-center justify-center text-white relative overflow-hidden social-i cursor-pointer"> <span className='cir transition-all duration-300 w-full h-full absolute bg-white rounded-full left-1/2 -translate-x-1/2 top-full'></span> <i className="text-[1.2vw] transition-all duration-300 relative ri-instagram-line"></i></span>
                        <span className="w-[3vw] h-[3vw] border border-white rounded-full flex items-center justify-center text-white relative overflow-hidden social-i cursor-pointer"> <span className='cir transition-all duration-300 w-full h-full absolute bg-white rounded-full left-1/2 -translate-x-1/2 top-full'></span> <i className="text-[1.2vw] transition-all duration-300 relative ri-dribbble-line"></i></span>
                        <span className="w-[3vw] h-[3vw] border border-white rounded-full flex items-center justify-center text-white relative overflow-hidden social-i cursor-pointer"> <span className='cir transition-all duration-300 w-full h-full absolute bg-white rounded-full left-1/2 -translate-x-1/2 top-full'></span> <i className="text-[1.2vw] transition-all duration-300 relative ri-linkedin-fill"></i></span>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen'>
                <video autoPlay muted loop playsInline className='w-full h-full object-cover ' src="https://video.wixstatic.com/video/36971c_4cf7ab905c31434e928491fde8282fd5/480p/mp4/file.mp4"></video>
            </div>
        </div>
    )
}

export default Section1