import React from 'react'
import Navbar from '../navbar/Navbar'

const Section1 = () => {
  return (
    <div className='w-full h-[100svh] text-white flex flex-col items-end justify-end px-[4vw] sm:px-[2vw]'>
        <Navbar/>
        <h6 className='text-[6.5vw] sm:text-[4.3vw] font-[heading2] leading-[1.3] sm:leading-[1.1] tracking-tight text-left'><span className=' w-[13vw] hidden sm:inline-block'></span> We are a design-focused agency of creatives and storytellers, passionate about transforming ideas into compelling brand experiences across print and digital platforms.</h6>
        <div className='w-full flex items-start justify-between mt-[15vw] sm:mt-[5vw] pt-[3vw] sm:pt-[1vw] pb-[6vw] sm:pb-[.5vw] border-t border-white/20'>
          <div className='w-1/2'>
          <p className='text-[3.5vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] para font-[heading2] tracking-wide sm:tracking-tight'>We operate on <br /> simple principles</p></div>
          <div className='w-1/2'>
          <ul >
            <li className='text-[3.5vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] para font-[heading2] tracking-wide sm:tracking-tight'>(01)  Put people first</li>
            <li className='text-[3.5vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] para font-[heading2] tracking-wide sm:tracking-tight'>(02)  Pursue excellence</li>
            <li className='text-[3.5vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] para font-[heading2] tracking-wide sm:tracking-tight'>(03)  Embrace challenges</li>
          </ul>
          </div>
        </div>
    </div>
  )
}

export default Section1