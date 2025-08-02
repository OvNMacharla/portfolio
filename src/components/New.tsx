import React, { useEffect, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'
import About from './About/About.tsx'
import Contact from './Contact/Contact.tsx'
import { motion } from 'framer-motion'

import portraitImage from '../assets/profile.png'

const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const iconFloat = {
  animate: (delay: number) => ({
    y: [0, -15, 0],
    opacity: [0.2, 0.8, 0.2],
    transition: {
      duration: 10 + delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
}

const New = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  const { setScrollToAbout } = useOutletContext<{
    setScrollToAbout: React.Dispatch<React.SetStateAction<(() => void) | null>>
  }>()
  const { setScrollToContact } = useOutletContext<{
    setScrollToContact: React.Dispatch<
      React.SetStateAction<(() => void) | null>
    >
  }>()

  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    setScrollToAbout(() => scrollToAbout)
    setScrollToContact(() => scrollToContact)
  }, [setScrollToAbout, setScrollToContact])

  const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = React.useState(false)
    const ref = React.useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setIsVisible(true),
        { threshold: 0.3 },
      )
      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }, [])

    return { ref, isVisible }
  }

  const iconMixedAnimation = {
    animate: (delay: number) => ({
      y: [0, -20, 0],
      rotate: [0, 360],
      opacity: [0.2, 0.8, 0.2],
      transition: {
        y: {
          duration: 8 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        rotate: {
          duration: 12 + delay,
          repeat: Infinity,
          ease: 'linear',
        },
        opacity: {
          duration: 6 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    }),
  }

  const aboutAnim = useScrollAnimation()
  const contactAnim = useScrollAnimation()

  return (
    <div className="bg-[#0f0f0f] relative text-[#eaeaea] px-6 md:px-16 py-16 space-y-32 overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-[#eb4a4a] text-lg font-bold uppercase mb-2 tracking-widest">
            Hey there,
          </h1>
          <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            I&apos;m Ome
          </h2>
          <p className="text-[#eb4a4a] text-lg font-semibold mb-4">
            Full-Stack Developer | MERN & Next.js
          </p>
          <p className="text-[#bfbfbf] text-md leading-relaxed">
            I build performance-optimized, visually rich, and seamless web
            experiences. Let’s collaborate and make something extraordinary.
          </p>
        </div>

        {/* Floating Portrait */}
        <motion.img
          src={portraitImage}
          alt="Ome Portrait"
          className="w-[300px] md:w-[400px] rounded-lg border-[3px] border-[#eb4a4a] shadow-[0_0_25px_rgba(235,74,74,0.4)]"
          variants={floatVariants}
          animate="animate"
        />
      </div>

      {/* About Section */}
      <motion.div
        ref={aboutAnim.ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: aboutAnim.isVisible ? 1 : 0,
          y: aboutAnim.isVisible ? 0 : 100,
        }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <div ref={aboutRef}>
          <About />
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        ref={contactAnim.ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: contactAnim.isVisible ? 1 : 0,
          y: contactAnim.isVisible ? 0 : 100,
        }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <div ref={contactRef}>
          <Contact />
        </div>
      </motion.div>
    </div>
  )
}

export default New
