import React, { useEffect, useRef } from 'react';
import Navbar from '../navbar/Navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {
    const navRef = useRef(null)
    useEffect(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section1",
                start: "top 0%",
                end: "top -10%",
                scrub: 1,
                pin: true,
            }
        })
        tl
            .to(navRef.current, {
                y: "-100%",
                duration: .3
            }, "a")
         
      
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }

    }, []);


    const socialLinks = [
        { icon: "instagram-line", link: "https://www.instagram.com/wineemedia/",alt:"instagram" },
        { icon: "behance-line", link: "https://www.behance.net/wineemedia",alt:"behance" },
        { icon: "linkedin-fill", link: "https://www.linkedin.com/company/wineemedia/?originalSubdomain=in" ,alt:"linkedin"},
      ];
  
    return (
        <div   className='section1 overflow-hidden h-screen relative w-full text-white text-center flex flex-col items-center justify-center uppercase'>
            <Navbar nav={navRef} />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black'>
            <video autoPlay  muted={true} preload="auto"  loop playsInline className='w-full h-full object-cover' src="/shortv.mp4"></video>
            </div>
            <div className='w-full flex justify-end pb-[10vw] sm:pb-[2vw] p-[4vw] sm:p-[2vw] absolute bottom-0 '>
                <div className='social flex items-center gap-[3vw] sm:gap-[3vw]   md:gap-[1vw]'>
                    {socialLinks.map((s, idx) => (
                        <Link href={s.link} target='_blank' aria-label={`Follow us on ${s.alt}`} title={s.alt} key={idx} className="w-[10vw] sm:w-[7vw] md:w-[3vw]  h-[10vw] sm:h-[7vw] md:h-[3vw] border border-white rounded-full flex items-center justify-center text-white relative overflow-hidden social-i cursor-pointer">
                            <span className='cir transition-all duration-300 w-full h-full absolute bg-white rounded-full left-1/2 -translate-x-1/2 top-full'></span>
                            <i className={`text-[4vw] sm:text-[3vw] md:text-[1.2vw] transition-all duration-300 relative ri-${s.icon}`}></i>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section1;

