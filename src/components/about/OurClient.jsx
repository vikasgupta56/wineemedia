import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Reviews from '@/components/about/Reviews'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const OurClient = () => {
    const clipRefs = useRef([])
    const handleClipMove = (i) => {
        gsap.to(clipRefs.current[i].querySelector(".clipeffect"), {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
        })
    }
    const handleClipLeave = (i) => {
        gsap.to(clipRefs.current[i].querySelector(".clipeffect"), {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
        })
    }

    const clientData = [
        {
            logo: "/clients/dawn.webp",
            name: "dawn knight",
        },
        {
            logo: "/clients/zerror.webp",
            name: "zerror studios",
        },
        {
            logo: "/clients/brandCreation.webp",
            name: "brand creation",
        },
        {
            logo: "/clients/envision.webp",
            name: "envision dazzling",
        },
        {
            logo: "/clients/daroma.webp",
            name: "daroma an italian cafe",
        },
        {
            logo: "/clients/meera.webp",
            name: "meera",
        },
        {
            logo: "/clients/nexPoze.webp",
            name: "nexpoze production",
        },

        {
            logo: "/clients/pepe.webp",
            name: "pepe cafe",
        },
        {
            logo: "/clients/Pace.webp",
            name: "pace",
        },
        {
            logo: "/clients/maab.webp",
            name: "maab cosmetics",
        },
    ]

    useEffect(() => {
        gsap.to(".client-txt", {
            transform: "translateY(0%)",
            duration: 1,
            scrollTrigger: {
                trigger: ".client-txt-p",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
            }
        })

        gsap.fromTo(".client-txt1", {
            y: 10,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".client-txt1",
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
            }
        })
    }, [])



    return (
        <div className='w-full py-[8vw] text-white px-[2vw]'>
            <div className='h-[11vw] sm:h-[6vw] client-txt-p overflow-hidden'>
                <h3 className='client-txt text-[10vw] sm:text-[5vw] font-[font6] leading-none py-[.6vw]' style={{ transform: "translateY(100%)" }}>Still not convinced?</h3>
            </div>
            <div className='h-[11vw] sm:h-[6vw] client-txt-p overflow-hidden'>
                <h3 className='client-txt text-[10vw] sm:text-[5vw] font-[font6] leading-none py-[.6vw]' style={{ transform: "translateY(100%)" }}>Well, they were.</h3>
            </div>
            <div className='w-full pt-[6vw] sm:pt-[3vw] flex flex-wrap gap-[1.5vw]'>
                {
                    clientData.map((c, i) => (<div key={i} ref={el => clipRefs.current[i] = el} onMouseMove={() => handleClipMove(i)} onMouseLeave={() => handleClipLeave(i)} className='shrink-0 w-[49%] md:w-[18vw] h-[30vw] md:h-[13vw]  cursor-pointer relative bg-white/10 flex items-center justify-center'>
                        <div className='clipeffect absolute bottom-0 left-0 h-full w-full bg-zinc-800' style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}>
                        </div>
                        <img className='w-[50%] h-auto relative' style={{ filter: " grayscale(100%) contrast(100%)" }} src={c.logo} alt={c.name} title={c.name} />
                    </div>))
                }

            </div>
            <p className='client-txt1 text-white font-[font6] w-full md:w-[70%] text-[3vw] md:text-[2vw] capitalize my-[5vw]'>
                Our clients had an amazing experience collaborating with us, praising our dedication,
                creativity, and
                professionalism every step of the way. We're confident you'll feel the same and enjoy a
                seamless, rewarding
                partnership with us!
            </p>
            <Reviews />
        </div>
    )
}

export default OurClient