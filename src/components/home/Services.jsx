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
        <div className='relative w-full h-fit sm:h-fit bg-black p-[2vw] py-[10vw]'>
            <div className='wrapper-txt relative '>
                <h1 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    Collaborating
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    with passionate
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    individuals and ambitious
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    brands to craft
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    memorable,
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    captivating digital
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    experiences,
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    always striving for
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h1 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                    a best possible solution.
                </h1>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <img className='igs absolute top-[29%] sm:top-[18%] right-[25%] w-[20%] mix-blend-exclusion' src="/hero1.png" alt="" />
            <img className='igs absolute top-[60%] right-[0%] w-[20%] mix-blend-exclusion' src="/hero2.png" alt="" />
            <img className='igs absolute bottom-[0%] left-[0%] w-[20%] mix-blend-exclusion' src="/hero3.png" alt="" />
        </div>
    )
}

export default Services