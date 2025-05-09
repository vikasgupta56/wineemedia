import gsap from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import { contactContext } from '../transition/Transition'
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';

const Menu = () => {
  const [isOpen, setisOpen, isOpenm, setisOpenm] = useContext(contactContext)
  const navigation = useRef()

  useEffect(() => {
    if (navigation.current) {
      if (isOpenm) {
        var tl = gsap.timeline()
        tl.
          to(navigation.current, {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
            opacity: 1
          }, "a")
          .from(".mtxt", {
            y: "100%",
            duration: .3,
            stagger: {
              amount: .2
            }
          }, "a")
      }
      else {
        gsap.to(navigation.current, {
          opacity: 0,
          duration:.1,
          onComplete: () => {
            gsap.set(navigation.current, {
              clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`
            })
          }
        })
      }
    }
  }, [isOpenm])

  return (
    <div ref={navigation} style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} className='menu-pg sm:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#111111] text-white flex flex-col z-[99] justify-between pb-3'>
      <div className={`w-full font-[second]  py-6  px-4 flex text-white  items-center justify-end `}>
        <h4 onClick={() => setisOpenm(false)} className='text-[6vw] font-[font4] sm:hidden'><AiOutlineClose /></h4>
      </div>
      <div className='flex flex-col px-4 text-white items-start'>
        <div className='overflow-hidden'>
          <Link onClick={() => setisOpenm(false)} href="/" title='home' className='mtxt inline-block text-[10vw] font-[heading2] font-semibold text-white'>Home</Link >
        </div>
        <div className='overflow-hidden'>
          <Link onClick={() => setisOpenm(false)} href="/about-us" title='about-us' className='mtxt inline-block text-[10vw] font-[heading2] font-semibold text-white'>About</Link >
        </div>
        <div className='overflow-hidden'>
          <Link onClick={() => setisOpenm(false)} href="/work" title='work' className='mtxt inline-block text-[10vw] font-[heading2] font-semibold text-white'>Work</Link>
        </div>
        <div className='overflow-hidden'>
          <div onClick={() => {
            setisOpenm(false)
            setisOpen(true)
          }} className='mtxt inline-block text-[10vw] font-[heading2] font-semibold text-white'>Contact</div>
        </div>
        <div className='overflow-hidden mt-[8vw]'>
          <Link href="https://www.instagram.com/wineemedia/" target='_blank' title='work' className='mtxt inline-block text-[4vw] font-[heading2] text-white'>Instagram</Link>
        </div>
        <div className='overflow-hidden my-[2vw]'>
          <Link href="https://www.behance.net/wineemedia" target='_blank' title='work' className='mtxt inline-block text-[4vw] font-[heading2] text-white'>Behance</Link>
        </div>
        <div className='overflow-hidden'>
          <Link href="https://www.linkedin.com/company/wineemedia/?originalSubdomain=in" target='_blank' title='work' className='mtxt inline-block text-[4vw] font-[heading2] text-white'>Linkedin</Link>
        </div>
      </div>
      <div className='border-t w-full border-white/20'>
        <Link href="/" className='text-[5vw] pt-[3vw] inline-block font-[styles] text-left px-[3vw] sm:hidden'>WineeMedia</Link>
      </div>
    </div>
  )
}

export default Menu;