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
                    start: "top 95%",
                    end: "bottom bottom",
                    scrub: 1,
                },
            });

            setTimeout(()=>{
                ScrollTrigger.refresh();
            },100) 

            return () => {
                animation.kill();
            };
        }
    }, []);
    const handleLogo = (e) => {
        const bounds = document.querySelector(".logo-footer").getBoundingClientRect();
        const offsetX = (e.clientX - bounds.left - bounds.width / 2) / bounds.width;
        const offsetY = (e.clientY - bounds.top - bounds.height / 2) / bounds.height;
        
        gsap.to(".logo-footer", {
            x: offsetX * 20, 
            y: offsetY * 20,
            duration: 0.1,   
        });
    }


    return (
        <div className='w-full flex flex-col justify-between h-[70vh] relative sm:h-[75vh] bg-black p-[4vw] sm:p-[2vw] sm:pt-[4vw] pt-[10vw] text-white'>
            <div className='w-full flex flex-col md:flex-row items-start justify-between'>
                <div>
                    <h3 className='text-[10vw] sm:text-[3.5vw] font-[heading2] leading-[.8] whitespace-nowrap'>Let's Connect</h3>
                    <h6 className='font-[heading2] text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw]  mb-[10vw] sm:mb-0 mt-[3vw] sm:mt-[1.4vw]'>info@wineemedia.com</h6>
                </div>
                <div className='flex gap-[8vw] flex-col md:flex-row font-[heading2]'>
                    <div className='flex flex-col gap-[.3vw] text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw]'>
                        <Link href="/" className='link-hover' title='Home'>Home</Link>
                        <Link href="/work" className='link-hover' title='Work'>Work</Link>
                        <Link href="/about-us" className='link-hover' title='About'>About</Link>
                    </div>
                    <div className='flex flex-col gap-[.3vw] text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw]'>
                        <Link target='_blank' href="https://www.instagram.com/wineemedia/" title='Instagram' className='link-hover'>Instagram</Link>
                        <Link target='_blank' href="https://www.behance.net/wineemedia" title='Behance' className='link-hover'>Behance</Link>
                        <Link target='_blank' href="https://www.linkedin.com/company/wineemedia/?originalSubdomain=in" title='Linkedin' className='link-hover'>Linkedin</Link>
                    </div>
                </div>

            </div>
            <div className='w-full text-white font-[heading2]'>
                <div className='overflow-hidden flex items-end justify-center md:h-[13.2vw]'>
                    <h3 ref={titleRef} className='hidden sm:hidden  md:block logo-title text-[13vw] whitespace-nowrap font-[styles] leading-[.8]' >{"Winee Media".split("").map((l, i) => <span key={i} style={{ transform: "translateY(-120%)" }} className='inline-block'>{l}</span>)}</h3>
                    <h3 className='block  sm:block md:hidden logo-title text-[12.5vw] font-[styles]  whitespace-nowrap leading-none' >WineeMedia</h3>
                </div>
                <div className='w-full flex text-[4vw] flex-col sm:flex-row  sm:text-[2vw] md:text-[1.5vw]  lg:text-[1vw] text-white/50 font-[font4] items-left sm:items-center justify-between'>
                    <h6 className='mb-[.6vw] mt-[2vw] sm:mt-0 sm:mb-0'>© 2024 by WineeMedia.</h6>
                    <h6>Developed By <Link target='_blank' title='zerrorstudios' href="https://www.zerrorstudios.com/" className='font-[heading2] text-white/80'>Zerror Studios</Link></h6>
                </div>
            </div>
        </div>
    )
}

export default Footer