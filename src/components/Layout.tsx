// src/components/Layout.tsx

import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav/SideNav.tsx'
import Header from './Header/Header.tsx'
const Layout = () => {
  const [contentHeight, setContentHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setContentHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className="flex">
      <div style={{ height: contentHeight - 64 }}>
        <SideNav />
      </div>
      <div
        style={{ height: contentHeight - 64 }}
        className="relative ml-10 bg-content-background p-5 rounded-lg overflow-auto scrollbar-thin"
      >
        <Outlet />
        <div className="absolute top-0 right-0">
          <Header />
        </div>
      </div>
    </div>
  )
}

export default Layout
