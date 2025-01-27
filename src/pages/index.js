import Footer from '@/components/footer/Footer'
import Marquee from '@/components/home/Marquee'
import OurWorks from '@/components/home/OurWorks'
import Section1 from '@/components/home/Section1'
import Section4 from '@/components/home/Section4'
import Services from '@/components/home/Services'
import SeoHeader from '@/components/SeoHeader'
import gsap from 'gsap'
import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'

const index = ({meta}) => {

  const playerRef = useRef(null)
  const videoRef = useRef(null)
  const [player, setplayer] = useState("ri-volume-mute-line")



  const handleMouseMove = (e) => {
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
    <>
    <SeoHeader meta={meta}/>
    <div onMouseMove={(e) => handleMouseMove(e)} className='relative bg-black'>
      <div id='player'  ref={playerRef} className='w-[10vw] sm:w-[6vw] md:w-[4vw] scale-0 h-[10vw] sm:h-[6vw] md:h-[4vw] cursor-pointer pointer-events-none flex items-center justify-center bg-white rounded-full fixed -translate-x-1/2 -translate-y-1/2 z-[999] text-black'><i className={`${player} text-[4vw] sm:text-[2.5vw] md:text-[1.5vw]`}></i></div>
      <Section1 videoRef={videoRef} playerRef={playerRef} handlePlayer={handlePlayer} />
      <Marquee />
      <Services />
      <Section4  />
      <OurWorks />
      <Footer />
    </div>
    </>
  )
}

export default index;


export async function getStaticProps() {
  const meta = {
    title:
      "WineeMedia",
    description:
      "WineeMedia is a branding and marketing agency specializing in providing comprehensive online solutions for businesses aiming to enhance their digital presence.",
    keywords: [],
    author: "WineeMedia",
    robots: "index,follow",
  };
  return { props: { meta: meta } };
}
