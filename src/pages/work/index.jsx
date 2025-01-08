import Footer from '@/components/footer/Footer'
import Section1 from '@/components/work/Section1'
import React, { useEffect } from 'react'


const index = () => {

  useEffect(() => {
    document.title = "WineeMedia | Work"
  }, [])

  return (
    <div className='relative bg-black'>
      <Section1 />
      <Footer />
    </div>
  )
}

export default index