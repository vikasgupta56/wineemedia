import Link from 'next/link'
import React from 'react'

const Navbar = ({nav}) => {
  return (
    <div ref={nav} className='w-full z-20 text-white absolute top-0 left-0 flex items-center justify-between py-[1vw] p-[2vw]'>
        <Link href="/" className='text-[1.4vw] font-[font6]'>wineemedia</Link>
        <div className='flex items-start gap-[3vw] capitalize text-[1.2vw] font-[font6]'>
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
            <Link href="/">
            <div className='effecttxt overflow-hidden h-[1.3vw]'>
              <h2 className='one leading-1'>contact</h2>
              <h2 className='one leading-1'>contact</h2>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar