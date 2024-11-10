import gsap from 'gsap'
import React, { createContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

export const contactContext = createContext()

const Transition = ({ children }) => {
    const [isOpen, setisOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})
    const router = useRouter()
    const [displayChildren, setDisplayChildren] = useState(children)
    const curtainRef = useRef(null)
    const [loading, setloading] = useState(0)

    const isHomePage = router.pathname === '/'
    const isAboutPage = router.pathname === '/about'
    const isWorkPage = router.pathname.startsWith('/work')

    const getRouteName = () => {
        if (isHomePage) return 'wineemedia'
        if (isAboutPage) return 'about'
        if (isWorkPage) {
            const workName = router.query.name;
            return workName ? `${workName}` : 'work'
        }
        return ''
    }

    useEffect(() => {
        const animateTransition = () => {
            if (isHomePage) {
                gsap.set(curtainRef.current, {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                })
                const loader = gsap.timeline()
                loader
                .to(".loader-cover",{
                    width:"0",
                    duration:6,
                    onUpdate: () => {
                        // Update loading percentage based on animation progress
                        setloading(Math.min(100, Math.floor(loader.progress() * 100)));
                      },
                })
                .to(curtainRef.current, {
                    onStart:()=>{
                        setloading(100)
                    },
                    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                    duration: 0.8,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        window.scrollTo(0, 0)
                        setDisplayChildren(children)
                    },
                })
            } else {
                gsap.set(curtainRef.current, {
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
                })
                gsap.to(curtainRef.current, {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 0.8,
                    ease: 'power2.inOut'
                }).then(() => {
                    window.scrollTo(0, 0)
                    setDisplayChildren(children)
                    gsap.to(curtainRef.current, {
                        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                        duration: 0.8,
                        ease: 'power2.inOut'
                    })
                })
            }
        }

        animateTransition()
    }, [children, isHomePage, isAboutPage, isWorkPage])

    let validationErrors = {}
    const handleSubmit = (e) => {
        e.preventDefault()

        // Email validation
        if (!email) {
            validationErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Email address is invalid'
        }

        // Subject validation
        if (!subject) {
            validationErrors.subject = 'Subject is required'
        }

        // Message validation
        if (!message) {
            validationErrors.message = 'Message cannot be empty'
        }

        // If there are errors, set them; otherwise, proceed
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({})
            // Process the form (e.g., send it to an API)
            console.log('Form submitted:', { email, subject, message })
            alert('Message sent successfully!')
            // Optionally, reset form fields
            setEmail('')
            setSubject('')
            setMessage('')
            setisOpen(false)
        }
    }

    const validateField = (field, value) => {
        if (!value) return { error: `${field} is required`, color: 'text-red-600' }
        return { error: '', color: 'text-white' }
    }

    return (
        <contactContext.Provider value={[isOpen, setisOpen]}>
            <div className="relative overflow-x-hidden">
                {displayChildren}
                {isOpen && <>
                    <div id='contact-page' className='w-full h-screen fixed top-0 left-0 z-[99] flex items-center justify-center'>
                        <div className='w-[50%] overflow-hidden bg-white/10 rounded-2xl flex flex-col' style={{ backdropFilter: "blur(50px)" }}>
                            <div className='w-full bg-[#ffffff] px-[1vw] py-[.3vw] flex items-center justify-between'>
                                <div className='flex gap-[.3vw]'>
                                    <div className='w-[1vw] h-[1vw] bg-red-600 rounded-full'></div>
                                    <div className='w-[1vw] h-[1vw] bg-[#F3BF49] rounded-full'></div>
                                    <div className='w-[1vw] h-[1vw] bg-[#58595B] rounded-full'></div>
                                </div>
                                <i onClick={() => {
                                    setErrors({}); setisOpen(false);
                                    setEmail('')
                                    setSubject('')
                                    setMessage('')
                                }} className="cursor-pointer ri-close-circle-fill text-[1.5vw] text-black"></i>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='w-full p-[1.5vw] font-[font3]'>
                                    <div className='w-full text-white text-[1vw] flex items-center border-b border-white/40 pb-[1vw]'>
                                        <h2>To</h2>
                                        <span className='bg-white/20 rounded-md mx-[.5vw] px-[.5vw] flex items-center gap-[.5vw]'>
                                            <div className='w-[1vw] h-[1vw] bg-white rounded-full text-black flex items-center justify-center text-[.8vw] font-[font5]'>w</div>
                                            wineemedia</span>
                                        <h2>(hello@wineemedia-society.fr)</h2>
                                    </div>
                                    <div className={`w-full text-white text-[1vw] flex items-center border-b border-white/40`}>
                                        {errors.email && <div className='w-[.6vw] h-[.6vw] bg-red-600 rounded-full mr-[.5vw]'></div>}
                                        <h2>From</h2>
                                        <input
                                            className={`ml-[.7vw] outline-none bg-transparent text-white w-full py-[1vw] ${validateField('email', email).color}`}
                                            type="email"
                                            placeholder='your@email.com'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className={`w-full text-white text-[1vw] flex items-center border-b border-white/40`}>
                                        {errors.subject && <div className='w-[.6vw] h-[.6vw] bg-red-600 rounded-full mr-[.5vw]'></div>}
                                        <h2>Subject</h2>
                                        <input
                                            className={`ml-[.7vw] outline-none bg-transparent text-white w-full py-[1vw] ${validateField('subject', subject).color}`}
                                            type="text"
                                            placeholder='A cool subject'
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                        />
                                    </div>
                                    <textarea
                                        className={`w-full outline-none bg-transparent text-white text-[1vw] flex items-center border-b border-white/40 py-[1vw] h-[35vh] resize-none`}
                                        placeholder='Say something,'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                    <div className='w-full flex items-center justify-between'>
                                        {errors && <div className='text-[1vw] text-red-600'>{errors.email || errors.subject || errors.message}</div>}
                                        <button type="submit" className='py-[.8vw] text-white bg-gray-500/30 mt-[1.5vw] rounded-md text-[1vw] px-[2.3vw]'>Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </>}
                <div id='curtain' ref={curtainRef}
                    style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                    className="w-full h-screen bg-[#111111] fixed top-0 left-0 z- [999] flex flex-col items-center justify-center"
                >
                    {getRouteName() === "wineemedia" ? <>
                    <div className='relative'>
                        <div className='loader-cover w-full h-full absolute right-0 top-0 bg-[#111111] opacity-[.7]'></div>
                        <h1 className="text-[8vw] sm:text-[4vw] font-[font4] text-white uppercase">{getRouteName()}</h1>
                    </div>
                        <div className='flex items-center justify-between opacity-[.7] gap-[.5vw]'>
                        <h4 className='text-white font-[font4] text-[1vw]  '>Loading...</h4>
                        <div className='w-[2.5vw] text-white flex items-center justify-between'>{loading}<span>%</span></div>
                        </div>

                    </> : <h1 className="text-[8vw] sm:text-[3vw] font-[font4] text-white uppercase">{getRouteName()}</h1>}

                </div>
            </div>
        </contactContext.Provider>
    )
}
export default Transition
