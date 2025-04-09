import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import SeoHeader from '@/components/seo/SeoHeader'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { workData } from '@/helpers/WorkData'
gsap.registerPlugin(ScrollTrigger)


const WorkDetails = ({ data, meta }) => {

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

    return (
        <>
            <SeoHeader meta={meta} />
            <div onMouseMove={(e) => handleMouseMove(e)} className='relative bg-black'>
                <div className='w-full min-h-screen pt-[30vw] md:pt-[12vw] px-[4vw] md:px-[2vw]'>
                    <Navbar />
                    <h2 className='text-white text-[8vw] md:text-[7.5vw] leading-none mb-[5vw] md:mb-[2vw] text-left md:text-center uppercase'>{data?.projectname}</h2>
                    <div className='w-full h-[50vh] md:h-[80vh] lg:h-[120vh] bg-[#ffffff27]'>
                        <img className='w-full h-full object-cover object-center' src={data?.coverimage1} alt={data?.projectname} title={data?.projectname} />
                    </div>
                    <div className='w-full py-[8vw] md:py-[3vw] text-white'>
                        <div className='flex flex-col md:flex-row mb-[3vw] md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                            <div className='w-full md:w-[50%] font-[font6] text-[3vw] md:text-[1.5vw] lg:text-[1vw]'>
                                <h4 className='font-semibold'>Brand Introduction & Their Details:</h4>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div className='w-full flex justify-between items-center'>
                                    <h4 className='text-[3.5vw] md:text-[1.5vw] lg:text-[1.2vw] font-[font6] capitalize'>{data?.intro}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row mb-[3vw] md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                            <div className='w-full md:w-[50%] font-[font6] text-[3vw] md:text-[1.5vw] lg:text-[1vw]'>
                                <h4 className='font-semibold'>Brand’s Brief:</h4>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div className='w-full flex justify-between items-center'>
                                    <h4 className='text-[3.5vw] md:text-[1.5vw] lg:text-[1.2vw] font-[font6] capitalize'>{data?.brief}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row mb-[3vw] md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                            <div className='w-full md:w-[50%] font-[font6] text-[3vw] md:text-[1.5vw] lg:text-[1vw]'>
                                <h4 className='font-semibold'>Problem Faced by the Brand:</h4>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div className='w-full flex justify-between items-center'>
                                    <h4 className='text-[3.5vw] md:text-[1.5vw] lg:text-[1.2vw] font-[font6] capitalize'>{data?.problem}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row mb-[3vw] md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                            <div className='w-full md:w-[50%] font-[font6] text-[3vw] md:text-[1.5vw] lg:text-[1vw]'>
                                <h4 className='font-semibold'>Solution Provided:</h4>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div className='w-full flex justify-between items-center'>
                                    <h4 className='text-[3.5vw] md:text-[1.5vw] lg:text-[1.2vw] font-[font6] capitalize'>{data?.solution}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row mb-[3vw] md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                            <div className='w-full md:w-[50%] font-[font6] text-[3vw] md:text-[1.5vw] lg:text-[1vw]'>
                                <h4 className='font-semibold'>Content - Deliverables:</h4>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div className='w-full flex justify-between items-center'>
                                    <h4 className='text-[3.5vw] md:text-[1.5vw] lg:text-[1.2vw] font-[font6] capitalize'>{data?.serviceprovided}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row mb-[3vw] md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                            <div className='w-full md:w-[50%] font-[font6] text-[3vw] md:text-[1.5vw] lg:text-[1vw]'>
                                <h4 className='font-semibold'>Result/Outcome - Growth Conversion:</h4>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div className='w-full flex justify-between items-center'>
                                    <ul className='list-disc text-[3.5vw] md:text-[1.5vw] lg:text-[1.2vw] font-[font6] capitalize ml-4'>
                                        {data?.result?.map((item, index) => <li className='mb-[1vw]'>{item}</li>)}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[30vh] mb-[4vw] md:mb-0 md:h-[90vh] lg:h-[100vh] flex items-center justify-center '>
                        <img className='w-[100%] md:w-[80%] lg:w-[68%] h-[100%] md:h-[73%] lg:h-[78%] object-cover object-center bg-[#ffffff27]' src={data?.coverimage2} alt={data?.projectname} title={data?.projectname} />
                    </div>
                    <div className='w-full md:pt-[2vw]  flex flex-col md:flex-row items-center gap-[4vw] md:gap-0 justify-between'>
                        <div className='w-full md:w-[49.5%] h-[30vh] md:h-[70vh] bg-[#ffffff27]'>
                            <img className='w-full h-full object-cover object-center' src={data?.image3} alt={data?.projectname} title={data?.projectname} />
                        </div>
                        <div className='w-full md:w-[49.5%] h-[30vh] md:h-[70vh] bg-[#ffffff27]'>
                            <img className='w-full h-full object-cover object-center' src={data?.image4} alt={data?.projectname} title={data?.projectname} />
                        </div>
                    </div>
                    {data?.portraitVideo && <div className='w-full my-[4vw] md:mb-0 h-[60vh]  md:md:h-[65vh] lg:h-[100vh] flex items-center justify-center '>
                        <div className='w-full md:w-[45%] lg:w-[40%] h-[60vh] md:md:h-[65vh] lg:h-[100vh] bg-[#ffffff27]'>
                            <video autoPlay muted loop playsInline className='w-full h-full object-cover object-center' src={data?.portraitVideo} alt={data?.projectname} title={data?.projectname} />
                        </div>
                    </div>}
                    {data?.landScapeVideo && <div className='w-full h-[30vh] mb-[4vw] md:mb-0 md:h-[90vh] lg:h-[100vh] flex items-center justify-center '>
                        <video autoPlay muted loop playsInline className='w-[100%] md:w-[80%] lg:w-[68%] h-[100%] md:h-[73%] lg:h-[78%] object-cover object-center bg-[#ffffff27]' src={data?.landScapeVideo} alt={data?.projectname} title={data?.projectname} />
                    </div>}
                    <div className='w-full h-[30vh] my-[4vw] md:mb-0 md:h-[90vh] lg:h-[100vh] flex items-center justify-center '>
                        <img className='w-[100%] md:w-[80%] lg:w-[68%] h-[100%] md:h-[73%] lg:h-[78%] object-cover object-center bg-[#ffffff27]' src={data?.image5} alt={data?.projectname} title={data?.projectname} />
                    </div>
                    <div className='w-full md:pt-[2vw]  flex flex-col md:flex-row items-center gap-[4vw] md:gap-0 justify-between'>
                        <div className='w-full md:w-[49.5%] h-[30vh] md:h-[70vh] bg-[#ffffff27]'>
                            <img className='w-full h-full object-cover object-center' src={data?.image6} alt={data?.projectname} title={data?.projectname} />
                        </div>
                        <div className='w-full md:w-[49.5%] h-[30vh] md:h-[70vh] bg-[#ffffff27]'>
                            <img className='w-full h-full object-cover object-center' src={data?.image7} alt={data?.projectname} title={data?.projectname} />
                        </div>
                    </div>
                    {data?.image8 && data?.image9 ? (<div className='w-full mt-[4vw] md:mt-0 md:pt-[2vw] flex flex-col  md:flex-row items-center justify-center gap-[4vw] md:gap-[1%]'>
                        <div className='w-full md:w-[45%] lg:w-[40%] h-[60vh] md:md:h-[65vh] lg:h-[100vh] bg-[#ffffff27]'>
                            <img className='w-full h-full object-cover object-center' src={data?.image8} alt={data?.projectname} title={data?.projectname} />
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[40%] h-[60vh] md:md:h-[65vh] lg:h-[100vh] bg-[#ffffff27]'>
                            <img className='w-full h-full object-cover object-center' src={data?.image9} alt={data?.projectname} title={data?.projectname} />
                        </div>
                    </div>) : ""}
                </div>
                <div className='hidden  md:block open-p fixed z-[999] scale-0 mix-blend-difference -translate-x-1/2 -translate-y-1/2 bg-white pointer-events-none w-fit p-[.7vw] text-[1vw] py-[.1vw] rounded-full capitalize'>open project</div>
                <div className='w-full py-[3vw] pb-[10vw]'>
                    <div className='w-full text-white capitalize mb-[3vw] px-[2vw] flex gap-[4vw]'>
                        <h4 className='text-[10vw]  md:text-[5vw] font-[font6]'>Latest project</h4>
                    </div>
                    <div onMouseMove={handleMouseMove2} onMouseLeave={handleMouseLeave} className='mar-p w-full flex gap-[1.5vw]'>
                        <div className='marquee2 w-fit flex items-center text-white/50 font-[font4] text-[4vw] gap-[1.5vw] uppercase'>
                            {Object.values(workData).map((p, i) => (
                                <Link
                                    key={i}
                                    href={`/work/${p.projectname.split(" ").join("-")}`}
                                    title={p.projectname}
                                    className="w-[40vw] md:w-[20vw] h-[25vw] md:h-[12vw] cursor-pointer"
                                >
                                    <img className="w-full h-full object-cover" src={p.coverimage1} alt={p.projectname} title={p.projectname} />
                                </Link>
                            ))}
                        </div>
                        <div className='marquee2 w-fit flex items-center text-white/50 font-[font4] text-[4vw] gap-[1.5vw] uppercase'>
                            {Object.values(workData).map((p, i) => (
                                <Link
                                    key={i}
                                    href={`/work/${p.projectname.split(" ").join("-")}`}
                                    title={p.projectname}
                                    className="w-[40vw] md:w-[20vw] h-[25vw] md:h-[12vw] cursor-pointer"
                                >
                                    <img className="w-full h-full object-cover" src={p.coverimage1} alt={p.projectname} title={p.projectname} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default WorkDetails;


export async function getStaticPaths() {
    // Get all available paths for the dynamic route
    const paths = Object.keys(workData).map((name) => ({
        params: { name }
    }));

    return {
        paths,
        fallback: false,  // 'false' to show 404 for missing paths
    };
}

export async function getStaticProps({ params }) {
    const url = params.name;
    const data = workData[url];
    if (!data) {
        return { notFound: true };
    }

    return {
        props: {
            data: data,
            meta: data?.meta || {},
        },
    };
}
