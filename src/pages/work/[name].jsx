import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)


const index = () => {
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
        gsap.to(".open-p",{
          scale:1
        })
      }
      const handleMouseLeave = () => {
        gsap.to(".open-p",{
          scale:0
        })
      }
    

    return (
        <div onMouseMove={(e) => handleMouseMove(e)} className='relative bg-black'>
            <div className='open-p fixed z-[999] scale-0 mix-blend-difference -translate-x-1/2 -translate-y-1/2 bg-white pointer-events-none w-fit p-[.7vw] text-[1vw] py-[.1vw] rounded-full capitalize'>open project</div>
            <div className='w-full h-screen p-[2vw] py-0 flex items-start pb-[2vw] pt-[7vw]'>
                <Navbar />
                <div className='w-[68%] text-white h-full flex flex-col justify-between '>
                    <h1 className='text-[10vw] capitalize leading-none font-[font5]'>axel vanhessche</h1>
                    <div className='w-full flex'>
                        <div className='w-[23%] h-[40vh] overflow-hidden'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-center' src="https://axelvanhessche.com/images/portraits-5_danibumba.webp" alt="" />
                        </div>
                        <div className='w-[50%] ml-[2vw] flex flex-col justify-end'>
                         <h4 className='font-[font4] text-[1vw] text-white/80 mb-[.2vw]'>Services Provided</h4>
                         <h2  className='font-[font4] text-[.8vw] text-white/50'>Brand Strategy, Website Design, Social Media Campaigns</h2>
                         <h4 className='font-[font4] text-[1vw] text-white/80 mb-[.2vw] mt-[1vw]'>Team Members</h4>
                         <h2  className='font-[font4] text-[.8vw] text-white/50'>Sarah Thompson, John Miller, Emma Davis</h2>
                        </div>
                    </div>
                </div>
                <div className='w-[32%]  h-full flex items-end overflow-hidden'>
                    <img className='scroll-sp w-full h-[100%] scale-[1.3] object-cover object-center' src="https://axelvanhessche.com/images/ELECTRICK-1.webp" alt="" />
                </div>
            </div>
            <div className='w-full h-[120vh] flex items-center pl-[30%]'>
                <div className='w-[25vw] h-[85vh] overflow-hidden data-scroll'>
                    <img className='scroll-sp  w-full h-[100%] scale-[1.3] object-center' src="https://axelvanhessche.com/images/peugeot_153.webp" alt="" />
                </div>
            </div>
            <div className='w-full min-h-screen flex'>
                <div className='w-1/2 h-full pl-[2vw]'>
                    <div className='w-full h-[80vh]'>
                        <div className='w-[70%] h-full overflow-hidden data-scroll'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-cover object-center' src="https://axelvanhessche.com/images/3g0a9005.webp" alt="" />
                        </div>
                    </div>
                    <div className='w-full h-[50vh] mt-[40vh] pl-[20%]'>
                        <div className='w-[50%] h-full overflow-hidden data-scroll'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-cover object-center' src="https://axelvanhessche.com/images/AVE20231220_18444255_0090.webp" alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full p-[2vw]'>
                    <div className='w-full h-[38vh] flex justify-end'>
                        <div className='w-[33%] h-full overflow-hidden data-scroll'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-cover object-center' src="https://axelvanhessche.com/images/denzelcurry14822.webp" alt="" />
                        </div>
                    </div>
                    <div className='w-full h-[70vh] mt-[20vh] flex justify-start'>
                        <div className='w-[55%] h-full overflow-hidden data-scroll'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-center object-cover' src="https://axelvanhessche.com/images/LARELEVE-1.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen p-[2vw] flex items-start'>
                <div className='w-[68%] text-white h-full flex flex-col justify-end'>
                    <div className='w-full flex'>
                        <div className='w-[35%] h-[40vh] overflow-hidden data-scroll'>
                            <img className='scroll-sp w-full h-[100%] scale-[1.3] object-cover object-center' src="https://axelvanhessche.com/images/portraits-5_danibumba.webp" alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-[32%]  h-full flex'>
                    <div className='w-full h-[85vh] overflow-hidden data-scroll'>
                        <img className='scroll-sp w-full h-full object-cover object-center scale-[1.3]' src="https://axelvanhessche.com/images/ELECTRICK-1.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full py-[3vw] pb-[10vw]'>
                <div className='w-full text-white capitalize mb-[3vw] px-[2vw] flex gap-[4vw]'>
                    <h1 className='text-[5vw] font-[font6]'>Latest project</h1>
                </div>
                <div onMouseMove={handleMouseMove2} onMouseLeave={handleMouseLeave} className='mar-p w-full flex gap-[1.5vw]'>
                    <div className='marquee2 w-fit flex items-center text-white/50 font-[font4] text-[4vw] gap-[1.5vw] uppercase'>
                        <Link href="/work/kuchenbuddy" className='w-[20vw] h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg/v1/fit/w_1440,h_735,q_90/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg" alt="" />
                        </Link>
                        <Link href="/work/kuchenbuddy" className='w-[20vw] h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/84770f_a0871606658d4a66b7534edbd21b8dc9~mv2.jpg/v1/fit/w_480,h_330,q_90/84770f_a0871606658d4a66b7534edbd21b8dc9~mv2.jpg" alt="" />
                        </Link>
                        <Link href="/work/kuchenbuddy" className='w-[20vw] h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/84770f_49c2a11793ec458fa07495dc0cb6db7b~mv2.jpg/v1/fit/w_1440,h_735,q_90/84770f_49c2a11793ec458fa07495dc0cb6db7b~mv2.jpg" alt="" />
                        </Link>
                        <Link href="/work/kuchenbuddy" className='w-[20vw] h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/84770f_7de108fae3264cbc95f09174ef985f6b~mv2.jpg/v1/fit/w_700,h_409,q_90/84770f_7de108fae3264cbc95f09174ef985f6b~mv2.jpg" alt="" />
                        </Link>
                        <Link href="/work/kuchenbuddy" className='w-[20vw] h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/84770f_cbf4131909214476803b7bb87627e948~mv2.jpg/v1/fit/w_480,h_271,q_90/84770f_cbf4131909214476803b7bb87627e948~mv2.jpg" alt="" />
                        </Link>
                    </div>
                    <div className='marquee2 w-fit flex items-center text-white/50 font-[font4] text-[4vw] gap-[1.5vw] uppercase'>
                        <Link href="/work/kuchenbuddy" className='w-[20vw] h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg/v1/fit/w_1440,h_735,q_90/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg" alt="" />
                        </Link>
                        <Link href="/work/kuchenbuddy" className='w-[20vw] h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/84770f_a0871606658d4a66b7534edbd21b8dc9~mv2.jpg/v1/fit/w_480,h_330,q_90/84770f_a0871606658d4a66b7534edbd21b8dc9~mv2.jpg" alt="" />
                        </Link>
                        <Link href="/work/kuchenbuddy" className='w-[20vw] h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/84770f_49c2a11793ec458fa07495dc0cb6db7b~mv2.jpg/v1/fit/w_1440,h_735,q_90/84770f_49c2a11793ec458fa07495dc0cb6db7b~mv2.jpg" alt="" />
                        </Link>
                        <Link href="/work/kuchenbuddy" className='w-[20vw] h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/84770f_7de108fae3264cbc95f09174ef985f6b~mv2.jpg/v1/fit/w_700,h_409,q_90/84770f_7de108fae3264cbc95f09174ef985f6b~mv2.jpg" alt="" />
                        </Link>
                        <Link href="/work/kuchenbuddy" className='w-[20vw] h-[12vw] cursor-pointer'>
                            <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/84770f_cbf4131909214476803b7bb87627e948~mv2.jpg/v1/fit/w_480,h_271,q_90/84770f_cbf4131909214476803b7bb87627e948~mv2.jpg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default index