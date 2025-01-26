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

import image from '../../assets/image1.jpg';
const About = () => (
  <div className="relative">
    <div className="pt-5 md:flex">
      <div>
        <h1 className="text-[45px] font-[500]">What I&apos;m Doing</h1>
        <p className='text-[#808080] font-[400]'>Building dynamic and scalable web applications using the MERN stack and Next.js, focusing on creating user-friendly interfaces, seamless API integrations, and efficient server-side solutions.</p></div>
      <div className="flex flex-wrap ">
        {workDetails.map((detail: WorkDetail) => (
          <div
            key={detail.id}
            className="p-4  flex  m-3"
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


    <div className='md:flex'>
      <div>
        <span className="text-4xl font-semibold">About Me</span>
        <div
          className="bg-[#eb4a4a] h-1.5 rounded-full mt-5"
          style={{ width: '5%' }}
        ></div>
        <p className="pt-4 text-[#808080] font-[400]">
          I am a passionate Full-stack Developer with expertise in the MERN stack and Next.js, dedicated to building dynamic, scalable, and user-friendly web applications. With a strong foundation in both front-end and back-end development, I focus on creating seamless user experiences, efficient API integrations, and optimizing performance. Currently, I am working on innovative projects that combine my skills in React, Node.js, and cloud technologies. Always eager to learn and grow, I aim to contribute to impactful projects and collaborate with teams to solve complex challenges in web development.
        </p>
      </div>
      <img src={image} className='w-[300px]' />
    </div>


    {/* <div className="pt-5">
      <span className="text-lg font-semibold">Certifications</span>
      <div className="flex flex-wrap ">
        {certifications.map((detail: Certification) => (
          <div
            key={detail.id}
            onClick={() => window.open(detail.link)}
            className="p-4 md:w-[47%] w-screen flex border border-border-color rounded-lg p-2 shadow-md bg-border-background hover:border-button hover:cursor-pointer m-3"
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
            className="p-4 md:w-[47%] flex border border-border-color rounded-lg p-2 shadow-md bg-border-background m-3"
          >
            <div>
              <p className="font-bold text-sm">{detail.title}</p>
              <p className="text-sm text-cap-text">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div> */}
  </div>
)

export default About
