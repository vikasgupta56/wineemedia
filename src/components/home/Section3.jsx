import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section3 = () => {
    useEffect(()=>{
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.section3',
                start:"top 70%",
                end:"top -150%",
                scrub:1,
            }
        })
        tl
        .to(".txt1",{
            transform:"translateX(80%)"
        },"a")
        .to(".txt2",{
            transform:"translateX(-100%)"
        },"a")

    },[])
  return (
    <div className='section3 w-full h-screen flex flex-col text-white  justify-center '>
        <h1 className='txt1 text-[15vw] font-[font3] whitespace-nowrap capitalize -translate-x-[50%]'>digital</h1>
        <h1 className='txt2 text-[15vw] font-[font3] whitespace-nowrap  capitalize translate-x-[80%]'>marketing agency</h1>
    </div>
  )
}

export default Section3