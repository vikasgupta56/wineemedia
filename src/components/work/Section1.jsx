import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'


gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {

  useEffect(()=>{
    document.querySelectorAll(".project").forEach(p=>{
      gsap.to(p.querySelector(".project-ig"), {
        scale:1,
        duration:.8,
        scrollTrigger:{
          trigger:p,
          start:"top 70%",
          end:"bottom bottom",
          scrub:1,
        }
      })
    })
  },[])

  return (
    <div className='w-full min-h-screen'>
        <Navbar/>
      <div className='w-full p-[2vw] py-0 flex pt-[6vw] '>
        <h2 className='text-black text-[5vw] font-[font6] w-full border-b border-black/60'>Our Work</h2>
      </div>
      <div className="projects w-full flex justify-between flex-wrap p-[2vw]">
        <div className="project w-[32.3%] h-[80vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/84770f_35bbc7d1b2fe4e66ab9b7b4d72f9cc83~mv2.jpg/v1/fill/w_1479,h_735,q_90/84770f_35bbc7d1b2fe4e66ab9b7b4d72f9cc83~mv2.jpg" alt="" />
        </div>
        <div className="project w-[32.3%] h-[80vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg/v1/fit/w_1440,h_735,q_90/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg" alt="" />
        </div>
        <div className="project w-[32.3%] h-[80vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/84770f_41562a89c1d2492d9cfcc38c950a1167~mv2.jpg/v1/fit/w_700,h_801,q_90/84770f_41562a89c1d2492d9cfcc38c950a1167~mv2.jpg" alt="" />
        </div>
        <div className="project w-[32.3%] h-[80vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/84770f_b38c6ae73ba64017b4e5a31f79ca9ae3~mv2.jpg/v1/fit/w_700,h_1050,q_90/84770f_b38c6ae73ba64017b4e5a31f79ca9ae3~mv2.jpg" alt="" />
        </div>
        <div className="project w-[32.3%] h-[80vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/84770f_0084f58d065e4df89df22e7641337350~mv2.jpg/v1/fit/w_699,h_699,q_90/84770f_0084f58d065e4df89df22e7641337350~mv2.jpg" alt="" />
        </div>
        <div className="project w-[32.3%] h-[80vh] mb-[2%] overflow-hidden">
          <img className='project-ig w-full h-full object-cover scale-[1.3]' src="https://static.wixstatic.com/media/84770f_20c621b2982d46e2835a4dc27a61a4b3~mv2.jpg/v1/fit/w_1440,h_735,q_90/84770f_20c621b2982d46e2835a4dc27a61a4b3~mv2.jpg" alt="" />
        </div>
       
      </div>
    </div>
  )
}

export default Section1