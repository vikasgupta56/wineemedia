import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { contactContext } from '../transition/Transition'
import { menus } from '@/helpers/MenuData'
import gsap from 'gsap'
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ nav }) => {
  const [isOpen, setisOpen,isOpenm, setisOpenm] = useContext(contactContext)
  const navigation = useRef()
  // const [isOpenm, setisOpenm] = useState(false)

  useEffect(() => {
    if (navigation.current) {
      if (isOpenm) {
        var tl = gsap.timeline()
        tl.
          to(navigation.current, {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`
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
          clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`
        })
      }
    }
  }, [isOpenm])



  return (
    <div ref={nav} className='w-full capitalize  text-white absolute top-0 left-0 z-[99] flex items-center justify-between py-[4vw] sm:py-[2vw] p-[4vw] sm:p-[2vw]'>
      <Link href="/" title='home' ><img className='w-[15vw] md:w-[7vw] h-auto lg:w-[7vw] xl:w-[5vw]' src="/logo.png" alt="Wineemedia-logo" title='Wineemedia-logo' /></Link>
      <div className='hidden sm:flex items-start sm:gap-[6vw] md:gap-[2.5vw] capitalize sm:text-[3vw]  md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1vw] font-[font6]'>
        {menus.map((m, i) => <Link key={i} href={m.link} title={m.name}>
          <div className='effecttxt overflow-hidden sm:h-[3.3vw] md:h-[2vw] lg:h-[1.6vw] xl:h-[1.2vw]'>
            <h2 className='one leading-1'>{m.name}</h2>
            <h2 className='one leading-1'>{m.name}</h2>
          </div>
        </Link>)}
        <div>
          <div onClick={() => setisOpen(true)} className='cursor-pointer effecttxt overflow-hidden sm:h-[3.3vw] md:h-[2vw] lg:h-[1.6vw] xl:h-[1.2vw]'>
            <h2 className='one leading-1'>contact</h2>
            <h2 className='one leading-1'>contact</h2>
          </div>
        </div>
      </div>
      <h2 onClick={() => setisOpenm(true)} className='block sm:hidden text-white font-[font6] text-[4vw]'>Menu</h2>
      {/* <div ref={navigation} style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} className='menu-pg sm:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#111111] flex flex-col justify-between pb-3'>
        <div className={`w-full font-[second]  py-6  px-4 flex text-white  items-center justify-end `}>
          <h4 onClick={() => setisOpenm(false)} className='text-[6vw] font-[font4] sm:hidden'><AiOutlineClose/></h4>
        </div>
        <div className='flex flex-col px-4 text-white items-start'>
          <div className='overflow-hidden'>
            <Link href="/" title='home' className='mtxt inline-block text-[10vw] font-[font6] font-semibold text-white'>Home</Link>
          </div>
          <div className='overflow-hidden'>
            <Link href="/about-us" title='about-us' className='mtxt inline-block text-[10vw] font-[font6] font-semibold text-white'>About</Link>
          </div>
          <div className='overflow-hidden'>
            <Link href="/work" title='work' className='mtxt inline-block text-[10vw] font-[font6] font-semibold text-white'>Work</Link>
          </div>
          <div className='overflow-hidden'>
            <div onClick={() => setisOpen(true)} className='mtxt inline-block text-[10vw] font-[font6] font-semibold text-white'>Contact</div>
          </div>
          <div className='overflow-hidden mt-[8vw]'>
            <Link href="/work" title='work' className='mtxt inline-block text-[4vw] font-[font6] text-white'>Instagram</Link>
          </div>
          <div className='overflow-hidden my-[2vw]'>
            <Link href="/work" title='work' className='mtxt inline-block text-[4vw] font-[font6] text-white'>Behance</Link>
          </div>
          <div className='overflow-hidden'>
            <Link href="/work" title='work' className='mtxt inline-block text-[4vw] font-[font6] text-white'>Linkedin</Link>
          </div>
        </div>
        <div className='border-t w-full border-white/20'>
          <h4 className='text-[5vw] pt-[3vw] font-[styles] text-left px-[3vw] sm:hidden'>WineeMedia</h4>
        </div>
      </div> */}
    </div>
  )
}

export default Navbar