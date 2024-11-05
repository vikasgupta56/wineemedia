import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const titleRef =  useRef(null)
// useEffect(() => {
//     const current = titleRef.current;
//     if (current) {
//         const animation = gsap.from(current.querySelectorAll("span"), {
//             y: "-100%",
//             stagger: -0.3,
//             duration: 3,
//             scrollTrigger: {
//                 trigger: current,
//                 start: "top 80%",
//                 end: "bottom bottom",
//                 scrub: 1,
//             }
//         });

//         return () => {
//             if (animation) {
//                 animation.kill();
//             }
//         };
//     }
// }, []);


  return (
    <div className='w-full flex flex-col justify-between h-screen bg-[#0E0E0E] p-[2vw] pt-[4vw] text-white'>
        <div className='w-full flex items-start justify-between'>
            <h1 className='text-[6vw] font-[font6] leading-[.8]'>Let's Connect</h1>
           <div className='flex gap-[8vw]'>
           <div className='flex flex-col gap-[.3vw] text-[1vw]'>
                <Link href="/" className='link-hover'>Home</Link>
                <Link href="/work" className='link-hover'>Work</Link>
                <Link href="/" className='link-hover'>About</Link>
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
            <div className='w-full flex items-center mb-[1.5vw] justify-between text-[1.2vw]'>
                <h2>Mumbai - 401105</h2>
                <div className='flex items-center gap-[7vw]'>
                    <h2>info@wineemedia.com</h2>
                    <h2>© 2023 by WineeMedia.</h2>
                </div>
            </div>
            <div className='overflow-hidden flex items-center justify-center'>
                <h1 ref={titleRef} className='logo-title text-[15.5vw] whitespace-nowrap leading-none'>{"wineemedia".split("").map((l,i)=><span key={i} className='inline-block'>{l}</span>)}</h1>
            </div>
            <div className='w-full flex text-[1vw] text-white/50 font-[font4] items-center justify-between'>
                <h2>Developed By <span className='font-[font6] text-white/80'>Zerror Studios</span></h2>
                <div className='flex items-center gap-[2vw]'>
                <Link href="/">Instagram</Link>
                <Link href="/">Linkedin</Link>
                <Link href="/">Dribbble</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer