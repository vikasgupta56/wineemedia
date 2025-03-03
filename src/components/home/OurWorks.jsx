import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'


gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {

    const servicesData = [
        {
            title: "Branding",
            description: "Creating a unique identity for your business through design and strategy.",
            imageUrl: "brand (1).webp"
        },
        {
            title: "Marketing",
            description: "Developing strategies to increase your brand’s visibility and reach.",
            imageUrl: "brand (2).webp"
        },
        {
            title: "Social Media Management",
            description: "Building and managing your online presence across various platforms.",
            imageUrl: "brand (3).webp"
        },
        {
            title: "Motion Graphics",
            description: "Bringing visual elements to life through animations and motion design.",
            imageUrl: "brand (4).webp"
        },
        {
            title: "3D Designs",
            description: "Creating immersive, lifelike 3D experiences for digital or physical spaces.",
            imageUrl: "brand (5).webp"
        },
        {
            title: "Digital Marketing",
            description: "Using digital channels to promote your brand and drive sales.",
            imageUrl: "brand (6).webp"
        },
        {
            title: "Videography/Photography",
            description: "Capturing stunning visuals to tell your brand's story.",
            imageUrl: "brand (7).webp"
        },
        {
            title: "Influencer Marketing",
            description: "Partnering with influencers to promote your brand to a broader audience.",
            imageUrl: "brand (8).webp"
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
        gsap.to(e.target.querySelector(".over-img"), {
            left: e.clientX,
            top: diff,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
            ease: "power1",
        })

        gsap.to(e.target.querySelector(".over-img"), {
            opacity: 1,
            duration: .2
        })

        gsap.to(e.target.querySelector("h4"), {
            x: 50,
            ease: "power1",
        })
        gsap.to(e.target.querySelector(".shadow-over"), {
            width: 0,
            ease: "power1",
        })
    }
    const handleMouseLeave = (e) => {
        gsap.to(e.target.querySelector(".over-img"), {
            opacity: 0,
            duration: 0.5, // Add duration here
            ease: "power4.out",
        })
        gsap.to(e.target.querySelector("h4"), {
            x: 0,
            duration: 0.5, // Ensure duration is set
            ease: "power1",
        })
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
                        onMouseEnter={(e) => handleMouseMove(e)}
                        onMouseMove={(e) => handleMouseMove(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                        className='our-work relative px-[2vw] flex items-center justify-between text-black py-[8vw] sm:py-[7vw] md:py-[4vw] border-b border-black'
                    >
                        <h4 className='text-[6vw] sm:text-[4vw] md:text-[3vw] font-[font4] font-semibold pointer-events-none'>{service.title}</h4>
                        <h5 className='hidden md:block w-[15%] text-right md:text-[1.1vw]'>{service.description}</h5>
                        <div className='hidden sm:block shadow-over w-full h-full absolute right-0 top-1/2 -translate-y-1/2  pointer-events-none'></div>
                        <div
                            style={{ transform: "translate(-50%,-50%)" }}
                            className="hidden sm:block  over-img z-10 pointer-events-none h-[20vw] opacity-0 w-[27vw] top-1/2 left-1/2 absolute overflow-hidden"
                        >
                            <img
                                className='w-full h-full object-cover object-center'
                                src={service.imageUrl}
                                alt={service.title}
                                title={service.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section4