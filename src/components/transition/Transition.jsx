import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const Transition = ({ children }) => {
    const router = useRouter()
    const [displayChildren, setDisplayChildren] = useState(children)
    const curtainRef = useRef(null)

    const isHomePage = router.pathname === '/'

    useEffect(() => {
        const animateTransition = () => {
            if (isHomePage) {
                gsap.set(curtainRef.current, {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                })
                gsap.to(curtainRef.current, {
                    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                    duration: 0.8,
                    delay:1,
                    ease: 'power2.inOut',
                    onComplete: () => setDisplayChildren(children),
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
    }, [children, isHomePage])

    return (
        <div className="relative">
            {displayChildren}
            <div
                ref={curtainRef}
                style={{ clipPath:"polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                className="w-full h-screen bg-[#111111] fixed top-0 left-0 z-[999] flex items-center justify-center"
            >
                <h2 className='text-white font-[font2] text-[2vw] uppercase'>wineemedia</h2>
            </div>
        </div>
    )
}

export default Transition
