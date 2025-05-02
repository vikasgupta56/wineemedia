import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'


gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {

    const servicesData = [
        {
            title: "360° Branding",
            description: "We create a cohesive brand identity that shines across every touchpoint, ensuring consistency and recognition in a competitive market.",
            color:"#C68FB0",
            text:"#191216"
        },
        {
            title: "Consultation",
            description: "Our expert strategies are designed to align with your business goals, helping you navigate the ever-evolving digital landscape with confidence.",
            color:"#5B2E7A",
            text:"#DDD6E2"
        },
        {
            title: "Web & App Development",
            description: "We build engaging, high-performing platforms that enhance user experience and drive conversions, making your brand digitally unstoppable.",
            color:"#2A487E",
            text:"#DEDFE0"
        },
        {
            title: "Digital Marketing",
            description: "With cutting-edge SEO, PPC, and social media strategies, we amplify your brand’s reach and deliver measurable growth.",
            color:"#2C4E58",
            text:"#B2B9BB"
        },
        {
            title: "Branding & Design",
            description: "From logos to packaging, we craft visually compelling assets that tell your brand’s story and leave a lasting impact.",
            color:"#495D42",
            text:"#CACEC9"
        },
        {
            title: "Photography",
            description: "High-quality, brand-focused visuals that capture attention, evoke emotions, and set you apart in a crowded marketplace.",
            color:"#C51331",
            text:"#F4D9DE"
        },
        {
            title: "Video & Audio",
            description: "Engaging storytelling through dynamic video and audio content that resonates with your audience and builds lasting connections.",
            color:"#AAB2A1",
            text:"#41443E"
        },
        {
            title: "Graphic Design",
            description: "Striking, on-brand creatives that enhance your brand’s visual appeal and make every campaign unforgettable.",
            color:"#FAAC30",
            text:"#3F2C0C"
        }
    ];


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
            .to(".line2", {
                width: "96%",
                duration: .8,
                ease: "none",
            }, "a")
            .to(".work-txt2", {
                transform: "translateY(0)",
                duration: .8,
            }, "a")

        gsap.to(".our-works", {
            backgroundColor: "white",
            duration: 1,
            scrollTrigger: {
                trigger: ".our-works",
                start: "top 90%",
                end: "top 60%",
                scrub: 1,
            }
        })
    }, [])
    var rotate = 0
    var diffrot = 0

    const handleMouseMove = (e) => {
        var diff = e.clientY - e.target.getBoundingClientRect().top
        diffrot = e.clientX - rotate
        rotate = e.clientX
        gsap.to(e.currentTarget.querySelector(".over-img"), {
            left: e.clientX,
            top: diff,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
            ease: "power1",
        })

        gsap.to(e.currentTarget.querySelector(".over-img"), {
            opacity: 1,
            duration: .2
        })

        // gsap.to(e.target.querySelector("h4"), {
        //     x: 50,
        //     ease: "power1",
        // })
        gsap.to(e.target.querySelector(".shadow-over"), {
            width: 0,
            ease: "power1",
        })
    }
    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget.querySelector(".over-img"), {
            opacity: 0,
            duration: 0.5, // Add duration here
            ease: "power4.out",
        })
        // gsap.to(e.target.querySelector("h4"), {
        //     x: 0,
        //     duration: 0.5, // Ensure duration is set
        //     ease: "power1",
        // })
        gsap.to(e.target.querySelector(".shadow-over"), {
            width: "100%",
            duration: 0.5, // Set duration
            ease: "power1",
        })
    }

    

    return (
        <div className='our-works w-full py-[2vw] pb-[10vw] sm:pb-[6vw] bg-black'>
            <div className='select-work2 relative w-full mx-[2vw] py-[5vw] sm:py-[1.2vw] flex mt-[6vw]'>
                <div className='overflow-hidden'>
                    <h3 className='work-txt2 text-black text-[10vw] sm:text-[5vw] font-[font6] leading-none capitalize' style={{ transform: "translateY(100%)" }}>uncover what we can serve</h3>
                </div>
                <div className="line2 w-[0%] h-[1px] bg-black absolute left-0 bottom-0"></div>
            </div>
            <div className=''>
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        // onMouseEnter={(e) => handleMouseMove(e)}
                        // onMouseMove={(e) => handleMouseMove(e)}
                        // onMouseLeave={(e) => handleMouseLeave(e)}
                        className='our-work relative px-[2vw] flex items-center justify-between text-black py-[8vw] sm:py-[7vw] md:py-[4vw] border-b border-black'
                    >
                        <h4 className='z-10 text-[6.2vw] sm:text-[4.2vw] md:text-[3.2vw] font-[font4] font-semibold pointer-events-none'>{service.title}</h4>
                        <h5 className='z-10 hidden md:block w-[25%] text-right md:text-[1.1vw]'>{service.description}</h5>
                        <div className='z-10 hidden sm:block shadow-over w-full h-full absolute right-0 top-1/2 -translate-y-1/2  pointer-events-none'></div>
                        <div
                            style={{ transform: "translate(-50%,-50%)" }}
                            className="hidden  sm:block  over-img z-[999] pointer-events-none h-[20vw] opacity-0 w-[27vw] top-1/2 left-1/2 absolute overflow-hidden"
                        >
                            {/* <Image width={1000} height={1000}
                                className='w-full h-full object-cover object-center'
                                src={service.imageUrl}
                                alt={service.title}
                                title={service.title}
                            /> */}
                        </div>
                        <div className='w-full h-full overflow-hidden absolute pointer-events-none top-0 z-[11] left-0'>
                            <div  style={{ backgroundColor: service.color }} className={`back-slide w-full h-full absolute px-[2vw] top-full z-[9] left-0  text-white flex items-center justify-between`}>
                            <h4 style={{ color: service.text }} className='text-[6vw] sm:text-[4vw] md:text-[3vw] font-[font4] font-semibold pointer-events-none'>{service.title}</h4>
                            <h5 style={{ color: service.text }} className='hidden md:block w-[25%] text-right md:text-[1.1vw]'>{service.description}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section4