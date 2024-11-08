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
        <div className='w-full flex flex-col justify-between h-screen bg-black p-[2vw] pt-[4vw] text-white'>
            <div className='w-full flex items-start justify-between'>
                <div>
                    <h1 className='text-[6vw] font-[font6] leading-[.8]'>Let's Connect</h1>
                    <h2 className='font-[font6] text-[1vw] mt-[1.4vw]'>info@wineemedia.com</h2>
                </div>
                <div className='flex gap-[8vw]'>
                    <div className='flex flex-col gap-[.3vw] text-[1vw]'>
                        <Link href="/" className='link-hover'>Home</Link>
                        <Link href="/work" className='link-hover'>Work</Link>
                        <Link href="/about" className='link-hover'>About</Link>
                        <Link href="/" className='link-hover'>Contact</Link>
                    </div>
                    <div className='flex flex-col gap-[.3vw] text-[1vw]'>
                        <Link href="/" className='link-hover'>Instagram</Link>
                        <Link href="/" className='link-hover'>Linkdin</Link>
                        <Link href="/" className='link-hover'>Dribbble</Link>
                    </div>
                </div>

            </div>
            <div className='w-full text-white font-[font6]'>
                <div className='overflow-hidden flex items-center justify-center'>
                    <h1 ref={titleRef} className='logo-title text-[15.5vw] whitespace-nowrap leading-none' >{"wineemedia".split("").map((l, i) => <span key={i} style={{transform:"translateY(-100%)"}} className='inline-block'>{l}</span>)}</h1>
                </div>
                <div className='w-full flex text-[1vw] text-white/50 font-[font4] items-center justify-between'>
                    <h2>Developed By <span className='font-[font6] text-white/80'>Zerror Studios</span></h2>
                    <h2>© 2023 by WineeMedia.</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer