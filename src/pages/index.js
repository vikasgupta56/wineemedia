import Footer from '@/components/footer/Footer'
import Marquee from '@/components/home/Marquee'
import OurWorks from '@/components/home/OurWorks'
import Section1 from '@/components/home/Section1'
import Section4 from '@/components/home/Section4'
import Services from '@/components/home/Services'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const index = () => {

  const cursor = useRef(null)
  const playerRef = useRef(null)
  const videoRef = useRef(null)
  const [player, setplayer] = useState("ri-volume-mute-line")

  const handleMouseMove = (e) => {
    gsap.to(cursor.current, {
      left: e.clientX,
      top: e.clientY,
    })
    gsap.to(playerRef.current, {
      left: e.clientX, 
      top: e.clientY,
  });
  }

  const handlePlayer = ()=>{
    if(player === "ri-volume-mute-line"){
      setplayer("ri-volume-up-line")
      videoRef.current.muted = false
    }else{
      setplayer("ri-volume-mute-line")
       videoRef.current.muted = true
    }
  }

  return (
    <div onMouseMove={(e) => handleMouseMove(e)} className='relative bg-black'>
      <div id='player'  ref={playerRef} className='w-[10vw] sm:w-[6vw] md:w-[4vw] scale-0 h-[10vw] sm:h-[6vw] md:h-[4vw] cursor-pointer pointer-events-none flex items-center justify-center bg-white rounded-full fixed -translate-x-1/2 -translate-y-1/2 z-[999] text-black'><i className={`${player} text-[4vw] sm:text-[2.5vw] md:text-[1.5vw]`}></i></div>
      <div ref={cursor} className='cursor hidden sm:block fixed z-[999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 scale-0 bg-white pointer-events-none w-fit  sm:p-[1vw] md:p-[.7vw]  text-[2vw] md:text-[1vw] py-[.1vw] rounded-full'>Discover</div>
      <Section1 videoRef={videoRef} playerRef={playerRef} handlePlayer={handlePlayer} />
      <Marquee />
      <Services />
      <Section4 cursor={cursor} />
      <OurWorks />
      <Footer />
    </div>
  )
}

export default index