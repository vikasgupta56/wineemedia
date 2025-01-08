import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)
const Benifits = () => {

    useEffect(()=>{
        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".select-work2",
              start: "top 75%",
              end: "top 60%",
              scrub: 1,
            }
          })
          tl
            .to(".line-about2", {
              width: "96vw",
              duration: .8,
              ease: "none",
            }, "a")
            .to(".work-txt-about2", {
              transform: "translateY(0)",
              duration: .8,
            }, "a")
      
            gsap.fromTo(".benfit-txt1", {
                y: 10,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration:1,
                scrollTrigger: {
                    trigger: ".benfit-txt1",
                    start: "top 70%",
                    end: "top 40%",
                    scrub: 1,
                }
            })
    },[])

  return (
    <div className='w-full px-[2vw]'>
    <div className='select-work2 relative w-full py-[5vw] md:py-[1.2vw] flex'>
        <div className='overflow-hidden'>
            <h2 className='work-txt-about2 text-white text-[10vw] md:text-[5vw] font-[font6] leading-none' style={{ transform: "translateY(100%)" }}>Benefits</h2>
        </div>
        <div className="line-about2 w-[0] h-[1px] bg-white/60 absolute left-0 bottom-0"></div>
    </div>
    <h2 className='benfit-txt1 text-white font-[font6] w-full md:w-[70%] text-[3vw] md:text-[2vw] capitalize my-[5vw]'>
    At WineeMedia, we believe in more than just delivering services; we craft experiences that connect brands with their audience on a deeper level. Our tailored solutions, innovative strategies, and creative expertise have made us a trusted partner for brands like Daroma and Nexpoze Production. We’re here to help your brand grow, inspire, and thrive in the digital age!
    </h2>
    <div className='w-full flex flex-col md:flex-row gap-[2vw]'>
        <div className='w-full relative'>
            <div className="lineab w-full h-[1px] bg-white/60 top-0 left-0"></div>
            <h3 className='text-white font-[font4] tex-[4vw] sm:text-[3vw] md:text-[1.4vw] my-[5vw] md:my-[1.5vw]'>Exceptional Quality and Creativity</h3>
            <p className='text-[3vw] sm:text-[2vw] md:text-[1vw] text-white/60 font-[font1]'>
                Our team of highly skilled photographers and videographers specialize in creating timeless,
                eye-catching images and videos that leave a lasting impression. We utilize the latest
                technology and innovative techniques to ensure your visuals are not only stunning but also
                uniquely tailored to your vision. Each project is approached with a creative mindset,
                ensuring that the final product is a true reflection of your brand’s identity and values.
            </p>
        </div>
        <div className='w-full relative'>
            <div className="lineab w-full h-[1px] bg-white/60 top-0 left-0"></div>
            <h3 className='text-white font-[font4] tex-[4vw] sm:text-[3vw] md:text-[1.4vw] my-[5vw] md:my-[1.5vw]'>Professional and Personalized Service</h3>
            <p className='text-[3vw] sm:text-[2vw] md:text-[1vw] text-white/60 font-[font1]'>
                We prioritize your needs and preferences, offering personalized services that cater to your
                specific requirements. From the initial consultation to the final delivery, our team is
                dedicated to providing a smooth and enjoyable experience, ensuring your satisfaction every
                step of the way. With years of industry experience, we offer expert advice and guidance to
                help you make the best decisions for your project.
            </p>
        </div>
        <div className='w-full relative'>
            <div className="lineab w-full h-[1px] bg-white/60 top-0 left-0"></div>
            <h3 className='text-white font-[font4] tex-[4vw] sm:text-[3vw] md:text-[1.4vw] my-[5vw] md:my-[1.5vw]'>Versatile and Comprehensive Solutions</h3>
            <p className='text-[3vw] sm:text-[2vw] md:text-[1vw] text-white/60 font-[font1]'>
                Whether you need photography, videography, or a combination of both, we offer a
                comprehensive suite of services to meet all your visual content needs. Our portfolio
                includes a variety of projects, from luxury hotels and resorts to fashion shoots and
                underwater photography, showcasing our versatility and adaptability. We use state-of-the-art
                equipment to ensure the highest quality output, regardless of the project's complexity or
                location.
            </p>
        </div>
    </div>
    <div className='w-full py-[10vw] flex gap-[3vw]'>
    <div className='marquee-about w-fit flex items-center text-white font-[font6] text-[6vw] gap-[3vw] uppercase'>
        <span>-</span>
        <h1 className='whitespace-nowrap'>wineemedia</h1>
        <span>-</span>
        <h1 className='whitespace-nowrap'>wineemedia</h1>
        <span>-</span>
        <h1 className='whitespace-nowrap'>wineemedia</h1>
        <span>-</span>
        <h1 className='whitespace-nowrap'>wineemedia</h1>
    </div>
    <div className='marquee-about w-fit flex items-center text-white font-[font6] text-[6vw] gap-[3vw] uppercase'>
        <span>-</span>
        <h1 className='whitespace-nowrap'>wineemedia</h1>
        <span>-</span>
        <h1 className='whitespace-nowrap'>wineemedia</h1>
        <span>-</span>
        <h1 className='whitespace-nowrap'>wineemedia</h1>
        <span>-</span>
        <h1 className='whitespace-nowrap'>wineemedia</h1>
    </div>
</div>
</div>
  )
}

export default Benifits