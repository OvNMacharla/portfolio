import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Emoji from '../../assets/MyEmoji_20240724_182829_0.png'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

interface HeaderProps {
  onScrollToAbout: () => void
  onScrollToContact: () => void
}

const Header: React.FC<HeaderProps> = ({
  onScrollToAbout,
  onScrollToContact,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const navbarRef = useRef(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !(navbarRef.current as any).contains(event.target)
    ) {
      setIsNavbarOpen(false)
    }
  }

  const navItems = [
    { label: 'About', action: onScrollToAbout, to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', action: onScrollToContact, to: '/' },
    { label: 'Resume', download: true },
    { label: 'Exp & Education', to: '/resume' }
  ]
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/Nagarjuna_full_stack_resume.pdf'
    link.download = 'ovn_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const leftButtons = [
    { name: 'About', onClick: onScrollToAbout },
    { name: 'Projects', to: '/projects' },
  ]

  const rightButtons = [
    { name: 'Contact', onClick: onScrollToContact },
    { name: 'Resume', download: true },
  ]

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, delay: i * 0.1, ease: 'easeOut' },
    }),
    exit: (i: number) => ({
      opacity: 0,
      scale: 0.8,
      y: 10,
      transition: { duration: 0.2, delay: i * 0.05, ease: 'easeIn' },
    }),
  }

  const logoVariants = {
    normal: { scale: 1, letterSpacing: '0.1em' },
    hovered: {
      scale: 1.1,
      letterSpacing: '0.2em',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  }

  return (
    <>
      {/* Mobile Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={Emoji} className="h-10 w-10" alt="Logo" />
            <motion.span
              className="text-white text-xl font-semibold tracking-wide"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              OvN
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.1 }}
                className="text-white text-sm font-medium hover:underline cursor-pointer"
              >
                {item.to ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : item.download ? (
                  <button
                    onClick={handleResumeDownload}
                    className="flex items-center gap-1"
                  >
                    {item.label} <FiDownload />
                  </button>
                ) : (
                  <button onClick={item.action}>{item.label}</button>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsNavbarOpen((prev) => !prev)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isNavbarOpen && (
            <motion.ul
              ref={navbarRef}
              className="md:hidden bg-black text-white px-4 py-3 space-y-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-white/10 pb-2">
                  {item.to ? (
                    <NavLink
                      to={item.to}
                      onClick={() => {
                        item.action?.()        // ✅ Call action if provided
                        setIsNavbarOpen(false) // ✅ Close mobile nav
                      }}
                      className="block"
                    >
                      {item.label}
                    </NavLink>
                  ) : item.download ? (
                    <button
                      onClick={() => {
                        handleResumeDownload()
                        setIsNavbarOpen(false)
                      }}
                      className="flex items-center gap-1"
                    >
                      {item.label} <FiDownload />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        item.action && item.action()
                        setIsNavbarOpen(false)
                      }}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </header>

      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md shadow-sm hidden md:flex">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-center">
            <motion.div
              className="flex items-center cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={isHovered ? 'hovered' : 'normal'}
              variants={logoVariants}
            >
              {/* Left Buttons */}
              <div className="flex items-center mr-4">
                <AnimatePresence>
                  {isHovered &&
                    leftButtons.map((btn, index) => (
                      <motion.div
                        key={btn.name}
                        custom={index}
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="px-3 py-2 mx-1 text-sm font-medium"
                      >
                        {btn.to ? (
                          <Link to={btn.to} className="hover:underline">
                            {btn.name}
                          </Link>
                        ) : (
                          <button
                            onClick={btn.onClick}
                            className="hover:underline"
                          >
                            {btn.name}
                          </button>
                        )}
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>

              {/* Logo */}
              <motion.h1 className="text-3xl font-bold mx-2 select-none">
                OvN
              </motion.h1>

              {/* Right Buttons */}
              <div className="flex items-center ml-4">
                <AnimatePresence>
                  {isHovered &&
                    rightButtons.map((btn, index) => (
                      <motion.div
                        key={btn.name}
                        custom={index + leftButtons.length}
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="px-3 py-2 mx-1 text-sm font-medium"
                      >
                        {btn.download ? (
                          <button
                            onClick={handleResumeDownload}
                            className="hover:underline flex items-center gap-1"
                          >
                            {btn.name} <FiDownload />
                          </button>
                        ) : (
                          <button
                            onClick={btn.onClick}
                            className="hover:underline"
                          >
                            {btn.name}
                          </button>
                        )}
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
