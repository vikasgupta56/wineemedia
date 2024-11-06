import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect } from 'react'


gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {

    useEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".select-work2",
                start: "top 75%",
                end: "top 60%",
                scrub: 1,
            }
        })
        tl
            .to(".line2", {
                width: "96%",
                duration: .8,
                ease: "none",
            }, "a")
            .to(".work-txt2", {
                transform: "translateY(0)",
                duration: .8,
            }, "a")
    }, [])
    var rotate = 0
    var diffrot = 0
    const handleMouseMove = (e) => {
        var diff = e.clientY - e.target.getBoundingClientRect().top
        diffrot = e.clientX - rotate
        rotate = e.clientX
        gsap.to(e.target.querySelector(".over-img"), {
            opacity: 1,
            left:e.clientX,
            top: diff,
            rotate: gsap.utils.clamp(-20,20, diffrot * 0.2),
            ease: "power1",
        })
       
        gsap.to(e.target.querySelector("h4"), {
            x:50,
            ease: "power1",
        })
    }
    const handleMouseLeave = (e) => {
        gsap.to(e.target.querySelector(".over-img"), {
            opacity: 0,
            ease: "power4.out",
        })
        gsap.to(e.target.querySelector("h4"), {
            x: 0,
            ease: "power1",
        })
    }

    return (
        <div className='w-full min-h-screen py-[2vw] pb-[6vw]'>
            <div className='select-work2 relative w-full mx-[2vw] py-[1.2vw] flex mt-[6vw]'>
                <div className='overflow-hidden'>
                    <h2 className='work-txt2 text-white text-[5vw] font-[font6] leading-none' style={{ transform: "translateY(100%)" }}>Our Services</h2>
                </div>
                <div className="line2 w-[0%] h-[1px] bg-white/60 absolute left-0 bottom-0"></div>
            </div>
            <div className='px-[2vw]'>
                <div onMouseMove={(e) => { handleMouseMove(e) }} onMouseLeave={(e) => { handleMouseLeave(e) }} className='our-work relative flex items-center justify-between text-white/50 py-[3vw] border-b border-white/50'>
                    <h4 className='text-[5vw] font-[font6] pointer-events-none'>Brand Designing</h4>
                    <h5>2023</h5>
                    <div style={{ transform: "translate(-50%,-50%)" }} className="over-img pointer-events-none h-[20vw] opacity-0 w-[27vw] top-0 left-0 absolute overflow-hidden">
                        <img className='w-full h-full object-cover object-center' src="https://static.wixstatic.com/media/84770f_7de108fae3264cbc95f09174ef985f6b~mv2.jpg/v1/fit/w_480,h_281,q_90/84770f_7de108fae3264cbc95f09174ef985f6b~mv2.jpg" alt="" />
                    </div>
                </div>
                <div onMouseMove={(e) => { handleMouseMove(e) }} onMouseLeave={(e) => { handleMouseLeave(e) }} className='our-work relative flex items-center justify-between text-white/50 py-[3vw] border-b border-white/50'>
                    <h4 className='text-[5vw] font-[font6] pointer-events-none'>Social Media Marketing</h4>
                    <h5>2023</h5>
                    <div style={{ transform: "translate(-50%,-50%)" }} className="over-img pointer-events-none h-[20vw] opacity-0 w-[27vw] top-0 left-0 absolute overflow-hidden">
                        <img className='w-full h-full object-cover object-center' src="https://static.wixstatic.com/media/84770f_1dfd562b1f924f9180e2c4426ebf0980~mv2.jpg/v1/fit/w_699,h_466,q_90/84770f_1dfd562b1f924f9180e2c4426ebf0980~mv2.jpg" alt="" />
                    </div>
                </div>
                <div onMouseMove={(e) => { handleMouseMove(e) }} onMouseLeave={(e) => { handleMouseLeave(e) }} className='our-work relative flex items-center justify-between text-white/50 py-[3vw] border-b border-white/50'>
                    <h4 className='text-[5vw] font-[font6] pointer-events-none'>Influncer Marketing</h4>
                    <h5>2023</h5>
                    <div style={{ transform: "translate(-50%,-50%)" }} className="over-img pointer-events-none h-[20vw] opacity-0 w-[27vw] top-0 left-0 absolute overflow-hidden">
                        <img className='w-full h-full object-cover object-center' src="https://static.wixstatic.com/media/84770f_a0871606658d4a66b7534edbd21b8dc9~mv2.jpg/v1/fit/w_699,h_480,q_90/84770f_a0871606658d4a66b7534edbd21b8dc9~mv2.jpg" alt="" />
                    </div>
                </div>
                <div onMouseMove={(e) => { handleMouseMove(e) }} onMouseLeave={(e) => { handleMouseLeave(e) }} className='our-work relative flex items-center justify-between text-white/50 py-[3vw] border-b border-white/50'>
                    <h4 className='text-[5vw] font-[font6] pointer-events-none'>Motion Graphic</h4>
                    <h5>2023</h5>
                    <div style={{ transform: "translate(-50%,-50%)" }} className="over-img pointer-events-none h-[20vw] opacity-0 w-[27vw] top-0 left-0 absolute overflow-hidden">
                        <img className='w-full h-full object-cover object-center' src="https://static.wixstatic.com/media/84770f_49c2a11793ec458fa07495dc0cb6db7b~mv2.jpg/v1/fit/w_1440,h_735,q_90/84770f_49c2a11793ec458fa07495dc0cb6db7b~mv2.jpg" alt="" />
                    </div>
                </div>
                <div onMouseMove={(e) => { handleMouseMove(e) }} onMouseLeave={(e) => { handleMouseLeave(e) }} className='our-work relative flex items-center justify-between text-white/50 py-[3vw] border-b border-white/50'>
                    <h4 className='text-[5vw] font-[font6] pointer-events-none'>3D Designing</h4>
                    <h5>2023</h5>
                    <div style={{ transform: "translate(-50%,-50%)" }} className="over-img pointer-events-none h-[20vw] opacity-0 w-[27vw] top-0 left-0 absolute overflow-hidden">
                        <img className='w-full h-full object-cover object-center' src="https://static.wixstatic.com/media/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg/v1/fill/w_1479,h_735,q_90/c837a6_cf7959a7bd3140778d51e15612c0f08f~mv2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4