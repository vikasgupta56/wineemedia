import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useContext, useLayoutEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Link from 'next/link'
import { projectContext } from '../projectContext/ProjectContext'

gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {
  const workData = useContext(projectContext)
  useLayoutEffect(() => {
    const tl = gsap.timeline()
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

    // const triggers = document.querySelectorAll(".project").forEach((p) => {
    //   gsap.to(p.querySelectorAll(".project-ig"), {
    //     scale: 1,
    //     duration: 0.8,
    //     scrollTrigger: {
    //       trigger: p,
    //       start: "top 70%",
    //       end: "bottom bottom",
    //       scrub: 1,
    //     },
    //   })
    // })

  }, [])

  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <div className='select-work relative w-full mx-[2vw] py-[5vw] md:py-[1.2vw] flex pt-[30vw] md:pt-[12vw]'>
        <div className='overflow-hidden'>
          <h2 className='work-txt text-white text-[10vw] sm:text-[5vw] font-[font6] leading-none' style={{ transform: "translateY(100%)" }}>Our Work</h2>
        </div>
        <div className="line w-[0%] h-[1px] bg-white/60 absolute left-0 bottom-0"></div>
      </div>
      <div className="projects w-full flex flex-col md:flex-row justify-start gap-[0.5%] flex-wrap py-[5vw] md:py-[2vw] px-[2vw]">

        {workData.map((project, i) => (i % 9 === 0 ? (<Link href={`/work/${project.projectname}`} key={i} className='project w-full md:w-[49.5%] mb-[8vw] cursor-pointer'>
          <div className='projectCover w-full h-[46.5vh] sm:h-[75vh] md:h-[68vh] overflow-hidden'>
            <img src={project.coverimage1} className='project-ig  w-full h-full object-cover object-center' alt="" />
          </div>
          <h4 className='text-white text-[4vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.3vw] mt-[1.5vw] md:mt-[.5vw] capitalize'>{project.projectname}</h4>
          <p className='text-white opacity-[.8] font-[font4] text-[3.5vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[.8vw] capitalize w-full md:w-[50%]'>{project.serviceprovided}</p>
        </Link>) : (<Link href={`/work/${project.projectname}`} key={i} className='project w-full sm:w-[24.5%] md:w-[49.5%] lg:w-[24.5%] mb-[8vw] cursor-pointer'>
          <div className='projectCover w-full h-[46.5vh] sm:h-[75vh] md:h-[46.5vh] overflow-hidden'>
            <img src={project.coverimage1} className='project-ig  w-full h-full object-cover object-center' alt="" />
          </div>
          <h4 className='text-white text-[4vw] sm:text-[3.5vw]  md:text-[2vw] lg:text-[1.3vw] mt-[1.5vw] md:mt-[.5vw] capitalize'>{project.projectname}</h4>
          <p className='text-white opacity-[.8] font-[font4] text-[3.5vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[.8vw] capitalize w-full'>{project.serviceprovided}</p>
        </Link>)))}



      </div>
    </div>
  )
}

export default Section1