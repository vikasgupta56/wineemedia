import Footer from '@/components/footer/Footer'
import OurWorks from '@/components/home/OurWorks'
import Section1 from '@/components/home/Section1'
import Section3 from '@/components/home/Section3'
import Section4 from '@/components/home/Section4'
import Services from '@/components/home/Services'
import React from 'react'

const index = () => {
  return (
    <div className='relative bg-black'>
      <Section1/>
      <Section3/>
      <Services/>
      <Section4/>
      <OurWorks/>
      <Footer/>
    </div>
  )
}

export default index