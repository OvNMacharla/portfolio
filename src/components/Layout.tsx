// src/components/Layout.tsx

import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav/SideNav.tsx'
import Header from './Header/Header.tsx'
const Layout = () => {
  const [contentHeight, setContentHeight] = useState(window.innerHeight)
  const sideNavRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setContentHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const sideNavHeight = sideNavRef.current?.offsetHeight || 0
  const height = contentHeight > sideNavHeight ? contentHeight : sideNavHeight
  return (
    <div className="md:flex ">
      <div
        className="md:block hidden"
        ref={sideNavRef}
        style={{ height: height }}
      >
        <SideNav />
      </div>
      <div
        style={{ height: height }}
        className="relative md:ml-10 bg-content-background p-5 rounded-lg overflow-auto scrollbar-thin"
      >
        <Outlet />
        <div className="hidden md:absolute md:top-0 md:right-0">
          <Header />
        </div>
      </div>
    </div>
  )
}

export default Layout
