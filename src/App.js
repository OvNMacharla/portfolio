import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About.tsx'
import SideNav from './components/SideNav/SideNav.tsx'
import Layout from './components/Layout.tsx'
import Contact from './components/Contact/Contact.tsx'
import Header from './components/Header/Header.tsx'
import Resume from './components/Resume/Resume.tsx'
import Portfolio from './components/Portfolio/Portfolio.tsx'

function App() {
  return (
    <div className="bg-background w-full p-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
