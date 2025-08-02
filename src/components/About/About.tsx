import React from 'react'
import { motion } from 'framer-motion'
import {
  workDetails
} from '../../data/UserDetails.ts'
import { WorkDetail } from '../../types/UserDetailsType.ts'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="relative mt-[77px] md:mt-0 px-6 md:px-20 py-10 bg-background min-h-screen"
    >
      {/* What I'm Doing Section */}
      <motion.div variants={itemVariants} className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          What I&apos;m Doing
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light">
          I specialize in building modern, scalable web applications using the MERN stack and Next.js. My focus is on creating seamless user experiences, powerful backend integrations, and performant architectures.
        </p>
      </motion.div>

      {/* Work Details (Emoji Cards) */}
      <motion.div
        variants={containerVariants}
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16"
      >
        {workDetails.map((detail: WorkDetail, index) => (
          <motion.div
            key={detail.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-start p-6 bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 hover:border-rose-500 transition-all duration-300"
          >
            <img src={detail.emoji} alt="emoji" className="w-10 h-10 mr-4" />
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">{detail.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{detail.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* About Me Section */}
      <motion.div
        variants={itemVariants}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-bold mb-2 text-white">About Me</h2>
        <div className="h-1 w-20 bg-rose-500 mx-auto rounded-full mb-6" />
        <p className="text-gray-400 text-lg leading-relaxed font-light">
          I'm a passionate Full-Stack Developer skilled in the MERN stack and Next.js, driven by building polished and performant web applications. With experience in both frontend and backend, I love bringing ideas to life through clean UI, seamless APIs, and modern deployment pipelines. I continuously seek out innovative technologies and collaborative environments where I can grow and solve real-world problems with code.
        </p>
      </motion.div>

      {/* Optional: Add animated avatar or image here */}
      {/* <motion.img
        src={image}
        alt="developer"
        className="w-64 mx-auto rounded-xl shadow-lg"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      /> */}
    </motion.div>
  )
}

export default About