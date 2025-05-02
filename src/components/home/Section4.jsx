import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, {  useEffect, useRef } from 'react'
import { workData } from '@/helpers/WorkData'
import Image from 'next/image'


gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {
  const workrefs = useRef([])
  const works = Object.values(workData).slice(0, 6)



  useEffect(() => {
    if (workrefs.current && window.innerWidth > 600) {
      workrefs.current.forEach(p => {
        gsap.to(p, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            scrollTrigger: {
                trigger: p,
                start: "top 80%",
                end: "top 20%",
                // scrub: 1,
                // markers:true
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
      <div className="projects w-full hidden sm:flex justify-between flex-wrap pt-[5vw] sm:pt-[2vw] p-[2vw] pb-[0]">
        {works.map((w, i) => (
          <Link href={`/work/${w.projectname.split(" ").join("-")}`} title={w.projectname} key={i} ref={el => workrefs.current[i] = el} style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}   className="img-clip project-h cursor-pointer w-full sm:w-full md:w-[49%] h-[60vh] sm:h-[90vh] mb-[2%] overflow-hidden relative">
          <div className='hidden sm:block black-strip transition-all duration-500 w-full h-[0%] bg-black absolute bottom-0 left-0 z-[9]'></div>
          <div className='strip-text w-full text-white capitalize  transition-all duration-500 text-[2vw] md:text-[1vw] font-[font6] h-[10%]  absolute  opacity-0 bottom-0 left-0 z-[10]  hidden sm:flex flex-col items-start justify-center'>
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
          <Image width={1000} height={1000} className='project-ig w-full h-full object-cover' src={w.coverimage1} alt={w.projectname} title={w.projectname} />
        </Link>
        ))}
      </div>
      <div className="projects w-full flex sm:hidden justify-between flex-wrap pt-[5vw] sm:pt-[2vw] p-[2vw] pb-[0]">
        {works.map((project, i) => (
         <Link href={`/work/${project.projectname.split(" ").join("-")}`} key={i}  title={project.projectname} className='project w-full md:w-[49.5%] mb-[10vw] cursor-pointer'>
         <div className='projectCover w-full h-[46.5vh] sm:h-[75vh] md:h-[68vh] overflow-hidden'>
           <Image width={1000} height={1000} src={project.coverimage1} className='project-ig  w-full h-full object-cover object-center' alt={project.projectname} title={project.projectname}/>
         </div>
         <h4 className='text-white font-[font6] text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw]  mt-[1.5vw] md:mt-[.5vw] capitalize'>{project.projectname}</h4>
         <p className='text-white opacity-[.8]  mt-[2vw] sm:mt-0 font-[font1] text-[4vw] sm:text-[2vw] md:text-[1vw] lg:text-[1.2vw] capitalize w-full md:w-[50%]'>{project.serviceprovided}</p>
       </Link>
        ))}
      </div>
      <div className='flex items-center justify-center py-[3vw] pt-[5vw] sm:pt-[1vw]'>
        <Link href="/work" title='view all' className='viewall overflow-hidden effecttxt border border-white px-[6vw] sm:px-[3vw] md:px-[2vw] relative rounded-full py-[2vw] sm:py-[1vw] md:py-[.7vw] text-white flex items-center gap-[1vw] mix-blend-difference  cursor-pointer'>
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