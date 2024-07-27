import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="w-fit font-semibold bg-nav-background rounded-tr-lg rounded-bl-2xl pt-3 pb-3 pl-9 pr-9 flex gap-9">
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
  )
}

export default Header
