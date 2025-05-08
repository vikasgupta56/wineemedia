import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)


const Section2 = () => {

    useEffect(() => {
        gsap.to(".img-clip", {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            scrollTrigger: {
                trigger: ".clipimg",
                start: "top 80%",
                end: "top 20%",
                // scrub: 1,
            }
        })

        // var tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".select-work",
        //         start: "top 75%",
        //         end: "top 60%",
        //         scrub: 1,
        //     }
        // })
        // tl
        //     .to(".line-about", {
        //         width: "96vw",
        //         duration: .8,
        //         ease: "none",
        //     }, "a")
        //     .to(".work-txt-about", {
        //         transform: "translateY(0)",
        //         duration: .8,
        //     }, "a")

        gsap.fromTo(".sect2-txt", {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.4,
            scrollTrigger: {
                trigger: ".sect2-txt",
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
            }
        })
        // gsap.fromTo(".sec2-txt1", {
        //     y: 10,
        //     opacity: 0,
        // }, {
        //     y: 0,
        //     opacity: 1,
        //     duration: 1,
        //     scrollTrigger: {
        //         trigger: ".sec2-txt1",
        //         start: "top 70%",
        //         end: "top 40%",
        //         scrub: 1,
        //     }
        // })

    }, [])

    return (
        <div className='w-full min-h-screen px-[2vw] pt-[8vw]'>
            {/* <div className='select-work relative w-full py-[5vw] md:py-[1.2vw] flex'>
                <div className='overflow-hidden'>
                    <h2 className='work-txt-about pl-[2vw] sm:pl-0 text-white text-[10vw] sm:text-[4.3vw] font-[heading2] leading-none' style={{ transform: "translateY(100%)" }}>About Us</h2>
                </div>
                <div className="line-about w-[0] h-[1px] bg-white/20 absolute left-0 bottom-0"></div>
            </div> */}
            {/* <h2 className='sec2-txt1 text-white px-[2vw] sm:px-0  font-[heading2] tracking-wide sm:tracking-tight w-full md:w-[70%] text-[4vw] md:text-[2vw] my-[10vw] md:my-[5vw]'>WineeMedia is a digital branding and marketing agency helping businesses elevate their online presence through strategic social media, engaging content, SEO, and high-impact advertising campaigns.</h2> */}
            <div className='clipimg w-full px-[2vw] sm:px-0 flex flex-col md:flex-row gap-[2vw]'>
                <div className='w-full md:w-1/2 h-[50vh] md:h-[120vh]'>
                    <Image width={1000} height={1000} style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='img-clip w-full h-[70%] md:h-[50%] object-cover' src="/aboutimg1.webp" alt="about-us-banner1" title="about-us-banner1" />'
                </div>
                <div className='w-full md:w-1/2 h-[60vh] md:h-[120vh]'>
                    <Image width={1000} height={1000} style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='img-clip w-full h-full object-cover' src="/aboutimg2.webp" alt="about-us-banner2" title="about-us-banner2" />
                </div>
            </div>
            <div className='w-full py-[10vw] px-[2vw] sm:px-0 sm:py-[5vw] pb-[10vw] text-white font-[heading2] tracking-wide sm:tracking-tight text-[4vw] sm:text-[2vw] md:text-[1vw] lg:text-[1.2vw]  flex flex-col items-center gap-[10vw] sm:gap-[4vw]'>
                <h4 className='sect2-txt w-full md:w-[40%]'>
                    WineeMedia's approach is data-driven and tailored to meet the specific needs of each client, ensuring effective engagement and measurable results.
                </h4>
                <h4 className='sect2-txt w-full md:w-[40%]'>
                    Their team of experienced professionals is dedicated to staying ahead of industry trends, leveraging the latest technologies and strategies to help clients achieve their marketing goals and grow their brand visibility online.</h4>
            </div>
        </div>
    )
}

export default Section2