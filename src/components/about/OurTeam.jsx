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
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".select-work3",
                start: "top 70%",
                end: "top 60%",
                scrub: 1,
            }
        })
        tl
            .to(".line-about3", {
                width: "96vw",
                duration: .8,
                ease: "none",
            }, "a")
            .to(".work-txt-about3", {
                transform: "translateY(0)",
                duration: .8,
            }, "a")
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
        <div className='w-full px-[2vw]'>
            <div className='select-work3 relative w-full py-[5vw] md:py-[1.2vw] flex'>
                <div className='overflow-hidden'>
                    <h2 className='work-txt-about3 text-white text-[10vw] md:text-[5vw] font-[font6] leading-none' style={{ transform: "translateY(100%)" }}>Team Members</h2>
                </div>
                <div className="line-about3 w-[0]] h-[1px] bg-white/60 absolute left-0 bottom-0"></div>
            </div>
            <div style={{perspective:"1000px"}} className='team-container w-full flex flex-wrap gap-[4vw] py-[5vw] sm:py-[2vw]'>
                {teamMembers.map((m, i) => (<div key={i} ref={(el => membersRefs.current[i] = el)} className="member mt-[1vw] shrink-0 w-full sm:w-[47vw] md:w-[21vw]">
                    <div key={i} className='team-img w-full h-[50vh] ' style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}>
                        <Image width={1000} height={1000} className='w-[100%] h-[100%] object-cover object-center' src={m.image} alt={m.name} title={m.name} />
                    </div>
                    <h5 className='text-white text-[4vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] mt-[1.3vw] font-[font6] capitalize'>{m.name}</h5>
                    <p className='text-white/60 text-[4vw] sm:text-[2vw] md:text-[1vw] lg:text-[1.2vw] font-[font1] capitalize'>{m.profession}</p>
                </div>))}

            </div>

        </div>
    )
}

export default OurTeam