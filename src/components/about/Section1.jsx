import React from 'react'
import Navbar from '../navbar/Navbar'

const Section1 = () => {
  return (
    <div className='w-full h-screen text-white font-[font6] flex flex-col items-center justify-center '>
        <Navbar/>
        <h1 className='text-[5vw] leading-none uppercase'>Discover our studio</h1>
        <h1 className='text-[5vw] uppercase'>and vision</h1>
        <h6 className='w-[80%] mg:w-[40%]   text-[3vw] md:text-[1.1vw] mt-[1vw] text-center'>We are a design-focused studio passionate about using our creative skills to develop brand experiences. We aim to transform ideas into visual stories that bring brands to life through print and digital.</h6>
    </div>
  )
}

export default Section1