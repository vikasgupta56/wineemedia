import React, { useContext, useRef, useState } from 'react'
import { contactContext } from '../transition/Transition'
import gsap from 'gsap'
import Image from 'next/image'
import { toast } from 'react-toastify'

const Contact = () => {
    const [isOpen, setisOpen] = useContext(contactContext)
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const validateField = (name, value) => {
        if (!value) return `${name} is required`
        if (name === 'email' && !value.includes('@')) return 'Email must contain an "@" symbol'
        if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) return 'Email address is invalid'
        return ''
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {
            email: validateField('email', email),
            subject: validateField('subject', subject),
            message: validateField('message', message)
        }

        const hasErrors = Object.values(newErrors).some(err => err)
        if (hasErrors) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        setLoading(true)

        setTimeout(() => {
            console.log('Form submitted:', { email, subject, message })
            toast.success('Message sent successfully. Thank you!')
            setEmail('')
            setSubject('')
            setMessage('')
            setLoading(false)
            setisOpen(false)
        }, 1500)
    }

    const handleFieldChange = (field, value) => {
        const updatedErrors = { ...errors, [field]: '' }
        setErrors(updatedErrors)

        if (field === 'email') setEmail(value)
        if (field === 'subject') setSubject(value)
        if (field === 'message') setMessage(value)
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
            }} className='w-full h-screen fixed top-0 left-0 z-40'></div>

            <div id='contact-page' ref={contactRef} className='fixed top-1/2 left-1/2 border border-zinc-800 -translate-x-1/2 -translate-y-1/2 z-[99] w-full sm:w-[70%] md:w-[50%] h-full sm:h-fit overflow-hidden bg-black/50 sm:rounded-2xl flex flex-col' style={{ backdropFilter: "blur(50px)" }}>
                {/* Header */}
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
                        }} className='w-[4vw] sm:w-[1.5vw] md:w-[1vw] h-[4vw] sm:h-[1.5vw] md:h-[1vw] bg-red-600 rounded-full flex items-center justify-center text-[.8vw] cursor-pointer'>
                            <i className="ri-close-fill w-[4vw] sm:w-[1.5vw] md:w-[1vw] h-[4vw] sm:h-[1.5vw] md:h-[1vw] flex items-center justify-center opacity-0"></i>
                        </div>
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
                        }} className='w-[4vw] sm:w-[1.5vw] md:w-[1vw] h-[4vw] sm:h-[1.5vw] md:h-[1vw] bg-[#F3BF49] rounded-full flex items-center justify-center text-[.8vw] cursor-pointer'>
                            <i className="ri-subtract-line w-[4vw] sm:w-[1.5vw] md:w-[1vw] h-[4vw] sm:h-[1.5vw] md:h-[1vw] flex items-center justify-center opacity-0"></i>
                        </div>
                        <div className='w-[4vw] sm:w-[1.5vw] md:w-[1vw] h-[4vw] sm:h-[1.5vw] md:h-[1vw] bg-[#58595B] rounded-full'></div>
                    </div>
                    <h4 className='text-white font-[font6] text-[4vw] md:text-[.9vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Get in touch</h4>
                    <button onClick={() => {
                        setErrors({})
                        setisOpen(false)
                        setEmail('')
                        setSubject('')
                        setMessage('')
                    }} className='text-white text-[4vw] font-[font4] sm:hidden'>Close</button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className='w-full p-[4vw] md:p-[1.5vw] font-[font3] pt-[10vw] sm:pt-[2vw] md:pt-[1.5vw]'>

                        {/* To line */}
                        <div className='w-full text-white text-[3.5vw] sm:text-[1.7vw] md:text-[1vw] flex items-center border-b border-white/40 pt-[5vw] sm:pt-[1vw] pb-[5vw] sm:pb-[1vw]'>
                            <h2>To</h2>
                            <span className='bg-white/20 rounded-md mx-[.5vw] px-[2vw] sm:px-[.5vw] flex items-center gap-[.5vw]'>
                                <div className='w-[1vw] h-[1vw] bg-white rounded-full text-black flex items-center justify-center text-[.8vw] font-[font5]'>
                                    <Image width={1000} height={1000} className='w-[75%] h-[75%] object-contain mix-blend-difference' src="/Sub-logo.png" alt="" />
                                </div>
                                wineemedia
                            </span>
                            <h2>(info@wineemedia.com)</h2>
                        </div>

                        {/* Email */}
                        <div className='w-full border-b border-white/40'>
                            <div className='text-white text-[3.5vw] sm:text-[1.7vw] md:text-[1vw] flex items-center'>
                                {errors.email && <div className='w-[5vw] sm:w-[.6vw] h-[4vw] sm:h-[.6vw] bg-red-600 rounded-full mr-[3vw] sm:mr-[.5vw]'></div>}
                                <h2>From</h2>
                                <input
                                    className='ml-[.7vw] outline-none bg-transparent text-white w-full py-[5vw] sm:py-[2vw] md:py-[1vw]'
                                    type="email"
                                    placeholder='your@email.com'
                                    value={email}
                                    onChange={(e) => handleFieldChange('email', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className='w-full border-b border-white/40 mt-[4vw] sm:mt-[1vw]'>
                            <div className='text-white text-[3.5vw] sm:text-[1.7vw] md:text-[1vw] flex items-center'>
                                {errors.subject && <div className='w-[5vw] sm:w-[.6vw] h-[4vw] sm:h-[.6vw] bg-red-600 rounded-full mr-[3vw] sm:mr-[.5vw]'></div>}
                                <h2>Subject</h2>
                                <input
                                    className='ml-[.7vw] outline-none bg-transparent text-white w-full py-[5vw] sm:py-[2vw] md:py-[1vw]'
                                    type="text"
                                    placeholder='A cool subject'
                                    value={subject}
                                    onChange={(e) => handleFieldChange('subject', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className='w-full border-b border-white/40 mt-[4vw] sm:mt-[1vw]'>
                            <textarea
                                className='w-full outline-none bg-transparent text-white text-[3.5vw] sm:text-[1.7vw] md:text-[1vw] flex items-center py-[1vw] h-[30vh] resize-none'
                                placeholder='Say something,'
                                value={message}
                                onChange={(e) => handleFieldChange('message', e.target.value)}
                            ></textarea>
                            {/* {errors.message && <div className='text-red-600 text-[3vw] sm:text-[1.3vw] md:text-[.8vw] mt-[1vw]'>{errors.message}</div>} */}
                        </div>

                        {/* Submit Button */}
                        <div className={`w-full flex items-center ${Object.keys(errors).length > 0 ? 'justify-between' : 'justify-end'} mt-[20vh] sm:mt-[2vw] md:mt-0`}>
                            {Object.keys(errors).length > 0 && (
                                <div className='text-[3.5vw] sm:text-[1.7vw] md:text-[1vw] text-red-600'>
                                    {errors.email || errors.subject || errors.message}
                                </div>
                            )}
                            <button
                                type="submit"
                                className='w-full sm:w-fit py-[3vw] outline-none sm:py-[.9vw] text-white bg-gray-500/30 mt-[5vw] sm:mt-[1.5vw] rounded-xl text-[4vw] sm:text-[2vw] md:text-[1vw] px-[8vw] sm:px-[2.5vw]'
                            >
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact
