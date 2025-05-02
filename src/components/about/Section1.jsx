import React from 'react'
import Navbar from '../navbar/Navbar'

const Section1 = () => {
  return (
    <div className='w-full h-[100svh] text-white font-[font6] flex flex-col items-end justify-end pb-[6vw] px-[2vw]'>
        <Navbar/>
        <h6 className='w-[80%] md:w-[50%]  text-[4vw] md:text-[2vw]  text-left'>We are a design-focused agency passionate about using our creative skills to develop brand experiences. We aim to transform ideas into visual stories that bring brands to life through print and digital.</h6>
    </div>
  )
}

export default Section1