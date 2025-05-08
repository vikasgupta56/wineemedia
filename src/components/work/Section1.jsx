import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useContext, useLayoutEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Link from 'next/link'
import { workData } from '@/helpers/WorkData'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {
  const data = Object.values(workData)
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
          <h2 className='work-txt text-white text-[10vw] sm:text-[3.5vw] font-[heading2] leading-none' style={{ transform: "translateY(100%)" }}>Our Work</h2>
        </div>
        <div className="line sm:w-[0%] h-[1px] bg-white/20 absolute left-0 bottom-0"></div>
      </div>
      <div className="projects w-full flex flex-col md:flex-row justify-start gap-[0.5%] md:gap-[3%] lg:gap-[0.5%] flex-wrap py-[5vw] md:py-[2vw] px-[4vw] sm:px-[2vw]">

        {data.map((project, i) => (i === 0 ? (<Link href={`/work/${project.projectname.split(" ").join("-")}`} key={i}  title={project.projectname} className='project w-full md:w-[48.5%] mb-[10vw] sm:mb-[2vw] cursor-pointer'>
          <div className='projectCover w-full h-[46.5vh] sm:h-[75vh] md:h-[46.5vh] lg:h-[68vh] overflow-hidden'>
            <Image width={1000} height={1000} src={project.coverimage1} className='project-ig  w-full h-full object-cover object-center' alt={project.projectname} title={project.projectname}/>
          </div>
          <h4 className='text-white text-[4vw] font-[heading]  sm:text-[3.5vw] md:text-[2vw] lg:text-[1.3vw] mt-[4vw] md:mt-[.5vw] capitalize'>{project.projectname}</h4>
          <p className='text-white opacity-[.8] mt-[2vw] sm:mt-0 font-[heading2] tracking-wide  text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] capitalize w-full md:w-[90%]'>{project.serviceprovided}</p>
        </Link>) : i === 3 ? (<Link href={`/work/${project.projectname.split(" ").join("-")}`} key={i} title={project.projectname} className='project w-full md:w-[48.5%]  lg:w-[100%] mb-[10vw] sm:mb-[2vw] cursor-pointer'>
          <div className='projectCover w-full h-[46.5vh] sm:h-[75vh] md:h-[46.5vh] lg:h-[90vh] overflow-hidden'>
            <Image width={1000} height={1000} className='project-ig  w-full h-full object-cover object-center' src={project.coverimage1} alt={project.projectname} title={project.projectname}/>
          </div>
          <h4 className='text-white text-[4vw] font-[heading]  sm:text-[3.5vw] md:text-[2vw] lg:text-[1.3vw] tracking-wide  mt-[4vw] md:mt-[.5vw] capitalize'>{project.projectname}</h4>
          <p className='text-white opacity-[.8] mt-[2vw] sm:mt-0 font-[heading2] tracking-wide  text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] capitalize w-full md:w-[50%]'>{project.serviceprovided}</p>
        </Link>
        ) : i === 6 ? (<Link href={`/work/${project.projectname.split(" ").join("-")}`} key={i} title={project.projectname} className='project w-full md:w-[48.5%]  mb-[10vw] sm:mb-[2vw] cursor-pointer'>
          <div className='projectCover w-full h-[46.5vh] sm:h-[75vh] md:h-[46.5vh] lg:h-[68vh] overflow-hidden'>
            <Image width={1000} height={1000} src={project.coverimage1} className='project-ig  w-full h-full object-cover object-center' alt={project.projectname} title={project.projectname}/>
          </div>
          <h4 className='text-white text-[4vw] font-[heading]  sm:text-[3.5vw] md:text-[2vw] lg:text-[1.3vw] mt-[4vw] md:mt-[.5vw] capitalize'>{project.projectname}</h4>
          <p className='text-white opacity-[.8] mt-[2vw] sm:mt-0 font-[heading2] tracking-wide  text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] capitalize w-full md:w-[50%]'>{project.serviceprovided}</p>
        </Link>) : (<Link href={`/work/${project.projectname.split(" ").join("-")}`} key={i} title={project.projectname} className='project w-full sm:w-[100%] md:w-[48.5%]  lg:w-[24.5%] mb-[8vw] cursor-pointer'>
          <div className='projectCover w-full h-[46.5vh] sm:h-[75vh] md:h-[46.5vh] lg:h-[35vh] xl:h-[46.5vh] overflow-hidden'>
            <Image width={1000} height={1000} src={project.coverimage1} className='project-ig  w-full h-full object-cover object-center' alt={project.projectname} title={project.projectname}/>
          </div>
          <h4 className='text-white text-[4vw] font-[heading]  sm:text-[3.5vw]  md:text-[2vw] lg:text-[1.3vw] mt-[4vw] md:mt-[.5vw] capitalize'>{project.projectname}</h4>
          <p className='text-white opacity-[.8] mt-[2vw] sm:mt-0 font-[heading2] tracking-wide  text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] capitalize w-full'>{project.serviceprovided}</p>
        </Link>)))}
      </div>
    </div>
  )
}

export default Section1