import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
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
                scrub: 1,
            }
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
            .to(".line-about", {
                width: "96vw",
                duration: .8,
                ease: "none",
            }, "a")
            .to(".work-txt-about", {
                transform: "translateY(0)",
                duration: .8,
            }, "a")

        gsap.fromTo(".sect2-txt", {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration:1,
            stagger:0.4,
            scrollTrigger: {
                trigger: ".sect2-txt",
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
            }
        })
        gsap.fromTo(".sec2-txt1", {
            y: 10,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration:1,
            scrollTrigger: {
                trigger: ".sec2-txt1",
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
            }
        })

    }, [])

    return (
        <div className='w-full min-h-screen px-[2vw]'>
            <div className='select-work relative w-full py-[5vw] sm:py-[1.2vw] flex'>
                <div className='overflow-hidden'>
                    <h2 className='work-txt-about text-white text-[10vw] sm:text-[5vw] font-[font6] leading-none' style={{ transform: "translateY(100%)" }}>About Us</h2>
                </div>
                <div className="line-about w-[0] h-[1px] bg-white/60 absolute left-0 bottom-0"></div>
            </div>
            <h2 className='sec2-txt1 text-white font-[font6] w-full sm:w-[70%] text-[3vw] sm:text-[2vw] capitalize my-[10vw] sm:my-[5vw]'>Welcome to LuxeFrame, where we transform moments into timeless visual narratives. Founded with a
                passion for capturing the essence of life's most cherished experiences, LuxeFrame is dedicated
                to crafting captivating photography and videography that resonates with authenticity and
                elegance.
            </h2>
            <div className='clipimg w-full flex flex-col sm:flex-row gap-[2vw]'>
                <div className='w-full sm:w-1/2 h-[80vh] sm:h-[120vh]'>
                    <img style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='img-clip w-full h-[70%] sm:h-[50%] object-cover' src="https://luxeframe.netlify.app/about1.webp" alt="" />'
                </div>
                <div className='w-full sm:w-1/2 h-[80vh] sm:h-[120vh]'>
                    <img style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='img-clip w-full h-full object-cover' src="https://luxeframe.netlify.app/about2.webp" alt="" />
                </div>
            </div>
            <div className='w-full py-[5vw] pb-[10vw] text-white font-[font4] text-[3vw] sm:text-[1.1vw] flex flex-col items-center gap-[4vw]'>
                <h4 className='sect2-txt w-full sm:w-[50%]'>
                    We believe in the power of storytelling through imagery. Whether it's the serene
                    landscapes of the Dolomites, the bustling streets of Paris, or the vibrant energy of an event at
                    sunset, our team of talented photographers and videographers is committed to exceeding
                    expectations. With a meticulous attention to detail and a commitment to quality, we ensure that
                    each frame tells a compelling story, evoking emotions and capturing moments that last a
                    lifetime.
                </h4>
                <h4 className='sect2-txt w-full sm:w-[50%]'>
                    Driven by innovation and a deep understanding of visual arts, LuxeFrame is not just a
                    photography studio; it's a creative hub where ideas come to life. From concept to execution, we
                    collaborate closely with our clients to deliver outstanding results that resonate with their
                    vision and exceed industry standards. Discover the artistry of LuxeFrame and let us create
                    breathtaking visuals that elevate your brand and tell your story with grace and sophistication.
                </h4>
            </div>
        </div>
    )
}

export default Section2