import React, { useEffect, useRef } from 'react';
import Navbar from '../navbar/Navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger)

const Section1 = ({videoRef,playerRef,handlePlayer}) => {
    const navRef = useRef(null)
    const img3dRef = useRef(null)
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

    const handleMouseMove3d = (e) => {
        const bounds = img3dRef.current.getBoundingClientRect();
        const offsetX = (e.clientX - bounds.left - bounds.width / 2) / bounds.width;
        const offsetY = (e.clientY - bounds.top - bounds.height / 2) / bounds.height;
        
        gsap.to(img3dRef.current, {
            x: offsetX * 12, 
            y: offsetY * 12,
            duration: 0.1,   
        });
       
    };

    const handlePlayerMove = ()=>{
        const player = playerRef.current;
        gsap.to(playerRef.current, {
            scale:1,
            duration: 0.2,   
            ease: "power3.out"
        });
    }
    const handlePlayerLeave = ()=>{
        const player = playerRef.current;
        gsap.to(playerRef.current, {
            scale:0,
        });
    }
    const socialLinks = [
        { icon: "instagram-line", link: "https://www.instagram.com/wineemedia/" },
        { icon: "behance-line", link: "https://www.behance.net/wineemedia" },
        { icon: "linkedin-fill", link: "https://www.linkedin.com/company/wineemedia/?originalSubdomain=in" },
      ];
  
    return (
        <div onMouseMove={handleMouseMove3d}   className='section1 overflow-hidden h-screen relative w-full text-white text-center flex flex-col items-center justify-center uppercase'>
            <Navbar nav={navRef} />
            <div className='header-txt font-[font6] relative z-[9]'>
                <div className='h-[7vw] overflow-hidden'>
                <h1 className='text-header text-[5vw] leading-none '>Designing identities, </h1>
                </div>
                <div className='h-[7vw] overflow-hidden' >
                <h1 className='text-header text-[5vw] '> telling stories, and delivering </h1>
                </div>
                <div className='h-[7vw] overflow-hidden' >
                <h1 className='text-header text-[5vw] '> results that matter.</h1>
                </div>
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black'>
                <video autoPlay muted loop playsInline ref={img3dRef} className='w-full h-full object-center object-cover' src="/herovid.mp4"></video>
            {/* <img ref={img3dRef} className='w-[100%] sm:w-[55%] object-center object-contain opacity-[.6]' src="https://i.pinimg.com/originals/e5/e6/63/e5e6635548920977766cd93efd38ec6b.gif" alt="" /> */}
            </div>
            <div className='w-full flex justify-end pb-[10vw] sm:pb-[2vw] p-[2vw] absolute bottom-0'>
                <div className='social flex items-center gap-[3vw] sm:gap-[3vw]   md:gap-[1vw]'>
                    {socialLinks.map((s, idx) => (
                        <Link href={s.link} key={idx} className="w-[10vw] sm:w-[7vw] md:w-[3vw]  h-[10vw] sm:h-[7vw] md:h-[3vw] border border-white rounded-full flex items-center justify-center text-white relative overflow-hidden social-i cursor-pointer">
                            <span className='cir transition-all duration-300 w-full h-full absolute bg-white rounded-full left-1/2 -translate-x-1/2 top-full'></span>
                            <i className={`text-[4vw] sm:text-[3vw] md:text-[1.2vw] transition-all duration-300 relative ri-${s.icon}`}></i>
                        </Link>
                    ))}
                </div>
            </div>
            <div onMouseMove={handlePlayerMove} onClick={handlePlayer} onMouseLeave={handlePlayerLeave} style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }} className='header-video bg-[#171717]  cursor-none absolute bottom-0 left-0 w-full h-screen z-[99]'>
                <video ref={videoRef} autoPlay muted loop playsInline className='w-full h-full object-cover' src="/shortv.mp4"></video>
            </div>
        </div>
    );
};

export default Section1;

