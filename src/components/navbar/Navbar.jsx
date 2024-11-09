import Link from 'next/link'
import React, { useContext } from 'react'
import { contactContext } from '../transition/Transition'

const Navbar = ({nav}) => {
  const [isOpen, setisOpen] = useContext(contactContext)
  return (
    <div ref={nav} className='w-full z-20 text-white absolute top-0 left-0 flex items-center justify-between py-[4vw] sm:py-[1vw] p-[4vw] sm:p-[2vw]'>
        <Link href="/" className='text-[5vw] sm:text-[1.4vw] font-[font6]'>wineemedia</Link>
        <div className='hidden sm:flex items-start gap-[3vw] capitalize text-[1.2vw] font-[font6]'>
            <Link href="/work">
            <div className='effecttxt overflow-hidden h-[1.3vw]'>
              <h2 className='one leading-1'>work</h2>
              <h2 className='one leading-1'>work</h2>
            </div>
            </Link>

            <Link href="/about">
            <div className='effecttxt overflow-hidden h-[1.3vw]'>
              <h2 className='one leading-1'>about</h2>
              <h2 className='one leading-1'>about</h2>
            </div>
            </Link>
            <div>
            <div onClick={()=>setisOpen(true)} className='effecttxt overflow-hidden h-[1.3vw]'>
              <h2 className='one leading-1'>contact</h2>
              <h2 className='one leading-1'>contact</h2>
            </div>
            </div>
        </div>
        <h2 className='block sm:hidden text-white font-[font6] text-[4vw]'>Menu</h2>
    </div>
  )
}

export default Navbar