import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { contactContext } from '../transition/Transition'
import gsap from 'gsap'

const Navbar = ({nav}) => {
  const [isOpen, setisOpen] = useContext(contactContext)
  const navigation = useRef()
  const [isOpenm, setisOpenm] = useState(false)

  useEffect(()=>{
    if(navigation.current){
      if(isOpenm){
        var tl = gsap.timeline()
      tl.
      to(navigation.current,{
          clipPath:`polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`
      },"a")
      .from(".mtxt",{
        y:"100%",
        duration:.3,
        stagger:{
          amount:.2
        }
      },"a")
      .from(".cat",{
        x:10,
        opacity:0,
        stagger:{
          amount:.2
        },
        duration:.2
      })
      .from(".mtxtc",{
        y:"100%",
        duration:.5,
      })
      }
      else{
        gsap.to(navigation.current,{
          clipPath:`polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`
        })
      }
    }
  },[isOpenm])

  

  return (
    <div ref={nav} className='w-full  text-white absolute top-0 left-0 z-[99] flex items-center justify-between py-[4vw] sm:py-[2vw] p-[4vw] sm:p-[2vw]'>
        <Link href="/" ><img className='w-[15vw] md:w-[7vw] lg:w-[5vw]' src="/logo.png" alt="" /></Link>
        <div className='hidden sm:flex items-start sm:gap-[6vw] md:gap-[2.5vw] capitalize sm:text-[3vw]  md:text-[1.8vw] lg:text-[1vw] font-[font6]'>
            <Link href="/work">
            <div className='effecttxt overflow-hidden sm:h-[3.3vw] md:h-[2vw] lg:h-[1.2vw]'>
              <h2 className='one leading-1'>work</h2>
              <h2 className='one leading-1'>work</h2>
            </div>
            </Link>

            <Link href="/about">
            <div className='effecttxt overflow-hidden sm:h-[3.3vw] md:h-[2vw] lg:h-[1.2vw]'>
              <h2 className='one leading-1'>about</h2>
              <h2 className='one leading-1'>about</h2>
            </div>
            </Link>
            <div>
            <div onClick={()=>setisOpen(true)} className='cursor-pointer effecttxt overflow-hidden sm:h-[3.3vw] md:h-[2vw] lg:h-[1.2vw]'>
              <h2 className='one leading-1'>contact</h2>
              <h2 className='one leading-1'>contact</h2>
            </div>
            </div>
        </div>
        <h2 onClick={()=>setisOpenm(true)} className='block sm:hidden text-white font-[font6] text-[4vw]'>Menu</h2>
        <div ref={navigation} style={{clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}} className='menu-pg sm:hidden fixed top-0 left-0 w-full h-[100vh] bg-[#111111] flex flex-col justify-between pb-3'>
        <div className={`w-full font-[second]  py-4  px-3 flex text-white border-b border-white items-center `}>
          <h4  onClick={()=>setisOpenm(false)} className='text-[5vw] font-[font4] sm:hidden'>close</h4>
        </div>
        <div className='flex flex-col px-3 text-white items-start'>
          <div className='overflow-hidden'>
          <Link href="/" className='mtxt inline-block text-[10vw] font-[font4] font-semibold text-white'>Home</Link>
          </div>
          <div className='overflow-hidden'>
          <Link href="/about" className='mtxt inline-block text-[10vw] font-[font4] font-semibold text-white'>About</Link>
          </div>
          <div className='overflow-hidden'>
          <Link href="/work" className='mtxt inline-block text-[10vw] font-[font4] font-semibold text-white'>Work</Link>
          </div>
          <div className='overflow-hidden'>
          <div onClick={()=>setisOpen(true)} className='mtxtc inline-block text-[10vw] font-[font4] font-semibold text-white'>Contact</div>
          </div>
        </div>
        <div className='border-t w-full border-white'>
        <h4 className='text-[5vw] font-[font4] pt-[3vw] text-left px-[3vw] sm:hidden uppercase'>wineemedia</h4>
        </div>
      </div>
    </div>
  )
}

export default Navbar