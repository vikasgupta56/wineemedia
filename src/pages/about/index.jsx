import Benifits from '@/components/about/Benifits'
import OurClient from '@/components/about/OurClient'
import OurTeam from '@/components/about/OurTeam'
import Section1 from '@/components/about/Section1'
import Section2 from '@/components/about/Section2'
import Footer from '@/components/footer/Footer'
import Head from 'next/head'
import React, { useEffect } from 'react'


const About = () => {

  return (
   <>
   <Head>
    <title>WineeMedia | About</title>
    <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
   </Head>
    <div className='relative bg-black'>
        <Section1/>
        <Section2/>
        <Benifits/>
        <OurTeam/>
        <OurClient/>
        <Footer/>
    </div>
   </>
  )
}

export default About