import React, { useEffect, useRef } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { usePathname } from 'next/navigation'
gsap.registerPlugin(ScrollTrigger)

export const Layout = ({ children }) => {
    const navRef = useRef(null)
    const pathName = usePathname()

    useEffect(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section1",
                start: "top 0%",
                end: "top -100%",
                scrub: 1,
                pin: true,
            }
        })
        tl
            .to(navRef.current, {
                y: "-100%",
                duration: .3
            }, "a")
            .to(".header-txt", {
                y: -50,
            }, "a")

            .to(".header-video", {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
            }, "a")

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }

    }, []);


    return (
        <>
            <Navbar navRef={pathName === "/" ? navRef : null} />
            {children}
            <Footer />
        </>
    )
}
