import Benifits from '@/components/about/Benifits'
import OurClient from '@/components/about/OurClient'
import OurTeam from '@/components/about/OurTeam'
import Section1 from '@/components/about/Section1'
import Section2 from '@/components/about/Section2'
import Footer from '@/components/footer/Footer'
import SeoHeader from '@/components/seo/SeoHeader'
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
      "WineeMedia | Transforming Brands with Creativity & Strategy",
    description:
      "Discover WineeMedia, a leading branding and digital marketing agency, delivering customized marketing strategies to elevate your brand.",
    keywords: "digital marketing agency, branding agency, motion graphics, branding strategies, 3D design, influencer marketing, SEO services, social media campaigns, videography, creative branding, photography services, digital marketing, online presence, videography services, brand transformation, WineeMedia",
    author: "WineeMedia",
    robots: "index,follow",
  };
  return { props: { meta: meta } };
}
