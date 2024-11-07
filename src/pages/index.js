import Footer from '@/components/footer/Footer'
import Marquee from '@/components/home/Marquee'
import OurWorks from '@/components/home/OurWorks'
import Section1 from '@/components/home/Section1'
import Section4 from '@/components/home/Section4'
import Services from '@/components/home/Services'
import gsap from 'gsap'
import React, { useRef } from 'react'

const index = () => {

  const cursor = useRef(null)

  const handleMouseMove = (e)=>{
    gsap.to(cursor.current,{
      left: e.clientX,
      top: e.clientY,
    })
  }

  return (
    <div onMouseMove={(e)=>handleMouseMove(e)} className='relative bg-black'>
      <div ref={cursor} className='cursor fixed z-[999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 scale-0 bg-white pointer-events-none w-fit p-[.7vw] text-[1vw] py-[.1vw] rounded-full'>Discover</div>
      <Section1/>
      <Marquee/>
      <Services/>
      <Section4 cursor={cursor}/>
      <OurWorks/>
      <Footer/>
    </div>
  )
}

export default index