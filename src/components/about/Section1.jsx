import React from 'react'
import Navbar from '../navbar/Navbar'

const Section1 = () => {
  return (
    <div className='w-full h-screen text-white font-[font6] flex flex-col items-center justify-center uppercase'>
        <Navbar/>
        <h1 className='text-[5vw] leading-none'>Discover our studio</h1>
        <h1 className='text-[5vw]'>and vision</h1>
    </div>
  )
}

export default Section1