import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="w-fit text-xs bg-nav-background rounded-tr-lg rounded-bl-2xl pt-3 pb-3 pl-9 pr-9 flex gap-9">
      <Link to="/">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header
