// src/data/userDetails.ts
import {
  UserDetailsType,
  WorkDetail,
  EducationDetail,
  ExperienceDetail,
  SkillsDetail,
} from '../types/UserDetailsType.ts'
import web from '../assets/icons/web.svg'
import phoneIcon from '../assets/icons/phone.svg'
import emailIcon from '../assets/icons/email.svg'
import mapIcon from '../assets/icons/map.svg'
import calenderIcon from '../assets/icons/calender.svg'
import book from '../assets/icons/book.svg'

export const UserDetails: UserDetailsType = {
  email: {
    id: '1',
    source: 'EMAIL',
    value: 'omenagarjuna@gmail.com',
    emoji: emailIcon,
  },
  phone: {
    id: '2',
    source: 'PHONE',
    value: '+91 9121627633',
    emoji: phoneIcon,
  },
  birthday: {
    id: '3',
    source: 'BIRTHDAY',
    value: 'Nov 03, 2001',
    emoji: calenderIcon,
  },
  location: {
    id: '4',
    source: 'LOCATION',
    value: 'Repalle, Andhra Pradesh, INDIA',
    emoji: mapIcon,
  },
}

export const workDetails: WorkDetail[] = [
  {
    id: '1',
    title: 'Web Development',
    description:
      'Built and maintained dynamic websites using React and Node.js.',
    emoji: web,
  },
  {
    id: '2',
    title: 'Script Writing',
    description: 'Created engaging scripts for digital platforms and media.',
    emoji: book,
  },
  {
    id: '3',
    title: 'Mobile Development',
    description:
      'Developed mobile apps for iOS and Android using React Native.',
    emoji: phoneIcon,
  },
]

export const educationDetails: EducationDetail[] = [
  {
    id: '1',
    institution: 'GIET Engineering Collage, Rajahmundry',
    degree: 'Bachelor of Technology in Mechnical Engineering',
    year: '2020-2023',
  },
  {
    id: '2',
    institution: 'A.A.N.M & V.V.R.S.R Polytechnic College, Gudlavalleru',
    degree: 'Diploma in Mechnical Engineering',
    year: '2017-2020',
  },
  {
    id: '2',
    institution: 'S.P.B.M.Z.P.H.School, Peteru',
    degree: 'Secondary School Certificate',
    year: '2017',
  },
]

export const experienceDetails: ExperienceDetail[] = [
  {
    id: '1',
    title: 'Software Development Engineer Intern',
    company: 'Kasspro Enterprises',
    location: 'Chennai',
    period: 'Dec 2022 - June 2023',
    responsibilities: [
      'Collaborated with the development, testing, and support teams to ensure the quality of all phases of web development and redesign the UI using HTML, CSS, Jquery, and Java.',
      'Improved website performance and user experience by implementing responsive design and optimizing page load times.',
      'Developed new features and resolved bugs using JavaScript and React JS.',
    ],
  },
  {
    id: '2',
    title: 'Front End Developer',
    company: 'Tata Consultancy Services',
    location: 'Kolkata',
    period: 'June 2023 - Present',
    responsibilities: [
      'Collaborated with cross-functional teams for end-to-end web development quality.',
      'Enhanced website performance with responsive design, optimizing page load times.',
      'Implemented new features, API integrations, and bug fixes using JavaScript and React JS.',
    ],
  },
]

export const skillsDetails: SkillsDetail[] = [
  {
    id: '1',
    skill: 'HTML,CSS',
    percentage: '90%',
  },
  {
    id: '2',
    skill: 'JAVASCRIPT',
    percentage: '80%',
  },
  {
    id: '3',
    skill: 'REACT JS',
    percentage: '75%',
  },
  {
    id: '4',
    skill: 'NODE JS & EXPRESS JS',
    percentage: '75%',
  },
  {
    id: '5',
    skill: 'SQL',
    percentage: '90%',
  },
  {
    id: '4',
    skill: 'PYTHON',
    percentage: '75%',
  },
]
