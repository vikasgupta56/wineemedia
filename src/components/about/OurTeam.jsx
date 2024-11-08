import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const OurTeam = () => {
    const membersRefs = useRef([])
    const teamMembers = [
        {
            image: "https://luxeframe.netlify.app/team1.webp",
            name: "lily rose",
            profession: "photographer"
        },
        {
            image: "https://luxeframe.netlify.app/project6.webp",
            name: "lily rose",
            profession: "photographer"
        },
        {
            image: "https://luxeframe.netlify.app/team2.webp",
            name: "lily rose",
            profession: "photographer"
        },
        {
            image: "https://luxeframe.netlify.app/team3.webp",
            name: "lily rose",
            profession: "photographer"
        },
        {
            image: "https://luxeframe.netlify.app/team5.webp",
            name: "lily rose",
            profession: "photographer"
        },
        {
            image: "https://luxeframe.netlify.app/team2.webp",
            name: "lily rose",
            profession: "photographer"
        },
        {
            image: "https://luxeframe.netlify.app/team3.webp",
            name: "lily rose",
            profession: "photographer"
        },
        {
            image: "https://luxeframe.netlify.app/team5.webp",
            name: "lily rose",
            profession: "photographer"
        },
        {
            image: "https://luxeframe.netlify.app/team9.webp",
            name: "lily rose",
            profession: "photographer"
        },
        {
            image: "https://luxeframe.netlify.app/team10.webp",
            name: "lily rose",
            profession: "photographer"
        },
    ]
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
                gsap.fromTo(m, {
                    scale: 0,
                    rotateY:"45deg",
                    opacity:0,
                }, {
                    scale: 1,
                    opacity: 1,
                    rotateY:"0",
                    duration: 0.8,
                    stagger: .3,
                    scrollTrigger: {
                        trigger: m,
                        start: "top 82%",
                        end: "top 45%",
                        scrub: 1,
                    }
                })
            })
        }
    }, [])

    return (
        <div className='w-full px-[2vw]'>
            <div className='select-work3 relative w-full py-[1.2vw] flex'>
                <div className='overflow-hidden'>
                    <h2 className='work-txt-about3 text-white text-[5vw] font-[font6] leading-none' style={{ transform: "translateY(100%)" }}>Team Members</h2>
                </div>
                <div className="line-about3 w-[0]] h-[1px] bg-white/60 absolute left-0 bottom-0"></div>
            </div>
            <div style={{perspective:"1000px"}} className='team-container w-full flex flex-wrap gap-[1.5vw] py-[2vw]'>
                {teamMembers.map((m, i) => (<div ref={(el => membersRefs.current[i] = el)} className="member mt-[1vw] shrink-0 w-[18vw]">
                    <div key={i} className='w-full h-[50vh] '>
                        <img className='w-full h-full object-cover' src={m.image} alt="" />
                    </div>
                    <h2 className='text-white text-[1.2vw] mt-[1.3vw] font-[font6] capitalize'>{m.name}</h2>
                    <p className='text-white/60 text-[1vw] font-[font6] capitalize'>{m.profession}</p>
                </div>))}

            </div>

        </div>
    )
}

export default OurTeam