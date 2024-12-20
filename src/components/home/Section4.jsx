import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useContext, useEffect, useRef } from 'react'
import { projectContext } from '../projectContext/ProjectContext'


gsap.registerPlugin(ScrollTrigger)

const Section4 = ({ cursor }) => {
   const workrefs = useRef([])
const workData = useContext(projectContext)
   const works = workData.slice(0,6)

  // const works = [
  //   {
  //     title: 'NoMadS',
  //     description: 'Brand Strategy, Website Design, Social Media Campaigns',
  //     image: 'https://static.wixstatic.com/media/84770f_35bbc7d1b2fe4e66ab9b7b4d72f9cc83~mv2.jpg/v1/fill/w_1479,h_735,q_90/84770f_35bbc7d1b2fe4e66ab9b7b4d72f9cc83~mv2.jpg',
  //     year: "2024"
  //   },
  //   {
  //     title: 'NoMadS',
  //     description: 'Brand Strategy, Website Design, Social Media Campaigns',
  //     image: 'https://static.wixstatic.com/media/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg/v1/fit/w_1440,h_735,q_90/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg',
  //     year: "2024"
  //   },
  //   {
  //     title: 'NoMadS',
  //     description: 'Brand Strategy, Website Design, Social Media Campaigns',
  //     image: 'https://static.wixstatic.com/media/84770f_41562a89c1d2492d9cfcc38c950a1167~mv2.jpg/v1/fit/w_700,h_801,q_90/84770f_41562a89c1d2492d9cfcc38c950a1167~mv2.jpg',
  //     year: "2024"
  //   },
  //   {
  //     title: 'NoMadS',
  //     description: 'Brand Strategy, Website Design, Social Media Campaigns',
  //     image: 'https://static.wixstatic.com/media/84770f_b38c6ae73ba64017b4e5a31f79ca9ae3~mv2.jpg/v1/fit/w_700,h_1050,q_90/84770f_b38c6ae73ba64017b4e5a31f79ca9ae3~mv2.jpg',
  //     year: "2024"
  //   },
  //   {
  //     title: 'NoMadS',
  //     description: 'Brand Strategy, Website Design, Social Media Campaigns',
  //     image: 'https://static.wixstatic.com/media/84770f_b38c6ae73ba64017b4e5a31f79ca9ae3~mv2.jpg/v1/fit/w_700,h_1050,q_90/84770f_b38c6ae73ba64017b4e5a31f79ca9ae3~mv2.jpg',
  //     year: "2024"
  //   },
  //   {
  //     title: 'NoMadS',
  //     description: 'Brand Strategy, Website Design, Social Media Campaigns',
  //     image: 'https://static.wixstatic.com/media/84770f_0084f58d065e4df89df22e7641337350~mv2.jpg/v1/fit/w_699,h_699,q_90/84770f_0084f58d065e4df89df22e7641337350~mv2.jpg',
  //     year: "2024"
  //   },
  // ]

  useEffect(() => {
   if(workrefs.current){
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
      .to(".section4-h",{
        backgroundColor:"white",
        duration: 1,
      },"a")
  }, [])

  const handleMouseMove = () => {
    gsap.to(cursor.current,{
      scale:1
    })
  }
  const handleMouseLeave = () => {
    gsap.to(cursor.current,{
      scale:0
    })
  }

  return (
    <div className='section4-h w-full min-h-screen bg-black'>
      <div className='select-work relative w-full mx-[2vw] py-[5vw] sm:py-[1.2vw] mt-[6vw]'>
        <div className='overflow-hidden'>
          <h2 className='work-txt text-white text-[10vw] sm:text-[5vw] font-[font6] leading-none' style={{ transform: "translateY(100%)" }}>Selected Work</h2>
        </div>
        <div className="line w-[0%] h-[1px] bg-white/60 absolute left-0 bottom-0"></div>
      </div>
      <div className="projects w-full flex justify-between flex-wrap pt-[5vw] sm:pt-[2vw] p-[2vw] pb-[0]">
        {works.map((w, i) => (<Link href={`/work/${w.projectname}`} key={i} ref={el => workrefs.current[i] = el} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="project-h cursor-pointer w-full sm:w-full md:w-[49%] h-[60vh] sm:h-[90vh] mb-[2%] overflow-hidden relative">
          <div className='hidden sm:block black-strip transition-all duration-500 w-full h-[0%] bg-black absolute top-1/2 -translate-y-1/2 left-0 z-[9]'></div>
          <div className='strip-text w-full text-white capitalize  transition-all duration-500 text-[2vw] md:text-[.8vw] font-[font6] h-[4%]  absolute top-1/2 opacity-0 -translate-y-1/2 left-0 z-[10]  hidden sm:flex items-center justify-between'>
            <h5>{w.projectname}</h5>
            <div className='flex items-center gap-[8vw]'>
              <h5>{w.serviceprovided}</h5>
              <h1>2024</h1>
            </div>
          </div>
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src={w.coverimage1} alt="" />
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