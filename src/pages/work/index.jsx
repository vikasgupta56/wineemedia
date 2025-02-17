import Footer from '@/components/footer/Footer'
import SeoHeader from '@/components/seo/SeoHeader'
import Section1 from '@/components/work/Section1'
import React, { useEffect } from 'react'


const Work = ({meta}) => {

  

  return (
   <>
   <SeoHeader meta={meta}/>
    <div className='relative bg-black'>
      <Section1 />
      <Footer />
    </div>
   </>
  )
}

export default Work;

export async function getStaticProps() {

  const meta = {
    title:
      "WineeMedia | Creative Branding & Digital Marketing services",
    description:
      "Explore WineeMedia’s portfolio of branding, motion graphics, and digital marketing projects, delivering innovative solutions for business growth.",
    keywords: "branding portfolio, creative agency work, influencer marketing case studies, digital marketing services, social media marketing, business growth strategies, cafe branding solutions, event branding, motion graphics design",
    author: "WineeMedia",
    robots: "index,follow",
  };
  return { props: { meta: meta } };
}