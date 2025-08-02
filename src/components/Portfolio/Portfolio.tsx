import React from 'react'
import { projects } from '../../data/UserDetails.ts'
import { Project } from '../../types/UserDetailsType.ts'
import book from '../../assets/icons/book.svg'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const Portfolio = () => {
  const handleClick = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <motion.section
      className="relative mt-[67px] md:mt-0 px-6 md:px-16 py-16 bg-background min-h-screen"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3 mb-12"
      >
        <img src={book} alt="Projects Icon" className="w-6 h-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project: Project) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            onClick={() => handleClick(project.link)}
            className="cursor-pointer rounded-2xl bg-[#1c1c1c] hover:bg-[#242424] border border-[#333] hover:border-rose-500 transition-all duration-300 shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wide">
                {project.techStack}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Portfolio
