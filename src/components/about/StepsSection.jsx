import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const StepsSection = ({ mainRef, benifitsRef }) => {

  const values = [
    {
        number: "1",
        title: "Stunning Visuals",
        description:
            "We create high-quality, visually striking content that captures attention and reflects your brand’s true identity, using the latest tools and techniques."
    },
    {
        number: "2",
        title: "Tailored Service",
        description:
            "From first meeting to final delivery, we offer a fully personalized experience that fits your goals, timeline, and vision."
    },
    {
        number: "3",
        title: "All-in-One Solutions",
        description:
            "Whether it’s product shoots, brand videos, or full campaigns, we handle everything in-house for a seamless process and consistent quality."
    },
    {
        number: "4",
        title: "Smart & Strategic",
        description:
            "We combine creativity with data-driven strategies to deliver content that not only looks great but also performs across platforms."
    },
    {
        number: "5",
        title: "Skilled & Modern Team",
        description:
            "Our experienced professionals stay updated with the latest trends and tech to ensure your brand stands out in a fast-changing digital world."
    }
];


    useEffect(() => {
        if (!benifitsRef.current || !mainRef.current) return;
      
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: benifitsRef.current,
            start: "bottom 90%",
            end: "bottom 80%",
            scrub: 1, // ties the timeline to scroll
          },
        });
      
        tl2
          .to(mainRef.current, {
            backgroundColor: "white",
            duration: .4,
            ease: "power2.inOut",
          }, 0)
          .to(benifitsRef.current, {
            color: "black",
            duration: .4,
            ease: "power2.inOut",
          }, 0)
          .to(".stepSection", {
            color: "black",
            duration: .4,
            ease: "power2.inOut",
          }, 0);

      }, []);
      



    return (
        <div className='stepSection w-full min-h-screen text-white py-[10vw] lg:py-[2vw] xl:py-[0vw] sm:py-0 px-[4vw] sm:px-0'>
            {values.map((item, index) => (
                <div
                    key={index}
                    className={`w-full ${index !== values.length - 1 ? "border-b border-black/30" : ""
                        } flex items-center flex-col sm:flex-row justify-center py-[5vw]`}
                >
                    <div className="flex w-full flex-col sm:flex-row items-start justify-center">
                        <span className="w-full sm:w-[13%]  text-[15vw] sm:text-[8vw] font-[heading2] leading-none">
                            {item.number}
                        </span>
                        <div className="w-full sm:w-[50%] md:w-[60%] lg:w-[50%]">
                            <h4 className=" text-[6vw] my-[2vw] sm:my-0 md:text-[3vw] lg:text-[2vw] font-[heading] leading-none">
                                {item.title}
                            </h4>
                            <p className=" text-[4vw] sm:text-[2vw] md:text-[1.8vw] font-[heading2] tracking-wide lg:text-[1.3vw] xl:text-[1.2vw] mt-[.8vw]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default StepsSection