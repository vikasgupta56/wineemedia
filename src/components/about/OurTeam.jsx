import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const OurTeam = () => {
    const membersRefs = useRef([])
    const teamMembers = [
        {
            image: "/team/Ramkrishna Tripathi.webp",
            name: "Ramkrishna Tripathi",
            profession: "Founder / CEO"
        },
        {
            image: "/team/Niranjan Solanki.webp",
            name: "Niranjan Solanki",
            profession: "Data Scientist"
        },
        // {
        //     image: "/team/Rishabh Pandey.webp",
        //     name: "Rishabh pandey",
        //     profession: "Data Analyst"
        // },
        {
            image: "/team/Himanshu Khatri.webp",
            name: "Himanshu Khatri",
            profession: "2D Generalist"
        },
        {
            image: "/team/Swati Simran.webp",
            name: "Swati Simran",
            profession: "Creative Director"
        },
        {
            image: "/team/Jay Revandkar.webp",
            name: "Jay Revandkar",
            profession: "3D Generalist"
        },
        {
            image: "/team/Sumeet Patwa.webp",
            name: "Sumeet",
            profession: "3D Character Artist"
        },
        {
            image: "/team/Rituraj Bang.webp",
            name: "Rituraj Bang",
            profession: "Concept Artist"
        },
    ];

    useEffect(() => {
        gsap.to(".client-txtt", {
            transform: "translateY(0%)",
            duration: 1,
            scrollTrigger: {
                trigger: ".client-txt-pp",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
                // markers:true
            }
        })

    }, [])
    
    useEffect(() => {
       
        if (membersRefs.current) {
            membersRefs.current.forEach((m, i) => {
                gsap.to(m.querySelector(".team-img"), {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    duration: 0.8,
                    stagger: .3,
                    scrollTrigger: {
                        trigger: m,
                        start: "top 75%",
                        end: "top 40%",
                        scrub: 1,
                    }
                })
            })
        }
    }, [])

    return (
        <div className='w-full px-[4vw] py-[12vw]  md:pb-[4vw] lg:hidden text-black'>
           <div className='h-[11vw] sm:h-[5vw] client-txt-pp overflow-hidden'>
                <h3 className='client-txtt text-[10vw] sm:text-[4.3vw] font-[heading2] leading-none py-[.6vw]' style={{ transform: "translateY(100%)" }}>Meet the Team</h3>
            </div>
            <div className='h-[11vw] sm:h-[5vw] client-txt-pp overflow-hidden'>
                <h3 className='client-txtt text-[10vw] sm:text-[4.3vw] font-[heading2] leading-none py-[.6vw]' style={{ transform: "translateY(100%)" }}>Behind the Design</h3>
            </div>
            <div style={{perspective:"1000px"}} className='team-container w-full flex flex-wrap gap-[4vw] md:gap-[2vw] py-[5vw] sm:py-[2vw]'>
                {teamMembers.map((m, i) => (<div key={i} ref={(el => membersRefs.current[i] = el)} className="member mt-[1vw] shrink-0 w-full sm:w-[44vw] md:w-[29.2vw]">
                    <div key={i} className='team-img w-full h-[50vh] md:h-[45vh] ' style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}>
                        <Image width={1000} height={1000} className='w-[100%] h-[100%] object-cover object-center' src={m.image} alt={m.name} title={m.name} />
                    </div>
                    <h5 className='text-black text-[4vw] sm:text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] mt-[4vw] md:mt-[2vw] font-[heading] tracking-wide lg:tracking-tight capitalize'>{m.name}</h5>
                    <p className='text-black/60 text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.2vw] font-[heading2] mt-[1.5vw] md:mt-[.6vw] tracking-wide lg:tracking-tight capitalize'>{m.profession}</p>
                </div>))}

            </div>

        </div>
    )
}

export default OurTeam