// src/data/userDetails.ts
import {
  UserDetailsType,
  WorkDetail,
  EducationDetail,
  ExperienceDetail,
  SkillsDetail,
  Project,
  Certification,
  Appreciation,
} from '../types/UserDetailsType.ts'
import web from '../assets/icons/web.svg'
import phoneIcon from '../assets/icons/phone.svg'
import emailIcon from '../assets/icons/email.svg'
import mapIcon from '../assets/icons/map.svg'
import calenderIcon from '../assets/icons/calender.svg'
import book from '../assets/icons/book.svg'
import flavor from '../assets/flavor-sage.png'
import todo from '../assets/todo.png'
import emoji from '../assets/emoji.png'
import portfolio from '../assets/portfolio.png'
export const UserDetails: UserDetailsType[] = [
  {
    id: '1',
    source: 'EMAIL',
    value: 'omenagarjuna@gmail.com',
    emoji: '',
  },
  {
    id: '2',
    source: 'PHONE',
    value: '+91 9121627633',
    emoji: '',
  },
  {
    id: '3',
    source: 'BIRTHDAY',
    value: 'Nov 03, 2001',
    emoji: '',
  },
  {
    id: '4',
    source: 'LOCATION',
    value: 'Repalle, Andhra Pradesh, INDIA',
    emoji: '',
  },
]

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

export const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio',
    description:
      'A personal portfolio website built with React and Tailwind CSS to showcase my skills and projects.',
    techStack: 'React , Tailwind CSS , TypeScript',
    link: 'https://github.com/OvNMacharla/portfolio',
    image: portfolio,
  },
  {
    id: '2',
    title: 'Flavor Sage',
    description:
      'A recipe recommender website that suggests recipes based on user preferences and machine learning algorithms.',
    techStack: 'React JS , Node.js , Gemini',
    link: 'https://flavor-sage.vercel.app/',
    image: flavor,
  },
  {
    id: '3',
    title: 'Todos Application',
    description:
      'Developed a persistent todo application with CRUD operations, styled using CSS and Bootstrap, and implemented dynamic UI updates with JavaScript.',
    techStack: 'HTML , CSS , JavaScript , Bootstrap',
    link: 'https://ometodoapp.ccbp.tech/',
    image: todo,
  },
  {
    id: '4',
    title: 'Emoji Game',
    description:
      'A game where users click random emojis; the positions of the emojis change with each click, offering an interactive and engaging experience.',
    techStack: 'React , CSS',
    link: 'https://emojiome.ccbp.tech/',
    image: emoji,
  },
]

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Build Your Own Static Website',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued May 2022',
    link: 'https://certificates.ccbp.in/academy/static-website?id=RGMAOXGDXX',
  },
  {
    id: '2',
    title: 'Build Your Own Responsive Website',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued May 2022',
    link: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=OMVIEUOXHI',
  },
  {
    id: '3',
    title: 'Build Your Own Dynamic Web Application',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued May 2022',
    link: 'https://certificates.ccbp.in/academy/dynamic-web-application?id=RRMPRQLLSR',
  },
  {
    id: '4',
    title: 'Programming Foundations with Python',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued Jun 2022',
    link: 'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=RPGAUUSLIF',
  },
  {
    id: '5',
    title: 'Node JS',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued Aug 2022',
    link: 'https://certificates.ccbp.in/academy/node-js?id=OXGISPYRJU',
  },
  {
    id: '6',
    title: 'Introduction to Databases',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued Dec 2022',
    link: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=JVTEZRSMYL',
  },
]

export const appreciations: Appreciation[] = [
  {
    id: '1',
    title: 'Certificate of Appreciation',
    organization: 'Tata Consultancy Services',
    date: 'June 2023',
    description:
      'For significant contribution towards AIB Life - Tata Consultancy Services Ltd Partnership and Go-Live of AIB Life operations in May 2023.',
  },
]
