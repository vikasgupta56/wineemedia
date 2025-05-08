import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const StepsSection = ({ mainRef, benifitsRef }) => {

    const values = [
        {
            number: "1",
            title: "Transparenz",
            description:
                "Wir legen grossen Wert auf Transparenz in all unseren Prozessen. Unsere Kunden werden stets über den aktuellen Stand ihrer Projekte informiert und in alle wichtigen Entscheidungen einbezogen. Offene Kommunikation und klare Informationen sind für uns die Grundlage einer vertrauensvollen Zusammenarbeit."
        },
        {
            number: "2",
            title: "Kreativität",
            description:
                "Unsere Arbeit basiert auf kreativen Konzepten, die individuell auf die Bedürfnisse unserer Kunden zugeschnitten sind. Wir denken innovativ und setzen neue Maßstäbe."
        },
        {
            number: "3",
            title: "Qualität",
            description:
                "Wir liefern hochwertige Ergebnisse durch präzises Arbeiten, technisches Know-how und höchste Ansprüche an unsere Leistungen."
        },
        {
            number: "4",
            title: "Zuverlässigkeit",
            description:
                "Termine werden bei uns eingehalten. Unsere Kunden können sich darauf verlassen, dass wir unsere Zusagen einhalten – ohne Kompromisse."
        },
        {
            number: "5",
            title: "Partnerschaft",
            description:
                "Wir sehen unsere Kunden als Partner. Nur gemeinsam können nachhaltige und erfolgreiche Projekte entstehen."
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