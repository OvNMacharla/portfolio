import React from 'react'
import {
  workDetails,
  certifications,
  appreciations,
} from '../../data/UserDetails.ts'
import {
  Appreciation,
  Certification,
  WorkDetail,
} from '../../types/UserDetailsType.ts'

const About = () => (
  <div className="relative">
    <span className="text-4xl font-semibold">About Me</span>
    <div
      className="bg-[#fcd303] h-1.5 rounded-full mt-5"
      style={{ width: '5%' }}
    ></div>
    <p className="pt-4 text-sm text-cap-text">
      I am Ome Venkata Nagarjuna Macharla, a passionate and experienced software
      development engineer with a strong background in web development. I have
      honed my skills in Python, JavaScript, HTML, CSS, NodeJS, Express JS,
      React JS, and SQLite. I have a proven track record of collaborating with
      cross-functional teams to develop innovative, user-friendly applications.
      <br /> <br /> I worked as a Software Development Engineer Intern at
      Kasspro Enterprises and as a Front End Developer at Tata Consultancy
      Services, focusing on improving website performance and enhancing user
      experience. Certified in Full-stack Development by Nxtwave Disruptive
      Technologies, I also demonstrated leadership as a team lead in the 21st
      Matri Fest GIET. I aim to continue advancing in the field of web
      development and creating impactful digital experiences.
    </p>
    <div className="pt-5">
      <span className="text-lg font-semibold">What i&apos;m Doing</span>
      <div className="flex flex-wrap ">
        {workDetails.map((detail: WorkDetail) => (
          <div
            key={detail.id}
            className="p-4 w-[47%] flex border border-border-color rounded-lg p-2 shadow-md bg-border-background m-3"
          >
            <span>
              <img src={detail.emoji} className="w-10 mr-8" />
            </span>
            <div>
              <p className="font-bold text-sm">{detail.title}</p>
              <p className="text-sm text-cap-text">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="pt-5">
      <span className="text-lg font-semibold">Certifications</span>
      <div className="flex flex-wrap ">
        {certifications.map((detail: Certification) => (
          <div
            key={detail.id}
            onClick={() => window.open(detail.link)}
            className="p-4 w-[47%] flex border border-border-color rounded-lg p-2 shadow-md bg-border-background hover:border-button hover:cursor-pointer m-3"
          >
            <div>
              <p className="font-bold text-sm">{detail.title}</p>
              <p className="text-sm text-cap-text">{detail.issuer}</p>
              <p className="text-sm text-cap-text">{detail.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="pt-5">
      <span className="text-lg font-semibold">Appreciations</span>
      <div className="flex flex-wrap ">
        {appreciations.map((detail: Appreciation) => (
          <div
            key={detail.id}
            className="p-4 w-[47%] flex border border-border-color rounded-lg p-2 shadow-md bg-border-background m-3"
          >
            <div>
              <p className="font-bold text-sm">{detail.title}</p>
              <p className="text-sm text-cap-text">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default About
