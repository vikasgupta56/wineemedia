import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useContext, useEffect, useRef } from 'react'
import { projectContext } from '../projectContext/ProjectContext'


gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {
  const workrefs = useRef([])
  const workData = useContext(projectContext)
  const works = workData.slice(0, 6)



  useEffect(() => {
    if (workrefs.current) {
      workrefs.current.forEach(p => {
        gsap.to(p.querySelector(".project-ig"), {
          scale: 1,
          duration: .8,
          scrollTrigger: {
            trigger: p,
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
          }
        })
      })
    }
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".select-work",
        start: "top 75%",
        end: "top 60%",
        scrub: 1,
      }
    })
    tl
      .to(".line", {
        width: "96%",
        duration: .8,
        ease: "none",
      }, "a")
      .to(".work-txt", {
        transform: "translateY(0)",
        duration: .8,
      }, "a")

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section4-h",
        start: "bottom 90%",
        end: "bottom 60%",
        scrub: 1,
      }
    })

    tl2
      .to(".section4-h", {
        backgroundColor: "white",
        duration: 1,
      }, "a")
  }, [])

 

  return (
    <div className='section4-h w-full min-h-screen bg-black'>
      <div className='select-work relative w-full mx-[2vw] py-[5vw] sm:py-[1.2vw] mt-[6vw]'>
        <div className='overflow-hidden'>
          <h2 className='work-txt text-white text-[10vw] sm:text-[5vw] font-[font6] leading-none' style={{ transform: "translateY(100%)" }}>Selected Work</h2>
        </div>
        <div className="line w-[0%] h-[1px] bg-white/60 absolute left-0 bottom-0"></div>
      </div>
      <div className="projects w-full flex justify-between flex-wrap pt-[5vw] sm:pt-[2vw] p-[2vw] pb-[0]">
        {works.map((w, i) => (<Link href={`/work/${w.projectname.split(" ").join("-")}`} key={i} ref={el => workrefs.current[i] = el}  className="project-h cursor-pointer w-full sm:w-full md:w-[49%] h-[60vh] sm:h-[90vh] mb-[2%] overflow-hidden relative">
          <div className='hidden sm:block black-strip transition-all duration-500 w-full h-[0%] bg-black absolute bottom-0 left-0 z-[9]'></div>
          <div className='strip-text w-full text-white capitalize  transition-all duration-500 text-[2vw] md:text-[1vw] font-[font6] h-[8%]  absolute  opacity-0 bottom-0 left-0 z-[10]  hidden sm:flex flex-col items-start justify-between'>
            <h5 className='text-[1.5vw]'>{w.projectname}</h5>
            <div className='flex items-center justify-between w-[100%]'>
              <h5>
                {w.serviceprovided
                  ?.split(", ")
                  .slice(0, 3)
                  .join(", ")}
                {w.serviceprovided.split(", ").length > 3 && "..."}
              </h5>
              <h6>Discover <i className="ri-arrow-right-line"></i></h6>
            </div>
          </div>
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src={w.coverimage1} alt={w.projectname} />
        </Link>))}
      </div>
      <div className='flex items-center justify-center py-[3vw] pt-[5vw] sm:pt-[1vw]'>
        <Link href="/work" className='viewall overflow-hidden effecttxt border border-white px-[6vw] sm:px-[3vw] md:px-[2vw] relative rounded-full py-[2vw] sm:py-[1vw] md:py-[.7vw] text-white flex items-center gap-[1vw] mix-blend-difference  cursor-pointer'>
          <div className='relative z-[10] overflow-hidden h-[4.5vw] sm:h-[2.3vw] md:h-[1.5vw] text-[4vw] sm:text-[2vw] md:text-[1.2vw] font-[font6]'>
            <h2 className='one capitalize'>view all</h2>
            <h2 className='one capitalize'>view all</h2>
          </div>
          <div className='coverall transition-all duration-300 w-full h-full bg-white absolute left-1/2 -translate-x-1/2 top-full rounded-full'></div>
        </Link>
      </div>
    </div>
  )
}

export default Section4