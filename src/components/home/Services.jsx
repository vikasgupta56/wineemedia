import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Services = () => {
    useEffect(()=>{
        document.querySelectorAll(".wrapper-txt").forEach(p => {
            gsap.to(p.querySelector(".overlay"), {
              width:"0%",
              duration: .8,
              scrollTrigger: {
                trigger: p,
                start: "top 50%",
                end: "top 20%",
                scrub: 1,
              }
            })
          })
          document.querySelectorAll(".igs").forEach(igs => {
            gsap.to(igs, {
              y:-200,
              duration: .8,
              scrollTrigger: {
                trigger: igs,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              }
            })
          })
    },[])

    return (
        <div className='relative w-full min-h-screen bg-black p-[2vw] py-[10vw]'>
            <div className='wrapper-txt relative '>
                <h1 className="text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    Collaborating
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    with passionate
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    individuals and ambitious
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    brands to craft
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    memorable,
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    captivating digital
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    experiences,
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    always striving for
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    a best possible solution.
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <img className='igs absolute top-[18%] right-[25%] w-[20%] mix-blend-exclusion' src="https://selemen.liqium.com/img/lt1.jpg" alt="" />
            <img className='igs absolute top-[60%] right-[0%] w-[20%] mix-blend-exclusion' src="https://static.wixstatic.com/media/84770f_a615c70590f74d388d5ec6398fd9bdbd~mv2.jpg/v1/fit/w_699,h_1049,q_90/84770f_a615c70590f74d388d5ec6398fd9bdbd~mv2.jpg" alt="" />
            <img className='igs absolute bottom-[0%] left-[0%] w-[20%] mix-blend-exclusion' src="https://static.wixstatic.com/media/84770f_6ef0401202e74bfa8e138599b551766d~mv2.jpg/v1/fit/w_700,h_466,q_90/84770f_6ef0401202e74bfa8e138599b551766d~mv2.jpg" alt="" />
        </div>
    )
}

export default Services