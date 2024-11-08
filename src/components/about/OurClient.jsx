import gsap from 'gsap'
import React, { useRef } from 'react'
import Reviews from '@/components/about/Reviews'

const OurClient = () => {
    const clipRefs = useRef([])
    const handleClipMove = (i) => {
        gsap.to(clipRefs.current[i].querySelector(".clipeffect"), {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
        })
    }
    const handleClipLeave = (i) => {
        gsap.to(clipRefs.current[i].querySelector(".clipeffect"), {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
        })
    }

  return (
    <div className='w-full py-[8vw] text-white px-[2vw]'>
                    <h2 className='text-[5vw] font-[font6] leading-none py-[.6vw]'>Still not convinced?</h2>
                    <h2 className='text-[5vw] font-[font6] leading-none py-[.6vw]'>Well, they were.</h2>
                    <div className='w-full pt-[3vw] flex flex-wrap gap-[1.5vw]'>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((c, i) => (<div key={i} ref={el => clipRefs.current[i] = el} onMouseMove={() => handleClipMove(i)} onMouseLeave={() => handleClipLeave(i)} className='shrink-0 w-[18vw] h-[13vw]  cursor-pointer relative bg-white/10 flex items-center justify-center'>
                                <div className='clipeffect absolute bottom-0 left-0 h-full w-full' style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}>
                                    <img className='w-full h-full object-cover' src="https://luxeframe.netlify.app/project4.webp" alt="" />
                                </div>
                                <img className='w-[50%] relative' src="https://luxeframe.netlify.app/client3.svg" alt="" />
                            </div>))
                        }

                    </div>
                    <h2 className='text-white font-[font6] w-[70%] text-[2vw] capitalize my-[5vw]'>
                        Our clients had an amazing experience collaborating with us, praising our dedication,
                        creativity, and
                        professionalism every step of the way. We're confident you'll feel the same and enjoy a
                        seamless, rewarding
                        partnership with us!
                    </h2>
                    <Reviews/>
                </div>
  )
}

export default OurClient