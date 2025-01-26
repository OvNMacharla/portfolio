import React, { useEffect, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'
import image from '../assets/image.jpg'
import About from './About/About.tsx'
import Contact from './Contact/Contact.tsx'
const New = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)
  // Define the expected context type
  const { setScrollToAbout } = useOutletContext<{
    setScrollToAbout: React.Dispatch<React.SetStateAction<(() => void) | null>>
  }>()
  const { setScrollToContact } = useOutletContext<{
    setScrollToContact: React.Dispatch<
      React.SetStateAction<(() => void) | null>
    >
  }>()

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    setScrollToAbout(() => scrollToAbout)
    setScrollToContact(() => scrollToContact)
  }, [setScrollToAbout])

  return (
    <>
      <div className="md:flex items-center">
        <div className="">
          <h1 className="text-[28px] font-[500]">Hey there,</h1>
          <h1 className="text-[70px] font-[500]">I&apos;m Ome</h1>
          <p className="text-[#eb4a4a] text-[19px] font-[500] mb-3">
            {' '}
            - Full-Stack Developer | MERN & Next.js{' '}
          </p>
          <p className="text-[18px] text-[#808080] font-[400] ">
            Full-stack developer skilled in MERN stack and Next.js, building
            dynamic, scalable, and user-friendly web applications.
          </p>
        </div>
        <img src={image} className="w-[500px]" />
        {/* <div>
                <h1 className='text-5xl'>I&apos;m Ome</h1>
                <p>
                    a Full-Stack Developer | MERN & Next.js Expertise
                </p>
                <p className='text-sm text-[#808080]'>Experienced in building dynamic web applications, specializing in MERN stack and Next.js, with a proven track record in API integration, scalable solutions, and user-friendly designs.</p>
            </div> */}
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  )
}

export default New
