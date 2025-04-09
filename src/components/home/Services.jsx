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
                <h4 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                Clicks, Tricks & Profit Fix
                </h4>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h4 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                We Make Digital 
                </h4>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h4 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                Work Like Magic!
                </h4>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h4 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                Strategic Marketing
                </h4>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h4 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                for the Digital Age.
                </h4>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h4 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                Creating Iconic Brands
                </h4>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h4 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                with Digital Power.
                </h4>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h4 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                Smart Strategies.
                </h4>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h4 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                Creative Execution.
                </h4>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <div className='wrapper-txt relative '>
                <h4 className="text-[9vw] sm:text-[6vw] font-[font4] leading-none py-[1.2vw] text-white">
                Results that Matter.
                </h4>
                <div className="overlay absolute w-full h-full right-0 top-1/2 -translate-y-1/2 bg-black opacity-[.8]"></div>
            </div>
            <img className='igs absolute top-[29%] sm:top-[18%] right-[25%] w-[20%] h-auto mix-blend-exclusion' src="/hero1.webp" alt="service-image1" title="service-image1" />
            <img className='igs absolute top-[60%] right-[0%] w-[20%] h-auto mix-blend-exclusion' src="/hero2.webp" alt="service-image2" title="service-image2" />
            <img className='igs absolute bottom-[-10%] left-[0%] w-[20%] h-auto mix-blend-exclusion' src="/hero3.webp" alt="service-image3" title="service-image3" />
        </div>
    )
}

export default Services