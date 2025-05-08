import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import SeoHeader from '@/components/seo/SeoHeader'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { use, useEffect, useRef, useState } from 'react'
import { workData } from '@/helpers/WorkData'
import Image from 'next/image'
import { useRouter } from 'next/router'
gsap.registerPlugin(ScrollTrigger)

const WorkDetails = ({ data, meta }) => {

    const router = useRouter();
    const [loading, setLoading] = useState(true)
    const textElement = useRef(null)
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);
    const imgRef4 = useRef(null);
    const imgRef5 = useRef(null);
    const imgRef6 = useRef(null);
    const imgRef7 = useRef(null);


    useEffect(() => {
        if (!data) return; // early exit if data is not available yet
    
        // Set loading to false when data is ready
        if (data && loading) {
          setLoading(false);
        }
      }, [data]); //


    useEffect(() => {
        if (!textElement.current) return;

        // Wait for DOM/text to update before manipulating
        requestAnimationFrame(() => {
            const text = textElement.current?.textContent;
            if (!text || text.length === 0) return;

            let clutter = '';
            text.split('').forEach((l) => {
                clutter += `<span>${l === ' ' ? '&nbsp;' : l}</span>`;
            });

            textElement.current.innerHTML = clutter;

            const tl = gsap.timeline();

            tl.set('.cover-main', {
                clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            });

            tl.to(textElement.current.querySelectorAll('span'), {
                rotateX: 0,
                opacity: 1,
                transformPerspective: 600,
                stagger: { amount: 0.3 },
                duration: .6,
                delay: .8,
            });

            tl.to('.cover-main', {
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                delay: -0.2,
            });

            return () => tl.kill();
        });
    }, [router.asPath, data]);


    useEffect(() => {
        if (loading) return; // Only run animations once loading is complete
    
        const imageRefs = [imgRef1, imgRef2, imgRef3, imgRef4, imgRef5, imgRef6, imgRef7];
    
        const ctx = gsap.context(() => {
          imageRefs.forEach((ref) => {
            if (!ref.current) return;
    
            gsap.set(ref.current, {
              clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            });
    
            gsap.to(ref.current, {
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
              duration:1.2,
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 70%',
                end: 'top 10%',
                // scrub: 1,
                // markers: true,
              },
            });
          });
    
          // Ensure ScrollTrigger recalculates after data loads
          setTimeout(() => ScrollTrigger.refresh(), 100);
        });
    
        // Cleanup context
        return () => {
          ctx.revert(); // kills GSAP animations and ScrollTriggers created in this context
        };
      }, [loading, router.asPath, data]); 




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
                    <h2 ref={textElement} className='project-detail w-full text-white text-[7.5vw] tracking-wide font-[heading2] md:text-[7.5vw] xl:text-[6.8vw] leading-none mb-[5vw] md:mb-[2vw] text-left md:text-center uppercase'>{data?.projectname}</h2>
                    <div style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='cover-main w-full h-[50vh] md:h-[80vh] lg:h-[120vh] bg-[#ffffff0e]'>
                        <Image width={1000} height={1000} priority className='w-full h-full object-cover object-center' src={data?.coverimage1} alt={data?.projectname} title={data?.projectname} />
                    </div>
                    <div className='w-full py-[8vw] md:py-[3vw] text-white'>
                        <div className='flex flex-col md:flex-row mb-[10vw]  md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                            <div className='w-full md:w-[50%] font-[heading] tracking-wide text-[4vw] md:text-[1.5vw] lg:text-[1vw]'>
                                <h4 className='font-[heading] tracking-wide text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw]'>Brand Introduction & Their Details:</h4>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div className='w-full flex justify-between items-center'>
                                    <h4 className='text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] tracking-wide font-[heading2] capitalize'>{data?.intro}</h4>
                                </div>
                            </div>
                        </div>
                        {data?.brief &&
                            <div className='flex flex-col md:flex-row mb-[10vw]  md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                                <div className='w-full md:w-[50%] font-[heading] tracking-wide text-[4vw] md:text-[1.5vw] lg:text-[1vw]'>
                                    <h4 className='font-[heading] tracking-wide text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw]'>Brand’s Brief:</h4>
                                </div>
                                <div className='w-full md:w-[50%]'>
                                    <div className='w-full flex justify-between items-center'>
                                        <h4 className='text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] tracking-wide font-[heading2] capitalize'>{data?.brief}</h4>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className='flex flex-col md:flex-row mb-[10vw]  md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                            <div className='w-full md:w-[50%] font-[heading] tracking-wide text-[4vw] md:text-[1.5vw] lg:text-[1vw]'>
                                <h4 className='font-[heading] tracking-wide text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw]'>Problem Faced by the Brand / Brief:</h4>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div className='w-full flex justify-between items-center'>
                                    <h4 className='text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] tracking-wide font-[heading2] capitalize'>{data?.problem}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row mb-[10vw]  md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                            <div className='w-full md:w-[50%] font-[heading] tracking-wide text-[4vw] md:text-[1.5vw] lg:text-[1vw]'>
                                <h4 className='font-[heading] tracking-wide text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw]'>Solution Provided:</h4>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div className='w-full flex justify-between items-center'>
                                    <h4 className='text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] tracking-wide font-[heading2] capitalize'>{data?.solution}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row mb-[10vw]  md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                            <div className='w-full md:w-[50%] font-[heading] tracking-wide text-[4vw] md:text-[1.5vw] lg:text-[1vw]'>
                                <h4 className='font-[heading] tracking-wide text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw]'>Conclusion</h4>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div className='w-full flex justify-between items-center'>
                                    <h4 className='text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] tracking-wide font-[heading2] capitalize'>{data?.conclusion}</h4>
                                </div>
                            </div>
                        </div>

                        {data?.result && <>
                            <div className='flex flex-col md:flex-row mb-[3vw] md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                                <div className='w-full md:w-[50%] font-[heading] tracking-wide text-[4vw] md:text-[1.5vw] lg:text-[1vw]'>
                                    <h4 className='font-[heading] tracking-wide text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw]'>Content - Deliverables:</h4>
                                </div>
                                <div className='w-full md:w-[50%]'>
                                    <div className='w-full flex justify-between items-center'>
                                        <h4 className='text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] tracking-wide font-[heading2] capitalize'>{data?.serviceprovided}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row mb-[3vw] md:mb-[1.8vw] gap-[2vw] md:gap-0'>
                                <div className='w-full md:w-[50%] font-[heading] tracking-wide text-[4vw] md:text-[1.5vw] lg:text-[1vw]'>
                                    <h4 className='font-[heading] tracking-wide text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw]'>Result/Outcome - Growth Conversion:</h4>
                                </div>
                                <div className='w-full md:w-[50%]'>
                                    <div className='w-full flex justify-between items-center'>
                                        <ul className='list-disc text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] tracking-wide font-[heading2] capitalize ml-4'>
                                            {data?.result?.map((item, index) => <li key={index} className='mb-[1vw]'>{item}</li>)}
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </>}
                    </div>
                    <div ref={imgRef1} style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='w-full h-[30vh] mb-[4vw] md:mb-0 sm:h-[70vh] md:h-[90vh] lg:h-[100vh] flex items-center justify-center '>
                        <Image width={1000} height={1000} className='w-[100%] md:w-[80%] lg:w-[68%] h-[100%] md:h-[73%] lg:h-[78%] object-cover object-center bg-[#ffffff0e]' src={data?.coverimage2} alt={data?.projectname} title={data?.projectname} />
                    </div>
                    <div ref={imgRef2} style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='w-full md:pt-[2vw]  flex flex-col md:flex-row items-center gap-[4vw] md:gap-0 justify-between'>
                        <div className='w-full md:w-[49.5%] h-[30vh] sm:h-[70vh] md:h-[70vh] bg-[#ffffff0e]'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover object-center' src={data?.image3} alt={data?.projectname} title={data?.projectname} />
                        </div>
                        <div className='w-full md:w-[49.5%] h-[30vh] sm:h-[70vh] md:h-[70vh] bg-[#ffffff0e]'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover object-center' src={data?.image4} alt={data?.projectname} title={data?.projectname} />
                        </div>
                    </div>
                    {data?.portraitVideo && <div className='w-full my-[4vw] md:mb-0 h-[60vh] sm:md:h-[60vh]  md:md:h-[65vh] lg:h-[100vh] flex items-center justify-center '>
                        <div ref={imgRef3} style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='w-full md:w-[45%] lg:w-[40%] h-[60vh] md:md:h-[65vh] lg:h-[100vh] bg-[#ffffff0e]'>
                            <video autoPlay muted loop playsInline className='w-full h-full object-cover object-center' src={data?.portraitVideo} alt={data?.projectname} title={data?.projectname} />
                        </div>
                    </div>}
                    {data?.landScapeVideo && <div ref={imgRef4} style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='w-full h-[30vh] mb-[4vw] md:mb-0 sm:h-[70vh] md:h-[90vh] lg:h-[100vh] flex items-center justify-center '>
                        <video autoPlay muted loop playsInline className='w-[100%] md:w-[80%] lg:w-[68%] h-[100%] md:h-[73%] lg:h-[78%] object-cover object-center bg-[#ffffff0e]' src={data?.landScapeVideo} alt={data?.projectname} title={data?.projectname} />
                    </div>}
                    <div ref={imgRef5} style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='w-full h-[30vh] my-[4vw] md:mb-0 sm:h-[70vh] md:h-[90vh] lg:h-[100vh] flex items-center justify-center '>
                        <Image width={1000} height={1000} className='w-[100%] md:w-[80%] lg:w-[68%] h-[100%] md:h-[73%] lg:h-[78%] object-cover object-center bg-[#ffffff0e]' src={data?.image5} alt={data?.projectname} title={data?.projectname} />
                    </div>
                    <div ref={imgRef6} style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='w-full md:pt-[2vw]  flex flex-col md:flex-row items-center gap-[4vw] md:gap-0 justify-between'>
                        <div className='w-full md:w-[49.5%] h-[30vh] sm:h-[70vh] md:h-[70vh] bg-[#ffffff0e]'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover object-center' src={data?.image6} alt={data?.projectname} title={data?.projectname} />
                        </div>
                        <div className='w-full md:w-[49.5%] h-[30vh] sm:h-[70vh] md:h-[70vh] bg-[#ffffff0e]'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover object-center' src={data?.image7} alt={data?.projectname} title={data?.projectname} />
                        </div>
                    </div>
                    {data?.image8 && data?.image9 ? (<div ref={imgRef7} style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} className='w-full mt-[4vw] md:mt-0 md:pt-[2vw] flex flex-col  md:flex-row items-center justify-center gap-[4vw] md:gap-[1%]'>
                        <div className='w-full md:w-[45%] lg:w-[40%] h-[60vh] md:md:h-[65vh] lg:h-[100vh] bg-[#ffffff0e]'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover object-center' src={data?.image8} alt={data?.projectname} title={data?.projectname} />
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[40%] h-[60vh] md:md:h-[65vh] lg:h-[100vh] bg-[#ffffff0e]'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover object-center' src={data?.image9} alt={data?.projectname} title={data?.projectname} />
                        </div>
                    </div>) : ""}
                </div>
                <div className='hidden  md:block open-p fixed z-[999] scale-0 mix-blend-difference -translate-x-1/2 -translate-y-1/2 bg-white pointer-events-none w-fit p-[.7vw] text-[1vw] py-[.1vw] rounded-full capitalize'>open project</div>
                <div className='w-full py-[3vw] pb-[10vw]'>
                    <div className='w-full text-white capitalize mb-[3vw] px-[4vw] sm:px-[2vw] flex gap-[4vw]'>
                        <h4 className='text-[10vw] sm:text-[4.3vw] tracking-wide font-[heading2]'>Latest project</h4>
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
                                    <Image width={1000} height={1000} className="w-full h-full object-cover" src={p.coverimage1} alt={p.projectname} title={p.projectname} />
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
                                    <Image width={1000} height={1000} className="w-full h-full object-cover" src={p.coverimage1} alt={p.projectname} title={p.projectname} />
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
