import gsap from 'gsap'
import React, { createContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Contact from '../contact/Contact'


export const contactContext = createContext()

const Transition = ({ children }) => {
    const [isOpen, setisOpen] = useState(false)
    const [displayChildren, setDisplayChildren] = useState(children)
    const curtainRef = useRef(null)
    const [loading, setloading] = useState(0)
    const router = useRouter();


    const isHomePage = router.pathname === '/'
    const isAboutPage = router.pathname === '/about-us'
    const isWorkPage = router.pathname.startsWith('/work')

    const getRouteName = () => {
        if (isHomePage) return 'wineemedia'
        if (isAboutPage) return 'about'
        if (isWorkPage) {
            const workName = router.query.name;
            return workName ? `${workName.split("-").join(" ")}` : 'work'
        }
        return ''
    }


  

    useEffect(() => {
        const animateTransition = () => {

            if (isHomePage) {
                gsap.set(curtainRef.current, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                })
                const loader = gsap.timeline()
                loader
                    .to(".loader-cover", {
                        width: "0",
                        duration: 2,
                        onUpdate: () => {
                            // Update loading percentage based on animation progress
                            setloading(Math.min(100, Math.floor(loader.progress() * 100)));
                        },
                    })
                    .to(curtainRef.current, {
                        onStart: () => {
                            setloading(100)
                        },
                        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                        duration: 0.8,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            setDisplayChildren(children)
                        },
                    })
            } else {
                gsap.set(curtainRef.current, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                })
                gsap.to(curtainRef.current, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.8,
                    ease: 'power2.inOut',
                }).then(() => {
                    setDisplayChildren(children)
                    gsap.to(curtainRef.current, {
                        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
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
                {isOpen && <Contact />}
                <div id='curtain' ref={curtainRef}
                    style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                    className="w-full h-screen bg-[#fff] fixed top-0 left-0 z-[999] flex flex-col items-center justify-center"
                >
                    {getRouteName() === "wineemedia" ? <>
                        <div className='flex items-center gap-[1.5vw] sm:gap-[.5vw]'>
                            <h4 className="text-[5vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1vw] font-[font6] text-black uppercase text-center w-full leading-[.8]">{getRouteName()}</h4>
                            <div className='flex items-center justify-between  font-[font6] gap-[2vw] sm:gap-[.5vw] text-[4vw] sm:text-[2.2vw] lg:text-[1vw]'>
                                <div className='relative font-[font6] w-[20vw] sm:w-[12vw] md:w-[10vw] lg:w-[5vw] h-[2px] bg-black'>
                                    <div className='loader-cover w-full h-full absolute right-0 top-0 bg-[#fff] opacity-[.7]'></div>
                                </div>
                                <div className='w-[2.5vw] text-black flex items-center justify-between'>{loading}<span>%</span></div>
                            </div>
                        </div>

                    </> : <h4 className="text-[8vw] font-[font6] sm:text-[3vw] text-black uppercase text-center">{getRouteName()}</h4>}

                </div>
            </div>
        </contactContext.Provider>
    )
}
export default Transition
