import React from 'react'
import book from '../../assets/icons/book.svg'
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
  return (
    <div className="relative overflow-auto w-full">
      <p className="text-2xl font-semibold">Resume</p>
      <p className="flex items-center text-xl gap-6 font-medium py-4">
        <span>
          <img className="w-5 h-5" src={book} />
        </span>
        Education
      </p>
      <div className="border-l border-gray-200 ml-2 mt-2 space-y-9">
        {educationDetails.map((detail: EducationDetail) => (
          <div key={detail.id} className="relative">
            <div className="absolute shadow-md left-[-0.4rem] bg-[#fcd303] h-3 w-3 rounded-full"></div>
            <div className="ml-8">
              <p className="font-normal text-base">{detail.institution}</p>
              <p className="text-cap-text ">{detail.year}</p>
              <p className="text-sm text-cap-text">{detail.degree}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="flex items-center text-xl gap-6 font-medium py-4">
        <span>
          <img className="w-5 h-5" src={book} />
        </span>
        Experience
      </p>
      <div className="border-l border-gray-200 ml-2 mt-2 space-y-9">
        {experienceDetails.map((detail: ExperienceDetail) => (
          <div key={detail.id} className="relative">
            <div className="absolute shadow-md left-[-0.4rem] bg-[#fcd303] h-3 w-3 rounded-full"></div>
            <div className="ml-8">
              <p className="font-normal text-base">
                {detail.title} | {detail.company},{detail.location}
              </p>
              <p className="text-cap-text">{detail.period}</p>
              <p className="text-sm text-cap-text">{detail.responsibilities}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xl font-medium py-4">My Skills</p>
      <div className="p-4 border border-border-color rounded-lg p-2 shadow-md bg-border-background m-3">
        {skillsDetails.map((detail: SkillsDetail) => (
          <div key={detail.id}>
            <div className="mb-1 text-sm font-medium dark:text-white">
              {detail.skill}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-[#fcd303] h-1.5 rounded-full"
                style={{ width: `${detail.percentage}` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resume
