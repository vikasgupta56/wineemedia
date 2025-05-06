import gsap from 'gsap'
import React, { createContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Contact from '../contact/Contact'

export const contactContext = createContext()

const Transition = ({ children }) => {
    const [isOpen, setisOpen] = useState(false)
    const router = useRouter()
    const [displayChildren, setDisplayChildren] = useState(children)
    const curtainRef = useRef(null)
    const [loading, setloading] = useState(0)

    const isHomePage = router.pathname === '/'
    const isAboutPage = router.pathname === '/about-us'
    const isWorkPage = router.pathname.startsWith('/work')

    const getRouteName = () => {
        if (isHomePage) return 'wineemedia'
        if (isAboutPage) return 'about'
        if (isWorkPage) {
            const workName = router.query.name;
            return workName ? `${workName}` : 'work'
        }
        return ''
    }

    useEffect(() => {
        const animateTransition = () => {
            if (isHomePage) {
                gsap.set(curtainRef.current, {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                })
                const loader = gsap.timeline()
                loader
                    .to(".loader-cover", {
                        width: "0",
                        duration: 6,
                        onUpdate: () => {
                            // Update loading percentage based on animation progress
                            setloading(Math.min(100, Math.floor(loader.progress() * 100)));
                        },
                    })
                    .to(curtainRef.current, {
                        onStart: () => {
                            setloading(100)
                        },
                        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                        duration: 0.8,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            window.scrollTo(0, 0)
                            setDisplayChildren(children)
                        },
                    })
            } else {
                gsap.set(curtainRef.current, {
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
                })
                gsap.to(curtainRef.current, {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 0.8,
                    ease: 'power2.inOut'
                }).then(() => {
                    window.scrollTo(0, 0)
                    setDisplayChildren(children)
                    gsap.to(curtainRef.current, {
                        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                        duration: 0.8,
                        ease: 'power2.inOut'
                    })
                })
            }
        }

        animateTransition()
    }, [children, isHomePage, isAboutPage, isWorkPage])

  

    return (
        <contactContext.Provider value={[isOpen, setisOpen]}>
            <div className="relative overflow-x-hidden">
                {displayChildren}
                {isOpen && <Contact/>}
                <div id='curtain' ref={curtainRef}
                    style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                    className="w-full h-screen bg-[#111111] fixed top-0 left-0 z-[999] flex flex-col items-center justify-center"
                >
                    {getRouteName() === "wineemedia" ? <>
                        <div className='relative'>
                            <div className='loader-cover w-full h-full absolute right-0 top-0 bg-[#111111] opacity-[.7]'></div>
                            <h1 className="text-[8vw] sm:text-[4vw] font-[styles] text-white">WineeMedia</h1>
                        </div>
                        <div className='flex items-center justify-between opacity-[.7] gap-[2vw] sm:gap-[.5vw]'>
                            <h4 className='text-white font-[font4] text-[4vw] sm:text-[2.2vw] lg:text-[1vw]'>Loading...</h4>
                            <div className='w-[2.5vw] text-white flex items-center justify-between'>{loading}<span>%</span></div>
                        </div>

                    </> : <h1 className="text-[8vw] sm:text-[3vw] font-[font4] text-white uppercase">{getRouteName()}</h1>}

                </div>
            </div>
        </contactContext.Provider>
    )
}
export default Transition