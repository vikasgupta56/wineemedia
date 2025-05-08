import React, { useEffect, useRef } from 'react'
import Navbar from '../navbar/Navbar'
import gsap from 'gsap'
import SplitText from 'gsap/dist/SplitText'
gsap.registerPlugin(SplitText)

const Section1 = () => {

  const headingRef = useRef(null)

  useEffect(()=>{
    if(!headingRef.current) return;

    document.fonts.ready.then(() => {
      const split = SplitText.create(headingRef.current, {
        type: 'chars, words, lines',
        linesClass:"line-mask"
      })
      
       // Create the timeline
    const tl = gsap.timeline();
    
    // Animate each masked line
    tl
    .from(split.lines, {
      yPercent: 100,
      opacity: 0,
      duration: .8,
      // ease: "power3.out",
      stagger: {
        amount:.2
      },
      delay:.5
    },"a")
    .to(".btm-container",{
      opacity:1,
      delay:.8
    },"a")

    })


  },[])

  return (
    <div className='w-full h-[100svh] text-white flex flex-col items-end justify-end px-[4vw] sm:px-[2vw]'>
        <Navbar/>
        <h6 ref={headingRef} className='text-[6.5vw] w-full sm:text-[4.3vw] font-[heading2] leading-[1.3] sm:leading-[1.1] tracking-tight text-left'><span className=' w-[20vw] hidden sm:inline-block'></span>We are a digital branding and marketing agency helping businesses elevate their online presence through social media, engaging content, SEO, and high-impact advertising campaigns.</h6>
        <div className='btm-container opacity-0  w-full flex items-start justify-between mt-[15vw] sm:mt-[5vw] pt-[3vw] sm:pt-[1vw] pb-[6vw] sm:pb-[.5vw] border-t border-white/20'>
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