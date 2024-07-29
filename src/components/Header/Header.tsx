import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Emoji from '../../assets/MyEmoji_20240724_182829_0.png'

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navbarRef = useRef(null)

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavbarOpen(false)
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <>
      <div
        ref={navbarRef}
        className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 dark:bg-background dark:border-gray-700 z-50"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Emoji} className="h-12" alt="Logo" />
            <span className="self-center text-normal font-semibold whitespace-nowrap dark:text-white">
              O V Nagarjuna
            </span>
          </a>
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isNavbarOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isNavbarOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-content-background md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-content-background md:dark:bg-content-background dark:border-gray-700">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="text-blue-700 dark:text-blue-500"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsNavbarOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  activeClassName="text-blue-700 dark:text-blue-500"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsNavbarOpen(false)}
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  activeClassName="text-blue-700 dark:text-blue-500"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsNavbarOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="text-blue-700 dark:text-blue-500"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsNavbarOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-fit font-semibold bg-nav-background rounded-tr-lg rounded-bl-2xl pt-3 pb-3 pl-9 pr-9 md:flex hidden gap-9">
        <Link to="/" className="hover:underline">
          About
        </Link>
        <Link to="/resume" className="hover:underline">
          Resume
        </Link>
        <Link to="/projects" className="hover:underline">
          Projects
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </>
  )
}

export default Header
