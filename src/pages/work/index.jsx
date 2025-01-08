import Footer from '@/components/footer/Footer'
import SeoHeader from '@/components/SeoHeader'
import Section1 from '@/components/work/Section1'
import Head from 'next/head'
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
      "WineeMedia | Work",
    description:
      "WineeMedia is a branding and marketing agency specializing in providing comprehensive online solutions for businesses aiming to enhance their digital presence.",
    keywords: [],
    author: "WineeMedia",
    robots: "index,follow",
  };
  return { props: { meta: meta } };
}