import Benifits from '@/components/about/Benifits'
import OurClient from '@/components/about/OurClient'
import OurTeam from '@/components/about/OurTeam'
import Section1 from '@/components/about/Section1'
import Section2 from '@/components/about/Section2'
import Footer from '@/components/footer/Footer'
import SeoHeader from '@/components/SeoHeader'
import Head from 'next/head'
import React, { useEffect } from 'react'


const About = ({meta}) => {

  return (
   <>
   <SeoHeader meta={meta}/>
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

export default About;

export async function getStaticProps() {
  const meta = {
    title:
      "WineeMedia | About",
    description:
      "WineeMedia is a branding and marketing agency specializing in providing comprehensive online solutions for businesses aiming to enhance their digital presence.",
    keywords: [],
    author: "WineeMedia",
    robots: "index,follow",
  };
  return { props: { meta: meta } };
}
