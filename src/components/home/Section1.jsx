import React, { useEffect, useRef } from 'react';
import Navbar from '../navbar/Navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {
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
            x: offsetX * 15, // Limit range to ±15px for better control
            y: offsetY * 15,
            duration: 0.2,   // Reduced duration for more responsive movement
            ease: "power3.out"
        });
    };

    return (
        <div onMouseMove={handleMouseMove3d} className='section1 overflow-hidden h-screen relative w-full text-white text-center flex flex-col items-center justify-center uppercase'>
            <Navbar nav={navRef} />
            <div className='header-txt font-[font2] relative z-[9]'>
                <div className='h-[7vw] overflow-hidden' >
                <h1 className='text-header text-[6vw] leading-none'>Digital agency with a</h1>
                </div>
                <div className='h-[7vw] overflow-hidden' >
                <h1 className='text-header text-[6vw] '>human touch.</h1>
                </div>
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
            <img ref={img3dRef} className='w-[38%]' src="./3dimg.png" alt="" />
            </div>
            <div className='w-full flex justify-end p-[2vw] absolute bottom-0'>
                <div className='social flex items-center gap-[1vw]'>
                    {["instagram-line", "dribbble-line", "linkedin-fill"].map((icon, idx) => (
                        <span key={idx} className="w-[3vw] h-[3vw] border border-white rounded-full flex items-center justify-center text-white relative overflow-hidden social-i cursor-pointer">
                            <span className='cir transition-all duration-300 w-full h-full absolute bg-white rounded-full left-1/2 -translate-x-1/2 top-full'></span>
                            <i className={`text-[1.2vw] transition-all duration-300 relative ri-${icon}`}></i>
                        </span>
                    ))}
                </div>
            </div>
            <div style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }} className='header-video pointer-events-none absolute bottom-0 left-0 w-full h-screen z-[99]'>
                <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="https://video.wixstatic.com/video/36971c_4cf7ab905c31434e928491fde8282fd5/480p/mp4/file.mp4"></video>
            </div>
        </div>
    );
};

export default Section1;

