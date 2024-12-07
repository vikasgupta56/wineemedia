import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { projectContext } from '@/components/projectContext/ProjectContext'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
gsap.registerPlugin(ScrollTrigger)


const index = () => {

    const router = useRouter()
    const [filteredData, setFilteredData] = useState({});
    const projectdata = useContext(projectContext)

    useEffect(() => {
        if (router.query.name) {
            const filtered = projectdata.find((project) =>
                project.projectname === router.query.name
            )
            setFilteredData(filtered);
            console.log(filtered);
        }
    }, [router.query.name])

    useEffect(() => {
        document.querySelectorAll(".scroll-sp").forEach(igs => {
            gsap.to(igs, {
                scale: 1,
                scrollTrigger: {
                    trigger: igs,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                    ease: "power2.out",
                }
            });
        })
        document.querySelectorAll(".data-scroll").forEach(igs => {
            gsap.to(igs, {
                y: -100,
                scrollTrigger: {
                    trigger: igs,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                    ease: "power2.out",
                }
            });
        })
    }, [])

    const handleMouseMove = (e) => {
        gsap.to(".open-p", {
            left: e.clientX,
            top: e.clientY,
        })
    }

    const handleMouseMove2 = () => {
        gsap.to(".open-p", {
            scale: 1
        })
    }
    const handleMouseLeave = () => {
        gsap.to(".open-p", {
            scale: 0
        })
    }

    if (!filteredData) {
        // Show loading or placeholder content
        return <div className="text-white bg-black h-screen w-full text-center mt-20">Loading project details...</div>;
    }

    return (
        <div onMouseMove={(e) => handleMouseMove(e)} className='relative bg-black'>
            <div className='w-full min-h-screen pt-[30vw] md:pt-[12vw] px-[4vw] md:px-[2vw]'>
                <Navbar />
                <h1 className='text-white text-[8vw] md:text-[7.5vw] leading-none  text-left md:text-center uppercase'>{filteredData?.projectname}</h1>
                <p className='text-white text-[3vw] md:text-[2vw]   text-left md:text-center font-[font6] md:font-semibold leading-none my-[2.5vw] md:my-[1.5vw] mb-[5vw] md:mb-[3vw]'>An ever-evolving visual language</p>
                <div className='w-full h-[50vh] md:h-[120vh] bg-[#ffffff27]'>
                    <img className='w-full h-full object-cover object-center' src={filteredData?.coverimage1} alt="" />
                </div>
                <div className='w-full py-[8vw] md:py-[3vw] text-white'>
                    <div className='flex flex-col md:flex-row gap-[2vw] md:gap-0'>
                        <div className='w-[100%] md:w-[50%] font-[font6] text-[3vw] md:text-[1vw]'>
                            <h4>Commercial</h4>
                        </div>
                        <div className='w-[100%] md:w-[50%]'>
                            <div className='w-full flex justify-between items-center font-[font6] text-[3vw] md:text-[1vw]'>
                                <h4>2024</h4>
                                <h4>Fielmann</h4>
                            </div>
                            <p className='text-[3.5vw] md:text-[1.2vw] font-[font6] my-[2vw]'>{filteredData?.para1}<br /> <br /> {filteredData?.para2}</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-[2vw] md:gap-0'>
                        <div className='w-full md:w-[50%] font-[font6] text-[3vw] md:text-[1vw]'>
                            <h4>Services</h4>
                        </div>
                        <div className='w-full md:w-[50%]'>
                            <div className='w-full flex justify-between items-center'>
                                <h4 className='text-[3.5vw] md:text-[1.2vw] font-[font6] capitalize'>{filteredData?.serviceprovided}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[45vh] md:h-[120vh]'>
                    <img className='w-full h-full object-cover object-center' src={filteredData?.coverimage2} alt="" />
                </div>
                <div className='w-full h-[40vh] md:h-[110vh] mt-[4vw] md:mt-[2vw]'>
                    <img className='w-[85%] md:w-[80%] h-full object-cover object-center' src={filteredData?.image3} alt="" />
                </div>
                <div className='w-full h-[40vh] md:h-[68vh] mt-[4vw] md:mt-[2vw] flex items-center justify-end'>
                    <img className='w-[85%] md:w-[55%] h-full object-cover object-center' src={filteredData?.image4} alt="" />
                </div>
                <div className='w-full h-[40vh] md:h-[120vh] mt-[4vw] md:mt-[2vw] flex justify-between items-end'>
                    <img className='w-[58%] md:w-[60%] h-full object-cover object-center' src={filteredData?.image5} alt="" />
                    <img className='w-[38%] h-[45%] object-cover object-center' src={filteredData?.image6} alt="" />
                </div>
              {filteredData?.image7 &&   <div className='w-full h-[50vh] md:h-[120vh] mt-[4vw] md:mt-[2vw] flex justify-between items-end'>
                    <img className='w-full md:w-[70%] h-full object-cover object-center' src={filteredData?.image7} alt="" />
                </div>}
               {filteredData?.image8 &&  <div className='w-full h-[40vh] sm:h-[100vh] mt-[4vw] md:mt-[2vw] flex justify-end items-end'>
                    <img className='w-[80%] h-full object-cover object-center' src={filteredData?.image8} alt="" />
                </div>}
            </div>
            <div className='hidden  md:block open-p fixed z-[999] scale-0 mix-blend-difference -translate-x-1/2 -translate-y-1/2 bg-white pointer-events-none w-fit p-[.7vw] text-[1vw] py-[.1vw] rounded-full capitalize'>open project</div>
            <div className='w-full py-[3vw] pb-[10vw]'>
                <div className='w-full text-white capitalize mb-[3vw] px-[2vw] flex gap-[4vw]'>
                    <h1 className='text-[10vw]  md:text-[5vw] font-[font6]'>Latest project</h1>
                </div>
                <div onMouseMove={handleMouseMove2} onMouseLeave={handleMouseLeave} className='mar-p w-full flex gap-[1.5vw]'>
                    <div className='marquee2 w-fit flex items-center text-white/50 font-[font4] text-[4vw] gap-[1.5vw] uppercase'>
                        {projectdata.map((p, i) => (<Link key={i} href={`/work/${p.projectname}`} className='w-[40vw]  md:w-[20vw] h-[25vw]  md:h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src={p.coverimage1} alt="" />
                        </Link>))}
                    </div>
                    <div className='marquee2 w-fit flex items-center text-white/50 font-[font4] text-[4vw] gap-[1.5vw] uppercase'>
                        {projectdata.map((p, i) => (<Link key={i} href={`/work/${p.projectname}`} className='w-[40vw]  md:w-[20vw] h-[25vw]  md:h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src={p.coverimage1} alt="" />
                        </Link>))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default index