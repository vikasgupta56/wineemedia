import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const titleRef = useRef(null)
    useEffect(() => {
        const current = titleRef.current;
        if (current) {
            const animation = gsap.to(current.querySelectorAll("span"), {
                transform: "translateY(0%)",
                stagger: -0.3,
                duration: 3,
                scrollTrigger: {
                    trigger: current,
                    start: "top 80%",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });
            return () => animation.kill()
        }
    }, []);


    return (
        <div className='w-full flex flex-col justify-between h-[70vh] sm:h-screen bg-black p-[4vw] sm:p-[2vw] pt-[10vw] sm:pt-[4vw] text-white'>
            <div className='w-full flex flex-col md:flex-row items-start justify-between'>
                <div>
                    <h1 className='text-[15vw] sm:text-[15vw] md:text-[6vw] font-[font6] leading-[.8]'>Let's Connect</h1>
                    <h2 className='font-[font6] text-[4vw] md:text-[1vw]  mb-[10vw] sm:mb-0 mt-[3vw] sm:mt-[1.4vw]'>info@wineemedia.com</h2>
                </div>
                <div className='flex gap-[8vw] flex-col md:flex-row'>
                    <div className='flex flex-col gap-[.3vw] text-[4vw] sm:text-[3vw] md:text-[1vw]'>
                        <Link href="/" className='link-hover'>Home</Link>
                        <Link href="/work" className='link-hover'>Work</Link>
                        <Link href="/about" className='link-hover'>About</Link>
                    </div>
                    <div className='flex flex-col gap-[.3vw] text-[4vw] sm:text-[3vw] md:text-[1vw]'>
                        <Link href="https://www.instagram.com/wineemedia/" className='link-hover'>Instagram</Link>
                        <Link href="https://www.linkedin.com/company/wineemedia/?originalSubdomain=in" className='link-hover'>Linkedin</Link>
                    </div>
                </div>

            </div>
            <div className='w-full text-white font-[font6]'>
                <div className='overflow-hidden flex items-center justify-center'>
                    <h1 ref={titleRef} className='hidden sm:hidden  md:block logo-title text-[15.5vw] whitespace-nowrap leading-none' >{"wineemedia".split("").map((l, i) => <span key={i} style={{transform:"translateY(-100%)"}} className='inline-block'>{l}</span>)}</h1>
                    <h1 className='block  sm:block md:hidden logo-title text-[16.5vw] whitespace-nowrap leading-none' >winemedia</h1>
                </div>
                <div className='w-full flex text-[2.3vw] sm:text-[2vw] md:text-[1vw] text-white/50 font-[font4] items-center justify-between'>
                    <h2>Developed By <Link href="https://www.zerrorstudios.com/" className='font-[font6] text-white/80'>Zerror Studios</Link></h2>
                    <h2>© 2023 by WineeMedia.</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer