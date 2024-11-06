import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect } from 'react'


gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {

  useEffect(() => {
    document.querySelectorAll(".project").forEach(p => {
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
    },"a")
    .to(".work-txt",{
      transform: "translateY(0)",
      duration: .8,
    },"a")
  }, [])

  return (
    <div className='w-full min-h-screen'>
      <div className='select-work relative w-full mx-[2vw] py-[1.2vw] flex mt-[6vw]'>
        <div className='overflow-hidden'>
          <h2 className='work-txt text-white text-[5vw] font-[font6] leading-none' style={{transform:"translateY(100%)"}}>Selected Work</h2>
        </div>
        <div className="line w-[0%] h-[1px] bg-white/60 absolute left-0 bottom-0"></div>
      </div>
      <div className="projects w-full flex justify-between flex-wrap p-[2vw]">
        <div className="project w-[49%] h-[90vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/84770f_35bbc7d1b2fe4e66ab9b7b4d72f9cc83~mv2.jpg/v1/fill/w_1479,h_735,q_90/84770f_35bbc7d1b2fe4e66ab9b7b4d72f9cc83~mv2.jpg" alt="" />
        </div>
        <div className="project w-[49%] h-[90vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg/v1/fit/w_1440,h_735,q_90/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg" alt="" />
        </div>
        <div className="project w-[49%] h-[90vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/84770f_41562a89c1d2492d9cfcc38c950a1167~mv2.jpg/v1/fit/w_700,h_801,q_90/84770f_41562a89c1d2492d9cfcc38c950a1167~mv2.jpg" alt="" />
        </div>
        <div className="project w-[49%] h-[90vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/84770f_b38c6ae73ba64017b4e5a31f79ca9ae3~mv2.jpg/v1/fit/w_700,h_1050,q_90/84770f_b38c6ae73ba64017b4e5a31f79ca9ae3~mv2.jpg" alt="" />
        </div>
        <div className="project w-[49%] h-[90vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/84770f_0084f58d065e4df89df22e7641337350~mv2.jpg/v1/fit/w_699,h_699,q_90/84770f_0084f58d065e4df89df22e7641337350~mv2.jpg" alt="" />
        </div>
        <div className="w-[49%] h-[90vh] mb-[2%] flex items-end justify-end">
          <Link href="/work" className='effecttxt  flex items-center gap-[1vw] text-white cursor-pointer'>
            <div className='overflow-hidden h-[1.5vw] text-[1.2vw] font-[font6]'>
              <h2 className='one capitalize'>view all</h2>
              <h2 className='one capitalize'>view all</h2>
            </div>
            <img className='w-[1.3vw] filter invert' src="/arrow.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Section4