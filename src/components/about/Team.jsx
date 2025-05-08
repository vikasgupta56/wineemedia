import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useState } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Team = () => {

    const [index, setIndex] = useState(0)

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

    useGSAP(() => {
        gsap.to(".image-cont", {
            scrollTrigger: {
                trigger: ".team-section",
                scroller: "body",
                // markers: true,
                start: "top top",
                end: "bottom 70%",
                scrub: 1,
                pin: ".image-cont"
            }
        })
    }, [])


    useEffect(() => {
        const boxes = document.querySelectorAll(".name-box");
      
        boxes.forEach((box,i) => {
          // Set initial opacity
          gsap.set(box, { opacity: 0.3 });
      
          // Create a scrollTrigger for each box
          ScrollTrigger.create({
            trigger: box,
            start: "top bottom",   // Start when box enters viewport
            end: "bottom top",     // End when box leaves viewport
            scrub: true,
            onUpdate: (self) => {
              const boxRect = box.getBoundingClientRect();
              const boxCenter = boxRect.top + boxRect.height / 2;
              const viewportCenter = window.innerHeight / 2;
      
              const distanceToCenter = Math.abs(viewportCenter - boxCenter);
              const isCentered = distanceToCenter < boxRect.height / 2;
      
              gsap.to(box, {
                opacity: isCentered ? 1 : 0.3,
                duration: 0.2,
                overwrite: true,
              });
              if(isCentered){
                setIndex(i)
              }
            },
            // markers: true,
          });
        });
      }, []);
    return (
        <div className='team-section w-full relative min-h-screen  text-white px-[2vw] py-[8vw]'>
            <div className='h-[11vw] sm:h-[5vw] client-txt-pp overflow-hidden'>
                <h3 className='client-txtt text-[10vw] sm:text-[4.3vw] font-[heading2] leading-none py-[.6vw]' style={{ transform: "translateY(100%)" }}>Meet the Team</h3>
            </div>
            <div className='h-[11vw] sm:h-[5vw] client-txt-pp overflow-hidden'>
                <h3 className='client-txtt text-[10vw] sm:text-[4.3vw] font-[heading2] leading-none py-[.6vw]' style={{ transform: "translateY(100%)" }}>Behind the Design</h3>
            </div>
            <div className='team-names w-full h-full mt-[8vw]'>
                {
                    teamMembers.map((m, i) => (<div key={i} className='name-box flex opacity-[.3] items-center py-[.5vw]'>
                        <div className='w-[35%]  text-right  pr-[1vw] text-[4vw] sm:text-[2vw] md:text-[1vw] lg:text-[1.2vw] font-[heading2] capitalize'>{m.profession}</div>
                        <div className='w-[65%] text-left text-[10vw] sm:text-[4.3vw] font-[heading] leading-none capitalize'>{m.name}</div>
                    </div>))
                }
            </div>

            <div className='image-cont absolute right-[2vw] top-[13vw] w-[16vw] h-[20vw] bg-red-600'>
                <img className='w-full h-full object-cover' src={teamMembers[index].image} alt="" />
            </div>


        </div>
    )
}

export default Team