import React, { useContext, useRef, useState } from 'react'
import { contactContext } from '../transition/Transition'
import gsap from 'gsap'

const Contact = () => {
    const [isOpen, setisOpen] = useContext(contactContext)
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})

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
    const contactRef = useRef(null)

    return (
        <>
            <div onClick={() => {
                setErrors({})
                setEmail('')
                setSubject('')
                setMessage('')
                gsap.to("#contact-page", {
                    scale: .8,
                    opacity: 0,
                    duration: .4,
                    y: "50vh",
                    onComplete: () => {
                        setisOpen(false)
                    }
                })

            }} className='w-full h-screen  fixed top-0 left-0 z-40'></div>
            <div id='contact-page' ref={contactRef} className='fixed top-1/2 left-1/2 border border-zinc-800 -translate-x-1/2 -translate-y-1/2 z-[99] w-full sm:w-[70%] md:w-[50%] h-full sm:h-fit overflow-hidden bg-black/50 sm:rounded-2xl flex flex-col' style={{ backdropFilter: "blur(50px)" }}>
                <div className='dots relative w-full bg-[#222222] px-[3vw] sm:px-[1vw] py-[4vw] sm:py-[1.7vw] md:py-[.9vw] flex items-center justify-between'>
                    <div className=' flex gap-[4vw] sm:gap-[.4vw]'>
                        <div onClick={() => {
                            setErrors({})
                            setEmail('')
                            setSubject('')
                            setMessage('')
                            gsap.to("#contact-page", {
                                scale: .8,
                                opacity: 0,
                                duration: .4,
                                y: "50vh",
                                onComplete: () => {
                                    setisOpen(false)
                                }
                            })

                        }} className='w-[4vw] sm:w-[1.5vw]  md:w-[1vw] h-[4vw] sm:h-[1.5vw] md:h-[1vw] bg-red-600 rounded-full flex items-center justify-center text-[.8vw] cursor-pointer'><i className="ri-close-fill w-[4vw] sm:w-[1.5vw]  md:w-[1vw] h-[4vw] sm:h-[1.5vw] md:h-[1vw] flex items-center justify-center opacity-0"></i></div>
                        <div onClick={() => {
                            setErrors({})
                            setEmail('')
                            setSubject('')
                            setMessage('')
                            gsap.to("#contact-page", {
                                scale: .8,
                                opacity: 0,
                                duration: .4,
                                y: "50vh",
                                onComplete: () => {
                                    setisOpen(false)
                                }
                            })

                        }} className='w-[4vw] sm:w-[1.5vw]  md:w-[1vw] h-[4vw] sm:h-[1.5vw] md:h-[1vw] bg-[#F3BF49] rounded-full flex items-center justify-center text-[.8vw] cursor-pointer'><i className="ri-subtract-line  w-[4vw] sm:w-[1.5vw]  md:w-[1vw] h-[4vw] sm:h-[1.5vw] md:h-[1vw] flex items-center justify-center opacity-0"></i></div>
                        <div className='w-[4vw] sm:w-[1.5vw]  md:w-[1vw] h-[4vw] sm:h-[1.5vw] md:h-[1vw] bg-[#58595B] rounded-full'></div>
                    </div>
                    <h4 className='text-white font-[font6] text-[.9vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Get in touch</h4>
                    <button onClick={() => {
                        setErrors({})
                        setisOpen(false)
                        setEmail('')
                        setSubject('')
                        setMessage('')
                    }} className='text-white text-[4vw] font-[font4] sm:hidden'>Close</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='w-full p-[1.5vw] font-[font3] pt-[10vw] sm:pt-[2vw] md:pt-[1.5vw]'>
                        <div className='w-full text-white text-[3.5vw] sm:text-[1.7vw] md:text-[1vw] flex items-center border-b border-white/40 pt-[5vw] sm:pt-[1vw] pb-[5vw] sm:pb-[1vw]'>
                            <h2>To</h2>
                            <span className='bg-white/20 rounded-md mx-[.5vw] px-[2vw] sm:px-[.5vw] flex items-center gap-[.5vw]'>
                                <div className='w-[1vw] h-[1vw] bg-white rounded-full text-black flex items-center justify-center text-[.8vw] font-[font5]'><img className='w-[75%] h-[75%] object-contain mix-blend-difference' src="/Sub-logo.png"  alt="" /></div>
                                wineemedia</span>
                            <h2>(info@wineemedia.com)</h2>
                        </div>
                        <div className={`w-full text-white text-[3.5vw] sm:text-[1.7vw] md:text-[1vw] flex items-center border-b border-white/40`}>
                            {errors.email && <div className='w-[5vw] sm:w-[.6vw] h-[4vw] sm:h-[.6vw] bg-red-600 rounded-full mr-[3vw] sm:mr-[.5vw]'></div>}
                            <h2>From</h2>
                            <input
                                className={`ml-[.7vw] outline-none bg-transparent text-white w-full py-[5vw] sm:py-[2vw] md:py-[1vw] ${validateField('email', email).color}`}
                                type="email"
                                placeholder='your@email.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={`w-full text-white text-[3.5vw] sm:text-[1.7vw] md:text-[1vw] flex items-center border-b border-white/40`}>
                            {errors.subject && <div className='w-[5vw] sm:w-[.6vw] h-[4vw] sm:h-[.6vw] bg-red-600 rounded-full mr-[3vw] sm:mr-[.5vw]'></div>}
                            <h2>Subject</h2>
                            <input
                                className={`ml-[.7vw] outline-none bg-transparent text-white w-full py-[5vw] sm:py-[2vw] md:py-[1vw] ${validateField('subject', subject).color}`}
                                type="text"
                                placeholder='A cool subject'
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <textarea
                            className={`w-full outline-none bg-transparent text-white text-[3.5vw] sm:text-[1.7vw] md:text-[1vw] flex items-center border-b border-white/40 py-[1vw] h-[30vh] resize-none`}
                            placeholder='Say something,'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <div className='w-full flex items-center justify-between mt-[20vh] sm:mt-[2vw] md:mt-0'>
                            {errors && <div className='text-[3.5vw] sm:text-[1.7vw] md:text-[1vw] text-red-600'>{errors.email || errors.subject || errors.message}</div>}
                            <button type="submit" className='w-full sm:w-fit py-[3vw] sm:py-[.9vw] text-white bg-gray-500/30 mt-[5vw] sm:mt-[1.5vw] rounded-xl text-[4vw] sm:text-[2vw] md:text-[1vw] px-[8vw] sm:px-[2.5vw]'>Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact