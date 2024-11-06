import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../navbar/Navbar'

gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {
  const router = useRouter()

  useLayoutEffect(() => {
    const tl = gsap.timeline()
    
    // Animation timeline setup
    tl
    .to(".line", {
      width: "96%",
      duration: 0.8,
      ease: "none",
    }, "a")
    .to(".work-txt", {
      transform: "translateY(0)",
      duration: 0.8,
    }, "a")
    
    // ScrollTrigger setup for each project
    const triggers = document.querySelectorAll(".project").forEach((p) => {
      gsap.to(p.querySelectorAll(".project-ig"), {
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: p,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 1,
        },
      })
    })

    // Cleanup on unmount to reset animations
    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [router.asPath]) // Run effect on route path change


  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <div className='select-work relative w-full mx-[2vw] py-[1.2vw] flex pt-[6vw]'>
        <div className='overflow-hidden'>
          <h2 className='work-txt text-white text-[5vw] font-[font6] leading-none' style={{transform:"translateY(100%)"}}>Our Work</h2>
        </div>
        <div className="line w-[0%] h-[1px] bg-white/60 absolute left-0 bottom-0"></div>
      </div>
      <div className="projects w-full flex justify-between flex-wrap py-[2vw]">
        <div className='project w-full mb-[4vw] px-[2vw]'>
          <div className='w-full h-[90vh] flex'>
            <div className='w-1/2 h-full overflow-hidden'>
              <img className='project-ig scale-[1.2] w-full h-full object-cover object-center' src="https://static.wixstatic.com/media/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg/v1/fill/w_1479,h_735,q_90/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg" alt="" />
            </div>
            <div className='w-1/2 h-full overflow-hidden'>
              <img className='project-ig scale-[1.2] w-full h-full object-cover object-center' src="https://static.wixstatic.com/media/84770f_54dd65fddabf40bbb8198b50b84a6c1f~mv2.jpg/v1/fit/w_700,h_1169,q_90/84770f_54dd65fddabf40bbb8198b50b84a6c1f~mv2.jpg" alt="" />
            </div>
          </div>
          <h1 className='text-[2vw] text-white mt-[1vw]'>KUCHENBUDDY</h1>
          <h2 className='text-[1.2vw] text-white'>Easy Peasy Cooking</h2>
        </div>
        <div className='project w-full mb-[4vw] px-[2vw]'>
          <div className='w-full h-[90vh] flex'>
            <div className='w-1/2 h-full overflow-hidden'>
              <img className='w-full h-full object-cover object-center project-ig scale-[1.2]' src="https://static.wixstatic.com/media/84770f_35bbc7d1b2fe4e66ab9b7b4d72f9cc83~mv2.jpg/v1/fill/w_1479,h_735,q_90/84770f_35bbc7d1b2fe4e66ab9b7b4d72f9cc83~mv2.jpg" alt="" />
            </div>
            <div className='w-1/2 h-full overflow-hidden'>
              <img className='w-full h-full object-cover object-center project-ig scale-[1.2]' src="https://static.wixstatic.com/media/84770f_32b14eefeca240cc917aefa3940eaa81~mv2.jpg/v1/fit/w_480,h_719,q_90/84770f_32b14eefeca240cc917aefa3940eaa81~mv2.jpg" alt="" />
            </div>
          </div>
          <h1 className='text-[2vw] text-white mt-[1vw]'>KUCHENBUDDY</h1>
          <h2 className='text-[1.2vw] text-white'>Easy Peasy Cooking</h2>
        </div>
        <div className='project w-full mb-[4vw]'>
          <div className='w-full h-screen overflow-hidden'>
            <img className='w-full h-full object-cover object-center project-ig scale-[1.2]' src="https://static.wixstatic.com/media/84770f_49c2a11793ec458fa07495dc0cb6db7b~mv2.jpg/v1/fit/w_1440,h_735,q_90/84770f_49c2a11793ec458fa07495dc0cb6db7b~mv2.jpg" alt="" />
          </div>
          <div className='px-[2vw]'>
            <h1 className='text-[2vw] text-white mt-[1vw]'>KUCHENBUDDY</h1>
            <h2 className='text-[1.2vw] text-white'>Easy Peasy Cooking</h2>
          </div>
        </div>
        <div className='project w-full mb-[4vw] px-[2vw]'>
          <div className='w-full h-[90vh] flex'>
            <div className='w-1/2 h-full overflow-hidden'>
              <img className='w-full h-full object-cover object-center project-ig scale-[1.2]' src="https://static.wixstatic.com/media/84770f_23ebbc39557f4db58b9cb92d79a4c9fc~mv2.jpg/v1/fit/w_480,h_721,q_90/84770f_23ebbc39557f4db58b9cb92d79a4c9fc~mv2.jpg" alt="" />
            </div>
            <div className='w-1/2 h-full overflow-hidden'>
              <img className='w-full h-full object-cover object-center project-ig scale-[1.2]' src="https://static.wixstatic.com/media/84770f_0084f58d065e4df89df22e7641337350~mv2.jpg/v1/fit/w_480,h_480,q_90/84770f_0084f58d065e4df89df22e7641337350~mv2.jpg" alt="" />
            </div>
          </div>
          <h1 className='text-[2vw] text-white mt-[1vw]'>KUCHENBUDDY</h1>
          <h2 className='text-[1.2vw] text-white'>Easy Peasy Cooking</h2>
        </div>
        <div className='project w-full mb-[4vw] px-[2vw]'>
          <div className='w-full h-[90vh] flex'>
            <div className='w-1/2 h-full overflow-hidden'>
              <img className='w-full h-full object-cover object-center scale-[1.2] project-ig' src="https://static.wixstatic.com/media/84770f_20c621b2982d46e2835a4dc27a61a4b3~mv2.jpg/v1/fit/w_1440,h_735,q_90/84770f_20c621b2982d46e2835a4dc27a61a4b3~mv2.jpg" alt="" />
            </div>
            <div className='w-1/2 h-full overflow-hidden'>
              <img className='w-full h-full object-cover object-center scale-[1.2] project-ig' src="https://static.wixstatic.com/media/84770f_3c757c6ae0a740b5a6fe8226f0d99fd4~mv2.jpg/v1/fit/w_480,h_721,q_90/84770f_3c757c6ae0a740b5a6fe8226f0d99fd4~mv2.jpg" alt="" />
            </div>
          </div>
          <h1 className='text-[2vw] text-white mt-[1vw]'>KUCHENBUDDY</h1>
          <h2 className='text-[1.2vw] text-white'>Easy Peasy Cooking</h2>
        </div>
        <div className='project w-full mb-[4vw]'>
          <div className='w-full h-screen overflow-hidden'>
            <img className='w-full h-full object-cover object-center project-ig scale-[1.2]' src="https://static.wixstatic.com/media/84770f_35bbc7d1b2fe4e66ab9b7b4d72f9cc83~mv2.jpg/v1/fill/w_1479,h_735,q_90/84770f_35bbc7d1b2fe4e66ab9b7b4d72f9cc83~mv2.jpg" alt="" />
          </div>
          <div className='px-[2vw]'>
            <h1 className='text-[2vw] text-white mt-[1vw]'>KUCHENBUDDY</h1>
            <h2 className='text-[1.2vw] text-white'>Easy Peasy Cooking</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1