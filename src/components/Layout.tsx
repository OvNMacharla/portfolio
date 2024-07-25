// src/components/Layout.tsx

import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav/SideNav.tsx'
import Header from './Header/Header.tsx'
const Layout = () => {
  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <div className="relative ml-10 bg-content-background w-fit p-5 rounded-lg overflow-auto h-[35rem]">
        <Outlet />
        <div className="absolute top-0 right-0">
          <Header />
        </div>
      </div>
    </div>
  )
}

export default Layout
