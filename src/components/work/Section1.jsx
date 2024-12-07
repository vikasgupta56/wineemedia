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
      <div className="projects w-full flex justify-between flex-wrap py-[5vw] md:py-[2vw]">
        {workData.map((p, i) => (i + 1) % 3 !== 0 ? (<Link href={`/work/${p.projectname}`} className='project w-full mb-[15vw] sm:mb-[4vw] px-[2vw]'>
          <div className='w-full h-[50vh] sm:h-[90vh] flex'>
            <div className='w-full h-full overflow-hidden'>
              <img className='project-ig scale-[1.2] w-full h-full object-cover object-center' src={p.coverimage1} alt="" />
            </div>
          </div>
          <h1 className='text-[5vw] md:text-[2vw] text-white mt-[2vw] sm:mt-[1vw] capitalize'>{p.projectname}</h1>
          <h2 className='text-[3vw] md:text-[1.2vw] text-white/60 capitalize'>{p.serviceprovided}</h2>
        </Link>) : (<Link href={`/work/${p.projectname}`} className='project w-full mb-[4vw]'>
          <div className='w-full h-[70vh] sm:h-screen overflow-hidden'>
            <img className='w-full h-full object-cover object-center project-ig scale-[1.2]' src={p.coverimage1} alt="" />
          </div>
          <div className='px-[2vw]'>
            <h1 className='text-[5vw] md:text-[2vw] text-white mt-[2vw] sm:mt-[1vw] capitalize'>{p.projectname}</h1>
            <h2 className='text-[3vw] md:text-[1.2vw] text-white/60 capitalize'>{p.serviceprovided}</h2>
          </div>
        </Link>))}
      </div>
    </div>
  )
}

export default Section1