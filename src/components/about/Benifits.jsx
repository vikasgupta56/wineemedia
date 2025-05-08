import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)
const Benifits = ({benifitsRef}) => {

    useEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".select-work2",
                start: "top 75%",
                end: "top 60%",
                scrub: 1,
            }
        })
        tl
            .to(".line-about2", {
                width: "96vw",
                duration: .8,
                ease: "none",
            }, "a")
            .to(".work-txt-about2", {
                transform: "translateY(0)",
                duration: .8,
            }, "a")

        gsap.fromTo(".benfit-txt1", {
            y: 10,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".benfit-txt1",
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
            }
        })

        
    }, [])

    return (
        <div ref={benifitsRef} className='benifits w-full px-[2vw] text-white'>
            <div className='select-work2 relative w-full py-[5vw] md:py-[1.2vw] flex'>
                <div className='overflow-hidden'>
                    <h2 className='work-txt-about2 pl-[2vw] sm:pl-0 text-[10vw] sm:text-[4.3vw] font-[heading2] leading-none' style={{ transform: "translateY(100%)" }}>Benefits</h2>
                </div>
                <div className="line-about2 w-[0] h-[1px] bg-white/20 absolute left-0 bottom-0"></div>
            </div>
            <h2 className='benfit-txt1 px-[2vw] sm:px-0 font-[heading2] tracking-wide sm:tracking-tight w-full md:w-[70%] text-[4vw] md:text-[2vw] my-[10vw]  sm:my-[5vw]'>
                At WineeMedia, we create meaningful brand experiences through tailored solutions and innovative strategies. Trusted by brands like Daroma and Nexpoze Production, we help your brand grow and thrive in the digital age.    </h2>
            <div className='w-full flex  px-[2vw] sm:px-0 flex-col md:flex-row gap-[10vw] sm:gap-[2vw]'>
                <div className='w-full relative'>
                    <div className="lineab w-full h-[1px] bg-white/20 top-0 left-0"></div>
                    <h3 className='font-[heading] tracking-wide sm:tracking-tight text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] my-[5vw] md:my-[1.5vw]'>Exceptional Quality and Creativity</h3>
                    <p className='text-[4vw] sm:text-[2vw] md:text-[1vw] lg:text-[1.2vw] w-[95%] text-white/60 font-[heading2] tracking-wide sm:tracking-tight'>
                        Our expert photographers and videographers craft stunning, timeless visuals tailored to your brand. Using cutting-edge tech and creative techniques, we deliver content that leaves a lasting impression and reflects your unique identity.
                    </p>
                </div>
                <div className='w-full relative'>
                    <div className="lineab w-full h-[1px] bg-white/20 top-0 left-0"></div>
                    <h3 className='font-[heading] tracking-wide sm:tracking-tight text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] my-[5vw] md:my-[1.5vw]'>Professional and Personalized Service</h3>
                    <p className='text-[4vw] sm:text-[2vw] md:text-[1vw] lg:text-[1.2vw] w-[95%] text-white/60 font-[heading2] tracking-wide sm:tracking-tight'>
                        We offer personalized services tailored to your needs, ensuring a smooth, enjoyable experience from start to finish. With years of industry expertise, we provide trusted guidance to help you make the best choices for your project.
                    </p>
                </div>
                <div className='w-full relative'>
                    <div className="lineab w-full h-[1px] bg-white/20 top-0 left-0"></div>
                    <h3 className='font-[heading] tracking-wide sm:tracking-tight text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] my-[5vw] md:my-[1.5vw]'>Versatile and Comprehensive Solutions</h3>
                    <p className='text-[4vw] sm:text-[2vw] md:text-[1vw] lg:text-[1.2vw] w-[95%] text-white/60 font-[heading2] tracking-wide sm:tracking-tight'>
                        From photography to videography, we offer a full range of visual content services. Our diverse portfolio—spanning luxury hotels, fashion shoots, and underwater projects—highlights our versatility and commitment to top-tier quality using state-of-the-art equipment.
                    </p>
                </div>
            </div>
            <div className='w-full py-[10vw] flex gap-[3vw]'>
                <div className='marquee-about w-fit  flex items-center font-[styles] text-[6vw] gap-[3vw]'>
                    <span>-</span>
                    <h5 className='whitespace-nowrap'>WineeMedia</h5>
                    <span>-</span>
                    <h5 className='whitespace-nowrap'>WineeMedia</h5>
                    <span>-</span>
                    <h5 className='whitespace-nowrap'>WineeMedia</h5>
                    <span>-</span>
                    <h5 className='whitespace-nowrap'>WineeMedia</h5>
                </div>
                <div className='marquee-about w-fit  flex items-center font-[styles] text-[6vw] gap-[3vw]'>
                    <span>-</span>
                    <h5 className='whitespace-nowrap'>WineeMedia</h5>
                    <span>-</span>
                    <h5 className='whitespace-nowrap'>WineeMedia</h5>
                    <span>-</span>
                    <h5 className='whitespace-nowrap'>WineeMedia</h5>
                    <span>-</span>
                    <h5 className='whitespace-nowrap'>WineeMedia</h5>
                </div>
            </div>
        </div>
    )
}

export default Benifits