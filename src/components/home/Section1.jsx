import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../navbar/Navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {
    const h1sRef = useRef([]); 
    console.log(h1sRef);
    
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            gsap.to(h1sRef.current[index], {
                top: "-100%",
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                }
            });

            setIndex((prevIndex) => (prevIndex === h1sRef.current.length - 1 ? 0 : prevIndex + 1));

            gsap.to(h1sRef.current[(index + 1) % h1sRef.current.length], {
                top: "0%",
                duration: 1,
            });
        }, 2000);

        return () => clearInterval(interval); 
    }, [index]);

    return (
        <div className='section1 min-h-screen relative w-full'>
            <Navbar />
            <div className='sticky top-0 w-full h-[65vh] flex flex-col justify-end p-[2vw] pb-[5vw]'>
                <div className='flex flex-col mb-[1.3vw]'>
                    <div className='flex items-center gap-[2vw]'>
                        <h1 className='text-white text-[8vw] font-[font2] capitalize leading-none'>designing</h1>
                    </div>
                </div>
                <div className='flex items-end justify-between'>
                    <div className='flex flex-col'>
                        <div className='text-change flex items-center gap-[2vw] overflow-hidden w-[60vw] h-[8.5vw] relative'>
                            {["applications", "experiences", "brands", "website"].map((text, idx) => (
                                <h1
                                    key={idx}
                                    ref={(el) => (h1sRef.current[idx] = el)}
                                    className={`text-white text-[8vw] font-[font2] capitalize leading-none absolute ${idx === 0 ? "top-0":"top-full"} left-0`}
                                >
                                    {text}
                                </h1>
                            ))}
                        </div>
                    </div>
                    <div className='social flex items-center gap-[1vw]'>
                        {["instagram-line", "dribbble-line", "linkedin-fill"].map((icon, idx) => (
                            <span key={idx} className="w-[3vw] h-[3vw] border border-white rounded-full flex items-center justify-center text-white relative overflow-hidden social-i cursor-pointer">
                                <span className='cir transition-all duration-300 w-full h-full absolute bg-white rounded-full left-1/2 -translate-x-1/2 top-full'></span>
                                <i className={`text-[1.2vw] transition-all duration-300 relative ri-${icon}`}></i>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full h-screen z-[99] relative'>
                <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="https://video.wixstatic.com/video/36971c_4cf7ab905c31434e928491fde8282fd5/480p/mp4/file.mp4"></video>
            </div>
        </div>
    );
};

export default Section1;
