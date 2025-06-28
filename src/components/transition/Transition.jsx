import gsap from "gsap";
import React, { createContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Contact from "../contact/Contact";
import Menu from "../navbar/Menu";

export const contactContext = createContext();

const Transition = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const [isOpenm, setisOpenm] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(null); // Only render when ready
  const [isAnimating, setIsAnimating] = useState(true);

  const router = useRouter();
  const curtainRef = useRef(null);
  const [loading, setloading] = useState(0);

  const isHomePage = router.pathname === "/";
  const isAboutPage = router.pathname === "/about-us";
  const isWorkPage = router.pathname.startsWith("/work");

  const getRouteName = () => {
    if (isHomePage) return "wineemedia";
    if (isAboutPage) return "about";
    if (isWorkPage) {
      const workName = router.query.name;
      return workName ? `${workName}` : "work";
    }
    return "";
  };

  useEffect(() => {
    // Hide content while animating
    setIsAnimating(true);

    const animateTransition = () => {
      if (isHomePage) {
        gsap.set(curtainRef.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        });

        const loader = gsap.timeline();
        loader
          .to(".loader-cover", {
            width: "0",
            duration: 6,
            onUpdate: () => {
              setloading(Math.min(100, Math.floor(loader.progress() * 100)));
            },
          })
          .to(curtainRef.current, {
            onStart: () => setloading(100),
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              setDisplayChildren(children);
              setIsAnimating(false);
              window.scrollTo(0, 0);
            },
          });
      } else {
        gsap.set(curtainRef.current, {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        });

        const tl = gsap.timeline();
        tl.to(curtainRef.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.8,
          ease: "power2.inOut",
        })
          .add(() => {
            setDisplayChildren(children);
            setIsAnimating(false);
            window.scrollTo(0, 0);
          })
          .to(curtainRef.current, {
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            duration: 0.8,
            ease: "power2.inOut",
          });
      }
    };

    animateTransition();
  }, [router.asPath]); // key change here: use `router.asPath` to detect route change

  return (
    <contactContext.Provider value={[isOpen, setisOpen, isOpenm, setisOpenm]}>
      <div className="relative overflow-x-hidden bg-black">
        {/* Content shown only after animation */}
        {!isAnimating && displayChildren}

        {isOpen && <Contact />}
        <Menu />

        {/* Curtain animation */}
        <div
          id="curtain"
          ref={curtainRef}
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          className="w-full h-screen bg-[#111111] fixed top-0 left-0 z-[999] flex flex-col items-center justify-center"
        >
          {getRouteName() === "wineemedia" ? (
            <>
              <div className="relative">
                <div className="loader-cover w-full h-full absolute right-0 top-0 bg-[#111111] opacity-[.7]" />
                <h1 className="text-[8vw] sm:text-[4vw] text-center font-[styles] text-white">
                  WineeMedia
                </h1>
              </div>
              <div className="flex items-center justify-between opacity-[.7] gap-[2vw] sm:gap-[.5vw]">
                <h4 className="text-white font-[heading2] text-[4vw] sm:text-[2.2vw] lg:text-[1vw]">
                  Loading...
                </h4>
                <div className="w-[2.5vw] text-white flex items-center justify-between">
                  {loading}
                  <span>%</span>
                </div>
              </div>
            </>
          ) : (
            <h1 className="text-[8vw] sm:text-[3vw] font-[heading2] w-[90%] sm:w-full text-center text-white uppercase">
              {getRouteName()}
            </h1>
          )}
        </div>
      </div>
    </contactContext.Provider>
  );
};

export default Transition;
