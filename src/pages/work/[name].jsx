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
            <div className='hidden  md:block open-p fixed z-[999] scale-0 mix-blend-difference -translate-x-1/2 -translate-y-1/2 bg-white pointer-events-none w-fit p-[.7vw] text-[1vw] py-[.1vw] rounded-full capitalize'>open project</div>
            <div className='w-full h-screen p-[2vw] py-0 flex flex-col  md:flex-row items-start pb-[2vw] pt-[20vw] sm:pt-[10vw]  md:pt-[7vw]'>
                <Navbar />
                <div className='w-full  md:w-[68%] text-white h-[40vh]  md:h-full flex flex-col justify-between '>
                    <h1 className='text-[15vw] sm:text-[8vw]  md:text-[8vw] capitalize leading-none font-[font5]'>{filteredData?.projectname}</h1>
                    <div className='w-full flex'>
                        <div className='hidden  md:block w-[23%] h-[40vh] overflow-hidden'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-center object-cover' src={filteredData?.coverimage2} alt="" />
                        </div>
                        <div className='w-full  md:w-[50%] ml-[2vw] pb-[5vw]  md:pb-[0] flex flex-col justify-end'>
                            <h4 className='font-[font4] text-[5vw]  md:text-[1vw] text-white/80 mb-[.2vw]'>Services Provided</h4>
                            <h2 className='font-[font4] text-[3vw] sm:text-[1.6vw]  md:text-[.8vw] text-white/50 capitalize'>{filteredData?.serviceprovided}</h2>
                        </div>
                    </div>
                </div>
                <div className='w-full  md:w-[32%]  h-[60vh]  md:h-full flex items-end overflow-hidden'>
                    <img className='scroll-sp w-full h-[100%] scale-[1.3] object-cover object-center' src={filteredData?.coverimage1} alt="" />
                </div>
            </div>
            <div className='w-full  h-[100vh]  md:h-[120vh] flex items-center pl-[10%] pr-[2%]  md:pr-[0]  md:pl-[30%]'>
                <div className='w-full  md:w-[25vw] h-[60vh]  md:h-[85vh] overflow-hidden data-scroll'>
                    <img className='scroll-sp  w-full h-[100%] scale-[1.3] object-center object-cover' src={filteredData?.image3} alt="" />
                </div>
            </div>
            <div className='w-full min-h-screen flex flex-col  md:flex-row'>
                <div className='w-full  md:w-1/2 h-full pl-[2vw] pr-[2vw]  md:pr-[0]'>
                    <div className='w-full h-[80vh]'>
                        <div className='w-full  md:w-[70%] h-full overflow-hidden data-scroll'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-cover object-center' src={filteredData?.image4} alt="" />
                        </div>
                    </div>
                    <div className='w-full h-[50vh] mt-[30vh]  md:mt-[40vh] pl-[20%]'>
                        <div className='w-full  md:w-[50%] h-full overflow-hidden data-scroll'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-cover object-center' src={filteredData?.image5} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full  md:w-1/2 h-full p-[2vw]'>
                    <div className='w-full h-[38vh] flex justify-start  md:justify-end'>
                        <div className='w-[80%]  md:w-[33%] h-full overflow-hidden data-scroll'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-cover object-center' src={filteredData?.image6} alt="" />
                        </div>
                    </div>
                    <div className='w-full h-[70vh] mt-[20vh] flex justify-start'>
                        <div className='w-full  md:w-[55%] h-full overflow-hidden data-scroll'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-center object-cover' src={filteredData?.image7} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen p-[2vw] flex flex-col  md:flex-row items-start'>
                <div className='w-full  md:w-[68%] text-white h-full flex flex-col justify-end'>
                    <div className='w-full flex justify-end  md:justify-start'>
                        <div className='w-[70%]  md:w-[35%] h-[40vh] overflow-hidden data-scroll'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-cover object-center' src={filteredData?.image8} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full  md:w-[32%]  h-full flex'>
                    <div className='w-full h-[60vh]  md:h-[85vh] overflow-hidden data-scroll'>
                        <img className='scroll-sp w-full h-full object-cover object-center scale-[1.3]' src={filteredData?.image9} alt="" />
                    </div>
                </div>
            </div>
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