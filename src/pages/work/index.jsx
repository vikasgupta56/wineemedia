import Footer from '@/components/footer/Footer'
import Section1 from '@/components/work/Section1'
import React, { useEffect } from 'react'


const index = () => {

  

  return (
   <>
    <Head>
    <title>WineeMedia | Work</title>
    <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
   </Head>
    <div className='relative bg-black'>
      <Section1 />
      <Footer />
    </div>
   </>
  )
}

export default index