import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  educationDetails,
  experienceDetails,
  skillsDetails,
} from '../../data/UserDetails.ts'
import {
  EducationDetail,
  ExperienceDetail,
  SkillsDetail,
} from '../../types/UserDetailsType.ts'

const Resume = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>(
    'education',
  )

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-background px-6 md:px-20 pt-28 text-white">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-12">
        {['education', 'experience'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as 'education' | 'experience')}
            className={`px-6 py-2 text-md font-medium rounded-full transition-all duration-300 ${
              activeTab === tab
                ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/40'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Timeline Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
        className="relative pl-6 border-l border-zinc-700 mb-20"
      >
        {(activeTab === 'education' ? educationDetails : experienceDetails).map(
          (item: EducationDetail | ExperienceDetail) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="relative pl-8 mb-10"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[0.7rem] top-1 w-4 h-4 bg-yellow-400 border-2 border-black rounded-full shadow-yellow-300 shadow-sm" />

              <div className="space-y-1">
                <h3 className="text-lg font-semibold">
                  {'institution' in item ? item.institution : item.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {'institution' in item
                    ? item.degree
                    : `${item.company}, ${item.location}`}
                </p>
                <p className="text-sm text-gray-500">
                  {'year' in item ? item.year : item.period}
                </p>
                {'responsibilities' in item && (
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1 text-sm">
                    {item.responsibilities.map((res, idx) => (
                      <li key={idx}>{res}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ),
        )}
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold mb-6 text-center"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillsDetails.map((skill: SkillsDetail) => (
            <motion.div key={skill.id} variants={fadeInUp}>
              <p className="mb-1 text-sm text-gray-300">{skill.skill}</p>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.percentage }}
                  transition={{ duration: 1.2 }}
                  className="h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 rounded-full shadow-yellow-400 shadow-sm"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Resume
